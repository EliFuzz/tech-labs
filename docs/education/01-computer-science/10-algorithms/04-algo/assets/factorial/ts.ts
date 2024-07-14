// recursive
function factorialRecursive(n: number): number {
  return n <= 1 ? 1 : n * factorialRecursive(n - 1);
}

// iterative
function factorialIterative(n: number): number {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
