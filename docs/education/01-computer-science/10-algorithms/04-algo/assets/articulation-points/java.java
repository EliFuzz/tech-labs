import java.util.*;

class ArticulationPoints {

  private final int NIL = -1;
  private int time;

  private void dfs(int u, boolean[] visited, int[] disc, int[] low, int[] parent, boolean[] ap, List<Integer>[] graph) {
    int children = 0;
    visited[u] = true;
    disc[u] = low[u] = ++time;

    for (int v : graph[u]) {
      if (!visited[v]) {
        children++;
        parent[v] = u;
        dfs(v, visited, disc, low, parent, ap, graph);
        low[u] = Math.min(low[u], low[v]);
        if (parent[u] == NIL && children > 1 || parent[u] != NIL && low[v] >= disc[u]) {
          ap[u] = true;
        }
      } else if (v != parent[u]) {
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  }

  public List<Integer> findArticulationPoints(List<Integer>[] graph, int V) {
    boolean[] visited = new boolean[V];
    int[] disc = new int[V];
    int[] low = new int[V];
    int[] parent = new int[V];
    boolean[] ap = new boolean[V];
    time = 0;

    Arrays.fill(parent, NIL);

    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        dfs(i, visited, disc, low, parent, ap, graph);
      }
    }

    List<Integer> result = new ArrayList<>();
    for (int i = 0; i < V; i++) {
      if (ap[i]) {
        result.add(i);
      }
    }
    return result;
  }
}
