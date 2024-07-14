import java.util.Arrays;

public class Knapsack {

  // 0/1 Knapsack Problem
  public static int knapsack01(int[] weights, int[] values, int capacity) {
    int n = weights.length;
    int[][] dp = new int[n + 1][capacity + 1];

    for (int i = 1; i <= n; i++) {
      for (int j = 0; j <= capacity; j++) {
        if (weights[i - 1] > j) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
        }
      }
    }

    return dp[n][capacity];
  }

  // Unbounded Knapsack Problem
  public static int unboundedKnapsack(int[] weights, int[] values, int capacity) {
    int[] dp = new int[capacity + 1];

    for (int i = 0; i <= capacity; i++) {
      for (int j = 0; j < weights.length; j++) {
        if (weights[j] <= i) {
          dp[i] = Math.max(dp[i], dp[i - weights[j]] + values[j]);
        }
      }
    }

    return dp[capacity];
  }
}
