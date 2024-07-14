// Detect cycle in directed graph using DFS
class DirectedCycleDetection {
  graph: Map<number, number[]>;
  visited: Set<number>;
  recursionStack: Set<number>;

  constructor(graph: Map<number, number[]>) {
    this.graph = graph;
    this.visited = new Set();
    this.recursionStack = new Set();
  }

  hasCycle(): boolean {
    for (const node of this.graph.keys()) {
      if (!this.visited.has(node)) {
        if (this.dfs(node)) {
          return true;
        }
      }
    }
    return false;
  }

  dfs(node: number): boolean {
    this.visited.add(node);
    this.recursionStack.add(node);

    const neighbors = this.graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!this.visited.has(neighbor)) {
        if (this.dfs(neighbor)) {
          return true;
        }
      } else if (this.recursionStack.has(neighbor)) {
        return true;
      }
    }

    this.recursionStack.delete(node);
    return false;
  }
}

// Detect cycle in undirected graph using DFS
class UndirectedCycleDetection {
  graph: Map<number, number[]>;
  visited: Set<number>;

  constructor(graph: Map<number, number[]>) {
    this.graph = graph;
    this.visited = new Set();
  }

  hasCycle(): boolean {
    for (const node of this.graph.keys()) {
      if (!this.visited.has(node)) {
        if (this.dfs(node, -1)) {
          return true;
        }
      }
    }
    return false;
  }

  dfs(node: number, parent: number): boolean {
    this.visited.add(node);

    const neighbors = this.graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!this.visited.has(neighbor)) {
        if (this.dfs(neighbor, node)) {
          return true;
        }
      } else if (neighbor !== parent) {
        return true;
      }
    }

    return false;
  }
}

//Detect cycle in undirected graph using disjoint sets
class DisjointSet {
  parent: number[];

  constructor(size: number) {
    this.parent = Array(size).fill(-1);
  }

  find(x: number): number {
    if (this.parent[x] === -1) {
      return x;
    }
    return this.find(this.parent[x]);
  }

  union(x: number, y: number): boolean {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
      return false;
    }
    return true;
  }
}

class DisjointSetCycleDetection {
  graph: Map<number, number[]>;

  constructor(graph: Map<number, number[]>) {
    this.graph = graph;
  }

  hasCycle(): boolean {
    const ds = new DisjointSet(this.graph.size);

    for (const [node, neighbors] of this.graph.entries()) {
      for (const neighbor of neighbors) {
        if (ds.union(node, neighbor)) {
          return true;
        }
      }
    }

    return false;
  }
}
