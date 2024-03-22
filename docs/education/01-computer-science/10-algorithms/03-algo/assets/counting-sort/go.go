func countingSort(arr []int, max int) []int {
    count := make([]int, max+1)
    sorted := make([]int, len(arr))

    for _, num := range arr {
        count[num]++
    }

    index := 0
    for i := 0; i <= max; i++ {
        for count[i] > 0 {
            sorted[index] = i
            index++
            count[i]--
        }
    }

    return sorted
}
