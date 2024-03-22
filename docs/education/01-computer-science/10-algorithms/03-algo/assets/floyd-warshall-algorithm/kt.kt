fun floydWarshall(graph: Array<IntArray>, V: Int): Array<IntArray> {
    val dist = Array(V) { i -> IntArray(V) { j -> graph[i][j] } }

    for (k in 0 until V) {
        for (i in 0 until V) {
            for (j in 0 until V) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j]
                }
            }
        }
    }

    return dist
}
