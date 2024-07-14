package main

import (
	"container/list"
)

// Graph DFS
func DFS(graph [][]int, start int) {
	visited := make([]bool, len(graph))
	stack := list.New()
	stack.PushBack(start)

	for stack.Len() > 0 {
		element := stack.Back()
		stack.Remove(element)
		node := element.Value.(int)
		if !visited[node] {
			visited[node] = true
			fmt.Printf("%d ", node)

			for _, neighbor := range graph[node] {
				if !visited[neighbor] {
					stack.PushBack(neighbor)
				}
			}
		}
	}
}

// Binary Tree DFS
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func DFSBinaryTree(root *TreeNode) {
	if root == nil {
		return
	}
	stack := list.New()
	stack.PushBack(root)

	for stack.Len() > 0 {
		element := stack.Back()
		stack.Remove(element)
		node := element.Value.(*TreeNode)
		fmt.Printf("%d ", node.Val)

		if node.Right != nil {
			stack.PushBack(node.Right)
		}
		if node.Left != nil {
			stack.PushBack(node.Left)
		}
	}
}
