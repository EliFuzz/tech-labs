package main

type TrieNode struct {
	children     map[rune]*TrieNode
	isEndOfWord  bool
}

type Trie struct {
	root *TrieNode
}

func NewTrie() *Trie {
	return &Trie{
		root: &TrieNode{
			children: make(map[rune]*TrieNode),
		},
	}
}

func (t *Trie) addWord(word string) {
	currentNode := t.root
	for _, char := range word {
		if _, exists := currentNode.children[char]; !exists {
			currentNode.children[char] = &TrieNode{
				children: make(map[rune]*TrieNode),
			}
		}
		currentNode = currentNode.children[char]
	}
	currentNode.isEndOfWord = true
}

func (t *Trie) deleteWord(word string) {
	t.depthFirstDelete(t.root, word, 0)
}

func (t *Trie) depthFirstDelete(currentNode *TrieNode, word string, index int) {
	if currentNode == nil {
		return
	}

	if index == len(word) {
		if !currentNode.isEndOfWord {
			return
		}
		currentNode.isEndOfWord = false
		if len(currentNode.children) == 0 {
			delete(currentNode.children, rune(word[index-1]))
		}
		return
	}

	char := rune(word[index])
	nextNode, exists := currentNode.children[char]

	if !exists {
		return
	}

	t.depthFirstDelete(nextNode, word, index+1)

	if len(nextNode.children) == 0 && !nextNode.isEndOfWord {
		delete(currentNode.children, char)
	}
}

func (t *Trie) DeleteWordIterative(word string) {
	currentNode := t.root
	index := 0
	var nodesStack []struct {
		node  *TrieNode
		index int
	}

	for index < len(word) {
		char := rune(word[index])
		nextNode, exists := currentNode.children[char]

		if !exists {
			return
		}

		nodesStack = append(nodesStack, struct {
			node  *TrieNode
			index int
		}{node: currentNode, index: index})

		currentNode = nextNode
		index++
	}

	currentNode.isEndOfWord = false

	for len(nodesStack) > 0 {
		nodeWithIndex := nodesStack[len(nodesStack)-1]
		nodesStack = nodesStack[:len(nodesStack)-1]

		if len(currentNode.children) == 0 && !currentNode.isEndOfWord {
			delete(nodeWithIndex.node.children, rune(word[nodeWithIndex.index-1]))
		}

		currentNode = nodeWithIndex.node
	}
}

func (t *Trie) suggestNextCharacters(prefix string) []rune {
	lastNode := t.getLastCharacterNode(prefix)
	var suggestions []rune

	if lastNode != nil {
		t.suggestNextCharacters(lastNode, []rune(prefix), &suggestions)
	}

	return suggestions
}

func (t *Trie) suggestNextCharactersIterative(prefix string) []rune {
	var suggestions []rune
	currentNode := t.root
	var currentPrefix []rune

	for _, char := range prefix {
		nextNode, exists := currentNode.children[char]
		if !exists {
			return suggestions
		}
		currentNode = nextNode
		currentPrefix = append(currentPrefix, char)
	}

	stack := []struct {
		node    *TrieNode
		current []rune
	}{
		{node: currentNode, current: currentPrefix},
	}

	for len(stack) > 0 {
		nodeWithPrefix := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		if nodeWithPrefix.node.isEndOfWord {
			suggestions = append(suggestions, nodeWithPrefix.current[len(nodeWithPrefix.current)-1])
		}

		for char, childNode := range nodeWithPrefix.node.children {
			stack = append(stack, struct {
				node    *TrieNode
				current []rune
			}{node: childNode, current: append(nodeWithPrefix.current, char)})
		}
	}

	return suggestions
}

func (t *Trie) suggestNextCharacters(node *TrieNode, currentPrefix []rune, suggestions *[]rune) {
	if node.isEndOfWord {
		*suggestions = append(*suggestions, currentPrefix[len(currentPrefix)-1])
	}

	for char, childNode := range node.children {
		t.suggestNextCharacters(childNode, append(currentPrefix, char), suggestions)
	}
}

func (t *Trie) doesWordExist(word string) bool {
	lastNode := t.getLastCharacterNode(word)
	return lastNode != nil && lastNode.isEndOfWord
}

func (t *Trie) getLastCharacterNode(prefix string) *TrieNode {
	currentNode := t.root

	for _, char := range prefix {
		nextNode, exists := currentNode.children[char]
		if !exists {
			return nil
		}
		currentNode = nextNode
	}

	return currentNode
}

func (t *Trie) startsWith(prefix string) bool {
	return t.getLastCharacterNode(prefix) != nil
}
