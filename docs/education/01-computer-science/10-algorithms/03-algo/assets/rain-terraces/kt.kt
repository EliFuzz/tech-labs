fun bruteforceRainTerraces(terraces: IntArray): Int {
    var waterAmount = 0

    for (terraceIndex in terraces.indices) {
        var leftHighestLevel = 0
        for (leftIndex in terraceIndex - 1 downTo 0) {
            leftHighestLevel = maxOf(leftHighestLevel, terraces[leftIndex])
        }

        var rightHighestLevel = 0
        for (rightIndex in terraceIndex + 1 until terraces.size) {
            rightHighestLevel = maxOf(rightHighestLevel, terraces[rightIndex])
        }

        val terraceBoundaryLevel = minOf(leftHighestLevel, rightHighestLevel)
        if (terraceBoundaryLevel > terraces[terraceIndex]) {
            waterAmount += terraceBoundaryLevel - terraces[terraceIndex]
        }
    }

    return waterAmount
}

fun dynamicProgrammingRainTerraces(terraces: IntArray): Int {
    var waterAmount = 0

    val leftMaxLevels = IntArray(terraces.size) { 0 }
    val rightMaxLevels = IntArray(terraces.size) { 0 }

    leftMaxLevels[0] = terraces[0]
    for (terraceIndex in 1 until terraces.size) {
        leftMaxLevels[terraceIndex] = maxOf(terraces[terraceIndex], leftMaxLevels[terraceIndex - 1])
    }

    rightMaxLevels[terraces.size - 1] = terraces[terraces.size - 1]
    for (terraceIndex in terraces.size - 2 downTo 0) {
        rightMaxLevels[terraceIndex] = maxOf(terraces[terraceIndex], rightMaxLevels[terraceIndex + 1])
    }

    for (terraceIndex in terraces.indices) {
        val currentTerraceBoundary = minOf(leftMaxLevels[terraceIndex], rightMaxLevels[terraceIndex])

        if (currentTerraceBoundary > terraces[terraceIndex]) {
            waterAmount += currentTerraceBoundary - terraces[terraceIndex]
        }
    }

    return waterAmount
}
