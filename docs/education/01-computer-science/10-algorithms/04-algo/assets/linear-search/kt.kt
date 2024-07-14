fun linearSearch(arr: IntArray, target: Int): Int {
    for ((index, value) in arr.withIndex()) {
        if (value == target) {
            return index
        }
    }
    return -1
}
