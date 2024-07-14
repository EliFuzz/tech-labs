package main

func getPossibleMoves(chessboard [][]int, position [2]int) [][2]int {
	possibleMoves := [][2]int{
		{-1, -2},
		{-2, -1},
		{1, -2},
		{2, -1},
		{-2, 1},
		{-1, 2},
		{1, 2},
		{2, 1},
	}

	var moves [][2]int
	for _, move := range possibleMoves {
		dx, dy := move[0], move[1]
		x, y := position[0]+dx, position[1]+dy
		boardSize := len(chessboard)
		if x >= 0 && y >= 0 && x < boardSize && y < boardSize {
			moves = append(moves, [2]int{x, y})
		}
	}
	return moves
}

func isMoveAllowed(chessboard [][]int, move [2]int) bool {
	x, y := move[0], move[1]
	return chessboard[x][y] != 1
}

func knightTourRecursive(chessboard [][]int, moves [][2]int, totalMoves int) bool {
	if len(moves) == totalMoves {
		return true
	}

	lastMove := moves[len(moves)-1]
	possibleMoves := getPossibleMoves(chessboard, lastMove)

	for _, currentMove := range possibleMoves {
		if isMoveAllowed(chessboard, currentMove) {
			x, y := currentMove[0], currentMove[1]
			moves = append(moves, currentMove)
			chessboard[x][y] = 1

			if knightTourRecursive(chessboard, moves, totalMoves) {
				return true
			}

			moves = moves[:len(moves)-1]
			chessboard[x][y] = 0
		}
	}

	return false
}

func knightTour(chessboardSize int) [][2]int {
	chessboard := make([][]int, chessboardSize)
	for i := range chessboard {
		chessboard[i] = make([]int, chessboardSize)
	}

	moves := [][2]int{{0, 0}}
	chessboard[0][0] = 1

	totalMoves := chessboardSize * chessboardSize
	solutionWasFound := knightTourRecursive(chessboard, moves, totalMoves)

	if solutionWasFound {
		return moves
	}
	return nil
}
