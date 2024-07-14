class PriorityQueue<T> {
  heap: { dist: number; node: T }[];

  constructor() {
    this.heap = [];
  }

  enqueue(node: T, dist: number) {
    this.heap.push({ dist, node });
    this.bubbleUp();
  }

  dequeue() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return min?.node;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const node = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (node.dist >= parent.dist) break;
      this.heap[parentIndex] = node;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const node = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.dist < node.dist) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild.dist < node.dist) ||
          (swap !== null && rightChild.dist < leftChild.dist)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = node;
      index = swap;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class Dijkstra {
  graph: { to: number; weight: number }[][];

  constructor() {
    this.graph = [];
  }

  addEdge(from: number, to: number, weight: number) {
    if (!this.graph[from]) {
      this.graph[from] = [];
    }
    this.graph[from].push({ to, weight });
  }

  dijkstra(source: number): number[] {
    const n = this.graph.length;
    const dist = Array(n).fill(Infinity);
    dist[source] = 0;

    const pq = new PriorityQueue<number>();
    pq.enqueue(source, 0);

    while (!pq.isEmpty()) {
      const { node: u, dist: d } = pq.dequeue()!;
      if (d > dist[u]) continue;
      for (const edge of this.graph[u] || []) {
        const alt = dist[u] + edge.weight;
        if (alt < dist[edge.to]) {
          dist[edge.to] = alt;
          pq.enqueue(edge.to, alt);
        }
      }
    }
    return dist;
  }
}
