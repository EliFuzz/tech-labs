fun getPossibleMoves(chessboard: Array<IntArray>, position: IntArray): List<IntArray> {
    val possibleMoves = arrayOf(
            intArrayOf(-1, -2),
            intArrayOf(-2, -1),
            intArrayOf(1, -2),
            intArrayOf(2, -1),
            intArrayOf(-2, 1),
            intArrayOf(-1, 2),
            intArrayOf(1, 2),
            intArrayOf(2, 1)
    )

    val moves = mutableListOf<IntArray>()
    for ((dx, dy) in possibleMoves) {
        val x = position[0] + dx
        val y = position[1] + dy
        val boardSize = chessboard.size
        if (x >= 0 && y >= 0 && x < boardSize && y < boardSize) {
            moves.add(intArrayOf(x, y))
        }
    }
    return moves
}

fun isMoveAllowed(chessboard: Array<IntArray>, move: IntArray): Boolean {
    val (x, y) = move
    return chessboard[x][y] != 1
}

fun knightTourRecursive(chessboard: Array<IntArray>, moves: MutableList<IntArray>, totalMoves: Int): Boolean {
    if (moves.size == totalMoves) {
        return true
    }

    val lastMove = moves.last()
    val possibleMoves = getPossibleMoves(chessboard, lastMove)

    for (currentMove in possibleMoves) {
        if (isMoveAllowed(chessboard, currentMove)) {
            val (x, y) = currentMove
            moves.add(currentMove)
            chessboard[x][y] = 1

            if (knightTourRecursive(chessboard, moves, totalMoves)) {
                return true
            }

            moves.removeAt(moves.size - 1)
            chessboard[x][y] = 0
        }
    }

    return false
}

fun knightTour(chessboardSize: Int): List<IntArray> {
    val chessboard = Array(chessboardSize) { IntArray(chessboardSize) }
    val moves = mutableListOf(intArrayOf(0, 0))
    chessboard[0][0] = 1

    val totalMoves = chessboardSize * chessboardSize
    val solutionWasFound = knightTourRecursive(chessboard, moves, totalMoves)

    return if (solutionWasFound) moves else emptyList()
}
