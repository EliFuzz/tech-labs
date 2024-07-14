package main

func backtrackingPowerSetRecursive(originalSet []int, allSubsets [][]int, currentSubSet []int, startAt int) [][]int {
	for position := startAt; position < len(originalSet); position++ {
		currentSubSet = append(currentSubSet, originalSet[position])
		allSubsets = append(allSubsets, append([]int{}, currentSubSet...))

		allSubsets = backtrackingPowerSetRecursive(originalSet, allSubsets, currentSubSet, position+1)

		currentSubSet = currentSubSet[:len(currentSubSet)-1]
	}

	return allSubsets
}

func bitwisePowerSet(originalSet []int) [][]int {
	var subSets [][]int
	numberOfCombinations := 1 << len(originalSet)

	for combinationIndex := 0; combinationIndex < numberOfCombinations; combinationIndex++ {
		var subSet []int

		for setElementIndex := 0; setElementIndex < len(originalSet); setElementIndex++ {
			if combinationIndex&(1<<setElementIndex) != 0 {
				subSet = append(subSet, originalSet[setElementIndex])
			}
		}

		subSets = append(subSets, subSet)
	}

	return subSets
}

func cascadingPowerSet(originalSet []int) [][]int {
	sets := [][]int{{}}

	for numIdx := 0; numIdx < len(originalSet); numIdx++ {
		existingSetsNum := len(sets)

		for setIdx := 0; setIdx < existingSetsNum; setIdx++ {
			set := append([]int{}, sets[setIdx]...)
			set = append(set, originalSet[numIdx])
			sets = append(sets, set)
		}
	}

	return sets
}
