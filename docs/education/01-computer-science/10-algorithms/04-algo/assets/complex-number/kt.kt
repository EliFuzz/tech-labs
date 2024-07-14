import kotlin.math.*

class ComplexNumber(private var re: Double = 0.0, private var im: Double = 0.0) {
    fun add(addend: ComplexNumber): ComplexNumber {
        return ComplexNumber(re + addend.re, im + addend.im)
    }

    fun subtract(subtrahend: ComplexNumber): ComplexNumber {
        return ComplexNumber(re - subtrahend.re, im - subtrahend.im)
    }

    fun multiply(multiplicand: ComplexNumber): ComplexNumber {
        return ComplexNumber(
                re * multiplicand.re - im * multiplicand.im,
                re * multiplicand.im + im * multiplicand.re
        )
    }

    fun divide(divider: ComplexNumber): ComplexNumber {
        val finalDivider = divider.re.pow(2) + divider.im.pow(2)
        val dividerConjugate = conjugate(divider)
        val finalDividend = multiply(dividerConjugate)
        return ComplexNumber(finalDividend.re / finalDivider, finalDividend.im / finalDivider)
    }

    fun conjugate(number: ComplexNumber): ComplexNumber {
        return ComplexNumber(number.re, -1 * number.im)
    }

    fun getRadius(): Double {
        return sqrt(re.pow(2) + im.pow(2))
    }

    fun getPhase(inRadians: Boolean = true): Double {
        var phase = atan(abs(im) / abs(re))

        if (re < 0 && im > 0) {
            phase = PI - phase
        } else if (re < 0 && im < 0) {
            phase = -(PI - phase)
        } else if (re > 0 && im < 0) {
            phase = -phase
        } else if (re == 0.0 && im > 0) {
            phase = PI / 2
        } else if (re == 0.0 && im < 0) {
            phase = -PI / 2
        } else if (re < 0 && im == 0.0) {
            phase = PI
        } else if (re > 0 && im == 0.0) {
            phase = 0.0
        } else if (re == 0.0 && im == 0.0) {
            phase = 0.0
        }

        if (!inRadians) {
            phase = Math.toDegrees(phase)
        }

        return phase
    }

    fun getPolarForm(inRadians: Boolean = true): Pair<Double, Double> {
        return Pair(getRadius(), getPhase(inRadians))
    }
}
