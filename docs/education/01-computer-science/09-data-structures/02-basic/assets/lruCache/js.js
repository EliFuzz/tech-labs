class LRUCacheOnMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Map();
  }

  get(key) {
    if (!this.items.has(key)) {
      return undefined;
    }
    const val = this.items.get(key);
    this.items.delete(key);
    this.items.set(key, val);
    return val;
  }

  set(key, val) {
    this.items.delete(key);
    this.items.set(key, val);
    if (this.items.size > this.capacity) {
      for (const headKey of this.items.keys()) {
        this.items.delete(headKey);
        break;
      }
    }
  }
}

class LinkedListNode {
  constructor(key, val, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.nodesMap = {};
    this.size = 0;
    this.head = new LinkedListNode();
    this.tail = new LinkedListNode();
  }

  get(key) {
    if (this.nodesMap[key] === undefined) {
      return undefined;
    }
    const node = this.nodesMap[key];
    this.promote(node);
    return node.val;
  }

  set(key, val) {
    if (this.nodesMap[key]) {
      const node = this.nodesMap[key];
      node.val = val;
      this.promote(node);
    } else {
      const node = new LinkedListNode(key, val);
      this.append(node);
    }
  }

  promote(node) {
    this.evict(node);
    this.append(node);
  }

  append(node) {
    this.nodesMap[node.key] = node;

    if (!this.head.next) {
      this.head.next = node;
      this.tail.prev = node;
      node.prev = this.head;
      node.next = this.tail;
    } else {
      const oldTail = this.tail.prev;
      oldTail.next = node;
      node.prev = oldTail;
      node.next = this.tail;
      this.tail.prev = node;
    }

    this.size += 1;

    if (this.size > this.capacity) {
      this.evict(this.head.next);
    }
  }

  evict(node) {
    delete this.nodesMap[node.key];
    this.size -= 1;

    const prevNode = node.prev;
    const nextNode = node.next;

    if (prevNode === this.head && nextNode === this.tail) {
      this.head.next = null;
      this.tail.prev = null;
      this.size = 0;
      return;
    }

    if (prevNode === this.head) {
      nextNode.prev = this.head;
      this.head.next = nextNode;
      return;
    }

    if (nextNode === this.tail) {
      prevNode.next = this.tail;
      this.tail.prev = prevNode;
      return;
    }

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
}
