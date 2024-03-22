class SuffixNode {
  constructor() {
    this.children = {};
    this.index = -1;
  }
}

class SuffixTree {
  constructor(text) {
    this.root = new SuffixNode();
    this.text = text;
    this.buildSuffixTree();
  }

  buildSuffixTree() {
    const n = this.text.length;
    for (let i = 0; i < n; i++) {
      this._addSuffix(i, this.root);
    }
  }

  _addSuffix(suffixStart, node) {
    if (suffixStart === this.text.length) {
      return;
    }

    const currentChar = this.text[suffixStart];
    if (!node.children[currentChar]) {
      node.children[currentChar] = new SuffixNode();
      node.children[currentChar].index = suffixStart;
    } else {
      const existingNode = node.children[currentChar];
      this._addSuffix(suffixStart + 1, existingNode);
    }
  }

  insert(newText) {
    this.text += newText;
    const n = this.text.length;
    for (let i = n - newText.length; i < n; i++) {
      this._addSuffix(i, this.root);
    }
  }

  search(pattern) {
    let currentNode = this.root;
    const n = pattern.length;
    let i = 0;

    while (i < n) {
      const char = pattern[i];
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
        i++;
      } else {
        return false;
      }
    }

    return true;
  }

  delete(pattern) {
    if (this.search(pattern)) {
      this.text = this.text.replace(pattern, "");
      this.root = new SuffixNode();
      this.buildSuffixTree();
    }
  }

  longestCommonSubstring() {
    const result = [0, 0];
    this._longestCommonSubstringDFS(this.root, "", result);
    return this.text.substring(result[0], result[1]);
  }

  _longestCommonSubstringDFS(node, currentSuffix, result) {
    if (!Object.keys(node.children).length) {
      return;
    }

    for (const child of Object.values(node.children)) {
      const newSuffix = currentSuffix + this.text[child.index];

      if (newSuffix.length > result[1] - result[0]) {
        result[0] = child.index - newSuffix.length + 1;
        result[1] = child.index + 1;
      }

      this._longestCommonSubstringDFS(child, newSuffix, result);
    }
  }

  substringCount(node = null) {
    if (!node) {
      node = this.root;
    }

    let count = 1;
    for (const child of Object.values(node.children)) {
      count += this.substringCount(child);
    }

    return count;
  }

  patternMatching(pattern, node = null) {
    if (!node) {
      node = this.root;
    }

    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return [];
      }
    }

    return this._getLeafIndices(node);
  }

  _getLeafIndices(node) {
    let indices = [];
    if (Object.keys(node.children).length === 0) {
      indices.push(node.index);
    }

    for (const child of Object.values(node.children)) {
      indices = indices.concat(this._getLeafIndices(child));
    }

    return indices;
  }

  traverse(node = null, depth = 0) {
    if (!node) {
      node = this.root;
    }
    console.log("  ".repeat(depth) + `Node: ${node.index}`);
    for (const [char, child] of Object.entries(node.children)) {
      console.log("  ".repeat(depth + 1) + `Edge: ${char}`);
      this.traverse(child, depth + 2);
    }
  }
}
