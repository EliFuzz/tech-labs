function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
