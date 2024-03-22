struct BloomFilter {
    size: usize,
    storage: Vec<bool>,
}

impl BloomFilter {
    fn new(size: usize) -> Self {
        BloomFilter {
            size,
            storage: vec![false; size],
        }
    }

    fn insert(&mut self, item: &str) {
        let hash_values = self.get_hash_values(item);
        for val in hash_values {
            self.storage[val] = true;
        }
    }

    fn may_contain(&self, item: &str) -> bool {
        let hash_values = self.get_hash_values(item);
        for &hash_index in &hash_values {
            if !self.storage[hash_index] {
                return false;
            }
        }
        true
    }

    fn create_store(&self) -> Vec<bool> {
        vec![false; self.size]
    }

    fn first_hash(&self, item: &str) -> usize {
        let mut hash = 0;
        for char in item.chars() {
            let char_code = char as usize;
            hash = (hash << 5) + hash + char_code;
            hash &= hash;
            hash = hash.abs();
        }
        hash % self.size
    }

    fn second_hash(&self, item: &str) -> usize {
        let mut hash = 5381;
        for char in item.chars() {
            let char_code = char as usize;
            hash = (hash << 5) + hash + char_code;
        }
        hash.abs() % self.size
    }

    fn third_hash(&self, item: &str) -> usize {
        let mut hash = 0;
        for char in item.chars() {
            let char_code = char as usize;
            hash = (hash << 5) - hash;
            hash += char_code;
            hash &= hash;
        }
        hash.abs() % self.size
    }

    fn get_hash_values(&self, item: &str) -> Vec<usize> {
        vec![
            self.first_hash(item),
            self.second_hash(item),
            self.third_hash(item),
        ]
    }
}
