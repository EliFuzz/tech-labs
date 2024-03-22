use std::collections::{HashMap, HashSet};

// Define GraphEdge struct
#[derive(Debug, Clone)]
struct GraphEdge<T> {
    start_vertex: T,
    end_vertex: T,
    weight: i32,
}

impl<T: Eq + std::hash::Hash + Clone> GraphEdge<T> {
    fn get_key(&self) -> String {
        format!("{}_{}", self.start_vertex.get_key(), self.end_vertex.get_key())
    }

    fn reverse(&mut self) {
        std::mem::swap(&mut self.start_vertex, &mut self.end_vertex);
    }
}

// Define GraphVertex struct
#[derive(Debug, Clone)]
struct GraphVertex<T> {
    value: T,
    edges: Vec<GraphEdge<T>>,
}

impl<T: Eq + std::hash::Hash + Clone> GraphVertex<T> {
    fn new(value: T) -> Self {
        Self {
            value,
            edges: Vec::new(),
        }
    }

    fn add_edge(&mut self, edge: GraphEdge<T>) {
        self.edges.push(edge);
    }

    fn delete_edge(&mut self, edge: &GraphEdge<T>) {
        self.edges.retain(|e| e != edge);
    }

    fn get_neighbors(&self) -> Vec<T> {
        self.edges.iter().map(|edge| edge.end_vertex.clone()).collect()
    }

    fn get_edges(&self) -> Vec<GraphEdge<T>> {
        self.edges.clone()
    }

    fn get_degree(&self) -> usize {
        self.edges.len()
    }

    fn has_edge(&self, required_edge: &GraphEdge<T>) -> Option<&GraphEdge<T>> {
        self.edges.iter().find(|edge| edge == required_edge)
    }

    fn has_neighbor(&self, vertex: &GraphVertex<T>) -> Option<&GraphEdge<T>> {
        self.edges.iter().find(|edge| edge.start_vertex == *vertex || edge.end_vertex == *vertex)
    }

    fn find_edge(&self, vertex: &GraphVertex<T>) -> Option<&GraphEdge<T>> {
        self.edges.iter().find(|edge| edge.start_vertex == *vertex || edge.end_vertex == *vertex)
    }

    fn get_key(&self) -> String {
        self.value.get_key()
    }

    fn delete_all_edges(&mut self) {
        self.edges.clear();
    }
}

// Define Graph struct
#[derive(Debug, Clone)]
struct Graph<T> {
    vertices: HashMap<String, GraphVertex<T>>,
    edges: HashMap<String, GraphEdge<T>>,
    is_directed: bool,
}

impl<T: Eq + std::hash::Hash + Clone> Graph<T> {
    fn new(is_directed: bool) -> Self {
        Self {
            vertices: HashMap::new(),
            edges: HashMap::new(),
            is_directed,
        }
    }

    fn add_vertex(&mut self, new_vertex: GraphVertex<T>) -> &mut Self {
        self.vertices.insert(new_vertex.get_key(), new_vertex);
        self
    }

    fn get_vertex_by_key(&self, vertex_key: &str) -> Option<&GraphVertex<T>> {
        self.vertices.get(vertex_key)
    }

    fn get_neighbors(&self, vertex: &GraphVertex<T>) -> Vec<T> {
        vertex.get_neighbors()
    }

    fn get_all_vertices(&self) -> Vec<&GraphVertex<T>> {
        self.vertices.values().collect()
    }

    fn get_all_edges(&self) -> Vec<&GraphEdge<T>> {
        self.edges.values().collect()
    }

    fn add_edge(&mut self, edge: GraphEdge<T>) -> &mut Self {
        let start_vertex_key = edge.start_vertex.get_key();
        let end_vertex_key = edge.end_vertex.get_key();

        if !self.vertices.contains_key(&start_vertex_key) {
            self.add_vertex(edge.start_vertex.clone());
        }

        if !self.vertices.contains_key(&end_vertex_key) {
            self.add_vertex(edge.end_vertex.clone());
        }

        if self.edges.contains_key(&edge.get_key()) {
            panic!("Edge has already been added before");
        } else {
            self.edges.insert(edge.get_key(), edge.clone());
        }

        if self.is_directed {
            if let Some(start_vertex) = self.vertices.get_mut(&start_vertex_key) {
                start_vertex.add_edge(edge);
            }
        } else {
            if let Some(start_vertex) = self.vertices.get_mut(&start_vertex_key) {
                start_vertex.add_edge(edge.clone());
            }

            if let Some(end_vertex) = self.vertices.get_mut(&end_vertex_key) {
                end_vertex.add_edge(edge);
            }
        }

        self
    }

    fn delete_edge(&mut self, edge: &GraphEdge<T>) {
        if self.edges.contains_key(&edge.get_key()) {
            self.edges.remove(&edge.get_key());
        } else {
            panic!("Edge not found in graph");
        }

        if let Some(start_vertex) = self.vertices.get_mut(&edge.start_vertex.get_key()) {
            start_vertex.delete_edge(edge);
        }

        if let Some(end_vertex) = self.vertices.get_mut(&edge.end_vertex.get_key()) {
            end_vertex.delete_edge(edge);
        }
    }

    fn find_edge(&self, start_vertex: &GraphVertex<T>, end_vertex: &GraphVertex<T>) -> Option<&GraphEdge<T>> {
        if let Some(vertex) = self.vertices.get(&start_vertex.get_key()) {
            vertex.find_edge(end_vertex)
        } else {
            None
        }
    }

    fn get_weight(&self) -> i32 {
        self.edges.values().map(|edge| edge.weight).sum()
    }

    fn reverse(&mut self) -> &mut Self {
        for edge in self.edges.values_mut() {
            self.delete_edge(edge);
            edge.reverse();
            self.add_edge(edge.clone());
        }

        self
    }

    fn get_vertices_indices(&self) -> HashMap<String, usize> {
        self.vertices
            .values()
            .enumerate()
            .map(|(index, vertex)| (vertex.get_key(), index))
            .collect()
    }

    fn get_adjacency_matrix(&self) -> Vec<Vec<i32>> {
        let vertices = self.get_all_vertices();
        let vertices_indices = self.get_vertices_indices();

        let mut adjacency_matrix = vec![vec![i32::MAX; vertices.len()]; vertices.len()];

        for (vertex_index, vertex) in vertices.iter().enumerate() {
            for neighbor in vertex.get_neighbors() {
                if let Some(edge) = vertex.find_edge(self.get_vertex_by_key(&neighbor).unwrap()) {
                    let neighbor_index = vertices_indices[&neighbor];
                    adjacency_matrix[vertex_index][neighbor_index] = edge.weight;
                }
            }
        }

        adjacency_matrix
    }
}
