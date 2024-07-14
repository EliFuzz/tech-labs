package main

type Graph struct {
    vertices int
    edges    map[int][]int
}

func NewGraph(v int) *Graph {
    return &Graph{
        vertices: v,
        edges:    make(map[int][]int),
    }
}

func (g *Graph) addEdge(u, v int) {
    g.edges[u] = append(g.edges[u], v)
    g.edges[v] = append(g.edges[v], u)
}

func dfs(u, parent int, disc, low []int, visited []bool, bridges *[][]int, time *int, g *Graph) {
    visited[u] = true
    disc[u] = *time
    low[u] = *time
    *time++

    for _, v := range g.edges[u] {
        if !visited[v] {
            dfs(v, u, disc, low, visited, bridges, time, g)
            low[u] = min(low[u], low[v])
            if low[v] > disc[u] {
                *bridges = append(*bridges, []int{u, v})
            }
        } else if v != parent {
            low[u] = min(low[u], disc[v])
        }
    }
}

func findBridges(g *Graph) [][]int {
    disc := make([]int, g.vertices)
    low := make([]int, g.vertices)
    visited := make([]bool, g.vertices)
    bridges := [][]int{}
    time := 0

    for i := 0; i < g.vertices; i++ {
        if !visited[i] {
            dfs(i, -1, disc, low, visited, &bridges, &time, g)
        }
    }
    return bridges
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
