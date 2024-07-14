import kotlin.math.pow

fun shape(m: Any): List<Int> {
    val shapes = mutableListOf<Int>()
    var dimension: Any? = m
    while (dimension != null && dimension is Array<*>) {
        shapes.add((dimension as Array<*>).size)
        dimension = if ((dimension as Array<*>).isNotEmpty()) (dimension as Array<*>)[0] else null
    }
    return shapes
}

fun validateType(m: Array<*>?) {
    if (m == null || !m.isArray() || !m[0].isArray()) {
        throw IllegalArgumentException("Invalid matrix format")
    }
}

fun validate2D(m: Array<*>) {
    validateType(m)
    val aShape = shape(m)
    if (aShape.size != 2) {
        throw IllegalArgumentException("Matrix is not of 2D shape")
    }
}

fun validateSameShape(a: Any, b: Any) {
    validateType(a)
    validateType(b)

    val aShape = shape(a)
    val bShape = shape(b)

    if (aShape.size != bShape.size) {
        throw IllegalArgumentException("Matrices have different dimensions")
    }

    while (aShape.isNotEmpty() && bShape.isNotEmpty()) {
        if (aShape.removeAt(aShape.size - 1) != bShape.removeAt(bShape.size - 1)) {
            throw IllegalArgumentException("Matrices have different shapes")
        }
    }
}

fun generate(mShape: List<Int>, fill: (List<Int>) -> Any): Any {
    fun generateRecursively(recShape: List<Int>, recIndices: List<Int>): Any {
        return if (recShape.size == 1) {
            Array(recShape[0]) { cellIndex ->
                fill(recIndices + cellIndex)
            }
        } else {
            val m = mutableListOf<Any>()
            for (i in 0 until recShape[0]) {
                m.add(generateRecursively(recShape.slice(1 until recShape.size), recIndices + i))
            }
            m.toTypedArray()
        }
    }

    return generateRecursively(mShape, emptyList())
}

fun zeros(mShape: List<Int>): Any {
    return generate(mShape) { 0 }
}

fun dot(a: Any, b: Any): Any {
    validate2D(a)
    validate2D(b)

    val aShape = shape(a)
    val bShape = shape(b)
    if (aShape[1] != bShape[0]) {
        throw IllegalArgumentException("Matrices have incompatible shape for multiplication")
    }

    val outputShape = listOf(aShape[0], bShape[1])
    val c = zeros(outputShape)

    for (bCol in 0 until (b as Array<*>)[0].size) {
        for (aRow in (a as Array<*>).indices) {
            var cellSum = 0
            for (aCol in (a[aRow] as Array<*>).indices) {
                cellSum += (a[aRow] as Array<*>)[aCol] as Int * (b[aCol] as IntArray)[bCol]
            }
            (c as Array<*>)[aRow][bCol] = cellSum
        }
    }

    return c
}

fun walk(m: Any, visit: (List<Int>, Any) -> Unit) {
    fun recWalk(recM: Any, cellIndices: List<Int>) {
        val recMShape = shape(recM)

        if (recMShape.size == 1) {
            for (i in (recM as Array<*>).indices) {
                visit(cellIndices + i, recM[i]!!)
            }
        }
        for (i in (recM as Array<*>).indices) {
            recWalk(recM[i]!!, cellIndices + i)
        }
    }

    recWalk(m, emptyList())
}

fun getCellAtIndex(m: Any, cellIndices: List<Int>): Any {
    var cell: Any = (m as Array<*>)[cellIndices[0]]!!
    for (dimIdx in 1 until cellIndices.size - 1) {
        cell = (cell as Array<*>)[cellIndices[dimIdx]]!!
    }
    return (cell as Array<*>)[cellIndices.last()]!!
}

fun updateCellAtIndex(m: Any, cellIndices: List<Int>, cellValue: Any) {
    var cell: Any = (m as Array<*>)[cellIndices[0]]!!
    for (dimIdx in 1 until cellIndices.size - 1) {
        cell = (cell as Array<*>)[cellIndices[dimIdx]]!!
    }
    (cell as Array<*>)[cellIndices.last()] = cellValue
}

fun add(a: Any, b: Any): Any {
    validateSameShape(a, b)
    val result = zeros(shape(a))

    walk(a) { cellIndices, cellValue ->
        updateCellAtIndex(result, cellIndices, cellValue)
    }

    walk(b) { cellIndices, cellValue ->
        val currentCellValue = getCellAtIndex(result, cellIndices) as Int
        updateCellAtIndex(result, cellIndices, currentCellValue + cellValue as Int)
    }

    return result
}

fun mul(a: Any, b: Any): Any {
    validateSameShape(a, b)
    val result = zeros(shape(a))

    walk(a) { cellIndices, cellValue ->
        updateCellAtIndex(result, cellIndices, cellValue)
    }

    walk(b) { cellIndices, cellValue ->
        val currentCellValue = getCellAtIndex(result, cellIndices) as Int
        updateCellAtIndex(result, cellIndices, currentCellValue * cellValue as Int)
    }

    return result
}

fun sub(a: Any, b: Any): Any {
    validateSameShape(a, b)
    val result = zeros(shape(a))

    walk(a) { cellIndices, cellValue ->
        updateCellAtIndex(result, cellIndices, cellValue)
    }

    walk(b) { cellIndices, cellValue ->
        val currentCellValue = getCellAtIndex(result, cellIndices) as Int
        updateCellAtIndex(result, cellIndices, currentCellValue - cellValue as Int)
    }

    return result
}

private fun validateType(matrix: Any) {
    if (matrix !is Array<*>) {
        throw IllegalArgumentException("Input is not a matrix")
    }
}

private fun validate2D(matrix: Any) {
    if (!(matrix is Array<*>) || !(matrix[0] is Array<*>)) {
        throw IllegalArgumentException("Input is not a 2D matrix")
    }
}
