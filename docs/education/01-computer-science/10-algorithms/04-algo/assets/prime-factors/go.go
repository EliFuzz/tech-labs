package main

import (
	"math"
)

func primeFactors(n int) []int {
	var factors []int

	for n%2 == 0 {
		factors = append(factors, 2)
		n /= 2
	}

	for factor := 3; factor <= int(math.Sqrt(float64(n))); factor += 2 {
		for n%factor == 0 {
			factors = append(factors, factor)
			n /= factor
		}
	}

	if n > 2 {
		factors = append(factors, n)
	}

	return factors
}
