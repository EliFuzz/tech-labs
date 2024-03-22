class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, item):
        self.queue.append(item)

    def peek(self):
        return self.queue[0] if self.queue else None

    def dequeue(self):
        return self.queue.pop(0) if self.queue else None
