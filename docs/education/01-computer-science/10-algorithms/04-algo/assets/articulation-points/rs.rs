use std::collections::HashMap;

struct Graph {
    vertices: usize,
    adj_list: HashMap<usize, Vec<usize>>,
    time: usize,
}

impl Graph {
    fn new(vertices: usize) -> Self {
        Graph {
            vertices,
            adj_list: HashMap::new(),
            time: 0,
        }
    }

    fn add_edge(&mut self, u: usize, v: usize) {
        self.adj_list.entry(u).or_insert(Vec::new()).push(v);
        self.adj_list.entry(v).or_insert(Vec::new()).push(u);
    }

    fn dfs(
        &mut self,
        u: usize,
        visited: &mut Vec<bool>,
        parent: &mut Vec<isize>,
        disc: &mut Vec<usize>,
        low: &mut Vec<usize>,
        ap: &mut Vec<bool>,
    ) {
        let mut children = 0;
        visited[u] = true;
        disc[u] = self.time;
        low[u] = self.time;
        self.time += 1;

        for &v in self.adj_list.get(&u).unwrap().iter() {
            if !visited[v] {
                children += 1;
                parent[v] = u as isize;
                self.dfs(v, visited, parent, disc, low, ap);
                low[u] = low[u].min(low[v]);
                if (parent[u] == -1 && children > 1) || (parent[u] != -1 && low[v] >= disc[u]) {
                    ap[u] = true;
                }
            } else if v as isize != parent[u] {
                low[u] = low[u].min(disc[v]);
            }
        }
    }

    fn find_articulation_points(&mut self) -> Vec<usize> {
        let mut visited = vec![false; self.vertices];
        let mut parent = vec![-1; self.vertices];
        let mut disc = vec![0; self.vertices];
        let mut low = vec![0; self.vertices];
        let mut ap = vec![false; self.vertices];

        for i in 0..self.vertices {
            if !visited[i] {
                self.dfs(i, &mut visited, &mut parent, &mut disc, &mut low, &mut ap);
            }
        }

        ap.iter()
            .enumerate()
            .filter_map(|(i, &b)| if b { Some(i) } else { None })
            .collect()
    }
}
