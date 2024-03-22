import kotlin.math.abs

fun euclideanAlgorithm(originalA: Int, originalB: Int): Int {
    val a = abs(originalA)
    val b = abs(originalB)

    return if (b == 0) a else euclideanAlgorithm(b, a % b)
}

fun leastCommonMultiple(a: Int, b: Int): Int {
    return if (a == 0 || b == 0) {
        0
    } else {
        (abs(a * b) / euclideanAlgorithm(a, b))
    }
}
