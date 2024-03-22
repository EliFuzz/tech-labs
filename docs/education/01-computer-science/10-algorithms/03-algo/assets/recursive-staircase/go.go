package main

func recursiveStaircaseBruteforce(stairsNum int) int {
	if stairsNum <= 0 {
		return 0
	}

	if stairsNum == 1 || stairsNum == 2 {
		return stairsNum
	}

	return recursiveStaircaseBruteforce(stairsNum-1) + recursiveStaircaseBruteforce(stairsNum-2)
}

func recursiveStaircaseIterative(stairsNum int) int {
	if stairsNum <= 0 {
		return 0
	}

	steps := []int{1, 2}

	if stairsNum <= 2 {
		return steps[stairsNum-1]
	}

	for currentStep := 3; currentStep <= stairsNum; currentStep++ {
		steps[0], steps[1] = steps[1], steps[0]+steps[1]
	}

	return steps[1]
}

func recursiveStaircaseDynamicProgramming(stairsNum int) int {
	if stairsNum < 0 {
		return 0
	}

	steps := make([]int, stairsNum+1)

	steps[0] = 0
	steps[1] = 1
	steps[2] = 2

	if stairsNum <= 2 {
		return steps[stairsNum]
	}

	for currentStep := 3; currentStep <= stairsNum; currentStep++ {
		steps[currentStep] = steps[currentStep-1] + steps[currentStep-2]
	}

	return steps[stairsNum]
}

func recursiveStaircaseMemoization(totalStairs int) int {
	memo := make([]int, totalStairs+1)

	var getSteps func(int) int
	getSteps = func(stairsNum int) int {
		if stairsNum <= 0 {
			return 0
		}

		if stairsNum == 1 || stairsNum == 2 {
			return stairsNum
		}

		if memo[stairsNum] != 0 {
			return memo[stairsNum]
		}

		memo[stairsNum] = getSteps(stairsNum-1) + getSteps(stairsNum-2)

		return memo[stairsNum]
	}

	return getSteps(totalStairs)
}
