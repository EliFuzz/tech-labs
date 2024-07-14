import java.util.*;

class Dijkstra {

  static int[] dijkstra(List<List<Edge>> graph, int source) {
    int n = graph.size();
    int[] dist = new int[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[source] = 0;

    PriorityQueue<Node> pq = new PriorityQueue<>();
    pq.add(new Node(source, 0));

    while (!pq.isEmpty()) {
      Node node = pq.poll();
      int u = node.id;
      if (dist[u] < node.dist) {
        continue;
      }
      for (Edge edge : graph.get(u)) {
        int alt = dist[u] + edge.weight;
        if (alt < dist[edge.to]) {
          dist[edge.to] = alt;
          pq.add(new Node(edge.to, alt));
        }
      }
    }
    return dist;
  }

  static class Edge {

    int to, weight;

    Edge(int to, int weight) {
      this.to = to;
      this.weight = weight;
    }
  }

  static class Node implements Comparable<Node> {

    int id, dist;

    Node(int id, int dist) {
      this.id = id;
      this.dist = dist;
    }

    public int compareTo(Node other) {
      return Integer.compare(this.dist, other.dist);
    }
  }
}
