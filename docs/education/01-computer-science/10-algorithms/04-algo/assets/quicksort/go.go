package main

func quicksort(arr []int) []int {
    if len(arr) <= 1 {
        return arr
    }

    pivot := arr[0]
    var left, right []int

    for _, v := range arr[1:] {
        if v <= pivot {
            left = append(left, v)
        } else {
            right = append(right, v)
        }
    }

    left = quicksort(left)
    right = quicksort(right)

    return append(append(left, pivot), right...)
}
