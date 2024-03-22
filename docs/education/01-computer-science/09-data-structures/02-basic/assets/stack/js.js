class Stack {
  constructor() {
    this.elements = [];
  }

  push(item) {
    this.elements.push(item);
  }

  pop() {
    if (this.elements.length !== 0) {
      return this.elements.pop();
    }
    return null;
  }

  peek() {
    if (this.elements.length !== 0) {
      return this.elements[this.elements.length - 1];
    }
    return null;
  }
}
