# recursive
def euclidean_recursive(a, b):
    return a if b == 0 else euclidean_recursive(b, a % b)

# iterative
def euclidean_iterative(a, b):
    while b != 0:
        a, b = b, a % b
    return a
