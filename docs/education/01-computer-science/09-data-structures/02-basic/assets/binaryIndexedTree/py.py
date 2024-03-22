class FenwickTree:
    def __init__(self, array_size):
        self.array_size = array_size
        self.tree_array = [0] * (array_size + 1)

    def increase(self, position, value):
        if position < 1 or position > self.array_size:
            raise ValueError('Position is out of allowed range')

        i = position
        while i <= self.array_size:
            self.tree_array[i] += value
            i += i & -i

        return self

    def query(self, position):
        if position < 1 or position > self.array_size:
            raise ValueError('Position is out of allowed range')

        total_sum = 0
        i = position

        while i > 0:
            total_sum += self.tree_array[i]
            i -= i & -i

        return total_sum

    def query_range(self, left_index, right_index):
        if left_index > right_index:
            raise ValueError('Left index can not be greater than right one')

        if left_index == 1:
            return self.query(right_index)

        return self.query(right_index) - self.query(left_index - 1)
