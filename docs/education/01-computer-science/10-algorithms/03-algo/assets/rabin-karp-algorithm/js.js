function rabinKarp(text, pattern) {
  const prime = 101;
  const result = [];
  const n = text.length;
  const m = pattern.length;
  if (n < m) {
    return result;
  }

  let h = 1;
  for (let i = 0; i < m - 1; i++) {
    h = (h * 256) % prime;
  }

  let patternHash = 0;
  let windowHash = 0;
  for (let i = 0; i < m; i++) {
    patternHash = (256 * patternHash + pattern.charCodeAt(i)) % prime;
    windowHash = (256 * windowHash + text.charCodeAt(i)) % prime;
  }

  for (let i = 0; i <= n - m; i++) {
    if (patternHash === windowHash) {
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        result.push(i);
      }
    }
    
    if (i < n - m) {
      windowHash =
        (256 * (windowHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) %
        prime;
      if (windowHash < 0) {
        windowHash += prime;
      }
    }
  }
  return result;
}
