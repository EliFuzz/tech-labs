fun cartesianProduct(arrays: List<List<Any>>): List<List<Any>> {
    var result = listOf(emptyList<Any>())

    for (array in arrays) {
        val temp = mutableListOf<List<Any>>()
        for (item in array) {
            for (res in result) {
                val t = res.toMutableList()
                t.add(item)
                temp.add(t)
            }
        }
        result = temp
    }

    return result
}
