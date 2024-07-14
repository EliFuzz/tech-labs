fun lengthOfLIS(nums: IntArray): Int {
    val n = nums.size
    if (n == 0) return 0
    val dp = IntArray(n) { 1 }
    var maxLen = 1
    for (i in 1 until n) {
        for (j in 0 until i) {
            if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1
            }
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i]
        }
    }
    return maxLen
}
