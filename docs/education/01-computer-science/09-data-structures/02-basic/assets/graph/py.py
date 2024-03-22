class GraphEdge:
    def __init__(self, start_vertex, end_vertex, weight=0):
        self.start_vertex = start_vertex
        self.end_vertex = end_vertex
        self.weight = weight

    def get_key(self):
        start_vertex_key = self.start_vertex.get_key()
        end_vertex_key = self.end_vertex.get_key()
        return f"{start_vertex_key}_{end_vertex_key}"

    def reverse(self):
        tmp = self.start_vertex
        self.start_vertex = self.end_vertex
        self.end_vertex = tmp
        return self


class GraphVertex:
    def __init__(self, value):
        if value is None:
            raise ValueError('Graph vertex must have a value')
        self.value = value
        self.edges = LinkedList(lambda edge_a, edge_b: (edge_a.get_key() > edge_b.get_key()) - (edge_a.get_key() < edge_b.get_key()))

    def add_edge(self, edge):
        self.edges.append(edge)
        return self

    def delete_edge(self, edge):
        self.edges.delete(edge)

    def get_neighbors(self):
        edges = self.edges.to_array()

        def neighbors_converter(node):
            return node.value.start_vertex if node.value.start_vertex != self else node.value.end_vertex

        return list(map(neighbors_converter, edges))

    def get_edges(self):
        return list(map(lambda node: node.value, self.edges.to_array()))

    def get_degree(self):
        return len(self.edges.to_array())

    def has_edge(self, required_edge):
        edge_node = self.edges.find(callback=lambda edge: edge == required_edge)
        return edge_node is not None

    def has_neighbor(self, vertex):
        vertex_node = self.edges.find(callback=lambda edge: edge.start_vertex == vertex or edge.end_vertex == vertex)
        return vertex_node is not None

    def find_edge(self, vertex):
        edge_finder = lambda edge: edge.start_vertex == vertex or edge.end_vertex == vertex
        edge_node = self.edges.find(callback=edge_finder)
        return edge_node.value if edge_node else None

    def get_key(self):
        return self.value

    def delete_all_edges(self):
        edges = self.get_edges()
        for edge in edges:
            self.delete_edge(edge)
        return self


class Graph:
    def __init__(self, is_directed=False):
        self.vertices = {}
        self.edges = {}
        self.is_directed = is_directed

    def add_vertex(self, new_vertex):
        self.vertices[new_vertex.get_key()] = new_vertex
        return self

    def get_vertex_by_key(self, vertex_key):
        return self.vertices.get(vertex_key)

    def get_neighbors(self, vertex):
        return vertex.get_neighbors()

    def get_all_vertices(self):
        return list(self.vertices.values())

    def get_all_edges(self):
        return list(self.edges.values())

    def add_edge(self, edge):
        start_vertex = self.get_vertex_by_key(edge.start_vertex.get_key())
        end_vertex = self.get_vertex_by_key(edge.end_vertex.get_key())

        if not start_vertex:
            self.add_vertex(edge.start_vertex)
            start_vertex = self.get_vertex_by_key(edge.start_vertex.get_key())

        if not end_vertex:
            self.add_vertex(edge.end_vertex)
            end_vertex = self.get_vertex_by_key(edge.end_vertex.get_key())

        if edge.get_key() in self.edges:
            raise ValueError('Edge has already been added before')
        else:
            self.edges[edge.get_key()] = edge

        if self.is_directed:
            start_vertex.add_edge(edge)
        else:
            start_vertex.add_edge(edge)
            end_vertex.add_edge(edge)

        return self

    def delete_edge(self, edge):
        if edge.get_key() in self.edges:
            del self.edges[edge.get_key()]
        else:
            raise ValueError('Edge not found in graph')

        start_vertex = self.get_vertex_by_key(edge.start_vertex.get_key())
        end_vertex = self.get_vertex_by_key(edge.end_vertex.get_key())

        start_vertex.delete_edge(edge)
        end_vertex.delete_edge(edge)

    def find_edge(self, start_vertex, end_vertex):
        vertex = self.get_vertex_by_key(start_vertex.get_key())

        if not vertex:
            return None

        return vertex.find_edge(end_vertex)

    def get_weight(self):
        return sum([graph_edge.weight for graph_edge in self.get_all_edges()])

    def reverse(self):
        for edge in self.get_all_edges():
            self.delete_edge(edge)
            edge.reverse()
            self.add_edge(edge)

        return self

    def get_vertices_indices(self):
        vertices_indices = {}
        for index, vertex in enumerate(self.get_all_vertices()):
            vertices_indices[vertex.get_key()] = index

        return vertices_indices

    def get_adjacency_matrix(self):
        vertices = self.get_all_vertices()
        vertices_indices = self.get_vertices_indices()

        num_vertices = len(vertices)
        adjacency_matrix = [[float('inf')] * num_vertices for _ in range(num_vertices)]

        for vertex_index, vertex in enumerate(vertices):
            for neighbor in vertex.get_neighbors():
                neighbor_index = vertices_indices[neighbor.get_key()]
                edge = self.find_edge(vertex, neighbor)
                adjacency_matrix[vertex_index][neighbor_index] = edge.weight
        return adjacency_matrix
