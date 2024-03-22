public class FenwickTree {

  private int arraySize;
  private int[] treeArray;

  public FenwickTree(int arraySize) {
    this.arraySize = arraySize;
    this.treeArray = new int[arraySize + 1];
  }

  public FenwickTree increase(int position, int value) {
    if (position < 1 || position > arraySize) {
      throw new IllegalArgumentException("Position is out of allowed range");
    }

    for (int i = position; i <= arraySize; i += (i & -i)) {
      treeArray[i] += value;
    }

    return this;
  }

  public int query(int position) {
    if (position < 1 || position > arraySize) {
      throw new IllegalArgumentException("Position is out of allowed range");
    }

    int sum = 0;

    for (int i = position; i > 0; i -= (i & -i)) {
      sum += treeArray[i];
    }

    return sum;
  }

  public int queryRange(int leftIndex, int rightIndex) {
    if (leftIndex > rightIndex) {
      throw new IllegalArgumentException("Left index can not be greater than right one");
    }

    if (leftIndex == 1) {
      return query(rightIndex);
    }

    return query(rightIndex) - query(leftIndex - 1);
  }
}
