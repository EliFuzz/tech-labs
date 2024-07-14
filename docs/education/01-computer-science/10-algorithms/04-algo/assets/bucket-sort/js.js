function bucketSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const n = arr.length;
  const buckets = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    const index = Math.floor(arr[i] * n);
    buckets[index].push(arr[i]);
  }

  for (let i = 0; i < n; i++) {
    buckets[i].sort((a, b) => a - b);
  }

  let k = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[k] = buckets[i][j];
      k++;
    }
  }
}
