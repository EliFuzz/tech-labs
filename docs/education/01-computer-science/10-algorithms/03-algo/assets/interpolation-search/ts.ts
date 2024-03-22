function interpolationSearch(arr: number[], x: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && x >= arr[low] && x <= arr[high]) {
    if (low === high) {
      return arr[low] === x ? low : -1;
    }

    let pos =
      low +
      Math.floor(((x - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (arr[pos] === x) {
      return pos;
    }

    if (arr[pos] < x) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
}
