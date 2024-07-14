class ComplexNumber {
  re: number;
  im: number;

  constructor({ re = 0, im = 0 }: { re?: number; im?: number } = {}) {
    this.re = re;
    this.im = im;
  }

  add(addend: ComplexNumber): ComplexNumber {
    return new ComplexNumber({
      re: this.re + addend.re,
      im: this.im + addend.im,
    });
  }

  subtract(subtrahend: ComplexNumber): ComplexNumber {
    return new ComplexNumber({
      re: this.re - subtrahend.re,
      im: this.im - subtrahend.im,
    });
  }

  multiply(multiplicand: ComplexNumber): ComplexNumber {
    return new ComplexNumber({
      re: this.re * multiplicand.re - this.im * multiplicand.im,
      im: this.re * multiplicand.im + this.im * multiplicand.re,
    });
  }

  divide(divider: ComplexNumber): ComplexNumber {
    const finalDivider = divider.re ** 2 + divider.im ** 2;
    const dividerConjugate = this.conjugate(divider);
    const finalDividend = this.multiply(dividerConjugate);
    return new ComplexNumber({
      re: finalDividend.re / finalDivider,
      im: finalDividend.im / finalDivider,
    });
  }

  conjugate(number: ComplexNumber): ComplexNumber {
    return new ComplexNumber({
      re: number.re,
      im: -1 * number.im,
    });
  }

  getRadius(): number {
    return Math.sqrt(this.re ** 2 + this.im ** 2);
  }

  getPhase(inRadians: boolean = true): number {
    let phase = Math.atan(Math.abs(this.im) / Math.abs(this.re));

    if (this.re < 0 && this.im > 0) {
      phase = Math.PI - phase;
    } else if (this.re < 0 && this.im < 0) {
      phase = -(Math.PI - phase);
    } else if (this.re > 0 && this.im < 0) {
      phase = -phase;
    } else if (this.re === 0 && this.im > 0) {
      phase = Math.PI / 2;
    } else if (this.re === 0 && this.im < 0) {
      phase = -Math.PI / 2;
    } else if (this.re < 0 && this.im === 0) {
      phase = Math.PI;
    } else if (this.re > 0 && this.im === 0) {
      phase = 0;
    } else if (this.re === 0 && this.im === 0) {
      phase = 0;
    }

    if (!inRadians) {
      phase = this.radianToDegree(phase);
    }

    return phase;
  }

  getPolarForm(inRadians: boolean = true): { radius: number; phase: number } {
    return {
      radius: this.getRadius(),
      phase: this.getPhase(inRadians),
    };
  }

  private radianToDegree(radian: number): number {
    return radian * (180 / Math.PI);
  }
}
