function longestCommonSubstring(str1, str2) {
  const matrix = Array.from({ length: str1.length + 1 }, () =>
    Array.from({ length: str2.length + 1 }, () => 0),
  );
  let longest = "";

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > longest.length) {
          longest = str1.substring(i - matrix[i][j], i);
        }
      }
    }
  }

  return longest;
}
