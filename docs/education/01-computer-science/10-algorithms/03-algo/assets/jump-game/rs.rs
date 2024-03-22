fn backtracking_jump_game(numbers: &[i32], start_index: usize, current_jumps: &mut Vec<usize>) -> bool {
    if start_index == numbers.len() - 1 {
        return true;
    }

    let max_jump_length = numbers[start_index].min(numbers.len() as i32 - 1 - start_index);

    for jump_length in (1..=max_jump_length).rev() {
        let next_index = start_index + jump_length as usize;
        current_jumps.push(next_index);

        let is_jump_successful = backtracking_jump_game(numbers, next_index, current_jumps);

        if is_jump_successful {
            return true;
        }

        current_jumps.pop();
    }

    false
}

fn dp_bottom_up_jump_game(numbers: &[i32]) -> bool {
    let mut cells_goodness = vec![None; numbers.len()];
    cells_goodness[cells_goodness.len() - 1] = Some(true);

    for cell_index in (0..numbers.len() - 1).rev() {
        let max_jump_length = numbers[cell_index].min(numbers.len() as i32 - 1 - cell_index as i32);

        for jump_length in (1..=max_jump_length).rev() {
            let next_index = cell_index + jump_length as usize;
            if cells_goodness[next_index] == Some(true) {
                cells_goodness[cell_index] = Some(true);
                break;
            }
        }
    }

    cells_goodness[0] == Some(true)
}

fn dp_top_down_jump_game(numbers: &[i32], start_index: usize, current_jumps: &mut Vec<usize>, cells_goodness: &mut Vec<Option<bool>>) -> bool {
    if start_index == numbers.len() - 1 {
        return true;
    }

    let mut current_cells_goodness = cells_goodness.clone();
    if current_cells_goodness.is_empty() {
        current_cells_goodness.extend(vec![None; numbers.len()]);
        current_cells_goodness[cells_goodness.len() - 1] = Some(true);
    }

    let max_jump_length = numbers[start_index].min(numbers.len() as i32 - 1 - start_index as i32);

    for jump_length in (1..=max_jump_length).rev() {
        let next_index = start_index + jump_length as usize;

        if current_cells_goodness[next_index] != Some(false) {
            current_jumps.push(next_index);

            let is_jump_successful = dp_top_down_jump_game(numbers, next_index, current_jumps, &mut current_cells_goodness);

            if is_jump_successful {
                return true;
            }

            current_jumps.pop();

            current_cells_goodness[next_index] = Some(false);
        }
    }

    false
}

fn greedy_jump_game(numbers: &[i32]) -> bool {
    let mut left_good_position = numbers.len() - 1;

    for number_index in (0..numbers.len() - 1).rev() {
        let max_current_jump_length = number_index + numbers[number_index] as usize;
        if max_current_jump_length >= left_good_position {
            left_good_position = number_index;
        }
    }

    left_good_position == 0
}
