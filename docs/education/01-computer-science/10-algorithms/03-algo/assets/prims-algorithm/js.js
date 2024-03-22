class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
    this.queue.sort((a, b) => a[1] - b[1]);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

class Graph {
  constructor(numNodes) {
    this.numNodes = numNodes;
    this.adjList = new Map();
    for (let i = 0; i < numNodes; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(u, v, weight) {
    this.adjList.get(u).push({ node: v, weight });
    this.adjList.get(v).push({ node: u, weight });
  }
}

function primMST(graph) {
  const visited = new Array(graph.numNodes).fill(false);
  const pq = new PriorityQueue();
  const startNode = 0;

  pq.enqueue([startNode, 0]);

  let minCost = 0;

  while (!pq.isEmpty()) {
    const [u, weight] = pq.dequeue();

    if (visited[u]) {
      continue;
    }

    visited[u] = true;
    minCost += weight;

    for (const { node, weight } of graph.adjList.get(u)) {
      if (!visited[node]) {
        pq.enqueue([node, weight]);
      }
    }
  }
  return minCost;
}
