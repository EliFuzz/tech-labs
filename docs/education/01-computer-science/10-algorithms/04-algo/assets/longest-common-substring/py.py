def longest_common_substring(str1, str2):
    matrix = [[0] * (len(str2) + 1) for _ in range(len(str1) + 1)]
    longest = ""

    for i in range(1, len(str1) + 1):
        for j in range(1, len(str2) + 1):
            if str1[i - 1] == str2[j - 1]:
                matrix[i][j] = matrix[i - 1][j - 1] + 1
                if matrix[i][j] > len(longest):
                    longest = str1[i - matrix[i][j] : i]

    return longest
