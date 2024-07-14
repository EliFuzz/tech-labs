def recursive_staircase_bruteforce(stairs_num):
    if stairs_num <= 0:
        return 0
    if stairs_num == 1 or stairs_num == 2:
        return stairs_num
    return (recursive_staircase_bruteforce(stairs_num - 1) +
            recursive_staircase_bruteforce(stairs_num - 2))


def recursive_staircase_iterative(stairs_num):
    if stairs_num <= 0:
        return 0
    steps = [1, 2]
    if stairs_num <= 2:
        return steps[stairs_num - 1]
    for current_step in range(3, stairs_num + 1):
        steps[0], steps[1] = steps[1], steps[0] + steps[1]
    return steps[1]


def recursive_staircase_dynamic_programming(stairs_num):
    if stairs_num < 0:
        return 0
    steps = [0] * (stairs_num + 1)
    steps[1] = 1
    steps[2] = 2
    if stairs_num <= 2:
        return steps[stairs_num]
    for current_step in range(3, stairs_num + 1):
        steps[current_step] = steps[current_step - 1] + steps[current_step - 2]
    return steps[stairs_num]


def recursive_staircase_memoization(total_stairs):
    memo = {}

    def get_steps(stairs_num):
        if stairs_num <= 0:
            return 0
        if stairs_num == 1 or stairs_num == 2:
            return stairs_num
        if stairs_num in memo:
            return memo[stairs_num]
        memo[stairs_num] = get_steps(stairs_num - 1) + get_steps(stairs_num - 2)
        return memo[stairs_num]

    return get_steps(total_stairs)
