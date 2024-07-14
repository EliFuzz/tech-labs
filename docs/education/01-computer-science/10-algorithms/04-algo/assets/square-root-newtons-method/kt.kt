fun sqrtNewton(x: Double): Double {
    var z = x / 2
    repeat(10) {
        z -= (z * z - x) / (2 * z)
    }
    return z
}
