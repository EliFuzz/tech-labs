import math

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

def distance(p1, p2):
    return math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)

def KNN(data, target, k):
    sorted_data = sorted(data, key=lambda x: distance(x, target))
    return sorted_data[:k]
