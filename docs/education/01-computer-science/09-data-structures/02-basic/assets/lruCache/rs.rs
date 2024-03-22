use std::collections::{HashMap, LinkedList};

struct LRUCacheOnMap {
    capacity: usize,
    items: HashMap<String, i32>,
}

impl LRUCacheOnMap {
    fn new(capacity: usize) -> Self {
        LRUCacheOnMap {
            capacity,
            items: HashMap::new(),
        }
    }

    fn get(&mut self, key: &str) -> Option<i32> {
        if let Some(val) = self.items.remove(key) {
            self.items.insert(key.to_string(), val);
            Some(val)
        } else {
            None
        }
    }

    fn set(&mut self, key: &str, val: i32) {
        self.items.remove(key);
        self.items.insert(key.to_string(), val);

        if self.items.len() > self.capacity {
            if let Some(head_key) = self.items.keys().next().cloned() {
                self.items.remove(&head_key);
            }
        }
    }
}

struct LinkedListNode {
    key: String,
    val: i32,
    prev: Option<Box<LinkedListNode>>,
    next: Option<Box<LinkedListNode>>,
}

impl LinkedListNode {
    fn new(key: String, val: i32, prev: Option<Box<LinkedListNode>>, next: Option<Box<LinkedListNode>>) -> Self {
        LinkedListNode { key, val, prev, next }
    }
}

struct LRUCache {
    capacity: usize,
    nodes_map: HashMap<String, Box<LinkedListNode>>,
    size: usize,
    head: Box<LinkedListNode>,
    tail: Box<LinkedListNode>,
}

impl LRUCache {
    fn new(capacity: usize) -> Self {
        let head = Box::new(LinkedListNode::new("".to_string(), 0, None, None));
        let tail = Box::new(LinkedListNode::new("".to_string(), 0, None, None));

        LRUCache {
            capacity,
            nodes_map: HashMap::new(),
            size: 0,
            head: head.clone(),
            tail: tail.clone(),
        }
    }

    fn get(&mut self, key: &str) -> Option<i32> {
        if let Some(node) = self.nodes_map.get_mut(key) {
            self.promote(node);
            Some(node.val)
        } else {
            None
        }
    }

    fn set(&mut self, key: &str, val: i32) {
        if let Some(node) = self.nodes_map.get_mut(key) {
            node.val = val;
            self.promote(node);
        } else {
            let node = Box::new(LinkedListNode::new(key.to_string(), val, None, None));
            self.append(node);
        }
    }

    fn promote(&mut self, node: &mut Box<LinkedListNode>) {
        self.evict(node);
        self.append(node.clone());
    }

    fn append(&mut self, mut node: Box<LinkedListNode>) {
        self.nodes_map.insert(node.key.clone(), node.clone());

        if self.head.next.is_none() {
            self.head.next = Some(node.clone());
            self.tail.prev = Some(node.clone());
            node.prev = Some(self.head.clone());
            node.next = Some(self.tail.clone());
        } else {
            let old_tail = self.tail.prev.take().unwrap();
            old_tail.next = Some(node.clone());
            node.prev = Some(old_tail.clone());
            node.next = Some(self.tail.clone());
            self.tail.prev = Some(node.clone());
        }

        self.size += 1;

        if self.size > self.capacity {
            self.evict(self.head.next.as_deref().unwrap());
        }
    }

    fn evict(&mut self, node: Option<&Box<LinkedListNode>>) {
        if let Some(node) = node {
            self.nodes_map.remove(&node.key);
            self.size -= 1;

            let prev_node = node.prev.as_deref().unwrap();
            let next_node = node.next.as_deref().unwrap();

            if prev_node == &self.head && next_node == &self.tail {
                self.head.next = None;
                self.tail.prev = None;
                self.size = 0;
                return;
            }

            if prev_node == &self.head {
                next_node.prev = Some(self.head.clone());
                self.head.next = Some(next_node.clone());
                return;
            }

            if next_node == &self.tail {
                prev_node.next = Some(self.tail.clone());
                self.tail.prev = Some(prev_node.clone());
                return;
            }

            prev_node.next = Some(next_node.clone());
            next_node.prev = Some(prev_node.clone());
        }
    }
}
