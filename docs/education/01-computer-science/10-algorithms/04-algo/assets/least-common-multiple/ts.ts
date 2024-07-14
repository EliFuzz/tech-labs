function euclideanAlgorithm(originalA: number, originalB: number): number {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  return b === 0 ? a : euclideanAlgorithm(b, a % b);
}

function leastCommonMultiple(a: number, b: number): number {
  return a === 0 || b === 0 ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);
}
