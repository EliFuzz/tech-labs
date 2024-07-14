function fleurysAlgorithm(graph) {
  let circuit = [];
  let oddVertices = findOddVertices(graph);

  let startVertex = 0;
  if (oddVertices.length > 0) {
    startVertex = oddVertices[0];
  }

  DFS(graph, startVertex, circuit);

  return circuit;
}

function DFS(graph, vertex, circuit) {
  while (graph[vertex].length > 0) {
    let nextVertex = graph[vertex][0];
    removeEdge(graph, vertex, nextVertex);
    DFS(graph, nextVertex, circuit);
  }
  circuit.push(vertex);
}

function removeEdge(graph, u, v) {
  graph[u] = graph[u].filter((item) => item !== v);
  graph[v] = graph[v].filter((item) => item !== u);
}

function findOddVertices(graph) {
  let oddVertices = [];
  for (let vertex in graph) {
    if (graph[vertex].length % 2 !== 0) {
      oddVertices.push(parseInt(vertex));
    }
  }
  return oddVertices;
}
