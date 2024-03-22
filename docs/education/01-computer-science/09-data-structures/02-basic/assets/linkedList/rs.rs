pub struct Node<T> {
    data: T,
    next: Option<Box<Node<T>>>,
}

pub struct LinkedList<T> {
    head: Option<Box<Node<T>>>,
}

impl<T: std::cmp::PartialEq + std::clone::Clone> LinkedList<T> {
    pub fn new() -> Self {
        LinkedList { head: None }
    }

    pub fn prepend(&mut self, data: T) {
        let new_node = Box::new(Node {
            data,
            next: self.head.take(),
        });

        self.head = Some(new_node);
    }

    pub fn insert_before(&mut self, value: T, data: T) {
        let mut current = &mut self.head;
        while current.is_some() && current.as_ref().unwrap().data != value {
            current = &mut current.as_mut().unwrap().next;
        }
        *current = Some(Box::new(Node {
            data,
            next: current.take(),
        }));
    }

    pub fn insert_after(&mut self, value: T, data: T) {
        let mut current = &mut self.head;
        while current.is_some() && current.as_ref().unwrap().data != value {
            current = &mut current.as_mut().unwrap().next;
        }
        let next = current.as_mut().unwrap().next.take();
        current.as_mut().unwrap().next = Some(Box::new(Node {
            data,
            next,
        }));
    }

    pub fn insert_at(&mut self, index: usize, data: T) {
        let mut current = &mut self.head;
        for _ in 0..index {
            current = &mut current.as_mut().unwrap().next;
        }
        *current = Some(Box::new(Node {
            data,
            next: current.take(),
        }));
    }

    pub fn append(&mut self, data: T) {
        let mut current = &mut self.head;
        while current.is_some() {
            current = &mut current.as_mut().unwrap().next;
        }
        *current = Some(Box::new(Node {
            data,
            next: None,
        }));
    }

    pub fn find(&self, value: T) -> Option<T> {
        let mut current = &self.head;
        while current.is_some() && current.as_ref().unwrap().data != value {
            current = &current.as_ref().unwrap().next;
        }
        current.as_ref().map(|node| node.data.clone())
    }

    pub fn delete_head(&mut self) {
        self.head = self.head.take().and_then(|node| node.next);
    }

    pub fn delete(&mut self, value: T) {
        let mut current = &mut self.head;
        while current.is_some() && current.as_ref().unwrap().data != value {
            current = &mut current.as_mut().unwrap().next;
        }
        *current = current.take().and_then(|node| node.next);
    }

    pub fn delete_last(&mut self) {
        let mut current = &mut self.head;
        while current.is_some() && current.as_mut().unwrap().next.is_some() {
            current = &mut current.as_mut().unwrap().next;
        }
        *current = None;
    }

    pub fn reverse(&mut self) {
        let mut prev = None;
        let mut current = self.head.take();
        while let Some(mut node) = current {
            let next = node.next.take();
            node.next = prev;
            prev = Some(node);
            current = next;
        }
        self.head = prev;
    }

    pub fn traverse(&self) {
        let mut current = &self.head;
        while let Some(node) = current {
            println!("{:?}", node.data);
            current = &node.next;
        }
    }
}
