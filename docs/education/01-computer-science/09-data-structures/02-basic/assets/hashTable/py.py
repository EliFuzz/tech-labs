class HashTable:
    def __init__(self):
        self.table = [None] * 10

    def hash(self, key):
        return hash(key) % len(self.table)

    def insert(self, key, value):
        index = self.hash(key)
        self.table[index] = (key, value)

    def search(self, key):
        index = self.hash(key)
        if self.table[index] is not None:
            return self.table[index][1]
        return None

    def delete(self, key):
        index = self.hash(key)
        self.table[index] = None
