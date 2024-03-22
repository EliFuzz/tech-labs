import heapq

class Dijkstra:
    def __init__(self):
        self.graph = []

    def add_edge(self, frm, to, weight):
        if len(self.graph) <= frm:
            self.graph += [[]] * (frm - len(self.graph) + 1)
        self.graph[frm].append((to, weight))

    def dijkstra(self, source):
        n = len(self.graph)
        dist = [float('inf')] * n
        dist[source] = 0

        pq = [(0, source)]

        while pq:
            d, u = heapq.heappop(pq)
            if d > dist[u]:
                continue
            for v, w in self.graph[u]:
                if alt := dist[u] + w < dist[v]:
                    dist[v] = alt
                    heapq.heappush(pq, (alt, v))
        return dist
