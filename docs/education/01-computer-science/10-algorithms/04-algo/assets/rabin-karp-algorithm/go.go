package main

const (
	prime = 101
)

func rabinKarp(text, pattern string) []int {
	var result []int
	n, m := len(text), len(pattern)
	if n < m {
		return result
	}

	h := 1
	for i := 0; i < m-1; i++ {
		h = (h * 256) % prime
	}

	patternHash := 0
	windowHash := 0
	for i := 0; i < m; i++ {
		patternHash = (256*patternHash + int(pattern[i])) % prime
		windowHash = (256*windowHash + int(text[i])) % prime
	}

	for i := 0; i <= n-m; i++ {
		if patternHash == windowHash {
			match := true
			for j := 0; j < m; j++ {
				if text[i+j] != pattern[j] {
					match = false
					break
				}
			}
			if match {
				result = append(result, i)
			}
		}

		if i < n-m {
			windowHash = (256*(windowHash-int(text[i])*h) + int(text[i+m])) % prime
			if windowHash < 0 {
				windowHash += prime
			}
		}
	}

	return result
}
