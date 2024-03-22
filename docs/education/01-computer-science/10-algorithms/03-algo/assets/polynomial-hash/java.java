import java.util.Arrays;

class SimplePolynomialHash {

  private final int base;

  SimplePolynomialHash(int base) {
    this.base = base;
  }

  int hash(String word) {
    int hash = 0;
    for (int charIndex = 0; charIndex < word.length(); charIndex++) {
      hash += word.charAt(charIndex) * Math.pow(base, charIndex);
    }
    return hash;
  }

  int roll(int prevHash, String prevWord, String newWord) {
    int hash = prevHash;
    int prevValue = prevWord.charAt(0);
    int newValue = newWord.charAt(newWord.length() - 1);

    hash -= prevValue;
    hash /= base;
    hash += newValue * Math.pow(base, newWord.length() - 1);

    return hash;
  }
}

class PolynomialHash {

  private final int base;
  private final int modulus;

  PolynomialHash() {
    this.base = 37;
    this.modulus = 101;
  }

  PolynomialHash(int base, int modulus) {
    this.base = base;
    this.modulus = modulus;
  }

  int hash(String word) {
    int[] charCodes = word.chars().map(this::charToNumber).toArray();

    int hash = 0;
    for (int charIndex = 0; charIndex < charCodes.length; charIndex++) {
      hash *= base;
      hash += charCodes[charIndex];
      hash %= modulus;
    }

    return hash;
  }

  int roll(int prevHash, String prevWord, String newWord) {
    int hash = prevHash;
    int prevValue = charToNumber(prevWord.charAt(0));
    int newValue = charToNumber(newWord.charAt(newWord.length() - 1));

    int prevValueMultiplier = 1;
    for (int i = 1; i < prevWord.length(); i++) {
      prevValueMultiplier *= base;
      prevValueMultiplier %= modulus;
    }

    hash += modulus;
    hash -= (prevValue * prevValueMultiplier) % modulus;

    hash *= base;
    hash += newValue;
    hash %= modulus;

    return hash;
  }

  private int charToNumber(int charCode) {
    if (Character.charCount(charCode) == 2) {
      int surrogateShift = 1 << 16;
      charCode += Character.codePointAt(Character.toChars(charCode), 1) * surrogateShift;
    }
    return charCode;
  }
}
