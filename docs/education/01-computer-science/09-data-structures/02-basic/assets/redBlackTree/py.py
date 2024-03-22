class RedBlackTree:
    class Color:
        RED = "RED"
        BLACK = "BLACK"

    class Node:
        def __init__(self, key, color, left_child=None, right_child=None, parent=None):
            self.key = key
            self.color = color
            self.left_child = left_child
            self.right_child = right_child
            self.parent = parent

    def __init__(self):
        self.root = None

    def insert_rb_tree(self, key):
        new_node = self.Node(key, self.Color.RED)
        uncle = None
        current_node = self.root

        while current_node is not None:
            uncle = current_node
            if new_node.key < current_node.key:
                current_node = current_node.left_child
            else:
                current_node = current_node.right_child

        new_node.parent = uncle
        if uncle is None:
            self.root = new_node
        elif new_node.key < uncle.key:
            uncle.left_child = new_node
        else:
            uncle.right_child = new_node

        self._insert_fixup(new_node)
        if self.root is not None:
            self.root.color = self.Color.BLACK

    def _left_rotate(self, current_node):
        uncle = current_node.right_child
        current_node.right_child = uncle.left_child
        if uncle.left_child:
            uncle.left_child.parent = current_node
        uncle.parent = current_node.parent

        if current_node.parent is None:
            self.root = uncle
        elif current_node == current_node.parent.left_child:
            current_node.parent.left_child = uncle
        else:
            current_node.parent.right_child = uncle

        uncle.left_child = current_node
        current_node.parent = uncle

    def _right_rotate(self, uncle):
        current_node = uncle.left_child
        uncle.left_child = current_node.right_child
        if current_node.right_child:
            current_node.right_child.parent = uncle
        current_node.parent = uncle.parent

        if uncle.parent is None:
            self.root = current_node
        elif uncle == uncle.parent.left_child:
            uncle.parent.left_child = current_node
        else:
            uncle.parent.right_child = current_node

        current_node.right_child = uncle
        uncle.parent = current_node

    def _insert_fixup(self, new_node):
        current = new_node
        while current.parent is not None and current.parent.color == self.Color.RED:
            if current.parent == current.parent.parent.left_child:
                y = current.parent.parent.right_child
                if y and y.color == self.Color.RED:
                    current.parent.color = self.Color.BLACK
                    y.color = self.Color.BLACK
                    current.parent.parent.color = self.Color.RED
                    current = current.parent.parent
                else:
                    if current == current.parent.right_child:
                        current = current.parent
                        self._left_rotate(current)
                    current.parent.color = self.Color.BLACK
                    current.parent.parent.color = self.Color.RED
                    self._right_rotate(current.parent.parent)
            else:
                y = current.parent.parent.left_child
                if y and y.color == self.Color.RED:
                    current.parent.color = self.Color.BLACK
                    y.color = self.Color.BLACK
                    current.parent.parent.color = self.Color.RED
                    current = current.parent.parent
                else:
                    if current == current.parent.left_child:
                        current = current.parent
                        self._right_rotate(current)
                    current.parent.color = self.Color.BLACK
                    current.parent.parent.color = self.Color.RED
                    self._left_rotate(current.parent.parent)

        if self.root:
            self.root.color = self.Color.BLACK

    def delete_rb_tree(self, key):
        node_to_delete = self._search(self.root, key)
        if node_to_delete is None:
            return

        successor = node_to_delete
        successor_original_color = successor.color
        successor_child = None

        if node_to_delete.left_child is None:
            successor_child = node_to_delete.right_child
            self._transplant(node_to_delete, node_to_delete.right_child)
        elif node_to_delete.right_child is None:
            successor_child = node_to_delete.left_child
            self._transplant(node_to_delete, node_to_delete.left_child)
        else:
            successor = self._find_min_node(node_to_delete.right_child)
            successor_original_color = successor.color
            successor_child = successor.right_child

            if successor.parent == node_to_delete:
                if successor_child:
                    successor_child.parent = successor
            else:
                self._transplant(successor, successor.right_child)
                successor.right_child = node_to_delete.right_child
                if successor.right_child:
                    successor.right_child.parent = successor

            self._transplant(node_to_delete, successor)
            successor.left_child = node_to_delete.left_child
            if successor.left_child:
                successor.left_child.parent = successor
            successor.color = node_to_delete.color

        if successor_original_color == self.Color.BLACK:
            self._delete_fixup(successor_child)

    def _search(self, root, key):
        current = root
        while current and current.key != key:
            if key < current.key:
                current = current.left_child
            else:
                current = current.right_child
        return current

    def _find_min_node(self, node):
        current = node
        while current.left_child:
            current = current.left_child
        return current

    def _transplant(self, parent, child):
        if not parent.parent:
            self.root = child
        elif parent == parent.parent.left_child:
            parent.parent.left_child = child
        else:
            parent.parent.right_child = child

        if child:
            child.parent = parent.parent

    def _delete_fixup(self, current_node):
        current = current_node
        while current != self.root and (not current or current.color == self.Color.BLACK):
            if current == current.parent.left_child:
                current_sibling = current.parent.right_child
                if current_sibling and current_sibling.color == self.Color.RED:
                    current_sibling.color = self.Color.BLACK
                    current.parent.color = self.Color.RED
                    self._left_rotate(current.parent)
                    current_sibling = current.parent.right_child

                if (not current_sibling.left_child or current_sibling.left_child.color == self.Color.BLACK) and \
                        (not current_sibling.right_child or current_sibling.right_child.color == self.Color.BLACK):
                    if current_sibling:
                        current_sibling.color = self.Color.RED

                    current = current.parent
                else:
                    if not current_sibling.right_child or current_sibling.right_child.color == self.Color.BLACK:
                        if current_sibling.left_child:
                            current_sibling.left_child.color = self.Color.BLACK
                        if current_sibling:
                            current_sibling.color = self.Color.RED
                        self._right_rotate(current_sibling)
                        current_sibling = current.parent.right_child

                    if current_sibling:
                        current_sibling.color = current.parent.color
                    if current.parent:
                        current.parent.color = self.Color.BLACK
                    if current_sibling.right_child:
                        current_sibling.right_child.color = self.Color.BLACK

                    self._left_rotate(current.parent)
                    current = self.root
            else:
                current_sibling = current.parent.left_child
                if current_sibling and current_sibling.color == self.Color.RED:
                    current_sibling.color = self.Color.BLACK
                    current.parent.color = self.Color.RED
                    self._right_rotate(current.parent)
                    current_sibling = current.parent.left_child

                if (not current_sibling.right_child or current_sibling.right_child.color == self.Color.BLACK) and (not current_sibling.left_child or current_sibling.left_child.color == self.Color.BLACK):
                    if current_sibling:
                        current_sibling.color = self.Color.RED
                    current = current.parent
                else:
                    if not current_sibling.left_child or current_sibling.left_child.color == self.Color.BLACK:
                        if current_sibling.right_child:
                            current_sibling.right_child.color = self.Color.BLACK
                        if current_sibling:
                            current_sibling.color = self.Color.RED

                        self._left_rotate(current_sibling)
                        current_sibling = current.parent.left_child
                    if current_sibling:
                        current_sibling.color = current.parent.color
                    if current.parent:
                        current.parent.color = self.Color.BLACK
                    if current_sibling.left_child:
                        current_sibling.left_child.color = self.Color.BLACK

                    self._right_rotate(current.parent)
                    current = self.root
        if current:
            current.color = self.Color.BLACK
