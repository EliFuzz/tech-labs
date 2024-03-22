data class Edge(val source: Int, val destination: Int, val weight: Int)

class Graph(private val vertices: Int) {
    val edgeList = mutableListOf<Edge>()

    fun addEdge(source: Int, destination: Int, weight: Int) {
        edgeList.add(Edge(source, destination, weight))
    }
}

class KruskalsAlgorithm(private val graph: Graph) {
    private fun findParent(parent: IntArray, vertex: Int): Int {
        var v = vertex
        if (parent[v] != v) {
            parent[v] = findParent(parent, parent[v])
        }
        return parent[v]
    }

    private fun union(parent: IntArray, x: Int, y: Int) {
        val rootX = findParent(parent, x)
        val rootY = findParent(parent, y)
        parent[rootX] = rootY
    }

    fun kruskals(): List<Edge> {
        val result = mutableListOf<Edge>()
        graph.edgeList.sortBy { it.weight }

        val parent = IntArray(graph.vertices) { it }

        var edgeCount = 0
        for (edge in graph.edgeList) {
            if (edgeCount == graph.vertices - 1)
                break

            val sourceParent = findParent(parent, edge.source)
            val destinationParent = findParent(parent, edge.destination)

            if (sourceParent != destinationParent) {
                result.add(edge)
                union(parent, sourceParent, destinationParent)
                edgeCount++
            }
        }

        return result
    }
}
