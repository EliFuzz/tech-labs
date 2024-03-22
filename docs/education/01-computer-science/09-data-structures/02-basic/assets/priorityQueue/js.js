class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(item, priority) {
    this.heap.push([item, priority]);
    this.heapifyUp();
  }

  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }
    const highestPriorityItem = this.heap[0][0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return highestPriorityItem;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0][0];
  }

  changePriority(item, newPriority) {
    const index = this.findIndexByItem(item);
    if (index !== -1) {
      this.heap[index][1] = newPriority;
      this.heapifyUp(index);
    }
  }

  findByValue(item) {
    const index = this.findIndexByItem(item);
    if (index !== -1) {
      return this.heap[index][0];
    }
    return null;
  }

  heapifyUp(index = this.heap.length - 1) {
    if (index === 0) {
      return;
    }
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex][1] < this.heap[index][1]) {
      this.swap(this.heap, parentIndex, index);
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown() {
    let index = 0;
    while (index < this.heap.length) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      const smallestIndex = this.findSmallestIndex(
        leftChildIndex,
        rightChildIndex,
      );
      if (smallestIndex === -1) {
        break;
      }
      this.swap(this.heap, index, smallestIndex);
      index = smallestIndex;
    }
  }

  swap(list, i, j) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }

  findIndexByItem(item) {
    for (let i = 0; i < this.heap.length; i++) {
      if (this.heap[i][0] === item) {
        return i;
      }
    }
    return -1;
  }

  findSmallestIndex(leftChildIndex, rightChildIndex) {
    if (leftChildIndex >= this.heap.length) {
      return -1;
    }
    if (rightChildIndex >= this.heap.length) {
      return leftChildIndex;
    }
    const leftPriority = this.heap[leftChildIndex][1];
    const rightPriority = this.heap[rightChildIndex][1];
    return leftPriority < rightPriority ? leftChildIndex : rightChildIndex;
  }
}
