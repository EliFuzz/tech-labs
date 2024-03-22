fn hamming_distance(str1: &str, str2: &str) -> Result<usize, &'static str> {
    if str1.len() != str2.len() {
        return Err("Strings must be of equal length");
    }
    let mut distance = 0;
    for (c1, c2) in str1.chars().zip(str2.chars()) {
        if c1 != c2 {
            distance += 1;
        }
    }
    Ok(distance)
}
