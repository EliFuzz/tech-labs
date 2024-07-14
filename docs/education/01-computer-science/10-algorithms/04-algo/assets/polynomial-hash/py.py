class SimplePolynomialHash:
    def __init__(self, base=17):
        self.base = base

    def hash(self, word):
        hash_value = 0
        for char_index in range(len(word)):
            hash_value += ord(word[char_index]) * self.base ** char_index
        return hash_value

    def roll(self, prev_hash, prev_word, new_word):
        hash_value = prev_hash
        prev_value = ord(prev_word[0])
        new_value = ord(new_word[-1])

        hash_value -= prev_value
        hash_value //= self.base
        hash_value += new_value * self.base ** (len(new_word) - 1)

        return hash_value


class PolynomialHash:
    def __init__(self, base=37, modulus=101):
        self.base = base
        self.modulus = modulus

    def hash(self, word):
        char_codes = [self.char_to_number(char) for char in word]

        hash_value = 0
        for char_code in char_codes:
            hash_value *= self.base
            hash_value += char_code
            hash_value %= self.modulus

        return hash_value

    def roll(self, prev_hash, prev_word, new_word):
        hash_value = prev_hash

        prev_value = self.char_to_number(prev_word[0])
        new_value = self.char_to_number(new_word[-1])

        prev_value_multiplier = 1
        for i in range(1, len(prev_word)):
            prev_value_multiplier *= self.base
            prev_value_multiplier %= self.modulus

        hash_value += self.modulus
        hash_value -= (prev_value * prev_value_multiplier) % self.modulus

        hash_value *= self.base
        hash_value += new_value
        hash_value %= self.modulus

        return hash_value

    def char_to_number(self, char):
        char_code = ord(char)

        surrogate = ord(char[1]) if len(char) == 2 else None
        if surrogate is not None:
            surrogate_shift = 2 ** 16
            char_code += surrogate * surrogate_shift

        return char_code
