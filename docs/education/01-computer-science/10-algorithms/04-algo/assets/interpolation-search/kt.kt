fun interpolationSearch(arr: IntArray, x: Int): Int {
    var low = 0
    var high = arr.size - 1

    while (low <= high && x >= arr[low] && x <= arr[high]) {
        if (low == high) {
            return if (arr[low] == x) low else -1
        }

        val pos = low + ((x - arr[low]) * (high - low) / (arr[high] - arr[low]))

        if (arr[pos] == x) return pos

        if (arr[pos] < x) low = pos + 1
        else high = pos - 1
    }

    return -1
}
