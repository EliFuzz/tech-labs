fun countingSort(arr: IntArray, max: Int): IntArray {
    val count = IntArray(max + 1)
    val sorted = IntArray(arr.size)

    arr.forEach { num -> count[num]++ }

    var index = 0
    for (i in 0..max) {
        while (count[i] > 0) {
            sorted[index++] = i
            count[i]--
        }
    }

    return sorted
}
