class HashTable {
  constructor() {
    this.table = [];
    this.size = 10;
  }

  hash(key) {
    return key.hashCode() % this.size;
  }

  insert(key, value) {
    const index = this.hash(key);
    this.table[index] = { key, value };
  }

  search(key) {
    const index = this.hash(key);
    if (this.table[index] !== undefined) {
      return this.table[index].value;
    }
    return null;
  }

  delete(key) {
    const index = this.hash(key);
    this.table[index] = null;
  }
}
