# recursive
def factorial_recursive(n):
    return 1 if n <= 1 else n * factorial_recursive(n - 1)

# iterative
def factorial_iterative(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result
