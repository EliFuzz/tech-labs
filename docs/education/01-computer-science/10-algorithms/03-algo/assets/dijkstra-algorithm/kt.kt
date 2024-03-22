import java.util.*

class Edge(val to: Int, val weight: Int)

class Node(val id: Int, val dist: Int) : Comparable<Node> {
    override fun compareTo(other: Node): Int {
        return this.dist.compareTo(other.dist)
    }
}

fun dijkstra(graph: List<List<Edge>>, source: Int): IntArray {
    val n = graph.size
    val dist = IntArray(n) { Int.MAX_VALUE }
    dist[source] = 0

    val pq = PriorityQueue<Node>()
    pq.add(Node(source, 0))

    while (pq.isNotEmpty()) {
        val node = pq.poll()
        val u = node.id
        if (dist[u] < node.dist) continue
        for (edge in graph[u]) {
            val alt = dist[u] + edge.weight
            if (alt < dist[edge.to]) {
                dist[edge.to] = alt
                pq.add(Node(edge.to, alt))
            }
        }
    }
    return dist
}
