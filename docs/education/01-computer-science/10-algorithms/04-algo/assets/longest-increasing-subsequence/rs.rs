fn length_of_lis(nums: Vec<i32>) -> i32 {
    let n = nums.len();
    if n == 0 {
        return 0;
    }
    let mut dp = vec![1; n];
    let mut max_len = 1;
    for i in 1..n {
        for j in 0..i {
            if nums[i] > nums[j] && dp[i] < dp[j] + 1 {
                dp[i] = dp[j] + 1;
            }
        }
        if dp[i] > max_len {
            max_len = dp[i];
        }
    }
    max_len
}
