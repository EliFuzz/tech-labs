package main

import (
	"math"
)

type ComplexNumber struct {
	re float64
	im float64
}

func NewComplexNumber(re float64, im float64) *ComplexNumber {
	return &ComplexNumber{re, im}
}

func (c *ComplexNumber) Add(addend *ComplexNumber) *ComplexNumber {
	return NewComplexNumber(c.re+addend.re, c.im+addend.im)
}

func (c *ComplexNumber) Subtract(subtrahend *ComplexNumber) *ComplexNumber {
	return NewComplexNumber(c.re-subtrahend.re, c.im-subtrahend.im)
}

func (c *ComplexNumber) Multiply(multiplicand *ComplexNumber) *ComplexNumber {
	return NewComplexNumber(c.re*multiplicand.re-c.im*multiplicand.im, c.re*multiplicand.im+c.im*multiplicand.re)
}

func (c *ComplexNumber) Divide(divider *ComplexNumber) *ComplexNumber {
	finalDivider := math.Pow(divider.re, 2) + math.Pow(divider.im, 2)
	dividerConjugate := NewComplexNumber(divider.re, -divider.im)
	finalDivident := c.Multiply(dividerConjugate)
	return NewComplexNumber(finalDivident.re/finalDivider, finalDivident.im/finalDivider)
}

func (c *ComplexNumber) Conjugate() *ComplexNumber {
	return NewComplexNumber(c.re, -c.im)
}

func (c *ComplexNumber) GetRadius() float64 {
	return math.Sqrt(math.Pow(c.re, 2) + math.Pow(c.im, 2))
}

func (c *ComplexNumber) GetPhase(inRadians bool) float64 {
	phase := math.Atan(math.Abs(c.im) / math.Abs(c.re))

	if c.re < 0 && c.im > 0 {
		phase = math.Pi - phase
	} else if c.re < 0 && c.im < 0 {
		phase = -(math.Pi - phase)
	} else if c.re > 0 && c.im < 0 {
		phase = -phase
	} else if c.re == 0 && c.im > 0 {
		phase = math.Pi / 2
	} else if c.re == 0 && c.im < 0 {
		phase = -math.Pi / 2
	} else if c.re < 0 && c.im == 0 {
		phase = math.Pi
	} else if c.re > 0 && c.im == 0 {
		phase = 0
	} else if c.re == 0 && c.im == 0 {
		phase = 0
	}

	if !inRadians {
		phase = c.RadianToDegree(phase)
	}

	return phase
}

func (c *ComplexNumber) GetPolarForm(inRadians bool) (float64, float64) {
	return c.GetRadius(), c.GetPhase(inRadians)
}

func (c *ComplexNumber) RadianToDegree(radian float64) float64 {
	return radian * (180 / math.Pi)
}
