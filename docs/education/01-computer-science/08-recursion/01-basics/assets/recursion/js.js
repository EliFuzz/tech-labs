function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialMemoization(n, memo = {}) {
  if (n === 0 || n === 1) {
    return 1;
  }
  if (memo[n]) {
    return memo[n];
  }
  const result = n * factorialMemoization(n - 1, memo);
  memo[n] = result;
  return result;
}

function factorialTabulation(n) {
  const table = Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    table[i] = i * table[i - 1];
  }
  return table[n];
}

function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciIterative(n) {
  if (n <= 1) {
    return n;
  }
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function fibonacciMemoization(n, memo = {}) {
  if (n <= 1) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }
  const result =
    fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
  memo[n] = result;
  return result;
}

function fibonacciTabulation(n) {
  if (n <= 1) {
    return n;
  }
  const table = [0, 1];
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}
