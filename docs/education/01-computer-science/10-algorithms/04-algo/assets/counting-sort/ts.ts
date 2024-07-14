function countingSort(arr: number[], max: number): number[] {
  const count: number[] = new Array(max + 1).fill(0);
  const sorted: number[] = [];

  arr.forEach((num) => count[num]++);

  let index = 0;
  for (let i = 0; i <= max; i++) {
    while (count[i] > 0) {
      sorted[index++] = i;
      count[i]--;
    }
  }

  return sorted;
}
