package main

import (
    "container/heap"
    "math"
)

type Edge struct {
    to     int
    weight int
}

type Node struct {
    id   int
    dist int
}

type PriorityQueue []*Node

func (pq PriorityQueue) Len() int { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool {
    return pq[i].dist < pq[j].dist
}
func (pq PriorityQueue) Swap(i, j int) {
    pq[i], pq[j] = pq[j], pq[i]
}
func (pq *PriorityQueue) Push(x interface{}) {
    item := x.(*Node)
    *pq = append(*pq, item)
}
func (pq *PriorityQueue) Pop() interface{} {
    old := *pq
    n := len(old)
    item := old[n-1]
    *pq = old[0 : n-1]
    return item
}

func dijkstra(graph [][]Edge, source int) []int {
    n := len(graph)
    dist := make([]int, n)
    for i := range dist {
        dist[i] = math.MaxInt32
    }
    dist[source] = 0

    pq := make(PriorityQueue, 0)
    heap.Init(&pq)
    heap.Push(&pq, &Node{source, 0})

    for pq.Len() > 0 {
        node := heap.Pop(&pq).(*Node)
        u := node.id
        if dist[u] < node.dist {
            continue
        }
        for _, edge := range graph[u] {
            if alt := dist[u] + edge.weight; alt < dist[edge.to] {
                dist[edge.to] = alt
                heap.Push(&pq, &Node{edge.to, alt})
            }
        }
    }
    return dist
}
