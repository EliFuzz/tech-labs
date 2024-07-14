class Edge:
    def __init__(self, source, destination, weight):
        self.source = source
        self.destination = destination
        self.weight = weight

class Graph:
    def __init__(self, vertices):
        self.vertices = vertices
        self.edgeList = []

    def addEdge(self, source, destination, weight):
        self.edgeList.append(Edge(source, destination, weight))

class KruskalsAlgorithm:
    @staticmethod
    def findParent(parent, vertex):
        if parent[vertex] != vertex:
            parent[vertex] = KruskalsAlgorithm.findParent(parent, parent[vertex])
        return parent[vertex]

    @staticmethod
    def union(parent, x, y):
        rootX = KruskalsAlgorithm.findParent(parent, x)
        rootY = KruskalsAlgorithm.findParent(parent, y)
        parent[rootX] = rootY

    @staticmethod
    def kruskals(graph):
        result = []
        graph.edgeList.sort(key=lambda x: x.weight)

        parent = [i for i in range(graph.vertices)]

        edgeCount = 0
        for edge in graph.edgeList:
            if edgeCount == graph.vertices - 1:
                break

            sourceParent = KruskalsAlgorithm.findParent(parent, edge.source)
            destinationParent = KruskalsAlgorithm.findParent(parent, edge.destination)

            if sourceParent != destinationParent:
                result.append(edge)
                KruskalsAlgorithm.union(parent, sourceParent, destinationParent)
                edgeCount += 1

        return result
