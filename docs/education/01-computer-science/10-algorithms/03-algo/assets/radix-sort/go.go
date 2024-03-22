package main

import (
    "strconv"
)

func getMax(arr []int) int {
    max := arr[0]
    for _, val := range arr {
        if val > max {
            max = val
        }
    }
    return max
}

func countSort(arr []int, exp int) {
    n := len(arr)
    output := make([]int, n)
    count := make([]int, 10)

    for i := 0; i < n; i++ {
        count[(arr[i]/exp)%10]++
    }

    for i := 1; i < 10; i++ {
        count[i] += count[i-1]
    }

    for i := n - 1; i >= 0; i-- {
        output[count[(arr[i]/exp)%10]-1] = arr[i]
        count[(arr[i]/exp)%10]--
    }

    for i := 0; i < n; i++ {
        arr[i] = output[i]
    }
}

func radixSort(arr []int) {
    max := getMax(arr)
    for exp := 1; max/exp > 0; exp *= 10 {
        countSort(arr, exp)
    }
}
