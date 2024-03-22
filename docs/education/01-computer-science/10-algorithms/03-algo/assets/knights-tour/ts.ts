function getPossibleMoves(
  chessboard: number[][],
  position: [number, number],
): [number, number][] {
  const possibleMoves: [number, number][] = [
    [-1, -2],
    [-2, -1],
    [1, -2],
    [2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
  ];

  const boardSize = chessboard.length;
  return possibleMoves
    .map(([dx, dy]) => [position[0] + dx, position[1] + dy])
    .filter(([x, y]) => x >= 0 && y >= 0 && x < boardSize && y < boardSize);
}

function isMoveAllowed(
  chessboard: number[][],
  move: [number, number],
): boolean {
  const [x, y] = move;
  return chessboard[x][y] !== 1;
}

function knightTourRecursive(
  chessboard: number[][],
  moves: [number, number][],
  totalMoves: number,
): boolean {
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

function knightTour(chessboardSize: number): [number, number][] {
  const chessboard: number[][] = Array.from({ length: chessboardSize }, () =>
    Array(chessboardSize).fill(0),
  );
  const moves: [number, number][] = [[0, 0]];
  chessboard[0][0] = 1;

  const totalMoves = chessboardSize * chessboardSize;
  const solutionWasFound = knightTourRecursive(chessboard, moves, totalMoves);

  return solutionWasFound ? moves : [];
}
