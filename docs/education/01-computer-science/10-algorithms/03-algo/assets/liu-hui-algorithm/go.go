package main

import (
    "math"
)

func liuHui(n int) float64 {
    sideLength := 2.0
    polygonSides := 6.0
    for i := 0; i < n; i++ {
        sideLength = math.Sqrt(4 - math.Pow(sideLength/2, 2))
        polygonSides *= 2
    }
    return sideLength * polygonSides
}
