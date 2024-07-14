import java.util.*;

public class FleuryAlgorithm {

  public static List<Integer> fleurysAlgorithm(Map<Integer, List<Integer>> graph) {
    List<Integer> circuit = new ArrayList<>();
    List<Integer> oddVertices = findOddVertices(graph);

    int startVertex = 0;
    if (!oddVertices.isEmpty()) {
      startVertex = oddVertices.get(0);
    }

    DFS(graph, startVertex, circuit);

    return circuit;
  }

  public static void DFS(Map<Integer, List<Integer>> graph, int vertex, List<Integer> circuit) {
    while (!graph.get(vertex).isEmpty()) {
      int nextVertex = graph.get(vertex).get(0);
      removeEdge(graph, vertex, nextVertex);
      DFS(graph, nextVertex, circuit);
    }
    circuit.add(vertex);
  }

  public static void removeEdge(Map<Integer, List<Integer>> graph, int u, int v) {
    graph.get(u).remove(Integer.valueOf(v));
    graph.get(v).remove(Integer.valueOf(u));
  }

  public static List<Integer> findOddVertices(Map<Integer, List<Integer>> graph) {
    List<Integer> oddVertices = new ArrayList<>();
    for (Map.Entry<Integer, List<Integer>> entry : graph.entrySet()) {
      if (entry.getValue().size() % 2 != 0) {
        oddVertices.add(entry.getKey());
      }
    }
    return oddVertices;
  }
}
