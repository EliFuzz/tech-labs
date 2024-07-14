fun generate(numRows: Int): List<List<Int>> {
    val triangle = mutableListOf<MutableList<Int>>()
    if (numRows <= 0) return triangle

    var row = mutableListOf(1)
    triangle.add(row)

    for (i in 1 until numRows) {
        val newRow = mutableListOf<Int>()
        newRow.add(1)
        for (j in 1 until i) {
            newRow.add(triangle[i - 1][j - 1] + triangle[i - 1][j])
        }
        newRow.add(1)
        triangle.add(newRow)
    }
    return triangle
}
