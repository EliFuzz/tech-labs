import kotlin.math.*

fun jumpSearch(arr: IntArray, x: Int): Int {
    val n = arr.size
    val step = sqrt(n.toDouble()).toInt()
    var prev = 0

    while (arr[min(step, n) - 1] < x) {
        prev = step
        step += sqrt(n.toDouble()).toInt()
        if (prev >= n)
            return -1
    }

    while (arr[prev] < x) {
        prev++
        if (prev == min(step, n))
            return -1
    }

    return when {
        arr[prev] == x -> prev
        else -> -1
    }
}
