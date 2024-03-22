class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def traverse_list(head):
    current = head
    while current:
        print(current.data, end=' ')
        current = current.next
