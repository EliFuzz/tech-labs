class LinkedList<T> {
  class Node<T> {
    constructor(public data: T, public next: Node<T> | null = null) {}
  }

  private head: Node<T> | null = null;

  prepend(data: T) {
    this.head = new Node(data, this.head);
  }

  insertBefore(value: T, data: T) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === value) {
      this.head = new Node(data, this.head);
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.data !== value) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = new Node(data, current.next);
    }
  }

  insertAfter(value: T, data: T) {
    let current = this.head;
    while (current !== null && current.data !== value) {
      current = current.next;
    }

    if (current !== null) {
      current.next = new Node(data, current.next);
    }
  }

  insertAt(index: number, data: T) {
    if (index < 0) {
      throw new Error("Index must be greater than or equal to 0");
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let current = this.head;
    let currentIndex = 0;
    while (current !== null && currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    if (current === null) {
      throw new Error("Index exceeds the size of the list");
    }

    current.next = new Node(data, current.next);
  }

  append(data: T) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(data);
    }
  }

  find(value: T): Node<T> | null {
    let current = this.head;
    while (current !== null && current.data !== value) {
      current = current.next;
    }
    return current;
  }

  deleteHead() {
    if (this.head !== null) {
      this.head = this.head.next;
    }
  }

  delete(value: T) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.data !== value) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  deleteLast() {
    if (this.head === null) {
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next?.next !== null) {
      current = current.next;
    }

    current.next = null;
  }

  reverse() {
    let prev: Node<T> | null = null;
    let current = this.head;
    let next: Node<T> | null = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
