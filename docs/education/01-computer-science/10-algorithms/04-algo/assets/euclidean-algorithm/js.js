// recursive
function euclideanRecursive(a, b) {
  if (b === 0) {
    return a;
  }
  return euclideanRecursive(b, a % b);
}

// iterative
function euclideanIterative(a, b) {
  let temp;
  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
