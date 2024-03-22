// recursive
fun factorialRecursive(n: Int): Int {
    return if (n <= 1) 1 else n * factorialRecursive(n - 1)
}

// iterative
fun factorialIterative(n: Int): Int {
    var result = 1
    for (i in 2..n) {
        result *= i
    }
    return result
}
=
