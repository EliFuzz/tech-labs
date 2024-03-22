package main

import (
    "sort"
)

type Edge struct {
    Source, Destination, Weight int
}

type Graph struct {
    Vertices, Edges int
    EdgeList        []Edge
}

func (g *Graph) addEdge(src, dest, weight int) {
    g.EdgeList = append(g.EdgeList, Edge{src, dest, weight})
}

type UnionFind struct {
    parent []int
}

func newUnionFind(n int) *UnionFind {
    parent := make([]int, n)
    for i := range parent {
        parent[i] = i
    }
    return &UnionFind{parent}
}

func (uf *UnionFind) find(x int) int {
    if uf.parent[x] != x {
        uf.parent[x] = uf.find(uf.parent[x])
    }
    return uf.parent[x]
}

func (uf *UnionFind) union(x, y int) {
    rootX := uf.find(x)
    rootY := uf.find(y)
    uf.parent[rootX] = rootY
}

func kruskals(g *Graph) []Edge {
    var result []Edge
    sort.Slice(g.EdgeList, func(i, j int) bool {
        return g.EdgeList[i].Weight < g.EdgeList[j].Weight
    })

    uf := newUnionFind(g.Vertices)
    for _, edge := range g.EdgeList {
        if uf.find(edge.Source) != uf.find(edge.Destination) {
            uf.union(edge.Source, edge.Destination)
            result = append(result, edge)
        }
    }
    return result
}
