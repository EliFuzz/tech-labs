// 0/1 Knapsack Problem
function knapsack01(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const weight = weights[i - 1];
    const value = values[i - 1];
    for (let j = 0; j <= capacity; j++) {
      if (weight > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
      }
    }
  }

  return dp[n][capacity];
}

// Unbounded Knapsack Problem
function unboundedKnapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array(capacity + 1).fill(0);

  for (let i = 0; i <= capacity; i++) {
    for (let j = 0; j < n; j++) {
      if (weights[j] <= i) {
        dp[i] = Math.max(dp[i], dp[i - weights[j]] + values[j]);
      }
    }
  }

  return dp[capacity];
}
