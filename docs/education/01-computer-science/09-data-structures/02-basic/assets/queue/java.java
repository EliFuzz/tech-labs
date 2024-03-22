import java.util.LinkedList;
import java.util.NoSuchElementException;

public class Queue<T> {

  private LinkedList<T> queue = new LinkedList<>();

  public void enqueue(T item) {
    queue.addLast(item);
  }

  public T peek() {
    try {
      return queue.getFirst();
    } catch (NoSuchElementException e) {
      return null;
    }
  }

  public T dequeue() {
    try {
      return queue.removeFirst();
    } catch (NoSuchElementException e) {
      return null;
    }
  }
}
