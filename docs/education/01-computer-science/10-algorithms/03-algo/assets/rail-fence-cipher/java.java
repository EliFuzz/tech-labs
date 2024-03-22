import java.util.ArrayList;
import java.util.List;

public class RailFenceCipher {

  static final int UP = -1;
  static final int DOWN = 1;

  static int[] buildFence(int rowsNum) {
    int[] fence = new int[rowsNum];
    for (int i = 0; i < rowsNum; i++) {
      fence[i] = 0;
    }
    return fence;
  }

  static int getNextDirection(int railCount, int currentRail, int direction) {
    if (currentRail == 0) {
      return DOWN;
    } else if (currentRail == railCount - 1) {
      return UP;
    } else {
      return direction;
    }
  }

  static int[][] fillEncodeFence(int[][] fence, String string, int railCount) {
    int currentRail = 0;
    int direction = DOWN;

    for (char c : string.toCharArray()) {
      fence[currentRail][fence[currentRail].length - 1] = c;
      direction = getNextDirection(railCount, currentRail, direction);
      currentRail += direction;
    }

    return fence;
  }

  static int[][] fillDecodeFence(int[][] fence, String string, int railCount) {
    int currentRail = 0;
    int currentColumn = 0;
    int direction = DOWN;

    for (char c : string.toCharArray()) {
      fence[currentRail][currentColumn] = c;
      direction = getNextDirection(railCount, currentRail, direction);
      currentRail += direction;
      currentColumn = (currentColumn + 1) % string.length();
    }

    return fence;
  }

  static String decodeFence(int[][] fence, int railCount) {
    StringBuilder decodedMessage = new StringBuilder();

    int currentRail = 0;
    int direction = DOWN;

    for (int i = 0; i < railCount; i++) {
      for (int j = 0; j < fence[currentRail].length; j++) {
        if (fence[currentRail][j] != 0) {
          decodedMessage.append((char) fence[currentRail][j]);
        }
      }
      direction = getNextDirection(railCount, currentRail, direction);
      currentRail += direction;
    }

    return decodedMessage.toString();
  }

  public static String encodeRailFenceCipher(String string, int railCount) {
    int[][] fence = new int[railCount][string.length()];
    fillEncodeFence(fence, string, railCount);
    StringBuilder encodedMessage = new StringBuilder();
    for (int i = 0; i < railCount; i++) {
      for (int j = 0; j < fence[i].length; j++) {
        if (fence[i][j] != 0) {
          encodedMessage.append((char) fence[i][j]);
        }
      }
    }
    return encodedMessage.toString();
  }

  public static String decodeRailFenceCipher(String string, int railCount) {
    int[][] fence = new int[railCount][string.length()];
    fillDecodeFence(fence, string, railCount);
    return decodeFence(fence, railCount);
  }
}
