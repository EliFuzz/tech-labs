class Edge {
  src: number;
  dest: number;
  weight: number;

  constructor(src: number, dest: number, weight: number) {
    this.src = src;
    this.dest = dest;
    this.weight = weight;
  }
}

function bellmanFord(graph: Edge[], V: number, E: number, src: number): void {
  let dist: number[] = Array(V).fill(Number.MAX_SAFE_INTEGER);
  dist[src] = 0;

  for (let i = 1; i < V; i++) {
    for (let j = 0; j < E; j++) {
      let u: number = graph[j].src;
      let v: number = graph[j].dest;
      let weight: number = graph[j].weight;
      if (dist[u] != Number.MAX_SAFE_INTEGER && dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight;
      }
    }
  }

  for (let j = 0; j < E; j++) {
    let u: number = graph[j].src;
    let v: number = graph[j].dest;
    let weight: number = graph[j].weight;
    if (dist[u] != Number.MAX_SAFE_INTEGER && dist[u] + weight < dist[v]) {
      console.log("Graph contains negative weight cycle");
      return;
    }
  }

  console.log("Vertex Distance from Source:");
  for (let i = 0; i < V; i++) {
    console.log(i + "\t\t" + dist[i]);
  }
}
