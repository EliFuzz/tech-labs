class Edge {
  constructor(
    public node: number,
    public weight: number,
  ) {}
}

class Graph {
  numNodes: number;
  adjList: Map<number, Edge[]>;

  constructor(numNodes: number) {
    this.numNodes = numNodes;
    this.adjList = new Map<number, Edge[]>();
    for (let i = 0; i < numNodes; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(u: number, v: number, weight: number) {
    this.adjList.get(u)?.push(new Edge(v, weight));
    this.adjList.get(v)?.push(new Edge(u, weight));
  }
}

function primMST(graph: Graph): number {
  const visited: boolean[] = new Array(graph.numNodes).fill(false);
  const pq: [number, number][] = [];
  const startNode = 0;

  pq.push([0, startNode]);

  let minCost = 0;

  while (pq.length > 0) {
    const [weight, u] = pq.shift()!;

    if (visited[u]) {
      continue;
    }

    visited[u] = true;

    minCost += weight;

    for (const edge of graph.adjList.get(u)!) {
      const { node: v, weight } = edge;
      if (!visited[v]) {
        pq.push([weight, v]);
      }
    }
    pq.sort((a, b) => a[0] - b[0]);
  }
  return minCost;
}
