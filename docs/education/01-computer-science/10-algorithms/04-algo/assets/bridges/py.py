class Graph:
    def __init__(self, vertices):
        self.vertices = vertices
        self.edges = [[] for _ in range(vertices)]

    def add_edge(self, u, v):
        self.edges[u].append(v)
        self.edges[v].append(u)

def dfs(u, parent, disc, low, visited, bridges, g):
    global time
    visited[u] = True
    disc[u] = time
    low[u] = time
    time += 1

    for v in g.edges[u]:
        if not visited[v]:
            dfs(v, u, disc, low, visited, bridges, g)
            low[u] = min(low[u], low[v])
            if low[v] > disc[u]:
                bridges.append([u, v])
        elif v != parent:
            low[u] = min(low[u], disc[v])

def find_bridges(g):
    global time
    disc = [0] * g.vertices
    low = [0] * g.vertices
    visited = [False] * g.vertices
    bridges = []
    time = 0

    for i in range(g.vertices):
        if not visited[i]:
            dfs(i, -1, disc, low, visited, bridges, g)
    return bridges
