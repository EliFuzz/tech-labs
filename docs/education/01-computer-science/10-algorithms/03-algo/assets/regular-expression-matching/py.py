def regular_expression_matching(string, pattern):
    prev_row = [False] * (len(pattern) + 1)
    current_row = [False] * (len(pattern) + 1)

    prev_row[0] = True

    for j in range(1, len(pattern) + 1):
        if pattern[j - 1] == '*':
            current_row[j] = prev_row[j - 2]

    for i in range(1, len(string) + 1):
        next_row = [False]
        for j in range(1, len(pattern) + 1):
            if pattern[j - 1] == '*':
                if prev_row[j] or (j > 1 and current_row[j - 2] and (pattern[j - 2] == string[i - 1] or pattern[j - 2] == '.')):
                    current_row[j] = True
                else:
                    current_row[j] = False
            elif pattern[j - 1] == string[i - 1] or pattern[j - 1] == '.':
                current_row[j] = prev_row[j - 1]
            else:
                current_row[j] = False
            next_row.append(current_row[j])
        prev_row = current_row[:]
        current_row = next_row

    return prev_row[len(pattern)]
