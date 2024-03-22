# Detect cycle in directed graph using DFS
class DirectedCycleDetection:
    def __init__(self, graph):
        self.graph = graph
        self.visited = set()
        self.recursion_stack = set()

    def has_cycle(self):
        for node in self.graph:
            if node not in self.visited:
                if self.dfs(node):
                    return True
        return False

    def dfs(self, node):
        self.visited.add(node)
        self.recursion_stack.add(node)

        for neighbor in self.graph.get(node, []):
            if neighbor not in self.visited:
                if self.dfs(neighbor):
                    return True
            elif neighbor in self.recursion_stack:
                return True

        self.recursion_stack.remove(node)
        return False

# Detect cycle in undirected graph using DFS
class UndirectedCycleDetection:
    def __init__(self, graph):
        self.graph = graph
        self.visited = set()

    def has_cycle(self):
        for node in self.graph:
            if node not in self.visited:
                if self.dfs(node, -1):
                    return True
        return False

    def dfs(self, node, parent):
        self.visited.add(node)

        for neighbor in self.graph.get(node, []):
            if neighbor not in self.visited:
                if self.dfs(neighbor, node):
                    return True
            elif neighbor != parent:
                return True

        return False

# Detect cycle in undirected graph using disjoint sets
class DisjointSet:
    def __init__(self, size):
        self.parent = [-1] * size

    def find(self, x):
        if self.parent[x] == -1:
            return x
        return self.find(self.parent[x])

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x != root_y:
            self.parent[root_x] = root_y
            return False
        return True


class DisjointSetCycleDetection:
    def __init__(self, graph):
        self.graph = graph

    def has_cycle(self):
        ds = DisjointSet(len(self.graph))

        for node in self.graph:
            for neighbor in self.graph[node]:
                if ds.union(node, neighbor):
                    return True

        return False
