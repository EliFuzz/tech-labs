class FenwickTree(private val arraySize: Int) {
    private val treeArray = IntArray(arraySize + 1)

    fun increase(position: Int, value: Int): FenwickTree {
        if (position < 1 || position > arraySize) {
            throw IllegalArgumentException("Position is out of allowed range")
        }

        var i = position
        while (i <= arraySize) {
            treeArray[i] += value
            i += i and -i
        }

        return this
    }

    fun query(position: Int): Int {
        if (position < 1 || position > arraySize) {
            throw IllegalArgumentException("Position is out of allowed range")
        }

        var sum = 0
        var i = position

        while (i > 0) {
            sum += treeArray[i]
            i -= i and -i
        }

        return sum
    }

    fun queryRange(leftIndex: Int, rightIndex: Int): Int {
        if (leftIndex > rightIndex) {
            throw IllegalArgumentException("Left index can not be greater than right one")
        }

        return if (leftIndex == 1) {
            query(rightIndex)
        } else {
            query(rightIndex) - query(leftIndex - 1)
        }
    }
}
