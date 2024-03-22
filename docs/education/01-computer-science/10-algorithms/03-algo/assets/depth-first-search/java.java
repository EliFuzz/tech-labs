import java.util.*;

// Graph DFS
class Graph {

  void DFS(List<List<Integer>> graph, int start) {
    boolean[] visited = new boolean[graph.size()];
    Stack<Integer> stack = new Stack<>();
    stack.push(start);

    while (!stack.isEmpty()) {
      int node = stack.pop();
      if (!visited[node]) {
        visited[node] = true;
        System.out.print(node + " ");

        for (int neighbor : graph.get(node)) {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        }
      }
    }
  }
}

// Binary Tree DFS
class BinaryTree {

  void dfs(TreeNode root) {
    if (root == null) {
      return;
    }
    Stack<TreeNode> stack = new Stack<>();
    stack.push(root);

    while (!stack.isEmpty()) {
      TreeNode node = stack.pop();
      System.out.print(node.val + " ");

      if (node.right != null) {
        stack.push(node.right);
      }
      if (node.left != null) {
        stack.push(node.left);
      }
    }
  }

  static class TreeNode {

    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
      val = x;
    }
  }
}
