package main

type SuffixNode struct {
	children map[rune]*SuffixNode
	index    int
}

type SuffixTree struct {
	root *SuffixNode
	text string
}

func NewSuffixNode() *SuffixNode {
	return &SuffixNode{
		children: make(map[rune]*SuffixNode),
		index:    -1,
	}
}

func NewSuffixTree(text string) *SuffixTree {
	tree := &SuffixTree{
		root: NewSuffixNode(),
		text: text,
	}
	tree.buildSuffixTree()
	return tree
}

func (st *SuffixTree) buildSuffixTree() {
	n := len(st.text)
	for i := 0; i < n; i++ {
		st.addSuffix(i, st.root)
	}
}

func (st *SuffixTree) addSuffix(suffixStart int, node *SuffixNode) {
	if suffixStart == len(st.text) {
		return
	}

	currentChar := rune(st.text[suffixStart])
	if _, ok := node.children[currentChar]; !ok {
		node.children[currentChar] = NewSuffixNode()
		node.children[currentChar].index = suffixStart
	} else {
		existingNode := node.children[currentChar]
		st.addSuffix(suffixStart+1, existingNode)
	}
}

func (st *SuffixTree) Insert(newText string) {
	st.text += newText
	n := len(st.text)
	for i := n - len(newText); i < n; i++ {
		st.addSuffix(i, st.root)
	}
}

func (st *SuffixTree) Search(pattern string) bool {
	currentNode := st.root
	n := len(pattern)
	i := 0

	for i < n {
		char := rune(pattern[i])
		if child, ok := currentNode.children[char]; ok {
			currentNode = child
			i++
		} else {
			return false
		}
	}

	return true
}

func (st *SuffixTree) Delete(pattern string) {
	if st.Search(pattern) {
		st.text = st.text[:len(st.text)-1]
		st.root = NewSuffixNode()
		st.buildSuffixTree()
	}
}

func (st *SuffixTree) LongestCommonSubstring() string {
	result := []int{0, 0}
	st.longestCommonSubstringDFS(st.root, "", &result)
	return st.text[result[0]:result[1]]
}

func (st *SuffixTree) longestCommonSubstringDFS(node *SuffixNode, currentSuffix string, result *[]int) {
	if len(node.children) == 0 {
		return
	}

	for _, child := range node.children {
		newSuffix := currentSuffix + string(st.text[child.index])

		if len(newSuffix) > (*result)[1]-(*result)[0] {
			(*result)[0] = child.index - len(newSuffix) + 1
			(*result)[1] = child.index + 1
		}

		st.longestCommonSubstringDFS(child, newSuffix, result)
	}
}

func (st *SuffixTree) SubstringCount(node *SuffixNode) int {
	if node == nil {
		node = st.root
	}

	count := 1
	for _, child := range node.children {
		count += st.SubstringCount(child)
	}

	return count
}

func (st *SuffixTree) PatternMatching(pattern string, node *SuffixNode) []int {
	if node == nil {
		node = st.root
	}

	for i, char := range pattern {
		if child, ok := node.children[char]; ok {
			node = child
		} else {
			return nil
		}
	}

	return st.getLeafIndices(node)
}

func (st *SuffixTree) getLeafIndices(node *SuffixNode) []int {
	indices := make([]int, 0)
	if len(node.children) == 0 {
		indices = append(indices, node.index)
	}

	for _, child := range node.children {
		indices = append(indices, st.getLeafIndices(child)...)
	}

	return indices
}

func (st *SuffixTree) Traverse(node *SuffixNode, depth int) {
	if node == nil {
		node = st.root
	}
	fmt.Printf("%sNode: %d\n", "  ", node.index)
	for char, child := range node.children {
		fmt.Printf("%sEdge: %c\n", "  ", char)
		st.Traverse(child, depth+2)
	}
}
