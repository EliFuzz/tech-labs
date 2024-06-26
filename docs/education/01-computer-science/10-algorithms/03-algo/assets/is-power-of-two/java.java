public class Main {

  public static boolean isPowerOfTwoNaive(int n) {
    if (n <= 0) {
      return false;
    }
    while (n % 2 == 0) {
      n /= 2;
    }
    return n == 1;
  }

  public static boolean isPowerOfTwoBitwise(int n) {
    return n > 0 && (n & (n - 1)) == 0;
  }
}
