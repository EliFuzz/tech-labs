import java.util.HashMap;
import java.util.Map;

public class Main {

  public static int recursiveStaircaseBruteforce(int stairsNum) {
    if (stairsNum <= 0) {
      return 0;
    }

    if (stairsNum == 1 || stairsNum == 2) {
      return stairsNum;
    }

    return recursiveStaircaseBruteforce(stairsNum - 1) +
        recursiveStaircaseBruteforce(stairsNum - 2);
  }

  public static int recursiveStaircaseIterative(int stairsNum) {
    if (stairsNum <= 0) {
      return 0;
    }

    int[] steps = {1, 2};

    if (stairsNum <= 2) {
      return steps[stairsNum - 1];
    }

    for (int currentStep = 3; currentStep <= stairsNum; currentStep++) {
      int temp = steps[0];
      steps[0] = steps[1];
      steps[1] = temp + steps[1];
    }

    return steps[1];
  }

  public static int recursiveStaircaseDynamicProgramming(int stairsNum) {
    if (stairsNum < 0) {
      return 0;
    }

    int[] steps = new int[stairsNum + 1];

    steps[0] = 0;
    steps[1] = 1;
    steps[2] = 2;

    if (stairsNum <= 2) {
      return steps[stairsNum];
    }

    for (int currentStep = 3; currentStep <= stairsNum; currentStep++) {
      steps[currentStep] = steps[currentStep - 1] + steps[currentStep - 2];
    }

    return steps[stairsNum];
  }

  public static int recursiveStaircaseMemoization(int totalStairs) {
    Map<Integer, Integer> memo = new HashMap<>();

    return getSteps(totalStairs, memo);
  }

  private static int getSteps(int stairsNum, Map<Integer, Integer> memo) {
    if (stairsNum <= 0) {
      return 0;
    }

    if (stairsNum == 1 || stairsNum == 2) {
      return stairsNum;
    }

    if (memo.containsKey(stairsNum)) {
      return memo.get(stairsNum);
    }

    int result = getSteps(stairsNum - 1, memo) + getSteps(stairsNum - 2, memo);
    memo.put(stairsNum, result);

    return result;
  }
}
