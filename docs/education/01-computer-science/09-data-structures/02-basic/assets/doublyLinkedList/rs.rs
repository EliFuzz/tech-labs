pub struct DoublyLinkedList<T> {
    head: Option<Box<Node<T>>>,
    tail: Option<*mut Node<T>>,
}

struct Node<T> {
    value: T,
    next: Option<Box<Node<T>>>,
    prev: Option<*mut Node<T>>,
}

impl<T> DoublyLinkedList<T> {
    pub fn new() -> Self {
        DoublyLinkedList {
            head: None,
            tail: None,
        }
    }

    pub fn prepend(&mut self, value: T) {
        let mut new_node = Box::new(Node {
            value,
            next: self.head.take(),
            prev: None,
        });

        let raw_node = &mut *new_node as *mut Node<T>;

        if let Some(old_head) = self.head.as_mut() {
            old_head.prev = Some(raw_node);
        } else {
            self.tail = Some(raw_node);
        }

        self.head = Some(new_node);
    }

    pub fn append(&mut self, value: T) {
        let mut new_node = Box::new(Node {
            value,
            next: None,
            prev: self.tail,
        });

        let raw_node = &mut *new_node as *mut Node<T>;

        unsafe {
            if let Some(old_tail) = self.tail.as_mut() {
                (*old_tail).next = Some(new_node);
            } else {
                self.head = Some(new_node);
            }
        }

        self.tail = Some(raw_node);
    }

    pub fn search(&self, value: T) -> Option<&Node<T>>
    where
        T: std::cmp::PartialEq,
    {
        let mut current = self.head.as_deref();

        while let Some(node) = current {
            if node.value == value {
                return Some(node);
            }

            current = node.next.as_deref();
        }

        None
    }

    pub fn delete_head(&mut self) -> Option<Box<Node<T>>> {
        self.head.take().map(|mut old_head| {
            self.head = old_head.next.take();

            if let Some(head) = self.head.as_mut() {
                head.prev = None;
            } else {
                self.tail = None;
            }

            old_head
        })
    }

    pub fn delete_node(&mut self, value: T)
    where
        T: std::cmp::PartialEq,
    {
        let mut current = self.head.as_mut();

        while let Some(node) = current {
            if node.value == value {
                let next = node.next.take();

                if let Some(prev) = unsafe { node.prev.as_mut() } {
                    prev.next = next;
                } else {
                    self.head = next;
                }

                return;
            }

            current = node.next.as_mut();
        }
    }

    pub fn delete_last(&mut self) {
        if let Some(tail) = self.tail {
            unsafe {
                if let Some(prev) = (*tail).prev.as_mut() {
                    prev.next = None;
                } else {
                    self.head = None;
                }
            }

            self.tail = None;
        }
    }

    pub fn reverse(&mut self) {
        let mut current = self.head.as_mut();
        let mut prev: Option<*mut Node<T>> = None;

        while let Some(node) = current {
            let next = node.next.take();
            node.prev = next.as_mut().map(|node| &mut **node as *mut Node<T>);
            node.next = unsafe { prev.map(|prev| &mut *prev) };

            prev = Some(node as *mut Node<T>);
            current = next.as_mut();
        }

        std::mem::swap(&mut self.head, &mut self.tail);
    }

    pub fn traversal(&self) {
        let mut current = self.head.as_deref();

        while let Some(node) = current {
            println!("{:?}", node.value);
            current = node.next.as_deref();
        }
    }

    pub fn reverse_traversal(&self) {
        let mut current = self.tail;

        while let Some(node) = unsafe { current.as_ref() } {
            println!("{:?}", node.value);
            current = node.prev;
        }
    }
}
