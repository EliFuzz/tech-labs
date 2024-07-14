package main

func bruteforceRainTerraces(terraces []int) int {
	waterAmount := 0

	for terraceIndex := 0; terraceIndex < len(terraces); terraceIndex++ {
		leftHighestLevel := 0
		for leftIndex := terraceIndex - 1; leftIndex >= 0; leftIndex-- {
			leftHighestLevel = max(leftHighestLevel, terraces[leftIndex])
		}

		rightHighestLevel := 0
		for rightIndex := terraceIndex + 1; rightIndex < len(terraces); rightIndex++ {
			rightHighestLevel = max(rightHighestLevel, terraces[rightIndex])
		}

		terraceBoundaryLevel := min(leftHighestLevel, rightHighestLevel)
		if terraceBoundaryLevel > terraces[terraceIndex] {
			waterAmount += terraceBoundaryLevel - terraces[terraceIndex]
		}
	}

	return waterAmount
}

func dynamicProgrammingRainTerraces(terraces []int) int {
	waterAmount := 0

	leftMaxLevels := make([]int, len(terraces))
	rightMaxLevels := make([]int, len(terraces))

	leftMaxLevels[0] = terraces[0]
	for terraceIndex := 1; terraceIndex < len(terraces); terraceIndex++ {
		leftMaxLevels[terraceIndex] = max(terraces[terraceIndex], leftMaxLevels[terraceIndex-1])
	}

	rightMaxLevels[len(terraces)-1] = terraces[len(terraces)-1]
	for terraceIndex := len(terraces) - 2; terraceIndex >= 0; terraceIndex-- {
		rightMaxLevels[terraceIndex] = max(terraces[terraceIndex], rightMaxLevels[terraceIndex+1])
	}

	for terraceIndex := 0; terraceIndex < len(terraces); terraceIndex++ {
		currentTerraceBoundary := min(leftMaxLevels[terraceIndex], rightMaxLevels[terraceIndex])

		if currentTerraceBoundary > terraces[terraceIndex] {
			waterAmount += currentTerraceBoundary - terraces[terraceIndex]
		}
	}

	return waterAmount
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
