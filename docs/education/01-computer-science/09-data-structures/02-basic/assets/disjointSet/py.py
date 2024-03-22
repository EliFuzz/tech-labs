class DisjointSetItem:
    def __init__(self, value, key_callback=None):
        self.value = value
        self.key_callback = key_callback
        self.parent = None
        self.children = {}

    def get_key(self):
        if self.key_callback:
            return self.key_callback(self.value)
        return self.value

    def get_root(self):
        return self if self.is_root() else self.parent.get_root()

    def is_root(self):
        return self.parent is None

    def get_rank(self):
        if not self.get_children():
            return 0

        rank = 0
        for child in self.get_children():
            rank += 1
            rank += child.get_rank()

        return rank

    def get_children(self):
        return list(self.children.values())

    def set_parent(self, parent_item, force_setting_parent_child=True):
        self.parent = parent_item
        if force_setting_parent_child:
            parent_item.add_child(self)
        return self

    def add_child(self, child_item):
        self.children[child_item.get_key()] = child_item
        child_item.set_parent(self, False)
        return self


class DisjointSet:
    def __init__(self, key_callback=None):
        self.key_callback = key_callback
        self.items = {}

    def make_set(self, item_value):
        disjoint_set_item = DisjointSetItem(item_value, self.key_callback)

        if disjoint_set_item.get_key() not in self.items:
            self.items[disjoint_set_item.get_key()] = disjoint_set_item

        return self

    def find(self, item_value):
        template_disjoint_item = DisjointSetItem(item_value, self.key_callback)
        required_disjoint_item = self.items.get(template_disjoint_item.get_key())

        if not required_disjoint_item:
            return None

        return required_disjoint_item.get_root().get_key()

    def union(self, value_a, value_b):
        root_key_a = self.find(value_a)
        root_key_b = self.find(value_b)

        if root_key_a is None or root_key_b is None:
            raise ValueError("One or two values are not in sets")

        if root_key_a == root_key_b:
            return self

        root_a = self.items[root_key_a]
        root_b = self.items[root_key_b]

        if root_a.get_rank() < root_b.get_rank():
            root_b.add_child(root_a)
        else:
            root_a.add_child(root_b)

        return self

    def in_same_set(self, value_a, value_b):
        root_key_a = self.find(value_a)
        root_key_b = self.find(value_b)

        if root_key_a is None or root_key_b is None:
            raise ValueError("One or two values are not in sets")

        return root_key_a == root_key_b
