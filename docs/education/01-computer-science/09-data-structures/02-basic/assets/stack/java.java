import java.util.ArrayList;

public class Stack<T> {

  private ArrayList<T> elements = new ArrayList<>();

  public void push(T item) {
    elements.add(item);
  }

  public T pop() {
    if (!elements.isEmpty()) {
      return elements.remove(elements.size() - 1);
    }
    return null;
  }

  public T peek() {
    if (!elements.isEmpty()) {
      return elements.get(elements.size() - 1);
    }
    return null;
  }
}
