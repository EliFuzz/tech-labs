package main

import (
    "sort"
)

func bucketSort(arr []float64) {
    if len(arr) <= 1 {
        return
    }

    n := len(arr)
    buckets := make([][]float64, n)

    for _, v := range arr {
        index := int(v * float64(n))
        buckets[index] = append(buckets[index], v)
    }

    for i := 0; i < n; i++ {
        sort.Float64s(buckets[i])
    }

    k := 0
    for i := 0; i < n; i++ {
        for j := 0; j < len(buckets[i]); j++ {
            arr[k] = buckets[i][j]
            k++
        }
    }
}
