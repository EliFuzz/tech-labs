def shape(m):
    shapes = []
    dimension = m
    while dimension and isinstance(dimension, list):
        shapes.append(len(dimension))
        dimension = dimension[0] if len(dimension) else None
    return shapes

def validate_type(m):
    if m is None or not isinstance(m, list) or not isinstance(m[0], list):
        raise ValueError("Invalid matrix format")


def validate_2d(m):
    validate_type(m)
    a_shape = shape(m)
    if len(a_shape) != 2:
        raise ValueError("Matrix is not of 2D shape")

def validateSameShape(a, b):
    validateType(a)
    validateType(b)

    aShape = shape(a)
    bShape = shape(b)

    if len(aShape) != len(bShape):
        raise ValueError("Matrices have different dimensions")

    while aShape and bShape:
        if aShape.pop() != bShape.pop():
            raise ValueError("Matrices have different shapes")


def generate(mShape, fill):
    def generateRecursively(recShape, recIndices):
        if len(recShape) == 1:
            return [fill(recIndices + [cellIndex]) for cellIndex in range(recShape[0])]
        m = []
        for i in range(recShape[0]):
            m.append(generateRecursively(recShape[1:], recIndices + [i]))
        return m

    return generateRecursively(mShape, [])


def zeros(mShape):
    return generate(mShape, lambda _: 0)


def dot(a, b):
    validate2D(a)
    validate2D(b)

    aShape = shape(a)
    bShape = shape(b)
    if aShape[1] != bShape[0]:
        raise ValueError("Matrices have incompatible shape for multiplication")

    outputShape = [aShape[0], bShape[1]]
    c = zeros(outputShape)

    for bCol in range(len(b[0])):
        for aRow in range(len(a)):
            cellSum = 0
            for aCol in range(len(a[aRow])):
                cellSum += a[aRow][aCol] * b[aCol][bCol]
            c[aRow][bCol] = cellSum

    return c


def walk(m, visit):
    def recWalk(recM, cellIndices):
        recMShape = shape(recM)

        if len(recMShape) == 1:
            for i in range(len(recM)):
                visit(cellIndices + [i], recM[i])
        for i in range(len(recM)):
            recWalk(recM[i], cellIndices + [i])

    recWalk(m, [])


def getCellAtIndex(m, cellIndices):
    cell = m[cellIndices[0]]
    for dimIdx in range(1, len(cellIndices) - 1):
        cell = cell[cellIndices[dimIdx]]
    return cell[cellIndices[-1]]


def updateCellAtIndex(m, cellIndices, cellValue):
    cell = m[cellIndices[0]]
    for dimIdx in range(1, len(cellIndices) - 1):
        cell = cell[cellIndices[dimIdx]]
    cell[cellIndices[-1]] = cellValue


def add(a, b):
    validateSameShape(a, b)
    result = zeros(shape(a))

    def update(result, cellIndices, cellValue):
        updateCellAtIndex(result, cellIndices, cellValue)

    walk(a, lambda cellIndices, cellValue: update(result, cellIndices, cellValue))
    walk(b, lambda cellIndices, cellValue: update(result, cellIndices, cellValue + getCellAtIndex(result, cellIndices)))

    return result


def mul(a, b):
    validateSameShape(a, b)
    result = zeros(shape(a))

    def update(result, cellIndices, cellValue):
        updateCellAtIndex(result, cellIndices, cellValue)

    walk(a, lambda cellIndices, cellValue: update(result, cellIndices, cellValue))
    walk(b, lambda cellIndices, cellValue: update(result, cellIndices, cellValue * getCellAtIndex(result, cellIndices)))

    return result


def sub(a, b):
    validateSameShape(a, b)
    result = zeros(shape(a))

    def update(result, cellIndices, cellValue):
        updateCellAtIndex(result, cellIndices, cellValue)

    walk(a, lambda cellIndices, cellValue: update(result, cellIndices, cellValue))
    walk(b, lambda cellIndices, cellValue: update(result, cellIndices, getCellAtIndex(result, cellIndices) - cellValue))

    return result
