// Detect cycle in directed graph using DFS
class DirectedCycleDetection(private val graph: Map<Int, List<Int>>) {
    fun hasCycle(): Boolean {
        val visited = mutableSetOf<Int>()
        val recursionStack = mutableSetOf<Int>()

        for (node in graph.keys) {
            if (!visited.contains(node)) {
                if (dfs(node, visited, recursionStack)) {
                    return true
                }
            }
        }

        return false
    }

    private fun dfs(node: Int, visited: MutableSet<Int>, recursionStack: MutableSet<Int>): Boolean {
        visited.add(node)
        recursionStack.add(node)

        for (neighbor in graph[node] ?: emptyList()) {
            if (!visited.contains(neighbor)) {
                if (dfs(neighbor, visited, recursionStack)) {
                    return true
                }
            } else if (recursionStack.contains(neighbor)) {
                return true
            }
        }

        recursionStack.remove(node)
        return false
    }
}

// Detect cycle in undirected graph using DFS
class UndirectedCycleDetection(private val graph: Map<Int, List<Int>>) {
    fun hasCycle(): Boolean {
        val visited = mutableSetOf<Int>()

        for (node in graph.keys) {
            if (!visited.contains(node)) {
                if (dfs(node, -1, visited)) {
                    return true
                }
            }
        }

        return false
    }

    private fun dfs(node: Int, parent: Int, visited: MutableSet<Int>): Boolean {
        visited.add(node)

        for (neighbor in graph[node] ?: emptyList()) {
            if (!visited.contains(neighbor)) {
                if (dfs(neighbor, node, visited)) {
                    return true
                }
            } else if (neighbor != parent) {
                return true
            }
        }

        return false
    }
}

// Detect cycle in undirected graph using disjoint sets
class DisjointSetCycleDetection(private val graph: Map<Int, List<Int>>) {
    private class DisjointSet(size: Int) {
        val parent = IntArray(size) { -1 }

        fun find(x: Int): Int {
            return if (parent[x] == -1) x else find(parent[x])
        }

        fun union(x: Int, y: Int): Boolean {
            val rootX = find(x)
            val rootY = find(y)

            if (rootX != rootY) {
                parent[rootX] = rootY
                return false
            }
            return true
        }
    }

    fun hasCycle(): Boolean {
        val ds = DisjointSet(graph.size)

        for ((node, neighbors) in graph) {
            for (neighbor in neighbors) {
                if (ds.union(node, neighbor)) {
                    return true
                }
            }
        }

        return false
    }
}
