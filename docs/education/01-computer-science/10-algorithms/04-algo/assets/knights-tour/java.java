import java.util.ArrayList;
import java.util.List;

public class KnightTour {

  static List<Pair> getPossibleMoves(int[][] chessboard, Pair position) {
    int[][] possibleMoves = {
        {-1, -2},
        {-2, -1},
        {1, -2},
        {2, -1},
        {-2, 1},
        {-1, 2},
        {1, 2},
        {2, 1}
    };

    List<Pair> moves = new ArrayList<>();
    for (int[] move : possibleMoves) {
      int dx = move[0];
      int dy = move[1];
      int x = position.x + dx;
      int y = position.y + dy;
      int boardSize = chessboard.length;
      if (x >= 0 && y >= 0 && x < boardSize && y < boardSize) {
        moves.add(new Pair(x, y));
      }
    }
    return moves;
  }

  static boolean isMoveAllowed(int[][] chessboard, Pair move) {
    int x = move.x;
    int y = move.y;
    return chessboard[x][y] != 1;
  }

  static boolean knightTourRecursive(int[][] chessboard, List<Pair> moves, int totalMoves) {
    if (moves.size() == totalMoves) {
      return true;
    }

    Pair lastMove = moves.get(moves.size() - 1);
    List<Pair> possibleMoves = getPossibleMoves(chessboard, lastMove);

    for (Pair currentMove : possibleMoves) {
      if (isMoveAllowed(chessboard, currentMove)) {
        int x = currentMove.x;
        int y = currentMove.y;
        moves.add(currentMove);
        chessboard[x][y] = 1;

        if (knightTourRecursive(chessboard, moves, totalMoves)) {
          return true;
        }

        moves.remove(moves.size() - 1);
        chessboard[x][y] = 0;
      }
    }

    return false;
  }

  static List<Pair> knightTour(int chessboardSize) {
    int[][] chessboard = new int[chessboardSize][chessboardSize];
    List<Pair> moves = new ArrayList<>();
    moves.add(new Pair(0, 0));
    chessboard[0][0] = 1;

    int totalMoves = chessboardSize * chessboardSize;
    boolean solutionWasFound = knightTourRecursive(chessboard, moves, totalMoves);

    if (solutionWasFound) {
      return moves;
    }
    return new ArrayList<>();
  }

  static class Pair {

    int x, y;

    Pair(int x, int y) {
      this.x = x;
      this.y = y;
    }
  }
}
