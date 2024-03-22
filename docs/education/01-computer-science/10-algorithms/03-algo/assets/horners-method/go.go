package main

func hornersMethod(coefficients []int, x int) int {
    result := coefficients[0]
    for i := 1; i < len(coefficients); i++ {
        result = result*x + coefficients[i]
    }
    return result
}
