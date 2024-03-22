// Graph BFS
function BFS(graph, start) {
  const visited = new Array(graph.length).fill(false);
  const queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    process.stdout.write(node + " ");

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}

// Binary Tree BFS
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function BFS(root) {
  if (!root) {
    return;
  }
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    process.stdout.write(node.val + " ");

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}
