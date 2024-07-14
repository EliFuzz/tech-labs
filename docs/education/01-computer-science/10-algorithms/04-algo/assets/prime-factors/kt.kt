fun primeFactors(n: Int): List<Int> {
    val factors = mutableListOf<Int>()

    var num = n
    while (num % 2 == 0) {
        factors.add(2)
        num /= 2
    }

    var factor = 3
    while (factor <= Math.sqrt(num.toDouble())) {
        while (num % factor == 0) {
            factors.add(factor)
            num /= factor
        }
        factor += 2
    }

    if (num > 2) {
        factors.add(num)
    }

    return factors
}
