import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Heap<T> {

  private final Comparator<T> comparator;
  private final List<T> heap;

  public Heap(Comparator<T> comparator) {
    this.comparator = comparator;
    this.heap = new ArrayList<>();
  }

  public T findMin() {
    if (heap.isEmpty()) {
      return null;
    }
    return heap.get(0);
  }

  public T findMax() {
    if (heap.isEmpty()) {
      return null;
    }
    return heap.get(heap.size() - 1);
  }

  public T extractMin() {
    if (heap.isEmpty()) {
      return null;
    }

    T min = heap.get(0);
    heap.set(0, heap.get(heap.size() - 1));
    heap.remove(heap.size() - 1);
    heapifyDown();

    return min;
  }

  public T extractMax() {
    if (heap.isEmpty()) {
      return null;
    }

    T max = heap.get(heap.size() - 1);
    heap.set(0, heap.get(heap.size() - 1));
    heap.remove(heap.size() - 1);
    heapifyDown();

    return max;
  }

  public void insert(T element) {
    heap.add(element);
    heapifyUp();
  }

  public void increaseKey(int index, T newKey) {
    if (comparator.compare(newKey, heap.get(index)) < 0) {
      throw new IllegalArgumentException("New key must be greater than current key");
    }

    heap.set(index, newKey);
    heapifyUp(index);
  }

  public void decreaseKey(int index, T newKey) {
    if (comparator.compare(newKey, heap.get(index)) > 0) {
      throw new IllegalArgumentException("New key must be less than current key");
    }

    heap.set(index, newKey);
    heapifyDown(index);
  }

  public Heap<T> meld(Heap<T> other) {
    Heap<T> mergedHeap = new Heap<>(comparator);
    mergedHeap.heap.addAll(heap);
    mergedHeap.heap.addAll(other.heap);

    for (int i = heap.size() / 2; i >= 0; i--) {
      mergedHeap.heapifyDown(i);
    }

    return mergedHeap;
  }

  private void heapifyUp(int index) {
    int currentIndex = index;
    T currentElement = heap.get(currentIndex);

    while (currentIndex > 0) {
      int parentIndex = (currentIndex - 1) / 2;
      T parent = heap.get(parentIndex);

      if (comparator.compare(currentElement, parent) >= 0) {
        break;
      }

      heap.set(currentIndex, parent);
      currentIndex = parentIndex;
    }

    heap.set(currentIndex, currentElement);
  }

  private void heapifyDown(int index) {
    int currentIndex = index;

    while (currentIndex < heap.size()) {
      int leftChildIndex = 2 * currentIndex + 1;
      int rightChildIndex = 2 * currentIndex + 2;
      T leftChild = heap.getOrNull(leftChildIndex);
      T rightChild = heap.getOrNull(rightChildIndex);

      int minChildIndex = getMinChildIndex(leftChildIndex, rightChildIndex, leftChild, rightChild);

      if (minChildIndex == -1 || comparator.compare(heap.get(minChildIndex), heap.get(currentIndex)) >= 0) {
        break;
      }

      T minChild = heap.get(minChildIndex);
      heap.set(currentIndex, minChild);
      currentIndex = minChildIndex;
    }

    heap.set(currentIndex, heap.get(index));
  }

  private int getMinChildIndex(int leftChildIndex, int rightChildIndex, T leftChild, T rightChild) {
    if (leftChild == null || rightChild == null) {
      return (leftChild == null) ? leftChildIndex : rightChildIndex;
    } else {
      int leftChildComparison = comparator.compare(leftChild, rightChild);
      if (leftChildComparison == 0) {
        return (comparator.compare(leftChild, heap.get(currentIndex)) <= 0) ? leftChildIndex : rightChildIndex;
      } else {
        return (leftChildComparison == -1) ? leftChildIndex : rightChildIndex;
      }
    }
  }
}
