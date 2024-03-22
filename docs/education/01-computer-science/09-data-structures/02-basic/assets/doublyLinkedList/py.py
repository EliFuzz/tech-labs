class Node:
    def __init__(self, value, next=None, previous=None):
        self.value = value
        self.next = next
        self.previous = previous

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def prepend(self, value):
        n = Node(value)
        if self.head is None:
            self.head = n
            self.tail = n
        else:
            n.previous = self.tail
            self.tail.next = n
            self.tail = n

    def append(self, value):
        n = Node(value)
        if self.head is None:
            self.head = n
            self.tail = n
        else:
            self.tail.next = n
            n.previous = self.tail
            self.tail = n

    def search(self, value):
        currentNode = self.head
        while currentNode is not None and currentNode.value != value:
            currentNode = currentNode.next
        return currentNode

    def deleteHead(self):
        if self.head is None:
            return None

        deletedHead = self.head

        if self.head.next is not None:
            self.head = self.head.next
            self.head.previous = None
        else:
            self.tail = None
            self.head = None

        return deletedHead

    def deleteNode(self, value):
        current = self.head

        while current is not None:
            if current.value == value:
                if current == self.head:
                    self.head = current.next
                    if self.head is not None:
                        self.head.previous = None
                else:
                    current.previous.next = current.next
                    if current.next is not None:
                        current.next.previous = current.previous
                return
            current = current.next

    def deleteLast(self):
        if self.tail is None:
            print("The list is empty!")
            return

        if self.head == self.tail:
            self.head = None
            self.tail = None
            return

        prevNode = self.tail.previous
        if prevNode is not None:
            prevNode.next = None
        self.tail = prevNode

    def reverse(self):
        currentNode = self.head
        previousNode = None
        nextNode = None

        while currentNode is not None:
            nextNode = currentNode.next
            previousNode = currentNode.previous

            currentNode.next = previousNode
            currentNode.previous = nextNode

            previousNode = currentNode
            currentNode = nextNode

        self.tail = self.head
        self.head = previousNode

    def traversal(self):
        current = self.head
        while current is not None:
            print(current.value)
            current = current.next

    def reverseTraversal(self):
        current = self.tail
        while current is not None:
            print(current.value)
            current = current.previous
