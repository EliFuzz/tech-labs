#[derive(Clone, Copy)]
struct Edge {
    source: usize,
    destination: usize,
    weight: i32,
}

struct Graph {
    vertices: usize,
    edge_list: Vec<Edge>,
}

impl Graph {
    fn new(vertices: usize) -> Self {
        Graph {
            vertices,
            edge_list: Vec::new(),
        }
    }

    fn add_edge(&mut self, source: usize, destination: usize, weight: i32) {
        self.edge_list.push(Edge {
            source,
            destination,
            weight,
        });
    }
}

fn find_parent(parent: &mut Vec<usize>, vertex: usize) -> usize {
    if parent[vertex] != vertex {
        parent[vertex] = find_parent(parent, parent[vertex]);
    }
    parent[vertex]
}

fn union(parent: &mut Vec<usize>, x: usize, y: usize) {
    let root_x = find_parent(parent, x);
    let root_y = find_parent(parent, y);
    parent[root_x] = root_y;
}

fn kruskals(graph: &Graph) -> Vec<Edge> {
    let mut result = Vec::new();
    let mut edge_list = graph.edge_list.clone();
    edge_list.sort_by_key(|x| x.weight);
    let mut parent: Vec<usize> = (0..graph.vertices).collect();

    let mut edge_count = 0;
    for edge in edge_list {
        if edge_count == graph.vertices - 1 {
            break;
        }
        let source_parent = find_parent(&mut parent, edge.source);
        let destination_parent = find_parent(&mut parent, edge.destination);
        if source_parent != destination_parent {
            result.push(edge);
            union(&mut parent, source_parent, destination_parent);
            edge_count += 1;
        }
    }
    result
}
