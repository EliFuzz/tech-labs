class PriorityQueue:
    def __init__(self):
        self.heap = []

    def enqueue(self, item, priority):
        self.heap.append((priority, item))
        self._heapify_up()

    def dequeue(self):
        if not self.heap:
            return None
        highest_priority_item = self.heap[0][1]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        self._heapify_down()
        return highest_priority_item

    def peek(self):
        if not self.heap:
            return None
        return self.heap[0][1]

    def change_priority(self, item, new_priority):
        for i, (priority, value) in enumerate(self.heap):
            if value == item:
                self.heap[i] = (new_priority, item)
                self._heapify_up(i)
                break

    def find_by_value(self, item):
        for priority, value in self.heap:
            if value == item:
                return value
        return None

    def _heapify_up(self, index=None):
        if index is None:
            index = len(self.heap) - 1
        if index == 0:
            return
        parent_index = (index - 1) // 2
        if self.heap[parent_index][0] < self.heap[index][0]:
            self.heap[parent_index], self.heap[index] = self.heap[index], self.heap[parent_index]
            self._heapify_up(parent_index)

    def _heapify_down(self):
        index = 0
        while index < len(self.heap):
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            smallest_index = index
            if left_child_index < len(self.heap) and self.heap[left_child_index][0] < self.heap[smallest_index][0]:
                smallest_index = left_child_index
            if right_child_index < len(self.heap) and self.heap[right_child_index][0] < self.heap[smallest_index][0]:
                smallest_index = right_child_index
            if smallest_index == index:
                break
            self.heap[index], self.heap[smallest_index] = self.heap[smallest_index], self.heap[index]
            index = smallest_index
