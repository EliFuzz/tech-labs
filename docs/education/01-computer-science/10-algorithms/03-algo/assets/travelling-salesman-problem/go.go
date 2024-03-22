package main

import (
    "math"
)

func tsp(graph [][]int, visited []bool, current, n, count, cost, ans int) int {
    if count == n && graph[current][0] > 0 {
        ans = int(math.Min(float64(ans), float64(cost+graph[current][0])))
        return ans
    }

    for i := 0; i < n; i++ {
        if !visited[i] && graph[current][i] > 0 {
            visited[i] = true
            ans = tsp(graph, visited, i, n, count+1, cost+graph[current][i], ans)
            visited[i] = false
        }
    }
    return ans
}
