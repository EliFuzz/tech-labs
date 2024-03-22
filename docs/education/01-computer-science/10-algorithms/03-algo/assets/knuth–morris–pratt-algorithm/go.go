package main

func buildTable(pattern string) []int {
    table := make([]int, len(pattern))
    table[0] = 0
    prefix := 0

    for i := 1; i < len(pattern); i++ {
        for prefix > 0 && pattern[i] != pattern[prefix] {
            prefix = table[prefix-1]
        }
        if pattern[i] == pattern[prefix] {
            prefix++
        }
        table[i] = prefix
    }

    return table
}

func kmpSearch(text string, pattern string) []int {
    table := buildTable(pattern)
    matches := make([]int, 0)

    j := 0
    for i := 0; i < len(text); i++ {
        for j > 0 && text[i] != pattern[j] {
            j = table[j-1]
        }
        if text[i] == pattern[j] {
            j++
        }
        if j == len(pattern) {
            matches = append(matches, i-len(pattern)+1)
            j = table[j-1]
        }
    }

    return matches
}
