fn generate(num_rows: i32) -> Vec<Vec<i32>> {
    let mut triangle = Vec::new();
    for i in 0..num_rows {
        let mut row = vec![0; (i + 1) as usize];
        row[0] = 1;
        row[i as usize] = 1;
        for j in 1..i {
            row[j as usize] = triangle[(i - 1) as usize][(j - 1) as usize] + triangle[(i - 1) as usize][j as usize];
        }
        triangle.push(row);
    }
    triangle
}
