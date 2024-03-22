package main

import (
    "container/heap"
)

type Edge struct {
    node   int
    weight int
}

type Graph struct {
    numNodes int
    adjList  map[int][]Edge
}

func NewGraph(numNodes int) *Graph {
    return &Graph{
        numNodes: numNodes,
        adjList:  make(map[int][]Edge),
    }
}

func (g *Graph) AddEdge(u, v, weight int) {
    g.adjList[u] = append(g.adjList[u], Edge{node: v, weight: weight})
    g.adjList[v] = append(g.adjList[v], Edge{node: u, weight: weight})
}

func PrimMST(g *Graph) int {
    visited := make(map[int]bool)
    pq := make(PriorityQueue, 0)
    startNode := 0

    heap.Push(&pq, &Item{node: startNode, weight: 0})

    minCost := 0

    for pq.Len() > 0 {
        item := heap.Pop(&pq).(*Item)
        u := item.node

        if visited[u] {
            continue
        }

        visited[u] = true
        minCost += item.weight

        for _, edge := range g.adjList[u] {
            v := edge.node
            weight := edge.weight
            if !visited[v] {
                heap.Push(&pq, &Item{node: v, weight: weight})
            }
        }
    }
    return minCost
}

type Item struct {
    node   int
    weight int
}

type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
    return pq[i].weight < pq[j].weight
}

func (pq PriorityQueue) Swap(i, j int) {
    pq[i], pq[j] = pq[j], pq[i]
}

func (pq *PriorityQueue) Push(x interface{}) {
    item := x.(*Item)
    *pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
    old := *pq
    n := len(old)
    item := old[n-1]
    *pq = old[0 : n-1]
    return item
}
