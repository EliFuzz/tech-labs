import java.util.Arrays;

public class TSP {

  static int tsp(int[][] graph, boolean[] visited, int current, int n, int count, int cost, int ans) {
    if (count == n && graph[current][0] > 0) {
      ans = Math.min(ans, cost + graph[current][0]);
      return ans;
    }

    for (int i = 0; i < n; i++) {
      if (!visited[i] && graph[current][i] > 0) {
        visited[i] = true;
        ans = tsp(graph, visited, i, n, count + 1, cost + graph[current][i], ans);
        visited[i] = false;
      }
    }
    return ans;
  }
}
