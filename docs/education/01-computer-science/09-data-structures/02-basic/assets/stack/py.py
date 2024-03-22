class Stack:
    def __init__(self):
        self.elements = []

    def push(self, item):
        self.elements.append(item)

    def pop(self):
        if len(self.elements) > 0:
            return self.elements.pop()
        return None

    def peek(self):
        if len(self.elements) > 0:
            return self.elements[-1]
        return None
