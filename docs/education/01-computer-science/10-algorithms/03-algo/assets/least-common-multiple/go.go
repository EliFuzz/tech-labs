package main

import (
	"math"
)

func euclideanAlgorithm(originalA, originalB int) int {
	a := int(math.Abs(float64(originalA)))
	b := int(math.Abs(float64(originalB)))

	if b == 0 {
		return a
	}
	return euclideanAlgorithm(b, a%b)
}

func leastCommonMultiple(a, b int) int {
	if a == 0 || b == 0 {
		return 0
	}
	return int(math.Abs(float64(a*b))) / euclideanAlgorithm(a, b)
}
