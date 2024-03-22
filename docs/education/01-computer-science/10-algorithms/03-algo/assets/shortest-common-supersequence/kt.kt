fun shortestCommonSupersequence(str1: String, str2: String): String {
    val m = str1.length
    val n = str2.length
    val dp = Array(m + 1) { IntArray(n + 1) }

    for (i in 0..m) {
        for (j in 0..n) {
            when {
                i == 0 -> dp[i][j] = j
                j == 0 -> dp[i][j] = i
                str1[i - 1] == str2[j - 1] -> dp[i][j] = dp[i - 1][j - 1] + 1
                else -> dp[i][j] = 1 + minOf(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    var i = m
    var j = n
    var result = ""
    while (i > 0 && j > 0) {
        when {
            str1[i - 1] == str2[j - 1] -> {
                result = str1[i - 1] + result
                i--
                j--
            }

            dp[i - 1][j] < dp[i][j - 1] -> {
                result = str1[i - 1] + result
                i--
            }

            else -> {
                result = str2[j - 1] + result
                j--
            }
        }
    }
    while (i > 0) {
        result = str1[i - 1] + result
        i--
    }
    while (j > 0) {
        result = str2[j - 1] + result
        j--
    }
    return result
}
