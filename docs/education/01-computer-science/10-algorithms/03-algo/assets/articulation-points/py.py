class Graph:
    def __init__(self, V):
        self.V = V
        self.adj = [[] for _ in range(V)]
        self.time = 0

    def add_edge(self, u, v):
        self.adj[u].append(v)
        self.adj[v].append(u)

    def dfs(self, u, visited, parent, low, disc, ap):
        children = 0
        visited[u] = True
        disc[u] = self.time
        low[u] = self.time
        self.time += 1

        for v in self.adj[u]:
            if not visited[v]:
                children += 1
                parent[v] = u
                self.dfs(v, visited, parent, low, disc, ap)
                low[u] = min(low[u], low[v])
                if (parent[u] == -1 and children > 1) or (parent[u] != -1 and low[v] >= disc[u]):
                    ap[u] = True
            elif v != parent[u]:
                low[u] = min(low[u], disc[v])

    def find_articulation_points(self):
        visited = [False] * self.V
        parent = [-1] * self.V
        disc = [float("inf")] * self.V
        low = [float("inf")] * self.V
        ap = [False] * self.V

        for i in range(self.V):
            if not visited[i]:
                self.dfs(i, visited, parent, low, disc, ap)

        return [i for i in range(self.V) if ap[i]]
