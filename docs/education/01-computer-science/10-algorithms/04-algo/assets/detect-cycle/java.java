import java.util.*;

// Detect cycle in directed graph using DFS
public class DirectedCycleDetection {

  public static boolean hasCycle(Map<Integer, List<Integer>> graph) {
    Set<Integer> visited = new HashSet<>();
    Set<Integer> recursionStack = new HashSet<>();

    for (Integer node : graph.keySet()) {
      if (!visited.contains(node)) {
        if (dfs(graph, node, visited, recursionStack)) {
          return true;
        }
      }
    }

    return false;
  }

  private static boolean dfs(Map<Integer, List<Integer>> graph, int node, Set<Integer> visited, Set<Integer> recursionStack) {
    visited.add(node);
    recursionStack.add(node);

    for (Integer neighbor : graph.getOrDefault(node, new ArrayList<>())) {
      if (!visited.contains(neighbor)) {
        if (dfs(graph, neighbor, visited, recursionStack)) {
          return true;
        }
      } else if (recursionStack.contains(neighbor)) {
        return true;
      }
    }

    recursionStack.remove(node);
    return false;
  }
}

// Detect cycle in undirected graph using DFS
public class UndirectedCycleDetection {

  public static boolean hasCycle(Map<Integer, List<Integer>> graph) {
    Set<Integer> visited = new HashSet<>();

    for (Integer node : graph.keySet()) {
      if (!visited.contains(node)) {
        if (dfs(graph, node, -1, visited)) {
          return true;
        }
      }
    }

    return false;
  }

  private static boolean dfs(Map<Integer, List<Integer>> graph, int node, int parent, Set<Integer> visited) {
    visited.add(node);

    for (Integer neighbor : graph.getOrDefault(node, new ArrayList<>())) {
      if (!visited.contains(neighbor)) {
        if (dfs(graph, neighbor, node, visited)) {
          return true;
        }
      } else if (neighbor != parent) {
        return true;
      }
    }

    return false;
  }
}

// Detect cycle in undirected graph using disjoint sets
public class DisjointSetCycleDetection {

  public static boolean hasCycle(Map<Integer, List<Integer>> graph) {
    DisjointSet ds = new DisjointSet(graph.size());

    for (Integer node : graph.keySet()) {
      for (Integer neighbor : graph.get(node)) {
        if (ds.union(node, neighbor)) {
          return true;
        }
      }
    }

    return false;
  }

  static class DisjointSet {

    int[] parent;

    public DisjointSet(int size) {
      parent = new int[size];
      Arrays.fill(parent, -1);
    }

    public int find(int x) {
      if (parent[x] == -1) {
        return x;
      }
      return find(parent[x]);
    }

    public boolean union(int x, int y) {
      int rootX = find(x);
      int rootY = find(y);

      if (rootX != rootY) {
        parent[rootX] = rootY;
        return false;
      }
      return true;
    }
  }
}
