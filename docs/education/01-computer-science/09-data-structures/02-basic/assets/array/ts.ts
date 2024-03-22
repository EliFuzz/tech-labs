function accessElement(arr: number[], index: number): number {
  return arr[index];
}

function updateElement(arr: number[], index: number, value: number): void {
  arr[index] = value;
}

function findLength(arr: number[]): number {
  return arr.length;
}

function iterateElements(arr: number[]): void {
  arr.forEach((element) => {
    console.log(element);
  });
}

function appendElement(arr: number[], value: number): void {
  arr.push(value);
}

function insertElement(arr: number[], index: number, value: number): void {
  arr.splice(index, 0, value);
}

function deleteElement(arr: number[], index: number): void {
  arr.splice(index, 1);
}

function removeElement(arr: number[], value: number): void {
  const indexToRemove = arr.indexOf(value);
  if (indexToRemove !== -1) {
    deleteElement(arr, indexToRemove);
  }
}

function popElement(arr: number[], index: number): [number, number[]] {
  const value = arr.splice(index, 1)[0];
  return [value, arr];
}

function searchElement(arr: number[], value: number): boolean {
  return arr.includes(value);
}

function indexOfElement(arr: number[], value: number): number {
  return arr.indexOf(value);
}

function sortArray(arr: number[]): void {
  arr.sort((a, b) => a - b);
}

function reverseArray(arr: number[]): void {
  arr.reverse();
}

function copyArray(arr: number[]): number[] {
  return [...arr];
}

function sliceArray(arr: number[], start: number, stop: number): number[] {
  return arr.slice(start, stop);
}

function concatenateArrays(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}
