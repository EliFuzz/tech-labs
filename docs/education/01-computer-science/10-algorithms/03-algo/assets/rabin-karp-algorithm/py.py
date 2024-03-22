def rabin_karp(text, pattern):
    prime = 101
    result = []
    n, m = len(text), len(pattern)
    if n < m:
        return result

    h = 1
    for _ in range(m - 1):
        h = (h * 256) % prime

    pattern_hash = 0
    window_hash = 0
    for i in range(m):
        pattern_hash = (256 * pattern_hash + ord(pattern[i])) % prime
        window_hash = (256 * window_hash + ord(text[i])) % prime

    for i in range(n - m + 1):
        if pattern_hash == window_hash:
            match = True
            for j in range(m):
                if text[i + j] != pattern[j]:
                    match = False
                    break
            if match:
                result.append(i)
        if i < n - m:
            window_hash = (256 * (window_hash - ord(text[i]) * h) + ord(text[i + m])) % prime
    return result
