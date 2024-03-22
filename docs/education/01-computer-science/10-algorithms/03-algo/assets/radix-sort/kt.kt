fun getMax(arr: IntArray): Int {
    var max = arr[0]
    for (i in 1 until arr.size) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

fun countSort(arr: IntArray, exp: Int) {
    val n = arr.size
    val output = IntArray(n)
    val count = IntArray(10)

    for (i in 0 until n) {
        count[arr[i] / exp % 10]++
    }

    for (i in 1 until 10) {
        count[i] += count[i - 1]
    }

    for (i in n - 1 downTo 0) {
        output[count[arr[i] / exp % 10] - 1] = arr[i]
        count[arr[i] / exp % 10]--
    }

    output.copyInto(arr)
}

fun radixSort(arr: IntArray) {
    val max = getMax(arr)
    var exp = 1
    while (max / exp > 0) {
        countSort(arr, exp)
        exp *= 10
    }
}
