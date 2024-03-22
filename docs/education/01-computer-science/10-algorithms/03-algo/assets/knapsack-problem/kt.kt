import kotlin.math.max

// 0/1 Knapsack Problem
fun knapsack01(weights: IntArray, values: IntArray, capacity: Int): Int {
    val n = weights.size
    val dp = Array(n + 1) { IntArray(capacity + 1) }

    for (i in 1..n) {
        for (j in 0..capacity) {
            dp[i][j] = if (weights[i - 1] > j) {
                dp[i - 1][j]
            } else {
                max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1])
            }
        }
    }

    return dp[n][capacity]
}

// Unbounded Knapsack Problem
fun unboundedKnapsack(weights: IntArray, values: IntArray, capacity: Int): Int {
    val dp = IntArray(capacity + 1)

    for (i in 0..capacity) {
        for (j in weights.indices) {
            if (weights[j] <= i) {
                dp[i] = max(dp[i], dp[i - weights[j]] + values[j])
            }
        }
    }

    return dp[capacity]
}
