function isPowerOfTwoNaive(n) {
  if (n <= 0) {
    return false;
  }
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
}

function isPowerOfTwoBitwise(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
