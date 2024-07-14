def sqrt_newton(x):
    z = x / 2
    for _ in range(10):
        z -= (z*z - x) / (2 * z)
    return z
