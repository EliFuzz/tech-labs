import java.util.ArrayList;
import java.util.List;

public class KMP {

  public static int[] buildTable(String pattern) {
    int[] table = new int[pattern.length()];
    int prefix = 0;

    for (int i = 1; i < pattern.length(); i++) {
      while (prefix > 0 && pattern.charAt(i) != pattern.charAt(prefix)) {
        prefix = table[prefix - 1];
      }
      if (pattern.charAt(i) == pattern.charAt(prefix)) {
        prefix++;
      }
      table[i] = prefix;
    }

    return table;
  }

  public static List<Integer> kmpSearch(String text, String pattern) {
    int[] table = buildTable(pattern);
    List<Integer> matches = new ArrayList<>();
    int j = 0;

    for (int i = 0; i < text.length(); i++) {
      while (j > 0 && text.charAt(i) != pattern.charAt(j)) {
        j = table[j - 1];
      }
      if (text.charAt(i) == pattern.charAt(j)) {
        j++;
      }
      if (j == pattern.length()) {
        matches.add(i - pattern.length() + 1);
        j = table[j - 1];
      }
    }

    return matches;
  }
}
