package main

import (
    "image"
    "image/color"
    "image/jpeg"
    "os"
)

type energyMatrix [][]float64

func computeEnergy(img image.Image) energyMatrix {
    bounds := img.Bounds()
    width, height := bounds.Max.X, bounds.Max.Y

    energy := make(energyMatrix, height)
    for y := range energy {
        energy[y] = make([]float64, width)
    }

    for y := 0; y < height; y++ {
        for x := 0; x < width; x++ {
            dx := getColorDelta(bounds, img, x-1, y, x+1, y)
            dy := getColorDelta(bounds, img, x, y-1, x, y+1)
            energy[y][x] = dx*dx + dy*dy
        }
    }

    return energy
}

func getColorDelta(bounds image.Rectangle, img image.Image, x1, y1, x2, y2 int) float64 {
    x1 = clamp(x1, 0, bounds.Max.X-1)
    y1 = clamp(y1, 0, bounds.Max.Y-1)
    x2 = clamp(x2, 0, bounds.Max.X-1)
    y2 = clamp(y2, 0, bounds.Max.Y-1)

    c1 := img.At(x1, y1)
    r1, g1, b1, _ := c1.RGBA()
    c2 := img.At(x2, y2)
    r2, g2, b2, _ := c2.RGBA()

    dr := float64(r1 - r2)
    dg := float64(g1 - g2)
    db := float64(b1 - b2)

    return (dr*dr + dg*dg + db*db) / 3.0 // taking average of the color differences
}

func clamp(x, min, max int) int {
    if x < min {
        return min
    }
    if x > max {
        return max
    }
    return x
}

func findVerticalSeam(energy energyMatrix) []int {
    height, width := len(energy), len(energy[0])

    distTo := make([][]float64, height)
    edgeTo := make([][]int, height)
    for i := range distTo {
        distTo[i] = make([]float64, width)
        edgeTo[i] = make([]int, width)
    }

    for y := range energy[0] {
        distTo[0][y] = energy[0][y]
    }

    for y := 1; y < height; y++ {
        for x := 0; x < width; x++ {
            minIdx := x
            minEnergy := distTo[y-1][x]
            if x > 0 && distTo[y-1][x-1] < minEnergy {
                minIdx = x - 1
                minEnergy = distTo[y-1][x-1]
            }
            if x < width-1 && distTo[y-1][x+1] < minEnergy {
                minIdx = x + 1
                minEnergy = distTo[y-1][x+1]
            }
            distTo[y][x] = energy[y][x] + minEnergy
            edgeTo[y][x] = minIdx
        }
    }

    minEnergyIdx := 0
    minEnergy := distTo[height-1][0]
    for x := 1; x < width; x++ {
        if distTo[height-1][x] < minEnergy {
            minEnergy = distTo[height-1][x]
            minEnergyIdx = x
        }
    }

    seam := make([]int, height)
    seam[height-1] = minEnergyIdx
    for y := height - 2; y >= 0; y-- {
        seam[y] = edgeTo[y+1][minEnergyIdx]
        minEnergyIdx = seam[y]
    }

    return seam
}

func removeVerticalSeam(img *image.RGBA, seam []int) {
    bounds := img.Bounds()
    height, width := bounds.Max.Y, bounds.Max.X-1

    for y := 0; y < height; y++ {
        copy(img.Pix[y*width+y:], img.Pix[y*width+seam[y]+1:])
    }

    img.Rect.Max.X -= 1
}

func resizeImage(img image.Image, newWidth int) image.Image {
    bounds := img.Bounds()
    width := bounds.Max.X

    for width > newWidth {
        energy := computeEnergy(img)
        seam := findVerticalSeam(energy)
        removeVerticalSeam(img.(*image.RGBA), seam)
        width--
    }

    return img
}
