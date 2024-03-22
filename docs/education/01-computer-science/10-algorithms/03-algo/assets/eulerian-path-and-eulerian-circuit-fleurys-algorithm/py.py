def fleurys_algorithm(graph):
    circuit = []
    odd_vertices = find_odd_vertices(graph)

    start_vertex = 0
    if odd_vertices:
        start_vertex = odd_vertices[0]

    DFS(graph, start_vertex, circuit)

    return circuit

def DFS(graph, vertex, circuit):
    while graph[vertex]:
        next_vertex = graph[vertex].pop(0)
        remove_edge(graph, vertex, next_vertex)
        DFS(graph, next_vertex, circuit)
    circuit.append(vertex)

def remove_edge(graph, u, v):
    graph[u].remove(v)
    graph[v].remove(u)

def find_odd_vertices(graph):
    odd_vertices = []
    for vertex in graph:
        if len(graph[vertex]) % 2 != 0:
            odd_vertices.append(vertex)
    return odd_vertices
