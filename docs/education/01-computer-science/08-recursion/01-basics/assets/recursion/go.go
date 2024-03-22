package main

func factorialRecursive(n int) int {
    if n == 0 || n == 1 {
        return 1
    }
    return n * factorialRecursive(n-1)
}

func factorialIterative(n int) int {
    result := 1
    for i := 1; i <= n; i++ {
        result *= i
    }
    return result
}

func factorialMemoization(n int, memo map[int]int) int {
    if n == 0 || n == 1 {
        return 1
    }
    if val, ok := memo[n]; ok {
        return val
    }
    memo[n] = n * factorialMemoization(n-1, memo)
    return memo[n]
}

func factorialTabulation(n int) int {
    table := make([]int, n+1)
    table[0], table[1] = 1, 1
    for i := 2; i <= n; i++ {
        table[i] = i * table[i-1]
    }
    return table[n]
}

func fibonacciRecursive(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}

func fibonacciIterative(n int) int {
    if n <= 1 {
        return n
    }
    a, b := 0, 1
    for i := 2; i <= n; i++ {
        a, b = b, a+b
    }
    return b
}

func fibonacciMemoization(n int, memo map[int]int) int {
    if n <= 1 {
        return n
    }
    if val, ok := memo[n]; ok {
        return val
    }
    memo[n] = fibonacciMemoization(n-1, memo) + fibonacciMemoization(n-2, memo)
    return memo[n]
}

func fibonacciTabulation(n int) int {
    if n <= 1 {
        return n
    }
    table := make([]int, n+1)
    table[1] = 1
    for i := 2; i <= n; i++ {
        table[i] = table[i-1] + table[i-2]
    }
    return table[n]
}
