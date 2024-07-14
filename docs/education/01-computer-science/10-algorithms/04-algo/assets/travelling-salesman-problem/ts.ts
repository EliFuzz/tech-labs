function tsp(
  graph: number[][],
  visited: boolean[],
  current: number,
  n: number,
  count: number,
  cost: number,
  ans: number,
): number {
  if (count === n && graph[current][0] > 0) {
    return Math.min(ans, cost + graph[current][0]);
  }

  let newAns = ans;
  for (let i = 0; i < n; i++) {
    if (!visited[i] && graph[current][i] > 0) {
      visited[i] = true;
      newAns = tsp(
        graph,
        visited,
        i,
        n,
        count + 1,
        cost + graph[current][i],
        newAns,
      );
      visited[i] = false;
    }
  }
  return newAns;
}
