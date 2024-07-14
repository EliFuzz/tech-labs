def horners_method(coefficients, x):
    result = coefficients[0]
    for coefficient in coefficients[1:]:
        result = result * x + coefficient
    return result
