package main

// 0/1 Knapsack Problem
func knapsack01(weights []int, values []int, capacity int) int {
	n := len(weights)
	dp := make([][]int, n+1)
	for i := range dp {
		dp[i] = make([]int, capacity+1)
	}

	for i := 1; i <= n; i++ {
		for j := 0; j <= capacity; j++ {
			if weights[i-1] > j {
				dp[i][j] = dp[i-1][j]
			} else {
				dp[i][j] = max(dp[i-1][j], dp[i-1][j-weights[i-1]]+values[i-1])
			}
		}
	}

	return dp[n][capacity]
}

// Unbounded Knapsack Problem
func unboundedKnapsack(weights []int, values []int, capacity int) int {
	dp := make([]int, capacity+1)

	for i := 0; i <= capacity; i++ {
		for j := 0; j < len(weights); j++ {
			if weights[j] <= i {
				dp[i] = max(dp[i], dp[i-weights[j]]+values[j])
			}
		}
	}

	return dp[capacity]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
