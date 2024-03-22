fn euclidean_algorithm(original_a: i32, original_b: i32) -> i32 {
    let a = original_a.abs();
    let b = original_b.abs();

    if b == 0 {
        a
    } else {
        euclidean_algorithm(b, a % b)
    }
}

fn least_common_multiple(a: i32, b: i32) -> i32 {
    if a == 0 || b == 0 {
        0
    } else {
        (a.abs() * b.abs()) / euclidean_algorithm(a, b)
    }
}
