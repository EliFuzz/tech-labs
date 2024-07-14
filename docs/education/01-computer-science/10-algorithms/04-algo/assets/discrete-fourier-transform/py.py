import math

class ComplexNumber:
    def __init__(self, real, imag):
        self.real = real
        self.imag = imag

    def add(self, other):
        return ComplexNumber(self.real + other.real, self.imag + other.imag)

    def subtract(self, other):
        return ComplexNumber(self.real - other.real, self.imag - other.imag)

    def multiply(self, other):
        return ComplexNumber(
            self.real * other.real - self.imag * other.imag,
            self.real * other.imag + self.imag * other.real
        )

# Discrete Fourier Transform (DFT)
def DFT(input_signal):
    N = len(input_signal)
    output = [ComplexNumber(0, 0)] * N

    for k in range(N):
        for n in range(N):
            angle = -2 * math.pi * k * n / N
            output[k] = output[k].add(ComplexNumber(input_signal[n] * math.cos(angle),
                                                    input_signal[n] * math.sin(angle)))

    return output

# Inverse Discrete Fourier Transform (IDFT)
def IDFT(input_spectrum):
    N = len(input_spectrum)
    output = [0] * N

    for n in range(N):
        for k in range(N):
            angle = 2 * math.pi * k * n / N
            output[n] += input_spectrum[k].real * math.cos(angle) - input_spectrum[k].imag * math.sin(angle)

    return [value / N for value in output]

# Fast Fourier Transform (FFT)
def FFT(input_signal):
    N = len(input_signal)

    if N <= 1:
        return input_signal

    even = FFT(input_signal[::2])
    odd = FFT(input_signal[1::2])

    factor = [math.exp(-2j * math.pi * k / N) for k in range(N//2)]

    return [even[k] + factor[k] * odd[k] for k in range(N//2)] + \
           [even[k] - factor[k] * odd[k] for k in range(N//2)]
