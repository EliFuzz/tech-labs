// Discrete Fourier Transform (DFT)
function DFT(input) {
  const N = input.length;
  const output = new Array(N);
  const theta = (-2 * Math.PI) / N;

  for (let k = 0; k < N; k++) {
    let sumReal = 0;
    let sumImag = 0;
    for (let n = 0; n < N; n++) {
      const angle = theta * k * n;
      sumReal += input[n] * Math.cos(angle);
      sumImag += input[n] * Math.sin(angle);
    }
    output[k] = { real: sumReal, imag: sumImag };
  }
  return output;
}

// Inverse Discrete Fourier Transform (IDFT)
function IDFT(input) {
  const N = input.length;
  const output = new Array(N);
  const theta = (2 * Math.PI) / N;

  for (let n = 0; n < N; n++) {
    let sumReal = 0;
    let sumImag = 0;
    for (let k = 0; k < N; k++) {
      const angle = theta * k * n;
      sumReal +=
        input[k].real * Math.cos(angle) - input[k].imag * Math.sin(angle);
      sumImag +=
        input[k].real * Math.sin(angle) + input[k].imag * Math.cos(angle);
    }
    output[n] = sumReal / N; // Scaling factor 1/N
  }
  return output;
}

// Fast Fourier Transform (FFT)
function FFT(input) {
  const N = input.length;

  if (N <= 1) {
    return input;
  }

  const even = new Array(N / 2);
  const odd = new Array(N / 2);

  for (let i = 0; i < N / 2; i++) {
    even[i] = input[2 * i];
    odd[i] = input[2 * i + 1];
  }

  const evenTransformed = FFT(even);
  const oddTransformed = FFT(odd);

  const output = new Array(N);

  for (let k = 0; k < N / 2; k++) {
    const angle = (-2 * Math.PI * k) / N;
    const exp = {
      real: Math.cos(angle),
      imag: Math.sin(angle),
    };

    const term = {
      real:
        exp.real * oddTransformed[k].real - exp.imag * oddTransformed[k].imag,
      imag:
        exp.real * oddTransformed[k].imag + exp.imag * oddTransformed[k].real,
    };

    output[k] = {
      real: evenTransformed[k].real + term.real,
      imag: evenTransformed[k].imag + term.imag,
    };

    output[k + N / 2] = {
      real: evenTransformed[k].real - term.real,
      imag: evenTransformed[k].imag - term.imag,
    };
  }

  return output;
}
