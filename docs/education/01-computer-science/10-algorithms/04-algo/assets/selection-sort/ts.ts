function selectionSort(arr: number[]): void {
  const n: number = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex: number = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}
