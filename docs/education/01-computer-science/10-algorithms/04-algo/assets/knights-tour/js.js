function getPossibleMoves(chessboard, position) {
  const possibleMoves = [
    [-1, -2],
    [-2, -1],
    [1, -2],
    [2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
  ];

  return possibleMoves
    .map(([dx, dy]) => [position[0] + dx, position[1] + dy])
    .filter(([x, y]) => {
      const boardSize = chessboard.length;
      return x >= 0 && y >= 0 && x < boardSize && y < boardSize;
    });
}

function isMoveAllowed(chessboard, move) {
  const [x, y] = move;
  return chessboard[x][y] !== 1;
}

function knightTourRecursive(chessboard, moves, totalMoves) {
  if (moves.length === totalMoves) {
    return true;
  }

  const lastMove = moves[moves.length - 1];
  const possibleMoves = getPossibleMoves(chessboard, lastMove);

  for (const currentMove of possibleMoves) {
    if (isMoveAllowed(chessboard, currentMove)) {
      const [x, y] = currentMove;
      moves.push(currentMove);
      chessboard[x][y] = 1;

      if (knightTourRecursive(chessboard, moves, totalMoves)) {
        return true;
      }

      moves.pop();
      chessboard[x][y] = 0;
    }
  }

  return false;
}

function knightTour(chessboardSize) {
  const chessboard = Array(chessboardSize)
    .fill(null)
    .map(() => Array(chessboardSize).fill(0));

  const moves = [[0, 0]];
  chessboard[0][0] = 1;

  const totalMoves = chessboardSize * chessboardSize;
  const solutionWasFound = knightTourRecursive(chessboard, moves, totalMoves);

  return solutionWasFound ? moves : [];
}
