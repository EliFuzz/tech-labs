import java.lang.Math;

public class ComplexNumber {

  private double re;
  private double im;

  public ComplexNumber() {
    this.re = 0;
    this.im = 0;
  }

  public ComplexNumber(double re, double im) {
    this.re = re;
    this.im = im;
  }

  public ComplexNumber add(ComplexNumber addend) {
    return new ComplexNumber(this.re + addend.re, this.im + addend.im);
  }

  public ComplexNumber subtract(ComplexNumber subtrahend) {
    return new ComplexNumber(this.re - subtrahend.re, this.im - subtrahend.im);
  }

  public ComplexNumber multiply(ComplexNumber multiplicand) {
    return new ComplexNumber(
        this.re * multiplicand.re - this.im * multiplicand.im,
        this.re * multiplicand.im + this.im * multiplicand.re
    );
  }

  public ComplexNumber divide(ComplexNumber divider) {
    double finalDivider = Math.pow(divider.re, 2) + Math.pow(divider.im, 2);
    ComplexNumber dividerConjugate = this.conjugate(divider);
    ComplexNumber finalDivident = this.multiply(dividerConjugate);
    return new ComplexNumber(
        finalDivident.re / finalDivider,
        finalDivident.im / finalDivider
    );
  }

  public ComplexNumber conjugate(ComplexNumber number) {
    return new ComplexNumber(number.re, -1 * number.im);
  }

  public double getRadius() {
    return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2));
  }

  public double getPhase(boolean inRadians) {
    double phase = Math.atan(Math.abs(this.im) / Math.abs(this.re));

    if (this.re < 0 && this.im > 0) {
      phase = Math.PI - phase;
    } else if (this.re < 0 && this.im < 0) {
      phase = -(Math.PI - phase);
    } else if (this.re > 0 && this.im < 0) {
      phase = -phase;
    } else if (this.re == 0 && this.im > 0) {
      phase = Math.PI / 2;
    } else if (this.re == 0 && this.im < 0) {
      phase = -Math.PI / 2;
    } else if (this.re < 0 && this.im == 0) {
      phase = Math.PI;
    } else if (this.re > 0 && this.im == 0) {
      phase = 0;
    } else if (this.re == 0 && this.im == 0) {
      phase = 0;
    }

    if (!inRadians) {
      phase = radianToDegree(phase);
    }

    return phase;
  }

  public double[] getPolarForm(boolean inRadians) {
    double[] polarForm = new double[2];
    polarForm[0] = this.getRadius();
    polarForm[1] = this.getPhase(inRadians);
    return polarForm;
  }

  private double radianToDegree(double radian) {
    return radian * (180 / Math.PI);
  }
}
