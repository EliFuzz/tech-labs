fn horners_method(coefficients: &[i32], x: i32) -> i32 {
    let mut result = coefficients[0];
    for &coefficient in &coefficients[1..] {
        result = result * x + coefficient;
    }
    result
}
