public class AVLTree {

  private AVLNode root;

  public AVLNode insert(AVLNode node, int key) {
    if (node == null) {
      return new AVLNode(key);
    }

    if (key < node.key) {
      node.left = insert(node.left, key);
    } else if (key > node.key) {
      node.right = insert(node.right, key);
    }

    node.height = 1 + Math.max(height(node.left), height(node.right));

    return rebalance(node);
  }

  private AVLNode rebalance(AVLNode node) {
    int balance = getBalance(node);

    if (balance > 1) {
      if (getBalance(node.left) < 0) {
        node.left = leftRotate(node.left);
      }
      return rightRotate(node);
    }

    if (balance < -1) {
      if (getBalance(node.right) > 0) {
        node.right = rightRotate(node.right);
      }
      return leftRotate(node);
    }

    return node;
  }

  private AVLNode leftRotate(AVLNode y) {
    AVLNode x = y.right;
    AVLNode T2 = x.left;

    x.left = y;
    y.right = T2;

    y.height = 1 + Math.max(height(y.left), height(y.right));
    x.height = 1 + Math.max(height(x.left), height(x.right));

    return x;
  }

  private AVLNode rightRotate(AVLNode x) {
    AVLNode y = x.left;
    AVLNode T2 = y.right;

    y.right = x;
    x.left = T2;

    x.height = 1 + Math.max(height(x.left), height(x.right));
    y.height = 1 + Math.max(height(y.left), height(y.right));

    return y;
  }

  private int height(AVLNode node) {
    return (node != null) ? node.height : 0;
  }

  private int getBalance(AVLNode node) {
    return (node != null) ? height(node.left) - height(node.right) : 0;
  }

  public AVLNode search(AVLNode node, int key) {
    if (node == null || key == node.key) {
      return node;
    }
    return (key < node.key) ? search(node.left, key) : search(node.right, key);
  }

  public AVLNode findMin(AVLNode node) {
    AVLNode current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  public AVLNode findMax(AVLNode node) {
    AVLNode current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  public static class AVLNode {

    public int key;
    public AVLNode left;
    public AVLNode right;
    public int height;

    public AVLNode(int key) {
      this.key = key;
      this.height = 1;
    }
  }
}
