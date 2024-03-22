public class RedBlackTree {

  enum Color {
    RED,
    BLACK
  }

  public static class Node {

    int key;
    String color;
    Node leftChild;
    Node rightChild;
    Node parent;

    public Node(int key, String color) {
      this.key = key;
      this.color = color;
    }
  }

  private Node root;

  public void insertRBTree(int key) {
    Node newNode = new Node(key, Color.RED.toString());
    Node uncle = null;
    Node currentNode = root;

    while (currentNode != null) {
      uncle = currentNode;
      if (newNode.key < currentNode.key) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }

    newNode.parent = uncle;
    if (uncle == null) {
      root = newNode;
    } else if (newNode.key < uncle.key) {
      uncle.leftChild = newNode;
    } else {
      uncle.rightChild = newNode;
    }

    insertFixup(newNode);
    root.color = Color.BLACK.toString();
  }

  private void leftRotate(Node currentNode) {
    Node uncle = currentNode.rightChild;
    currentNode.rightChild = uncle != null ? uncle.leftChild : null;
    if (uncle != null && uncle.leftChild != null) {
      uncle.leftChild.parent = currentNode;
    }
    if (uncle != null) {
      uncle.parent = currentNode.parent;
    }

    if (currentNode.parent == null) {
      root = uncle;
    } else if (currentNode == currentNode.parent.leftChild) {
      currentNode.parent.leftChild = uncle;
    } else {
      currentNode.parent.rightChild = uncle;
    }

    if (uncle != null) {
      uncle.leftChild = currentNode;
    }
    currentNode.parent = uncle;
  }

  private void rightRotate(Node uncle) {
    Node currentNode = uncle.leftChild;
    uncle.leftChild = currentNode != null ? currentNode.rightChild : null;
    if (currentNode != null && currentNode.rightChild != null) {
      currentNode.rightChild.parent = uncle;
    }
    if (currentNode != null) {
      currentNode.parent = uncle.parent;
    }

    if (uncle.parent == null) {
      root = currentNode;
    } else if (uncle == uncle.parent.leftChild) {
      uncle.parent.leftChild = currentNode;
    } else {
      uncle.parent.rightChild = currentNode;
    }

    if (currentNode != null) {
      currentNode.rightChild = uncle;
    }
    uncle.parent = currentNode;
  }

  private void insertFixup(Node newNode) {
    Node current = newNode;
    while (current != null && current.parent != null && current.parent.color.equals(Color.RED.toString())) {
      if (current.parent == current.parent.parent.leftChild) {
        Node y = current.parent.parent.rightChild;
        if (y != null && y.color.equals(Color.RED.toString())) {
          current.parent.color = Color.BLACK.toString();
          y.color = Color.BLACK.toString();
          current.parent.parent.color = Color.RED.toString();
          current = current.parent.parent;
        } else {
          if (current == current.parent.rightChild) {
            current = current.parent;
            leftRotate(current);
          }
          current.parent.color = Color.BLACK.toString();
          current.parent.parent.color = Color.RED.toString();
          rightRotate(current.parent.parent);
        }
      } else {
        Node y = current.parent.parent.leftChild;
        if (y != null && y.color.equals(Color.RED.toString())) {
          current.parent.color = Color.BLACK.toString();
          y.color = Color.BLACK.toString();
          current.parent.parent.color = Color.RED.toString();
          current = current.parent.parent;
        } else {
          if (current == current.parent.leftChild) {
            current = current.parent;
            rightRotate(current);
          }
          current.parent.color = Color.BLACK.toString();
          current.parent.parent.color = Color.RED.toString();
          leftRotate(current.parent.parent);
        }
      }
    }
    root.color = Color.BLACK.toString();
  }

  public void deleteRBTree(int key) {
    Node nodeToDelete = search(root, key);
    if (nodeToDelete == null) {
      return;
    }

    Node successor = nodeToDelete;
    String successorOriginalColor = successor.color;
    Node successorChild;

    if (nodeToDelete.leftChild == null) {
      successorChild = nodeToDelete.rightChild;
      transplant(nodeToDelete, nodeToDelete.rightChild);
    } else if (nodeToDelete.rightChild == null) {
      successorChild = nodeToDelete.leftChild;
      transplant(nodeToDelete, nodeToDelete.leftChild);
    } else {
      successor = findMinNode(nodeToDelete.rightChild);
      successorOriginalColor = successor.color;
      successorChild = successor.rightChild;

      if (successor.parent == nodeToDelete) {
        if (successorChild != null) {
          successorChild.parent = successor;
        }
      } else {
        transplant(successor, successor.rightChild);
        successor.rightChild = nodeToDelete.rightChild;
        if (successor.rightChild != null) {
          successor.rightChild.parent = successor;
        }
      }

      transplant(nodeToDelete, successor);
      successor.leftChild = nodeToDelete.leftChild;
      if (successor.leftChild != null) {
        successor.leftChild.parent = successor;
      }
      successor.color = nodeToDelete.color;
    }

    if (successorOriginalColor.equals(Color.BLACK.toString())) {
      deleteFixup(successorChild);
    }
  }

  private Node search(Node root, int key) {
    Node current = root;
    while (current != null && current.key != key) {
      while (current != null && current.key != key) {
        if (key < current.key) {
          current = current.leftChild;
        } else {
          current = current.rightChild;
        }
      }
      return current;
    }

    private Node findMinNode (Node node) {
      Node current = node;
      while (current.leftChild != null) {
        current = current.leftChild;
      }
      return current;
    }

    private void transplant (Node parent, Node child) {
      if (parent.parent == null) {
        root = child;
      } else if (parent == parent.parent.leftChild) {
        parent.parent.leftChild = child;
      } else {
        parent.parent.rightChild = child;
      }

      if (child != null) {
        child.parent = parent.parent;
      }
    }

    private void deleteFixup (Node currentNode) {
      Node current = currentNode;
      while (current != root && (current == null || current.color.equals(Color.BLACK.toString()))) {
        if (current == current.parent.leftChild) {
          Node currentSibling = current.parent.rightChild;
          if (currentSibling != null && currentSibling.color.equals(Color.RED.toString())) {
            currentSibling.color = Color.BLACK.toString();
            current.parent.color = Color.RED.toString();
            leftRotate(current.parent);
            currentSibling = current.parent.rightChild;
          }
          if ((currentSibling == null || currentSibling.leftChild == null || currentSibling.leftChild.color.equals(Color.BLACK.toString())) &&
              (currentSibling == null || currentSibling.rightChild == null || currentSibling.rightChild.color.equals(Color.BLACK.toString()))) {
            if (currentSibling != null) {
              currentSibling.color = Color.RED.toString();
            }
            current = current.parent;
          } else {
            if (currentSibling.rightChild == null || currentSibling.rightChild.color.equals(Color.BLACK.toString())) {
              if (currentSibling.leftChild != null) {
                currentSibling.leftChild.color = Color.BLACK.toString();
              }
              if (currentSibling != null) {
                currentSibling.color = Color.RED.toString();
              }
              rightRotate(currentSibling);
              currentSibling = current.parent.rightChild;
            }
            if (currentSibling != null) {
              currentSibling.color = current.parent.color;
            }
            if (current.parent != null) {
              current.parent.color = Color.BLACK.toString();
            }
            if (currentSibling.rightChild != null) {
              currentSibling.rightChild.color = Color.BLACK.toString();
            }
            leftRotate(current.parent);

            current = root;
          }
        } else {
          Node currentSibling = current.parent.leftChild;
          if (currentSibling != null && currentSibling.color.equals(Color.RED.toString())) {
            currentSibling.color = Color.BLACK.toString();
            current.parent.color = Color.RED.toString();
            rightRotate(current.parent);
            currentSibling = current.parent.leftChild;
          }
          if ((currentSibling == null || currentSibling.rightChild == null || currentSibling.rightChild.color.equals(Color.BLACK.toString())) &&
              (currentSibling == null || currentSibling.leftChild == null || currentSibling.leftChild.color.equals(Color.BLACK.toString()))) {
            if (currentSibling != null) {
              currentSibling.color = Color.RED.toString();
            }
            current = current.parent;
          } else {
            if (currentSibling.leftChild == null || currentSibling.leftChild.color.equals(Color.BLACK.toString())) {
              if (currentSibling.rightChild != null) {
                currentSibling.rightChild.color = Color.BLACK.toString();
              }
              if (currentSibling != null) {
                currentSibling.color = Color.RED.toString();
              }
              leftRotate(currentSibling);
              currentSibling = current.parent.leftChild;
            }
            if (currentSibling != null) {
              currentSibling.color = current.parent.color;
            }
            if (current.parent != null) {
              current.parent.color = Color.BLACK.toString();
            }
            if (currentSibling.leftChild != null) {
              currentSibling.leftChild.color = Color.BLACK.toString();
            }
            rightRotate(current.parent);
            current = root;
          }
        }
      }
      if (current != null) {
        current.color = Color.BLACK.toString();
      }
    }

    private static void inOrderTraversal (Node node) {
      if (node != null) {
        inOrderTraversal(node.leftChild);
        System.out.printf("Key: %d, Color: %s\n", node.key, node.color);
        inOrderTraversal(node.rightChild);
      }
    }
  }
}
