public class LongestCommonSubstring {

  public static String longestCommonSubstring(String str1, String str2) {
    int[][] matrix = new int[str1.length() + 1][str2.length() + 1];
    int maxLength = 0;
    int endIndex = 0;

    for (int i = 1; i <= str1.length(); i++) {
      for (int j = 1; j <= str2.length(); j++) {
        if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1] + 1;
          if (matrix[i][j] > maxLength) {
            maxLength = matrix[i][j];
            endIndex = i;
          }
        }
      }
    }

    return str1.substring(endIndex - maxLength, endIndex);
  }
}
