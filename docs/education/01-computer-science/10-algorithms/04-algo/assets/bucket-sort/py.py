def bucket_sort(arr):
    if len(arr) <= 1:
        return

    n = len(arr)
    buckets = [[] for _ in range(n)]

    for v in arr:
        index = int(v * n)
        buckets[index].append(v)

    for bucket in buckets:
        bucket.sort()

    k = 0
    for i in range(n):
        for j in range(len(buckets[i])):
            arr[k] = buckets[i][j]
            k += 1
