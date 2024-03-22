function isPowerOfTwoNaive(n: number): boolean {
  if (n <= 0) return false;
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
}

function isPowerOfTwoBitwise(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}
