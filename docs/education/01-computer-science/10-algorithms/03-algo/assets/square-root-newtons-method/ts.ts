function sqrtNewton(x: number): number {
  let z: number = x / 2;
  for (let i: number = 0; i < 10; i++) {
    z -= (z * z - x) / (2 * z);
  }
  return z;
}
