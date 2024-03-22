class RedBlackTree {
  enum Color {
    RED,
    BLACK
  }

  class Node {
    key: number;
    color: string;
    leftChild: Node | null;
    rightChild: Node | null;
    parent: Node | null;

    constructor(key: number, color: string, leftChild: Node | null = null, rightChild: Node | null = null, parent: Node | null = null) {
      this.key = key;
      this.color = color;
      this.leftChild = leftChild;
      this.rightChild = rightChild;
      this.parent = parent;
    }
  }

  root: Node | null = null;

  insertRBTree(key: number): void {
    const newNode = new Node(key, Color.RED);
    let uncle: Node | null = null;
  let currentNode: Node | null = this.root;

  while (currentNode !== null) {
    uncle = currentNode;
    if (newNode.key < currentNode.key) {
      currentNode = currentNode.leftChild;
    } else {
      currentNode = currentNode.rightChild;
    }
  }

  newNode.parent = uncle;
  if (uncle === null) {
    this.root = newNode;
  } else if (newNode.key < uncle.key) {
    uncle.leftChild = newNode;
  } else {
    uncle.rightChild = newNode;
  }

  this.insertFixup(newNode);
  if (this.root !== null) {
    this.root.color = Color.BLACK;
  }
  }

  private leftRotate(currentNode: Node): void {
    const uncle = currentNode.rightChild;
    if (uncle !== null) {
    currentNode.rightChild = uncle.leftChild;
    if (uncle.leftChild !== null) {
      uncle.leftChild.parent = currentNode;
    }
    uncle.parent = currentNode.parent;

    if (currentNode.parent === null) {
      this.root = uncle;
    } else if (currentNode === currentNode.parent.leftChild) {
      currentNode.parent.leftChild = uncle;
    } else {
      currentNode.parent.rightChild = uncle;
    }

    uncle.leftChild = currentNode;
    currentNode.parent = uncle;
  }
  }

  private rightRotate(uncle: Node): void {
    const currentNode = uncle.leftChild;
    if (currentNode !== null) {
    uncle.leftChild = currentNode.rightChild;
    if (currentNode.rightChild !== null) {
      currentNode.rightChild.parent = uncle;
    }
    currentNode.parent = uncle.parent;

    if (uncle.parent === null) {
      this.root = currentNode;
    } else if (uncle === uncle.parent.leftChild) {
      uncle.parent.leftChild = currentNode;
    } else {
      uncle.parent.rightChild = currentNode;
    }

    currentNode.rightChild = uncle;
    uncle.parent = currentNode;
  }
  }

  private insertFixup(newNode: Node | null): void {
    let current = newNode;
    while (current?.parent !== null && current.parent.color === Color.RED) {
    if (current.parent === current.parent.parent?.leftChild) {
      const y = current.parent.parent?.rightChild;
      if (y !== null && y.color === Color.RED) {
        current.parent.color = Color.BLACK;
        y.color = Color.BLACK;
        if (current.parent.parent !== null) {
          current.parent.parent.color = Color.RED;
        }
        current = current.parent.parent;
      } else {
        if (current === current.parent.rightChild) {
          current = current.parent;
          this.leftRotate(current);
        }
        if (current.parent !== null) {
          current.parent.color = Color.BLACK;
        }
        if (current.parent?.parent !== null) {
          current.parent.parent.color = Color.RED;
          this.rightRotate(current.parent.parent);
        }
      }
    } else {
      const y = current.parent.parent?.leftChild;
      if (y !== null && y.color === Color.RED) {
        current.parent.color = Color.BLACK;
        y.color = Color.BLACK;
        if (current.parent.parent !== null) {
          current.parent.parent.color = Color.RED;
        }
        current = current.parent.parent;
      } else {
        if (current === current.parent.leftChild) {
          current = current.parent;
          this.rightRotate(current);
        }
        if (current.parent !== null) {
          current.parent.color = Color.BLACK;
        }
        if (current.parent?.parent !== null) {
          current.parent.parent.color = Color.RED;
          this.leftRotate(current.parent.parent);
        }
      }
    }
  }
  if (this.root !== null) {
    this.root.color = Color.BLACK;
  }
  }

  deleteRBTree(key: number): void {
    const nodeToDelete = this.search(this.root, key);
    if (nodeToDelete === null) {
    return;
  }

  let successor = nodeToDelete;
  let successorOriginalColor = successor.color;
  let successorChild: Node | null;

  if (nodeToDelete.leftChild === null) {
    successorChild = nodeToDelete.rightChild;
    this.transplant(nodeToDelete, nodeToDelete.rightChild);
  } else if (nodeToDelete.rightChild === null) {
    successorChild = nodeToDelete.leftChild;
    this.transplant(nodeToDelete, nodeToDelete.leftChild);
  } else {
    successor = this.findMinNode(nodeToDelete.rightChild);
    successorOriginalColor = successor.color;
    successorChild = successor.rightChild;

    if (successor.parent === nodeToDelete) {
      if (successorChild !== null) {
        successorChild.parent = successor;
      }
    } else {
      this.transplant(successor, successor.rightChild);
      if (successor.rightChild !== null) {
        successor.rightChild.parent = successor;
      }
      successor.rightChild = nodeToDelete.rightChild;
      if (successor.rightChild !== null) {
        successor.rightChild.parent = successor;
      }
    }

    this.transplant(nodeToDelete, successor);
    successor.leftChild = nodeToDelete.leftChild;
    if (successor.leftChild !== null) {
      successor.leftChild.parent = successor;
    }
    successor.color = nodeToDelete.color;
  }

  if (successorOriginalColor === Color.BLACK) {
    this.deleteFixup(successorChild);
  }
  }

  private search(root: Node | null, key: number): Node | null {
    let current = root;
    while (current !== null && current.key !== key) {
      if (key < current.key) {
        current = current.leftChild;
      } else {
        current = current.rightChild;
      }
    }
    return current;
  }

  private findMinNode(node: Node): Node {
    let current = node;
    while (current.leftChild !== null) {
      current = current.leftChild;
    }
    return current;
  }

  private transplant(parent: Node, child: Node | null): void {
    if (parent.parent === null) {
    this.root = child;
  } else if (parent === parent.parent.leftChild) {
    parent.parent.leftChild = child;
  } else {
    parent.parent.rightChild = child;
  }

  if (child !== null) {
    child.parent = parent.parent;
  }
  }

  private deleteFixup(currentNode: Node | null): void {
    let current = currentNode;
    while (current !== this.root && (current === null || current.color === Color.BLACK)) {
      if (current === current?.parent?.leftChild) {
        let currentNodeSibling = current.parent?.rightChild;
        if (currentNodeSibling?.color === Color.RED) {
          currentNodeSibling.color = Color.BLACK;
          if (current.parent !== null) {
            current.parent.color = Color.RED;
          }
          if (current.parent !== null) {
            this.leftRotate(current.parent);
          }
          currentNodeSibling = current.parent?.rightChild;
        }
        if (
            (currentNodeSibling?.leftChild === null || currentNodeSibling.leftChild.color === Color.BLACK) &&
            (currentNodeSibling.rightChild === null || currentNodeSibling.rightChild.color === Color.BLACK)
        ) {
          if (currentNodeSibling !== null) {
            currentNodeSibling.color = Color.RED;
          }
          current = current.parent;
        } else {
          if (currentNodeSibling?.rightChild === null || currentNodeSibling.rightChild.color === Color.BLACK) {
            if (currentNodeSibling?.leftChild !== null) {
              currentNodeSibling.leftChild.color = Color.BLACK;
            }
            if (currentNodeSibling !== null) {
              currentNodeSibling.color = Color.RED;
            }
            if (current.parent !== null) {
              this.rightRotate(current.parent);
            }
            currentNodeSibling = current.parent?.rightChild;
          }
          if (currentNodeSibling !== null) {
            currentNodeSibling.color = current.parent?.color || Color.BLACK;
          }
          if (current.parent !== null) {
            current.parent.color = Color.BLACK;
          }
          if (currentNodeSibling?.rightChild !== null) {
            currentNodeSibling.rightChild.color = Color.BLACK;
          }
          if (current.parent !== null) {
            this.leftRotate(current.parent);
          }
          current = this.root;
        }
      } else {
        let currentNodeSibling = current.parent?.leftChild;
        if (currentNodeSibling?.color === Color.RED) {
          currentNodeSibling.color = Color.BLACK;
          if (current.parent !== null) {
            current.parent.color = Color.RED;
          }
          if (current.parent !== null) {
            this.rightRotate(current.parent);
          }
          currentNodeSibling = current.parent?.leftChild;
        }
        if (
            (currentNodeSibling?.rightChild === null || currentNodeSibling.rightChild.color === Color.BLACK) &&
            (currentNodeSibling.leftChild === null || currentNodeSibling.leftChild.color === Color.BLACK)
        ) {
          if (currentNodeSibling !== null) {
            currentNodeSibling.color = Color.RED;
          }
          current = current.parent;
        } else {
          if (currentNodeSibling?.leftChild === null || currentNodeSibling.leftChild.color === Color.BLACK) {
            if (currentNodeSibling?.rightChild !== null) {
              currentNodeSibling.rightChild.color = Color.BLACK;
            }
            if (currentNodeSibling !== null) {
              currentNodeSibling.color = Color.RED;
            }
            if (current.parent !== null) {
              this.leftRotate(current.parent);
            }
            currentNodeSibling = current.parent?.leftChild;
          }
          if (currentNodeSibling !== null) {
            currentNodeSibling.color = current.parent?.color || Color.BLACK;
          }
          if (current.parent !== null) {
            current.parent.color = Color.BLACK;
          }
          if (currentNodeSibling?.leftChild !== null) {
            currentNodeSibling.leftChild.color = Color.BLACK;
          }
          if (current.parent !== null) {
            this.rightRotate(current.parent);
          }
          current = this.root;
        }
    }
  }
  if (current !== null) {
    current.color = Color.BLACK;
  }
  }
}
