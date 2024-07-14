package main

// recursive
func euclideanRecursive(a, b int) int {
    if b == 0 {
        return a
    }
    return euclideanRecursive(b, a%b)
}

// iterative
func euclideanIterative(a, b int) int {
    var temp int
    for b != 0 {
        temp = b
        b = a % b
        a = temp
    }
    return a
}
