fn min(x: usize, y: usize, z: usize) -> usize {
    if x <= y && x <= z {
        x
    } else if y <= x && y <= z {
        y
    } else {
        z
    }
}

fn levenshtein_distance(s1: &str, s2: &str) -> usize {
    let m = s1.chars().count();
    let n = s2.chars().count();
    let mut dp = vec![vec![0; n + 1]; m + 1];

    for i in 0..=m {
        for j in 0..=n {
            dp[i][j] = if i == 0 {
                j
            } else if j == 0 {
                i
            } else if s1.chars().nth(i - 1) == s2.chars().nth(j - 1) {
                dp[i - 1][j - 1]
            } else {
                1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
            };
        }
    }

    dp[m][n]
}
