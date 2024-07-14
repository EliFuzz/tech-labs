import java.util.Arrays;

public class MaximumSubarray {

  public static int[] bfMaximumSubarray(int[] inputArray) {
    int maxSubarrayStartIndex = 0;
    int maxSubarrayLength = 0;
    int maxSubarraySum = Integer.MIN_VALUE;

    for (int startIndex = 0; startIndex < inputArray.length; startIndex++) {
      int subarraySum = 0;
      for (int arrLength = 1; arrLength <= inputArray.length - startIndex; arrLength++) {
        subarraySum += inputArray[startIndex + (arrLength - 1)];
        if (maxSubarraySum == Integer.MIN_VALUE || subarraySum > maxSubarraySum) {
          maxSubarraySum = subarraySum;
          maxSubarrayStartIndex = startIndex;
          maxSubarrayLength = arrLength;
        }
      }
    }

    return Arrays.copyOfRange(inputArray, maxSubarrayStartIndex, maxSubarrayStartIndex + maxSubarrayLength);
  }

  public static int dcMaximumSubarraySum(int[] inputArray) {
    return solveRecursively(inputArray, 0, false);
  }

  private static int solveRecursively(int[] inputArray, int elementIndex, boolean mustPick) {
    if (elementIndex >= inputArray.length) {
      return mustPick ? 0 : Integer.MIN_VALUE;
    }
    return Math.max(
        inputArray[elementIndex] + solveRecursively(inputArray, elementIndex + 1, true),
        mustPick ? 0 : solveRecursively(inputArray, elementIndex + 1, false)
    );
  }

  public static int[] dpMaximumSubarray(int[] inputArray) {
    int maxSum = Integer.MIN_VALUE;
    int currentSum = 0;

    int maxStartIndex = 0;
    int maxEndIndex = inputArray.length - 1;
    int currentStartIndex = 0;

    for (int currentIndex = 0; currentIndex < inputArray.length; currentIndex++) {
      currentSum += inputArray[currentIndex];

      if (maxSum < currentSum) {
        maxSum = currentSum;
        maxStartIndex = currentStartIndex;
        maxEndIndex = currentIndex;
      }

      if (currentSum < 0) {
        currentSum = 0;
        currentStartIndex = currentIndex + 1;
      }
    }

    return Arrays.copyOfRange(inputArray, maxStartIndex, maxEndIndex + 1);
  }
}
