class Edge(val src: Int, val dest: Int, val weight: Int)

fun bellmanFord(graph: List<Edge>, V: Int, E: Int, src: Int) {
    val dist = IntArray(V) { Int.MAX_VALUE }
    dist[src] = 0

    for (i in 1 until V) {
        for (j in 0 until E) {
            val u = graph[j].src
            val v = graph[j].dest
            val weight = graph[j].weight
            if (dist[u] != Int.MAX_VALUE && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight
            }
        }
    }

    for (j in 0 until E) {
        val u = graph[j].src
        val v = graph[j].dest
        val weight = graph[j].weight
        if (dist[u] != Int.MAX_VALUE && dist[u] + weight < dist[v]) {
            println("Graph contains negative weight cycle")
            return
        }
    }

    println("Vertex Distance from Source:")
    for (i in 0 until V) {
        println("$i \t\t ${dist[i]}")
    }
}
