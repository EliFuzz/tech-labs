struct Graph {
    vertices: usize,
    edges: Vec<Vec<usize>>,
}

impl Graph {
    fn new(vertices: usize) -> Graph {
        Graph {
            vertices,
            edges: vec![Vec::new(); vertices],
        }
    }

    fn add_edge(&mut self, u: usize, v: usize) {
        self.edges[u].push(v);
        self.edges[v].push(u);
    }
}

static mut TIME: usize = 0;

fn dfs(u: usize, parent: isize, disc: &mut [usize], low: &mut [usize], visited: &mut [bool], bridges: &mut Vec<Vec<usize>>, g: &Graph) {
    unsafe {
        visited[u] = true;
        disc[u] = TIME;
        low[u] = TIME;
        TIME += 1;

        for &v in &g.edges[u] {
            if !visited[v] {
                dfs(v, u as isize, disc, low, visited, bridges, g);
                low[u] = std::cmp::min(low[u], low[v]);
                if low[v] > disc[u] {
                    bridges.push(vec![u, v]);
                }
            } else if v != parent as usize {
                low[u] = std::cmp::min(low[u], disc[v]);
            }
        }
    }
}

fn find_bridges(g: &Graph) -> Vec<Vec<usize>> {
    let mut disc = vec![0; g.vertices];
    let mut low = vec![0; g.vertices];
    let mut visited = vec![false; g.vertices];
    let mut bridges = Vec::new();
    unsafe {
        TIME = 0;
    }

    for i in 0..g.vertices {
        if !visited[i] {
            dfs(i, -1, &mut disc, &mut low, &mut visited, &mut bridges, g);
        }
    }
    bridges
}
