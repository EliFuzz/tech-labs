fn count_partitions(n: usize) -> usize {
    let mut dp = vec![0; n + 1];
    dp[0] = 1;
    for i in 1..=n {
        for j in i..=n {
            dp[j] += dp[j - i];
        }
    }
    dp[n]
}
