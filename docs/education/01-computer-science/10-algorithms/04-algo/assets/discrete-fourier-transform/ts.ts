class ComplexNumber {
  constructor(
    public real: number,
    public imag: number,
  ) {}

  add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + other.real, this.imag + other.imag);
  }

  subtract(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real - other.real, this.imag - other.imag);
  }

  multiply(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real,
    );
  }
}

// Discrete Fourier Transform (DFT)
function DFT(input: number[]): ComplexNumber[] {
  const N = input.length;
  const output: ComplexNumber[] = [];

  for (let k = 0; k < N; k++) {
    let sumReal = 0;
    let sumImag = 0;
    for (let n = 0; n < N; n++) {
      const angle = (-2 * Math.PI * k * n) / N;
      sumReal += input[n] * Math.cos(angle);
      sumImag += input[n] * Math.sin(angle);
    }
    output.push(new ComplexNumber(sumReal, sumImag));
  }

  return output;
}

// Inverse Discrete Fourier Transform (IDFT)
function IDFT(input: ComplexNumber[]): number[] {
  const N = input.length;
  const output: number[] = [];

  for (let n = 0; n < N; n++) {
    let sumReal = 0;
    let sumImag = 0;
    for (let k = 0; k < N; k++) {
      const angle = (2 * Math.PI * k * n) / N;
      sumReal +=
        input[k].real * Math.cos(angle) - input[k].imag * Math.sin(angle);
      sumImag +=
        input[k].real * Math.sin(angle) + input[k].imag * Math.cos(angle);
    }
    output.push(sumReal / N);
  }

  return output;
}

// Fast Fourier Transform (FFT)
function FFT(input: number[]): ComplexNumber[] {
  const N = input.length;

  if (N <= 1) {
    return input.map((val) => new ComplexNumber(val, 0));
  }

  const even: number[] = [];
  const odd: number[] = [];
  for (let i = 0; i < N / 2; i++) {
    even.push(input[2 * i]);
    odd.push(input[2 * i + 1]);
  }

  const evenTransformed = FFT(even);
  const oddTransformed = FFT(odd);

  const output: ComplexNumber[] = [];
  for (let k = 0; k < N / 2; k++) {
    const angle = (-2 * Math.PI * k) / N;
    const exp = new ComplexNumber(Math.cos(angle), Math.sin(angle));

    const term = oddTransformed[k].multiply(exp);

    output.push(evenTransformed[k].add(term));
    output.push(evenTransformed[k].subtract(term));
  }

  return output;
}
