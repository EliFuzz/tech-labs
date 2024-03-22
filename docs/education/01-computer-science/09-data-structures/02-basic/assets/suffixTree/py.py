class SuffixTree:
    def __init__(self, text):
        self.root = SuffixNode()
        self.text = text
        self.build_suffix_tree()

    def build_suffix_tree(self):
        n = len(self.text)
        for i in range(n):
            self._add_suffix(i, self.root)

    def _add_suffix(self, suffix_start, node):
        if suffix_start == len(self.text):
            return

        current_char = self.text[suffix_start]
        if current_char not in node.children:
            node.children[current_char] = SuffixNode()
            node.children[current_char].index = suffix_start
        else:
            existing_node = node.children[current_char]
            self._add_suffix(suffix_start + 1, existing_node)

    def insert(self, new_text):
        self.text += new_text
        n = len(self.text)
        for i in range(n - len(new_text), n):
            self._add_suffix(i, self.root)

    def search(self, pattern):
        current_node = self.root
        n = len(pattern)
        i = 0

        while i < n:
            char = pattern[i]
            if char in current_node.children:
                current_node = current_node.children[char]
                i += 1
            else:
                return False

        return True

    def delete(self, pattern):
        if self.search(pattern):
            self.text = self.text.replace(pattern, "", 1)
            self.root = SuffixNode()
            self.build_suffix_tree()

    def longest_common_substring(self):
        result = [0, 0]
        self._longest_common_substring_dfs(self.root, "", result)
        return self.text[result[0]:result[1]]

    def _longest_common_substring_dfs(self, node, current_suffix, result):
        if not node.children:
            return

        for child in node.children.values():
            new_suffix = current_suffix + self.text[child.index]

            if len(new_suffix) > result[1] - result[0]:
                result[0] = child.index - len(new_suffix) + 1
                result[1] = child.index + 1

            self._longest_common_substring_dfs(child, new_suffix, result)

    def substring_count(self, node=None):
        if node is None:
            node = self.root

        count = 1
        for child in node.children.values():
            count += self.substring_count(child)

        return count

    def pattern_matching(self, pattern, node=None):
        if node is None:
            node = self.root

        for i, char in enumerate(pattern):
            if char in node.children:
                node = node.children[char]
            else:
                return []

        return self._get_leaf_indices(node)

    def _get_leaf_indices(self, node):
        indices = []
        if not node.children:
            indices.append(node.index)

        for child in node.children.values():
            indices.extend(self._get_leaf_indices(child))

        return indices

    def traverse(self, node=None, depth=0):
        if node is None:
            node = self.root
        print("  " * depth + f"Node: {node.index}")
        for char, child in node.children.items():
            print("  " * (depth + 1) + f"Edge: {char}")
            self.traverse(child, depth + 2)
