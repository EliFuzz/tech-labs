// Graph DFS
function DFS(graph, start) {
  let visited = new Array(graph.length).fill(false);
  let stack = [];
  stack.push(start);

  while (stack.length > 0) {
    let node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      process.stdout.write(node + " ");

      for (let neighbor of graph[node]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
}

// Binary Tree DFS
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function DFSBinaryTree(root) {
  if (root === null) {
    return;
  }
  let stack = [];
  stack.push(root);

  while (stack.length > 0) {
    let node = stack.pop();
    process.stdout.write(node.val + " ");

    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
}
