fun rabinKarp(text: String, pattern: String): List<Int> {
    val prime = 101
    val result = mutableListOf<Int>()
    val n = text.length
    val m = pattern.length
    if (n < m) {
        return result
    }

    var h = 1
    repeat(m - 1) {
        h = h * 256 % prime
    }

    var patternHash = 0
    var windowHash = 0
    for (i in 0 until m) {
        patternHash = (256 * patternHash + pattern[i].toInt()) % prime
        windowHash = (256 * windowHash + text[i].toInt()) % prime
    }

    for (i in 0..n - m) {
        if (patternHash == windowHash) {
            var match = true
            for (j in 0 until m) {
                if (text[i + j] != pattern[j]) {
                    match = false
                    break
                }
            }
            if (match) {
                result.add(i)
            }
        }
        
        if (i < n - m) {
            windowHash = (256 * (windowHash - text[i].toInt() * h) + text[i + m].toInt()) % prime
            if (windowHash < 0) {
                windowHash += prime
            }
        }
    }
    return result
}
