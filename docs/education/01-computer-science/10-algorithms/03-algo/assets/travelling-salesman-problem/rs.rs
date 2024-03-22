use std::cmp;

fn tsp(graph: &Vec<Vec<i32>>, visited: &mut Vec<bool>, current: usize, n: usize, count: usize, cost: i32, ans: i32) -> i32 {
    if count == n && graph[current][0] > 0 {
        return cmp::min(ans, cost + graph[current][0]);
    }

    let mut new_ans = ans;
    for i in 0..n {
        if !visited[i] && graph[current][i] > 0 {
            visited[i] = true;
            new_ans = tsp(graph, visited, i, n, count + 1, cost + graph[current][i], new_ans);
            visited[i] = false;
        }
    }
    new_ans
}
