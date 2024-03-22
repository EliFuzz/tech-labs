import java.util.*;

class PriorityQueue<T> {

  private List<Pair<T, Integer>> heap = new ArrayList<>();

  public void enqueue(T item, int priority) {
    heap.add(new Pair<>(item, priority));
    heapifyUp();
  }

  public T dequeue() {
    if (heap.isEmpty()) {
      return null;
    }
    T highestPriorityItem = heap.get(0).getKey();
    heap.set(0, heap.get(heap.size() - 1));
    heap.remove(heap.size() - 1);
    heapifyDown();
    return highestPriorityItem;
  }

  public T peek() {
    if (heap.isEmpty()) {
      return null;
    }
    return heap.get(0).getKey();
  }

  public void changePriority(T item, int newPriority) {
    int index = findIndexByItem(item);
    if (index != -1) {
      heap.set(index, new Pair<>(item, newPriority));
      heapifyUp(index);
    }
  }

  public T findByValue(T item) {
    int index = findIndexByItem(item);
    if (index != -1) {
      return heap.get(index).getKey();
    }
    return null;
  }

  private void heapifyUp(int index) {
    if (index == 0) {
      return;
    }
    int parentIndex = (index - 1) / 2;
    if (heap.get(parentIndex).getValue() < heap.get(index).getValue()) {
      swap(heap, parentIndex, index);
      heapifyUp(parentIndex);
    }
  }

  private void heapifyDown() {
    int index = 0;
    while (index < heap.size()) {
      int leftChildIndex = 2 * index + 1;
      int rightChildIndex = 2 * index + 2;
      int smallestIndex = findSmallestIndex(leftChildIndex, rightChildIndex);
      if (smallestIndex == -1) {
        break;
      }
      swap(heap, index, smallestIndex);
      index = smallestIndex;
    }
  }

  private void swap(List<Pair<T, Integer>> list, int i, int j) {
    Pair<T, Integer> temp = list.get(i);
    list.set(i, list.get(j));
    list.set(j, temp);
  }

  private int findIndexByItem(T item) {
    for (int i = 0; i < heap.size(); i++) {
      if (heap.get(i).getKey().equals(item)) {
        return i;
      }
    }
    return -1;
  }

  private int findSmallestIndex(int leftChildIndex, int rightChildIndex) {
    if (leftChildIndex >= heap.size()) {
      return -1;
    }
    if (rightChildIndex >= heap.size()) {
      return leftChildIndex;
    }
    int leftPriority = heap.get(leftChildIndex).getValue();
    int rightPriority = heap.get(rightChildIndex).getValue();
    return leftPriority < rightPriority ? leftChildIndex : rightChildIndex;
  }
}
