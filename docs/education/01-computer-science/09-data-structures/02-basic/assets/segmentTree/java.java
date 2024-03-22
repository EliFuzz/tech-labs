import java.util.ArrayList;
import java.util.List;

public class SegmentTree<T> {

  private final BinaryOperation<T> operation;
  private final T operationFallback;
  private List<T> inputArray;
  private List<T> segmentTree;

  public SegmentTree(List<T> inputArray, BinaryOperation<T> operation, T operationFallback) {
    this.inputArray = inputArray;
    this.operation = operation;
    this.operationFallback = operationFallback;
    this.segmentTree = initSegmentTree(inputArray);
    buildSegmentTree();
  }

  private List<T> initSegmentTree(List<T> inputArray) {
    int inputArrayLength = inputArray.size();
    int segmentTreeArrayLength;

    if (isPowerOfTwo(inputArrayLength)) {
      segmentTreeArrayLength = (2 * inputArrayLength) - 1;
    } else {
      int currentPower = (int) (Math.log(inputArrayLength) / Math.log(2));
      int nextPower = currentPower + 1;
      int nextPowerOfTwoNumber = (int) Math.pow(2, nextPower);
      segmentTreeArrayLength = (2 * nextPowerOfTwoNumber) - 1;
    }

    List<T> segmentTree = new ArrayList<>(segmentTreeArrayLength);
    for (int i = 0; i < segmentTreeArrayLength; i++) {
      segmentTree.add(operationFallback);
    }

    return segmentTree;
  }

  private boolean isPowerOfTwo(int number) {
    if (number < 1) {
      return false;
    }

    int dividedNumber = number;
    while (dividedNumber != 1) {
      if (dividedNumber % 2 != 0) {
        return false;
      }
      dividedNumber /= 2;
    }

    return true;
  }

  private void buildSegmentTree() {
    int leftIndex = 0;
    int rightIndex = inputArray.size() - 1;
    int position = 0;
    buildTreeRecursively(leftIndex, rightIndex, position);
  }

  private void buildTreeRecursively(int leftInputIndex, int rightInputIndex, int position) {
    if (leftInputIndex == rightInputIndex) {
      segmentTree.set(position, inputArray.get(leftInputIndex));
      return;
    }

    int middleIndex = (leftInputIndex + rightInputIndex) / 2;
    buildTreeRecursively(leftInputIndex, middleIndex, getLeftChildIndex(position));
    buildTreeRecursively(middleIndex + 1, rightInputIndex, getRightChildIndex(position));

    segmentTree.set(position, operation.apply(segmentTree.get(getLeftChildIndex(position)),
        segmentTree.get(getRightChildIndex(position))));
  }

  public T rangeQuery(int queryLeftIndex, int queryRightIndex) {
    int leftIndex = 0;
    int rightIndex = inputArray.size() - 1;
    int position = 0;
    return rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position);
  }

  private T rangeQueryHelper(int queryLeftIndex, int queryRightIndex, int leftIndex, int rightIndex, int position) {
    if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {
      return segmentTree.get(position);
    }

    if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {
      return operationFallback;
    }

    int middleIndex = (leftIndex + rightIndex) / 2;
    T leftOperationResult = rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, middleIndex, getLeftChildIndex(position));
    T rightOperationResult = rangeQueryHelper(queryLeftIndex, queryRightIndex, middleIndex + 1, rightIndex, getRightChildIndex(position));

    return operation.apply(leftOperationResult, rightOperationResult);
  }

  private int getLeftChildIndex(int parentIndex) {
    return (2 * parentIndex) + 1;
  }

  private int getRightChildIndex(int parentIndex) {
    return (2 * parentIndex) + 2;
  }

  public interface BinaryOperation<T> {

    T apply(T a, T b);
  }
}
