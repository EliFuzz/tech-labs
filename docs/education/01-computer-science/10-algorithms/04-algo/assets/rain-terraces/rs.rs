fn bruteforce_rain_terraces(terraces: &[i32]) -> i32 {
    let mut water_amount = 0;

    for terrace_index in 0..terraces.len() {
        let mut left_highest_level = 0;
        for left_index in (0..terrace_index).rev() {
            left_highest_level = left_highest_level.max(terraces[left_index]);
        }

        let mut right_highest_level = 0;
        for right_index in (terrace_index + 1)..terraces.len() {
            right_highest_level = right_highest_level.max(terraces[right_index]);
        }

        let terrace_boundary_level = left_highest_level.min(right_highest_level);
        if terrace_boundary_level > terraces[terrace_index] {
            water_amount += terrace_boundary_level - terraces[terrace_index];
        }
    }

    water_amount
}

fn dynamic_programming_rain_terraces(terraces: &[i32]) -> i32 {
    let mut water_amount = 0;

    let mut left_max_levels = vec![0; terraces.len()];
    let mut right_max_levels = vec![0; terraces.len()];

    left_max_levels[0] = terraces[0];
    for terrace_index in 1..terraces.len() {
        left_max_levels[terrace_index] =
            terraces[terrace_index].max(left_max_levels[terrace_index - 1]);
    }

    right_max_levels[terraces.len() - 1] = terraces[terraces.len() - 1];
    for terrace_index in (0..terraces.len() - 1).rev() {
        right_max_levels[terrace_index] =
            terraces[terrace_index].max(right_max_levels[terrace_index + 1]);
    }

    for terrace_index in 0..terraces.len() {
        let current_terrace_boundary = left_max_levels[terrace_index]
            .min(right_max_levels[terrace_index]);

        if current_terrace_boundary > terraces[terrace_index] {
            water_amount += current_terrace_boundary - terraces[terrace_index];
        }
    }

    water_amount
}
