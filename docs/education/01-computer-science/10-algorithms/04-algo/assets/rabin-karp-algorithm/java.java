import java.util.ArrayList;
import java.util.List;

public class RabinKarp {

  private static final int prime = 101;

  public static List<Integer> rabinKarp(String text, String pattern) {
    List<Integer> indices = new ArrayList<>();
    int n = text.length();
    int m = pattern.length();
    if (n < m) {
      return indices;
    }

    int h = 1;
    for (int i = 0; i < m - 1; i++) {
      h = (h * 256) % prime;
    }

    int patternHash = 0;
    int windowHash = 0;
    for (int i = 0; i < m; i++) {
      patternHash = (256 * patternHash + pattern.charAt(i)) % prime;
      windowHash = (256 * windowHash + text.charAt(i)) % prime;
    }

    for (int i = 0; i <= n - m; i++) {
      if (patternHash == windowHash) {
        boolean match = true;
        for (int j = 0; j < m; j++) {
          if (text.charAt(i + j) != pattern.charAt(j)) {
            match = false;
            break;
          }
        }
        if (match) {
          indices.add(i);
        }
      }
      
      if (i < n - m) {
        windowHash = (256 * (windowHash - text.charAt(i) * h) + text.charAt(i + m)) % prime;
        if (windowHash < 0) {
          windowHash += prime;
        }
      }
    }
    return indices;
  }
}
