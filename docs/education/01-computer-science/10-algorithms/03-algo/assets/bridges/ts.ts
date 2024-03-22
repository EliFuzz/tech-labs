class Graph {
  vertices: number;
  edges: number[][];

  constructor(vertices: number) {
    this.vertices = vertices;
    this.edges = new Array(vertices).fill(null).map(() => []);
  }

  addEdge(u: number, v: number) {
    this.edges[u].push(v);
    this.edges[v].push(u);
  }
}

let time = 0;

function dfs(
  u: number,
  parent: number,
  disc: number[],
  low: number[],
  visited: boolean[],
  bridges: number[][],
  g: Graph,
) {
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

function findBridges(g: Graph): number[][] {
  const disc: number[] = Array(g.vertices).fill(0);
  const low: number[] = Array(g.vertices).fill(0);
  const visited: boolean[] = Array(g.vertices).fill(false);
  const bridges: number[][] = [];

  for (let i = 0; i < g.vertices; i++) {
    if (!visited[i]) {
      dfs(i, -1, disc, low, visited, bridges, g);
    }
  }
  return bridges;
}
