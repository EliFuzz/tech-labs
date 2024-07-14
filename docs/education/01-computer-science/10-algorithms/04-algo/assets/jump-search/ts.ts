function jumpSearch(arr: number[], x: number): number {
  const n: number = arr.length;
  const step: number = Math.floor(Math.sqrt(n));
  let prev: number = 0;

  while (arr[Math.min(step, n) - 1] < x) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1;
  }

  while (arr[prev] < x) {
    prev++;
    if (prev === Math.min(step, n)) return -1;
  }

  if (arr[prev] === x) return prev;

  return -1;
}
