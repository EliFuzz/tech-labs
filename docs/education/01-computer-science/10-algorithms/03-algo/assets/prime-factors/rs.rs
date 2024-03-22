fn prime_factors(mut n: i32) -> Vec<i32> {
    let mut factors = Vec::new();

    while n % 2 == 0 {
        factors.push(2);
        n /= 2;
    }

    let mut factor = 3;
    while factor <= (n as f64).sqrt() as i32 {
        while n % factor == 0 {
            factors.push(factor);
            n /= factor;
        }
        factor += 2;
    }

    if n > 2 {
        factors.push(n);
    }

    factors
}
