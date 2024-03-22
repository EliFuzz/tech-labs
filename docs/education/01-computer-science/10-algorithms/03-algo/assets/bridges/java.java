import java.util.ArrayList;
import java.util.List;

class Graph {

  int vertices;
  List<List<Integer>> edges;

  Graph(int v) {
    vertices = v;
    edges = new ArrayList<>();
    for (int i = 0; i < v; i++) {
      edges.add(new ArrayList<>());
    }
  }

  void addEdge(int u, int v) {
    edges.get(u).add(v);
    edges.get(v).add(u);
  }
}

public class BridgeInGraph {

  static int time = 0;

  static void dfs(int u, int parent, int[] disc, int[] low, boolean[] visited, List<List<Integer>> bridges, Graph g) {
    visited[u] = true;
    disc[u] = time;
    low[u] = time;
    time++;

    for (int v : g.edges.get(u)) {
      if (!visited[v]) {
        dfs(v, u, disc, low, visited, bridges, g);
        low[u] = Math.min(low[u], low[v]);
        if (low[v] > disc[u]) {
          bridges.add(List.of(u, v));
        }
      } else if (v != parent) {
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  }

  static List<List<Integer>> findBridges(Graph g) {
    int[] disc = new int[g.vertices];
    int[] low = new int[g.vertices];
    boolean[] visited = new boolean[g.vertices];
    List<List<Integer>> bridges = new ArrayList<>();

    for (int i = 0; i < g.vertices; i++) {
      if (!visited[i]) {
        dfs(i, -1, disc, low, visited, bridges, g);
      }
    }
    return bridges;
  }
}
