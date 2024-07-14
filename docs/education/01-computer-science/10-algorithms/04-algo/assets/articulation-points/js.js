class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.adj = new Array(vertices).fill(null).map(() => []);
  }

  addEdge(u, v) {
    this.adj[u].push(v);
    this.adj[v].push(u);
  }

  dfs(u, visited, parent, low, disc, ap) {
    let children = 0;
    visited[u] = true;
    disc[u] = low[u] = ++this.time;

    for (const v of this.adj[u]) {
      if (!visited[v]) {
        children++;
        parent[v] = u;
        this.dfs(v, visited, parent, low, disc, ap);
        low[u] = Math.min(low[u], low[v]);
        if (
          (parent[u] === -1 && children > 1) ||
          (parent[u] !== -1 && low[v] >= disc[u])
        ) {
          ap[u] = true;
        }
      } else if (v !== parent[u]) {
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  }

  findArticulationPoints() {
    const visited = new Array(this.V).fill(false);
    const parent = new Array(this.V).fill(-1);
    const disc = new Array(this.V).fill(0);
    const low = new Array(this.V).fill(0);
    const ap = new Array(this.V).fill(false);
    this.time = 0;

    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        this.dfs(i, visited, parent, low, disc, ap);
      }
    }

    const result = [];
    for (let i = 0; i < this.V; i++) {
      if (ap[i]) {
        result.push(i);
      }
    }
    return result;
  }
}
