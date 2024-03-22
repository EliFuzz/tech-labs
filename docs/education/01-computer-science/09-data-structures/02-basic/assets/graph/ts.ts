class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: LinkedListNode<T> | null;
  compare: (a: T, b: T) => number;

  constructor(compare: (a: T, b: T) => number) {
    this.head = null;
    this.compare = compare;
  }

  append(value: T): void {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  delete(value: T): void {
    if (!this.head) {
      return;
    }

    if (this.compare(this.head.value, value) === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (this.compare(current.next.value, value) === 0) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  find(params: { callback: (value: T) => boolean }): LinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    while (current) {
      if (params.callback(current.value)) {
        return current;
      }
      current = current.next;
    }

    return null;
  }
}

class GraphEdge<T> {
  startVertex: GraphVertex<T>;
  endVertex: GraphVertex<T>;
  weight: number;

  constructor(
    startVertex: GraphVertex<T>,
    endVertex: GraphVertex<T>,
    weight = 0,
  ) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  getKey(): string {
    const startVertexKey = this.startVertex.getKey();
    const endVertexKey = this.endVertex.getKey();
    return `${startVertexKey}_${endVertexKey}`;
  }

  reverse(): this {
    const tmp = this.startVertex;
    this.startVertex = this.endVertex;
    this.endVertex = tmp;
    return this;
  }
}

class GraphVertex<T> {
  value: T;
  edges: LinkedList<GraphEdge<T>>;

  constructor(value: T) {
    if (value === undefined) {
      throw new Error("Graph vertex must have a value");
    }

    const edgeComparator = (edgeA: GraphEdge<T>, edgeB: GraphEdge<T>) => {
      if (edgeA.getKey() === edgeB.getKey()) {
        return 0;
      }

      return edgeA.getKey() < edgeB.getKey() ? -1 : 1;
    };

    this.value = value;
    this.edges = new LinkedList(edgeComparator);
  }

  addEdge(edge: GraphEdge<T>): this {
    this.edges.append(edge);
    return this;
  }

  deleteEdge(edge: GraphEdge<T>): void {
    this.edges.delete(edge);
  }

  getNeighbors(): T[] {
    const edges = this.edges.toArray();

    const neighborsConverter = (node: LinkedListNode<GraphEdge<T>>) => {
      return node.value.startVertex === this
        ? node.value.endVertex
        : node.value.startVertex;
    };

    return edges.map(neighborsConverter);
  }

  getEdges(): GraphEdge<T>[] {
    return this.edges.toArray();
  }

  getDegree(): number {
    return this.edges.toArray().length;
  }

  hasEdge(requiredEdge: GraphEdge<T>): LinkedListNode<GraphEdge<T>> | null {
    return this.edges.find({
      callback: (edge) => edge === requiredEdge,
    });
  }

  hasNeighbor(vertex: T): LinkedListNode<GraphEdge<T>> | null {
    return this.edges.find({
      callback: (edge) =>
        edge.startVertex === vertex || edge.endVertex === vertex,
    });
  }

  findEdge(vertex: T): GraphEdge<T> | null {
    const edgeFinder = (edge: GraphEdge<T>) => {
      return edge.startVertex === vertex || edge.endVertex === vertex;
    };

    const edgeNode = this.edges.find({ callback: edgeFinder });

    return edgeNode ? edgeNode.value : null;
  }

  getKey(): string {
    return String(this.value);
  }

  deleteAllEdges(): this {
    this.getEdges().forEach((edge) => this.deleteEdge(edge));
    return this;
  }
}

class Graph<T> {
  vertices: { [key: string]: GraphVertex<T> };
  edges: { [key: string]: GraphEdge<T> };
  isDirected: boolean;

  constructor(isDirected = false) {
    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;
  }

  addVertex(newVertex: GraphVertex<T>): this {
    this.vertices[newVertex.getKey()] = newVertex;
    return this;
  }

  getVertexByKey(vertexKey: string): GraphVertex<T> | undefined {
    return this.vertices[vertexKey];
  }

  getNeighbors(vertex: GraphVertex<T>): T[] {
    return vertex.getNeighbors();
  }

  getAllVertices(): GraphVertex<T>[] {
    return Object.values(this.vertices);
  }

  getAllEdges(): GraphEdge<T>[] {
    return Object.values(this.edges);
  }

  addEdge(edge: GraphEdge<T>): this {
    let startVertex = this.getVertexByKey(edge.startVertex.getKey());
    let endVertex = this.getVertexByKey(edge.endVertex.getKey());

    if (!startVertex) {
      this.addVertex(edge.startVertex);
      startVertex = this.getVertexByKey(edge.startVertex.getKey())!;
    }

    if (!endVertex) {
      this.addVertex(edge.endVertex);
      endVertex = this.getVertexByKey(edge.endVertex.getKey())!;
    }

    if (this.edges[edge.getKey()]) {
      throw new Error("Edge has already been added before");
    } else {
      this.edges[edge.getKey()] = edge;
    }

    if (this.isDirected) {
      startVertex.addEdge(edge);
    } else {
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);
    }

    return this;
  }

  deleteEdge(edge: GraphEdge<T>): void {
    if (this.edges[edge.getKey()]) {
      delete this.edges[edge.getKey()];
    } else {
      throw new Error("Edge not found in graph");
    }

    const startVertex = this.getVertexByKey(edge.startVertex.getKey());
    const endVertex = this.getVertexByKey(edge.endVertex.getKey());

    startVertex?.deleteEdge(edge);
    endVertex?.deleteEdge(edge);
  }

  findEdge(
    startVertex: GraphVertex<T>,
    endVertex: GraphVertex<T>,
  ): GraphEdge<T> | null {
    const vertex = this.getVertexByKey(startVertex.getKey());

    if (!vertex) {
      return null;
    }

    return vertex.findEdge(endVertex.getKey());
  }

  getWeight(): number {
    return this.getAllEdges().reduce((weight, graphEdge) => {
      return weight + graphEdge.weight;
    }, 0);
  }

  reverse(): this {
    this.getAllEdges().forEach((edge) => {
      this.deleteEdge(edge);
      edge.reverse();
      this.addEdge(edge);
    });

    return this;
  }

  getVerticesIndices(): { [key: string]: number } {
    const verticesIndices: { [key: string]: number } = {};
    this.getAllVertices().forEach((vertex, index) => {
      verticesIndices[vertex.getKey()] = index;
    });

    return verticesIndices;
  }

  getAdjacencyMatrix(): number[][] {
    const vertices = this.getAllVertices();
    const verticesIndices = this.getVerticesIndices();

    const adjacencyMatrix: number[][] = Array(vertices.length)
      .fill(null)
      .map(() => {
        return Array(vertices.length).fill(Infinity);
      });

    vertices.forEach((vertex, vertexIndex) => {
      vertex.getNeighbors().forEach((neighbor) => {
        const neighborIndex = verticesIndices[neighbor.getKey()];
        const edge = this.findEdge(
          vertex,
          this.getVertexByKey(neighbor.getKey())!,
        );
        adjacencyMatrix[vertexIndex][neighborIndex] = edge.weight;
      });
    });

    return adjacencyMatrix;
  }
}
