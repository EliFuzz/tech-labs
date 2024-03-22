class Heap:
    def __init__(self, comparator):
        self.comparator = comparator
        self.heap = []

    def find_min(self):
        if not self.heap:
            return None
        return self.heap[0]

    def find_max(self):
        if not self.heap:
            return None
        return self.heap[-1]

    def extract_min(self):
        if not self.heap:
            return None

        min_val = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        self.heapify_down()

        return min_val

    def extract_max(self):
        if not self.heap:
            return None

        max_val = self.heap[-1]
        self.heap[0] = self.heap[1]
        self.heap.pop()
        self.heapify_down()

        return max_val

    def insert(self, element):
        self.heap.append(element)
        self.heapify_up()

    def increase_key(self, index, new_key):
        if new_key < self.heap[index]:
            raise ValueError("New key must be greater than current key")

        self.heap[index] = new_key
        self.heapify_up(index)

    def decrease_key(self, index, new_key):
        if new_key > self.heap[index]:
            raise ValueError("New key must be less than current key")

        self.heap[index] = new_key
        self.heapify_down(index)

    def meld(self, other):
        merged_heap = Heap(self.comparator)
        merged_heap.heap = self.heap + other.heap

        for i in range(len(self.heap) // 2, -1, -1):
            merged_heap.heapify_down(i)

        return merged_heap

    def heapify_up(self, index=None):
        if index is None:
            index = len(self.heap) - 1
        current_index = index
        current_element = self.heap[current_index]

        while current_index > 0:
            parent_index = (current_index - 1) // 2
            parent = self.heap[parent_index]

            if self.comparator(current_element, parent) >= 0:
                break

            self.heap[current_index] = parent
            current_index = parent_index

        self.heap[current_index] = current_element

    def heapify_down(self, index=0):
        current_index = index

        while current_index < len(self.heap):
            left_child_index = 2 * current_index + 1
            right_child_index = 2 * current_index + 2
            left_child = self.heap[left_child_index] if left_child_index < len(self.heap) else None
            right_child = self.heap[right_child_index] if right_child_index < len(self.heap) else None

            min_child_index = left_child_index if left_child is None or (right_child is not None and self.comparator(left_child, right_child) <= 0) else right_child_index

            if min_child_index is None or self.comparator(self.heap[min_child_index], self.heap[current_index]) >= 0:
                break

            min_child = self.heap[min_child_index]
            self.heap[current_index] = min_child
            current_index = min_child_index

        self.heap[current_index] = self.heap[index]
