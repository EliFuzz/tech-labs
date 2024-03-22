use std::collections::HashMap;

struct HashTable {
    table: HashMap<String, Box<dyn Any>>,
}

impl HashTable {
    fn new() -> Self {
        HashTable {
            table: HashMap::new(),
        }
    }

    fn insert(&mut self, key: String, value: Box<dyn Any>) {
        self.table.insert(key, value);
    }

    fn search(&self, key: &str) -> Option<&dyn Any> {
        self.table.get(key).map(|value| value.as_ref())
    }

    fn delete(&mut self, key: &str) {
        self.table.remove(key);
    }
}
