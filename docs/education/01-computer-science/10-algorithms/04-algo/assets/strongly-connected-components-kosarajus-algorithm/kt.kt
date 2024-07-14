import java.util.*

class Graph(private val vertices: Int) {
    private val adj: Array<LinkedList<Int>> = Array(vertices) { LinkedList() }

    fun addEdge(v: Int, w: Int) {
        adj[v].add(w)
    }

    private fun dfsUtil(v: Int, visited: BooleanArray, stack: Stack<Int>) {
        visited[v] = true
        for (i in adj[v]) {
            if (!visited[i]) {
                dfsUtil(i, visited, stack)
            }
        }
        stack.push(v)
    }

    private fun getTranspose(): Graph {
        val g = Graph(vertices)
        for (v in 0 until vertices) {
            for (i in adj[v]) {
                g.addEdge(i, v)
            }
        }
        return g
    }

    private fun fillOrder(v: Int, visited: BooleanArray, stack: Stack<Int>) {
        visited[v] = true
        for (i in adj[v]) {
            if (!visited[i]) {
                fillOrder(i, visited, stack)
            }
        }
        stack.push(v)
    }

    fun printSCCs() {
        val stack = Stack<Int>()

        val visited = BooleanArray(vertices)
        for (i in 0 until vertices) {
            visited[i] = false
        }

        for (i in 0 until vertices) {
            if (!visited[i]) {
                dfsUtil(i, visited, stack)
            }
        }

        val transpose = getTranspose()

        for (i in 0 until vertices) {
            visited[i] = false
        }

        while (!stack.isEmpty()) {
            val v = stack.pop()
            if (!visited[v]) {
                transpose.fillOrder(v, visited, stack)
                println()
            }
        }
    }
}
