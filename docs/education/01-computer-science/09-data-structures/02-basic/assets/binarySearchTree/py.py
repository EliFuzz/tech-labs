class BinarySearchTree:
    class Node:
        def __init__(self, key, left=None, right=None):
            self.key = key
            self.left = left
            self.right = right

    def __init__(self):
        self.root = None

    def insert(self, root, key):
        if root is None:
            return self.Node(key)

        if key < root.key:
            root.left = self.insert(root.left, key)
        elif key > root.key:
            root.right = self.insert(root.right, key)

        return root

    def search(self, root, key):
        if root is None or root.key == key:
            return root

        return self.search(root.left, key) if key < root.key else self.search(root.right, key)

    def find_min(self, root):
        current = root
        while current and current.left is not None:
            current = current.left
        return current

    def find_max(self, root):
        current = root
        while current and current.right is not None:
            current = current.right
        return current

    def find_successor(self, root, key):
        if root is None:
            return None

        current, successor = root, None

        while current is not None:
            if key < current.key:
                successor = current
                current = current.left
            else:
                current = current.right

        return successor

    def find_predecessor(self, root, key):
        if root is None:
            return None

        current, predecessor = root, None

        while current is not None:
            if key > current.key:
                predecessor = current
                current = current.right
            else:
                current = current.left

        return predecessor

    def delete_node(self, root, key):
        if root is None:
            return None

        if key < root.key:
            root.left = self.delete_node(root.left, key)
        elif key > root.key:
            root.right = self.delete_node(root.right, key)
        else:
            if root.left is None:
                return root.right
            elif root.right is None:
                return root.left

            successor = self.find_min(root.right)
            root.key = successor.key

            root.right = self.delete_node(root.right, successor.key)

        return root

    def bfs_recursive(self, root):
        if root is None:
            return

        queue = [root]
        self.bfs_helper(queue)

    def bfs_helper(self, queue):
        if not queue:
            return

        current = queue.pop(0)
        print(current.key)

        if current.left:
            queue.append(current.left)
        if current.right:
            queue.append(current.right)

        self.bfs_helper(queue)

    def bfs_iterative(self, root):
        if root is None:
            return

        queue = [root]

        while queue:
            current = queue.pop(0)
            print(current.key)

            if current.left:
                queue.append(current.left)
            if current.right:
                queue.append(current.right)

    def dfs_pre_order_recursive(self, root):
        if root is None:
            return

        print(root.key)
        self.dfs_pre_order_recursive(root.left)
        self.dfs_pre_order_recursive(root.right)

    def dfs_pre_order_iterative(self, root):
        if root is None:
            return

        stack = [root]

        while stack:
            current = stack.pop()
            print(current.key)

            if current.right:
                stack.append(current.right)
            if current.left:
                stack.append(current.left)

    def dfs_in_order_recursive(self, root):
        if root is None:
            return

        self.dfs_in_order_recursive(root.left)
        print(root.key)
        self.dfs_in_order_recursive(root.right)

    def dfs_in_order_iterative(self, root):
        if root is None:
            return

        stack = []
        current = root

        while current or stack:
            while current:
                stack.append(current)
                current = current.left

            current = stack.pop()
            print(current.key)
            current = current.right

    def dfs_post_order_recursive(self, root):
        if root is None:
            return

        self.dfs_post_order_recursive(root.left)
        self.dfs_post_order_recursive(root.right)
        print(root.key)

    def dfs_post_order_iterative(self, root):
        if root is None:
            return

        stack1 = []
        stack2 = []
        stack1.append(root)

        while stack1:
            current = stack1.pop()
            stack2.append(current)

            if current.left:
                stack1.append(current.left)
            if current.right:
                stack1.append(current.right)

        while stack2:
            print(stack2.pop().key)
