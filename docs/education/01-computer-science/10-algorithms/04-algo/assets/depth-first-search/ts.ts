// Graph DFS
function DFS(graph: number[][], start: number): void {
  const visited: boolean[] = new Array(graph.length).fill(false);
  const stack: number[] = [];
  stack.push(start);

  while (stack.length > 0) {
    const node: number = stack.pop()!;
    if (!visited[node]) {
      visited[node] = true;
      process.stdout.write(`${node} `);

      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
}

// Binary Tree DFS
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

function DFSBinaryTree(root: TreeNode | null): void {
  if (!root) {
    return;
  }
  const stack: (TreeNode | null)[] = [];
  stack.push(root);

  while (stack.length > 0) {
    const node: TreeNode | null = stack.pop()!;
    if (node !== null) {
      process.stdout.write(`${node.val} `);

      if (node.right !== null) {
        stack.push(node.right);
      }
      if (node.left !== null) {
        stack.push(node.left);
      }
    }
  }
}
