fun countPartitions(n: Int): Int {
    val dp = IntArray(n + 1)
    dp[0] = 1
    for (i in 1..n) {
        for (j in i..n) {
            dp[j] += dp[j - i]
        }
    }
    return dp[n]
}
