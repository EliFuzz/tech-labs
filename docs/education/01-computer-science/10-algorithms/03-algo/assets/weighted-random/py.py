import random

class WeightedItem:
    def __init__(self, item, weight):
        self.item = item
        self.weight = weight

def weighted_random(items):
    total_weight = sum(item.weight for item in items)
    random_weight = random.randint(0, total_weight - 1)

    cumulative_weight = 0
    for item in items:
        cumulative_weight += item.weight
        if random_weight < cumulative_weight:
            return item.item
