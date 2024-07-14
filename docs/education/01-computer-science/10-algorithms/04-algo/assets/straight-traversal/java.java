class Node {

  int data;
  Node next;

  Node(int data) {
    this.data = data;
    next = null;
  }
}

class LinkedListTraversal {

  static void traverseList(Node head) {
    Node current = head;
    while (current != null) {
      System.out.print(current.data + " ");
      current = current.next;
    }
  }
}
