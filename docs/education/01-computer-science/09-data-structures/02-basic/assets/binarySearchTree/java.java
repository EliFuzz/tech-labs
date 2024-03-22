import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class BinarySearchTree {

  private Node root;

  public Node insert(Node root, int key) {
    if (root == null) {
      return new Node(key);
    }

    if (key < root.key) {
      root.left = insert(root.left, key);
    } else if (key > root.key) {
      root.right = insert(root.right, key);
    }

    return root;
  }

  public Node search(Node root, int key) {
    if (root == null || root.key == key) {
      return root;
    }

    return (key < root.key) ? search(root.left, key) : search(root.right, key);
  }

  public Node findMin(Node root) {
    Node current = root;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  public Node findMax(Node root) {
    Node current = root;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  public Node findSuccessor(Node root, int key) {
    if (root == null) {
      return null;
    }

    Node current = root;
    Node successor = null;

    while (current != null) {
      if (key < current.key) {
        successor = current;
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return successor;
  }

  public Node findPredecessor(Node root, int key) {
    if (root == null) {
      return null;
    }

    Node current = root;
    Node predecessor = null;

    while (current != null) {
      if (key > current.key) {
        predecessor = current;
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return predecessor;
  }

  public Node deleteNode(Node root, int key) {
    if (root == null) {
      return null;
    }

    if (key < root.key) {
      root.left = deleteNode(root.left, key);
    } else if (key > root.key) {
      root.right = deleteNode(root.right, key);
    } else {
      if (root.left == null) {
        return root.right;
      } else if (root.right == null) {
        return root.left;
      }

      Node successor = findMin(root.right);
      root.key = successor.key;

      root.right = deleteNode(root.right, successor.key);
    }

    return root;
  }

  public void bfsRecursive(Node root) {
    if (root == null) {
      return;
    }

    Queue<Node> queue = new LinkedList<>();
    queue.add(root);

    bfsHelper(queue);
  }

  private void bfsHelper(Queue<Node> queue) {
    if (queue.isEmpty()) {
      return;
    }

    Node current = queue.poll();
    System.out.println(current.key);

    if (current.left != null) {
      queue.add(current.left);
    }
    if (current.right != null) {
      queue.add(current.right);
    }

    bfsHelper(queue);
  }

  public void bfsIterative(Node root) {
    if (root == null) {
      return;
    }

    Queue<Node> queue = new LinkedList<>();
    queue.add(root);

    while (!queue.isEmpty()) {
      Node current = queue.poll();
      System.out.println(current.key);

      if (current.left != null) {
        queue.add(current.left);
      }
      if (current.right != null) {
        queue.add(current.right);
      }
    }
  }

  public void dfsPreOrderRecursive(Node root) {
    if (root == null) {
      return;
    }

    System.out.println(root.key);
    dfsPreOrderRecursive(root.left);
    dfsPreOrderRecursive(root.right);
  }

  public void dfsPreOrderIterative(Node root) {
    if (root == null) {
      return;
    }

    Stack<Node> stack = new Stack<>();
    stack.push(root);

    while (!stack.isEmpty()) {
      Node current = stack.pop();
      System.out.println(current.key);

      if (current.right != null) {
        stack.push(current.right);
      }
      if (current.left != null) {
        stack.push(current.left);
      }
    }
  }

  public void dfsInOrderRecursive(Node root) {
    if (root == null) {
      return;
    }

    dfsInOrderRecursive(root.left);
    System.out.println(root.key);
    dfsInOrderRecursive(root.right);
  }

  public void dfsInOrderIterative(Node root) {
    if (root == null) {
      return;
    }

    Stack<Node> stack = new Stack<>();
    Node current = root;

    while (current != null || !stack.isEmpty()) {
      while (current != null) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      System.out.println(current.key);
      current = current.right;
    }
  }

  public void dfsPostOrderRecursive(Node root) {
    if (root == null) {
      return;
    }

    dfsPostOrderRecursive(root.left);
    dfsPostOrderRecursive(root.right);
    System.out.println(root.key);
  }

  public void dfsPostOrderIterative(Node root) {
    if (root == null) {
      return;
    }

    Stack<Node> stack1 = new Stack<>();
    Stack<Node> stack2 = new Stack<>();
    stack1.push(root);

    while (!stack1.isEmpty()) {
      Node current = stack1.pop();
      stack2.push(current);

      if (current.left != null) {
        stack1.push(current.left);
      }
      if (current.right != null) {
        stack1.push(current.right);
      }
    }

    while (!stack2.isEmpty()) {
      System.out.println(stack2.pop().key);
    }
  }

  public static class Node {

    int key;
    Node left;
    Node right;

    public Node(int key) {
      this.key = key;
    }
  }
}
