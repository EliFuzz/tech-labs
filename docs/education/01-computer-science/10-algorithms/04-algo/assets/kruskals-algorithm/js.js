class Edge {
  constructor(source, destination, weight) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}

class Graph {
  constructor(vertices, edges) {
    this.vertices = vertices;
    this.edges = edges;
    this.edgeList = [];
  }

  addEdge(source, destination, weight) {
    this.edgeList.push(new Edge(source, destination, weight));
  }
}

class KruskalsAlgorithm {
  static findParent(parent, vertex) {
    if (parent[vertex] !== vertex) {
      parent[vertex] = this.findParent(parent, parent[vertex]);
    }
    return parent[vertex];
  }

  static union(parent, x, y) {
    const rootX = this.findParent(parent, x);
    const rootY = this.findParent(parent, y);
    parent[rootX] = rootY;
  }

  static kruskals(graph) {
    const result = [];
    graph.edgeList.sort((a, b) => a.weight - b.weight);

    const parent = Array.from({ length: graph.vertices }, (_, i) => i);

    let edgeCount = 0;
    for (const edge of graph.edgeList) {
      if (edgeCount === graph.vertices - 1) {
        break;
      }

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
