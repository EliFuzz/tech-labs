public class LongestIncreasingSubsequence {

  public static int lengthOfLIS(int[] nums) {
    int n = nums.length;
    if (n == 0) {
      return 0;
    }
    int[] dp = new int[n];
    dp[0] = 1;
    int maxLen = 1;
    for (int i = 1; i < n; i++) {
      dp[i] = 1;
      for (int j = 0; j < i; j++) {
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
}
