function accessElement(arr, index) {
  return arr[index];
}

function updateElement(arr, index, value) {
  arr[index] = value;
}

function findLength(arr) {
  return arr.length;
}

function iterateElements(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

function appendElement(arr, value) {
  arr.push(value);
}

function insertElement(arr, index, value) {
  arr.splice(index, 0, value);
}

function deleteElement(arr, index) {
  arr.splice(index, 1);
}

function removeElement(arr, value) {
  const index = arr.indexOf(value);
  if (index !== -1) {
    deleteElement(arr, index);
  }
}

function popElement(arr, index) {
  return arr.splice(index, 1)[0];
}

function searchElement(arr, value) {
  return arr.includes(value);
}

function indexOfElement(arr, value) {
  return arr.indexOf(value);
}

function sortArray(arr) {
  arr.sort((a, b) => a - b);
}

function reverseArray(arr) {
  arr.reverse();
}

function copyArray(arr) {
  return [...arr];
}

function sliceArray(arr, start, stop) {
  return arr.slice(start, stop);
}

function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
