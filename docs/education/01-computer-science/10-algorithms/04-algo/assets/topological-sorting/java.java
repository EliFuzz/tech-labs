import java.util.*;

class Graph {

  private int vertices;
  private Map<Integer, List<Integer>> adjacency;

  public Graph(int vertices) {
    this.vertices = vertices;
    adjacency = new HashMap<>();
    for (int i = 0; i < vertices; i++) {
      adjacency.put(i, new ArrayList<>());
    }
  }

  public void addEdge(int u, int v) {
    adjacency.get(u).add(v);
  }

  private void topologicalSortUtil(int vertex, boolean[] visited, Stack<Integer> stack) {
    visited[vertex] = true;
    for (int v : adjacency.get(vertex)) {
      if (!visited[v]) {
        topologicalSortUtil(v, visited, stack);
      }
    }
    stack.push(vertex);
  }

  public List<Integer> topologicalSort() {
    Stack<Integer> stack = new Stack<>();
    boolean[] visited = new boolean[vertices];

    for (int i = 0; i < vertices; i++) {
      if (!visited[i]) {
        topologicalSortUtil(i, visited, stack);
      }
    }

    List<Integer> result = new ArrayList<>();
    while (!stack.isEmpty()) {
      result.add(stack.pop());
    }
    return result;
  }
}
