// recursive
fn euclidean_recursive(mut a: i32, mut b: i32) -> i32 {
    if b == 0 {
        return a;
    }
    return euclidean_recursive(b, a % b);
}

// iterative
fn euclidean_iterative(mut a: i32, mut b: i32) -> i32 {
    let mut temp: i32;
    while b != 0 {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
