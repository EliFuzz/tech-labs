import math

class ComplexNumber:
    def __init__(self, re=0, im=0):
        self.re = re
        self.im = im

    def add(self, addend):
        return ComplexNumber(self.re + addend.re, self.im + addend.im)

    def subtract(self, subtrahend):
        return ComplexNumber(self.re - subtrahend.re, self.im - subtrahend.im)

    def multiply(self, multiplicand):
        return ComplexNumber(
            self.re * multiplicand.re - self.im * multiplicand.im,
            self.re * multiplicand.im + self.im * multiplicand.re
        )

    def divide(self, divider):
        final_divider = divider.re ** 2 + divider.im ** 2
        divider_conjugate = self.conjugate(divider)
        final_dividend = self.multiply(divider_conjugate)
        return ComplexNumber(final_dividend.re / final_divider, final_dividend.im / final_divider)

    def conjugate(self, number):
        return ComplexNumber(number.re, -1 * number.im)

    def get_radius(self):
        return math.sqrt(self.re ** 2 + self.im ** 2)

    def get_phase(self, in_radians=True):
        phase = math.atan(abs(self.im) / abs(self.re))

        if self.re < 0 and self.im > 0:
            phase = math.pi - phase
        elif self.re < 0 and self.im < 0:
            phase = -(math.pi - phase)
        elif self.re > 0 and self.im < 0:
            phase = -phase
        elif self.re == 0 and self.im > 0:
            phase = math.pi / 2
        elif self.re == 0 and self.im < 0:
            phase = -math.pi / 2
        elif self.re < 0 and self.im == 0:
            phase = math.pi
        elif self.re > 0 and self.im == 0:
            phase = 0
        elif self.re == 0 and self.im == 0:
            phase = 0

        if not in_radians:
            phase = math.degrees(phase)

        return phase

    def get_polar_form(self, in_radians=True):
        return self.get_radius(), self.get_phase(in_radians)
