use std::collections::HashMap;

struct SuffixNode {
    children: HashMap<char, SuffixNode>,
    index: i32,
}

impl SuffixNode {
    fn new() -> Self {
        SuffixNode {
            children: HashMap::new(),
            index: -1,
        }
    }
}

struct SuffixTree {
    root: SuffixNode,
    text: String,
}

impl SuffixTree {
    fn new(text: &str) -> Self {
        let mut tree = SuffixTree {
            root: SuffixNode::new(),
            text: text.to_string(),
        };
        tree.build_suffix_tree();
        tree
    }

    fn build_suffix_tree(&mut self) {
        let n = self.text.len();
        for i in 0..n {
            self.add_suffix(i, &mut self.root);
        }
    }

    fn add_suffix(&mut self, suffix_start: usize, node: &mut SuffixNode) {
        if suffix_start == self.text.len() {
            return;
        }

        let current_char = self.text.chars().nth(suffix_start).unwrap();
        if !node.children.contains_key(&current_char) {
            node.children.insert(current_char, SuffixNode::new());
            if let Some(child) = node.children.get_mut(&current_char) {
                child.index = suffix_start as i32;
            }
        } else {
            if let Some(existing_node) = node.children.get_mut(&current_char) {
                self.add_suffix(suffix_start + 1, existing_node);
            }
        }
    }

    fn insert(&mut self, new_text: &str) {
        self.text.push_str(new_text);
        let n = self.text.len();
        for i in n - new_text.len()..n {
            self.add_suffix(i, &mut self.root);
        }
    }

    fn search(&self, pattern: &str) -> bool {
        let mut current_node = &self.root;
        let mut i = 0;

        while i < pattern.len() {
            if let Some(char) = pattern.chars().nth(i) {
                if let Some(child) = current_node.children.get(&char) {
                    current_node = child;
                    i += 1;
                } else {
                    return false;
                }
            }
        }

        true
    }

    fn delete(&mut self, pattern: &str) {
        if self.search(pattern) {
            self.text = self.text.replacen(pattern, "", 1);
            self.root = SuffixNode::new();
            self.build_suffix_tree();
        }
    }

    fn longest_common_substring(&self) -> String {
        let mut result = vec![0, 0];
        self.longest_common_substring_dfs(&self.root, "", &mut result);
        self.text[result[0] as usize..result[1] as usize].to_string()
    }

    fn longest_common_substring_dfs(&self, node: &SuffixNode, current_suffix: &str, result: &mut Vec<i32>) {
        if node.children.is_empty() {
            return;
        }

        for (_, child) in &node.children {
            let new_suffix = format!("{}{}", current_suffix, &self.text[child.index as usize..(child.index + 1) as usize]);

            if new_suffix.len() > (result[1] - result[0]) as usize {
                result[0] = child.index - new_suffix.len() as i32 + 1;
                result[1] = child.index + 1;
            }

            self.longest_common_substring_dfs(child, &new_suffix, result);
        }
    }

    fn substring_count(&self, node: Option<&SuffixNode>) -> i32 {
        let current_node = node.unwrap_or(&self.root);
        let mut count = 1;
        for (_, child) in &current_node.children {
            count += self.substring_count(Some(child));
        }
        count
    }

    fn pattern_matching(&self, pattern: &str, node: Option<&SuffixNode>) -> Vec<i32> {
        let mut current_node = node.unwrap_or(&self.root);
        let mut i = 0;

        for char in pattern.chars() {
            if let Some(child) = current_node.children.get(&char) {
                current_node = child;
            } else {
                return Vec::new();
            }
            i += 1;
        }

        self.get_leaf_indices(current_node)
    }

    fn get_leaf_indices(&self, node: &SuffixNode) -> Vec<i32> {
        let mut indices = Vec::new();
        if node.children.is_empty() {
            indices.push(node.index);
        }

        for (_, child) in &node.children {
            indices.extend(self.get_leaf_indices(child));
        }

        indices
    }

    fn traverse(&self, node: Option<&SuffixNode>, depth: i32) {
        let current_node = node.unwrap_or(&self.root);
        println!("{}Node: {}", "  ".repeat(depth as usize), current_node.index);
        for (char, child) in &current_node.children {
            println!("{}Edge: {}", "  ".repeat((depth + 1) as usize), char);
            self.traverse(Some(child), depth + 2);
        }
    }
}
