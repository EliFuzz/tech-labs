function primeFactors(n: number): number[] {
  const factors: number[] = [];

  while (n % 2 === 0) {
    factors.push(2);
    n = Math.floor(n / 2);
  }

  for (let factor = 3; factor <= Math.sqrt(n); factor += 2) {
    while (n % factor === 0) {
      factors.push(factor);
      n = Math.floor(n / factor);
    }
  }

  if (n > 2) {
    factors.push(n);
  }

  return factors;
}
