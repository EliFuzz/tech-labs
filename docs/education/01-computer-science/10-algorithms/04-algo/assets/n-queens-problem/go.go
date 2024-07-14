package main

func solveNQueens(n int) [][]string {
	var result [][]string
	board := make([][]rune, n)
	for i := range board {
		board[i] = make([]rune, n)
		for j := range board[i] {
			board[i][j] = '.'
		}
	}
	backtrack(&result, board, 0)
	return result
}

func backtrack(result *[][]string, board [][]rune, row int) {
	if row == len(board) {
		var temp []string
		for i := 0; i < len(board); i++ {
			temp = append(temp, string(board[i]))
		}
		*result = append(*result, temp)
		return
	}

	for col := 0; col < len(board); col++ {
		if isValid(board, row, col) {
			board[row][col] = 'Q'
			backtrack(result, board, row+1)
			board[row][col] = '.'
		}
	}
}

func isValid(board [][]rune, row, col int) bool {
	for i := 0; i < row; i++ {
		if board[i][col] == 'Q' {
			return false
		}
	}

	for i, j := row-1, col-1; i >= 0 && j >= 0; i, j = i-1, j-1 {
		if board[i][j] == 'Q' {
			return false
		}
	}

	for i, j := row-1, col+1; i >= 0 && j < len(board); i, j = i-1, j+1 {
		if board[i][j] == 'Q' {
			return false
		}
	}
	return true
}
