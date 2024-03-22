public class LinkedList<T> {

  private Node<T> head = null;

  public void prepend(T data) {
    head = new Node<>(data, head);
  }

  public void insertBefore(T value, T data) {
    if (head == null) {
      return;
    }

    if (head.data.equals(value)) {
      head = new Node<>(data, head);
      return;
    }

    Node<T> current = head;
    while (current.next != null && !current.next.data.equals(value)) {
      current = current.next;
    }

    if (current.next != null) {
      current.next = new Node<>(data, current.next);
    }
  }

  public void insertAfter(T value, T data) {
    Node<T> current = head;
    while (current != null && !current.data.equals(value)) {
      current = current.next;
    }

    if (current != null) {
      current.next = new Node<>(data, current.next);
    }
  }

  public void insertAt(int index, T data) {
    if (index < 0) {
      throw new IndexOutOfBoundsException("Index must be greater than or equal to 0");
    }

    if (index == 0) {
      head = new Node<>(data, head);
      return;
    }

    Node<T> current = head;
    int currentIndex = 0;
    while (current != null && currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    if (current == null) {
      throw new IndexOutOfBoundsException("Index exceeds the size of the list");
    }

    current.next = new Node<>(data, current.next);
  }

  public void append(T data) {
    if (head == null) {
      head = new Node<>(data);
    } else {
      Node<T> current = head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = new Node<>(data);
    }
  }

  public T find(T value) {
    Node<T> current = head;
    while (current != null && !current.data.equals(value)) {
      current = current.next;
    }
    return current != null ? current.data : null;
  }

  public void deleteHead() {
    if (head != null) {
      head = head.next;
    }
  }

  public void delete(T value) {
    if (head == null) {
      return;
    }

    if (head.data.equals(value)) {
      head = head.next;
      return;
    }

    Node<T> current = head;
    while (current.next != null && !current.next.data.equals(value)) {
      current = current.next;
    }

    if (current.next != null) {
      current.next = current.next.next;
    }
  }

  public void deleteLast() {
    if (head == null) {
      return;
    }

    if (head.next == null) {
      head = null;
      return;
    }

    Node<T> current = head;
    while (current.next.next != null) {
      current = current.next;
    }

    current.next = null;
  }

  public void reverse() {
    Node<T> prev = null;
    Node<T> current = head;
    Node<T> next;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    head = prev;
  }

  public void traverse() {
    Node<T> current = head;
    while (current != null) {
      System.out.println(current.data);
      current = current.next;
    }
  }

  private class Node<T> {

    T data;
    Node<T> next;

    Node(T data) {
      this.data = data;
    }

    Node(T data, Node<T> next) {
      this.data = data;
      this.next = next;
    }
  }
}
