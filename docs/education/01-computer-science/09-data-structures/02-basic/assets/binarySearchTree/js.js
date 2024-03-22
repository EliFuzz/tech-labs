class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(root, key) {
    if (root === null) {
      return { key, left: null, right: null };
    }

    if (key < root.key) {
      root.left = this.insert(root.left, key);
    } else if (key > root.key) {
      root.right = this.insert(root.right, key);
    }

    return root;
  }

  search(root, key) {
    if (root === null || root.key === key) {
      return root;
    }

    return key < root.key
      ? this.search(root.left, key)
      : this.search(root.right, key);
  }

  findMin(root) {
    let current = root;
    while (current && current.left !== null) {
      current = current.left;
    }
    return current;
  }

  findMax(root) {
    let current = root;
    while (current && current.right !== null) {
      current = current.right;
    }
    return current;
  }

  findSuccessor(root, key) {
    if (root === null) {
      return null;
    }

    let current = root;
    let successor = null;

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

  findPredecessor(root, key) {
    if (root === null) {
      return null;
    }

    let current = root;
    let predecessor = null;

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

  deleteNode(root, key) {
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
      root.key = successor ? successor.key : 0;

      root.right = this.deleteNode(root.right, successor ? successor.key : 0);
    }

    return root;
  }

  bfsRecursive(root) {
    if (root === null) {
      return;
    }

    const queue = [root];

    this.bfsHelper(queue);
  }

  bfsHelper(queue) {
    if (queue.length === 0) {
      return;
    }

    const current = queue.shift();
    console.log(current.key);

    current.left && queue.push(current.left);
    current.right && queue.push(current.right);

    this.bfsHelper(queue);
  }

  bfsIterative(root) {
    if (root === null) {
      return;
    }

    const queue = [root];

    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.key);

      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
  }

  dfsPreOrderRecursive(root) {
    if (root === null) {
      return;
    }
    console.log(root.key);
    this.dfsPreOrderRecursive(root.left);
    this.dfsPreOrderRecursive(root.right);
  }

  dfsPreOrderIterative(root) {
    if (root === null) {
      return;
    }

    const stack = [root];

    while (stack.length > 0) {
      const current = stack.pop();
      console.log(current.key);

      current.right && stack.push(current.right);
      current.left && stack.push(current.left);
    }
  }

  dfsInOrderRecursive(root) {
    if (root === null) {
      return;
    }
    this.dfsInOrderRecursive(root.left);
    console.log(root.key);
    this.dfsInOrderRecursive(root.right);
  }

  dfsInOrderIterative(root) {
    if (root === null) {
      return;
    }

    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      console.log(current.key);
      current = current.right;
    }
  }

  dfsPostOrderRecursive(root) {
    if (root === null) {
      return;
    }
    this.dfsPostOrderRecursive(root.left);
    this.dfsPostOrderRecursive(root.right);
    console.log(root.key);
  }

  dfsPostOrderIterative(root) {
    if (root === null) {
      return;
    }

    const stack1 = [];
    const stack2 = [];
    stack1.push(root);

    while (stack1.length > 0) {
      const current = stack1.pop();
      stack2.push(current);

      current.left && stack1.push(current.left);
      current.right && stack1.push(current.right);
    }

    while (stack2.length > 0) {
      console.log(stack2.pop().key);
    }
  }
}
