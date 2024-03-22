class Trie:
    class TrieNode:
        def __init__(self):
            self.children = {}
            self.is_end_of_word = False

    def __init__(self):
        self.root = self.TrieNode()

    def add_word(self, word):
        current_node = self.root
        for char in word:
            current_node = current_node.children.setdefault(char, self.TrieNode())
        current_node.is_end_of_word = True

    def delete_word(self, word):
        self.depth_first_delete(self.root, word, 0)

    def depth_first_delete(self, current_node, word, index):
        if current_node is None:
            return False

        if index == len(word):
            if not current_node.is_end_of_word:
                return False
            current_node.is_end_of_word = False
            return len(current_node.children) == 0

        char = word[index]
        next_node = current_node.children.get(char)

        if not next_node:
            return False

        should_delete_current_node = self.depth_first_delete(next_node, word, index + 1)

        if should_delete_current_node:
            del current_node.children[char]
            return len(current_node.children) == 0

        return False

    def depth_first_delete_iterative(self, word):
        current_node = self.root
        index = 0
        nodes_stack = []

        while index < len(word):
            char = word[index]
            next_node = current_node.children.get(char)

            if not next_node:
                return

            nodes_stack.append((current_node, index))
            current_node = next_node
            index += 1

        current_node.is_end_of_word = False

        while nodes_stack:
            parent_node, parent_index = nodes_stack.pop()

            if not current_node.children and not current_node.is_end_of_word:
                del parent_node.children[word[parent_index]]

            current_node = parent_node

    def suggest_next_characters(self, prefix):
        last_node = self.get_last_character_node(prefix)
        suggestions = []
        if last_node:
            self.suggest_next_characters_recursive(last_node, prefix, suggestions)
        return suggestions

    def suggest_next_characters_recursive(self, node, current_prefix, suggestions):
        if node.is_end_of_word:
            suggestions.append(current_prefix[-1])

        for char, child_node in node.children.items():
            self.suggest_next_characters_recursive(child_node, current_prefix + char, suggestions)

    def suggest_next_characters_iterative(self, prefix):
        suggestions = []
        current_node = self.root
        current_prefix = ""

        for char in prefix:
            if char not in current_node.children:
                return suggestions
            current_node = current_node.children[char]
            current_prefix += char

        stack = [(current_node, current_prefix)]

        while stack:
            node, current = stack.pop()

            if node.is_end_of_word:
                suggestions.append(current[-1])

            for char, child_node in node.children.items():
                stack.append((child_node, current + char))

        return suggestions

    def does_word_exist(self, word):
        last_node = self.get_last_character_node(word)
        return last_node and last_node.is_end_of_word

    def get_last_character_node(self, prefix):
        current_node = self.root
        for char in prefix:
            if char not in current_node.children:
                return None
            current_node = current_node.children[char]
        return current_node

    def starts_with(self, prefix):
        return self.get_last_character_node(prefix) is not None
