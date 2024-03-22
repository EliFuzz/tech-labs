use std::collections::HashMap;

struct TrieNode {
    children: HashMap<char, TrieNode>,
    is_end_of_word: bool,
}

impl TrieNode {
    fn new() -> TrieNode {
        TrieNode {
            children: HashMap::new(),
            is_end_of_word: false,
        }
    }
}

pub struct Trie {
    root: TrieNode,
}

impl Trie {
    pub fn new() -> Trie {
        Trie { root: TrieNode::new() }
    }

    pub fn add_word(&mut self, word: &str) {
        let mut current_node = &mut self.root;
        for char in word.chars() {
            current_node = current_node.children.entry(char).or_insert(TrieNode::new());
        }
        current_node.is_end_of_word = true;
    }

    pub fn delete_word(&mut self, word: &str) {
        self.depth_first_delete(&mut self.root, word, 0);
    }

    fn depth_first_delete(&mut self, current_node: &mut TrieNode, word: &str, index: usize) -> bool {
        if index == word.len() {
            if !current_node.is_end_of_word {
                return false;
            }
            current_node.is_end_of_word = false;
            return current_node.children.is_empty();
        }

        let char = word.chars().nth(index).unwrap();
        let next_node = current_node.children.get_mut(&char);

        if let Some(next_node) = next_node {
            let should_delete_current_node = self.depth_first_delete(next_node, word, index + 1);

            if should_delete_current_node {
                current_node.children.remove(&char);
                return current_node.children.is_empty();
            }
        }

        false
    }

    pub fn depth_first_delete_iterative(&mut self, word: &str) {
        let mut current_node = &mut self.root;
        let mut index = 0;
        let mut nodes_stack: Vec<(&mut TrieNode, usize)> = Vec::new();

        while index < word.len() {
            if let Some(char) = word.chars().nth(index) {
                let next_node = current_node.children.get_mut(&char);

                if let Some(next_node) = next_node {
                    nodes_stack.push((current_node, index));
                    current_node = next_node;
                    index += 1;
                } else {
                    return;
                }
            }
        }

        current_node.is_end_of_word = false;

        while let Some((parent_node, parent_index)) = nodes_stack.pop() {
            if current_node.children.is_empty() && !current_node.is_end_of_word {
                parent_node.children.remove(&word.chars().nth(parent_index).unwrap());
            }

            current_node = parent_node;
        }
    }

    pub fn suggest_next_characters(&self, prefix: &str) -> Vec<char> {
        let last_node = self.get_last_character_node(prefix);
        let mut suggestions = Vec::new();
        if let Some(last_node) = last_node {
            self.suggest_next_characters_recursive(&last_node, prefix, &mut suggestions);
        }
        suggestions
    }

    fn suggest_next_characters_recursive(&self, node: &TrieNode, current_prefix: &str, suggestions: &mut Vec<char>) {
        if node.is_end_of_word {
            suggestions.push(current_prefix.chars().last().unwrap());
        }

        for (char, child_node) in &node.children {
            self.suggest_next_characters_recursive(child_node, &(current_prefix.to_owned() + char), suggestions);
        }
    }

    pub fn suggest_next_characters_iterative(&self, prefix: &str) -> Vec<char> {
        let mut suggestions = Vec::new();
        let mut current_node = &self.root;
        let mut current_prefix = String::new();

        for char in prefix.chars() {
            if let Some(next_node) = current_node.children.get(&char) {
                current_node = next_node;
                current_prefix.push(char);
            } else {
                return suggestions;
            }
        }

        let mut stack: Vec<(&TrieNode, String)> = Vec::new();
        stack.push((current_node, current_prefix.clone()));

        while let Some((node, current)) = stack.pop() {
            if node.is_end_of_word {
                suggestions.push(current.chars().last().unwrap());
            }

            for (char, child_node) in &node.children {
                stack.push((child_node, current.clone() + char));
            }
        }

        suggestions
    }

    pub fn does_word_exist(&self, word: &str) -> bool {
        let last_node = self.get_last_character_node(word);
        last_node.map_or(false, |node| node.is_end_of_word)
    }

    fn get_last_character_node(&self, prefix: &str) -> Option<&TrieNode> {
        let mut current_node = &self.root;
        for char in prefix.chars() {
            if let Some(next_node) = current_node.children.get(&char) {
                current_node = next_node;
            } else {
                return None;
            }
        }
        Some(current_node)
    }

    pub fn starts_with(&self, prefix: &str) -> bool {
        self.get_last_character_node(prefix).is_some()
    }
}
