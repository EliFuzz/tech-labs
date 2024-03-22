fn sqrt_newton(x: f64) -> f64 {
    let mut z = x / 2.0;
    for _ in 0..10 {
        z -= (z * z - x) / (2.0 * z);
    }
    z
}
