fn bf_maximum_subarray(input_array: &[i32]) -> Vec<i32> {
    let mut max_subarray_start_index = 0;
    let mut max_subarray_length = 0;
    let mut max_subarray_sum: Option<i32> = None;

    for start_index in 0..input_array.len() {
        let mut subarray_sum = 0;
        for arr_length in 1..=input_array.len() - start_index {
            subarray_sum += input_array[start_index + (arr_length - 1)];
            if max_subarray_sum.is_none() || subarray_sum > max_subarray_sum.unwrap() {
                max_subarray_sum = Some(subarray_sum);
                max_subarray_start_index = start_index;
                max_subarray_length = arr_length;
            }
        }
    }

    input_array[max_subarray_start_index..max_subarray_start_index + max_subarray_length].to_vec()
}

fn dc_maximum_subarray_sum(input_array: &[i32]) -> i32 {
    fn solve_recursively(input_array: &[i32], element_index: usize, must_pick: bool) -> i32 {
        if element_index >= input_array.len() {
            if must_pick {
                0
            } else {
                i32::MIN
            }
        } else {
            i32::max(
                input_array[element_index] + solve_recursively(input_array, element_index + 1, true),
                if must_pick {
                    0
                } else {
                    solve_recursively(input_array, element_index + 1, false)
                },
            )
        }
    }

    solve_recursively(input_array, 0, false)
}

fn dp_maximum_subarray(input_array: &[i32]) -> Vec<i32> {
    let mut max_sum = i32::MIN;
    let mut current_sum = 0;

    let mut max_start_index = 0;
    let mut max_end_index = input_array.len() - 1;
    let mut current_start_index = 0;

    for (current_index, &current_number) in input_array.iter().enumerate() {
        current_sum += current_number;

        if max_sum < current_sum {
            max_sum = current_sum;
            max_start_index = current_start_index;
            max_end_index = current_index;
        }

        if current_sum < 0 {
            current_sum = 0;
            current_start_index = current_index + 1;
        }
    }

    input_array[max_start_index..=max_end_index].to_vec()
}
