package main

type Graph map[int][]int

func fleurysAlgorithm(graph Graph) []int {
	var circuit []int
	oddVertices := findOddVertices(graph)

	startVertex := 0
	if len(oddVertices) > 0 {
		startVertex = oddVertices[0]
	}

	DFS(graph, startVertex, &circuit)

	return circuit
}

func DFS(graph Graph, vertex int, circuit *[]int) {
	for len(graph[vertex]) > 0 {
		nextVertex := graph[vertex][0]
		removeEdge(graph, vertex, nextVertex)
		DFS(graph, nextVertex, circuit)
	}
	*circuit = append(*circuit, vertex)
}

func removeEdge(graph Graph, u, v int) {
	for i, w := range graph[u] {
		if w == v {
			graph[u] = append(graph[u][:i], graph[u][i+1:]...)
			break
		}
	}
	for i, w := range graph[v] {
		if w == u {
			graph[v] = append(graph[v][:i], graph[v][i+1:]...)
			break
		}
	}
}

func findOddVertices(graph Graph) []int {
	oddVertices := make([]int, 0)
	for v, neighbors := range graph {
		if len(neighbors)%2 != 0 {
			oddVertices = append(oddVertices, v)
		}
	}
	return oddVertices
}
