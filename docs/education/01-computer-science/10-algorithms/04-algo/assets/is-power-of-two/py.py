def is_power_of_two_naive(n):
    if n <= 0:
        return False
    while n % 2 == 0:
        n //= 2
    return n == 1

def is_power_of_two_bitwise(n):
    return n > 0 and (n & (n - 1)) == 0
