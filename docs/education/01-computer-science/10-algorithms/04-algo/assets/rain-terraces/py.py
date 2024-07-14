def bruteforceRainTerraces(terraces):
    waterAmount = 0

    for terraceIndex in range(len(terraces)):
        leftHighestLevel = 0
        for leftIndex in range(terraceIndex - 1, -1, -1):
            leftHighestLevel = max(leftHighestLevel, terraces[leftIndex])

        rightHighestLevel = 0
        for rightIndex in range(terraceIndex + 1, len(terraces)):
            rightHighestLevel = max(rightHighestLevel, terraces[rightIndex])

        terraceBoundaryLevel = min(leftHighestLevel, rightHighestLevel)
        if terraceBoundaryLevel > terraces[terraceIndex]:
            waterAmount += terraceBoundaryLevel - terraces[terraceIndex]

    return waterAmount


def dynamicProgrammingRainTerraces(terraces):
    waterAmount = 0

    leftMaxLevels = [0] * len(terraces)
    rightMaxLevels = [0] * len(terraces)

    leftMaxLevels[0] = terraces[0]
    for terraceIndex in range(1, len(terraces)):
        leftMaxLevels[terraceIndex] = max(terraces[terraceIndex], leftMaxLevels[terraceIndex - 1])

    rightMaxLevels[len(terraces) - 1] = terraces[len(terraces) - 1]
    for terraceIndex in range(len(terraces) - 2, -1, -1):
        rightMaxLevels[terraceIndex] = max(terraces[terraceIndex], rightMaxLevels[terraceIndex + 1])

    for terraceIndex in range(len(terraces)):
        currentTerraceBoundary = min(leftMaxLevels[terraceIndex], rightMaxLevels[terraceIndex])

        if currentTerraceBoundary > terraces[terraceIndex]:
            waterAmount += currentTerraceBoundary - terraces[terraceIndex]

    return waterAmount
