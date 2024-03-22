import java.util.*;

class Edge implements Comparable<Edge> {

  int source, destination, weight;

  public Edge(int source, int destination, int weight) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }

  @Override
  public int compareTo(Edge compareEdge) {
    return this.weight - compareEdge.weight;
  }
}

class Graph {

  int vertices, edges;
  Edge[] edgeList;

  public Graph(int vertices, int edges) {
    this.vertices = vertices;
    this.edges = edges;
    edgeList = new Edge[edges];
  }

  public void addEdge(int source, int destination, int weight, int index) {
    edgeList[index] = new Edge(source, destination, weight);
  }
}

class KruskalsAlgorithm {

  public static int findParent(int[] parent, int vertex) {
    if (parent[vertex] != vertex) {
      parent[vertex] = findParent(parent, parent[vertex]);
    }
    return parent[vertex];
  }

  public static void union(int[] parent, int x, int y) {
    int rootX = findParent(parent, x);
    int rootY = findParent(parent, y);
    parent[rootX] = rootY;
  }

  public static List<Edge> kruskals(Graph graph) {
    List<Edge> result = new ArrayList<>();
    Arrays.sort(graph.edgeList);

    int[] parent = new int[graph.vertices];
    for (int i = 0; i < graph.vertices; i++) {
      parent[i] = i;
    }

    int edgeCount = 0;
    for (Edge edge : graph.edgeList) {
      if (edgeCount == graph.vertices - 1) {
        break;
      }

      int sourceParent = findParent(parent, edge.source);
      int destinationParent = findParent(parent, edge.destination);

      if (sourceParent != destinationParent) {
        result.add(edge);
        union(parent, sourceParent, destinationParent);
        edgeCount++;
      }
    }

    return result;
  }
}
