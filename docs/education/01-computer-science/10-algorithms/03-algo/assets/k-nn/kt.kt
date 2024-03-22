data class Point(val x: Double, val y: Double)

class KNN {
    companion object {
        fun knn(data: List<Point>, target: Point, k: Int): List<Point> {
            return data.sortedBy { distance(it, target) }.take(k)
        }

        private fun distance(p1: Point, p2: Point): Double {
            return Math.sqrt(Math.pow(p1.x - p2.x, 2.0) + Math.pow(p1.y - p2.y, 2.0))
        }
    }
}
