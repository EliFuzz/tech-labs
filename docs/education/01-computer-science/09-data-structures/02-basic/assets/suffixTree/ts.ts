class SuffixNode {
  children: { [char: string]: SuffixNode };
  index: number;

  constructor() {
    this.children = {};
    this.index = -1;
  }
}

class SuffixTree {
  root: SuffixNode;
  text: string;

  constructor(text: string) {
    this.root = new SuffixNode();
    this.text = text;
    this.buildSuffixTree();
  }

  buildSuffixTree(): void {
    const n = this.text.length;
    for (let i = 0; i < n; i++) {
      this.addSuffix(i, this.root);
    }
  }

  insert(newText: string): void {
    this.text += newText;
    const n = this.text.length;
    for (let i = n - newText.length; i < n; i++) {
      this.addSuffix(i, this.root);
    }
  }

  search(pattern: string): boolean {
    let currentNode = this.root;
    let i = 0;

    while (i < pattern.length) {
      const char = pattern[i];
      if (char in currentNode.children) {
        currentNode = currentNode.children[char];
        i++;
      } else {
        return false;
      }
    }

    return true;
  }

  delete(pattern: string): void {
    if (this.search(pattern)) {
      this.text = this.text.replace(pattern, "");
      this.root = new SuffixNode();
      this.buildSuffixTree();
    }
  }

  longestCommonSubstring(): string {
    const result: [number, number] = [0, 0];
    this.longestCommonSubstringDFS(this.root, "", result);
    return this.text.slice(result[0], result[1]);
  }

  substringCount(node?: SuffixNode): number {
    const currentNode = node || this.root;
    let count = 1;

    for (const child of Object.values(currentNode.children)) {
      count += this.substringCount(child);
    }

    return count;
  }

  patternMatching(pattern: string, node?: SuffixNode): number[] {
    const currentNode = node || this.root;
    let i = 0;

    for (const char of pattern) {
      if (char in currentNode.children) {
        currentNode = currentNode.children[char];
      } else {
        return [];
      }
      i++;
    }

    return this.getLeafIndices(currentNode);
  }

  traverse(node?: SuffixNode, depth: number = 0): void {
    const currentNode = node || this.root;
    console.log("  ".repeat(depth) + `Node: ${currentNode.index}`);
    for (const [char, child] of Object.entries(currentNode.children)) {
      console.log("  ".repeat(depth + 1) + `Edge: ${char}`);
      this.traverse(child, depth + 2);
    }
  }

  private addSuffix(suffixStart: number, node: SuffixNode): void {
    if (suffixStart === this.text.length) {
      return;
    }

    const currentChar = this.text[suffixStart];
    if (!(currentChar in node.children)) {
      node.children[currentChar] = new SuffixNode();
      node.children[currentChar].index = suffixStart;
    } else {
      const existingNode = node.children[currentChar];
      this.addSuffix(suffixStart + 1, existingNode);
    }
  }

  private longestCommonSubstringDFS(
    node: SuffixNode,
    currentSuffix: string,
    result: [number, number],
  ): void {
    if (Object.keys(node.children).length === 0) {
      return;
    }

    for (const child of Object.values(node.children)) {
      const newSuffix = currentSuffix + this.text[child.index];

      if (newSuffix.length > result[1] - result[0]) {
        result[0] = child.index - newSuffix.length + 1;
        result[1] = child.index + 1;
      }

      this.longestCommonSubstringDFS(child, newSuffix, result);
    }
  }

  private getLeafIndices(node: SuffixNode): number[] {
    const indices: number[] = [];
    if (Object.keys(node.children).length === 0) {
      indices.push(node.index);
    }

    for (const child of Object.values(node.children)) {
      indices.push(...this.getLeafIndices(child));
    }

    return indices;
  }
}
