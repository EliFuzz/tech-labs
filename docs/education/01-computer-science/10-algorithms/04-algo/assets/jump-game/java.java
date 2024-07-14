import java.util.*;

public class JumpGame {

  public static boolean backtrackingJumpGame(int[] numbers, int startIndex, List<Integer> currentJumps) {
    if (startIndex == numbers.length - 1) {
      return true;
    }

    int maxJumpLength = Math.min(numbers[startIndex], numbers.length - 1 - startIndex);

    for (int jumpLength = maxJumpLength; jumpLength > 0; jumpLength--) {
      int nextIndex = startIndex + jumpLength;
      currentJumps.add(nextIndex);

      boolean isJumpSuccessful = backtrackingJumpGame(numbers, nextIndex, currentJumps);

      if (isJumpSuccessful) {
        return true;
      }

      currentJumps.remove(currentJumps.size() - 1);
    }

    return false;
  }

  public static boolean dpBottomUpJumpGame(int[] numbers) {
    Boolean[] cellsGoodness = new Boolean[numbers.length];
    Arrays.fill(cellsGoodness, null);
    cellsGoodness[cellsGoodness.length - 1] = true;

    for (int cellIndex = numbers.length - 2; cellIndex >= 0; cellIndex--) {
      int maxJumpLength = Math.min(numbers[cellIndex], numbers.length - 1 - cellIndex);

      for (int jumpLength = maxJumpLength; jumpLength > 0; jumpLength--) {
        int nextIndex = cellIndex + jumpLength;
        if (cellsGoodness[nextIndex] != null && cellsGoodness[nextIndex]) {
          cellsGoodness[cellIndex] = true;
          break;
        }
      }
    }

    return cellsGoodness[0] != null && cellsGoodness[0];
  }

  public static boolean dpTopDownJumpGame(int[] numbers, int startIndex, List<Integer> currentJumps, Boolean[] cellsGoodness) {
    if (startIndex == numbers.length - 1) {
      return true;
    }

    Boolean[] currentCellsGoodness = Arrays.copyOf(cellsGoodness, cellsGoodness.length);
    if (currentCellsGoodness.length == 0) {
      currentCellsGoodness = new Boolean[numbers.length];
      Arrays.fill(currentCellsGoodness, null);
      currentCellsGoodness[cellsGoodness.length - 1] = true;
    }

    int maxJumpLength = Math.min(numbers[startIndex], numbers.length - 1 - startIndex);

    for (int jumpLength = maxJumpLength; jumpLength > 0; jumpLength--) {
      int nextIndex = startIndex + jumpLength;

      if (currentCellsGoodness[nextIndex] != Boolean.FALSE) {
        currentJumps.add(nextIndex);

        boolean isJumpSuccessful = dpTopDownJumpGame(numbers, nextIndex, currentJumps, currentCellsGoodness);

        if (isJumpSuccessful) {
          return true;
        }

        currentJumps.remove(currentJumps.size() - 1);

        currentCellsGoodness[nextIndex] = false;
      }
    }

    return false;
  }

  public static boolean greedyJumpGame(int[] numbers) {
    int leftGoodPosition = numbers.length - 1;

    for (int numberIndex = numbers.length - 2; numberIndex >= 0; numberIndex--) {
      int maxCurrentJumpLength = numberIndex + numbers[numberIndex];
      if (maxCurrentJumpLength >= leftGoodPosition) {
        leftGoodPosition = numberIndex;
      }
    }

    return leftGoodPosition == 0;
  }
}
