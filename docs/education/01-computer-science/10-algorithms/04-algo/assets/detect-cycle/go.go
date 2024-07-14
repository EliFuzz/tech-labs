// Detect cycle in directed graph using DFS
func hasCycleDirected(graph map[int][]int) bool {
	visited := make(map[int]bool)
	recursionStack := make(map[int]bool)

	var dfs func(node int) bool
	dfs = func(node int) bool {
		visited[node] = true
		recursionStack[node] = true

		for _, neighbor := range graph[node] {
			if !visited[neighbor] {
				if dfs(neighbor) {
					return true
				}
			} else if recursionStack[neighbor] {
				return true
			}
		}

		recursionStack[node] = false
		return false
	}

	for node := range graph {
		if !visited[node] {
			if dfs(node) {
				return true
			}
		}
	}

	return false
}

// Detect cycle in undirected graph using DFS
func hasCycleUndirected(graph map[int][]int) bool {
	visited := make(map[int]bool)

	var dfs func(node, parent int) bool
	dfs = func(node, parent int) bool {
		visited[node] = true

		for _, neighbor := range graph[node] {
			if !visited[neighbor] {
				if dfs(neighbor, node) {
					return true
				}
			} else if neighbor != parent {
				return true
			}
		}

		return false
	}

	for node := range graph {
		if !visited[node] {
			if dfs(node, -1) {
				return true
			}
		}
	}

	return false
}

// Detect cycle in undirected graph using disjoint sets
type disjointSet struct {
	parent []int
}

func newDisjointSet(size int) *disjointSet {
	return &disjointSet{
		parent: make([]int, size),
	}
}

func (d *disjointSet) find(x int) int {
	if d.parent[x] == -1 {
		return x
	}
	return d.find(d.parent[x])
}

func (d *disjointSet) union(x, y int) bool {
	rootX := d.find(x)
	rootY := d.find(y)

	if rootX != rootY {
		d.parent[rootX] = rootY
		return false
	}
	return true
}

func hasCycleUndirectedDisjointSets(graph map[int][]int) bool {
	size := len(graph)
	ds := newDisjointSet(size)

	for node, neighbors := range graph {
		for _, neighbor := range neighbors {
			if ds.union(node, neighbor) {
				return true
			}
		}
	}

	return false
}
