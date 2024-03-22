package main

import (
    "math"
)

type ComplexNumber struct {
    Real float64
    Imag float64
}

// Discrete Fourier Transform (DFT)

func DFT(input []float64) []ComplexNumber {
    N := len(input)
    output := make([]ComplexNumber, N)

    for k := 0; k < N; k++ {
        var sumReal, sumImag float64
        for n := 0; n < N; n++ {
            angle := -2 * math.Pi * float64(k) * float64(n) / float64(N)
            sumReal += input[n] * math.Cos(angle)
            sumImag += input[n] * math.Sin(angle)
        }
        output[k] = ComplexNumber{Real: sumReal, Imag: sumImag}
    }

    return output
}

// Inverse Discrete Fourier Transform (IDFT)
func IDFT(input []ComplexNumber) []float64 {
    N := len(input)
    output := make([]float64, N)

    for n := 0; n < N; n++ {
        var sumReal, sumImag float64
        for k := 0; k < N; k++ {
            angle := 2 * math.Pi * float64(k) * float64(n) / float64(N)
            sumReal += input[k].Real * math.Cos(angle) - input[k].Imag * math.Sin(angle)
            sumImag += input[k].Real * math.Sin(angle) + input[k].Imag * math.Cos(angle)
        }
        output[n] = sumReal / float64(N) // Scaling factor 1/N
    }

    return output
}

// Fast Fourier Transform (FFT)
func FFT(input []float64) []ComplexNumber {
    N := len(input)

    if N <= 1 {
        result := make([]ComplexNumber, N)
        for i := 0; i < N; i++ {
            result[i] = ComplexNumber{Real: input[i], Imag: 0}
        }
        return result
    }

    even := make([]float64, N/2)
    odd := make([]float64, N/2)

    for i := 0; i < N/2; i++ {
        even[i] = input[2*i]
        odd[i] = input[2*i+1]
    }

    evenTransformed := FFT(even)
    oddTransformed := FFT(odd)

    output := make([]ComplexNumber, N)

    for k := 0; k < N/2; k++ {
        angle := -2 * math.Pi * float64(k) / float64(N)
        expReal := math.Cos(angle)
        expImag := math.Sin(angle)

        termReal := expReal*oddTransformed[k].Real - expImag*oddTransformed[k].Imag
        termImag := expReal*oddTransformed[k].Imag + expImag*oddTransformed[k].Real

        output[k] = ComplexNumber{Real: evenTransformed[k].Real + termReal, Imag: evenTransformed[k].Imag + termImag}
        output[k+N/2] = ComplexNumber{Real: evenTransformed[k].Real - termReal, Imag: evenTransformed[k].Imag - termImag}
    }

    return output
}
