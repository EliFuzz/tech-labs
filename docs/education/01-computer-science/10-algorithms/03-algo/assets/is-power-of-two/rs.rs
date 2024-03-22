fn is_power_of_two_naive(mut n: i32) -> bool {
    if n <= 0 {
        return false;
    }
    while n % 2 == 0 {
        n /= 2;
    }
    n == 1
}

fn is_power_of_two_bitwise(n: i32) -> bool {
    n > 0 && (n & (n - 1)) == 0
}
