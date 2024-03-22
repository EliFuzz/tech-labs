fun backtrackingJumpGame(numbers: IntArray, startIndex: Int = 0, currentJumps: MutableList<Int> = mutableListOf()): Boolean {
    if (startIndex == numbers.size - 1) {
        return true
    }

    val maxJumpLength = Math.min(numbers[startIndex], numbers.size - 1 - startIndex)

    for (jumpLength in maxJumpLength downTo 1) {
        val nextIndex = startIndex + jumpLength
        currentJumps.add(nextIndex)

        val isJumpSuccessful = backtrackingJumpGame(numbers, nextIndex, currentJumps)

        if (isJumpSuccessful) {
            return true
        }

        currentJumps.removeAt(currentJumps.size - 1)
    }

    return false
}

fun dpBottomUpJumpGame(numbers: IntArray): Boolean {
    val cellsGoodness = Array(numbers.size) { _ -> null }
    cellsGoodness[cellsGoodness.size - 1] = true

    for (cellIndex in numbers.size - 2 downTo 0) {
        val maxJumpLength = Math.min(numbers[cellIndex], numbers.size - 1 - cellIndex)

        for (jumpLength in maxJumpLength downTo 1) {
            val nextIndex = cellIndex + jumpLength
            if (cellsGoodness[nextIndex] == true) {
                cellsGoodness[cellIndex] = true
                break
            }
        }
    }

    return cellsGoodness[0] == true
}

fun dpTopDownJumpGame(numbers: IntArray, startIndex: Int = 0, currentJumps: MutableList<Int> = mutableListOf(), cellsGoodness: MutableList<Boolean?> = mutableListOf()): Boolean {
    if (startIndex == numbers.size - 1) {
        return true
    }

    val currentCellsGoodness = cellsGoodness.toMutableList()
    if (currentCellsGoodness.isEmpty()) {
        repeat(numbers.size) { _ -> currentCellsGoodness.add(null) }
        currentCellsGoodness[currentCellsGoodness.size - 1] = true
    }

    val maxJumpLength = Math.min(numbers[startIndex], numbers.size - 1 - startIndex)

    for (jumpLength in maxJumpLength downTo 1) {
        val nextIndex = startIndex + jumpLength

        if (currentCellsGoodness[nextIndex] != false) {
            currentJumps.add(nextIndex)

            val isJumpSuccessful = dpTopDownJumpGame(numbers, nextIndex, currentJumps, currentCellsGoodness)

            if (isJumpSuccessful) {
                return true
            }

            currentJumps.removeAt(currentJumps.size - 1)

            currentCellsGoodness[nextIndex] = false
        }
    }

    return false
}

fun greedyJumpGame(numbers: IntArray): Boolean {
    var leftGoodPosition = numbers.size - 1

    for (numberIndex in numbers.size - 2 downTo 0) {
        val maxCurrentJumpLength = numberIndex + numbers[numberIndex]
        if (maxCurrentJumpLength >= leftGoodPosition) {
            leftGoodPosition = numberIndex
        }
    }

    return leftGoodPosition == 0
}
