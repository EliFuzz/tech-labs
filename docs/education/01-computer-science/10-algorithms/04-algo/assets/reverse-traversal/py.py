class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_traversal(head):
    if head is None:
        return
    reverse_traversal(head.next)
    print(head.val)
