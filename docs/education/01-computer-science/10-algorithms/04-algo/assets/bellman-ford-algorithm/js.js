function BellmanFord(graph, V, E, src) {
  let dist = new Array(V).fill(Number.MAX_SAFE_INTEGER);
  dist[src] = 0;

  for (let i = 1; i < V; i++) {
    for (let j = 0; j < E; j++) {
      let u = graph[j].src;
      let v = graph[j].dest;
      let weight = graph[j].weight;
      if (dist[u] != Number.MAX_SAFE_INTEGER && dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight;
      }
    }
  }

  for (let j = 0; j < E; j++) {
    let u = graph[j].src;
    let v = graph[j].dest;
    let weight = graph[j].weight;
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
