class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  peek() {
    return this.queue.length > 0 ? this.queue[0] : null;
  }

  dequeue() {
    return this.queue.length > 0 ? this.queue.shift() : null;
  }
}
