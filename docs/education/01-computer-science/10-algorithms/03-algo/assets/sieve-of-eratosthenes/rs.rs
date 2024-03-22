fn sieve_of_eratosthenes(n: usize) -> Vec<usize> {
    let mut primes = vec![true; n + 1];
    let mut result = Vec::new();

    for p in 2..=n {
        if primes[p] {
            for i in (p * p..=n).step_by(p) {
                primes[i] = false;
            }
        }
    }

    for p in 2..=n {
        if primes[p] {
            result.push(p);
        }
    }

    result
}
