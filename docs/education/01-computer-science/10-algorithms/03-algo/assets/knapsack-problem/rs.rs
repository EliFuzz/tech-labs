// 0/1 Knapsack Problem
fn knapsack_01(weights: &[usize], values: &[usize], capacity: usize) -> usize {
    let n = weights.len();
    let mut dp = vec![vec![0; capacity + 1]; n + 1];

    for i in 1..=n {
        for j in 0..=capacity {
            if weights[i - 1] <= j {
                dp[i][j] = dp[i - 1][j].max(dp[i - 1][j - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    dp[n][capacity]
}

// Unbounded Knapsack Problem
fn unbounded_knapsack(weights: &[usize], values: &[usize], capacity: usize) -> usize {
    let mut dp = vec![0; capacity + 1];

    for i in 0..=capacity {
        for j in 0..weights.len() {
            if weights[j] <= i {
                dp[i] = dp[i].max(dp[i - weights[j]] + values[j]);
            }
        }
    }

    dp[capacity]
}
