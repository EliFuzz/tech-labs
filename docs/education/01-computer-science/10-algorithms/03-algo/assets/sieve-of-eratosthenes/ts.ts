function sieveOfEratosthenes(n: number): number[] {
  const primes: boolean[] = new Array(n + 1).fill(true);
  const result: number[] = [];

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
