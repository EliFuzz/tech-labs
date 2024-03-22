struct SegmentTree<T> {
    input_array: Vec<T>,
    operation: fn(T, T) -> T,
    operation_fallback: T,
    segment_tree: Vec<T>,
}

impl<T> SegmentTree<T> {
    fn new(input_array: Vec<T>, operation: fn(T, T) -> T, operation_fallback: T) -> Self {
        let mut segment_tree = Self::init_segment_tree(&input_array);

        Self {
            input_array,
            operation,
            operation_fallback,
            segment_tree,
        }
    }

    fn init_segment_tree(input_array: &Vec<T>) -> Vec<T> {
        let input_array_length = input_array.len();
        let mut segment_tree_array_length;

        if Self::is_power_of_two(input_array_length) {
            segment_tree_array_length = 2 * input_array_length - 1;
        } else {
            let current_power = (input_array_length as f64).log2().floor() as usize;
            let next_power = current_power + 1;
            let next_power_of_two_number = 2usize.pow(next_power as u32);
            segment_tree_array_length = 2 * next_power_of_two_number - 1;
        }

        vec![None; segment_tree_array_length]
    }

    fn is_power_of_two(number: usize) -> bool {
        if number < 1 {
            return false;
        }

        let mut divided_number = number;
        while divided_number != 1 {
            if divided_number % 2 != 0 {
                return false;
            }
            divided_number /= 2;
        }

        true
    }

    fn build_segment_tree(&mut self) {
        let left_index = 0;
        let right_index = self.input_array.len() - 1;
        let position = 0;
        self.build_tree_recursively(left_index, right_index, position);
    }

    fn build_tree_recursively(&mut self, left_input_index: usize, right_input_index: usize, position: usize) {
        if left_input_index == right_input_index {
            self.segment_tree[position] = self.input_array[left_input_index].clone();
            return;
        }

        let middle_index = (left_input_index + right_input_index) / 2;
        self.build_tree_recursively(
            left_input_index,
            middle_index,
            self.get_left_child_index(position),
        );
        self.build_tree_recursively(
            middle_index + 1,
            right_input_index,
            self.get_right_child_index(position),
        );

        self.segment_tree[position] = (self.operation)(
            self.segment_tree[self.get_left_child_index(position)].clone(),
            self.segment_tree[self.get_right_child_index(position)].clone(),
        );
    }

    fn range_query(&self, query_left_index: usize, query_right_index: usize) -> T {
        let left_index = 0;
        let right_index = self.input_array.len() - 1;
        let position = 0;

        self.range_query_recursive(
            query_left_index,
            query_right_index,
            left_index,
            right_index,
            position,
        )
    }

    fn range_query_recursive(
        &self,
        query_left_index: usize,
        query_right_index: usize,
        left_index: usize,
        right_index: usize,
        position: usize,
    ) -> T {
        if query_left_index <= left_index && query_right_index >= right_index {
            return self.segment_tree[position].clone();
        }

        if query_left_index > right_index || query_right_index < left_index {
            return self.operation_fallback.clone();
        }

        let middle_index = (left_index + right_index) / 2;

        let left_operation_result = self.range_query_recursive(
            query_left_index,
            query_right_index,
            left_index,
            middle_index,
            self.get_left_child_index(position),
        );

        let right_operation_result = self.range_query_recursive(
            query_left_index,
            query_right_index,
            middle_index + 1,
            right_index,
            self.get_right_child_index(position),
        );

        (self.operation)(left_operation_result, right_operation_result)
    }

    fn get_left_child_index(&self, parent_index: usize) -> usize {
        2 * parent_index + 1
    }

    fn get_right_child_index(&self, parent_index: usize) -> usize {
        2 * parent_index + 2
    }
}
