package main

func lengthOfLIS(nums []int) int {
    n := len(nums)
    if n == 0 {
        return 0
    }
    dp := make([]int, n)
    dp[0] = 1
    maxLen := 1
    for i := 1; i < n; i++ {
        dp[i] = 1
        for j := 0; j < i; j++ {
            if nums[i] > nums[j] && dp[i] < dp[j]+1 {
                dp[i] = dp[j] + 1
            }
        }
        if dp[i] > maxLen {
            maxLen = dp[i]
        }
    }
    return maxLen
}
