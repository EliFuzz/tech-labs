class Graph {
  private vertices: number;
  private adj: number[][];

  constructor(vertices: number) {
    this.vertices = vertices;
    this.adj = Array.from({ length: vertices }, () => []);
  }

  addEdge(v: number, w: number) {
    this.adj[v].push(w);
  }

  dfsUtil(v: number, visited: boolean[], stack: number[]) {
    visited[v] = true;
    for (let i of this.adj[v]) {
      if (!visited[i]) {
        this.dfsUtil(i, visited, stack);
      }
    }
    stack.push(v);
  }

  getTranspose(): Graph {
    let g = new Graph(this.vertices);
    for (let v = 0; v < this.vertices; v++) {
      for (let i of this.adj[v]) {
        g.addEdge(i, v);
      }
    }
    return g;
  }

  fillOrder(v: number, visited: boolean[], stack: number[]) {
    visited[v] = true;
    for (let i of this.adj[v]) {
      if (!visited[i]) {
        this.fillOrder(i, visited, stack);
      }
    }
    stack.push(v);
  }

  printSCCs() {
    let stack: number[] = [];

    let visited: boolean[] = new Array(this.vertices).fill(false);
    for (let i = 0; i < this.vertices; i++)
      if (!visited[i]) this.dfsUtil(i, visited, stack);

    let transpose = this.getTranspose();

    visited = new Array(this.vertices).fill(false);

    while (stack.length !== 0) {
      let v = stack.pop()!;
      if (!visited[v]) {
        transpose.fillOrder(v, visited, stack);
        console.log();
      }
    }
  }
}
