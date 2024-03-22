class LRUCacheOnMap:
    def __init__(self, capacity):
        self.capacity = capacity
        self.items = {}

    def get(self, key):
        if key not in self.items:
            return None
        val = self.items.pop(key)
        self.items[key] = val
        return val

    def set(self, key, val):
        if key in self.items:
            del self.items[key]
        self.items[key] = val
        if len(self.items) > self.capacity:
            head_key = next(iter(self.items))
            del self.items[head_key]


class LinkedListNode:
    def __init__(self, key, val, prev=None, next=None):
        self.key = key
        self.val = val
        self.prev = prev
        self.next = next


class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.nodes_map = {}
        self.size = 0
        self.head = LinkedListNode(None, None)
        self.tail = LinkedListNode(None, None)

    def get(self, key):
        if key not in self.nodes_map:
            return None
        node = self.nodes_map[key]
        self.promote(node)
        return node.val

    def set(self, key, val):
        if key in self.nodes_map:
            node = self.nodes_map[key]
            node.val = val
            self.promote(node)
        else:
            node = LinkedListNode(key, val)
            self.append(node)

    def promote(self, node):
        self.evict(node)
        self.append(node)

    def append(self, node):
        self.nodes_map[node.key] = node

        if not self.head.next:
            self.head.next = node
            self.tail.prev = node
            node.prev = self.head
            node.next = self.tail
        else:
            old_tail = self.tail.prev
            old_tail.next = node
            node.prev = old_tail
            node.next = self.tail
            self.tail.prev = node

        self.size += 1

        if self.size > self.capacity:
            self.evict(self.head.next)

    def evict(self, node):
        if node:
            del self.nodes_map[node.key]
            self.size -= 1

            prev_node = node.prev
            next_node = node.next

            if prev_node == self.head and next_node == self.tail:
                self.head.next = None
                self.tail.prev = None
                self.size = 0
                return

            if prev_node == self.head:
                next_node.prev = self.head
                self.head.next = next_node
                return

            if next_node == self.tail:
                prev_node.next = self.tail
                self.tail.prev = prev_node
                return

            prev_node.next = next_node
            next_node.prev = prev_node
