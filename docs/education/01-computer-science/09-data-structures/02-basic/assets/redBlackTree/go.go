package main

type Color string

const (
	RED   Color = "RED"
	BLACK Color = "BLACK"
)

type Node struct {
	Key        int
	Color      Color
	LeftChild  *Node
	RightChild *Node
	Parent     *Node
}

type RedBlackTree struct {
	Root *Node
}

func NewNode(key int, color Color, left, right, parent *Node) *Node {
	return &Node{
		Key:        key,
		Color:      color,
		LeftChild:  left,
		RightChild: right,
		Parent:     parent,
	}
}

func NewRedBlackTree() *RedBlackTree {
	return &RedBlackTree{}
}

func (tree *RedBlackTree) InsertRBTree(key int) {
	newNode := NewNode(key, RED, nil, nil, nil)
	var uncle *Node
	currentNode := tree.Root

	for currentNode != nil {
		uncle = currentNode
		if newNode.Key < currentNode.Key {
			currentNode = currentNode.LeftChild
		} else {
			currentNode = currentNode.RightChild
		}
	}

	newNode.Parent = uncle
	if uncle == nil {
		tree.Root = newNode
	} else if newNode.Key < uncle.Key {
		uncle.LeftChild = newNode
	} else {
		uncle.RightChild = newNode
	}

	tree.insertFixup(newNode)
	tree.Root.Color = BLACK
}

func (tree *RedBlackTree) leftRotate(currentNode *Node) {
	uncle := currentNode.RightChild
	currentNode.RightChild = uncle.LeftChild
	if uncle.LeftChild != nil {
		uncle.LeftChild.Parent = currentNode
	}
	uncle.Parent = currentNode.Parent

	if currentNode.Parent == nil {
		tree.Root = uncle
	} else if currentNode == currentNode.Parent.LeftChild {
		currentNode.Parent.LeftChild = uncle
	} else {
		currentNode.Parent.RightChild = uncle
	}

	uncle.LeftChild = currentNode
	currentNode.Parent = uncle
}

func (tree *RedBlackTree) rightRotate(uncle *Node) {
	currentNode := uncle.LeftChild
	uncle.LeftChild = currentNode.RightChild
	if currentNode.RightChild != nil {
		currentNode.RightChild.Parent = uncle
	}
	currentNode.Parent = uncle.Parent

	if uncle.Parent == nil {
		tree.Root = currentNode
	} else if uncle == uncle.Parent.LeftChild {
		uncle.Parent.LeftChild = currentNode
	} else {
		uncle.Parent.RightChild = currentNode
	}

	currentNode.RightChild = uncle
	uncle.Parent = currentNode
}

func (tree *RedBlackTree) insertFixup(newNode *Node) {
	current := newNode
	for current != nil && current.Parent != nil && current.Parent.Color == RED {
		if current.Parent == current.Parent.Parent.LeftChild {
			y := current.Parent.Parent.RightChild
			if y != nil && y.Color == RED {
				current.Parent.Color = BLACK
				y.Color = BLACK
				current.Parent.Parent.Color = RED
				current = current.Parent.Parent
			} else {
				if current == current.Parent.RightChild {
					current = current.Parent
					tree.leftRotate(current)
				}
				current.Parent.Color = BLACK
				current.Parent.Parent.Color = RED
				tree.rightRotate(current.Parent.Parent)
			}
		} else {
			y := current.Parent.Parent.LeftChild
			if y != nil && y.Color == RED {
				current.Parent.Color = BLACK
				y.Color = BLACK
				current.Parent.Parent.Color = RED
				current = current.Parent.Parent
			} else {
				if current == current.Parent.LeftChild {
					current = current.Parent
					tree.rightRotate(current)
				}
				current.Parent.Color = BLACK
				current.Parent.Parent.Color = RED
				tree.leftRotate(current.Parent.Parent)
			}
		}
	}
	tree.Root.Color = BLACK
}

func (tree *RedBlackTree) DeleteRBTree(key int) {
	nodeToDelete := tree.search(tree.Root, key)
	if nodeToDelete == nil {
		return
	}

	successor := nodeToDelete
	successorOriginalColor := successor.Color
	var successorChild *Node

	if nodeToDelete.LeftChild == nil {
		successorChild = nodeToDelete.RightChild
		tree.transplant(nodeToDelete, nodeToDelete.RightChild)
	} else if nodeToDelete.RightChild == nil {
		successorChild = nodeToDelete.LeftChild
		tree.transplant(nodeToDelete, nodeToDelete.LeftChild)
	} else {
		successor = tree.findMinNode(nodeToDelete.RightChild)
		successorOriginalColor = successor.Color
		successorChild = successor.RightChild

		if successor.Parent == nodeToDelete {
			if successorChild != nil {
				successorChild.Parent = successor
			}
		} else {
			tree.transplant(successor, successor.RightChild)
			successor.RightChild = nodeToDelete.RightChild
			if successor.RightChild != nil {
				successor.RightChild.Parent = successor
			}
		}

		tree.transplant(nodeToDelete, successor)
		successor.LeftChild = nodeToDelete.LeftChild
		if successor.LeftChild != nil {
			successor.LeftChild.Parent = successor
		}
		successor.Color = nodeToDelete.Color
	}

	if successorOriginalColor == BLACK {
		tree.deleteFixup(successorChild)
	}
}

func (tree *RedBlackTree) search(root *Node, key int) *Node {
	current := root
	for current != nil && current.Key != key {
		if key < current.Key {
			current = current.LeftChild
		} else {
			current = current.RightChild
		}
	}
	return current
}

func (tree *RedBlackTree) findMinNode(node *Node) *Node {
	current := node
	for current.LeftChild != nil {
		current = current.LeftChild
	}
	return current
}

func (tree *RedBlackTree) transplant(parent, child *Node) {
	if parent.Parent == nil {
		tree.Root = child
	} else if parent == parent.Parent.LeftChild {
		parent.Parent.LeftChild = child
	} else {
		parent.Parent.RightChild = child
	}

	if child != nil {
		child.Parent = parent.Parent
	}
}

func (tree *RedBlackTree) deleteFixup(currentNode *Node) {
	current := currentNode
	for current != tree.Root && (current == nil || current.Color == BLACK) {
		if current == current.Parent.LeftChild {
			currentSibling := current.Parent.RightChild
			if currentSibling != nil && currentSibling.Color == RED {
				currentSibling.Color = BLACK
				current.Parent.Color = RED
				tree.leftRotate(current.Parent)
				currentSibling = current.Parent.RightChild
			}
			if (currentSibling.LeftChild == nil || currentSibling.LeftChild.Color == BLACK) &&
				(currentSibling.RightChild == nil || currentSibling.RightChild.Color == BLACK) {
				currentSibling.Color = RED
				current = current.Parent
			} else {
				if currentSibling.RightChild == nil || currentSibling.RightChild.Color == BLACK {
					currentSibling.LeftChild.Color = BLACK
					currentSibling.Color = RED
					tree.rightRotate(currentSibling)
					currentSibling = current.Parent.RightChild
				}
				currentSibling.Color = current.Parent.Color
				current.Parent.Color = BLACK
				currentSibling.RightChild.Color = BLACK
				tree.leftRotate(current.Parent)

				current = tree.Root
			}
		} else {
			currentSibling := current.Parent.LeftChild
			if currentSibling != nil && currentSibling.Color == RED {
				currentSibling.Color = BLACK
				current.Parent.Color = RED
				tree.rightRotate(current.Parent)
				currentSibling = current.Parent.LeftChild
			}
			if (currentSibling.RightChild == nil || currentSibling.RightChild.Color == BLACK) &&
				(currentSibling.LeftChild == nil || currentSibling.LeftChild.Color == BLACK) {
				currentSibling.Color = RED
				current = current.Parent
			} else {
				if currentSibling.LeftChild == nil || currentSibling.LeftChild.Color == BLACK {
					currentSibling.RightChild.Color = BLACK
					currentSibling.Color = RED
					tree.leftRotate(currentSibling)
					currentSibling = current.Parent.LeftChild
				}
				currentSibling.Color = current.Parent.Color
				current.Parent.Color = BLACK
				currentSibling.LeftChild.Color = BLACK
				tree.rightRotate(current.Parent)

				current = tree.Root
			}
		}
	}
	if current != nil {
		current.Color = BLACK
	}
}

func inOrderTraversal(node *Node) {
	if node != nil {
		inOrderTraversal(node.LeftChild)
		fmt.Printf("Key: %d, Color: %s\n", node.Key, node.Color)
		inOrderTraversal(node.RightChild)
	}
}
