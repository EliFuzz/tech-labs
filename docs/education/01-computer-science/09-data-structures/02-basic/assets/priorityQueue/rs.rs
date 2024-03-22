use std::cmp::Ordering;

struct PriorityQueue<T> {
    heap: Vec<(T, i32)>,
}

impl<T> PriorityQueue<T> {
    fn new() -> Self {
        PriorityQueue { heap: Vec::new() }
    }

    fn enqueue(&mut self, item: T, priority: i32) {
        self.heap.push((item, priority));
        self.heapify_up();
    }

    fn dequeue(&mut self) -> Option<T> {
        if self.heap.is_empty() {
            return None;
        }
        let highest_priority_item = self.heap.swap_remove(0).0;
        self.heapify_down();
        Some(highest_priority_item)
    }

    fn peek(&self) -> Option<&T> {
        self.heap.get(0).map(|(item, _)| item)
    }

    fn change_priority(&mut self, item: T, new_priority: i32) {
        if let Some(index) = self.heap.iter().position(|(existing_item, _)| existing_item == &item) {
            self.heap[index] = (item, new_priority);
            self.heapify_up(index);
        }
    }

    fn find_by_value(&self, item: &T) -> Option<&T> {
        self.heap.iter().find_map(|(existing_item, _)| {
            if existing_item == item {
                Some(existing_item)
            } else {
                None
            }
        })
    }

    fn heapify_up(&mut self, mut index: usize) {
        while index > 0 {
            let parent_index = (index - 1) / 2;
            if self.heap[parent_index].1 < self.heap[index].1 {
                self.heap.swap(parent_index, index);
                index = parent_index;
            } else {
                break;
            }
        }
    }

    fn heapify_down(&mut self) {
        let mut index = 0;
        while let Some(left_child_index) = 2 * index + 1 < self.heap.len().then(|| 2 * index + 1) {
            let right_child_index = 2 * index + 2;
            let smallest_index = match right_child_index < self.heap.len().then(|| right_child_index) {
                Some(right_index) if self.heap[right_index].1 > self.heap[left_child_index].1 => right_index,
                _ => left_child_index,
            };
            if self.heap[smallest_index].1 > self.heap[index].1 {
                self.heap.swap(index, smallest_index);
                index = smallest_index;
            } else {
                break;
            }
        }
    }
}
