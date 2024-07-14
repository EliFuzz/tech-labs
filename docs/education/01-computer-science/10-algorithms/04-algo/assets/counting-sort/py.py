def counting_sort(arr, max_val):
    count = [0] * (max_val + 1)
    sorted_arr = []

    for num in arr:
        count[num] += 1

    for i in range(max_val + 1):
        sorted_arr.extend([i] * count[i])

    return sorted_arr
