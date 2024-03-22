use std::cmp::Ord;

struct RedBlackTree {
    enum Color {
        RED,
        BLACK,
    }

    struct Node {
        key: i32,
        color: Color,
        left_child: Option<Box<Node>>,
        right_child: Option<Box<Node>>,
        parent: Option<Box<Node>>,
    }

    impl Node {
        fn new(key: i32, color: Color) -> Self {
            Node {
                key,
                color,
                left_child: None,
                right_child: None,
                parent: None,
            }
        }
    }

    impl RedBlackTree {
        root: Option<Box<Node>>,

        fn insert_rb_tree(&mut self, key: i32) {
            let new_node = Box::new(Node::new(key, Color::RED));
            let mut uncle: Option<Box<Node>> = None;
            let mut current_node = &mut self.root;

            while let Some(current) = current_node {
                uncle = Some(current);
                if new_node.key < current.key {
                    current_node = &mut current.left_child;
                } else {
                    current_node = &mut current.right_child;
                }
            }

            new_node.parent = uncle;
            if uncle.is_none() {
                self.root = Some(new_node);
            } else if new_node.key < uncle.unwrap().key {
                uncle.unwrap().left_child = Some(new_node);
            } else {
                uncle.unwrap().right_child = Some(new_node);
            }

            self.insert_fixup(Some(new_node));
            self.root.as_mut().map(|r| r.color = Color::BLACK);
        }

        fn left_rotate(&mut self, current_node: &mut Node) {
            let mut uncle = current_node.right_child.take();
            if let Some(ref mut uncle) = uncle {
                current_node.right_child = uncle.left_child.take();
                if let Some(left_child) = &mut uncle.left_child {
                    left_child.parent = Some(Box::new(current_node));
                }
                uncle.parent = current_node.parent.take();

                if current_node.parent.is_none() {
                    self.root = Some(uncle);
                } else if let Some(parent) = &mut current_node.parent {
                    if current_node.key < parent.key {
                        parent.left_child = Some(uncle);
                    } else {
                        parent.right_child = Some(uncle);
                    }
                }

                uncle.left_child = Some(Box::new(current_node));
                current_node.parent = Some(uncle);
            }
        }

        fn right_rotate(&mut self, uncle: &mut Node) {
            let mut current_node = uncle.left_child.take();
            if let Some(ref mut current_node) = current_node {
                uncle.left_child = current_node.right_child.take();
                if let Some(right_child) = &mut current_node.right_child {
                    right_child.parent = Some(Box::new(uncle));
                }
                current_node.parent = uncle.parent.take();

                if uncle.parent.is_none() {
                    self.root = current_node;
                } else if let Some(parent) = &mut uncle.parent {
                    if uncle.key < parent.key {
                        parent.left_child = current_node;
                    } else {
                        parent.right_child = current_node;
                    }
                }

                current_node.right_child = Some(Box::new(uncle));
                uncle.parent = current_node;
            }
        }

        fn insert_fixup(&mut self, new_node: Option<Box<Node>>) {
            let mut current = new_node;
            while let Some(ref mut current_node) = current {
                if let Some(ref parent) = current_node.parent {
                    if parent.color == Color::RED {
                        if parent == parent.parent.as_ref().and_then(|p| p.left_child.as_ref()) {
                            let y = parent.parent.as_ref().and_then(|p| p.right_child.as_ref());
                            if let Some(y) = y {
                                if y.color == Color::RED {
                                    parent.color = Color::BLACK;
                                    y.color = Color::BLACK;
                                    parent.parent.as_mut().map(|p| p.color = Color::RED);
                                    current = parent.parent;
                                } else {
                                    if current_node == parent.right_child.as_ref().and_then(|p| Some(p)) {
                                        current = Some(Box::new(parent));
                                        self.left_rotate(current_node);
                                    }
                                    parent.color = Color::BLACK;
                                    parent.parent.as_mut().map(|p| p.color = Color::RED);
                                    self.right_rotate(parent.parent.as_mut().and_then(|p| Some(p)).unwrap());
                                }
                            }
                        } else {
                            let y = parent.parent.as_ref().and_then(|p| p.left_child.as_ref());
                            if let Some(y) = y {
                                if y.color == Color::RED {
                                    parent.color = Color::BLACK;
                                    y.color = Color::BLACK;
                                    parent.parent.as_mut().map(|p| p.color = Color::RED);
                                    current = parent.parent;
                                } else {
                                    if current_node == parent.left_child.as_ref().and_then(|p| Some(p)) {
                                        current = Some(Box::new(parent));
                                        self.right_rotate(current_node);
                                    }
                                    parent.color = Color::BLACK;
                                    parent.parent.as_mut().map(|p| p.color = Color::RED);
                                    self.left_rotate(parent.parent.as_mut().and_then(|p| Some(p)).unwrap());
                                }
                            }
                        }
                    }
                }
            }
        }

        fn delete_rb_tree(&mut self, key: i32) {
            let node_to_delete = self.search(&self.root, key);
            if node_to_delete.is_none() {
                return;
            }

            let mut successor = node_to_delete.unwrap();
            let successor_original_color = successor.color;
            let mut successor_child: Option<Box<Node>>;

            if successor.left_child.is_none() {
                successor_child = successor.right_child.take();
                self.transplant(&successor, successor.right_child.as_mut());
            } else if successor.right_child.is_none() {
                successor_child = successor.left_child.take();
                self.transplant(&successor, successor.left_child.as_mut());
            } else {
                let min_node = self.find_min_node(successor.right_child.as_ref().and_then(|r| Some(r)));
                successor_original_color = min_node.color;
                successor_child = min_node.right_child.take();

                if let Some(ref parent) = min_node.parent {
                    if min_node.parent == &successor {
                        successor_child.as_mut().map(|child| child.parent = Some(Box::new(min_node)));
                    } else {
                        self.transplant(min_node.as_ref().and_then(|m| Some(m)), min_node.right_child.as_mut());
                        min_node.right_child = successor.right_child.take();
                        min_node.right_child.as_mut().map(|right| right.parent = Some(Box::new(min_node)));
                    }
                    self.transplant(&successor, Some(Box::new(min_node)));
                    min_node.left_child = successor.left_child.take();
                    min_node.left_child.as_mut().map(|left| left.parent = Some(Box::new(min_node)));
                    min_node.color = successor.color;
                }

                if successor_original_color == Color::BLACK {
                    self.delete_fixup(&successor_child);
                }
            }
        }

        fn search(&self, root: &Option<Box<Node>>, key: i32) -> Option<Box<Node>> {
            let mut current = root;
            while let Some(node) = current {
                if key < node.key {
                   current = &node.left_child;
               } else if key > node.key {
                   current = &node.right_child;
               } else {
                   return Some(Box::new(node.clone()));
               }
           }
           None
       }

       fn find_min_node(&self, mut node: Option<&Box<Node>>) -> &Box<Node> {
           while let Some(n) = node {
               node = n.left_child.as_ref();
           }
           node.unwrap()
       }

       fn transplant(&mut self, parent: &Node, child: Option<&mut Box<Node>>) {
           if parent.parent.is_none() {
               self.root = child.map(|c| c.clone());
           } else if let Some(parent_ref) = parent.parent.as_mut() {
               if parent == parent_ref.left_child.as_ref().map(|left| left.as_ref()) {
                   parent_ref.left_child = child.map(|c| c.clone());
               } else {
                   parent_ref.right_child = child.map(|c| c.clone());
               }
           }

           child.map(|c| c.parent = parent.parent.clone());
       }

       fn delete_fixup(&mut self, mut current_node: &Option<Box<Node>>) {
           while let Some(ref mut current) = *current_node {
               if current == &self.root.unwrap() {
                   break;
               }

               let mut current_sibling = current.parent.as_ref().and_then(|p| {
                   if current == p.left_child.as_ref().map(|left| left.as_ref()) {
                       p.right_child.as_ref().map(|right| right.as_ref())
                   } else {
                       p.left_child.as_ref().map(|left| left.as_ref())
                   }
               });

               if let Some(ref mut sibling) = current_sibling {
                   if sibling.color == Color::RED {
                       sibling.color = Color::BLACK;
                       current.parent.as_mut().map(|p| p.color = Color::RED);

                       if current == current.parent.as_ref().and_then(|p| p.left_child.as_ref().map(|left| left.as_ref())) {
                           self.left_rotate(current.parent.as_mut().unwrap());
                           current_sibling = current.parent.as_ref().and_then(|p| p.right_child.as_ref().map(|right| right.as_ref()));
                       } else {
                           self.right_rotate(current.parent.as_mut().unwrap());
                           current_sibling = current.parent.as_ref().and_then(|p| p.left_child.as_ref().map(|left| left.as_ref()));
                       }
                   }

                   if let (Some(ref left_child), Some(ref right_child)) =
                       (sibling.left_child.as_ref(), sibling.right_child.as_ref())
                   {
                       if left_child.color == Color::BLACK && right_child.color == Color::BLACK {
                           sibling.color = Color::RED;
                           current_node = &current.parent;
                       } else {
                           if current == current.parent.as_ref().and_then(|p| p.left_child.as_ref().map(|left| left.as_ref())) &&
                               right_child.color == Color::BLACK
                           {
                               left_child.color = Color::BLACK;
                               sibling.color = Color::RED;
                               self.right_rotate(sibling.as_mut().unwrap());
                               current_sibling = current.parent.as_ref().and_then(|p| p.right_child.as_ref().map(|right| right.as_ref()));
                           } else if current == current.parent.as_ref().and_then(|p| p.right_child.as_ref().map(|right| right.as_ref())) &&
                               left_child.color == Color::BLACK
                           {
                               right_child.color = Color::BLACK;
                               sibling.color = Color::RED;
                               self.left_rotate(sibling.as_mut().unwrap());
                               current_sibling = current.parent.as_ref().and_then(|p| p.left_child.as_ref().map(|left| left.as_ref()));
                           }

                           if let Some(ref mut sibling) = current_sibling {
                               sibling.color = current.parent.as_ref().map(|p| p.color).unwrap();
                               current.parent.as_mut().map(|p| p.color = Color::BLACK);
                               if current == current.parent.as_ref().and_then(|p| p.left_child.as_ref().map(|left| left.as_ref())) {
                                   right_child.color = Color::BLACK;
                                   self.left_rotate(current.parent.as_mut().unwrap());
                               } else {
                                   left_child.color = Color::BLACK;
                                   self.right_rotate(current.parent.as_mut().unwrap());
                               }
                           }

                           current_node = &self.root;
                       }
                   }
               }
           }

           if let Some(ref mut current) = *current_node {
               current.color = Color::BLACK;
           }
       }
   }
}
