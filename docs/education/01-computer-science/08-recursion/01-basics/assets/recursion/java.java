import java.util.HashMap;

public class Recursion {

  static int factorialRecursive(int n) {
    if (n == 0 || n == 1) {
      return 1;
    }
    return n * factorialRecursive(n - 1);
  }

  static int factorialIterative(int n) {
    int result = 1;
    for (int i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  static int factorialMemoization(int n, HashMap<Integer, Integer> memo) {
    if (n == 0 || n == 1) {
      return 1;
    }
    if (memo.containsKey(n)) {
      return memo.get(n);
    }
    int result = n * factorialMemoization(n - 1, memo);
    memo.put(n, result);
    return result;
  }

  static int factorialTabulation(int n) {
    int[] table = new int[n + 1];
    table[0] = 1;
    for (int i = 1; i <= n; i++) {
      table[i] = i * table[i - 1];
    }
    return table[n];
  }

  static int fibonacciRecursive(int n) {
    if (n <= 1) {
      return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }

  static int fibonacciIterative(int n) {
    if (n <= 1) {
      return n;
    }
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
      int temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  static int fibonacciMemoization(int n, HashMap<Integer, Integer> memo) {
    if (n <= 1) {
      return n;
    }
    if (memo.containsKey(n)) {
      return memo.get(n);
    }
    int result = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
    memo.put(n, result);
    return result;
  }

  static int fibonacciTabulation(int n) {
    if (n <= 1) {
      return n;
    }
    int[] table = new int[n + 1];
    table[1] = 1;
    for (int i = 2; i <= n; i++) {
      table[i] = table[i - 1] + table[i - 2];
    }
    return table[n];
  }
}
