package main

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func shortestCommonSupersequence(str1, str2 string) string {
	m, n := len(str1), len(str2)
	dp := make([][]int, m+1)
	for i := range dp {
		dp[i] = make([]int, n+1)
	}

	for i := 0; i <= m; i++ {
		for j := 0; j <= n; j++ {
			if i == 0 {
				dp[i][j] = j
			} else if j == 0 {
				dp[i][j] = i
			} else if str1[i-1] == str2[j-1] {
				dp[i][j] = dp[i-1][j-1] + 1
			} else {
				dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1])
			}
		}
	}

	// Reconstruct the shortest common supersequence
	i, j := m, n
	var result string
	for i > 0 && j > 0 {
		if str1[i-1] == str2[j-1] {
			result = string(str1[i-1]) + result
			i--
			j--
		} else if dp[i-1][j] < dp[i][j-1] {
			result = string(str1[i-1]) + result
			i--
		} else {
			result = string(str2[j-1]) + result
			j--
		}
	}

	for i > 0 {
		result = string(str1[i-1]) + result
		i--
	}

	for j > 0 {
		result = string(str2[j-1]) + result
		j--
	}

	return result
}
