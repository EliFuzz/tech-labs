function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  const dp: number[] = new Array(n).fill(1);
  let maxLen = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i];
    }
  }
  return maxLen;
}
