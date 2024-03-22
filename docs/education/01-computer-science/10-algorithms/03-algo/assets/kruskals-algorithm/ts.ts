class Edge {
  source: number;
  destination: number;
  weight: number;

  constructor(source: number, destination: number, weight: number) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}

class Graph {
  vertices: number;
  edgeList: Edge[];

  constructor(vertices: number) {
    this.vertices = vertices;
    this.edgeList = [];
  }

  addEdge(source: number, destination: number, weight: number) {
    this.edgeList.push(new Edge(source, destination, weight));
  }
}

class KruskalsAlgorithm {
  static findParent(parent: number[], vertex: number): number {
    if (parent[vertex] !== vertex) {
      parent[vertex] = this.findParent(parent, parent[vertex]);
    }
    return parent[vertex];
  }

  static union(parent: number[], x: number, y: number) {
    const rootX = this.findParent(parent, x);
    const rootY = this.findParent(parent, y);
    parent[rootX] = rootY;
  }

  static kruskals(graph: Graph): Edge[] {
    const result: Edge[] = [];
    graph.edgeList.sort((a, b) => a.weight - b.weight);

    const parent = Array.from({ length: graph.vertices }, (_, i) => i);

    let edgeCount = 0;
    for (const edge of graph.edgeList) {
      if (edgeCount === graph.vertices - 1) break;

      const sourceParent = this.findParent(parent, edge.source);
      const destinationParent = this.findParent(parent, edge.destination);

      if (sourceParent !== destinationParent) {
        result.push(edge);
        this.union(parent, sourceParent, destinationParent);
        edgeCount++;
      }
    }

    return result;
  }
}
