class AVLTree {
  data class AVLNode {
    key: number;
    left?: AVLNode;
    right?: AVLNode;
    height: number;

    constructor(key: number, left?: AVLNode, right?: AVLNode, height: number = 1) {
      this.key = key;
      this.left = left;
      this.right = right;
      this.height = height;
    }
  }

  root: AVLNode | undefined;

  insert(node: AVLNode | undefined, key: number): AVLNode {
    if (!node) {
      return new AVLNode(key);
    }

    if (key < node.key) {
      node.left = this.insert(node.left, key);
    } else if (key > node.key) {
      node.right = this.insert(node.right, key);
    }

    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    return this.rebalance(node);
  }

  private rebalance(node: AVLNode | undefined): AVLNode {
    const balance = this.getBalance(node);

    if (balance > 1) {
      if (this.getBalance(node?.left) < 0) {
        node?.left = this.leftRotate(node?.left);
      }
      return this.rightRotate(node!);
    }

    if (balance < -1) {
      if (this.getBalance(node?.right) > 0) {
        node?.right = this.rightRotate(node?.right);
      }
      return this.leftRotate(node!);
    }

    return node || new AVLNode(0);
  }

  private leftRotate(y: AVLNode): AVLNode {
    const x = y.right!;
    const T2 = x.left;

    x.left = y;
    y.right = T2;

    y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
    x.height = 1 + Math.max(this.height(x.left), this.height(x.right));

    return x;
  }

  private rightRotate(x: AVLNode): AVLNode {
    const y = x.left!;
    const T2 = y.right;

    y.right = x;
    x.left = T2;

    x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
    y.height = 1 + Math.max(this.height(y.left), this.height(y.right));

    return y;
  }

  private height(node: AVLNode | undefined): number {
    return node ? node.height : 0;
  }

  private getBalance(node: AVLNode | undefined): number {
    return this.height(node?.left) - this.height(node?.right);
  }

  search(node: AVLNode | undefined, key: number): AVLNode | undefined {
    if (!node || key === node.key) {
      return node;
    }
    return key < node.key ? this.search(node.left, key) : this.search(node.right, key);
  }

  findMin(node: AVLNode | undefined): AVLNode | undefined {
    let current = node;
    while (current?.left) {
      current = current.left;
    }
    return current;
  }

  findMax(node: AVLNode | undefined): AVLNode | undefined {
    let current = node;
    while (current?.right) {
      current = current.right;
    }
    return current;
  }
}
