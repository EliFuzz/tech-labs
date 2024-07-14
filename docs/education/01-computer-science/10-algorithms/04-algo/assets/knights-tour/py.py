def get_possible_moves(chessboard, position):
    possible_moves = [
        (-1, -2),
        (-2, -1),
        (1, -2),
        (2, -1),
        (-2, 1),
        (-1, 2),
        (1, 2),
        (2, 1),
    ]

    board_size = len(chessboard)
    moves = []
    for dx, dy in possible_moves:
        x = position[0] + dx
        y = position[1] + dy
        if 0 <= x < board_size and 0 <= y < board_size:
            moves.append((x, y))
    return moves


def is_move_allowed(chessboard, move):
    x, y = move
    return chessboard[x][y] != 1


def knight_tour_recursive(chessboard, moves, total_moves):
    if len(moves) == total_moves:
        return True

    last_move = moves[-1]
    possible_moves = get_possible_moves(chessboard, last_move)

    for current_move in possible_moves:
        if is_move_allowed(chessboard, current_move):
            x, y = current_move
            moves.append(current_move)
            chessboard[x][y] = 1

            if knight_tour_recursive(chessboard, moves, total_moves):
                return True

            moves.pop()
            chessboard[x][y] = 0

    return False


def knight_tour(chessboard_size):
    chessboard = [[0] * chessboard_size for _ in range(chessboard_size)]
    moves = [(0, 0)]
    chessboard[0][0] = 1

    total_moves = chessboard_size * chessboard_size
    solution_was_found = knight_tour_recursive(chessboard, moves, total_moves)

    return moves if solution_was_found else []
