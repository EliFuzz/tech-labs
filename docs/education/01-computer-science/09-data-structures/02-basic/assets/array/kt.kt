fun accessElement(arr: IntArray, index: Int): Int {
    return arr[index]
}

fun updateElement(arr: IntArray, index: Int, value: Int) {
    arr[index] = value
}

fun findLength(arr: IntArray): Int {
    return arr.size
}

fun iterateElements(arr: IntArray) {
    arr.forEach { element ->
        println(element)
    }
}

fun appendElement(arr: IntArray, value: Int): IntArray {
    return arr.plus(value)
}

fun insertElement(arr: IntArray, index: Int, value: Int): IntArray {
    return arr.sliceArray(0 until index) + value + arr.sliceArray(index until arr.size)
}

fun deleteElement(arr: IntArray, index: Int): IntArray {
    return arr.sliceArray(0 until index) + arr.sliceArray(index + 1 until arr.size)
}

fun removeElement(arr: IntArray, value: Int): IntArray {
    val index = arr.indexOf(value)
    return if (index != -1) {
        deleteElement(arr, index)
    } else {
        arr
    }
}

fun popElement(arr: IntArray, index: Int): Pair<Int, IntArray> {
    val value = arr[index]
    return value to deleteElement(arr, index)
}

fun searchElement(arr: IntArray, value: Int): Boolean {
    return arr.contains(value)
}

fun indexOfElement(arr: IntArray, value: Int): Int {
    return arr.indexOf(value)
}

fun sortArray(arr: IntArray) {
    arr.sort()
}

fun reverseArray(arr: IntArray) {
    arr.reverse()
}

fun copyArray(arr: IntArray): IntArray {
    return arr.copyOf()
}

fun sliceArray(arr: IntArray, start: Int, stop: Int): IntArray {
    return arr.sliceArray(start until stop)
}

fun concatenateArrays(arr1: IntArray, arr2: IntArray): IntArray {
    return arr1 + arr2
}
