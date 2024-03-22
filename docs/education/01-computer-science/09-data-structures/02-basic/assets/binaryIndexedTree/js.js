class BinaryIndexedTree {
  constructor(arraySize) {
    this.arraySize = arraySize;
    this.treeArray = Array(this.arraySize + 1).fill(0);
  }

  increase(position, value) {
    if (position < 1 || position > this.arraySize) {
      throw new Error("Position is out of allowed range");
    }

    for (let i = position; i <= this.arraySize; i += i & -i) {
      this.treeArray[i] += value;
    }

    return this;
  }

  query(position) {
    if (position < 1 || position > this.arraySize) {
      throw new Error("Position is out of allowed range");
    }

    let sum = 0;

    for (let i = position; i > 0; i -= i & -i) {
      sum += this.treeArray[i];
    }

    return sum;
  }

  queryRange(leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
      throw new Error("Left index can not be greater than right one");
    }

    if (leftIndex === 1) {
      return this.query(rightIndex);
    }

    return this.query(rightIndex) - this.query(leftIndex - 1);
  }
}
