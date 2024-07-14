function regularExpressionMatching(string, pattern) {
  const prevRow = Array(pattern.length + 1).fill(false);
  let currentRow = Array(pattern.length + 1).fill(false);

  prevRow[0] = true;

  for (let j = 1; j <= pattern.length; j++) {
    if (pattern[j - 1] === "*") {
      currentRow[j] = prevRow[j - 2];
    }
  }

  for (let i = 1; i <= string.length; i++) {
    const nextRow = [false];
    for (let j = 1; j <= pattern.length; j++) {
      if (pattern[j - 1] === "*") {
        if (
          prevRow[j] ||
          (j > 1 &&
            currentRow[j - 2] &&
            (pattern[j - 2] === string[i - 1] || pattern[j - 2] === "."))
        ) {
          currentRow[j] = true;
        } else {
          currentRow[j] = false;
        }
      } else if (pattern[j - 1] === string[i - 1] || pattern[j - 1] === ".") {
        currentRow[j] = prevRow[j - 1];
      } else {
        currentRow[j] = false;
      }
      nextRow.push(currentRow[j]);
    }
    prevRow.splice(0, prevRow.length, ...currentRow);
    currentRow = nextRow;
  }

  return prevRow[pattern.length];
}
