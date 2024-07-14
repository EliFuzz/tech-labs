import java.util.Arrays;

class FloydWarshall {

  final static int INF = 99999;

  void floydWarshall(int graph[][], int V) {
    int dist[][] = new int[V][V];

    for (int i = 0; i < V; i++) {
      for (int j = 0; j < V; j++) {
        dist[i][j] = graph[i][j];
      }
    }

    for (int k = 0; k < V; k++) {
      for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
    printSolution(dist, V);
  }
}
