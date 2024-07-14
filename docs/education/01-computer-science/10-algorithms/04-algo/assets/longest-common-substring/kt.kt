fun longestCommonSubstring(str1: String, str2: String): String {
    val matrix = Array(str1.length + 1) { IntArray(str2.length + 1) }
    var longest = ""

    for (i in 1..str1.length) {
        for (j in 1..str2.length) {
            if (str1[i - 1] == str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1
                if (matrix[i][j] > longest.length) {
                    longest = str1.substring(i - matrix[i][j], i)
                }
            }
        }
    }

    return longest
}
