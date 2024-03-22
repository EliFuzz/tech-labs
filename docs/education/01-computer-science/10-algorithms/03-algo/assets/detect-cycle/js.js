// Detect cycle in directed graph using DFS
function hasCycleDirected(graph) {
  const visited = new Set();
  const recursionStack = new Set();

  function dfs(node) {
    visited.add(node);
    recursionStack.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) {
          return true;
        }
      } else if (recursionStack.has(neighbor)) {
        return true;
      }
    }

    recursionStack.delete(node);
    return false;
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      if (dfs(node)) {
        return true;
      }
    }
  }

  return false;
}

// Detect cycle in undirected graph using DFS
function hasCycleUndirected(graph) {
  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) {
          return true;
        }
      } else if (neighbor !== parent) {
        return true;
      }
    }

    return false;
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      if (dfs(node, null)) {
        return true;
      }
    }
  }

  return false;
}

// Detect cycle in undirected graph using disjoint sets
class DisjointSet {
  constructor(size) {
    this.parent = Array(size).fill(-1);
  }

  find(x) {
    if (this.parent[x] === -1) {
      return x;
    }
    return this.find(this.parent[x]);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
      return false;
    }
    return true;
  }
}

function hasCycleUndirectedDisjointSets(graph) {
  const disjointSet = new DisjointSet(Object.keys(graph).length);

  for (const node in graph) {
    for (const neighbor of graph[node]) {
      if (disjointSet.union(node, neighbor)) {
        return true;
      }
    }
  }

  return false;
}
