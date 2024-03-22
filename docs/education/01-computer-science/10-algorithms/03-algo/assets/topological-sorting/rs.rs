use std::collections::{HashMap, HashSet};

struct Graph {
    vertices: usize,
    adjacency: HashMap<usize, Vec<usize>>,
}

impl Graph {
    fn new(vertices: usize) -> Self {
        let mut adjacency = HashMap::new();
        for i in 0..vertices {
            adjacency.insert(i, Vec::new());
        }
        Graph {
            vertices,
            adjacency,
        }
    }

    fn add_edge(&mut self, u: usize, v: usize) {
        self.adjacency.get_mut(&u).unwrap().push(v);
    }

    fn topological_sort_util(&self, vertex: usize, visited: &mut HashSet<usize>, stack: &mut Vec<usize>) {
        visited.insert(vertex);
        for &v in &self.adjacency[&vertex] {
            if !visited.contains(&v) {
                self.topological_sort_util(v, visited, stack);
            }
        }
        stack.push(vertex);
    }

    fn topological_sort(&self) -> Vec<usize> {
        let mut visited = HashSet::new();
        let mut stack = Vec::new();

        for i in 0..self.vertices {
            if !visited.contains(&i) {
                self.topological_sort_util(i, &mut visited, &mut stack);
            }
        }

        stack.into_iter().rev().collect()
    }
}
