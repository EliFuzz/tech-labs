// recursive
fun euclideanRecursive(a: Int, b: Int): Int {
    return if (b == 0) a else euclideanRecursive(b, a % b)
}

// iterative
fun euclideanIterative(a: Int, b: Int): Int {
    var temp: Int
    var aa = a
    var bb = b
    while (bb != 0) {
        temp = bb
        bb = aa % bb
        aa = temp
    }
    return aa
}
