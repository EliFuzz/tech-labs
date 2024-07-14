// iterative
fn fast_power_iterative(x: i32, n: i32) -> i32 {
    let mut result = 1;
    let mut base = x;
    let mut exponent = n;
    while exponent > 0 {
        if exponent & 1 == 1 {
            result *= base;
        }
        base *= base;
        exponent >>= 1;
    }
    result
}

// recursive
fn fast_power_recursive(x: i32, n: i32) -> i32 {
    if n == 0 {
        return 1;
    }
    let temp = fast_power_recursive(x, n / 2);
    if n % 2 == 0 {
        temp * temp
    } else {
        x * temp * temp
    }
}
