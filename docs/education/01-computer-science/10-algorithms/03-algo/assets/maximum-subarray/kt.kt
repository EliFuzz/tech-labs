fun bfMaximumSubarray(inputArray: IntArray): IntArray {
    var maxSubarrayStartIndex = 0
    var maxSubarrayLength = 0
    var maxSubarraySum: Int? = null

    for (startIndex in inputArray.indices) {
        var subarraySum = 0
        for (arrLength in 1..inputArray.size - startIndex) {
            subarraySum += inputArray[startIndex + (arrLength - 1)]
            if (maxSubarraySum == null || subarraySum > maxSubarraySum!!) {
                maxSubarraySum = subarraySum
                maxSubarrayStartIndex = startIndex
                maxSubarrayLength = arrLength
            }
        }
    }

    return inputArray.sliceArray(maxSubarrayStartIndex until maxSubarrayStartIndex + maxSubarrayLength)
}

fun dcMaximumSubarraySum(inputArray: IntArray): Int {
    fun solveRecursively(elementIndex: Int, mustPick: Boolean): Int {
        if (elementIndex >= inputArray.size) {
            return if (mustPick) 0 else Int.MIN_VALUE
        }
        return Math.max(
                inputArray[elementIndex] + solveRecursively(elementIndex + 1, true),
                if (mustPick) 0 else solveRecursively(elementIndex + 1, false)
        )
    }

    return solveRecursively(0, false)
}

fun dpMaximumSubarray(inputArray: IntArray): IntArray {
    var maxSum = Int.MIN_VALUE
    var currentSum = 0

    var maxStartIndex = 0
    var maxEndIndex = inputArray.size - 1
    var currentStartIndex = 0

    inputArray.forEachIndexed { currentIndex, currentNumber ->
        currentSum += currentNumber

        if (maxSum < currentSum) {
            maxSum = currentSum
            maxStartIndex = currentStartIndex
            maxEndIndex = currentIndex
        }

        if (currentSum < 0) {
            currentSum = 0
            currentStartIndex = currentIndex + 1
        }
    }

    return inputArray.sliceArray(maxStartIndex..maxEndIndex)
}
