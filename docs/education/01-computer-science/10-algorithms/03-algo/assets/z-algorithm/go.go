package main

func zAlgorithm(text string) []int {
	n := len(text)
	z := make([]int, n)
	var l, r int
	for i := 1; i < n; i++ {
		if i <= r {
			z[i] = min(r-i+1, z[i-l])
		}
		for i+z[i] < n && text[z[i]] == text[i+z[i]] {
			z[i]++
		}
		if i+z[i]-1 > r {
			l = i
			r = i + z[i] - 1
		}
	}
	return z
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
