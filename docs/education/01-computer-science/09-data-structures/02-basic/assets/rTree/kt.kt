import kotlin.math.sqrt

data class RTreeNode(val isLeaf: Boolean = true, var children: MutableList<Pair<Double, Double>> = mutableListOf(), var boundingBox: Pair<Double, Double>? = null)

class RTree(private val maxChildren: Int = 4) {
    var root = RTreeNode()
        private set

    fun insert(point: Pair<Double, Double>) {
        insertRecursive(root, point)
    }

    private fun insertRecursive(node: RTreeNode, point: Pair<Double, Double>) {
        if (node.isLeaf) {
            node.children.add(point)
            if (node.children.size > maxChildren) {
                split(node)
            }
        } else {
            var minIncrease = Double.POSITIVE_INFINITY
            var bestChild: RTreeNode? = null

            for (child in node.children) {
                val childBBox = calculateBoundingBox(child)
                val expandedBBox = calculateExpandedBoundingBox(childBBox, point)
                val increase = calculateAreaIncrease(childBBox, expandedBBox)

                if (increase < minIncrease) {
                    minIncrease = increase
                    bestChild = child
                }
            }

            if (bestChild != null) {
                insertRecursive(bestChild, point)
            }
        }
    }

    private fun calculateAreaIncrease(oldBBox: Pair<Double, Double>, newBBox: Pair<Double, Double>): Double {
        val oldArea = (oldBBox.second - oldBBox.first) * (oldBBox.fourth - oldBBox.third)
        val newArea = (newBBox.second - newBBox.first) * (newBBox.fourth - newBBox.third)
        return newArea - oldArea
    }

    private fun calculateExpandedBoundingBox(oldBBox: Pair<Double, Double>, point: Pair<Double, Double>): Pair<Double, Double> {
        val (minX, minY, maxX, maxY) = oldBBox
        val newMinX = minOf(minX, point.first)
        val newMinY = minOf(minY, point.second)
        val newMaxX = maxOf(maxX, point.first)
        val newMaxY = maxOf(maxY, point.second)
        return Pair(newMinX, newMinY, newMaxX, newMaxY)
    }

    private fun split(node: RTreeNode) {
        val splitPoint = node.children.size / 2
        val newNode = RTreeNode(isLeaf = node.isLeaf)
        newNode.children = node.children.subList(splitPoint, node.children.size).toMutableList()
        node.children = node.children.subList(0, splitPoint).toMutableList()

        node.boundingBox = calculateBoundingBox(node.children)
        newNode.boundingBox = calculateBoundingBox(newNode.children)

        if (node == root) {
            val newRoot = RTreeNode(isLeaf = false)
            newRoot.children = mutableListOf(node, newNode)
            newRoot.boundingBox = calculateBoundingBox(newRoot.children)
            root = newRoot
        }
    }

    fun delete(point: Pair<Double, Double>) {
        deleteRecursive(root, point)
    }

    private fun deleteRecursive(node: RTreeNode, point: Pair<Double, Double>) {
        if (node.isLeaf) {
            node.children.removeIf { it == point }
        } else {
            for (child in node.children) {
                val childBBox = calculateBoundingBox(child)
                if (pointInBoundingBox(point, childBBox)) {
                    deleteRecursive(child, point)
                    break
                }
            }
            node.boundingBox = calculateBoundingBox(node.children)
        }
    }

    fun search(queryBBox: Pair<Double, Double>): List<Pair<Double, Double>> {
        val result = mutableListOf<Pair<Double, Double>>()
        searchRecursive(root, queryBBox, result)
        return result
    }

    private fun searchRecursive(node: RTreeNode, queryBBox: Pair<Double, Double>, result: MutableList<Pair<Double, Double>>) {
        if (node.isLeaf) {
            for (point in node.children) {
                if (pointInBoundingBox(point, queryBBox)) {
                    result.add(point)
                }
            }
        } else {
            for (child in node.children) {
                val childBBox = calculateBoundingBox(child)
                if (bboxIntersectsQuery(childBBox, queryBBox)) {
                    searchRecursive(child, queryBBox, result)
                }
            }
        }
    }

    fun nearestNeighbors(queryPoint: Pair<Double, Double>, k: Int): List<Pair<Double, Double>> {
        val result = mutableListOf<Pair<Double, Double>>()
        nearestNeighborsRecursive(root, queryPoint, k, result)
        result.sortBy { it.first }
        return result.take(k)
    }

    private fun nearestNeighborsRecursive(node: RTreeNode, queryPoint: Pair<Double, Double>, k: Int, result: MutableList<Pair<Double, Double>>) {
        if (node.isLeaf) {
            for (point in node.children) {
                updateNearestNeighbors(queryPoint, point, k, result)
            }
        } else {
            val sortedChildren = node.children.sortedBy { distance(queryPoint, calculateBoundingBox(it)) }

            for (child in sortedChildren) {
                val childBBox = calculateBoundingBox(child)
                if (distance(queryPoint, childBBox) < result.lastOrNull()?.first ?: Double.POSITIVE_INFINITY) {
                    nearestNeighborsRecursive(child, queryPoint, k, result)
                }
            }
        }
    }

    private fun updateNearestNeighbors(queryPoint: Pair<Double, Double>, point: Pair<Double, Double>, k: Int, result: MutableList<Pair<Double, Double>>) {
        val distance = distance(queryPoint, point)

        if (result.size < k) {
            result.add(distance to point)
            result.sortByDescending { it.first }
        } else if (distance < result.first().first) {
            result[0] = distance to point
            result.sortByDescending { it.first }
        }
    }

    private fun distance(point1: Pair<Double, Double>, point2: Pair<Double, Double>): Double {
        return sqrt((point1.first - point2.first).pow(2) + (point1.second - point2.second).pow(2))
    }

    fun rangeQuery(queryBBox: Pair<Double, Double>): List<Pair<Double, Double>> {
        val result = mutableListOf<Pair<Double, Double>>()
        rangeQueryRecursive(root, queryBBox, result)
        return result
    }

    private fun rangeQueryRecursive(node: RTreeNode, queryBBox: Pair<Double, Double>, result: MutableList<Pair<Double, Double>>) {
        if (node.isLeaf) {
            for (point in node.children) {
                if (pointInBoundingBox(point, queryBBox)) {
                    result.add(point)
                }
            }
        } else {
            for (child in node.children) {
                val childBBox = calculateBoundingBox(child)
                if (bboxIntersectsQuery(childBBox, queryBBox)) {
                    rangeQueryRecursive(child, queryBBox, result)
                }
            }
        }
    }

    fun windowQuery(queryBBox: Pair<Double, Double>): List<Pair<Double, Double>> {
        val result = mutableListOf<Pair<Double, Double>>()
        windowQueryRecursive(root, queryBBox, result)
        return result
    }

    private fun windowQueryRecursive(node: RTreeNode, queryBBox: Pair<Double, Double>, result: MutableList<Pair<Double, Double>>) {
        if (node.isLeaf) {
            for (point in node.children) {
                if (pointInBoundingBox(point, queryBBox)) {
                    result.add(point)
                }
            }
        } else {
            for (child in node.children) {
                val childBBox = calculateBoundingBox(child)
                if (bboxFullyContained(childBBox, queryBBox)) {
                    windowQueryRecursive(child, queryBBox, result)
                }
            }
        }
    }

    private fun bboxFullyContained(bbox1: Pair<Double, Double>, bbox2: Pair<Double, Double>): Boolean {
        return bbox1.first >= bbox2.first && bbox1.second >= bbox2.second && bbox1.third <= bbox2.third && bbox1.fourth <= bbox2.fourth
    }

    private fun pointInBoundingBox(point: Pair<Double, Double>, bbox: Pair<Double, Double>): Boolean {
        return bbox.first <= point.first && point.first <= bbox.third && bbox.second <= point.second && point.second <= bbox.fourth
    }

    private fun calculateBoundingBox(points: List<Pair<Double, Double>>): Pair<Double, Double> {
        val minX = points.minOf { it.first }
        val minY = points.minOf { it.second }
        val maxX = points.maxOf { it.first }
        val maxY = points.maxOf { it.second }
        return Pair(minX, minY, maxX, maxY)
    }

    fun knnQuery(queryPoint: Pair<Double, Double>, k: Int): List<Pair<Double, Double>> {
        val result = mutableListOf<Pair<Double, Double>>()
        knnSearch(root, queryPoint, k, result)
        result.sortBy { it.second }
        return result.take(k)
    }

    private fun knnSearch(node: RTreeNode, queryPoint: Pair<Double, Double>, k: Int, result: MutableList<Pair<Double, Double>>) {
        if (node.isLeaf) {
            for (child in node.children) {
                result.add(child to distance(queryPoint, calculateBoundingBox(child)))
            }
        } else {
            val distances = node.children.map { child ->
                child to calculateMinDistance(queryPoint, calculateBoundingBox(child))
            }
            distances.sortedBy { it.second }

            for ((child, _) in distances.take(k)) {
                knnSearch(child, queryPoint, k, result)
            }
        }
    }

    private fun calculateMinDistance(point: Pair<Double, Double>, boundingBox: Pair<Double, Double>): Double {
        var minDistance = 0.0

        for (i in 0 until point.component1().toInt()) {
            if (point.first < boundingBox.first) {
                minDistance += (boundingBox.first - point.first).pow(2)
            } else if (point.first > boundingBox.third) {
                minDistance += (point.first - boundingBox.third).pow(2)
            }
        }

        for (i in 0 until point.component2().toInt()) {
            if (point.second < boundingBox.second) {
                minDistance += (boundingBox.second - point.second).pow(2)
            } else if (point.second > boundingBox.fourth) {
                minDistance += (point.second - boundingBox.fourth).pow(2)
            }
        }

        return sqrt(minDistance)
    }

    fun update(oldPoint: Pair<Double, Double>, newPoint: Pair<Double, Double>) {
        recursiveUpdate(root, oldPoint, newPoint)
    }

    private fun recursiveUpdate(node: RTreeNode, oldPoint: Pair<Double, Double>, newPoint: Pair<Double, Double>) {
        if (node.isLeaf) {
            for (i in node.children.indices) {
                if (node.children[i] == oldPoint) {
                    node.children[i] = newPoint
                    return
                }
            }
        } else {
            for (child in node.children) {
                if (intersects(child, oldPoint)) {
                    recursiveUpdate(child, oldPoint, newPoint)
                }
            }
        }
    }

    private fun intersects(box1: Pair<Double, Double>, box2: Pair<Double, Double>): Boolean {
        return !(box1.third < box2.first || box1.first > box2.third || box1.fourth < box2.second || box1.second > box2.fourth)
    }

    fun traverse(visitFunc: (RTreeNode) -> Unit) {
        recursiveTraverse(root, visitFunc)
    }

    private fun recursiveTraverse(node: RTreeNode, visitFunc: (RTreeNode) -> Unit) {
        visitFunc(node)
        if (!node.isLeaf) {
            for (child in node.children) {
                recursiveTraverse(child, visitFunc)
            }
        }
    }

    fun printNodeInfo(node: RTreeNode, depth: Int) {
        val indentation = "  ".repeat(depth)
        if (node.isLeaf) {
            println("${indentation}Leaf Node Bounding Box: ${node.boundingBox}")
        } else {
            println("${indentation}Internal Node Bounding Box: ${node.boundingBox}")
        }
    }
}
