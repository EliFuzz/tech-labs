def lengthOfLIS(nums):
    n = len(nums)
    if n == 0:
        return 0
    dp = [1] * n
    maxLen = 1
    for i in range(1, n):
        for j in range(i):
            if nums[i] > nums[j] and dp[i] < dp[j] + 1:
                dp[i] = dp[j] + 1
        if dp[i] > maxLen:
            maxLen = dp[i]
    return maxLen
