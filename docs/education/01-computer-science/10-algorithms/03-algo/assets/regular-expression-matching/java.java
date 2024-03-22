public class Main {

  public static boolean regularExpressionMatching(String str, String pattern) {
    boolean[] prevRow = new boolean[pattern.length() + 1];
    boolean[] currentRow = new boolean[pattern.length() + 1];

    prevRow[0] = true;

    for (int j = 1; j <= pattern.length(); j++) {
      if (pattern.charAt(j - 1) == '*') {
        currentRow[j] = prevRow[j - 2];
      }
    }

    for (int i = 1; i <= str.length(); i++) {
      boolean[] nextRow = new boolean[1];
      for (int j = 1; j <= pattern.length(); j++) {
        if (pattern.charAt(j - 1) == '*') {
          if (prevRow[j] || (j > 1 && currentRow[j - 2] && (pattern.charAt(j - 2) == str.charAt(i - 1) || pattern.charAt(j - 2) == '.'))) {
            currentRow[j] = true;
          } else {
            currentRow[j] = false;
          }
        } else if (pattern.charAt(j - 1) == str.charAt(i - 1) || pattern.charAt(j - 1) == '.') {
          currentRow[j] = prevRow[j - 1];
        } else {
          currentRow[j] = false;
        }
        nextRow = Arrays.copyOf(nextRow, nextRow.length + 1);
        nextRow[nextRow.length - 1] = currentRow[j];
      }
      System.arraycopy(currentRow, 0, prevRow, 0, prevRow.length);
      currentRow = nextRow;
    }

    return prevRow[pattern.length()];
  }
}
