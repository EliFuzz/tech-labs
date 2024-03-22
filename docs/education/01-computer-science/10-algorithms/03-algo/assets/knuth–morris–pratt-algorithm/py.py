def build_table(pattern):
    table = [0] * len(pattern)
    prefix = 0

    for i in range(1, len(pattern)):
        while prefix > 0 and pattern[i] != pattern[prefix]:
            prefix = table[prefix - 1]
        if pattern[i] == pattern[prefix]:
            prefix += 1
        table[i] = prefix

    return table

def kmp_search(text, pattern):
    table = build_table(pattern)
    matches = []
    j = 0

    for i in range(len(text)):
        while j > 0 and text[i] != pattern[j]:
            j = table[j - 1]
        if text[i] == pattern[j]:
            j += 1
        if j == len(pattern):
            matches.append(i - len(pattern) + 1)
            j = table[j - 1]

    return matches
