class AVLTree:
    class AVLNode:
        def __init__(self, key, left=None, right=None, height=1):
            self.key = key
            self.left = left
            self.right = right
            self.height = height

    def __init__(self):
        self.root = None

    def insert(self, node, key):
        if node is None:
            return self.AVLNode(key)

        if key < node.key:
            node.left = self.insert(node.left, key)
        elif key > node.key:
            node.right = self.insert(node.right, key)

        node.height = 1 + max(self.height(node.left), self.height(node.right))

        return self.rebalance(node)

    def rebalance(self, node):
        balance = self.get_balance(node)

        if balance > 1:
            if self.get_balance(node.left) < 0:
                node.left = self.left_rotate(node.left)
            return self.right_rotate(node)

        if balance < -1:
            if self.get_balance(node.right) > 0:
                node.right = self.right_rotate(node.right)
            return self.left_rotate(node)

        return node or self.AVLNode(0)

    def left_rotate(self, y):
        x = y.right
        T2 = x.left

        x.left = y
        y.right = T2

        y.height = 1 + max(self.height(y.left), self.height(y.right))
        x.height = 1 + max(self.height(x.left), self.height(x.right))

        return x

    def right_rotate(self, x):
        y = x.left
        T2 = y.right

        y.right = x
        x.left = T2

        x.height = 1 + max(self.height(x.left), self.height(x.right))
        y.height = 1 + max(self.height(y.left), self.height(y.right))

        return y

    def height(self, node):
        return node.height if node else 0

    def get_balance(self, node):
        return self.height(node.left) - self.height(node.right) if node else 0

    def search(self, node, key):
        if not node or key == node.key:
            return node
        return self.search(node.left, key) if key < node.key else self.search(node.right, key)

    def find_min(self, node):
        current = node
        while current and current.left:
            current = current.left
        return current

    def find_max(self, node):
        current = node
        while current and current.right:
            current = current.right
        return current
