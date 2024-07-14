public class HammingDistance {

  public static int hammingDistance(String str1, String str2) {
    if (str1.length() != str2.length()) {
      return -1;
    }
    int distance = 0;
    for (int i = 0; i < str1.length(); i++) {
      if (str1.charAt(i) != str2.charAt(i)) {
        distance++;
      }
    }
    return distance;
  }
}
