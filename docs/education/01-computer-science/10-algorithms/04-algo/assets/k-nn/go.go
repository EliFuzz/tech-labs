package main

import (
    "math"
    "sort"
)

type Point struct {
    X float64
    Y float64
}

type ByDistance struct {
    Points []Point
    Target Point
}

func (bd ByDistance) Len() int {
    return len(bd.Points)
}

func (bd ByDistance) Swap(i, j int) {
    bd.Points[i], bd.Points[j] = bd.Points[j], bd.Points[i]
}

func (bd ByDistance) Less(i, j int) bool {
    distI := math.Sqrt(math.Pow(bd.Points[i].X-bd.Target.X, 2) + math.Pow(bd.Points[i].Y-bd.Target.Y, 2))
    distJ := math.Sqrt(math.Pow(bd.Points[j].X-bd.Target.X, 2) + math.Pow(bd.Points[j].Y-bd.Target.Y, 2))
    return distI < distJ
}

func KNN(data []Point, target Point, k int) []Point {
    sortedData := ByDistance{Points: data, Target: target}
    sort.Sort(sortedData)
    return sortedData.Points[:k]
}
