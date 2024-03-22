class Queue<T> {
  private queue: T[] = [];

  enqueue(item: T): void {
    this.queue.push(item);
  }

  peek(): T | undefined {
    return this.queue[0];
  }

  dequeue(): T | undefined {
    return this.queue.shift();
  }
}
