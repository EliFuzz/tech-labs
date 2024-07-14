import java.util.*;

class Edge {

  int node;
  int weight;

  public Edge(int node, int weight) {
    this.node = node;
    this.weight = weight;
  }
}

class Graph {

  int numNodes;
  Map<Integer, List<Edge>> adjList;

  public Graph(int numNodes) {
    this.numNodes = numNodes;
    this.adjList = new HashMap<>();
    for (int i = 0; i < numNodes; i++) {
      adjList.put(i, new ArrayList<>());
    }
  }

  public void addEdge(int u, int v, int weight) {
    adjList.get(u).add(new Edge(v, weight));
    adjList.get(v).add(new Edge(u, weight));
  }
}

public class PrimAlgorithm {

  public static int primMST(Graph graph) {
    boolean[] visited = new boolean[graph.numNodes];
    PriorityQueue<Edge> pq = new PriorityQueue<>(Comparator.comparingInt(e -> e.weight));
    int startNode = 0;

    pq.offer(new Edge(startNode, 0));

    int minCost = 0;

    while (!pq.isEmpty()) {
      Edge edge = pq.poll();
      int u = edge.node;

      if (visited[u]) {
        continue;
      }

      visited[u] = true;
      minCost += edge.weight;

      for (Edge adjacent : graph.adjList.get(u)) {
        int v = adjacent.node;
        int weight = adjacent.weight;

        if (!visited[v]) {
          pq.offer(new Edge(v, weight));
        }
      }
    }
    return minCost;
  }
}
