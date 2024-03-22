function bubbleSort(arr: number[]): void {
  const n: number = arr.length;
  for (let i: number = 0; i < n - 1; i++) {
    for (let j: number = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
