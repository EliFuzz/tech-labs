struct Heap<T> {
    comparator: Box<dyn Fn(T, T) -> i32>,
    heap: Vec<T>,
}

impl<T> Heap<T> {
  fn new(comparator: Box<dyn Fn(T, T) -> i32>) -> Self {
      Heap {
          comparator,
          heap: vec![],
      }
  }

  fn find_min(&self) -> Option<&T> {
      self.heap.first()
  }

  fn find_max(&self) -> Option<&T> {
      self.heap.last()
  }

  fn extract_min(&mut self) -> Option<T> {
      if self.heap.is_empty() {
          return None;
      }

      let min = self.heap[0].clone();
      self.heap[0] = self.heap.pop().unwrap();
      self.heapify_down();

      Some(min)
  }

  fn extract_max(&mut self) -> Option<T> {
      if self.heap.is_empty() {
          return None;
      }

      let max = self.heap.pop().unwrap();
      self.heapify_down();

      Some(max)
  }

  fn insert(&mut self, element: T) {
      self.heap.push(element);
      self.heapify_up();
  }

  fn increase_key(&mut self, index: usize, new_key: T) {
      if (self.comparator)(&self.heap[index], &new_key) >= 0 {
          panic!("New key must be greater than current key");
      }

      self.heap[index] = new_key;
      self.heapify_up(index);
  }

  fn decrease_key(&mut self, index: usize, new_key: T) {
      if (self.comparator)(&self.heap[index], &new_key) <= 0 {
          panic!("New key must be less than current key");
      }

      self.heap[index] = new_key;
      self.heapify_down(index);
  }

  fn meld(&mut self, other: &mut Heap<T>) {
      let mut merged_heap = Heap::new(self.comparator.clone());
      merged_heap.heap.extend(self.heap.drain(..));
      merged_heap.heap.extend(other.heap.drain(..));

      for i in (merged_heap.heap.len() / 2)..0 {
          merged_heap.heapify_down(i);
      }

      *self = merged_heap;
  }

  fn heapify_up(&mut self, index: usize) {
      let mut current_index = index;
      let current_element = &mut self.heap[current_index];

      while current_index > 0 {
          let parent_index = (current_index - 1) / 2;
          let parent = &mut self.heap[parent_index];

          if (self.comparator)(current_element, parent) >= 0 {
              break;
          }

          std::mem::swap(current_element, parent);
          current_index = parent_index;
      }
  }

  fn heapify_down(&mut self, index: usize) {
      let mut current_index = index;

      while current_index < self.heap.len() {
          let left_child_index = 2 * current_index + 1;
          let right_child_index = 2 * current_index + 2;
          let left_child = self.heap.get(left_child_index);
          let right_child = self.heap.get(right_child_index);

          let min_child_index = if left_child.is_none() || right_child.is_none() {
              if left_child.is_none() {
                  right_child_index
              } else {
                  left_child_index
              }
          } else {
              let current_element = &self.heap[current_index];
              let left_child = left_child.unwrap();
              let right_child = right_child.unwrap();

              if (self.comparator)(current_element, left_child) <= 0
                  && (self.comparator)(current_element, right_child) <= 0
              {
                  return;
              }

              if (self.comparator)(left_child, right_child) <= 0 {
                  left_child_index
              } else {
                  right_child_index
              }
          };

          if (self.comparator)(&self.heap[min_child_index], &self.heap[current_index]) >= 0 {
              return;
          }

          self.heap.swap(current_index, min_child_index);
          current_index = min_child_index;
      }
  }
}
