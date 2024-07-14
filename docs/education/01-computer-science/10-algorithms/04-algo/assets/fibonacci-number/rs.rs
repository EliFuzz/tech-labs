// Recursive
fn fibonacci_recursive(n: i32) -> i32 {
    if n <= 1 {
        n
    } else {
        fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
    }
}

// Iterative
fn fibonacci_iterative(n: i32) -> i32 {
    if n <= 1 {
        return n;
    }
    let mut a = 0;
    let mut b = 1;
    for _ in 2..=n {
        let temp = b;
        b += a;
        a = temp;
    }
    b
}
