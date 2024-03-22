import java.util.*

class GraphEdge(startVertex: GraphVertex, endVertex: GraphVertex, weight: Int = 0) {
    var startVertex: GraphVertex = startVertex
    var endVertex: GraphVertex = endVertex
    var weight: Int = weight

    fun getKey(): String {
        val startVertexKey = startVertex.getKey()
        val endVertexKey = endVertex.getKey()
        return "${startVertexKey}_${endVertexKey}"
    }

    fun reverse(): GraphEdge {
        val tmp = startVertex
        startVertex = endVertex
        endVertex = tmp
        return this
    }
}

class GraphVertex(value: Any) {
    var value: Any = value
        private set

    init {
        if (value == null) {
            throw IllegalArgumentException("Graph vertex must have a value")
        }
    }

    var edges: MutableList<GraphEdge> = mutableListOf()

    fun addEdge(edge: GraphEdge): GraphVertex {
        edges.add(edge)
        return this
    }

    fun deleteEdge(edge: GraphEdge) {
        edges.remove(edge)
    }

    fun getNeighbors(): List<GraphVertex> {
        val neighborsConverter: (GraphEdge) -> GraphVertex = { node ->
            if (node.startVertex == this) node.endVertex else node.startVertex
        }
        return edges.map(neighborsConverter)
    }

    fun getEdges(): List<GraphEdge> {
        return edges.map { it }
    }

    fun getDegree(): Int {
        return edges.size
    }

    fun hasEdge(requiredEdge: GraphEdge): Boolean {
        return edges.any { it == requiredEdge }
    }

    fun hasNeighbor(vertex: GraphVertex): Boolean {
        return edges.any { it.startVertex == vertex || it.endVertex == vertex }
    }

    fun findEdge(vertex: GraphVertex): GraphEdge? {
        return edges.firstOrNull { it.startVertex == vertex || it.endVertex == vertex }
    }

    fun getKey(): String {
        return value.toString()
    }

    fun deleteAllEdges(): GraphVertex {
        edges.forEach { deleteEdge(it) }
        return this
    }
}

class Graph(isDirected: Boolean = false) {
    var vertices: MutableMap<String, GraphVertex> = mutableMapOf()
    var edges: MutableMap<String, GraphEdge> = mutableMapOf()
    var isDirected: Boolean = isDirected

    fun addVertex(newVertex: GraphVertex): Graph {
        vertices[newVertex.getKey()] = newVertex
        return this
    }

    fun getVertexByKey(vertexKey: String): GraphVertex? {
        return vertices[vertexKey]
    }

    fun getNeighbors(vertex: GraphVertex): List<GraphVertex> {
        return vertex.getNeighbors()
    }

    fun getAllVertices(): List<GraphVertex> {
        return ArrayList(vertices.values)
    }

    fun getAllEdges(): List<GraphEdge> {
        return ArrayList(edges.values)
    }

    fun addEdge(edge: GraphEdge): Graph {
        var startVertex = getVertexByKey(edge.startVertex.getKey())
        var endVertex = getVertexByKey(edge.endVertex.getKey())

        if (startVertex == null) {
            addVertex(edge.startVertex)
            startVertex = getVertexByKey(edge.startVertex.getKey())
        }

        if (endVertex == null) {
            addVertex(edge.endVertex)
            endVertex = getVertexByKey(edge.endVertex.getKey())
        }

        if (edges.containsKey(edge.getKey())) {
            throw Error("Edge has already been added before")
        } else {
            edges[edge.getKey()] = edge
        }

        if (isDirected) {
            startVertex!!.addEdge(edge)
        } else {
            startVertex!!.addEdge(edge)
            endVertex!!.addEdge(edge)
        }

        return this
    }

    fun deleteEdge(edge: GraphEdge) {
        if (edges.containsKey(edge.getKey())) {
            edges.remove(edge.getKey())
        } else {
            throw Error("Edge not found in graph")
        }

        val startVertex = getVertexByKey(edge.startVertex.getKey())
        val endVertex = getVertexByKey(edge.endVertex.getKey())

        startVertex?.deleteEdge(edge)
        endVertex?.deleteEdge(edge)
    }

    fun findEdge(startVertex: GraphVertex, endVertex: GraphVertex): GraphEdge? {
        val vertex = getVertexByKey(startVertex.getKey())

        return if (vertex != null) {
            vertex.findEdge(endVertex)
        } else {
            null
        }
    }

    fun getWeight(): Int {
        return getAllEdges().fold(0) { weight, graphEdge -> weight + graphEdge.weight }
    }

    fun reverse(): Graph {
        getAllEdges().forEach { edge ->
            deleteEdge(edge)
            edge.reverse()
            addEdge(edge)
        }

        return this
    }

    fun getVerticesIndices(): Map<String, Int> {
        val verticesIndices = mutableMapOf<String, Int>()
        getAllVertices().forEachIndexed { index, vertex -> verticesIndices[vertex.getKey()] = index }
        return verticesIndices
    }

    fun getAdjacencyMatrix(): Array<IntArray> {
        val vertices = getAllVertices()
        val verticesIndices = getVerticesIndices()

        val adjacencyMatrix = Array(vertices.size) { IntArray(vertices.size) { Int.MAX_VALUE } }

        vertices.forEachIndexed { vertexIndex, vertex ->
            vertex.getNeighbors().forEach { neighbor ->
                val neighborIndex = verticesIndices[neighbor.getKey()]!!
                adjacencyMatrix[vertexIndex][neighborIndex] = findEdge(vertex, neighbor)?.weight ?: 0
            }
        }

        return adjacencyMatrix
    }
}

class GraphEdge(
        var startVertex: GraphVertex,
        var endVertex: GraphVertex,
        var weight: Int = 0
) {
    fun getKey(): String {
        val startVertexKey = startVertex.getKey()
        val endVertexKey = endVertex.getKey()
        return "${startVertexKey}_${endVertexKey}"
    }

    fun reverse(): GraphEdge {
        val tmp = startVertex
        startVertex = endVertex
        endVertex = tmp
        return this
    }

    override fun toString(): String {
        return getKey()
    }
}

class GraphVertex(value: Any) {
    var value: Any = value
        private set

    init {
        if (value == null) {
            throw IllegalArgumentException("Graph vertex must have a value")
        }
    }

    var edges: MutableList<GraphEdge> = mutableListOf()

    fun addEdge(edge: GraphEdge): GraphVertex {
        edges.add(edge)
        return this
    }

    fun deleteEdge(edge: GraphEdge) {
        edges.remove(edge)
    }

    fun getNeighbors(): List<GraphVertex> {
        val neighborsConverter: (GraphEdge) -> GraphVertex = { node ->
            if (node.startVertex == this) node.endVertex else node.startVertex
        }
        return edges.map(neighborsConverter)
    }

    fun getEdges(): List<GraphEdge> {
        return edges.map { it }
    }

    fun getDegree(): Int {
        return edges.size
    }

    fun hasEdge(requiredEdge: GraphEdge): Boolean {
        return edges.any { it == requiredEdge }
    }

    fun hasNeighbor(vertex: GraphVertex): Boolean {
        return edges.any { it.startVertex == vertex || it.endVertex == vertex }
    }

    fun findEdge(vertex: GraphVertex): GraphEdge? {
        return edges.firstOrNull { it.startVertex == vertex || it.endVertex == vertex }
    }

    fun getKey(): String {
        return value.toString()
    }

    fun deleteAllEdges(): GraphVertex {
        edges.forEach { deleteEdge(it) }
        return this
    }

    fun toString(callback: ((Any) -> String)? = null): String {
        return callback?.invoke(value) ?: value.toString()
    }
}

class Graph(isDirected: Boolean = false) {
    var vertices: MutableMap<String, GraphVertex> = mutableMapOf()
    var edges: MutableMap<String, GraphEdge> = mutableMapOf()
    var isDirected: Boolean = isDirected

    fun addVertex(newVertex: GraphVertex): Graph {
        vertices[newVertex.getKey()] = newVertex
        return this
    }

    fun getVertexByKey(vertexKey: String): GraphVertex? {
        return vertices[vertexKey]
    }

    fun getNeighbors(vertex: GraphVertex): List<GraphVertex> {
        return vertex.getNeighbors()
    }

    fun getAllVertices(): List<GraphVertex> {
        return ArrayList(vertices.values)
    }

    fun getAllEdges(): List<GraphEdge> {
        return ArrayList(edges.values)
    }

    fun addEdge(edge: GraphEdge): Graph {
        var startVertex = getVertexByKey(edge.startVertex.getKey())
        var endVertex = getVertexByKey(edge.endVertex.getKey())

        if (startVertex == null) {
            addVertex(edge.startVertex)
            startVertex = getVertexByKey(edge.startVertex.getKey())
        }

        if (endVertex == null) {
            addVertex(edge.endVertex)
            endVertex = getVertexByKey(edge.endVertex.getKey())
        }

        if (edges.containsKey(edge.getKey())) {
            throw Error("Edge has already been added before")
        } else {
            edges[edge.getKey()] = edge
        }

        if (isDirected) {
            startVertex!!.addEdge(edge)
        } else {
            startVertex!!.addEdge(edge)
            endVertex!!.addEdge(edge)
        }

        return this
    }

    fun deleteEdge(edge: GraphEdge) {
        if (edges.containsKey(edge.getKey())) {
            edges.remove(edge.getKey())
        } else {
            throw Error("Edge not found in graph")
        }

        val startVertex = getVertexByKey(edge.startVertex.getKey())
        val endVertex = getVertexByKey(edge.endVertex.getKey())

        startVertex?.deleteEdge(edge)
        endVertex?.deleteEdge(edge)
    }

    fun findEdge(startVertex: GraphVertex, endVertex: GraphVertex): GraphEdge? {
        val vertex = getVertexByKey(startVertex.getKey())

        return if (vertex != null) {
            vertex.findEdge(endVertex)
        } else {
            null
        }
    }

    fun getWeight(): Int {
        return getAllEdges().fold(0) { weight, graphEdge -> weight + graphEdge.weight }
    }

    fun reverse(): Graph {
        getAllEdges().forEach { edge ->
            deleteEdge(edge)
            edge.reverse()
            addEdge(edge)
        }

        return this
    }

    fun getVerticesIndices(): Map<String, Int> {
        val verticesIndices = mutableMapOf<String, Int>()
        getAllVertices().forEachIndexed { index, vertex -> verticesIndices[vertex.getKey()] = index }
        return verticesIndices
    }

    fun getAdjacencyMatrix(): Array<IntArray> {
        val vertices = getAllVertices()
        val verticesIndices = getVerticesIndices()

        val adjacencyMatrix = Array(vertices.size) { IntArray(vertices.size) { Int.MAX_VALUE } }

        vertices.forEachIndexed { vertexIndex, vertex ->
            vertex.getNeighbors().forEach { neighbor ->
                val neighborIndex = verticesIndices[neighbor.getKey()]!!
                adjacencyMatrix[vertexIndex][neighborIndex] = findEdge(vertex, neighbor)?.weight ?: 0
            }
        }

        return adjacencyMatrix
    }

    override fun toString(): String {
        return vertices.keys.toString()
    }
}
