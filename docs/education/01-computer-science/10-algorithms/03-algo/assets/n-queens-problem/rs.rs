fn solve_n_queens(n: i32) -> Vec<Vec<String>> {
    let mut result = Vec::new();
    let mut board = vec![vec!['.'; n as usize]; n as usize];

    fn backtrack(result: &mut Vec<Vec<String>>, board: &mut Vec<Vec<char>>, row: usize) {
        let n = board.len();
        if row == n {
            result.push(board.iter().map(|r| r.iter().collect()).collect());
            return;
        }

        for col in 0..n {
            if is_valid(&board, row, col) {
                board[row][col] = 'Q';
                backtrack(result, board, row + 1);
                board[row][col] = '.';
            }
        }
    }

    fn is_valid(board: &Vec<Vec<char>>, row: usize, col: usize) -> bool {
        let n = board.len();
        for i in 0..row {
            if board[i][col] == 'Q' {
                return false;
            }
        }
        let (mut i, mut j) = (row as i32 - 1, col as i32 - 1);
        while i >= 0 && j >= 0 {
            if board[i as usize][j as usize] == 'Q' {
                return false;
            }
            i -= 1;
            j -= 1;
        }
        let (mut i, mut j) = (row as i32 - 1, col as i32 + 1);
        while i >= 0 && j < n as i32 {
            if board[i as usize][j as usize] == 'Q' {
                return false;
            }
            i -= 1;
            j += 1;
        }
        true
    }

    backtrack(&mut result, &mut board, 0);
    result
}
