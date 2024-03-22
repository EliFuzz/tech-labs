package main

import (
	"math"
)

func BfMaximumSubarray(inputArray []int) []int {
	maxSubarrayStartIndex := 0
	maxSubarrayLength := 0
	var maxSubarraySum *int

	for startIndex := 0; startIndex < len(inputArray); startIndex++ {
		subarraySum := 0
		for arrLength := 1; arrLength <= len(inputArray)-startIndex; arrLength++ {
			subarraySum += inputArray[startIndex+(arrLength-1)]
			if maxSubarraySum == nil || subarraySum > *maxSubarraySum {
				maxSubarraySum = &subarraySum
				maxSubarrayStartIndex = startIndex
				maxSubarrayLength = arrLength
			}
		}
	}

	return inputArray[maxSubarrayStartIndex : maxSubarrayStartIndex+maxSubarrayLength]
}

func DcMaximumSubarraySum(inputArray []int) int {
	var solveRecursively func(int, bool) int
	solveRecursively = func(elementIndex int, mustPick bool) int {
		if elementIndex >= len(inputArray) {
			if mustPick {
				return 0
			}
			return math.MinInt32
		}
		return int(math.Max(
			float64(inputArray[elementIndex]+solveRecursively(elementIndex+1, true)),
			float64(solveRecursively(elementIndex+1, false)),
		))
	}

	return solveRecursively(0, false)
}

func DpMaximumSubarray(inputArray []int) []int {
	maxSum := math.Inf(-1)
	currentSum := 0.0

	maxStartIndex := 0
	maxEndIndex := len(inputArray) - 1
	currentStartIndex := 0

	for currentIndex, currentNumber := range inputArray {
		currentSum += float64(currentNumber)

		if maxSum < currentSum {
			maxSum = currentSum
			maxStartIndex = currentStartIndex
			maxEndIndex = currentIndex
		}

		if currentSum < 0 {
			currentSum = 0
			currentStartIndex = currentIndex + 1
		}
	}

	return inputArray[maxStartIndex : maxEndIndex+1]
}
