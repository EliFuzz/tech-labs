class PriorityQueue<T> {
  private heap: Array<[T, number]> = [];

  enqueue(item: T, priority: number): void {
    this.heap.push([item, priority]);
    this.heapifyUp();
  }

  dequeue(): T | null {
    if (this.heap.length === 0) {
      return null;
    }
    const highestPriorityItem: T = this.heap[0][0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();
    return highestPriorityItem;
  }

  peek(): T | null {
    return this.heap.length === 0 ? null : this.heap[0][0];
  }

  changePriority(item: T, newPriority: number): void {
    const index = this.heap.findIndex(
      ([existingItem, _]) => existingItem === item,
    );
    if (index !== -1) {
      this.heap[index] = [item, newPriority];
      this.heapifyUp(index);
    }
  }

  findByValue(item: T): T | null {
    const index = this.heap.findIndex(
      ([existingItem, _]) => existingItem === item,
    );
    return index !== -1 ? this.heap[index][0] : null;
  }

  private heapifyUp(index: number = this.heap.length - 1): void {
    if (index === 0) {
      return;
    }
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex][1] < this.heap[index][1]) {
      this.swap(parentIndex, index);
      this.heapifyUp(parentIndex);
    }
  }

  private heapifyDown(): void {
    let index = 0;
    while (index < this.heap.length) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      const smallestIndex =
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex][1] < this.heap[index][1]
          ? leftChildIndex
          : rightChildIndex < this.heap.length &&
              this.heap[rightChildIndex][1] < this.heap[index][1]
            ? rightChildIndex
            : -1;

      if (smallestIndex !== -1) {
        this.swap(index, smallestIndex);
        index = smallestIndex;
      } else {
        break;
      }
    }
  }

  private swap(i: number, j: number): void {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}
