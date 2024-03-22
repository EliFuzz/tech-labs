class LRUCacheOnMap {
  private capacity: number;
  private items: Map<string, any>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.items = new Map<string, any>();
  }

  get(key: string): any | undefined {
    if (!this.items.has(key)) {
      return undefined;
    }
    const val = this.items.get(key);
    this.items.delete(key);
    this.items.set(key, val);
    return val;
  }

  set(key: string, val: any): void {
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
  public key: string;
  public val: any;
  public prev: LinkedListNode | null;
  public next: LinkedListNode | null;

  constructor(
    key: string,
    val: any,
    prev: LinkedListNode | null = null,
    next: LinkedListNode | null = null,
  ) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  private capacity: number;
  private nodesMap: { [key: string]: LinkedListNode };
  private size: number;
  private head: LinkedListNode;
  private tail: LinkedListNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.nodesMap = {};
    this.size = 0;
    this.head = new LinkedListNode("", null);
    this.tail = new LinkedListNode("", null);
  }

  get(key: string): any | undefined {
    if (this.nodesMap[key] === undefined) {
      return undefined;
    }
    const node = this.nodesMap[key];
    this.promote(node);
    return node.val;
  }

  set(key: string, val: any): void {
    if (this.nodesMap[key]) {
      const node = this.nodesMap[key];
      node.val = val;
      this.promote(node);
    } else {
      const node = new LinkedListNode(key, val);
      this.append(node);
    }
  }

  private promote(node: LinkedListNode): void {
    this.evict(node);
    this.append(node);
  }

  private append(node: LinkedListNode): void {
    this.nodesMap[node.key] = node;

    if (!this.head.next) {
      this.head.next = node;
      this.tail.prev = node;
      node.prev = this.head;
      node.next = this.tail;
    } else {
      const oldTail = this.tail.prev as LinkedListNode;
      oldTail.next = node;
      node.prev = oldTail;
      node.next = this.tail;
      this.tail.prev = node;
    }

    this.size += 1;

    if (this.size > this.capacity) {
      this.evict(this.head.next as LinkedListNode);
    }
  }

  private evict(node: LinkedListNode): void {
    delete this.nodesMap[node.key];
    this.size -= 1;

    const prevNode = node.prev as LinkedListNode;
    const nextNode = node.next as LinkedListNode;

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
