def cartesian_product(arrays):
    result = [[]]
    for array in arrays:
        result = [x + [y] for x in result for y in array]
    return result
