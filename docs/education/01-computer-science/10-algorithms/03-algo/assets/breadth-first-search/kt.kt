// Graph BFS
fun BFS(graph: List<List<Int>>, start: Int) {
    val visited = BooleanArray(graph.size)
    val queue = LinkedList<Int>()
    queue.add(start)
    visited[start] = true

    while (queue.isNotEmpty()) {
        val node = queue.poll()
        print("$node ")

        for (neighbor in graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true
                queue.add(neighbor)
            }
        }
    }
}

// Binary Tree BFS
class TreeNode(var `val`: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

fun BFS(root: TreeNode?) {
    if (root == null) return
    val queue = LinkedList<TreeNode>()
    queue.add(root)

    while (queue.isNotEmpty()) {
        val node = queue.poll()
        print("${node.`val`} ")

        node.left?.let { queue.add(it) }
        node.right?.let { queue.add(it) }
    }
}
