use std::collections::LinkedList;
use std::collections::VecDeque;

struct Graph {
    vertices: usize,
    adj: Vec<LinkedList<usize>>,
}

impl Graph {
    fn new(vertices: usize) -> Graph {
        Graph {
            vertices,
            adj: vec![LinkedList::new(); vertices],
        }
    }

    fn add_edge(&mut self, v: usize, w: usize) {
        self.adj[v].push_back(w);
    }

    fn dfs_util(&self, v: usize, visited: &mut Vec<bool>, stack: &mut Vec<usize>) {
        visited[v] = true;
        for i in &self.adj[v] {
            if !visited[*i] {
                self.dfs_util(*i, visited, stack);
            }
        }
        stack.push(v);
    }

    fn get_transpose(&self) -> Graph {
        let mut g = Graph::new(self.vertices);
        for v in 0..self.vertices {
            for i in &self.adj[v] {
                g.add_edge(*i, v);
            }
        }
        g
    }

    fn fill_order(&self, v: usize, visited: &mut Vec<bool>, stack: &mut Vec<usize>) {
        visited[v] = true;
        for i in &self.adj[v] {
            if !visited[*i] {
                self.fill_order(*i, visited, stack);
            }
        }
        stack.push(v);
    }

    fn print_sccs(&self) {
        let mut stack: Vec<usize> = Vec::new();
        let mut visited: Vec<bool> = vec![false; self.vertices];
        for i in 0..self.vertices {
            if !visited[i] {
                self.dfs_util(i, &mut visited, &mut stack);
            }
        }

        let transpose = self.get_transpose();

        for i in 0..self.vertices {
            visited[i] = false;
        }

        while let Some(v) = stack.pop() {
            if !visited[v] {
                transpose.fill_order(v, &mut visited, &mut Vec::new());
                println!();
            }
        }
    }
}
