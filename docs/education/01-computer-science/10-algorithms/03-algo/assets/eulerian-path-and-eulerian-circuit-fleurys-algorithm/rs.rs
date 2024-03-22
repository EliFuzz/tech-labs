use std::collections::HashMap;

fn fleurys_algorithm(graph: &mut HashMap<i32, Vec<i32>>) -> Vec<i32> {
    let mut circuit = Vec::new();
    let odd_vertices = find_odd_vertices(graph);

    let mut start_vertex = 0;
    if !odd_vertices.is_empty() {
        start_vertex = odd_vertices[0];
    }

    DFS(graph, start_vertex, &mut circuit);

    circuit
}

fn dfs(graph: &mut HashMap<i32, Vec<i32>>, vertex: i32, circuit: &mut Vec<i32>) {
    while !graph[&vertex].is_empty() {
        let next_vertex = graph.get_mut(&vertex).unwrap().remove(0);
        remove_edge(graph, vertex, next_vertex);
        dfs(graph, next_vertex, circuit);
    }
    circuit.push(vertex);
}

fn remove_edge(graph: &mut HashMap<i32, Vec<i32>>, u: i32, v: i32) {
    graph.get_mut(&u).unwrap().retain(|&x| x != v);
    graph.get_mut(&v).unwrap().retain(|&x| x != u);
}

fn find_odd_vertices(graph: &HashMap<i32, Vec<i32>>) -> Vec<i32> {
    let mut odd_vertices = Vec::new();
    for (vertex, neighbors) in graph {
        if neighbors.len() % 2 != 0 {
            odd_vertices.push(*vertex);
        }
    }
    odd_vertices
}
