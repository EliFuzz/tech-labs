// Graph BFS
func BFS(graph [][]int, start int) {
    visited := make([]bool, len(graph))
    queue := []int{start}
    visited[start] = true

    for len(queue) > 0 {
        node := queue[0]
        queue = queue[1:]
        fmt.Print(node, " ")

        for _, neighbor := range graph[node] {
            if !visited[neighbor] {
                visited[neighbor] = true
                queue = append(queue, neighbor)
            }
        }
    }
}

// Binary Tree BFS
type TreeNode struct {
    Val   int
    Left  *TreeNode
    Right *TreeNode
}

func BFS(root *TreeNode) {
    if root == nil {
        return
    }
    queue := []*TreeNode{root}

    for len(queue) > 0 {
        node := queue[0]
        queue = queue[1:]
        fmt.Print(node.Val, " ")

        if node.Left != nil {
            queue = append(queue, node.Left)
        }
        if node.Right != nil {
            queue = append(queue, node.Right)
        }
    }
}
