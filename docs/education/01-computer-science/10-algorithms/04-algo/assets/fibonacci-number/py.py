# Recursive
def fibonacciRecursive(n):
    if n <= 1:
        return n
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)

# Iterative
def fibonacciIterative(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
