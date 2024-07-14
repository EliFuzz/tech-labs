const INF: i32 = 99999;

fn floyd_warshall(graph: &mut Vec<Vec<i32>>) {
    let V = graph.len();
    for k in 0..V {
        for i in 0..V {
            for j in 0..V {
                if graph[i][k] + graph[k][j] < graph[i][j] {
                    graph[i][j] = graph[i][k] + graph[k][j];
                }
            }
        }
    }
}
