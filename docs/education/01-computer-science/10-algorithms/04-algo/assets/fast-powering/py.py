# iterative
def fast_power_iterative(x, n):
    result = 1
    while n > 0:
        if n & 1:
            result *= x
        x *= x
        n >>= 1
    return result

# recursive
def fast_power_recursive(x, n):
    if n == 0:
        return 1
    temp = fast_power_recursive(x, n // 2)
    if n % 2 == 0:
        return temp * temp
    return x * temp * temp
