package main

import (
    "math"
)

type Edge struct {
    src, dest, weight int
}

func bellmanFord(graph []Edge, V, E, src int) {
    dist := make([]int, V)
    for i := range dist {
        dist[i] = math.MaxInt32
    }
    dist[src] = 0

    for i := 1; i < V; i++ {
        for j := 0; j < E; j++ {
            u := graph[j].src
            v := graph[j].dest
            weight := graph[j].weight
            if dist[u] != math.MaxInt32 && dist[u]+weight < dist[v] {
                dist[v] = dist[u] + weight
            }
        }
    }

    for _, edge := range graph {
        u := edge.src
        v := edge.dest
        weight := edge.weight
        if dist[u] != math.MaxInt32 && dist[u]+weight < dist[v] {
            fmt.Println("Graph contains negative weight cycle")
            return
        }
    }

    fmt.Println("Vertex Distance from Source:")
    for i := 0; i < V; i++ {
        fmt.Printf("Vertex %d --> Distance %d\n", i, dist[i])
    }
}
