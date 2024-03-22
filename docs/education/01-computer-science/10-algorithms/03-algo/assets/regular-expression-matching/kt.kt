fun regularExpressionMatching(str: String, pattern: String): Boolean {
    var prevRow = BooleanArray(pattern.length + 1)
    var currentRow = BooleanArray(pattern.length + 1)

    prevRow[0] = true

    for (j in 1..pattern.length) {
        if (pattern[j - 1] == '*') {
            currentRow[j] = prevRow[j - 2]
        }
    }

    for (i in 1..str.length) {
        var nextRow = booleanArrayOf()
        for (j in 1..pattern.length) {
            if (pattern[j - 1] == '*') {
                if (prevRow[j] || (j > 1 && currentRow[j - 2] && (pattern[j - 2] == str[i - 1] || pattern[j - 2] == '.'))) {
                    currentRow[j] = true
                } else {
                    currentRow[j] = false
                }
            } else if (pattern[j - 1] == str[i - 1] || pattern[j - 1] == '.') {
                currentRow[j] = prevRow[j - 1]
            } else {
                currentRow[j] = false
            }
            nextRow += currentRow[j]
        }
        prevRow = currentRow.copyOf()
        currentRow = nextRow.toBooleanArray()
    }

    return prevRow[pattern.length]
}
