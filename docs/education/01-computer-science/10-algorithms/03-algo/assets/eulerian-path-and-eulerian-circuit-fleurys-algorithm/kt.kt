fun fleurysAlgorithm(graph: MutableMap<Int, MutableList<Int>>): List<Int> {
    val circuit = mutableListOf<Int>()
    val oddVertices = findOddVertices(graph)

    var startVertex = 0
    if (oddVertices.isNotEmpty()) {
        startVertex = oddVertices[0]
    }

    DFS(graph, startVertex, circuit)

    return circuit
}

fun DFS(graph: MutableMap<Int, MutableList<Int>>, vertex: Int, circuit: MutableList<Int>) {
    while (graph[vertex]!!.isNotEmpty()) {
        val nextVertex = graph[vertex]!!.removeAt(0)
        removeEdge(graph, vertex, nextVertex)
        DFS(graph, nextVertex, circuit)
    }
    circuit.add(vertex)
}

fun removeEdge(graph: MutableMap<Int, MutableList<Int>>, u: Int, v: Int) {
    graph[u]!!.remove(v)
    graph[v]!!.remove(u)
}

fun findOddVertices(graph: Map<Int, List<Int>>): List<Int> {
    val oddVertices = mutableListOf<Int>()
    for ((vertex, neighbors) in graph) {
        if (neighbors.size % 2 != 0) {
            oddVertices.add(vertex)
        }
    }
    return oddVertices
}
