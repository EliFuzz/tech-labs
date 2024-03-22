use std::collections::HashMap;

struct DisjointSetItem<T> {
    value: T,
    key_callback: Option<Box<dyn Fn(&T) -> String>>,
    parent: Option<Box<DisjointSetItem<T>>>,
    children: HashMap<String, Box<DisjointSetItem<T>>>,
}

impl<T> DisjointSetItem<T> {
    fn new(value: T, key_callback: Option<Box<dyn Fn(&T) -> String>>) -> Self {
        DisjointSetItem {
            value,
            key_callback,
            parent: None,
            children: HashMap::new(),
        }
    }

    fn get_key(&self) -> String {
        if let Some(callback) = &self.key_callback {
            callback(&self.value)
        } else {
            format!("{:?}", &self.value)
        }
    }

    fn get_root(&self) -> &DisjointSetItem<T> {
        if self.is_root() {
            self
        } else {
            self.parent.as_ref().unwrap().get_root()
        }
    }

    fn is_root(&self) -> bool {
        self.parent.is_none()
    }

    fn get_rank(&self) -> usize {
        if self.get_children().is_empty() {
            0
        } else {
            self.get_children().len() + self.get_children().iter().map(|child| child.get_rank()).sum::<usize>()
        }
    }

    fn get_children(&self) -> Vec<&DisjointSetItem<T>> {
        self.children.values().map(|child| child.as_ref()).collect()
    }

    fn set_parent(&mut self, parent_item: Box<DisjointSetItem<T>>, force_setting_parent_child: bool) {
        self.parent = Some(parent_item);
        if force_setting_parent_child {
            self.parent.as_mut().unwrap().add_child(Box::new(self.clone()));
        }
    }

    fn add_child(&mut self, child_item: Box<DisjointSetItem<T>>) {
        self.children.insert(child_item.get_key(), child_item);
    }
}

struct DisjointSet<T> {
    key_callback: Option<Box<dyn Fn(&T) -> String>>,
    items: HashMap<String, Box<DisjointSetItem<T>>>,
}

impl<T> DisjointSet<T> {
    fn new(key_callback: Option<Box<dyn Fn(&T) -> String>>) -> Self {
        DisjointSet {
            key_callback,
            items: HashMap::new(),
        }
    }

    fn make_set(&mut self, item_value: T) {
        let disjoint_set_item = Box::new(DisjointSetItem::new(item_value, self.key_callback.clone()));

        if !self.items.contains_key(&disjoint_set_item.get_key()) {
            self.items.insert(disjoint_set_item.get_key(), disjoint_set_item);
        }
    }

    fn find(&self, item_value: T) -> Option<String> {
        let template_disjoint_item = Box::new(DisjointSetItem::new(item_value, self.key_callback.clone()));
        if let Some(required_disjoint_item) = self.items.get(&template_disjoint_item.get_key()) {
            Some(required_disjoint_item.get_root().get_key())
        } else {
            None
        }
    }

    fn union(&mut self, value_a: T, value_b: T) -> Result<(), &'static str> {
        let root_key_a = self.find(value_a).ok_or("One or two values are not in sets")?;
        let root_key_b = self.find(value_b).ok_or("One or two values are not in sets")?;

        if root_key_a == root_key_b {
            return Ok(());
        }

        let root_a = self.items.get_mut(&root_key_a).unwrap();
        let root_b = self.items.get_mut(&root_key_b).unwrap();

        if root_a.get_rank() < root_b.get_rank() {
            root_b.add_child(Box::new(root_a.clone()));
        } else {
            root_a.add_child(Box::new(root_b.clone()));
        }

        Ok(())
    }

    fn in_same_set(&self, value_a: T, value_b: T) -> Result<bool, &'static str> {
        let root_key_a = self.find(value_a).ok_or("One or two values are not in sets")?;
        let root_key_b = self.find(value_b).ok_or("One or two values are not in sets")?;

        Ok(root_key_a == root_key_b)
    }
}
