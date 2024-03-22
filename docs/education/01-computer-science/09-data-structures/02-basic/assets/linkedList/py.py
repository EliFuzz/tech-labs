class LinkedList:
    class Node:
        def __init__(self, data, next=None):
            self.data = data
            self.next = next

    def __init__(self):
        self.head = None

    def prepend(self, data):
        self.head = self.Node(data, self.head)

    def insert_before(self, value, data):
        if self.head is None:
            return

        if self.head.data == value:
            self.head = self.Node(data, self.head)
            return

        current = self.head
        while current.next is not None and current.next.data != value:
            current = current.next

        if current.next is not None:
            current.next = self.Node(data, current.next)

    def insert_after(self, value, data):
        current = self.head
        while current is not None and current.data != value:
            current = current.next

        if current is not None:
            current.next = self.Node(data, current.next)

    def insert_at(self, index, data):
        if index < 0:
            raise IndexError("Index must be greater than or equal to 0")

        if index == 0:
            self.head = self.Node(data, self.head)
            return

        current = self.head
        current_index = 0
        while current is not None and current_index < index - 1:
            current = current.next
            current_index += 1

        if current is None:
            raise IndexError("Index exceeds the size of the list")

        current.next = self.Node(data, current.next)

    def append(self, data):
        if self.head is None:
            self.head = self.Node(data)
        else:
            current = self.head
            while current.next is not None:
                current = current.next
            current.next = self.Node(data)

    def find(self, value):
        current = self.head
        while current is not None and current.data != value:
            current = current.next
        return current.data if current else None

    def delete_head(self):
        if self.head is not None:
            self.head = self.head.next

    def delete(self, value):
        if self.head is None:
            return

        if self.head.data == value:
            self.head = self.head.next
            return

        current = self.head
        while current.next is not None and current.next.data != value:
            current = current.next

        if current.next is not None:
            current.next = current.next.next

    def delete_last(self):
        if self.head is None:
            return

        if self.head.next is None:
            self.head = None
            return

        current = self.head
        while current.next.next is not None:
            current = current.next

        current.next = None

    def reverse(self):
        prev = None
        current = self.head
        while current is not None:
            next = current.next
            current.next = prev
            prev = current
            current = next
        self.head = prev

    def traverse(self):
        current = self.head
        while current is not None:
            print(current.data)
            current = current.next
