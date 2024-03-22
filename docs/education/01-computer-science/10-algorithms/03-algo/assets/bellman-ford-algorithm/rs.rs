use std::cmp::Ordering;

#[derive(Clone, Copy)]
struct Edge {
    src: usize,
    dest: usize,
    weight: i32,
}

impl Edge {
    pub fn new(src: usize, dest: usize, weight: i32) -> Self {
        Edge { src, dest, weight }
    }
}

fn bellman_ford(graph: &Vec<Edge>, v: usize, e: usize, src: usize) {
    let mut dist: Vec<i32> = vec![i32::MAX; v];
    dist[src] = 0;

    for _ in 1..v {
        for j in 0..e {
            let u = graph[j].src;
            let v = graph[j].dest;
            let weight = graph[j].weight;
            if dist[u] != i32::MAX && dist[u] + weight < dist[v] {
                dist[v] = dist[u] + weight;
            }
        }
    }

    for j in 0..e {
        let u = graph[j].src;
        let v = graph[j].dest;
        let weight = graph[j].weight;
        if dist[u] != i32::MAX && dist[u] + weight < dist[v] {
            println!("Graph contains negative weight cycle");
            return;
        }
    }

    println!("Vertex Distance from Source:");
    for i in 0..v {
        println!("{} \t\t {}", i, dist[i]);
    }
}
