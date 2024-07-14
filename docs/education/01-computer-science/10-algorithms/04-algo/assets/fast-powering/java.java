public class Main {

  // iterative
  public static int fastPowerIterative(int x, int n) {
    int result = 1;
    while (n > 0) {
      if ((n & 1) == 1) {
        result *= x;
      }
      x *= x;
      n >>= 1;
    }
    return result;
  }

  // recursive
  public static int fastPowerRecursive(int x, int n) {
    if (n == 0) {
      return 1;
    }
    int temp = fastPowerRecursive(x, n / 2);
    if (n % 2 == 0) {
      return temp * temp;
    }
    return x * temp * temp;
  }
}
