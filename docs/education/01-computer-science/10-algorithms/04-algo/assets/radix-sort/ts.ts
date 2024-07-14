function getMax(arr: number[]): number {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function countSort(arr: number[], exp: number): void {
  const n = arr.length;
  const output: number[] = new Array(n).fill(0);
  const count: number[] = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr: number[]): void {
  const max = getMax(arr);
  let exp = 1;
  while (Math.floor(max / exp) > 0) {
    countSort(arr, exp);
    exp *= 10;
  }
}
