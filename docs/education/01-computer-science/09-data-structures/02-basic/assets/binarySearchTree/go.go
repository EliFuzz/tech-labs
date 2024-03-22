package main

type Node struct {
	Key   int
	Left  *Node
	Right *Node
}

type BinarySearchTree struct {
	Root *Node
}

func (bst *BinarySearchTree) insert(root *Node, key int) *Node {
	if root == nil {
		return &Node{Key: key}
	}

	if key < root.Key {
		root.Left = bst.insert(root.Left, key)
	} else if key > root.Key {
		root.Right = bst.insert(root.Right, key)
	}

	return root
}

func (bst *BinarySearchTree) search(root *Node, key int) *Node {
	if root == nil || root.Key == key {
		return root
	}

	if key < root.Key {
		return bst.search(root.Left, key)
	} else {
		return bst.search(root.Right, key)
	}
}

func (bst *BinarySearchTree) findMin(root *Node) *Node {
	current := root
	for current != nil && current.Left != nil {
		current = current.Left
	}
	return current
}

func (bst *BinarySearchTree) findMax(root *Node) *Node {
	current := root
	for current != nil && current.Right != nil {
		current = current.Right
	}
	return current
}

func (bst *BinarySearchTree) findSuccessor(root *Node, key int) *Node {
	if root == nil {
		return nil
	}

	var successor *Node
	current := root

	for current != nil {
		if key < current.Key {
			successor = current
			current = current.Left
		} else {
			current = current.Right
		}
	}

	return successor
}

func (bst *BinarySearchTree) findPredecessor(root *Node, key int) *Node {
	if root == nil {
		return nil
	}

	var predecessor *Node
	current := root

	for current != nil {
		if key > current.Key {
			predecessor = current
			current = current.Right
		} else {
			current = current.Left
		}
	}

	return predecessor
}

func (bst *BinarySearchTree) deleteNode(root *Node, key int) *Node {
	if root == nil {
		return nil
	}

	if key < root.Key {
		root.Left = bst.deleteNode(root.Left, key)
	} else if key > root.Key {
		root.Right = bst.deleteNode(root.Right, key)
	} else {
		if root.Left == nil {
			return root.Right
		} else if root.Right == nil {
			return root.Left
		}

		successor := bst.findMin(root.Right)
		root.Key = successor.Key
		root.Right = bst.deleteNode(root.Right, successor.Key)
	}

	return root
}

func (bst *BinarySearchTree) bfsRecursive(root *Node) {
	if root == nil {
		return
	}

	queue := []*Node{root}
	bst.bfsHelper(queue)
}

func (bst *BinarySearchTree) bfsHelper(queue []*Node) {
	if len(queue) == 0 {
		return
	}

	current := queue[0]
	queue = queue[1:]
	fmt.Println(current.Key)

	if current.Left != nil {
		queue = append(queue, current.Left)
	}
	if current.Right != nil {
		queue = append(queue, current.Right)
	}

	bst.bfsHelper(queue)
}

func (bst *BinarySearchTree) bfsIterative(root *Node) {
	if root == nil {
		return
	}

	queue := []*Node{root}

	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		fmt.Println(current.Key)

		if current.Left != nil {
			queue = append(queue, current.Left)
		}
		if current.Right != nil {
			queue = append(queue, current.Right)
		}
	}
}

func (bst *BinarySearchTree) dfsPreOrderRecursive(root *Node) {
	if root == nil {
		return
	}
	fmt.Println(root.Key)
	bst.dfsPreOrderRecursive(root.Left)
	bst.dfsPreOrderRecursive(root.Right)
}

func (bst *BinarySearchTree) dfsPreOrderIterative(root *Node) {
	if root == nil {
		return
	}

	stack := []*Node{root}

	for len(stack) > 0 {
		current := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		fmt.Println(current.Key)

		if current.Right != nil {
			stack = append(stack, current.Right)
		}
		if current.Left != nil {
			stack = append(stack, current.Left)
		}
	}
}

func (bst *BinarySearchTree) dfsInOrderRecursive(root *Node) {
	if root == nil {
		return
	}
	bst.dfsInOrderRecursive(root.Left)
	fmt.Println(root.Key)
	bst.dfsInOrderRecursive(root.Right)
}

func (bst *BinarySearchTree) dfsInOrderIterative(root *Node) {
	if root == nil {
		return
	}

	stack := []*Node{}
	current := root

	for current != nil || len(stack) > 0 {
		for current != nil {
			stack = append(stack, current)
			current = current.Left
		}

		current = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		fmt.Println(current.Key)

		current = current.Right
	}
}

func (bst *BinarySearchTree) dfsPostOrderRecursive(root *Node) {
	if root == nil {
		return
	}
	bst.dfsPostOrderRecursive(root.Left)
	bst.dfsPostOrderRecursive(root.Right)
	fmt.Println(root.Key)
}

func (bst *BinarySearchTree) dfsPostOrderIterative(root *Node) {
	if root == nil {
		return
	}

	stack1 := []*Node{}
	stack2 := []*Node{root}

	for len(stack2) > 0 {
		current := stack2[len(stack2)-1]
		stack2 = stack2[:len(stack2)-1]
		stack1 = append(stack1, current)

		if current.Left != nil {
			stack2 = append(stack2, current.Left)
		}
		if current.Right != nil {
			stack2 = append(stack2, current.Right)
		}
	}

	for len(stack1) > 0 {
		current := stack1[len(stack1)-1]
		stack1 = stack1[:len(stack1)-1]
		fmt.Println(current.Key)
	}
}
