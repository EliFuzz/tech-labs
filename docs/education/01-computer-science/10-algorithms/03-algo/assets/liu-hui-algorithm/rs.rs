fn liu_hui(n: u32) -> f64 {
    let mut side_length = 2.0;
    let mut polygon_sides = 6.0;
    for _ in 0..n {
        side_length = (4.0 - (side_length / 2.0).powi(2)).sqrt();
        polygon_sides *= 2.0;
    }
    side_length * polygon_sides
}
