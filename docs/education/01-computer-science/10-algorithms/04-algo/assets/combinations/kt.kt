fun combineWithoutRepetitions(comboOptions: List<Int>, comboLength: Int): List<List<Int>> {
    val combos = mutableListOf<List<Int>>()
    if (comboLength == 1) {
        for (comboOption in comboOptions) {
            combos.add(listOf(comboOption))
        }
    } else {
        for (i in 0..comboOptions.size - comboLength) {
            val currentOption = comboOptions[i]
            val smallerCombos = combineWithoutRepetitions(comboOptions.subList(i + 1, comboOptions.size), comboLength - 1)
            for (smallerCombo in smallerCombos) {
                combos.add(listOf(currentOption) + smallerCombo)
            }
        }
    }
    return combos
}

fun combineWithRepetitions(comboOptions: List<Int>, comboLength: Int): List<List<Int>> {
    val combos = mutableListOf<List<Int>>()
    if (comboLength == 1) {
        for (comboOption in comboOptions) {
            combos.add(listOf(comboOption))
        }
    } else {
        for (i in comboOptions.indices) {
            val currentOption = comboOptions[i]
            val smallerCombos = combineWithRepetitions(comboOptions.subList(i, comboOptions.size), comboLength - 1)
            for (smallerCombo in smallerCombos) {
                combos.add(listOf(currentOption) + smallerCombo)
            }
        }
    }
    return combos
}
