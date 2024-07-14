fun buildTable(pattern: String): IntArray {
    val table = IntArray(pattern.length)
    var prefix = 0

    for (i in 1 until pattern.length) {
        while (prefix > 0 && pattern[i] != pattern[prefix]) {
            prefix = table[prefix - 1]
        }
        if (pattern[i] == pattern[prefix]) {
            prefix++
        }
        table[i] = prefix
    }

    return table
}

fun kmpSearch(text: String, pattern: String): List<Int> {
    val table = buildTable(pattern)
    val matches = mutableListOf<Int>()
    var j = 0

    for (i in text.indices) {
        while (j > 0 && text[i] != pattern[j]) {
            j = table[j - 1]
        }
        if (text[i] == pattern[j]) {
            j++
        }
        if (j == pattern.length) {
            matches.add(i - pattern.length + 1)
            j = table[j - 1]
        }
    }

    return matches
}
