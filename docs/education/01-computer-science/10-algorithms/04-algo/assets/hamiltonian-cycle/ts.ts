const V: number = 6;

function isSafe(
  v: number,
  graph: number[][],
  path: number[],
  pos: number,
): boolean {
  if (graph[path[pos - 1]][v] === 0) return false;

  for (let i = 0; i < pos; i++) if (path[i] === v) return false;

  return true;
}

function hamCycleUtil(graph: number[][], path: number[], pos: number): boolean {
  if (pos === V) {
    return graph[path[pos - 1]][path[0]] === 1;
  }

  for (let v = 1; v < V; v++) {
    if (isSafe(v, graph, path, pos)) {
      path[pos] = v;
      if (hamCycleUtil(graph, path, pos + 1)) return true;
      path[pos] = -1;
    }
  }

  return false;
}

function hamCycle(graph: number[][]): void {
  let path: number[] = Array(V).fill(-1);

  path[0] = 0;
  if (!hamCycleUtil(graph, path, 1)) {
    console.log("No Hamiltonian Cycle exists");
    return;
  }

  console.log("Hamiltonian Cycle exists:");
  for (let i = 0; i < V; i++) process.stdout.write(" " + path[i] + " ");

  console.log(" " + path[0] + " ");
}
