fun bucketSort(arr: DoubleArray) {
    if (arr.size <= 1) {
        return
    }

    val n = arr.size
    val buckets = Array(n) { mutableListOf<Double>() }

    for (v in arr) {
        val index = (v * n).toInt()
        buckets[index].add(v)
    }

    for (i in 0 until n) {
        buckets[i].sort()
    }

    var k = 0
    for (i in 0 until n) {
        for (j in 0 until buckets[i].size) {
            arr[k] = buckets[i][j]
            k++
        }
    }
}
