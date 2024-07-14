fun zAlgorithm(text: String): IntArray {
    val n = text.length
    val z = IntArray(n)
    var l = 0
    var r = 0
    for (i in 1 until n) {
        if (i <= r) {
            z[i] = minOf(r - i + 1, z[i - l])
        }
        while (i + z[i] < n && text[z[i]] == text[i + z[i]]) {
            z[i]++
        }
        if (i + z[i] - 1 > r) {
            l = i
            r = i + z[i] - 1
        }
    }
    return z
}
