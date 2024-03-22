package main

type Graph struct {
	vertices  int
	adjacency map[int][]int
}

func NewGraph(vertices int) *Graph {
	return &Graph{
		vertices:  vertices,
		adjacency: make(map[int][]int),
	}
}

func (g *Graph) AddEdge(u, v int) {
	g.adjacency[u] = append(g.adjacency[u], v)
}

func (g *Graph) topologicalSortUtil(vertex int, visited map[int]bool, stack *[]int) {
	visited[vertex] = true
	for _, v := range g.adjacency[vertex] {
		if !visited[v] {
			g.topologicalSortUtil(v, visited, stack)
		}
	}
	*stack = append(*stack, vertex)
}

func (g *Graph) TopologicalSort() []int {
	stack := make([]int, 0)
	visited := make(map[int]bool)

	for i := 0; i < g.vertices; i++ {
		if !visited[i] {
			g.topologicalSortUtil(i, visited, &stack)
		}
	}

	result := make([]int, g.vertices)
	for i := 0; i < g.vertices; i++ {
		result[i] = stack[g.vertices-i-1]
	}
	return result
}
