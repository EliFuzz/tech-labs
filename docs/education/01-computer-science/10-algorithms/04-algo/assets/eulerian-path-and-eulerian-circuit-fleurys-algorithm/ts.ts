function fleurysAlgorithm(graph: Map<number, number[]>): number[] {
  const circuit: number[] = [];
  const oddVertices = findOddVertices(graph);

  let startVertex = 0;
  if (oddVertices.length > 0) {
    startVertex = oddVertices[0];
  }

  DFS(graph, startVertex, circuit);

  return circuit;
}

function DFS(graph: Map<number, number[]>, vertex: number, circuit: number[]) {
  while (graph.get(vertex)?.length) {
    const nextVertex = graph.get(vertex)!.shift()!;
    removeEdge(graph, vertex, nextVertex);
    DFS(graph, nextVertex, circuit);
  }
  circuit.push(vertex);
}

function removeEdge(graph: Map<number, number[]>, u: number, v: number) {
  graph.set(u, graph.get(u)?.filter((item) => item !== v)!);
  graph.set(v, graph.get(v)?.filter((item) => item !== u)!);
}

function findOddVertices(graph: Map<number, number[]>): number[] {
  const oddVertices: number[] = [];
  for (let [vertex, neighbors] of graph) {
    if (neighbors.length % 2 !== 0) {
      oddVertices.push(vertex);
    }
  }
  return oddVertices;
}
