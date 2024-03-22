package main

type Graph struct {
    vertices int
    edges    [][]int
}

func NewGraph(vertices int) *Graph {
    return &Graph{
        vertices: vertices,
        edges:    make([][]int, vertices),
    }
}

func (g *Graph) AddEdge(u, v int) {
    g.edges[u] = append(g.edges[u], v)
}

func (g *Graph) dfsUtil(vertex int, visited []bool, stack *Stack) {
    visited[vertex] = true
    for _, adj := range g.edges[vertex] {
        if !visited[adj] {
            g.dfsUtil(adj, visited, stack)
        }
    }
    stack.Push(vertex)
}

func (g *Graph) getTranspose() *Graph {
    transpose := NewGraph(g.vertices)
    for i := 0; i < g.vertices; i++ {
        for _, adj := range g.edges[i] {
            transpose.AddEdge(adj, i)
        }
    }
    return transpose
}

func (g *Graph) fillOrder(vertex int, visited []bool, stack *Stack) {
    visited[vertex] = true
    for _, adj := range g.edges[vertex] {
        if !visited[adj] {
            g.fillOrder(adj, visited, stack)
        }
    }
    stack.Push(vertex)
}

func (g *Graph) Kosaraju() {
    stack := NewStack()
    visited := make([]bool, g.vertices)

    for i := 0; i < g.vertices; i++ {
        if !visited[i] {
            g.dfsUtil(i, visited, stack)
        }
    }

    transpose := g.getTranspose()
    for i := range visited {
        visited[i] = false
    }

    for !stack.IsEmpty() {
        vertex := stack.Pop()
        if !visited[vertex] {
            var scc []int
            transpose.fillOrder(vertex, visited, stack)
            for !stack.IsEmpty() {
                v := stack.Pop()
                scc = append(scc, v)
                visited[v] = true
            }
            fmt.Println(scc)
        }
    }
}

type Stack []int

func NewStack() *Stack {
    return &Stack{}
}

func (s *Stack) Push(value int) {
    *s = append(*s, value)
}

func (s *Stack) Pop() int {
    stack := *s
    top := stack[len(stack)-1]
    *s = stack[:len(stack)-1]
    return top
}

func (s *Stack) IsEmpty() bool {
    return len(*s) == 0
}
