import java.util.Arrays;

public class HamiltonianCycle {

  static final int V = 6;
  static int[] path;

  static boolean isSafe(int v, int graph[][], int path[], int pos) {
    if (graph[path[pos - 1]][v] == 0) {
      return false;
    }

    for (int i = 0; i < pos; i++) {
      if (path[i] == v) {
        return false;
      }
    }

    return true;
  }

  static boolean hamCycleUtil(int graph[][], int path[], int pos) {
    if (pos == V) {
      if (graph[path[pos - 1]][path[0]] == 1) {
        return true;
      } else {
        return false;
      }
    }

    for (int v = 1; v < V; v++) {
      if (isSafe(v, graph, path, pos)) {
        path[pos] = v;
        if (hamCycleUtil(graph, path, pos + 1)) {
          return true;
        }
        path[pos] = -1;
      }
    }

    return false;
  }

  static int hamCycle(int graph[][]) {
    path = new int[V];
    Arrays.fill(path, -1);

    path[0] = 0;
    if (!hamCycleUtil(graph, path, 1)) {
      System.out.println("No Hamiltonian Cycle exists");
      return 0;
    }

    System.out.println("Hamiltonian Cycle exists: ");
    for (int i = 0; i < V; i++) {
      System.out.print(" " + path[i] + " ");
    }

    System.out.println(" " + path[0] + " ");
    return 1;
  }
}
