use std::f64::consts::PI;

#[derive(Debug)]
struct ComplexNumber {
    re: f64,
    im: f64,
}

impl ComplexNumber {
    fn new(re: f64, im: f64) -> ComplexNumber {
        ComplexNumber { re, im }
    }

    fn add(&self, addend: &ComplexNumber) -> ComplexNumber {
        ComplexNumber::new(self.re + addend.re, self.im + addend.im)
    }

    fn subtract(&self, subtrahend: &ComplexNumber) -> ComplexNumber {
        ComplexNumber::new(self.re - subtrahend.re, self.im - subtrahend.im)
    }

    fn multiply(&self, multiplicand: &ComplexNumber) -> ComplexNumber {
        ComplexNumber::new(
            self.re * multiplicand.re - self.im * multiplicand.im,
            self.re * multiplicand.im + self.im * multiplicand.re,
        )
    }

    fn divide(&self, divider: &ComplexNumber) -> ComplexNumber {
        let final_divider = divider.re.powf(2.0) + divider.im.powf(2.0);
        let divider_conjugate = self.conjugate(divider);
        let final_dividend = self.multiply(&divider_conjugate);
        ComplexNumber::new(final_dividend.re / final_divider, final_dividend.im / final_divider)
    }

    fn conjugate(&self, number: &ComplexNumber) -> ComplexNumber {
        ComplexNumber::new(number.re, -1.0 * number.im)
    }

    fn get_radius(&self) -> f64 {
        (self.re.powf(2.0) + self.im.powf(2.0)).sqrt()
    }

    fn get_phase(&self, in_radians: bool) -> f64 {
        let mut phase = (self.im / self.re).atan().abs();

        if self.re < 0.0 && self.im > 0.0 {
            phase = PI - phase;
        } else if self.re < 0.0 && self.im < 0.0 {
            phase = -(PI - phase);
        } else if self.re > 0.0 && self.im < 0.0 {
            phase = -phase;
        } else if self.re == 0.0 && self.im > 0.0 {
            phase = PI / 2.0;
        } else if self.re == 0.0 && self.im < 0.0 {
            phase = -PI / 2.0;
        } else if self.re < 0.0 && self.im == 0.0 {
            phase = PI;
        } else if self.re > 0.0 && self.im == 0.0 {
            phase = 0.0;
        } else if self.re == 0.0 && self.im == 0.0 {
            phase = 0.0;
        }

        if !in_radians {
            phase = phase.to_degrees();
        }

        phase
    }

    fn get_polar_form(&self, in_radians: bool) -> (f64, f64) {
        (self.get_radius(), self.get_phase(in_radians))
    }
}
