package main

func floydWarshall(graph [][]int, V int) [][]int {
	dist := make([][]int, V)

	for i := range dist {
		dist[i] = make([]int, V)
		copy(dist[i], graph[i])
	}

	for k := 0; k < V; k++ {
		for i := 0; i < V; i++ {
			for j := 0; j < V; j++ {
				if dist[i][k]+dist[k][j] < dist[i][j] {
					dist[i][j] = dist[i][k] + dist[k][j]
				}
			}
		}
	}
	return dist
}
