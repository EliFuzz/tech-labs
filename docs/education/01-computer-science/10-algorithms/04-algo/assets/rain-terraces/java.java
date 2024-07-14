public class RainTerraces {

  public static int bruteforceRainTerraces(int[] terraces) {
    int waterAmount = 0;

    for (int terraceIndex = 0; terraceIndex < terraces.length; terraceIndex++) {
      int leftHighestLevel = 0;
      for (int leftIndex = terraceIndex - 1; leftIndex >= 0; leftIndex--) {
        leftHighestLevel = Math.max(leftHighestLevel, terraces[leftIndex]);
      }

      int rightHighestLevel = 0;
      for (int rightIndex = terraceIndex + 1; rightIndex < terraces.length; rightIndex++) {
        rightHighestLevel = Math.max(rightHighestLevel, terraces[rightIndex]);
      }

      int terraceBoundaryLevel = Math.min(leftHighestLevel, rightHighestLevel);
      if (terraceBoundaryLevel > terraces[terraceIndex]) {
        waterAmount += terraceBoundaryLevel - terraces[terraceIndex];
      }
    }

    return waterAmount;
  }

  public static int dynamicProgrammingRainTerraces(int[] terraces) {
    int waterAmount = 0;

    int[] leftMaxLevels = new int[terraces.length];
    int[] rightMaxLevels = new int[terraces.length];

    leftMaxLevels[0] = terraces[0];
    for (int terraceIndex = 1; terraceIndex < terraces.length; terraceIndex++) {
      leftMaxLevels[terraceIndex] = Math.max(terraces[terraceIndex], leftMaxLevels[terraceIndex - 1]);
    }

    rightMaxLevels[terraces.length - 1] = terraces[terraces.length - 1];
    for (int terraceIndex = terraces.length - 2; terraceIndex >= 0; terraceIndex--) {
      rightMaxLevels[terraceIndex] = Math.max(terraces[terraceIndex], rightMaxLevels[terraceIndex + 1]);
    }

    for (int terraceIndex = 0; terraceIndex < terraces.length; terraceIndex++) {
      int currentTerraceBoundary = Math.min(leftMaxLevels[terraceIndex], rightMaxLevels[terraceIndex]);

      if (currentTerraceBoundary > terraces[terraceIndex]) {
        waterAmount += currentTerraceBoundary - terraces[terraceIndex];
      }
    }

    return waterAmount;
  }
}
