fun liuHui(n: Int): Double {
    var sideLength = 2.0
    var polygonSides = 6.0
    repeat(n) {
        sideLength = Math.sqrt(4 - Math.pow(sideLength / 2, 2))
        polygonSides *= 2
    }
    return sideLength * polygonSides
}
