// Recursive
fun fibonacciRecursive(n: Int): Int {
    return if (n <= 1) n else fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

// Iterative
fun fibonacciIterative(n: Int): Int {
    if (n <= 1) return n
    var a = 0
    var b = 1
    var temp: Int
    for (i in 2..n) {
        temp = b
        b += a
        a = temp
    }
    return b
}
