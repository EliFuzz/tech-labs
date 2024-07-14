import java.util.*

class Edge(val node: Int, val weight: Int)

class Graph(val numNodes: Int) {
    val adjList = mutableMapOf<Int, MutableList<Edge>>()

    init {
        for (i in 0 until numNodes) {
            adjList[i] = mutableListOf()
        }
    }

    fun addEdge(u: Int, v: Int, weight: Int) {
        adjList[u]?.add(Edge(v, weight))
        adjList[v]?.add(Edge(u, weight))
    }
}

fun primMST(graph: Graph): Int {
    val visited = BooleanArray(graph.numNodes)
    val pq = PriorityQueue<Pair<Int, Int>>(compareBy { it.second })
    val startNode = 0

    pq.offer(Pair(startNode, 0))

    var minCost = 0

    while (pq.isNotEmpty()) {
        val (u, weight) = pq.poll()

        if (visited[u]) {
            continue
        }

        visited[u] = true
        minCost += weight

        graph.adjList[u]?.forEach { (v, weight) ->
            if (!visited[v]) {
                pq.offer(Pair(v, weight))
            }
        }
    }
    return minCost
}
