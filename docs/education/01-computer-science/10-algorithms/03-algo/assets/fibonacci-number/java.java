public class Fibonacci {

  // Recursive
  public static int fibonacciRecursive(int n) {
    if (n <= 1) {
      return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }

  // Iterative
  public static int fibonacciIterative(int n) {
    if (n <= 1) {
      return n;
    }
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
      int temp = b;
      b = a + b;
      a = temp;
    }
    return b;
  }
}
