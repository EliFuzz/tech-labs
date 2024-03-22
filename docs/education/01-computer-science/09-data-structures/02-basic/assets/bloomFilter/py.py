class BloomFilter:
    def __init__(self, size=100):
        self.size = size
        self.storage = self.create_store(size)

    def insert(self, item):
        hash_values = self.get_hash_values(item)
        for val in hash_values:
            self.storage[val] = True

    def may_contain(self, item):
        hash_values = self.get_hash_values(item)
        for hash_index in range(len(hash_values)):
            if not self.storage[hash_values[hash_index]]:
                return False
        return True

    def create_store(self, size):
        return [False] * size

    def first_hash(self, item):
        hash_val = 0
        for char_index in range(len(item)):
            char = ord(item[char_index])
            hash_val = (hash_val << 5) + hash_val + char
            hash_val &= hash_val
            hash_val = abs(hash_val)
        return hash_val % self.size

    def second_hash(self, item):
        hash_val = 5381
        for char_index in range(len(item)):
            char = ord(item[char_index])
            hash_val = (hash_val << 5) + hash_val + char
        return abs(hash_val % self.size)

    def third_hash(self, item):
        hash_val = 0
        for char_index in range(len(item)):
            char = ord(item[char_index])
            hash_val = (hash_val << 5) - hash_val
            hash_val += char
            hash_val &= hash_val
        return abs(hash_val % self.size)

    def get_hash_values(self, item):
        return [self.first_hash(item), self.second_hash(item), self.third_hash(item)]
