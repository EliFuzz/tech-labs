def backtracking_power_set_recursive(original_set, all_subsets=[[]], current_sub_set=[], start_at=0):
    for position in range(start_at, len(original_set)):
        current_sub_set.append(original_set[position])
        all_subsets.append(current_sub_set[:])

        backtracking_power_set_recursive(
            original_set, all_subsets, current_sub_set, position + 1
        )

        current_sub_set.pop()

    return all_subsets


def bitwise_power_set(original_set):
    sub_sets = []
    number_of_combinations = 2 ** len(original_set)

    for combination_index in range(number_of_combinations):
        sub_set = []

        for set_element_index in range(len(original_set)):
            if combination_index & (1 << set_element_index):
                sub_set.append(original_set[set_element_index])

        sub_sets.append(sub_set)

    return sub_sets


def cascading_power_set(original_set):
    sets = [[]]

    for num_idx in range(len(original_set)):
        existing_sets_num = len(sets)

        for set_idx in range(existing_sets_num):
            set_ = sets[set_idx] + [original_set[num_idx]]
            sets.append(set_)

    return sets
