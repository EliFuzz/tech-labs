fun tsp(graph: Array<IntArray>, visited: BooleanArray, current: Int, n: Int, count: Int, cost: Int, ans: Int): Int {
    if (count == n && graph[current][0] > 0) {
        return minOf(ans, cost + graph[current][0])
    }

    var newAns = ans
    for (i in 0 until n) {
        if (!visited[i] && graph[current][i] > 0) {
            visited[i] = true
            newAns = tsp(graph, visited, i, n, count + 1, cost + graph[current][i], newAns)
            visited[i] = false
        }
    }
    return newAns
}
