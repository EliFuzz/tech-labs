use std::cmp::max;
use std::mem;

#[derive(Debug)]
struct AVLNode {
    key: i32,
    left: Option<Box<AVLNode>>,
    right: Option<Box<AVLNode>>,
    height: i32,
}

impl AVLNode {
    fn new(key: i32) -> Self {
        AVLNode {
            key,
            left: None,
            right: None,
            height: 1,
        }
    }
}

#[derive(Debug)]
pub struct AVLTree {
    root: Option<Box<AVLNode>>,
}

impl AVLTree {
    pub fn new() -> Self {
        AVLTree { root: None }
    }

    pub fn insert(&mut self, node: Option<Box<AVLNode>>, key: i32) -> Option<Box<AVLNode>> {
        let mut new_node = node.unwrap_or_else(|| Box::new(AVLNode::new(key)));

        if key < new_node.key {
            new_node.left = self.insert(mem::replace(&mut new_node.left, None), key);
        } else if key > new_node.key {
            new_node.right = self.insert(mem::replace(&mut new_node.right, None), key);
        }

        new_node.height = 1 + max(Self::height(&new_node.left), Self::height(&new_node.right));

        Some(Box::new(self.rebalance(new_node)))
    }

    fn rebalance(&self, mut node: AVLNode) -> AVLNode {
        let balance = Self::get_balance(&node);

        if balance > 1 {
            if Self::get_balance(&node.left) < 0 {
                node.left = Some(Box::new(self.left_rotate(node.left.take().unwrap())));
            }
            return self.right_rotate(node);
        }

        if balance < -1 {
            if Self::get_balance(&node.right) > 0 {
                node.right = Some(Box::new(self.right_rotate(node.right.take().unwrap())));
            }
            return self.left_rotate(node);
        }

        node
    }

    fn left_rotate(&self, mut y: AVLNode) -> AVLNode {
        let x = y.right.take().unwrap();
        let t2 = x.left.take();

        y.right = Some(x);
        x.left = Some(Box::new(y));

        y.height = 1 + max(Self::height(&y.left), Self::height(&y.right));
        x.height = 1 + max(Self::height(&x.left), Self::height(&x.right));

        x.into_inner()
    }

    fn right_rotate(&self, mut x: AVLNode) -> AVLNode {
        let y = x.left.take().unwrap();
        let t2 = y.right.take();

        x.left = Some(y);
        y.right = Some(Box::new(x));

        x.height = 1 + max(Self::height(&x.left), Self::height(&x.right));
        y.height = 1 + max(Self::height(&y.left), Self::height(&y.right));

        y.into_inner()
    }

    fn height(node: &Option<Box<AVLNode>>) -> i32 {
        node.as_ref().map_or(0, |n| n.height)
    }

    fn get_balance(node: &Option<Box<AVLNode>>) -> i32 {
        Self::height(&node.as_ref().map(|n| n.left.clone())) - Self::height(&node.as_ref().map(|n| n.right.clone()))
    }

    pub fn search(&self, node: &Option<Box<AVLNode>>, key: i32) -> Option<Box<AVLNode>> {
        match node {
            Some(n) if key == n.key => Some(n.clone()),
            Some(n) if key < n.key => self.search(&n.left, key),
            Some(n) => self.search(&n.right, key),
            _ => None,
        }
    }

    pub fn find_min(&self, node: &Option<Box<AVLNode>>) -> Option<Box<AVLNode>> {
        let mut current = node.as_ref().map(|n| n.clone());

        while let Some(n) = current {
            current = n.left.as_ref().map(|n| n.clone());
        }

        current
    }

    pub fn find_max(&self, node: &Option<Box<AVLNode>>) -> Option<Box<AVLNode>> {
        let mut current = node.as_ref().map(|n| n.clone());

        while let Some(n) = current {
            current = n.right.as_ref().map(|n| n.clone());
        }

        current
    }
}
