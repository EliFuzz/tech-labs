class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adj = new Array(vertices).fill().map(() => []);
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  dfsUtil(v, visited, stack) {
    visited[v] = true;
    for (let i of this.adj[v]) {
      if (!visited[i]) {
        this.dfsUtil(i, visited, stack);
      }
    }
    stack.push(v);
  }

  getTranspose() {
    let g = new Graph(this.vertices);
    for (let v = 0; v < this.vertices; v++) {
      for (let i of this.adj[v]) {
        g.addEdge(i, v);
      }
    }
    return g;
  }

  fillOrder(v, visited, stack) {
    visited[v] = true;
    for (let i of this.adj[v]) {
      if (!visited[i]) {
        this.fillOrder(i, visited, stack);
      }
    }
    stack.push(v);
  }

  printSCCs() {
    let stack = [];

    let visited = new Array(this.vertices).fill(false);
    for (let i = 0; i < this.vertices; i++) {
      if (!visited[i]) {
        this.dfsUtil(i, visited, stack);
      }
    }

    let transpose = this.getTranspose();

    visited = new Array(this.vertices).fill(false);

    while (stack.length !== 0) {
      let v = stack.pop();
      if (!visited[v]) {
        transpose.fillOrder(v, visited, stack);
        console.log();
      }
    }
  }
}
