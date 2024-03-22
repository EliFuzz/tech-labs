fun backtrackingPowerSetRecursive(originalSet: IntArray, allSubsets: MutableList<MutableList<Int>> = mutableListOf(mutableListOf()), currentSubSet: MutableList<Int> = mutableListOf(), startAt: Int = 0): MutableList<MutableList<Int>> {
    for (position in startAt until originalSet.size) {
        currentSubSet.add(originalSet[position])
        allSubsets.add(currentSubSet.toMutableList())

        backtrackingPowerSetRecursive(originalSet, allSubsets, currentSubSet, position + 1)

        currentSubSet.removeAt(currentSubSet.size - 1)
    }

    return allSubsets
}

fun bitwisePowerSet(originalSet: IntArray): MutableList<MutableList<Int>> {
    val subSets = mutableListOf<MutableList<Int>>()
    val numberOfCombinations = 1 shl originalSet.size

    for (combinationIndex in 0 until numberOfCombinations) {
        val subSet = mutableListOf<Int>()

        for (setElementIndex in 0 until originalSet.size) {
            if (combinationIndex and (1 shl setElementIndex) != 0) {
                subSet.add(originalSet[setElementIndex])
            }
        }

        subSets.add(subSet)
    }

    return subSets
}

fun cascadingPowerSet(originalSet: IntArray): MutableList<MutableList<Int>> {
    val sets = mutableListOf<MutableList<Int>>(mutableListOf())

    for (numIdx in originalSet.indices) {
        val existingSetsNum = sets.size

        for (setIdx in 0 until existingSetsNum) {
            val set = mutableListOf<Int>().apply { addAll(sets[setIdx]) }
            set.add(originalSet[numIdx])
            sets.add(set)
        }
    }

    return sets
}
