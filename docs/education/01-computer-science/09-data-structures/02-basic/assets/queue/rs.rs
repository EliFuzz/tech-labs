use std::collections::VecDeque;

pub struct Queue<T> {
    queue: VecDeque<T>,
}

impl<T> Queue<T> {
    pub fn new() -> Self {
        Queue {
            queue: VecDeque::new(),
        }
    }

    pub fn enqueue(&mut self, item: T) {
        self.queue.push_back(item);
    }

    pub fn peek(&self) -> Option<&T> {
        self.queue.front()
    }

    pub fn dequeue(&mut self) -> Option<T> {
        self.queue.pop_front()
    }
}
