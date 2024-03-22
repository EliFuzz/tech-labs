fn degree_to_radian(degree: f64) -> f64 {
    degree * (std::f64::consts::PI / 180.0)
}

fn radian_to_degree(radian: f64) -> f64 {
    radian * (180.0 / std::f64::consts::PI)
}
