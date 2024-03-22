class Heap<T> {
  private comparator: (a: T, b: T) => number;
  private heap: T[];

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
    this.heap = [];
  }

  findMin(): T | null {
    return this.heap[0] || null;
  }

  findMax(): T | null {
    return this.heap[this.heap.length - 1] || null;
  }

  extractMin(): T | null {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop() || null;
    this.heapifyDown();

    return min;
  }

  extractMax(): T | null {
    if (this.heap.length === 0) return null;

    const max = this.heap.pop();
    this.heapifyDown();

    return max;
  }

  insert(element: T) {
    this.heap.push(element);
    this.heapifyUp();
  }

  increaseKey(index: number, newKey: T) {
    if (this.comparator(newKey, this.heap[index]) < 0) {
      throw new Error("New key must be greater than current key");
    }

    this.heap[index] = newKey;
    this.heapifyUp(index);
  }

  decreaseKey(index: number, newKey: T) {
    if (this.comparator(newKey, this.heap[index]) > 0) {
      throw new Error("New key must be less than current key");
    }

    this.heap[index] = newKey;
    this.heapifyDown(index);
  }

  meld(other: Heap<T>): Heap<T> {
    const mergedHeap = new Heap<T>(this.comparator);
    mergedHeap.heap = mergedHeap.heap.concat(this.heap, other.heap);

    for (let i = mergedHeap.heap.length / 2 - 1; i >= 0; i--) {
      mergedHeap.heapifyDown(i);
    }

    return mergedHeap;
  }

  private heapifyUp(index: number = this.heap.length - 1) {
    let currentIndex = index;
    const currentElement = this.heap[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = (currentIndex - 1) >> 1;
      const parent = this.heap[parentIndex];

      if (this.comparator(currentElement, parent) >= 0) break;

      this.heap[currentIndex] = parent;
      currentIndex = parentIndex;
    }

    this.heap[currentIndex] = currentElement;
  }

  private heapifyDown(index: number = 0) {
    let currentIndex = index;

    while (currentIndex < this.heap.length) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      const leftChild = this.heap[leftChildIndex];
      const rightChild = this.heap[rightChildIndex];

      let minChildIndex: number | null = null;

      if (leftChild !== undefined && rightChild !== undefined) {
        if (this.comparator(leftChild, rightChild) <= 0) {
          minChildIndex = leftChildIndex;
        } else {
          minChildIndex = rightChildIndex;
        }
      } else if (leftChild !== undefined) {
        minChildIndex = leftChildIndex;
      } else if (rightChild !== undefined) {
        minChildIndex = rightChildIndex;
      }

      if (minChildIndex === null) {
        break;
      }

      const minChild = this.heap[minChildIndex];
      if (this.comparator(minChild, this.heap[currentIndex]) >= 0) {
        break;
      }

      this.heap[currentIndex] = minChild;
      this.heap[minChildIndex] = this.heap[currentIndex];
      currentIndex = minChildIndex;
    }

    this.heap[currentIndex] = this.heap[index];
  }
}
