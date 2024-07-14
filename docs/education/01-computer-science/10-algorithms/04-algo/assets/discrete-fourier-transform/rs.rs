use std::f64::consts::PI;

#[derive(Debug, Clone, Copy)]
struct Complex {
    real: f64,
    imag: f64,
}

impl Complex {
    fn new(real: f64, imag: f64) -> Complex {
        Complex { real, imag }
    }

    fn add(self, other: Complex) -> Complex {
        Complex::new(self.real + other.real, self.imag + other.imag)
    }

    fn subtract(self, other: Complex) -> Complex {
        Complex::new(self.real - other.real, self.imag - other.imag)
    }

    fn multiply(self, other: Complex) -> Complex {
        Complex::new(
            self.real * other.real - self.imag * other.imag,
            self.real * other.imag + self.imag * other.real,
        )
    }
}

// Discrete Fourier Transform (DFT)
fn dft(input_signal: &[f64]) -> Vec<Complex> {
    let n = input_signal.len();
    let mut output = vec![Complex::new(0.0, 0.0); n];

    for k in 0..n {
        for n in 0..n {
            let angle = -2.0 * PI * (k as f64) * (n as f64) / (n as f64);
            output[k] = output[k].add(Complex::new(input_signal[n] * angle.cos(), input_signal[n] * angle.sin()));
        }
    }

    output
}

// Inverse Discrete Fourier Transform (IDFT)
fn idft(input_spectrum: &[Complex]) -> Vec<f64> {
    let n = input_spectrum.len();
    let mut output = vec![0.0; n];

    for n in 0..n {
        for k in 0..n {
            let angle = 2.0 * PI * (k as f64) * (n as f64) / (n as f64);
            output[n] += input_spectrum[k].real * angle.cos() - input_spectrum[k].imag * angle.sin();
        }
    }

    output.iter().map(|&x| x / (n as f64)).collect()
}

// Fast Fourier Transform (FFT)
fn fft(input_signal: &[f64]) -> Vec<Complex> {
    let n = input_signal.len();

    if n <= 1 {
        return input_signal.iter().map(|&x| Complex::new(x, 0.0)).collect();
    }

    let even: Vec<f64> = input_signal.iter().enumerate().filter(|(i, _)| i % 2 == 0).map(|(_, &x)| x).collect();
    let odd: Vec<f64> = input_signal.iter().enumerate().filter(|(i, _)| i % 2 != 0).map(|(_, &x)| x).collect();

    let even_transformed = fft(&even);
    let odd_transformed = fft(&odd);

    let factor: Vec<Complex> = (0..n / 2).map(|k| {
        let angle = -2.0 * PI * (k as f64) / (n as f64);
        Complex::new(angle.cos(), angle.sin())
    }).collect();

    let mut output = vec![Complex::new(0.0, 0.0); n];

    for k in 0..n / 2 {
        let term = odd_transformed[k].multiply(factor[k]);
        output[k] = even_transformed[k].add(term);
        output[k + n / 2] = even_transformed[k].subtract(term);
    }

    output
}
