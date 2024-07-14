import math

def euclideanAlgorithm(originalA, originalB):
    a = abs(originalA)
    b = abs(originalB)

    return a if b == 0 else euclideanAlgorithm(b, a % b)

def leastCommonMultiple(a, b):
    if a == 0 or b == 0:
        return 0
    return abs(a * b) // euclideanAlgorithm(a, b)
