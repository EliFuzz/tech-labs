package main

func hamiltonianCycleUtil(path []int, pos int) bool {
    if pos == numVertices {
        if graph[path[pos-1]][path[0]] == 1 {
            return true
        }
        return false
    }

    for v := 1; v < numVertices; v++ {
        if isSafe(v, path, pos) {
            path[pos] = v
            if hamiltonianCycleUtil(path, pos+1) {
                return true
            }
            path[pos] = -1
        }
    }
    return false
}

func isSafe(v int, path []int, pos int) bool {
    if graph[path[pos-1]][v] == 0 {
        return false
    }
    for i := 0; i < pos; i++ {
        if path[i] == v {
            return false
        }
    }
    return true
}

func hamiltonianCycle() {
    path := make([]int, numVertices)
    for i := range path {
        path[i] = -1
    }
    path[0] = 0
    if !hamiltonianCycleUtil(path, 1) {
        fmt.Println("No Hamiltonian Cycle exists")
        return
    }
    fmt.Println("Hamiltonian Cycle exists: ")
    for _, vertex := range path {
        fmt.Print(vertex, " ")
    }
    fmt.Println(path[0])
}
