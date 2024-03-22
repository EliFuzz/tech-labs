import java.util.*

// Graph DFS
fun DFS(graph: List<List<Int>>, start: Int) {
    val visited = BooleanArray(graph.size)
    val stack = Stack<Int>()
    stack.push(start)

    while (!stack.isEmpty()) {
        val node = stack.pop()
        if (!visited[node]) {
            visited[node] = true
            print("$node ")

            for (neighbor in graph[node]) {
                if (!visited[neighbor]) {
                    stack.push(neighbor)
                }
            }
        }
    }
}

// Binary Tree DFS
class DepthFirstSearch {

    fun dfs(root: TreeNode?) {
        if (root == null) {
            return
        }
        val stack = Stack<TreeNode>()
        stack.push(root)

        while (!stack.isEmpty()) {
            val node = stack.pop()
            print("${node.`val`} ")

            if (node.right != null) {
                stack.push(node.right)
            }
            if (node.left != null) {
                stack.push(node.left)
            }
        }
    }

    class TreeNode(var `val`: Int) {
        var left: TreeNode? = null
        var right: TreeNode? = null
    }
}
