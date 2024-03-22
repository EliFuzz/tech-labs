fun recursiveStaircaseBruteforce(stairsNum: Int): Int {
    if (stairsNum <= 0) {
        return 0
    }
    if (stairsNum == 1 || stairsNum == 2) {
        return stairsNum
    }
    return recursiveStaircaseBruteforce(stairsNum - 1) + recursiveStaircaseBruteforce(stairsNum - 2)
}

fun recursiveStaircaseIterative(stairsNum: Int): Int {
    if (stairsNum <= 0) {
        return 0
    }
    val steps = intArrayOf(1, 2)
    if (stairsNum <= 2) {
        return steps[stairsNum - 1]
    }
    for (currentStep in 3..stairsNum) {
        steps[0] = steps[1].also { steps[1] += steps[0] }
    }
    return steps[1]
}

fun recursiveStaircaseDynamicProgramming(stairsNum: Int): Int {
    if (stairsNum < 0) {
        return 0
    }
    val steps = IntArray(stairsNum + 1) { 0 }
    steps[1] = 1
    steps[2] = 2
    if (stairsNum <= 2) {
        return steps[stairsNum]
    }
    for (currentStep in 3..stairsNum) {
        steps[currentStep] = steps[currentStep - 1] + steps[currentStep - 2]
    }
    return steps[stairsNum]
}

fun recursiveStaircaseMemoization(totalStairs: Int): Int {
    val memo = mutableMapOf<Int, Int>()

    fun getSteps(stairsNum: Int): Int {
        if (stairsNum <= 0) {
            return 0
        }
        if (stairsNum == 1 || stairsNum == 2) {
            return stairsNum
        }
        if (memo.containsKey(stairsNum)) {
            return memo[stairsNum]!!
        }
        memo[stairsNum] = getSteps(stairsNum - 1) + getSteps(stairsNum - 2)
        return memo[stairsNum]!!
    }

    return getSteps(totalStairs)
}
