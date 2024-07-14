function sqrtNewton(x) {
  let z = x / 2;
  for (let i = 0; i < 10; i++) {
    z -= (z * z - x) / (2 * z);
  }
  return z;
}
