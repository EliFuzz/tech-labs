fn backtracking_power_set_recursive(original_set: &[i32], all_subsets: &mut Vec<Vec<i32>>, current_sub_set: &mut Vec<i32>, start_at: usize) {
    for position in start_at..original_set.len() {
        current_sub_set.push(original_set[position]);
        all_subsets.push(current_sub_set.clone());

        backtracking_power_set_recursive(original_set, all_subsets, current_sub_set, position + 1);

        current_sub_set.pop();
    }
}

fn backtracking_power_set(original_set: &[i32]) -> Vec<Vec<i32>> {
    let mut all_subsets = vec![vec![]];
    backtracking_power_set_recursive(original_set, &mut all_subsets, &mut vec![], 0);
    all_subsets
}

fn bitwise_power_set(original_set: &[i32]) -> Vec<Vec<i32>> {
    let mut sub_sets = vec![];
    let number_of_combinations = 1 << original_set.len();

    for combination_index in 0..number_of_combinations {
        let mut sub_set = vec![];

        for set_element_index in 0..original_set.len() {
            if combination_index & (1 << set_element_index) != 0 {
                sub_set.push(original_set[set_element_index]);
            }
        }

        sub_sets.push(sub_set);
    }

    sub_sets
}

fn cascading_power_set(original_set: &[i32]) -> Vec<Vec<i32>> {
    let mut sets = vec![vec![]];

    for num_idx in 0..original_set.len() {
        let existing_sets_num = sets.len();

        for set_idx in 0..existing_sets_num {
            let mut set = sets[set_idx].clone();
            set.push(original_set[num_idx]);
            sets.push(set);
        }
    }

    sets
}
