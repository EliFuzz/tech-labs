fn shortest_common_supersequence(str1: &str, str2: &str) -> String {
    let m = str1.len();
    let n = str2.len();
    let mut dp = vec![vec![0; n + 1]; m + 1];

    for i in 0..=m {
        for j in 0..=n {
            if i == 0 {
                dp[i][j] = j;
            } else if j == 0 {
                dp[i][j] = i;
            } else if str1.chars().nth(i - 1).unwrap() == str2.chars().nth(j - 1).unwrap() {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = 1 + dp[i - 1][j].min(dp[i][j - 1]);
            }
        }
    }

    let (mut i, mut j) = (m, n);
    let mut result = String::new();
    while i > 0 && j > 0 {
        if str1.chars().nth(i - 1).unwrap() == str2.chars().nth(j - 1).unwrap() {
            result.insert(0, str1.chars().nth(i - 1).unwrap());
            i -= 1;
            j -= 1;
        } else if dp[i - 1][j] < dp[i][j - 1] {
            result.insert(0, str1.chars().nth(i - 1).unwrap());
            i -= 1;
        } else {
            result.insert(0, str2.chars().nth(j - 1).unwrap());
            j -= 1;
        }
    }
    while i > 0 {
        result.insert(0, str1.chars().nth(i - 1).unwrap());
        i -= 1;
    }
    while j > 0 {
        result.insert(0, str2.chars().nth(j - 1).unwrap());
        j -= 1;
    }
    result
}
