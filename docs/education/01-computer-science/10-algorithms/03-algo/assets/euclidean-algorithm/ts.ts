// recursive
function euclideanRecursive(a: number, b: number): number {
  return b === 0 ? a : euclideanRecursive(b, a % b);
}

// iterative
function euclideanIterative(a: number, b: number): number {
  let temp: number;
  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
