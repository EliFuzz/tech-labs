fun min(x: Int, y: Int, z: Int) = if (x <= y && x <= z) x else if (y <= x && y <= z) y else z

fun levenshteinDistance(s1: String, s2: String): Int {
    val m = s1.length
    val n = s2.length
    val dp = Array(m + 1) { IntArray(n + 1) }

    for (i in 0..m) {
        for (j in 0..n) {
            when {
                i == 0 -> dp[i][j] = j
                j == 0 -> dp[i][j] = i
                s1[i - 1] == s2[j - 1] -> dp[i][j] = dp[i - 1][j - 1]
                else -> dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
            }
        }
    }
    return dp[m][n]
}
