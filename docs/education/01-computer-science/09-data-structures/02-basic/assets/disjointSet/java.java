import java.util.HashMap;
import java.util.Map;

class DisjointSetItem<T> {

  private T value;
  private DisjointSetItem<T> parent;
  private Map<T, DisjointSetItem<T>> children;

  public DisjointSetItem(T value) {
    this.value = value;
    this.parent = null;
    this.children = new HashMap<>();
  }

  public T getKey() {
    return this.parent == null ? this.value : this.parent.getKey();
  }

  public DisjointSetItem<T> getRoot() {
    return this.isRoot() ? this : this.parent.getRoot();
  }

  public boolean isRoot() {
    return this.parent == null;
  }

  public int getRank() {
    if (getChildren().isEmpty()) {
      return 0;
    }

    int rank = 0;
    for (DisjointSetItem<T> child : getChildren()) {
      rank += 1;
      rank += child.getRank();
    }

    return rank;
  }

  public Iterable<DisjointSetItem<T>> getChildren() {
    return children.values();
  }

  public DisjointSetItem<T> setParent(DisjointSetItem<T> parentItem, boolean forceSettingParentChild) {
    this.parent = parentItem;
    if (forceSettingParentChild) {
      parentItem.addChild(this);
    }

    return this;
  }

  public DisjointSetItem<T> addChild(DisjointSetItem<T> childItem) {
    children.put(childItem.getKey(), childItem);
    childItem.setParent(this, false);

    return this;
  }
}

public class DisjointSet<T> {

  private Map<T, DisjointSetItem<T>> items;
  private KeyCallback<T> keyCallback;

  public DisjointSet(KeyCallback<T> keyCallback) {
    this.keyCallback = keyCallback;
    this.items = new HashMap<>();
  }

  public DisjointSet<T> makeSet(T itemValue) {
    DisjointSetItem<T> disjointSetItem = new DisjointSetItem<>(itemValue);

    if (!items.containsKey(disjointSetItem.getKey())) {
      items.put(disjointSetItem.getKey(), disjointSetItem);
    }

    return this;
  }

  public T find(T itemValue) {
    DisjointSetItem<T> templateDisjointItem = new DisjointSetItem<>(itemValue);
    DisjointSetItem<T> requiredDisjointItem = items.get(templateDisjointItem.getKey());

    if (requiredDisjointItem == null) {
      return null;
    }

    return requiredDisjointItem.getRoot().getKey();
  }

  public DisjointSet<T> union(T valueA, T valueB) {
    T rootKeyA = find(valueA);
    T rootKeyB = find(valueB);

    if (rootKeyA == null || rootKeyB == null) {
      throw new RuntimeException("One or two values are not in sets");
    }

    if (rootKeyA.equals(rootKeyB)) {
      return this;
    }

    DisjointSetItem<T> rootA = items.get(rootKeyA);
    DisjointSetItem<T> rootB = items.get(rootKeyB);

    if (rootA.getRank() < rootB.getRank()) {
      rootB.addChild(rootA);
      return this;
    }

    rootA.addChild(rootB);

    return this;
  }

  public boolean inSameSet(T valueA, T valueB) {
    T rootKeyA = find(valueA);
    T rootKeyB = find(valueB);

    if (rootKeyA == null || rootKeyB == null) {
      throw new RuntimeException("One or two values are not in sets");
    }

    return rootKeyA.equals(rootKeyB);
  }

  public interface KeyCallback<T> {

    T getKey(T value);
  }
}
