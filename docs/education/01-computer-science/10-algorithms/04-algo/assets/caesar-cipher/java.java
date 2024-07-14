public class CaesarCipher {

  public static String caesarCipher(String text, int shift) {
    StringBuilder result = new StringBuilder();
    for (char c : text.toCharArray()) {
      if (Character.isUpperCase(c)) {
        result.append((char) ((c + shift - 'A') % 26 + 'A'));
      } else if (Character.isLowerCase(c)) {
        result.append((char) ((c + shift - 'a') % 26 + 'a'));
      } else {
        result.append(c);
      }
    }
    return result.toString();
  }
}
