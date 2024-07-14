def bellman_ford(graph, V, E, src):
    dist = [float("Inf")] * V
    dist[src] = 0

    for _ in range(V - 1):
        for u, v, weight in graph:
            if dist[u] != float("Inf") and dist[u] + weight < dist[v]:
                dist[v] = dist[u] + weight

    for u, v, weight in graph:
        if dist[u] != float("Inf") and dist[u] + weight < dist[v]:
            print("Graph contains negative weight cycle")
            return

    print("Vertex Distance from Source")
    for i in range(V):
        print(f"{i}\t\t{dist[i]}")
