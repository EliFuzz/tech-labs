data class SegmentTree<T>(
        val inputArray: List<T>,
        val operation: (T, T) -> T,
        val operationFallback: T
) {

    var segmentTree: MutableList<T> = initSegmentTree(inputArray)

    init {
        buildSegmentTree()
    }

    private fun initSegmentTree(inputArray: List<T>): MutableList<T> {
        val inputArrayLength = inputArray.size

        val segmentTreeArrayLength = if (isPowerOfTwo(inputArrayLength)) {
            (2 * inputArrayLength) - 1
        } else {
            val currentPower = (Math.log(inputArrayLength.toDouble()) / Math.log(2.0)).toInt()
            val nextPower = currentPower + 1
            val nextPowerOfTwoNumber = 2.0.pow(nextPower.toDouble()).toInt()
            (2 * nextPowerOfTwoNumber) - 1
        }

        return MutableList(segmentTreeArrayLength) { _ -> operationFallback }
    }

    private fun isPowerOfTwo(number: Int): Boolean {
        if (number < 1) {
            return false
        }

        var dividedNumber = number
        while (dividedNumber != 1) {
            if (dividedNumber % 2 != 0) {
                return false
            }
            dividedNumber /= 2
        }

        return true
    }

    private fun buildSegmentTree() {
        val leftIndex = 0
        val rightIndex = inputArray.size - 1
        val position = 0
        buildTreeRecursively(leftIndex, rightIndex, position)
    }

    private fun buildTreeRecursively(leftInputIndex: Int, rightInputIndex: Int, position: Int) {
        if (leftInputIndex == rightInputIndex) {
            segmentTree[position] = inputArray[leftInputIndex]
            return
        }

        val middleIndex = (leftInputIndex + rightInputIndex) / 2
        buildTreeRecursively(leftInputIndex, middleIndex, getLeftChildIndex(position))
        buildTreeRecursively(middleIndex + 1, rightInputIndex, getRightChildIndex(position))

        segmentTree[position] = operation(segmentTree[getLeftChildIndex(position)], segmentTree[getRightChildIndex(position)])
    }

    fun rangeQuery(queryLeftIndex: Int, queryRightIndex: Int): T {
        val leftIndex = 0
        val rightIndex = inputArray.size - 1
        val position = 0

        return rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position)
    }

    private fun rangeQueryHelper(queryLeftIndex: Int, queryRightIndex: Int, leftIndex: Int, rightIndex: Int, position: Int): T {
        if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {
            return segmentTree[position]
        }

        if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {
            return operationFallback
        }

        val middleIndex = (leftIndex + rightIndex) / 2
        val leftOperationResult = rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, middleIndex, getLeftChildIndex(position))
        val rightOperationResult = rangeQueryHelper(queryLeftIndex, queryRightIndex, middleIndex + 1, rightIndex, getRightChildIndex(position))

        return operation(leftOperationResult, rightOperationResult)
    }

    private fun getLeftChildIndex(parentIndex: Int): Int {
        return (2 * parentIndex) + 1
    }

    private fun getRightChildIndex(parentIndex: Int): Int {
        return (2 * parentIndex) + 2
    }
}
