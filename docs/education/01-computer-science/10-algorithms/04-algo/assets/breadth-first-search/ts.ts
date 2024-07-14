// Graph BFS
function BFS(graph: number[][], start: number): void {
  const visited: boolean[] = new Array(graph.length).fill(false);
  const queue: number[] = [start];
  visited[start] = true;

  while (queue.length > 0) {
    const node: number = queue.shift()!;
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
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function BFS(root: TreeNode | null): void {
  if (!root) return;
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const node: TreeNode = queue.shift()!;
    process.stdout.write(node.val + " ");

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
