package main

func isPowerOfTwoNaive(n int) bool {
    if n <= 0 {
        return false
    }
    for n%2 == 0 {
        n /= 2
    }
    return n == 1
}

func isPowerOfTwoBitwise(n int) bool {
    return n > 0 && (n&(n-1)) == 0
}
