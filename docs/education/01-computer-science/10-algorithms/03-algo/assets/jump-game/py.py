def backtracking_jump_game(numbers, start_index=0, current_jumps=None):
    if current_jumps is None:
        current_jumps = []

    if start_index == len(numbers) - 1:
        return True

    max_jump_length = min(numbers[start_index], len(numbers) - 1 - start_index)

    for jump_length in range(max_jump_length, 0, -1):
        next_index = start_index + jump_length
        current_jumps.append(next_index)

        is_jump_successful = backtracking_jump_game(numbers, next_index, current_jumps)

        if is_jump_successful:
            return True

        current_jumps.pop()

    return False


def dp_bottom_up_jump_game(numbers):
    cells_goodness = [None] * len(numbers)
    cells_goodness[-1] = True

    for cell_index in range(len(numbers) - 2, -1, -1):
        max_jump_length = min(numbers[cell_index], len(numbers) - 1 - cell_index)

        for jump_length in range(max_jump_length, 0, -1):
            next_index = cell_index + jump_length
            if cells_goodness[next_index] is True:
                cells_goodness[cell_index] = True
                break

    return cells_goodness[0] is True


def dp_top_down_jump_game(numbers, start_index=0, current_jumps=None, cells_goodness=None):
    if current_jumps is None:
        current_jumps = []
    if cells_goodness is None:
        cells_goodness = []

    if start_index == len(numbers) - 1:
        return True

    current_cells_goodness = cells_goodness.copy()
    if not current_cells_goodness:
        current_cells_goodness.extend([None] * len(numbers))
        current_cells_goodness[-1] = True

    max_jump_length = min(numbers[start_index], len(numbers) - 1 - start_index)

    for jump_length in range(max_jump_length, 0, -1):
        next_index = start_index + jump_length

        if current_cells_goodness[next_index] is not False:
            current_jumps.append(next_index)

            is_jump_successful = dp_top_down_jump_game(numbers, next_index, current_jumps, current_cells_goodness)

            if is_jump_successful:
                return True

            current_jumps.pop()

            current_cells_goodness[next_index] = False

    return False


def greedy_jump_game(numbers):
    left_good_position = len(numbers) - 1

    for number_index in range(len(numbers) - 2, -1, -1):
        max_current_jump_length = number_index + numbers[number_index]
        if max_current_jump_length >= left_good_position:
            left_good_position = number_index

    return left_good_position == 0
