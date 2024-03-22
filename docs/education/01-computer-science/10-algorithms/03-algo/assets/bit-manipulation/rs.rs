fn get_bit(number: i32, bit_position: i32) -> i32 {
    (number >> bit_position) & 1
}

fn set_bit(number: i32, bit_position: i32) -> i32 {
    number | (1 << bit_position)
}

fn clear_bit(number: i32, bit_position: i32) -> i32 {
    number & !(1 << bit_position)
}

fn update_bit(number: i32, bit_position: i32, bit_value: i32) -> i32 {
    let mask = !(1 << bit_position);
    (number & mask) | (bit_value << bit_position)
}

fn is_even(number: i32) -> bool {
    (number & 1) == 0
}

fn is_positive(number: i32) -> bool {
    number >= 0 && (number & 0x80000000) == 0
}

fn multiply_by_two(number: i32) -> i32 {
    number << 1
}

fn divide_by_two(number: i32) -> i32 {
    number >> 1
}

fn switch_sign(number: i32) -> i32 {
    !number + 1
}

fn multiply(a: i32, b: i32) -> i32 {
    match b {
        0 => 0,
        _ if b > 0 => a + multiply(a, b - 1),
        _ => -multiply(a, -b),
    }
}

fn multiply_unsigned(x: i32, y: i32) -> i32 {
    let mut result = 0;
    let mut x = x;
    let mut y = y;
    while y > 0 {
        if y & 1 == 1 {
            result += x;
        }
        x <<= 1;
        y >>= 1;
    }
    result
}

fn count_set_bits(mut number: i32) -> i32 {
    let mut count = 0;
    while number != 0 {
        count += number & 1;
        number >>= 1;
    }
    count
}

fn bits_diff(a: i32, b: i32) -> i32 {
    let mut count = 0;
    let mut diff = a ^ b;
    while diff != 0 {
        count += diff & 1;
        diff >>= 1;
    }
    count
}

fn bit_length(mut number: i32) -> i32 {
    let mut count = 0;
    while number != 0 {
        count += 1;
        number >>= 1;
    }
    count
}

fn is_power_of_two(number: i32) -> bool {
    number != 0 && (number & (number - 1)) == 0
}

fn full_adder(a: i32, b: i32) -> i32 {
    let mut carry = 0;
    let mut result = 0;
    let mut i = 0;
    let mut a = a;
    let mut b = b;
    while a != 0 || b != 0 || carry != 0 {
        let bit_a = a & 1;
        let bit_b = b & 1;
        let sum = bit_a ^ bit_b ^ carry;
        result |= sum << i;
        carry = (bit_a & bit_b) | (bit_a & carry) | (bit_b & carry);
        a >>= 1;
        b >>= 1;
        i += 1;
    }
    result
}
