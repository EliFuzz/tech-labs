function buildTable(pattern) {
  const table = new Array(pattern.length).fill(0);
  let prefix = 0;

  for (let i = 1; i < pattern.length; i++) {
    while (prefix > 0 && pattern[i] !== pattern[prefix]) {
      prefix = table[prefix - 1];
    }
    if (pattern[i] === pattern[prefix]) {
      prefix++;
    }
    table[i] = prefix;
  }

  return table;
}

function kmpSearch(text, pattern) {
  const table = buildTable(pattern);
  const matches = [];
  let j = 0;

  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = table[j - 1];
    }
    if (text[i] === pattern[j]) {
      j++;
    }
    if (j === pattern.length) {
      matches.push(i - pattern.length + 1);
      j = table[j - 1];
    }
  }

  return matches;
}
