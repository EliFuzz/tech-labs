// iterative
fun fastPowerIterative(x: Int, n: Int): Int {
    var result = 1
    var base = x
    var exponent = n
    while (exponent > 0) {
        if (exponent and 1 == 1) {
            result *= base
        }
        base *= base
        exponent = exponent shr 1
    }
    return result
}

// recursive
fun fastPowerRecursive(x: Int, n: Int): Int {
    if (n == 0) {
        return 1
    }
    val temp = fastPowerRecursive(x, n / 2)
    return if (n % 2 == 0) temp * temp else x * temp * temp
}
