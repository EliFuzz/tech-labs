fn get_possible_moves(chessboard: &Vec<Vec<i32>>, position: &(usize, usize)) -> Vec<(usize, usize)> {
    let possible_moves = vec![
        (-1, -2),
        (-2, -1),
        (1, -2),
        (2, -1),
        (-2, 1),
        (-1, 2),
        (1, 2),
        (2, 1),
    ];

    let board_size = chessboard.len();
    let mut moves = Vec::new();
    for (dx, dy) in possible_moves {
        let x = position.0 as i32 + dx;
        let y = position.1 as i32 + dy;
        if x >= 0 && y >= 0 && x < board_size as i32 && y < board_size as i32 {
            moves.push((x as usize, y as usize));
        }
    }
    moves
}

fn is_move_allowed(chessboard: &Vec<Vec<i32>>, move: &(usize, usize)) -> bool {
    let (x, y) = *move;
    chessboard[x][y] != 1
}

fn knight_tour_recursive(chessboard: &mut Vec<Vec<i32>>, moves: &mut Vec<(usize, usize)>, total_moves: usize) -> bool {
    if moves.len() == total_moves {
        return true;
    }

    let last_move = *moves.last().unwrap();
    let possible_moves = get_possible_moves(chessboard, &last_move);

    for current_move in possible_moves {
        if is_move_allowed(chessboard, &current_move) {
            let (x, y) = current_move;
            moves.push(current_move);
            chessboard[x][y] = 1;

            if knight_tour_recursive(chessboard, moves, total_moves) {
                return true;
            }

            moves.pop();
            chessboard[x][y] = 0;
        }
    }

    false
}

fn knight_tour(chessboard_size: usize) -> Vec<(usize, usize)> {
    let mut chessboard = vec![vec![0; chessboard_size]; chessboard_size];
    let mut moves = vec![(0, 0)];
    chessboard[0][0] = 1;

    let total_moves = chessboard_size * chessboard_size;
    let solution_was_found = knight_tour_recursive(&mut chessboard, &mut moves, total_moves);

    if solution_was_found {
        moves
    } else {
        Vec::new()
    }
}
