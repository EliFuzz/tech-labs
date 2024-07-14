class Graph {
  vertices: number;
  adjacency: Map<number, number[]>;

  constructor(vertices: number) {
    this.vertices = vertices;
    this.adjacency = new Map();
    for (let i = 0; i < vertices; i++) {
      this.adjacency.set(i, []);
    }
  }

  addEdge(u: number, v: number): void {
    this.adjacency.get(u)?.push(v);
  }

  topologicalSort(): number[] {
    const stack: number[] = [];
    const visited: boolean[] = new Array(this.vertices).fill(false);

    for (let i = 0; i < this.vertices; i++) {
      if (!visited[i]) {
        this.topologicalSortUtil(i, visited, stack);
      }
    }

    return stack.reverse();
  }

  private topologicalSortUtil(
    vertex: number,
    visited: boolean[],
    stack: number[],
  ): void {
    visited[vertex] = true;
    for (const v of this.adjacency.get(vertex)!) {
      if (!visited[v]) {
        this.topologicalSortUtil(v, visited, stack);
      }
    }
    stack.push(vertex);
  }
}
