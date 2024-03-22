package main

import (
	"math"
)

func SqrtNewton(x float64) float64 {
	z := x / 2
	for i := 0; i < 10; i++ {
		z -= (z*z - x) / (2 * z)
	}
	return z
}
