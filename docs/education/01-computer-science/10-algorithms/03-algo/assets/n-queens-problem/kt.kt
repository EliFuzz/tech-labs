fun solveNQueens(n: Int): List<List<String>> {
    val result = mutableListOf<List<String>>()
    val board = Array(n) { CharArray(n) { '.' } }

    fun backtrack(row: Int) {
        if (row == n) {
            result.add(board.map { it.joinToString("") })
            return
        }
        for (col in board.indices) {
            if (isValid(row, col)) {
                board[row][col] = 'Q'
                backtrack(row + 1)
                board[row][col] = '.'
            }
        }
    }

    fun isValid(row: Int, col: Int): Boolean {
        for (i in 0 until row) {
            if (board[i][col] == 'Q') return false
        }
        var i = row - 1
        var j = col - 1
        while (i >= 0 && j >= 0) {
            if (board[i--][j--] == 'Q') return false
        }
        i = row - 1
        j = col + 1
        while (i >= 0 && j < n) {
            if (board[i--][j++] == 'Q') return false
        }
        return true
    }

    backtrack(0)
    return result
}
