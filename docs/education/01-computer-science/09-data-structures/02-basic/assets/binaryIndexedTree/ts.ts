export default class FenwickTree {
  private arraySize: number;
  private treeArray: number[];

  constructor(arraySize: number) {
    this.arraySize = arraySize;
    this.treeArray = Array(this.arraySize + 1).fill(0);
  }

  increase(position: number, value: number): FenwickTree {
    if (position < 1 || position > this.arraySize) {
      throw new Error("Position is out of allowed range");
    }

    for (let i = position; i <= this.arraySize; i += i & -i) {
      this.treeArray[i] += value;
    }

    return this;
  }

  query(position: number): number {
    if (position < 1 || position > this.arraySize) {
      throw new Error("Position is out of allowed range");
    }

    let sum = 0;

    for (let i = position; i > 0; i -= i & -i) {
      sum += this.treeArray[i];
    }

    return sum;
  }

  queryRange(leftIndex: number, rightIndex: number): number {
    if (leftIndex > rightIndex) {
      throw new Error("Left index can not be greater than right one");
    }

    if (leftIndex === 1) {
      return this.query(rightIndex);
    }

    return this.query(rightIndex) - this.query(leftIndex - 1);
  }
}
