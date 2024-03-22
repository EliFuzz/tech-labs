fun quicksort(arr: IntArray): IntArray {
    if (arr.size <= 1) return arr

    val pivot = arr[0]
    val left = arr.drop(1).filter { it <= pivot }.toIntArray()
    val right = arr.drop(1).filter { it > pivot }.toIntArray()

    val leftSorted = quicksort(left)
    val rightSorted = quicksort(right)

    return leftSorted + pivot + rightSorted
}
