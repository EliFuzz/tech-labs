class Graph(private val V: Int) {
    private val adj: Array<MutableList<Int>> = Array(V) { mutableListOf() }
    private var time = 0

    fun addEdge(u: Int, v: Int) {
        adj[u].add(v)
        adj[v].add(u)
    }

    private fun dfs(u: Int, visited: BooleanArray, parent: IntArray, low: IntArray, disc: IntArray, ap: BooleanArray) {
        var children = 0
        visited[u] = true
        disc[u] = ++time
        low[u] = disc[u]

        for (v in adj[u]) {
            if (!visited[v]) {
                children++
                parent[v] = u
                dfs(v, visited, parent, low, disc, ap)
                low[u] = minOf(low[u], low[v])
                if ((parent[u] == -1 && children > 1) || (parent[u] != -1 && low[v] >= disc[u])) {
                    ap[u] = true
                }
            } else if (v != parent[u]) {
                low[u] = minOf(low[u], disc[v])
            }
        }
    }

    fun findArticulationPoints(): List<Int> {
        val visited = BooleanArray(V)
        val parent = IntArray(V) { -1 }
        val disc = IntArray(V)
        val low = IntArray(V)
        val ap = BooleanArray(V)

        for (i in 0 until V) {
            if (!visited[i]) {
                dfs(i, visited, parent, low, disc, ap)
            }
        }

        return ap.indices.filter { ap[it] }
    }
}
