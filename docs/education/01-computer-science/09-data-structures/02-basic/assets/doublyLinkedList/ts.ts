class DoublyLinkedList<T> {
  class Node<T> {
    constructor(public value: T, public next: Node<T> | null = null, public previous: Node<T> | null = null) {}
  }

  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;

  prepend(value: T) {
    const n = new Node(value);
    if (this.head === null) {
      this.head = n;
      this.tail = n;
    } else {
      n.previous = this.tail;
      if (this.tail) this.tail.next = n;
      this.tail = n;
    }
  }

  append(value: T) {
    const n = new Node(value);
    if (this.head === null) {
      this.head = n;
      this.tail = n;
    } else {
      if (this.tail) this.tail.next = n;
      n.previous = this.tail;
      this.tail = n;
    }
  }

  search(value: T): Node<T> | null {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  deleteHead(): Node<T> | null {
    if (this.head === null) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next !== null) {
      this.head = this.head.next;
      if (this.head) this.head.previous = null;
    } else {
      this.tail = null;
      this.head = null;
    }

    return deletedHead;
  }

  deleteNode(value: T) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next;
          if (this.head) this.head.previous = null;
        } else {
          if (current.previous) current.previous.next = current.next;
          if (current.next) current.next.previous = current.previous;
        }
        return;
      }
      current = current.next;
    }
  }

  deleteLast() {
    if (this.tail === null) {
      console.log("The list is empty!");
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    const prevNode = this.tail.previous;
    if (prevNode) prevNode.next = null;
    this.tail = prevNode;
  }

  reverse() {
    let currentNode = this.head;
    let previousNode: Node<T> | null = null;
    let nextNode: Node<T> | null;

    while (currentNode !== null) {
      nextNode = currentNode.next;
      previousNode = currentNode.previous;

      currentNode.next = previousNode;
      currentNode.previous = nextNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = previousNode;
  }

  traversal() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  reverseTraversal() {
    let current = this.tail;
    while (current !== null) {
      console.log(current.value);
      current = current.previous;
    }
  }
}
