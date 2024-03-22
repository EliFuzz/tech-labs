use std::collections::VecDeque;

#[derive(Debug)]
struct Node {
    key: i32,
    left: Option<Box<Node>>,
    right: Option<Box<Node>>,
}

impl Node {
    fn new(key: i32) -> Self {
        Node {
            key,
            left: None,
            right: None,
        }
    }
}

#[derive(Debug)]
struct BinarySearchTree {
    root: Option<Box<Node>>,
}

impl BinarySearchTree {
    fn new() -> Self {
        BinarySearchTree { root: None }
    }

    fn insert(&mut self, root: Option<Box<Node>>, key: i32) -> Box<Node> {
        if let Some(mut node) = root {
            if key < node.key {
                node.left = Some(self.insert(node.left.take(), key));
            } else if key > node.key {
                node.right = Some(self.insert(node.right.take(), key));
            }
            node
        } else {
            Box::new(Node::new(key))
        }
    }

    fn search(&self, root: &Option<Box<Node>>, key: i32) -> Option<&Box<Node>> {
        match root {
            Some(node) => {
                if node.key == key {
                    Some(node)
                } else if key < node.key {
                    self.search(&node.left, key)
                } else {
                    self.search(&node.right, key)
                }
            }
            None => None,
        }
    }

    fn find_min(&self, root: &Option<Box<Node>>) -> Option<&Box<Node>> {
        let mut current = root;
        while let Some(node) = current {
            if let Some(left_node) = &node.left {
                current = Some(left_node);
            } else {
                return Some(node);
            }
        }
        None
    }

    fn find_max(&self, root: &Option<Box<Node>>) -> Option<&Box<Node>> {
        let mut current = root;
        while let Some(node) = current {
            if let Some(right_node) = &node.right {
                current = Some(right_node);
            } else {
                return Some(node);
            }
        }
        None
    }

    fn find_successor(&self, root: &Option<Box<Node>>, key: i32) -> Option<&Box<Node>> {
        let mut current = root;
        let mut successor = None;

        while let Some(node) = current {
            if key < node.key {
                successor = Some(node);
                current = Some(&node.left);
            } else {
                current = Some(&node.right);
            }
        }

        successor
    }

    fn find_predecessor(&self, root: &Option<Box<Node>>, key: i32) -> Option<&Box<Node>> {
        let mut current = root;
        let mut predecessor = None;

        while let Some(node) = current {
            if key > node.key {
                predecessor = Some(node);
                current = Some(&node.right);
            } else {
                current = Some(&node.left);
            }
        }

        predecessor
    }

    fn delete_node(&mut self, root: Option<Box<Node>>, key: i32) -> Option<Box<Node>> {
        if let Some(mut node) = root {
            if key < node.key {
                node.left = self.delete_node(node.left.take(), key);
            } else if key > node.key {
                node.right = self.delete_node(node.right.take(), key);
            } else {
                if node.left.is_none() {
                    return node.right;
                } else if node.right.is_none() {
                    return node.left;
                }

                if let Some(successor) = self.find_min(&node.right) {
                    node.key = successor.key;
                    node.right = self.delete_node(node.right.take(), successor.key);
                }
            }
            Some(node)
        } else {
            None
        }
    }

    fn bfs_recursive(&self, root: &Option<Box<Node>>) {
        if let Some(node) = root {
            let mut queue = VecDeque::new();
            queue.push_back(node);

            self.bfs_helper(&queue);
        }
    }

    fn bfs_helper(&self, queue: &VecDeque<&Box<Node>>) {
        let mut queue = queue.clone();
        if let Some(current) = queue.pop_front() {
            println!("{}", current.key);

            if let Some(left_node) = &current.left {
                queue.push_back(left_node);
            }
            if let Some(right_node) = &current.right {
                queue.push_back(right_node);
            }

            self.bfs_helper(&queue);
        }
    }

    fn bfs_iterative(&self, root: &Option<Box<Node>>) {
        if let Some(node) = root {
            let mut queue = VecDeque::new();
            queue.push_back(node);

            while let Some(current) = queue.pop_front() {
                println!("{}", current.key);

                if let Some(left_node) = &current.left {
                    queue.push_back(left_node);
                }
                if let Some(right_node) = &current.right {
                    queue.push_back(right_node);
                }
            }
        }
    }

    fn dfs_pre_order_recursive(&self, root: &Option<Box<Node>>) {
        if let Some(node) = root {
            println!("{}", node.key);
            self.dfs_pre_order_recursive(&node.left);
            self.dfs_pre_order_recursive(&node.right);
        }
    }

    fn dfs_pre_order_iterative(&self, root: &Option<Box<Node>>) {
        if let Some(node) = root {
            let mut stack = vec![node];

            while let Some(current) = stack.pop() {
                println!("{}", current.key);

                if let Some(right_node) = &current.right {
                    stack.push(right_node);
                }
                if let Some(left_node) = &current.left {
                    stack.push(left_node);
                }
            }
        }
    }

    fn dfs_in_order_recursive(&self, root: &Option<Box<Node>>) {
        if let Some(node) = root {
            self.dfs_in_order_recursive(&node.left);
            println!("{}", node.key);
            self.dfs_in_order_recursive(&node.right);
        }
    }

    fn dfs_in_order_iterative(&self, root: &Option<Box<Node>>) {
        let mut stack = Vec::new();
        let mut current = root;

        while let Some(node) = current {
            stack.push(node);
            current = &node.left;
        }

        while let Some(node) = stack.pop() {
            println!("{}", node.key);
            current = &node.right;

            while let Some(node) = current {
                stack.push(node);
                current = &node.left;
            }
        }
    }

    fn dfs_post_order_recursive(&self, root: &Option<Box<Node>>) {
        if let Some(node) = root {
            self.dfs_post_order_recursive(&node.left);
            self.dfs_post_order_recursive(&node.right);
            println!("{}", node.key);
        }
    }

    fn dfs_post_order_iterative(&self, root: &Option<Box<Node>>) {
        if let Some(node) = root {
            let mut stack1 = Vec::new();
            let mut stack2 = Vec::new();
            stack1.push(node);

            while let Some(current) = stack1.pop() {
                stack2.push(current.clone());

                if let Some(left_node) = &current.left {
                    stack1.push(left_node
