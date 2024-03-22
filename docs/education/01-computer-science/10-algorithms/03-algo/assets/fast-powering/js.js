// iterative
function fastPowerIterative(x, n) {
  let result = 1;
  while (n > 0) {
    if (n & 1) {
      result *= x;
    }
    x *= x;
    n >>= 1;
  }
  return result;
}

// recursive
function fastPowerRecursive(x, n) {
  if (n === 0) {
    return 1;
  }
  const temp = fastPowerRecursive(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return temp * temp;
  }
  return x * temp * temp;
}
