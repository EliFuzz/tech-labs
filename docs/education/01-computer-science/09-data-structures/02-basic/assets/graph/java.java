import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class GraphEdge {

  private final GraphVertex startVertex;
  private final GraphVertex endVertex;
  private final int weight;

  public GraphEdge(GraphVertex startVertex, GraphVertex endVertex, int weight) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  public String getKey() {
    String startVertexKey = startVertex.getKey();
    String endVertexKey = endVertex.getKey();
    return startVertexKey + "_" + endVertexKey;
  }

  public GraphEdge reverse() {
    GraphVertex tmp = startVertex;
    startVertex = endVertex;
    endVertex = tmp;
    return this;
  }

  public String toString() {
    return getKey();
  }
}

class GraphVertex {

  private final Object value;
  private final List<GraphEdge> edges;

  public GraphVertex(Object value) {
    if (value == null) {
      throw new IllegalArgumentException("Graph vertex must have a value");
    }

    this.value = value;
    this.edges = new ArrayList<>();
  }

  public GraphVertex addEdge(GraphEdge edge) {
    edges.add(edge);
    return this;
  }

  public void deleteEdge(GraphEdge edge) {
    edges.remove(edge);
  }

  public List<GraphVertex> getNeighbors() {
    List<GraphVertex> neighbors = new ArrayList<>();
    for (GraphEdge edge : edges) {
      neighbors.add(edge.startVertex == this ? edge.endVertex : edge.startVertex);
    }
    return neighbors;
  }

  public List<GraphEdge> getEdges() {
    List<GraphEdge> result = new ArrayList<>();
    for (GraphEdge edge : edges) {
      result.add(edge);
    }
    return result;
  }

  public int getDegree() {
    return edges.size();
  }

  public boolean hasEdge(GraphEdge requiredEdge) {
    return edges.contains(requiredEdge);
  }

  public boolean hasNeighbor(GraphVertex vertex) {
    for (GraphEdge edge : edges) {
      if (edge.startVertex == vertex || edge.endVertex == vertex) {
        return true;
      }
    }
    return false;
  }

  public GraphEdge findEdge(GraphVertex vertex) {
    for (GraphEdge edge : edges) {
      if (edge.startVertex == vertex || edge.endVertex == vertex) {
        return edge;
      }
    }
    return null;
  }

  public Object getKey() {
    return value;
  }

  public GraphVertex deleteAllEdges() {
    edges.clear();
    return this;
  }
}

class Graph {

  private final Map<Object, GraphVertex> vertices;
  private final Map<String, GraphEdge> edges;
  private final boolean isDirected;

  public Graph(boolean isDirected) {
    this.vertices = new HashMap<>();
    this.edges = new HashMap<>();
    this.isDirected = isDirected;
  }

  public Graph addVertex(GraphVertex newVertex) {
    vertices.put(newVertex.getKey(), newVertex);
    return this;
  }

  public GraphVertex getVertexByKey(Object vertexKey) {
    return vertices.get(vertexKey);
  }

  public List<GraphVertex> getNeighbors(GraphVertex vertex) {
    return vertex.getNeighbors();
  }

  public List<GraphVertex> getAllVertices() {
    return new ArrayList<>(vertices.values());
  }

  public List<GraphEdge> getAllEdges() {
    return new ArrayList<>(edges.values());
  }

  public Graph addEdge(GraphEdge edge) {
    GraphVertex startVertex = getVertexByKey(edge.startVertex.getKey());
    GraphVertex endVertex = getVertexByKey(edge.endVertex.getKey());

    if (startVertex == null) {
      addVertex(edge.startVertex);
      startVertex = getVertexByKey(edge.startVertex.getKey());
    }

    if (endVertex == null) {
      addVertex(edge.endVertex);
      endVertex = getVertexByKey(edge.endVertex.getKey());
    }

    if (edges.containsKey(edge.getKey())) {
      throw new IllegalStateException("Edge has already been added before");
    } else {
      edges.put(edge.getKey(), edge);
    }

    if (isDirected) {
      startVertex.addEdge(edge);
    } else {
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);
    }

    return this;
  }

  public Graph deleteEdge(GraphEdge edge) {
    if (edges.containsKey(edge.getKey())) {
      edges.remove(edge.getKey());
    } else {
      throw new IllegalStateException("Edge not found in graph");
    }

    GraphVertex startVertex = getVertexByKey(edge.startVertex.getKey());
    GraphVertex endVertex = getVertexByKey(edge.endVertex.getKey());

    startVertex.deleteEdge(edge);
    endVertex.deleteEdge(edge);

    return this;
  }

  public GraphEdge findEdge(GraphVertex startVertex, GraphVertex endVertex) {
    GraphVertex vertex = getVertexByKey(startVertex.getKey());

    if (vertex == null) {
      return null;
    }

    return vertex.findEdge(endVertex);
  }

  public int getWeight() {
    int totalWeight = 0;
    for (GraphEdge graphEdge : getAllEdges()) {
      totalWeight += graphEdge.weight;
    }
    return totalWeight;
  }

  public Graph reverse() {
    for (GraphEdge graphEdge : getAllEdges()) {
      deleteEdge(graphEdge);
      graphEdge.reverse();
      addEdge(graphEdge);
    }

    return this;
  }

  public Map<Object, Integer> getVerticesIndices() {
    Map<Object, Integer> verticesIndices = new HashMap<>();
    List<GraphVertex> allVertices = getAllVertices();

    for (int index = 0; index < allVertices.size(); index++) {
      verticesIndices.put(allVertices.get(index).getKey(), index);
    }

    return verticesIndices;
  }

  public int[][] getAdjacencyMatrix() {
    List<GraphVertex> vertices = getAllVertices();
    Map<Object, Integer> verticesIndices = getVerticesIndices();

    int[][] adjacencyMatrix = new int[vertices.size()][vertices.size()];

    for (int i = 0; i < vertices.size(); i++) {
      for (int j = 0; j < vertices.size(); j++) {
        adjacencyMatrix[i][j] = Integer.MAX_VALUE;
      }
    }

    for (int vertexIndex = 0; vertexIndex < vertices.size(); vertexIndex++) {
      for (GraphVertex neighbor : vertices.get(vertexIndex).getNeighbors()) {
        int neighborIndex = verticesIndices.get(neighbor.getKey());
        GraphEdge edge = findEdge(vertices.get(vertexIndex), neighbor);
        adjacencyMatrix[vertexIndex][neighborIndex] = (edge != null) ? edge.weight : Integer.MAX_VALUE;
      }
    }

    return adjacencyMatrix;
  }
}
