def prime_factors(n):
    factors = []

    while n % 2 == 0:
        factors.append(2)
        n //= 2

    factor = 3
    while factor <= int(n ** 0.5):
        while n % factor == 0:
            factors.append(factor)
            n //= factor
        factor += 2

    if n > 2:
        factors.append(n)

    return factors
