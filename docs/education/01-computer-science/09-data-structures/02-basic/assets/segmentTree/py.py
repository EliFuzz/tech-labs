class SegmentTree:
    def __init__(self, input_array, operation, operation_fallback):
        self.input_array = input_array
        self.operation = operation
        self.operation_fallback = operation_fallback
        self.segment_tree = self.init_segment_tree(self.input_array)
        self.build_segment_tree()

    def init_segment_tree(self, input_array):
        input_array_length = len(input_array)

        if self.is_power_of_two(input_array_length):
            segment_tree_array_length = 2 * input_array_length - 1
        else:
            current_power = int(input_array_length.bit_length() - 1)
            next_power = current_power + 1
            next_power_of_two_number = 2 ** next_power
            segment_tree_array_length = 2 * next_power_of_two_number - 1

        return [None] * segment_tree_array_length

    def build_segment_tree(self):
        left_index = 0
        right_index = len(self.input_array) - 1
        position = 0
        self.build_tree_recursively(left_index, right_index, position)

    def build_tree_recursively(self, left_input_index, right_input_index, position):
        if left_input_index == right_input_index:
            self.segment_tree[position] = self.input_array[left_input_index]
            return

        middle_index = (left_input_index + right_input_index) // 2
        self.build_tree_recursively(
            left_input_index,
            middle_index,
            self.get_left_child_index(position),
        )
        self.build_tree_recursively(
            middle_index + 1,
            right_input_index,
            self.get_right_child_index(position),
        )

        self.segment_tree[position] = self.operation(
            self.segment_tree[self.get_left_child_index(position)],
            self.segment_tree[self.get_right_child_index(position)],
        )

    def range_query(self, query_left_index, query_right_index):
        left_index = 0
        right_index = len(self.input_array) - 1
        position = 0

        return self.range_query_recursive(
            query_left_index,
            query_right_index,
            left_index,
            right_index,
            position,
        )

    def range_query_recursive(
        self, query_left_index, query_right_index, left_index, right_index, position
    ):
        if query_left_index <= left_index and query_right_index >= right_index:
            return self.segment_tree[position]

        if query_left_index > right_index or query_right_index < left_index:
            return self.operation_fallback

        middle_index = (left_index + right_index) // 2

        left_operation_result = self.range_query_recursive(
            query_left_index,
            query_right_index,
            left_index,
            middle_index,
            self.get_left_child_index(position),
        )

        right_operation_result = self.range_query_recursive(
            query_left_index,
            query_right_index,
            middle_index + 1,
            right_index,
            self.get_right_child_index(position),
        )

        return self.operation(left_operation_result, right_operation_result)

    def get_left_child_index(self, parent_index):
        return 2 * parent_index + 1

    def get_right_child_index(self, parent_index):
        return 2 * parent_index + 2

    def is_power_of_two(self, number):
        if number < 1:
            return False

        divided_number = number
        while divided_number != 1:
            if divided_number % 2 != 0:
                return False
            divided_number //= 2

        return True
