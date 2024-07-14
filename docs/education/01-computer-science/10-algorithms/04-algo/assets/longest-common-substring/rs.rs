fn longest_common_substring(str1: &str, str2: &str) -> String {
    let mut matrix = vec![vec![0; str2.len() + 1]; str1.len() + 1];
    let mut longest = String::new();

    for (i, c1) in str1.chars().enumerate() {
        for (j, c2) in str2.chars().enumerate() {
            if c1 == c2 {
                matrix[i + 1][j + 1] = matrix[i][j] + 1;
                if matrix[i + 1][j + 1] > longest.len() {
                    longest = str1[i + 1 - matrix[i + 1][j + 1]..=i].to_string();
                }
            }
        }
    }

    longest
}
