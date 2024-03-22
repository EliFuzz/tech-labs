package main

func combineWithoutRepetitions(comboOptions []int, comboLength int) [][]int {
	if comboLength == 1 {
		result := make([][]int, len(comboOptions))
		for i, v := range comboOptions {
			result[i] = []int{v}
		}
		return result
	}

	var combos [][]int

	for optionIndex, currentOption := range comboOptions {
		smallerCombos := combineWithoutRepetitions(comboOptions[optionIndex+1:], comboLength-1)

		for _, smallerCombo := range smallerCombos {
			combos = append(combos, append([]int{currentOption}, smallerCombo...))
		}
	}

	return combos
}

func combineWithRepetitions(comboOptions []int, comboLength int) [][]int {
	if comboLength == 1 {
		result := make([][]int, len(comboOptions))
		for i, v := range comboOptions {
			result[i] = []int{v}
		}
		return result
	}

	var combos [][]int

	for optionIndex, currentOption := range comboOptions {
		smallerCombos := combineWithRepetitions(comboOptions[optionIndex:], comboLength-1)

		for _, smallerCombo := range smallerCombos {
			combos = append(combos, append([]int{currentOption}, smallerCombo...))
		}
	}

	return combos
}
