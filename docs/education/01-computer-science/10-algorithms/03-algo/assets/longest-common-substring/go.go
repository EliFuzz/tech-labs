package main

func longestCommonSubstring(str1, str2 string) string {
    var longest, current string
    matrix := make([][]int, len(str1)+1)
    for i := range matrix {
        matrix[i] = make([]int, len(str2)+1)
    }

    for i := 1; i <= len(str1); i++ {
        for j := 1; j <= len(str2); j++ {
            if str1[i-1] == str2[j-1] {
                matrix[i][j] = matrix[i-1][j-1] + 1
                current = str1[i-matrix[i][j] : i]
                if len(current) > len(longest) {
                    longest = current
                }
            }
        }
    }

    return longest
}
