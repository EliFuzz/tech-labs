fun sieveOfEratosthenes(n: Int): List<Int> {
    val primes = BooleanArray(n + 1) { true }
    val result = mutableListOf<Int>()

    for (p in 2..n) {
        if (primes[p]) {
            for (i in p * p..n step p) {
                primes[i] = false
            }
        }
    }

    for (p in 2..n) {
        if (primes[p]) {
            result.add(p)
        }
    }

    return result
}
