internal class HamiltonianCycle {
    private val V = 6
    private lateinit var path: IntArray

    private fun isSafe(v: Int, graph: Array<IntArray>, path: IntArray, pos: Int): Boolean {
        if (graph[path[pos - 1]][v] == 0) return false

        for (i in 0 until pos) if (path[i] == v) return false

        return true
    }

    private fun hamCycleUtil(graph: Array<IntArray>, path: IntArray, pos: Int): Boolean {
        if (pos == V) {
            return graph[path[pos - 1]][path[0]] == 1
        }

        for (v in 1 until V) {
            if (isSafe(v, graph, path, pos)) {
                path[pos] = v
                if (hamCycleUtil(graph, path, pos + 1)) return true
                path[pos] = -1
            }
        }

        return false
    }

    fun hamCycle(graph: Array<IntArray>) {
        path = IntArray(V) { -1 }

        path[0] = 0
        if (!hamCycleUtil(graph, path, 1)) {
            println("No Hamiltonian Cycle exists")
            return
        }

        println("Hamiltonian Cycle exists: ")
        for (i in 0 until V) print(" ${path[i]} ")

        println(" ${path[0]} ")
    }
}
