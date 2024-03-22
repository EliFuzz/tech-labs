package main

import (
	"math"
)

type AVLNode struct {
	Key    int
	Left   *AVLNode
	Right  *AVLNode
	Height int
}

type AVLTree struct {
	Root *AVLNode
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func height(node *AVLNode) int {
	if node == nil {
		return 0
	}
	return node.Height
}

func (tree *AVLTree) insert(node *AVLNode, key int) *AVLNode {
	if node == nil {
		return &AVLNode{Key: key}
	}

	if key < node.Key {
		node.Left = tree.insert(node.Left, key)
	} else if key > node.Key {
		node.Right = tree.insert(node.Right, key)
	}

	node.Height = 1 + max(height(node.Left), height(node.Right))

	return tree.rebalance(node)
}

func (tree *AVLTree) rebalance(node *AVLNode) *AVLNode {
	balance := tree.getBalance(node)

	if balance > 1 {
		if tree.getBalance(node.Left) < 0 {
			node.Left = tree.leftRotate(node.Left)
		}
		return tree.rightRotate(node)
	}

	if balance < -1 {
		if tree.getBalance(node.Right) > 0 {
			node.Right = tree.rightRotate(node.Right)
		}
		return tree.leftRotate(node)
	}

	return node
}

func (tree *AVLTree) leftRotate(y *AVLNode) *AVLNode {
	x := y.Right
	T2 := x.Left

	x.Left = y
	y.Right = T2

	y.Height = 1 + max(height(y.Left), height(y.Right))
	x.Height = 1 + max(height(x.Left), height(x.Right))

	return x
}

func (tree *AVLTree) rightRotate(x *AVLNode) *AVLNode {
	y := x.Left
	T2 := y.Right

	y.Right = x
	x.Left = T2

	x.Height = 1 + max(height(x.Left), height(x.Right))
	y.Height = 1 + max(height(y.Left), height(y.Right))

	return y
}

func (tree *AVLTree) height(node *AVLNode) int {
	if node == nil {
		return 0
	}
	return node.Height
}

func (tree *AVLTree) getBalance(node *AVLNode) int {
	return tree.height(node.Left) - tree.height(node.Right)
}

func (tree *AVLTree) search(node *AVLNode, key int) *AVLNode {
	if node == nil || key == node.Key {
		return node
	}
	if key < node.Key {
		return tree.search(node.Left, key)
	}
	return tree.search(node.Right, key)
}

func (tree *AVLTree) findMin(node *AVLNode) *AVLNode {
	current := node
	for current.Left != nil {
		current = current.Left
	}
	return current
}

func (tree *AVLTree) findMax(node *AVLNode) *AVLNode {
	current := node
	for current.Right != nil {
		current = current.Right
	}
	return current
}

func inorderTraversal(node *AVLNode) {
	if node != nil {
		inorderTraversal(node.Left)
		fmt.Print(node.Key, " ")
		inorderTraversal(node.Right)
	}
}
