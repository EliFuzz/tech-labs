package main

import (
	"math"
)

func jumpSearch(arr []int, x int) int {
	n := len(arr)
	step := int(math.Sqrt(float64(n)))
	prev := 0

	for arr[int(math.Min(float64(step), float64(n))-1)] < x {
		prev = step
		step += int(math.Sqrt(float64(n)))
		if prev >= n {
			return -1
		}
	}

	for arr[prev] < x {
		prev++
		if prev == int(math.Min(float64(step), float64(n))) {
			return -1
		}
	}

	if arr[prev] == x {
		return prev
	}

	return -1
}
