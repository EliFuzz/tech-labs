function zAlgorithm(text: string): number[] {
  const n = text.length;
  const z: number[] = new Array(n).fill(0);
  let l = 0,
    r = 0;
  for (let i = 1; i < n; i++) {
    if (i <= r) {
      z[i] = Math.min(r - i + 1, z[i - l]);
    }
    while (i + z[i] < n && text[z[i]] === text[i + z[i]]) {
      z[i]++;
    }
    if (i + z[i] - 1 > r) {
      l = i;
      r = i + z[i] - 1;
    }
  }
  return z;
}
