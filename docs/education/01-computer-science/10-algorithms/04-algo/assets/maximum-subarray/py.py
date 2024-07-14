def bfMaximumSubarray(inputArray):
    maxSubarrayStartIndex = 0
    maxSubarrayLength = 0
    maxSubarraySum = None

    for startIndex in range(len(inputArray)):
        subarraySum = 0
        for arrLength in range(1, len(inputArray) - startIndex + 1):
            subarraySum += inputArray[startIndex + (arrLength - 1)]
            if maxSubarraySum is None or subarraySum > maxSubarraySum:
                maxSubarraySum = subarraySum
                maxSubarrayStartIndex = startIndex
                maxSubarrayLength = arrLength

    return inputArray[maxSubarrayStartIndex:maxSubarrayStartIndex + maxSubarrayLength]

def dcMaximumSubarraySum(inputArray):
    def solveRecursively(elementIndex, mustPick):
        if elementIndex >= len(inputArray):
            return 0 if mustPick else float('-inf')
        return max(
            inputArray[elementIndex] + solveRecursively(elementIndex + 1, True),
            0 if mustPick else solveRecursively(elementIndex + 1, False)
        )

    return solveRecursively(0, False)

def dpMaximumSubarray(inputArray):
    maxSum = float('-inf')
    currentSum = 0

    maxStartIndex = 0
    maxEndIndex = len(inputArray) - 1
    currentStartIndex = 0

    for currentIndex, currentNumber in enumerate(inputArray):
        currentSum += currentNumber

        if maxSum < currentSum:
            maxSum = currentSum
            maxStartIndex = currentStartIndex
            maxEndIndex = currentIndex

        if currentSum < 0:
            currentSum = 0
            currentStartIndex = currentIndex + 1

    return inputArray[maxStartIndex:maxEndIndex + 1]
