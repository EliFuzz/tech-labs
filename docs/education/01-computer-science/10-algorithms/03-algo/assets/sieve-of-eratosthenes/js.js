function sieveOfEratosthenes(n) {
  const primes = new Array(n + 1).fill(true);
  const result = [];

  for (let p = 2; p * p <= n; p++) {
    if (primes[p]) {
      for (let i = p * p; i <= n; i += p) {
        primes[i] = false;
      }
    }
  }

  for (let p = 2; p <= n; p++) {
    if (primes[p]) {
      result.push(p);
    }
  }

  return result;
}
