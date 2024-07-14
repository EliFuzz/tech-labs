from collections import defaultdict

class Graph:
    def __init__(self, vertices):
        self.vertices = vertices
        self.adjacency = defaultdict(list)

    def add_edge(self, u, v):
        self.adjacency[u].append(v)

    def topological_sort_util(self, vertex, visited, stack):
        visited[vertex] = True
        for v in self.adjacency[vertex]:
            if not visited[v]:
                self.topological_sort_util(v, visited, stack)
        stack.append(vertex)

    def topological_sort(self):
        visited = [False] * self.vertices
        stack = []

        for i in range(self.vertices):
            if not visited[i]:
                self.topological_sort_util(i, visited, stack)

        return stack[::-1]
