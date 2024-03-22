public class Main {

  // recursive
  public static int factorialRecursive(int n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorialRecursive(n - 1);
  }

  // iterative
  public static int factorialIterative(int n) {
    int result = 1;
    for (int i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
