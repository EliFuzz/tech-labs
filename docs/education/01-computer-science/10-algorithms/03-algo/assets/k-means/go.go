package main

import (
    "math"
)

type Point struct {
    X, Y float64
}

type Centroid struct {
    X, Y float64
}

func kMeans(points []Point, k int) []Centroid {
    centroids := make([]Centroid, k)
    for i := range centroids {
        centroids[i] = Centroid{points[i].X, points[i].Y}
    }

    for {
        clusters := make([][]Point, k)
        for _, point := range points {
            nearestIdx := 0
            nearestDist := math.Inf(1)
            for i, centroid := range centroids {
                dist := math.Pow(point.X-centroid.X, 2) + math.Pow(point.Y-centroid.Y, 2)
                if dist < nearestDist {
                    nearestIdx = i
                    nearestDist = dist
                }
            }
            clusters[nearestIdx] = append(clusters[nearestIdx], point)
        }

        newCentroids := make([]Centroid, k)
        for i, cluster := range clusters {
            sumX, sumY := 0.0, 0.0
            for _, point := range cluster {
                sumX += point.X
                sumY += point.Y
            }
            newCentroids[i] = Centroid{sumX / float64(len(cluster)), sumY / float64(len(cluster))}
        }

        if converged(centroids, newCentroids) {
            break
        }
        centroids = newCentroids
    }

    return centroids
}

func converged(oldCentroids, newCentroids []Centroid) bool {
    for i := range oldCentroids {
        if math.Abs(oldCentroids[i].X-newCentroids[i].X) > 1e-6 || math.Abs(oldCentroids[i].Y-newCentroids[i].Y) > 1e-6 {
            return false
        }
    }
    return true
}
