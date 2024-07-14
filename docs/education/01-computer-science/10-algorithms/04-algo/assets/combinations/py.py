def combine_without_repetitions(combo_options, combo_length):
    combos = []
    if combo_length == 1:
        for combo_option in combo_options:
            combos.append([combo_option])
    else:
        for i in range(len(combo_options) - combo_length + 1):
            current_option = combo_options[i]
            smaller_combos = combine_without_repetitions(combo_options[i + 1:], combo_length - 1)
            for smaller_combo in smaller_combos:
                combos.append([current_option] + smaller_combo)
    return combos


def combine_with_repetitions(combo_options, combo_length):
    combos = []
    if combo_length == 1:
        for combo_option in combo_options:
            combos.append([combo_option])
    else:
        for i in range(len(combo_options)):
            current_option = combo_options[i]
            smaller_combos = combine_with_repetitions(combo_options[i:], combo_length - 1)
            for smaller_combo in smaller_combos:
                combos.append([current_option] + smaller_combo)
    return combos
