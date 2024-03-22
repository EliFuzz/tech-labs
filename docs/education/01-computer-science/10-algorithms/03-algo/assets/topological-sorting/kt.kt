import java.util.*

class Graph(private val vertices: Int) {
    private val adjacency: MutableMap<Int, MutableList<Int>> = HashMap()

    init {
        for (i in 0 until vertices) {
            adjacency[i] = ArrayList()
        }
    }

    fun addEdge(u: Int, v: Int) {
        adjacency[u]?.add(v)
    }

    private fun topologicalSortUtil(vertex: Int, visited: BooleanArray, stack: Stack<Int>) {
        visited[vertex] = true
        adjacency[vertex]?.forEach { v ->
            if (!visited[v]) {
                topologicalSortUtil(v, visited, stack)
            }
        }
        stack.push(vertex)
    }

    fun topologicalSort(): List<Int> {
        val stack = Stack<Int>()
        val visited = BooleanArray(vertices)

        for (i in 0 until vertices) {
            if (!visited[i]) {
                topologicalSortUtil(i, visited, stack)
            }
        }

        return stack.toList().reversed()
    }
}
