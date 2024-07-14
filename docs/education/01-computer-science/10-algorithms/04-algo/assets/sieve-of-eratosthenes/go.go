package main

func sieveOfEratosthenes(n int) []int {
    primes := make([]bool, n+1)
    var result []int

    for i := 2; i <= n; i++ {
        primes[i] = true
    }

    for p := 2; p*p <= n; p++ {
        if primes[p] == true {
            for i := p * p; i <= n; i += p {
                primes[i] = false
            }
        }
    }

    for p := 2; p <= n; p++ {
        if primes[p] {
            result = append(result, p)
        }
    }

    return result
}
