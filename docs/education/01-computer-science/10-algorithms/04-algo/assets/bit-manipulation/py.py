def get_bit(number, bit_position):
    return (number >> bit_position) & 1

def set_bit(number, bit_position):
    return number | (1 << bit_position)

def clear_bit(number, bit_position):
    return number & ~(1 << bit_position)

def update_bit(number, bit_position, bit_value):
    mask = ~(1 << bit_position)
    return (number & mask) | (bit_value << bit_position)

def is_even(number):
    return (number & 1) == 0

def is_positive(number):
    return number >= 0 and (number & 0x80000000) == 0

def multiply_by_two(number):
    return number << 1

def divide_by_two(number):
    return number >> 1

def switch_sign(number):
    return ~number + 1

def multiply(a, b):
    if b == 0:
        return 0
    if b > 0:
        return a + multiply(a, b - 1)
    if b < 0:
        return -multiply(a, -b)

def multiply_unsigned(x, y):
    result = 0
    while y > 0:
        if y & 1:
            result += x
        x <<= 1
        y >>= 1
    return result

def count_set_bits(number):
    count = 0
    while number:
        count += number & 1
        number >>= 1
    return count

def bits_diff(a, b):
    count = 0
    diff = a ^ b
    while diff:
        count += diff & 1
        diff >>= 1
    return count

def bit_length(number):
    count = 0
    while number:
        count += 1
        number >>= 1
    return count

def is_power_of_two(number):
    return number != 0 and (number & (number - 1)) == 0

def full_adder(a, b):
    carry = 0
    result = 0
    i = 0
    while a != 0 or b != 0 or carry != 0:
        bit_a = a & 1
        bit_b = b & 1
        sum = bit_a ^ bit_b ^ carry
        result |= sum << i
        carry = (bit_a & bit_b) | (bit_a & carry) | (bit_b & carry)
        a >>= 1
        b >>= 1
        i += 1
    return result
