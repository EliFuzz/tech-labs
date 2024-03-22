class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let currentNode: TrieNode = this.root;
    for (const char of word) {
      currentNode = currentNode.children[char] ??= new TrieNode();
    }
    currentNode.isEndOfWord = true;
  }

  deleteWord(word: string): void {
    this.deleteWordRecursive(this.root, word, 0);
  }

  DeleteWordIterative(word: string): void {
    let currentNode: TrieNode = this.root;
    let index = 0;
    const nodesStack: Array<[TrieNode, number]> = [];

    while (index < word.length) {
      const char = word[index];
      const nextNode = currentNode.children[char];

      if (!nextNode) {
        return;
      }

      nodesStack.push([currentNode, index]);
      currentNode = nextNode;
      index++;
    }

    currentNode.isEndOfWord = false;

    while (nodesStack.length > 0) {
      const [parentNode, parentIndex] = nodesStack.pop()!;

      if (
        Object.keys(currentNode.children).length === 0 &&
        !currentNode.isEndOfWord
      ) {
        delete parentNode.children[word[parentIndex]];
      }

      currentNode = parentNode;
    }
  }

  depthFirstDelete(word: string): void {
    this.depthFirstDeleteRecursive(this.root, word, 0);
  }

  DeleteWordIterative(word: string): void {
    let currentNode: TrieNode = this.root;
    let index = 0;
    const nodesStack: Array<[TrieNode, number]> = [];

    while (index < word.length) {
      const char = word[index];
      const nextNode = currentNode.children[char];

      if (!nextNode) {
        return;
      }

      nodesStack.push([currentNode, index]);
      currentNode = nextNode;
      index++;
    }

    currentNode.isEndOfWord = false;

    while (nodesStack.length > 0) {
      const [parentNode, parentIndex] = nodesStack.pop()!;

      if (
        Object.keys(currentNode.children).length === 0 &&
        !currentNode.isEndOfWord
      ) {
        delete parentNode.children[word[parentIndex]];
      }

      currentNode = parentNode;
    }
  }

  suggestNextCharacters(prefix: string): string[] {
    const lastNode = this.getLastCharacterNode(prefix);
    const suggestions: string[] = [];
    if (lastNode) {
      this.suggestNextCharactersRecursive(lastNode, prefix, suggestions);
    }
    return suggestions;
  }

  suggestNextCharactersIterative(prefix: string): string[] {
    const suggestions: string[] = [];
    let currentNode: TrieNode = this.root;
    let currentPrefix = "";

    for (const char of prefix) {
      currentNode = currentNode.children[char];
      if (!currentNode) {
        return suggestions;
      }
      currentPrefix += char;
    }

    const stack: Array<[TrieNode, string]> = [[currentNode, currentPrefix]];

    while (stack.length > 0) {
      const [node, current] = stack.pop()!;

      if (node.isEndOfWord) {
        suggestions.push(current.charAt(current.length - 1));
      }

      for (const [char, childNode] of Object.entries(node.children)) {
        stack.push([childNode, current + char]);
      }
    }

    return suggestions;
  }

  doesWordExist(word: string): boolean {
    const lastNode = this.getLastCharacterNode(word);
    return lastNode?.isEndOfWord ?? false;
  }

  startsWith(prefix: string): boolean {
    return this.getLastCharacterNode(prefix) !== undefined;
  }

  private deleteWordRecursive(
    currentNode: TrieNode | undefined,
    word: string,
    index: number,
  ): boolean {
    if (!currentNode) {
      return false;
    }

    if (index === word.length) {
      if (!currentNode.isEndOfWord) {
        return false;
      }
      currentNode.isEndOfWord = false;
      return Object.keys(currentNode.children).length === 0;
    }

    const char = word[index];
    const nextNode = currentNode.children[char];

    if (!nextNode) {
      return false;
    }

    const shouldDeleteCurrentNode = this.deleteWordRecursive(
      nextNode,
      word,
      index + 1,
    );

    if (shouldDeleteCurrentNode) {
      delete currentNode.children[char];
      return Object.keys(currentNode.children).length === 0;
    }

    return false;
  }

  private depthFirstDeleteRecursive(
    currentNode: TrieNode,
    word: string,
    index: number,
  ): void {
    if (index === word.length) {
      currentNode.isEndOfWord = false;
      return;
    }

    const char = word[index];
    const nextNode = currentNode.children[char];

    if (!nextNode) {
      return;
    }

    this.depthFirstDeleteRecursive(nextNode, word, index + 1);

    if (Object.keys(nextNode.children).length === 0 && !nextNode.isEndOfWord) {
      delete currentNode.children[char];
    }
  }

  private suggestNextCharactersRecursive(
    node: TrieNode,
    currentPrefix: string,
    suggestions: string[],
  ): void {
    if (node.isEndOfWord) {
      suggestions.push(currentPrefix.charAt(currentPrefix.length - 1));
    }

    for (const [char, childNode] of Object.entries(node.children)) {
      this.suggestNextCharactersRecursive(
        childNode,
        currentPrefix + char,
        suggestions,
      );
    }
  }

  private getLastCharacterNode(prefix: string): TrieNode | undefined {
    let currentNode: TrieNode = this.root;
    for (const char of prefix) {
      currentNode = currentNode.children[char];
      if (!currentNode) {
        return undefined;
      }
    }
    return currentNode;
  }
}

class TrieNode {
  children: Record<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
