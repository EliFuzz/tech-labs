function factorialRecursive(n: number): number {
  return n <= 1 ? 1 : n * factorialRecursive(n - 1);
}

function factorialIterative(n: number): number {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialMemoization(
  n: number,
  memo: Map<number, number> = new Map(),
): number {
  if (n <= 1) {
    return 1;
  }

  if (memo.has(n)) {
    return memo.get(n)!;
  }

  const result = n * factorialMemoization(n - 1, memo);
  memo.set(n, result);
  return result;
}

function factorialTabulation(n: number): number {
  const table = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    table[i] = i * table[i - 1];
  }
  return table[n];
}

function fibonacciRecursive(n: number): number {
  return n <= 1 ? n : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciIterative(n: number): number {
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

function fibonacciMemoization(
  n: number,
  memo: Map<number, number> = new Map(),
): number {
  if (n <= 1) {
    return n;
  }

  if (memo.has(n)) {
    return memo.get(n)!;
  }

  const result =
    fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
  memo.set(n, result);
  return result;
}

function fibonacciTabulation(n: number): number {
  if (n <= 1) {
    return n;
  }

  const table = new Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}
