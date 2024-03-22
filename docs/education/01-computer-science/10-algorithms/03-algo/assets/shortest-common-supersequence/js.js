function shortestCommonSupersequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = m,
    j = n;
  let result = "";
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      result = str1[i - 1] + result;
      i--;
      j--;
    } else if (dp[i - 1][j] < dp[i][j - 1]) {
      result = str1[i - 1] + result;
      i--;
    } else {
      result = str2[j - 1] + result;
      j--;
    }
  }
  while (i > 0) {
    result = str1[i - 1] + result;
    i--;
  }
  while (j > 0) {
    result = str2[j - 1] + result;
    j--;
  }
  return result;
}
