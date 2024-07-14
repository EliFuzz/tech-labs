import java.util.Arrays;

public class FourierTransform {

  // Discrete Fourier Transform (DFT)
  public static Complex[] DFT(double[] input) {
    int N = input.length;
    Complex[] output = new Complex[N];

    for (int k = 0; k < N; k++) {
      double sumReal = 0;
      double sumImag = 0;
      for (int n = 0; n < N; n++) {
        double angle = -2 * Math.PI * k * n / N;
        sumReal += input[n] * Math.cos(angle);
        sumImag += input[n] * Math.sin(angle);
      }
      output[k] = new Complex(sumReal, sumImag);
    }

    return output;
  }

  // Inverse Discrete Fourier Transform (IDFT)
  public static double[] IDFT(Complex[] input) {
    int N = input.length;
    double[] output = new double[N];

    for (int n = 0; n < N; n++) {
      double sumReal = 0;
      double sumImag = 0;
      for (int k = 0; k < N; k++) {
        double angle = 2 * Math.PI * k * n / N;
        sumReal += input[k].real * Math.cos(angle) - input[k].imag * Math.sin(angle);
        sumImag += input[k].real * Math.sin(angle) + input[k].imag * Math.cos(angle);
      }
      output[n] = sumReal / N; // Scaling factor 1/N
    }

    return output;
  }

  // Fast Fourier Transform (FFT)
  public static Complex[] FFT(double[] input) {
    int N = input.length;

    if (N == 1) {
      return new Complex[]{new Complex(input[0], 0)};
    }

    double[] even = new double[N / 2];
    double[] odd = new double[N / 2];

    for (int i = 0; i < N / 2; i++) {
      even[i] = input[2 * i];
      odd[i] = input[2 * i + 1];
    }

    Complex[] evenTransformed = FFT(even);
    Complex[] oddTransformed = FFT(odd);

    Complex[] output = new Complex[N];

    for (int k = 0; k < N / 2; k++) {
      double angle = -2 * Math.PI * k / N;
      Complex exp = new Complex(Math.cos(angle), Math.sin(angle));

      Complex term = oddTransformed[k].multiply(exp);

      output[k] = evenTransformed[k].add(term);
      output[k + N / 2] = evenTransformed[k].subtract(term);
    }

    return output;
  }

  public static class Complex {

    double real;
    double imag;

    public Complex(double real, double imag) {
      this.real = real;
      this.imag = imag;
    }

    public Complex add(Complex other) {
      return new Complex(this.real + other.real, this.imag + other.imag);
    }

    public Complex subtract(Complex other) {
      return new Complex(this.real - other.real, this.imag - other.imag);
    }

    public Complex multiply(Complex other) {
      return new Complex(this.real * other.real - this.imag * other.imag,
          this.real * other.imag + this.imag * other.real);
    }
  }
}
