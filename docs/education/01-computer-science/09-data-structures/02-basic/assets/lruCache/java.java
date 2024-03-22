import java.util.HashMap;
import java.util.Map;

class LRUCacheOnMap {

  private final int capacity;
  private final Map<Object, Object> items;

  public LRUCacheOnMap(int capacity) {
    this.capacity = capacity;
    this.items = new HashMap<>();
  }

  public Object get(Object key) {
    if (!items.containsKey(key)) {
      return null;
    }
    Object val = items.remove(key);
    items.put(key, val);
    return val;
  }

  public void set(Object key, Object val) {
    items.remove(key);
    items.put(key, val);
    if (items.size() > capacity) {
      for (Object headKey : items.keySet()) {
        items.remove(headKey);
        break;
      }
    }
  }
}

class LinkedListNode {

  public Object key;
  public Object val;
  public LinkedListNode prev;
  public LinkedListNode next;

  public LinkedListNode(Object key, Object val, LinkedListNode prev, LinkedListNode next) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {

  private final int capacity;
  private final Map<Object, LinkedListNode> nodesMap;
  private final LinkedListNode head;
  private final LinkedListNode tail;
  private int size;

  public LRUCache(int capacity) {
    this.capacity = capacity;
    this.nodesMap = new HashMap<>();
    this.size = 0;
    this.head = new LinkedListNode(null, null, null, null);
    this.tail = new LinkedListNode(null, null, null, null);
    this.head.next = tail;
    this.tail.prev = head;
  }

  public Object get(Object key) {
    if (!nodesMap.containsKey(key)) {
      return null;
    }
    LinkedListNode node = nodesMap.get(key);
    promote(node);
    return node.val;
  }

  public void set(Object key, Object val) {
    if (nodesMap.containsKey(key)) {
      LinkedListNode node = nodesMap.get(key);
      node.val = val;
      promote(node);
    } else {
      LinkedListNode node = new LinkedListNode(key, val, null, null);
      append(node);
    }
  }

  private void promote(LinkedListNode node) {
    evict(node);
    append(node);
  }

  private void append(LinkedListNode node) {
    nodesMap.put(node.key, node);

    LinkedListNode oldTail = tail.prev;
    oldTail.next = node;
    node.prev = oldTail;
    node.next = tail;
    tail.prev = node;

    size += 1;

    if (size > capacity) {
      evict(head.next);
    }
  }

  private void evict(LinkedListNode node) {
    nodesMap.remove(node.key);
    size -= 1;

    LinkedListNode prevNode = node.prev;
    LinkedListNode nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
}
