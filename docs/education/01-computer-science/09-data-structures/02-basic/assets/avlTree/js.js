class AVLTree {
  static AVLNode = class {
    constructor(key, left = null, right = null, height = 1) {
      this.key = key;
      this.left = left;
      this.right = right;
      this.height = height;
    }
  };

  constructor() {
    this.root = null;
  }

  insert(node, key) {
    if (node === null) {
      return new AVLTree.AVLNode(key);
    }

    if (key < node.key) {
      node.left = this.insert(node.left, key);
    } else if (key > node.key) {
      node.right = this.insert(node.right, key);
    }

    node.height = 1 + this.max(this.height(node.left), this.height(node.right));

    return this.rebalance(node);
  }

  rebalance(node) {
    const balance = this.getBalance(node);

    if (balance > 1) {
      if (this.getBalance(node.left) < 0) {
        node.left = this.leftRotate(node.left);
      }
      return this.rightRotate(node);
    }

    if (balance < -1) {
      if (this.getBalance(node.right) > 0) {
        node.right = this.rightRotate(node.right);
      }
      return this.leftRotate(node);
    }

    return node || new AVLTree.AVLNode(0);
  }

  leftRotate(y) {
    const x = y.right;
    const T2 = x.left;

    x.left = y;
    y.right = T2;

    y.height = 1 + this.max(this.height(y.left), this.height(y.right));
    x.height = 1 + this.max(this.height(x.left), this.height(x.right));

    return x;
  }

  rightRotate(x) {
    const y = x.left;
    const T2 = y.right;

    y.right = x;
    x.left = T2;

    x.height = 1 + this.max(this.height(x.left), this.height(x.right));
    y.height = 1 + this.max(this.height(y.left), this.height(y.right));

    return y;
  }

  height(node) {
    return node ? node.height : 0;
  }

  getBalance(node) {
    return node ? this.height(node.left) - this.height(node.right) : 0;
  }

  search(node, key) {
    if (!node || key === node.key) {
      return node;
    }
    return key < node.key
      ? this.search(node.left, key)
      : this.search(node.right, key);
  }

  findMin(node) {
    let current = node;
    while (current && current.left) {
      current = current.left;
    }
    return current;
  }

  findMax(node) {
    let current = node;
    while (current && current.right) {
      current = current.right;
    }
    return current;
  }

  max(a, b) {
    return a > b ? a : b;
  }
}
