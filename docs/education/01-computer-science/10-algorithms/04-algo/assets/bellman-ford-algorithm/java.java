import java.util.Arrays;

class BellmanFord {

  int V, E;

  ;
  Edge edge[];
  BellmanFord(int v, int e) {
    V = v;
    E = e;
    edge = new Edge[e];
    for (int i = 0; i < e; ++i) {
      edge[i] = new Edge();
    }
  }

  void BellmanFordAlgo(BellmanFord graph, int src) {
    int V = graph.V, E = graph.E;
    int dist[] = new int[V];

    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[src] = 0;

    for (int i = 1; i < V; ++i) {
      for (int j = 0; j < E; ++j) {
        int u = graph.edge[j].src;
        int v = graph.edge[j].dest;
        int weight = graph.edge[j].weight;
        if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
          dist[v] = dist[u] + weight;
        }
      }
    }

    for (int j = 0; j < E; ++j) {
      int u = graph.edge[j].src;
      int v = graph.edge[j].dest;
      int weight = graph.edge[j].weight;
      if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
        System.out.println("Graph contains negative weight cycle");
      }
    }

    System.out.println("Vertex Distance from Source");
    for (int i = 0; i < V; ++i) {
      System.out.println(i + "\t\t" + dist[i]);
    }
  }

  class Edge {

    int src, dest, weight;

    Edge() {
      src = dest = weight = 0;
    }
  }
}
