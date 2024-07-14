package main

func regularExpressionMatching(str string, pattern string) bool {
	prevRow := make([]bool, len(pattern)+1)
	currentRow := make([]bool, len(pattern)+1)

	prevRow[0] = true

	for j := 1; j <= len(pattern); j++ {
		if pattern[j-1] == '*' {
			currentRow[j] = prevRow[j-2]
		}
	}

	for i := 1; i <= len(str); i++ {
		nextRow := make([]bool, 1)
		for j := 1; j <= len(pattern); j++ {
			if pattern[j-1] == '*' {
				if prevRow[j] || (j > 1 && currentRow[j-2] && (pattern[j-2] == str[i-1] || pattern[j-2] == '.')) {
					currentRow[j] = true
				} else {
					currentRow[j] = false
				}
			} else if pattern[j-1] == str[i-1] || pattern[j-1] == '.' {
				currentRow[j] = prevRow[j-1]
			} else {
				currentRow[j] = false
			}
			nextRow = append(nextRow, currentRow[j])
		}
		copy(prevRow, currentRow)
		currentRow = nextRow
	}

	return prevRow[len(pattern)]
}
