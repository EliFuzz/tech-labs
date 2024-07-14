fn recursive_staircase_bruteforce(stairs_num: i32) -> i32 {
    if stairs_num <= 0 {
        return 0;
    }
    if stairs_num == 1 || stairs_num == 2 {
        return stairs_num;
    }
    recursive_staircase_bruteforce(stairs_num - 1) + recursive_staircase_bruteforce(stairs_num - 2)
}

fn recursive_staircase_iterative(stairs_num: i32) -> i32 {
    if stairs_num <= 0 {
        return 0;
    }
    let mut steps = vec![1, 2];
    if stairs_num <= 2 {
        return steps[(stairs_num - 1) as usize];
    }
    for current_step in 3..=stairs_num {
        steps[0] = steps[1];
        steps[1] += steps[0];
    }
    steps[1]
}

fn recursive_staircase_dynamic_programming(stairs_num: i32) -> i32 {
    if stairs_num < 0 {
        return 0;
    }
    let mut steps = vec![0; (stairs_num + 1) as usize];
    steps[1] = 1;
    steps[2] = 2;
    if stairs_num <= 2 {
        return steps[stairs_num as usize];
    }
    for current_step in 3..=stairs_num {
        steps[current_step as usize] = steps[(current_step - 1) as usize] + steps[(current_step - 2) as usize];
    }
    steps[stairs_num as usize]
}

fn recursive_staircase_memoization(total_stairs: i32) -> i32 {
    let mut memo = vec![0; (total_stairs + 1) as usize];

    fn get_steps(stairs_num: i32, memo: &mut Vec<i32>) -> i32 {
        if stairs_num <= 0 {
            return 0;
        }
        if stairs_num == 1 || stairs_num == 2 {
            return stairs_num;
        }
        if memo[stairs_num as usize] != 0 {
            return memo[stairs_num as usize];
        }
        memo[stairs_num as usize] = get_steps(stairs_num - 1, memo) + get_steps(stairs_num - 2, memo);
        memo[stairs_num as usize]
    }

    get_steps(total_stairs, &mut memo)
}
