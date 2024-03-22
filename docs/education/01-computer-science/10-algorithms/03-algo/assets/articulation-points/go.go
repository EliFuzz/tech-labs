package main

type Graph map[int][]int

func dfs(u int, visited map[int]bool, parent map[int]int, low map[int]int, disc map[int]int, ap map[int]bool, g Graph) {
    children := 0
    visited[u] = true
    disc[u] = disc[parent[u]] + 1
    low[u] = disc[u]

    for _, v := range g[u] {
        if !visited[v] {
            children++
            parent[v] = u
            dfs(v, visited, parent, low, disc, ap, g)
            low[u] = min(low[u], low[v])
            if parent[u] != -1 && low[v] >= disc[u] {
                ap[u] = true
            }
        } else if v != parent[u] {
            low[u] = min(low[u], disc[v])
        }
    }

    if parent[u] == -1 && children > 1 {
        ap[u] = true
    }
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func findArticulationPoints(g Graph) []int {
    visited := make(map[int]bool)
    parent := make(map[int]int)
    disc := make(map[int]int)
    low := make(map[int]int)
    ap := make(map[int]bool)

    for v := range g {
        visited[v] = false
        parent[v] = -1
        disc[v] = 0
        low[v] = 0
        ap[v] = false
    }

    for v := range g {
        if !visited[v] {
            dfs(v, visited, parent, low, disc, ap, g)
        }
    }

    result := []int{}
    for v := range g {
        if ap[v] {
            result = append(result, v)
        }
    }
    return result
}
