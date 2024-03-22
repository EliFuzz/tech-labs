class Graph {
  V: number;
  adj: Map<number, number[]>;
  time: number;

  constructor(V: number) {
    this.V = V;
    this.adj = new Map();
    this.time = 0;
    for (let i = 0; i < V; i++) {
      this.adj.set(i, []);
    }
  }

  addEdge(u: number, v: number) {
    this.adj.get(u).push(v);
    this.adj.get(v).push(u);
  }

  dfs(
    u: number,
    visited: boolean[],
    parent: number[],
    disc: number[],
    low: number[],
    ap: boolean[],
  ) {
    let children = 0;
    visited[u] = true;
    disc[u] = this.time;
    low[u] = this.time;
    this.time++;

    for (const v of this.adj.get(u)!) {
      if (!visited[v]) {
        children++;
        parent[v] = u;
        this.dfs(v, visited, parent, disc, low, ap);
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

  findArticulationPoints(): number[] {
    const visited: boolean[] = new Array(this.V).fill(false);
    const parent: number[] = new Array(this.V).fill(-1);
    const disc: number[] = new Array(this.V).fill(0);
    const low: number[] = new Array(this.V).fill(0);
    const ap: boolean[] = new Array(this.V).fill(false);

    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        this.dfs(i, visited, parent, disc, low, ap);
      }
    }

    return ap.map((val, idx) => (val ? idx : -1)).filter((val) => val !== -1);
  }
}
