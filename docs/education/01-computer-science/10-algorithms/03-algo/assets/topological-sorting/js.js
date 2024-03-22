class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacency = new Map();
    for (let i = 0; i < vertices; i++) {
      this.adjacency.set(i, []);
    }
  }

  addEdge(u, v) {
    this.adjacency.get(u).push(v);
  }

  topologicalSortUtil(vertex, visited, stack) {
    visited[vertex] = true;
    for (const v of this.adjacency.get(vertex)) {
      if (!visited[v]) {
        this.topologicalSortUtil(v, visited, stack);
      }
    }
    stack.push(vertex);
  }

  topologicalSort() {
    const stack = [];
    const visited = new Array(this.vertices).fill(false);

    for (let i = 0; i < this.vertices; i++) {
      if (!visited[i]) {
        this.topologicalSortUtil(i, visited, stack);
      }
    }

    return stack.reverse();
  }
}
