data class Point(val x: Double, val y: Double)

data class Centroid(var x: Double, var y: Double)

fun kMeans(points: List<Point>, k: Int): List<Centroid> {
    var centroids = points.take(k).map { Centroid(it.x, it.y) }

    while (true) {
        val clusters = List(k) { mutableListOf<Point>() }

        for (point in points) {
            var nearestIdx = 0
            var nearestDist = Double.POSITIVE_INFINITY
            for ((idx, centroid) in centroids.withIndex()) {
                val dist = Math.pow(point.x - centroid.x, 2.0) + Math.pow(point.y - centroid.y, 2.0)
                if (dist < nearestDist) {
                    nearestIdx = idx
                    nearestDist = dist
                }
            }
            clusters[nearestIdx].add(point)
        }

        val newCentroids = mutableListOf<Centroid>()
        for ((idx, cluster) in clusters.withIndex()) {
            val sumX = cluster.sumByDouble { it.x }
            val sumY = cluster.sumByDouble { it.y }
            newCentroids.add(Centroid(sumX / cluster.size, sumY / cluster.size))
        }

        if (converged(centroids, newCentroids)) {
            break
        }
        centroids = newCentroids
    }

    return centroids
}

fun converged(oldCentroids: List<Centroid>, newCentroids: List<Centroid>): Boolean {
    return oldCentroids.zip(newCentroids).all { (old, new) ->
        Math.abs(old.x - new.x) < 1e-6 && Math.abs(old.y - new.y) < 1e-6
    }
}
