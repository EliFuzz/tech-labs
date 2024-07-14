use std::collections::BinaryHeap;
use std::cmp::Ordering;

#[derive(Clone, Copy, Eq, PartialEq)]
struct Edge {
    node: usize,
    weight: usize,
}

impl Ord for Edge {
    fn cmp(&self, other: &Self) -> Ordering {
        other.weight.cmp(&self.weight)
    }
}

impl PartialOrd for Edge {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

struct Graph {
    num_nodes: usize,
    adj_list: Vec<Vec<Edge>>,
}

impl Graph {
    fn new(num_nodes: usize) -> Self {
        Graph {
            num_nodes,
            adj_list: vec![Vec::new(); num_nodes],
        }
    }

    fn add_edge(&mut self, u: usize, v: usize, weight: usize) {
        self.adj_list[u].push(Edge { node: v, weight });
        self.adj_list[v].push(Edge { node: u, weight });
    }
}

fn prim_mst(graph: &Graph) -> usize {
    let mut visited = vec![false; graph.num_nodes];
    let mut pq = BinaryHeap::new();
    let start_node = 0;

    pq.push(Edge { node: start_node, weight: 0 });
    
    let mut min_cost = 0;

    while let Some(Edge { node: u, weight }) = pq.pop() {
        if visited[u] {
            continue;
        }

        visited[u] = true;
        min_cost += weight;

        for &Edge { node: v, weight } in &graph.adj_list[u] {
            if !visited[v] {
                pq.push(Edge { node: v, weight });
            }
        }
    }
    min_cost
}
