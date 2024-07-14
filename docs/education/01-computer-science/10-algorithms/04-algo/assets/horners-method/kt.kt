fun hornersMethod(coefficients: IntArray, x: Int): Int {
    var result = coefficients[0]
    for (i in 1 until coefficients.size) {
        result = result * x + coefficients[i]
    }
    return result
}
