class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = new Array(vertices).fill().map(() => []);
  }

  addEdge(u, v) {
    this.edges[u].push(v);
    this.edges[v].push(u);
  }
}

let time = 0;

function dfs(u, parent, disc, low, visited, bridges, g) {
  visited[u] = true;
  disc[u] = time;
  low[u] = time;
  time++;

  for (let v of g.edges[u]) {
    if (!visited[v]) {
      dfs(v, u, disc, low, visited, bridges, g);
      low[u] = Math.min(low[u], low[v]);
      if (low[v] > disc[u]) {
        bridges.push([u, v]);
      }
    } else if (v !== parent) {
      low[u] = Math.min(low[u], disc[v]);
    }
  }
}

function findBridges(g) {
  const disc = new Array(g.vertices).fill(0);
  const low = new Array(g.vertices).fill(0);
  const visited = new Array(g.vertices).fill(false);
  const bridges = [];

  for (let i = 0; i < g.vertices; i++) {
    if (!visited[i]) {
      dfs(i, -1, disc, low, visited, bridges, g);
    }
  }
  return bridges;
}
