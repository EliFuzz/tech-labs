fn combine_without_repetitions(combo_options: &[i32], combo_length: usize) -> Vec<Vec<i32>> {
    let mut combos = Vec::new();
    if combo_length == 1 {
        for &combo_option in combo_options {
            combos.push(vec![combo_option]);
        }
    } else {
        for i in 0..=combo_options.len() - combo_length {
            let current_option = combo_options[i];
            let smaller_combos = combine_without_repetitions(&combo_options[i + 1..], combo_length - 1);
            for smaller_combo in smaller_combos {
                let mut new_combo = vec![current_option];
                new_combo.extend_from_slice(&smaller_combo);
                combos.push(new_combo);
            }
        }
    }
    combos
}

fn combine_with_repetitions(combo_options: &[i32], combo_length: usize) -> Vec<Vec<i32>> {
    let mut combos = Vec::new();
    if combo_length == 1 {
        for &combo_option in combo_options {
            combos.push(vec![combo_option]);
        }
    } else {
        for i in 0..combo_options.len() {
            let current_option = combo_options[i];
            let smaller_combos = combine_with_repetitions(&combo_options[i..], combo_length - 1);
            for smaller_combo in smaller_combos {
                let mut new_combo = vec![current_option];
                new_combo.extend_from_slice(&smaller_combo);
                combos.push(new_combo);
            }
        }
    }
    combos
}
