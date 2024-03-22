class SegmentTree<T> {
  inputArray: T[];
  operation: (a: T, b: T) => T;
  operationFallback: T;
  segmentTree: (T | null)[];

  constructor(
    inputArray: T[],
    operation: (a: T, b: T) => T,
    operationFallback: T,
  ) {
    this.inputArray = inputArray;
    this.operation = operation;
    this.operationFallback = operationFallback;

    this.segmentTree = this.initSegmentTree(this.inputArray);

    this.buildSegmentTree();
  }

  rangeQuery(queryLeftIndex: number, queryRightIndex: number): T {
    const leftIndex = 0;
    const rightIndex = this.inputArray.length - 1;
    const position = 0;

    return this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      leftIndex,
      rightIndex,
      position,
    );
  }

  private initSegmentTree(inputArray: T[]): (T | null)[] {
    let segmentTreeArrayLength: number;
    const inputArrayLength = inputArray.length;

    if (this.isPowerOfTwo(inputArrayLength)) {
      segmentTreeArrayLength = 2 * inputArrayLength - 1;
    } else {
      const currentPower = Math.floor(Math.log2(inputArrayLength));
      const nextPower = currentPower + 1;
      const nextPowerOfTwoNumber = 2 ** nextPower;
      segmentTreeArrayLength = 2 * nextPowerOfTwoNumber - 1;
    }

    return new Array(segmentTreeArrayLength).fill(null);
  }

  private buildSegmentTree(): void {
    const leftIndex = 0;
    const rightIndex = this.inputArray.length - 1;
    const position = 0;
    this.buildTreeRecursively(leftIndex, rightIndex, position);
  }

  private buildTreeRecursively(
    leftInputIndex: number,
    rightInputIndex: number,
    position: number,
  ): void {
    if (leftInputIndex === rightInputIndex) {
      this.segmentTree[position] = this.inputArray[leftInputIndex];
      return;
    }

    const middleIndex = Math.floor((leftInputIndex + rightInputIndex) / 2);
    this.buildTreeRecursively(
      leftInputIndex,
      middleIndex,
      this.getLeftChildIndex(position),
    );
    this.buildTreeRecursively(
      middleIndex + 1,
      rightInputIndex,
      this.getRightChildIndex(position),
    );

    this.segmentTree[position] = this.operation(
      this.segmentTree[this.getLeftChildIndex(position)],
      this.segmentTree[this.getRightChildIndex(position)],
    );
  }

  private rangeQueryRecursive(
    queryLeftIndex: number,
    queryRightIndex: number,
    leftIndex: number,
    rightIndex: number,
    position: number,
  ): T {
    if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {
      return this.segmentTree[position] as T;
    }

    if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {
      return this.operationFallback;
    }

    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    const leftOperationResult = this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      leftIndex,
      middleIndex,
      this.getLeftChildIndex(position),
    );

    const rightOperationResult = this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      middleIndex + 1,
      rightIndex,
      this.getRightChildIndex(position),
    );

    return this.operation(leftOperationResult, rightOperationResult);
  }

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  private isPowerOfTwo(number: number): boolean {
    if (number < 1) {
      return false;
    }

    let dividedNumber = number;
    while (dividedNumber !== 1) {
      if (dividedNumber % 2 !== 0) {
        return false;
      }
      dividedNumber /= 2;
    }

    return true;
  }
}
