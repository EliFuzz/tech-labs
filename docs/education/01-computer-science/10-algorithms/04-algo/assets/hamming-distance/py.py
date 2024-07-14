def hamming_distance(str1, str2):
    if len(str1) != len(str2):
        return -1
    distance = 0
    for char1, char2 in zip(str1, str2):
        if char1 != char2:
            distance += 1
    return distance
