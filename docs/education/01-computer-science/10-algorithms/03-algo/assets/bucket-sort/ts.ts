function bucketSort(arr: number[]): void {
  if (arr.length <= 1) {
    return;
  }

  const n = arr.length;
  const buckets: number[][] = Array.from({ length: n }, () => []);

  for (const v of arr) {
    const index = Math.floor(v * n);
    buckets[index].push(v);
  }

  for (const bucket of buckets) {
    bucket.sort((a, b) => a - b);
  }

  let k = 0;
  for (const bucket of buckets) {
    for (const v of bucket) {
      arr[k] = v;
      k++;
    }
  }
}
