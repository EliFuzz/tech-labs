class Stack<T> {
  private elements: T[] = [];

  push(item: T): void {
    this.elements.push(item);
  }

  pop(): T | null {
    if (this.elements.length > 0) {
      return this.elements.pop();
    }
    return null;
  }

  peek(): T | null {
    return this.elements[this.elements.length - 1] || null;
  }
}
