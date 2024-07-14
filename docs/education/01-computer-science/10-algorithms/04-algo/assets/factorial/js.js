// recursive
function factorialRecursive(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

// iterative
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
