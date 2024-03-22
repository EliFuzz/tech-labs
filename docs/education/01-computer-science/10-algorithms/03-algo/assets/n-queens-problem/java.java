import java.util.ArrayList;
import java.util.List;

public class NQueens {

  public List<List<String>> solveNQueens(int n) {
    List<List<String>> result = new ArrayList<>();
    char[][] board = new char[n][n];
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        board[i][j] = '.';
      }
    }
    backtrack(result, board, 0);
    return result;
  }

  private void backtrack(List<List<String>> result, char[][] board, int row) {
    if (row == board.length) {
      List<String> temp = new ArrayList<>();
      for (char[] rowArray : board) {
        temp.add(String.valueOf(rowArray));
      }
      result.add(temp);
      return;
    }

    for (int col = 0; col < board.length; col++) {
      if (isValid(board, row, col)) {
        board[row][col] = 'Q';
        backtrack(result, board, row + 1);
        board[row][col] = '.';
      }
    }
  }

  private boolean isValid(char[][] board, int row, int col) {
    for (int i = 0; i < row; i++) {
      if (board[i][col] == 'Q') {
        return false;
      }
    }
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] == 'Q') {
        return false;
      }
    }
    for (int i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] == 'Q') {
        return false;
      }
    }
    return true;
  }
}
