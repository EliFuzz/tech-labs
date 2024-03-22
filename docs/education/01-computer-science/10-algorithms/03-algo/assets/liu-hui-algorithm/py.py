import math

def liu_hui(n):
    side_length = 2.0
    polygon_sides = 6.0
    for _ in range(n):
        side_length = math.sqrt(4 - (side_length / 2) ** 2)
        polygon_sides *= 2
    return side_length * polygon_sides
