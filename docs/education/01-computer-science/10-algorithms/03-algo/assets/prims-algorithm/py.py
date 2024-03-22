import heapq

class Graph:
    def __init__(self, numNodes):
        self.numNodes = numNodes
        self.adjList = [[] for _ in range(numNodes)]

    def addEdge(self, u, v, weight):
        self.adjList[u].append((v, weight))
        self.adjList[v].append((u, weight))

def primMST(graph):
    visited = [False] * graph.numNodes
    pq = [(0, 0)]
    minCost = 0

    while pq:
        weight, u = heapq.heappop(pq)

        if visited[u]:
            continue

        visited[u] = True
        minCost += weight

        for v, w in graph.adjList[u]:
            if not visited[v]:
                heapq.heappush(pq, (w, v))

    return minCost
