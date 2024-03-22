class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  Node(value) {
    return { value: value, next: null, previous: null };
  }

  prepend(value) {
    const n = this.Node(value);
    if (this.head === null) {
      this.head = n;
      this.tail = n;
    } else {
      n.previous = this.tail;
      this.tail.next = n;
      this.tail = n;
    }
  }

  append(value) {
    const n = this.Node(value);
    if (this.head === null) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      n.previous = this.tail;
      this.tail = n;
    }
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  deleteHead() {
    if (this.head === null) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next !== null) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.tail = null;
      this.head = null;
    }

    return deletedHead;
  }

  deleteNode(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next;
          this.head.previous = null;
        } else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
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
    prevNode.next = null;
    this.tail = prevNode;
  }

  reverse() {
    let currentNode = this.head;
    let previousNode = null;
    let nextNode;

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
