import kotlin.math.*

data class Complex(val real: Double, val imag: Double) {
    operator fun plus(other: Complex) = Complex(real + other.real, imag + other.imag)
    operator fun minus(other: Complex) = Complex(real - other.real, imag - other.imag)
    operator fun times(other: Complex) = Complex(
            real * other.real - imag * other.imag,
            real * other.imag + imag * other.real
    )
}

// Discrete Fourier Transform (DFT)
fun dft(input: DoubleArray): Array<Complex> {
    val N = input.size
    val output = Array(N) { Complex(0.0, 0.0) }

    for (k in 0 until N) {
        var sumReal = 0.0
        var sumImag = 0.0
        for (n in 0 until N) {
            val angle = -2 * PI * k * n / N
            sumReal += input[n] * cos(angle)
            sumImag += input[n] * sin(angle)
        }
        output[k] = Complex(sumReal, sumImag)
    }

    return output
}

// Inverse Discrete Fourier Transform (IDFT)
fun idft(input: Array<Complex>): DoubleArray {
    val N = input.size
    val output = DoubleArray(N)

    for (n in 0 until N) {
        var sumReal = 0.0
        var sumImag = 0.0
        for (k in 0 until N) {
            val angle = 2 * PI * k * n / N
            sumReal += input[k].real * cos(angle) - input[k].imag * sin(angle)
            sumImag += input[k].real * sin(angle) + input[k].imag * cos(angle)
        }
        output[n] = sumReal / N // Scaling factor 1/N
    }

    return output
}

// Fast Fourier Transform (FFT)
fun fft(input: DoubleArray): Array<Complex> {
    val N = input.size

    if (N == 1) {
        return arrayOf(Complex(input[0], 0.0))
    }

    val even = DoubleArray(N / 2)
    val odd = DoubleArray(N / 2)

    for (i in 0 until N / 2) {
        even[i] = input[2 * i]
        odd[i] = input[2 * i + 1]
    }

    val evenTransformed = fft(even)
    val oddTransformed = fft(odd)

    val output = Array(N) { Complex(0.0, 0.0) }

    for (k in 0 until N / 2) {
        val angle = -2 * PI * k / N
        val exp = Complex(cos(angle), sin(angle))
        val term = oddTransformed[k] * exp

        output[k] = evenTransformed[k] + term
        output[k + N / 2] = evenTransformed[k] - term
    }

    return output
}
