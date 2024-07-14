def linear_search(arr, target):
    for i, v in enumerate(arr):
        if v == target:
            return i
    return -1
