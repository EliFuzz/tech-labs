class Heap {
  constructor(comparator) {
    this.comparator = comparator;
    this.heap = [];
  }

  findMin() {
    return this.heap[0] || null;
  }

  findMax() {
    return this.heap[this.heap.length - 1] || null;
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return min;
  }

  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }

    const max = this.heap.pop();
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heapifyDown();

    return max;
  }

  insert(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  increaseKey(index, newKey) {
    if (this.comparator(newKey, this.heap[index]) < 0) {
      throw new Error("New key must be greater than current key");
    }

    this.heap[index] = newKey;
    this.heapifyUp(index);
  }

  decreaseKey(index, newKey) {
    if (this.comparator(newKey, this.heap[index]) > 0) {
      throw new Error("New key must be less than current key");
    }

    this.heap[index] = newKey;
    this.heapifyDown(index);
  }

  meld(other) {
    const mergedHeap = new Heap(this.comparator);
    mergedHeap.heap = mergedHeap.heap.concat(this.heap, other.heap);

    for (let i = this.heap.length / 2 - 1; i >= 0; i--) {
      mergedHeap.heapifyDown(i);
    }

    return mergedHeap;
  }

  heapifyUp(index = this.heap.length - 1) {
    let currentIndex = index;
    const currentElement = this.heap[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parent = this.heap[parentIndex];

      if (this.comparator(currentElement, parent) >= 0) {
        break;
      }

      this.heap[currentIndex] = parent;
      currentIndex = parentIndex;
    }

    this.heap[currentIndex] = currentElement;
  }

  heapifyDown(index = 0) {
    let currentIndex = index;

    while (currentIndex < this.heap.length) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      const leftChild = this.heap[leftChildIndex];
      const rightChild = this.heap[rightChildIndex];

      const minChildIndex =
        leftChild == null || rightChild == null
          ? leftChild == null
            ? leftChildIndex
            : rightChildIndex
          : this.comparator(leftChild, rightChild) === -1
            ? leftChildIndex
            : rightChildIndex;

      if (
        minChildIndex == null ||
        this.comparator(this.heap[minChildIndex], this.heap[currentIndex]) >= 0
      ) {
        break;
      }

      const minChild = this.heap[minChildIndex];
      this.heap[currentIndex] = minChild;
      currentIndex = minChildIndex;
    }

    this.heap[currentIndex] = this.heap[index];
  }
}
