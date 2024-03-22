class Trie {
  constructor() {
    this.root = { children: new Map(), isEndOfWord: false };
  }

  addWord(word) {
    let currentNode = this.root;
    for (const char of word) {
      currentNode = currentNode.children.set(
        char,
        currentNode.children.get(char) || {
          children: new Map(),
          isEndOfWord: false,
        },
      );
    }
    currentNode.isEndOfWord = true;
  }

  deleteWord(word) {
    this.depthFirstDelete(this.root, word, 0);
  }

  depthFirstDelete(currentNode, word, index) {
    if (!currentNode) {
      return false;
    }

    if (index === word.length) {
      if (!currentNode.isEndOfWord) {
        return false;
      }
      currentNode.isEndOfWord = false;
      return currentNode.children.size === 0;
    }

    const char = word[index];
    const nextNode = currentNode.children.get(char);

    if (!nextNode) {
      return false;
    }

    const shouldDeleteCurrentNode = this.depthFirstDelete(
      nextNode,
      word,
      index + 1,
    );

    if (shouldDeleteCurrentNode) {
      currentNode.children.delete(char);
      return currentNode.children.size === 0;
    }

    return false;
  }

  DeleteWordIterative(word) {
    let currentNode = this.root;
    let index = 0;
    const nodesStack = [];

    while (index < word.length) {
      const char = word[index];
      const nextNode = currentNode.children.get(char);

      if (!nextNode) {
        return;
      }

      nodesStack.push([currentNode, index]);
      currentNode = nextNode;
      index++;
    }

    currentNode.isEndOfWord = false;

    while (nodesStack.length > 0) {
      const [parentNode, parentIndex] = nodesStack.pop();

      if (currentNode.children.size === 0 && !currentNode.isEndOfWord) {
        parentNode.children.delete(word[parentIndex]);
      }

      currentNode = parentNode;
    }
  }

  suggestNextCharacters(prefix) {
    const lastNode = this.getLastCharacterNode(prefix);
    const suggestions = [];
    if (lastNode) {
      this.suggestNextCharacters(lastNode, prefix, suggestions);
    }
    return suggestions;
  }

  suggestNextCharactersIterative(prefix) {
    const suggestions = [];
    let currentNode = this.root;
    let currentPrefix = "";

    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return suggestions;
      }
      currentNode = currentNode.children.get(char);
      currentPrefix += char;
    }

    const stack = [[currentNode, currentPrefix]];

    while (stack.length > 0) {
      const [node, current] = stack.pop();

      if (node.isEndOfWord) {
        suggestions.push(current.charAt(current.length - 1));
      }

      for (const [char, childNode] of node.children) {
        stack.push([childNode, current + char]);
      }
    }

    return suggestions;
  }

  doesWordExist(word) {
    const lastNode = this.getLastCharacterNode(word);
    return lastNode && lastNode.isEndOfWord;
  }

  getLastCharacterNode(prefix) {
    let currentNode = this.root;
    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return null;
      }
      currentNode = currentNode.children.get(char);
    }
    return currentNode;
  }

  startsWith(prefix) {
    return this.getLastCharacterNode(prefix) !== null;
  }
}
