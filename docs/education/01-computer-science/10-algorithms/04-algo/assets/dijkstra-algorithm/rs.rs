use std::cmp::Ordering;
use std::collections::BinaryHeap;

#[derive(Debug, Clone, Copy, Eq, PartialEq)]
struct Edge {
    to: usize,
    weight: i32,
}

#[derive(Debug, Clone, Copy, Eq, PartialEq)]
struct Node {
    id: usize,
    dist: i32,
}

impl Ord for Node {
    fn cmp(&self, other: &Self) -> Ordering {
        other.dist.cmp(&self.dist)
    }
}

impl PartialOrd for Node {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

fn dijkstra(graph: &[Vec<Edge>], source: usize) -> Vec<i32> {
    let n = graph.len();
    let mut dist = vec![i32::MAX; n];
    dist[source] = 0;

    let mut pq = BinaryHeap::new();
    pq.push(Node { id: source, dist: 0 });

    while let Some(Node { id: u, dist: _ }) = pq.pop() {
        for edge in &graph[u] {
            let alt = dist[u] + edge.weight;
            if alt < dist[edge.to] {
                dist[edge.to] = alt;
                pq.push(Node { id: edge.to, dist: alt });
            }
        }
    }
    dist
}
