def tsp(graph, visited, current, n, count, cost, ans):
    if count == n and graph[current][0] > 0:
        return min(ans, cost + graph[current][0])

    for i in range(n):
        if not visited[i] and graph[current][i] > 0:
            visited[i] = True
            ans = tsp(graph, visited, i, n, count + 1, cost + graph[current][i], ans)
            visited[i] = False
    return ans
