class Node {
  key: number;
  left: Node | null;
  right: Node | null;

  constructor(
    key: number,
    left: Node | null = null,
    right: Node | null = null,
  ) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  insert(root: Node | null, key: number): Node {
    if (root === null) {
      return new Node(key);
    }

    if (key < root.key) {
      root.left = this.insert(root.left, key);
    } else if (key > root.key) {
      root.right = this.insert(root.right, key);
    }

    return root;
  }

  search(root: Node | null, key: number): Node | null {
    if (root === null || root.key === key) {
      return root;
    }

    return key < root.key
      ? this.search(root.left, key)
      : this.search(root.right, key);
  }

  findMin(root: Node | null): Node | null {
    let current = root;
    while (current?.left !== null) {
      current = current.left;
    }
    return current;
  }

  findMax(root: Node | null): Node | null {
    let current = root;
    while (current?.right !== null) {
      current = current.right;
    }
    return current;
  }

  findSuccessor(root: Node | null, key: number): Node | null {
    if (root === null) {
      return null;
    }

    let current: Node | null = root;
    let successor: Node | null = null;

    while (current !== null) {
      if (key < current.key) {
        successor = current;
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return successor;
  }

  findPredecessor(root: Node | null, key: number): Node | null {
    if (root === null) {
      return null;
    }

    let current: Node | null = root;
    let predecessor: Node | null = null;

    while (current !== null) {
      if (key > current.key) {
        predecessor = current;
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return predecessor;
  }

  deleteNode(root: Node | null, key: number): Node | null {
    if (root === null) {
      return null;
    }

    if (key < root.key) {
      root.left = this.deleteNode(root.left, key);
    } else if (key > root.key) {
      root.right = this.deleteNode(root.right, key);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      const successor = this.findMin(root.right);
      root.key = successor?.key || 0;

      root.right = this.deleteNode(root.right, successor?.key || 0);
    }

    return root;
  }

  bfsRecursive(root: Node | null): void {
    if (root === null) {
      return;
    }

    const queue: (Node | null)[] = [root];
    this.bfsHelper(queue);
  }

  bfsIterative(root: Node | null): void {
    if (root === null) {
      return;
    }

    const queue: (Node | null)[] = [root];

    while (queue.length > 0) {
      const current = queue.shift();
      if (current !== undefined) {
        console.log(current.key);

        if (current.left !== null) {
          queue.push(current.left);
        }
        if (current.right !== null) {
          queue.push(current.right);
        }
      }
    }
  }

  dfsPreOrderRecursive(root: Node | null): void {
    if (root === null) {
      return;
    }

    console.log(root.key);
    this.dfsPreOrderRecursive(root.left);
    this.dfsPreOrderRecursive(root.right);
  }

  dfsPreOrderIterative(root: Node | null): void {
    if (root === null) {
      return;
    }

    const stack: (Node | null)[] = [root];

    while (stack.length > 0) {
      const current = stack.pop();
      if (current !== undefined) {
        console.log(current.key);

        if (current.right !== null) {
          stack.push(current.right);
        }
        if (current.left !== null) {
          stack.push(current.left);
        }
      }
    }
  }

  dfsInOrderRecursive(root: Node | null): void {
    if (root === null) {
      return;
    }

    this.dfsInOrderRecursive(root.left);
    console.log(root.key);
    this.dfsInOrderRecursive(root.right);
  }

  dfsInOrderIterative(root: Node | null): void {
    if (root === null) {
      return;
    }

    const stack: (Node | null)[] = [];
    let current: Node | null = root;

    while (current !== null || stack.length > 0) {
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      if (current !== undefined) {
        console.log(current.key);
        current = current.right;
      }
    }
  }

  dfsPostOrderRecursive(root: Node | null): void {
    if (root === null) {
      return;
    }

    this.dfsPostOrderRecursive(root.left);
    this.dfsPostOrderRecursive(root.right);
    console.log(root.key);
  }

  dfsPostOrderIterative(root: Node | null): void {
    if (root === null) {
      return;
    }

    const stack1: (Node | null)[] = [];
    const stack2: (Node | null)[] = [];
    stack1.push(root);

    while (stack1.length > 0) {
      const current = stack1.pop();
      if (current !== undefined) {
        stack2.push(current);

        if (current.left !== null) {
          stack1.push(current.left);
        }
        if (current.right !== null) {
          stack1.push(current.right);
        }
      }
    }

    while (stack2.length > 0) {
      const current = stack2.pop();
      if (current !== undefined) {
        console.log(current.key);
      }
    }
  }

  private bfsHelper(queue: (Node | null)[]): void {
    if (queue.length === 0) {
      return;
    }

    const current = queue.shift();
    if (current !== undefined) {
      console.log(current.key);

      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }

      this.bfsHelper(queue);
    }
  }
}
