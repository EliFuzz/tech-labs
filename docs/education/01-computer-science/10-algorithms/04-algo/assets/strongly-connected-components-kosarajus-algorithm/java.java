import java.util.*;

class Graph {

  private int vertices;
  private LinkedList<Integer>[] adj;

  Graph(int vertices) {
    this.vertices = vertices;
    adj = new LinkedList[vertices];
    for (int i = 0; i < vertices; ++i) {
      adj[i] = new LinkedList();
    }
  }

  void addEdge(int v, int w) {
    adj[v].add(w);
  }

  void dfsUtil(int v, boolean[] visited, Stack<Integer> stack) {
    visited[v] = true;
    for (Integer i : adj[v]) {
      if (!visited[i]) {
        dfsUtil(i, visited, stack);
      }
    }
    stack.push(v);
  }

  Graph getTranspose() {
    Graph g = new Graph(vertices);
    for (int v = 0; v < vertices; v++) {
      for (Integer i : adj[v]) {
        g.addEdge(i, v);
      }
    }
    return g;
  }

  void fillOrder(int v, boolean[] visited, Stack<Integer> stack) {
    visited[v] = true;
    for (Integer i : adj[v]) {
      if (!visited[i]) {
        fillOrder(i, visited, stack);
      }
    }
    stack.push(v);
  }

  void printSCCs() {
    Stack<Integer> stack = new Stack<>();

    boolean[] visited = new boolean[vertices];
    for (int i = 0; i < vertices; i++) {
      visited[i] = false;
    }

    for (int i = 0; i < vertices; i++) {
      if (!visited[i]) {
        dfsUtil(i, visited, stack);
      }
    }

    Graph transpose = getTranspose();

    for (int i = 0; i < vertices; i++) {
      visited[i] = false;
    }

    while (!stack.empty()) {
      int v = stack.pop();
      if (!visited[v]) {
        transpose.fillOrder(v, visited, stack);
        System.out.println();
      }
    }
  }
}
