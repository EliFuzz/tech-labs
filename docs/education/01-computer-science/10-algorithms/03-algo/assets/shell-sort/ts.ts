function shellSort(arr: number[]): void {
  const n: number = arr.length;
  for (
    let gap: number = Math.floor(n / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i: number = gap; i < n; i++) {
      let temp: number = arr[i];
      let j: number = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
  }
}
