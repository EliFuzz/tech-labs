use std::collections::{HashSet, HashMap};

// Detect cycle in directed graph using DFS
struct DirectedCycleDetection<'a> {
    graph: &'a HashMap<usize, Vec<usize>>,
    visited: HashSet<usize>,
    recursion_stack: HashSet<usize>,
}

impl<'a> DirectedCycleDetection<'a> {
    fn new(graph: &'a HashMap<usize, Vec<usize>>) -> Self {
        DirectedCycleDetection {
            graph,
            visited: HashSet::new(),
            recursion_stack: HashSet::new(),
        }
    }

    fn has_cycle(&mut self) -> bool {
        for &node in self.graph.keys() {
            if !self.visited.contains(&node) {
                if self.dfs(node) {
                    return true;
                }
            }
        }
        false
    }

    fn dfs(&mut self, node: usize) -> bool {
        self.visited.insert(node);
        self.recursion_stack.insert(node);

        if let Some(neighbors) = self.graph.get(&node) {
            for &neighbor in neighbors {
                if !self.visited.contains(&neighbor) {
                    if self.dfs(neighbor) {
                        return true;
                    }
                } else if self.recursion_stack.contains(&neighbor) {
                    return true;
                }
            }
        }

        self.recursion_stack.remove(&node);
        false
    }
}

// Detect cycle in undirected graph using DFS
struct UndirectedCycleDetection<'a> {
    graph: &'a HashMap<usize, Vec<usize>>,
    visited: HashSet<usize>,
}

impl<'a> UndirectedCycleDetection<'a> {
    fn new(graph: &'a HashMap<usize, Vec<usize>>) -> Self {
        UndirectedCycleDetection {
            graph,
            visited: HashSet::new(),
        }
    }

    fn has_cycle(&mut self) -> bool {
        for &node in self.graph.keys() {
            if !self.visited.contains(&node) {
                if self.dfs(node, 0) {
                    return true;
                }
            }
        }
        false
    }

    fn dfs(&mut self, node: usize, parent: usize) -> bool {
        self.visited.insert(node);

        if let Some(neighbors) = self.graph.get(&node) {
            for &neighbor in neighbors {
                if !self.visited.contains(&neighbor) {
                    if self.dfs(neighbor, node) {
                        return true;
                    }
                } else if neighbor != parent {
                    return true;
                }
            }
        }

        false
    }
}


//Detect cycle in undirected graph using disjoint sets
struct UndirectedCycleDetection<'a> {
    graph: &'a HashMap<usize, Vec<usize>>,
    visited: HashSet<usize>,
}

impl<'a> UndirectedCycleDetection<'a> {
    fn new(graph: &'a HashMap<usize, Vec<usize>>) -> Self {
        UndirectedCycleDetection {
            graph,
            visited: HashSet::new(),
        }
    }

    fn has_cycle(&mut self) -> bool {
        for &node in self.graph.keys() {
            if !self.visited.contains(&node) {
                if self.dfs(node, 0) {
                    return true;
                }
            }
        }
        false
    }

    fn dfs(&mut self, node: usize, parent: usize) -> bool {
        self.visited.insert(node);

        if let Some(neighbors) = self.graph.get(&node) {
            for &neighbor in neighbors {
                if !self.visited.contains(&neighbor) {
                    if self.dfs(neighbor, node) {
                        return true;
                    }
                } else if neighbor != parent {
                    return true;
                }
            }
        }

        false
    }
}
