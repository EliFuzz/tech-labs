public class DoublyLinkedList<T> {

  private Node<T> head = null;
  private Node<T> tail = null;

  public void prepend(T value) {
    Node<T> n = new Node<>(value);
    if (head == null) {
      head = n;
      tail = n;
    } else {
      n.previous = tail;
      tail.next = n;
      tail = n;
    }
  }

  public void append(T value) {
    Node<T> n = new Node<>(value);
    if (head == null) {
      head = n;
      tail = n;
    } else {
      tail.next = n;
      n.previous = tail;
      tail = n;
    }
  }

  public Node<T> search(T value) {
    Node<T> currentNode = head;
    while (currentNode != null && !currentNode.value.equals(value)) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  public Node<T> deleteHead() {
    if (head == null) {
      return null;
    }

    Node<T> deletedHead = head;

    if (head.next != null) {
      head = head.next;
      head.previous = null;
    } else {
      tail = null;
      head = null;
    }

    return deletedHead;
  }

  public void deleteNode(T value) {
    Node<T> current = head;

    while (current != null) {
      if (current.value.equals(value)) {
        if (current == head) {
          head = current.next;
          if (head != null) {
            head.previous = null;
          }
        } else {
          current.previous.next = current.next;
          if (current.next != null) {
            current.next.previous = current.previous;
          }
        }
        return;
      }
      current = current.next;
    }
  }

  public void deleteLast() {
    if (tail == null) {
      System.out.println("The list is empty!");
      return;
    }

    if (head == tail) {
      head = null;
      tail = null;
      return;
    }

    Node<T> prevNode = tail.previous;
    if (prevNode != null) {
      prevNode.next = null;
    }
    tail = prevNode;
  }

  public void reverse() {
    Node<T> currentNode = head;
    Node<T> previousNode = null;
    Node<T> nextNode;

    while (currentNode != null) {
      nextNode = currentNode.next;
      previousNode = currentNode.previous;

      currentNode.next = previousNode;
      currentNode.previous = nextNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }

    tail = head;
    head = previousNode;
  }

  public void traversal() {
    Node<T> current = head;
    while (current != null) {
      System.out.println(current.value);
      current = current.next;
    }
  }

  public void reverseTraversal() {
    Node<T> current = tail;
    while (current != null) {
      System.out.println(current.value);
      current = current.previous;
    }
  }

  public class Node<T> {

    T value;
    Node<T> next = null;
    Node<T> previous = null;

    public Node(T value) {
      this.value = value;
    }
  }
}
