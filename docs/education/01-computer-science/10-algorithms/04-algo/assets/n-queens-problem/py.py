def solveNQueens(n):
    result = []

    def backtrack(board, row):
        if row == n:
            result.append([''.join(row) for row in board])
            return
        for col in range(n):
            if isValid(board, row, col):
                board[row][col] = 'Q'
                backtrack(board, row + 1)
                board[row][col] = '.'

    def isValid(board, row, col):
        for i in range(row):
            if board[i][col] == 'Q':
                return False
        i, j = row - 1, col - 1
        while i >= 0 and j >= 0:
            if board[i][j] == 'Q':
                return False
            i, j = i - 1, j - 1
        i, j = row - 1, col + 1
        while i >= 0 and j < n:
            if board[i][j] == 'Q':
                return False
            i, j = i - 1, j + 1
        return True

    board = [['.'] * n for _ in range(n)]
    backtrack(board, 0)
    return result
