class Graph(private val vertices: Int) {
    private val edges: Array<MutableList<Int>> = Array(vertices) { mutableListOf() }

    fun addEdge(u: Int, v: Int) {
        edges[u].add(v)
        edges[v].add(u)
    }

    fun getEdges(): Array<MutableList<Int>> {
        return edges
    }
}

var time = 0

fun dfs(u: Int, parent: Int, disc: IntArray, low: IntArray, visited: BooleanArray, bridges: MutableList<List<Int>>, g: Graph) {
    visited[u] = true
    disc[u] = time
    low[u] = time
    time++

    for (v in g.getEdges()[u]) {
        if (!visited[v]) {
            dfs(v, u, disc, low, visited, bridges, g)
            low[u] = minOf(low[u], low[v])
            if (low[v] > disc[u]) {
                bridges.add(listOf(u, v))
            }
        } else if (v != parent) {
            low[u] = minOf(low[u], disc[v])
        }
    }
}

fun findBridges(g: Graph): List<List<Int>> {
    val disc = IntArray(g.vertices) { 0 }
    val low = IntArray(g.vertices) { 0 }
    val visited = BooleanArray(g.vertices) { false }
    val bridges = mutableListOf<List<Int>>()

    for (i in 0 until g.vertices) {
        if (!visited[i]) {
            dfs(i, -1, disc, low, visited, bridges, g)
        }
    }
    return bridges
}
