package main

import (
	"strings"
)

type GraphEdge struct {
	startVertex *GraphVertex
	endVertex   *GraphVertex
	weight      int
}

func NewGraphEdge(startVertex, endVertex *GraphVertex, weight int) *GraphEdge {
	return &GraphEdge{
		startVertex: startVertex,
		endVertex:   endVertex,
		weight:      weight,
	}
}

func (edge *GraphEdge) GetKey() string {
	startVertexKey := edge.startVertex.GetKey()
	endVertexKey := edge.endVertex.GetKey()
	return fmt.Sprintf("%s_%s", startVertexKey, endVertexKey)
}

func (edge *GraphEdge) Reverse() *GraphEdge {
	edge.startVertex, edge.endVertex = edge.endVertex, edge.startVertex
	return edge
}

type GraphVertex struct {
	value interface{}
	edges []*GraphEdge
}

func NewGraphVertex(value interface{}) *GraphVertex {
	if value == nil {
		panic("Graph vertex must have a value")
	}

	return &GraphVertex{
		value: value,
		edges: make([]*GraphEdge, 0),
	}
}

func (vertex *GraphVertex) AddEdge(edge *GraphEdge) *GraphVertex {
	vertex.edges = append(vertex.edges, edge)
	return vertex
}

func (vertex *GraphVertex) DeleteEdge(edge *GraphEdge) {
	for i, e := range vertex.edges {
		if e == edge {
			vertex.edges = append(vertex.edges[:i], vertex.edges[i+1:]...)
			return
		}
	}
}

func (vertex *GraphVertex) GetNeighbors() []*GraphVertex {
	neighbors := make([]*GraphVertex, 0)
	for _, edge := range vertex.edges {
		if edge.startVertex == vertex {
			neighbors = append(neighbors, edge.endVertex)
		} else {
			neighbors = append(neighbors, edge.startVertex)
		}
	}
	return neighbors
}

func (vertex *GraphVertex) GetEdges() []*GraphEdge {
	return vertex.edges
}

func (vertex *GraphVertex) GetDegree() int {
	return len(vertex.edges)
}

func (vertex *GraphVertex) HasEdge(requiredEdge *GraphEdge) bool {
	for _, edge := range vertex.edges {
		if edge == requiredEdge {
			return true
		}
	}
	return false
}

func (vertex *GraphVertex) HasNeighbor(neighbor *GraphVertex) bool {
	for _, edge := range vertex.edges {
		if edge.startVertex == neighbor || edge.endVertex == neighbor {
			return true
		}
	}
	return false
}

func (vertex *GraphVertex) FindEdge(neighbor *GraphVertex) *GraphEdge {
	for _, edge := range vertex.edges {
		if edge.startVertex == neighbor || edge.endVertex == neighbor {
			return edge
		}
	}
	return nil
}

func (vertex *GraphVertex) GetKey() string {
	return fmt.Sprintf("%v", vertex.value)
}

func (vertex *GraphVertex) DeleteAllEdges() *GraphVertex {
	for _, edge := range vertex.edges {
		edge.startVertex.DeleteEdge(edge)
		edge.endVertex.DeleteEdge(edge)
	}
	vertex.edges = nil
	return vertex
}

type Graph struct {
	vertices    map[string]*GraphVertex
	edges       map[string]*GraphEdge
	isDirected  bool
}

func NewGraph(isDirected bool) *Graph {
	return &Graph{
		vertices:   make(map[string]*GraphVertex),
		edges:      make(map[string]*GraphEdge),
		isDirected: isDirected,
	}
}

func (graph *Graph) AddVertex(newVertex *GraphVertex) *Graph {
	graph.vertices[newVertex.GetKey()] = newVertex
	return graph
}

func (graph *Graph) GetVertexByKey(vertexKey string) *GraphVertex {
	return graph.vertices[vertexKey]
}

func (graph *Graph) GetNeighbors(vertex *GraphVertex) []*GraphVertex {
	return vertex.GetNeighbors()
}

func (graph *Graph) GetAllVertices() []*GraphVertex {
	vertices := make([]*GraphVertex, 0, len(graph.vertices))
	for _, vertex := range graph.vertices {
		vertices = append(vertices, vertex)
	}
	return vertices
}

func (graph *Graph) GetAllEdges() []*GraphEdge {
	edges := make([]*GraphEdge, 0, len(graph.edges))
	for _, edge := range graph.edges {
		edges = append(edges, edge)
	}
	return edges
}

func (graph *Graph) AddEdge(edge *GraphEdge) *Graph {
  startVertex := graph.GetVertexByKey(edge.startVertex.GetKey())
  endVertex := graph.GetVertexByKey(edge.endVertex.GetKey())

  if startVertex == nil {
    graph.AddVertex(edge.startVertex)
    startVertex = graph.GetVertexByKey(edge.startVertex.GetKey())
  }

  if endVertex == nil {
    graph.AddVertex(edge.endVertex)
    endVertex = graph.GetVertexByKey(edge.endVertex.GetKey())
  }

  if existingEdge := graph.edges[edge.GetKey()]; existingEdge != nil {
    panic("Edge has already been added before")
  } else {
    graph.edges[edge.GetKey()] = edge
  }

  if graph.isDirected {
    startVertex.AddEdge(edge)
  } else {
    startVertex.AddEdge(edge)
    endVertex.AddEdge(edge)
  }

  return graph
}

func (graph *Graph) DeleteEdge(edge *GraphEdge) *Graph {
  if existingEdge := graph.edges[edge.GetKey()]; existingEdge != nil {
    delete(graph.edges, edge.GetKey())
  } else {
    panic("Edge not found in graph")
  }

  startVertex := graph.GetVertexByKey(edge.startVertex.GetKey())
  endVertex := graph.GetVertexByKey(edge.endVertex.GetKey())

  startVertex.DeleteEdge(edge)
  endVertex.DeleteEdge(edge)

  return graph
}

func (graph *Graph) FindEdge(startVertex, endVertex *GraphVertex) *GraphEdge {
  vertex := graph.GetVertexByKey(startVertex.GetKey())

  if vertex == nil {
    return nil
  }

  return vertex.FindEdge(endVertex)
}

func (graph *Graph) GetWeight() int {
  totalWeight := 0
  for _, graphEdge := range graph.GetAllEdges() {
    totalWeight += graphEdge.weight
  }
  return totalWeight
}

func (graph *Graph) Reverse() *Graph {
  for _, graphEdge := range graph.GetAllEdges() {
    graph.DeleteEdge(graphEdge)
    graphEdge.Reverse()
    graph.AddEdge(graphEdge)
  }
  return graph
}

func (graph *Graph) GetVerticesIndices() map[string]int {
  verticesIndices := make(map[string]int)
  allVertices := graph.GetAllVertices()

  for index, vertex := range allVertices {
    verticesIndices[vertex.GetKey()] = index
  }

  return verticesIndices
}

func (graph *Graph) GetAdjacencyMatrix() [][]int {
  vertices := graph.GetAllVertices()
  verticesIndices := graph.GetVerticesIndices()

  adjacencyMatrix := make([][]int, len(vertices))
  for i := range adjacencyMatrix {
    adjacencyMatrix[i] = make([]int, len(vertices))
    for j := range adjacencyMatrix[i] {
      adjacencyMatrix[i][j] = int(^uint(0) >> 1)
    }
  }

  for vertexIndex, vertex := range vertices {
    for _, neighbor := range vertex.GetNeighbors() {
      neighborIndex := verticesIndices[neighbor.GetKey()]
      adjacencyMatrix[vertexIndex][neighborIndex] = graph.FindEdge(vertex, neighbor).weight
    }
  }

  return adjacencyMatrix
}
