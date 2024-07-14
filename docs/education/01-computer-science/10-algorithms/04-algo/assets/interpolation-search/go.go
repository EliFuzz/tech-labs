package main

func interpolationSearch(arr []int, x int) int {
    low := 0
    high := len(arr) - 1

    for low <= high && x >= arr[low] && x <= arr[high] {
        if low == high {
            if arr[low] == x {
                return low
            }
            return -1
        }

        pos := low + ((x - arr[low]) * (high - low) / (arr[high] - arr[low]))

        if arr[pos] == x {
            return pos
        }

        if arr[pos] < x {
            low = pos + 1
        } else {
            high = pos - 1
        }
    }

    return -1
}
