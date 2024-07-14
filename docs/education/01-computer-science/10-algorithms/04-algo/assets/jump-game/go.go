package main

import (
	"math"
)

func backtrackingJumpGame(numbers []int, startIndex int, currentJumps []int) bool {
	if startIndex == len(numbers)-1 {
		return true
	}

	maxJumpLength := int(math.Min(float64(numbers[startIndex]), float64(len(numbers)-1-startIndex)))

	for jumpLength := maxJumpLength; jumpLength > 0; jumpLength-- {
		nextIndex := startIndex + jumpLength
		currentJumps = append(currentJumps, nextIndex)

		isJumpSuccessful := backtrackingJumpGame(numbers, nextIndex, currentJumps)

		if isJumpSuccessful {
			return true
		}

		currentJumps = currentJumps[:len(currentJumps)-1]
	}

	return false
}

func dpBottomUpJumpGame(numbers []int) bool {
	cellsGoodness := make([]bool, len(numbers))
	cellsGoodness[len(cellsGoodness)-1] = true

	for cellIndex := len(numbers) - 2; cellIndex >= 0; cellIndex-- {
		maxJumpLength := int(math.Min(float64(numbers[cellIndex]), float64(len(numbers)-1-cellIndex)))

		for jumpLength := maxJumpLength; jumpLength > 0; jumpLength-- {
			nextIndex := cellIndex + jumpLength
			if cellsGoodness[nextIndex] {
				cellsGoodness[cellIndex] = true
				break
			}
		}
	}

	return cellsGoodness[0]
}

func dpTopDownJumpGame(numbers []int, startIndex int, currentJumps []int, cellsGoodness []bool) bool {
	if startIndex == len(numbers)-1 {
		return true
	}

	currentCellsGoodness := make([]bool, len(cellsGoodness))
	copy(currentCellsGoodness, cellsGoodness)
	if len(currentCellsGoodness) == 0 {
		for range numbers {
			currentCellsGoodness = append(currentCellsGoodness, false)
		}
		currentCellsGoodness[len(cellsGoodness)-1] = true
	}

	maxJumpLength := int(math.Min(float64(numbers[startIndex]), float64(len(numbers)-1-startIndex)))

	for jumpLength := maxJumpLength; jumpLength > 0; jumpLength-- {
		nextIndex := startIndex + jumpLength

		if !currentCellsGoodness[nextIndex] {
			currentJumps = append(currentJumps, nextIndex)

			isJumpSuccessful := dpTopDownJumpGame(numbers, nextIndex, currentJumps, currentCellsGoodness)

			if isJumpSuccessful {
				return true
			}

			currentJumps = currentJumps[:len(currentJumps)-1]

			currentCellsGoodness[nextIndex] = true
		}
	}

	return false
}

func greedyJumpGame(numbers []int) bool {
	leftGoodPosition := len(numbers) - 1

	for numberIndex := len(numbers) - 2; numberIndex >= 0; numberIndex-- {
		maxCurrentJumpLength := numberIndex + numbers[numberIndex]
		if maxCurrentJumpLength >= leftGoodPosition {
			leftGoodPosition = numberIndex
		}
	}

	return leftGoodPosition == 0
}
