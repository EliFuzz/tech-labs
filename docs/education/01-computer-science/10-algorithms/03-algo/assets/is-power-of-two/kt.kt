fun isPowerOfTwoNaive(n: Int): Boolean {
    var num = n
    if (num <= 0)
        return false
    while (num % 2 == 0) {
        num /= 2
    }
    return num == 1
}

fun isPowerOfTwoBitwise(n: Int): Boolean {
    return n > 0 && (n and (n - 1)) == 0
}
