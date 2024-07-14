def getMax(arr):
    max_val = arr[0]
    for val in arr:
        if val > max_val:
            max_val = val
    return max_val

def countSort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        count[arr[i] // exp % 10] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    i = n - 1
    while i >= 0:
        output[count[arr[i] // exp % 10] - 1] = arr[i]
        count[arr[i] // exp % 10] -= 1
        i -= 1

    for i in range(n):
        arr[i] = output[i]

def radixSort(arr):
    max_val = getMax(arr)
    exp = 1
    while max_val // exp > 0:
        countSort(arr, exp)
        exp *= 10
