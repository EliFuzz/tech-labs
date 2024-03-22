V = 6

def isSafe(v, graph, path, pos):
    if graph[path[pos - 1]][v] == 0:
        return False

    for i in range(pos):
        if path[i] == v:
            return False

    return True

def hamCycleUtil(graph, path, pos):
    if pos == V:
        return graph[path[pos - 1]][path[0]] == 1

    for v in range(1, V):
        if isSafe(v, graph, path, pos):
            path[pos] = v
            if hamCycleUtil(graph, path, pos + 1):
                return True
            path[pos] = -1

    return False

def hamCycle(graph):
    path = [-1] * V
    path[0] = 0
    if not hamCycleUtil(graph, path, 1):
        print("No Hamiltonian Cycle exists")
        return

    print("Hamiltonian Cycle exists:")
    for vertex in path:
        print(vertex, end=" ")
    print(path[0])
