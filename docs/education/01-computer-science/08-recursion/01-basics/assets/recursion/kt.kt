import java.util.HashMap

fun factorialRecursive(n: Int): Int {
    return if (n == 0 || n == 1) {
        1
    } else {
        n * factorialRecursive(n - 1)
    }
}

fun factorialIterative(n: Int): Int {
    var result = 1
    for (i in 2..n) {
        result *= i
    }
    return result
}

fun factorialMemoization(n: Int, memo: HashMap<Int, Int>): Int {
    return if (n == 0 || n == 1) {
        1
    } else {
        if (memo.containsKey(n)) {
            memo[n]!!
        } else {
            val result = n * factorialMemoization(n - 1, memo)
            memo[n] = result
            result
        }
    }
}

fun factorialTabulation(n: Int): Int {
    val table = IntArray(n + 1) { 1 }
    for (i in 2..n) {
        table[i] = i * table[i - 1]
    }
    return table[n]
}

fun fibonacciRecursive(n: Int): Int {
    return if (n <= 1) {
        n
    } else {
        fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
    }
}

fun fibonacciIterative(n: Int): Int {
    var a = 0
    var b = 1
    for (i in 2..n) {
        val temp = a + b
        a = b
        b = temp
    }
    return b
}

fun fibonacciMemoization(n: Int, memo: HashMap<Int, Int>): Int {
    return if (n <= 1) {
        n
    } else {
        if (memo.containsKey(n)) {
            memo[n]!!
        } else {
            val result = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo)
            memo[n] = result
            result
        }
    }
}

fun fibonacciTabulation(n: Int): Int {
    if (n <= 1) {
        return n
    } else {
        val table = IntArray(n + 1)
        table[1] = 1
        for (i in 2..n) {
            table[i] = table[i - 1] + table[i - 2]
        }
        return table[n]
    }
}
