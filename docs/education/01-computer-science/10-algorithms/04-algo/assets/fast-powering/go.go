package main

// iterative
func fastPowerIterative(x, n int) int {
    result := 1
    for n > 0 {
        if n&1 == 1 {
            result *= x
        }
        x *= x
        n >>= 1
    }
    return result
}

// recursive
func fastPowerRecursive(x, n int) int {
    if n == 0 {
        return 1
    }
    temp := fastPowerRecursive(x, n/2)
    if n%2 == 0 {
        return temp * temp
    }
    return x * temp * temp
}
