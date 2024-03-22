class BloomFilter {
  private size: number;
  private storage: { [index: number]: boolean };

  constructor(size: number = 100) {
    this.size = size;
    this.storage = this.createStore(size);
  }

  insert(item: string): void {
    const hashValues = this.getHashValues(item);
    hashValues.forEach((val) => {
      this.storage[val] = true;
    });
  }

  mayContain(item: string): boolean {
    const hashValues = this.getHashValues(item);
    for (let hashIndex = 0; hashIndex < hashValues.length; hashIndex += 1) {
      if (!this.storage[hashValues[hashIndex]]) {
        return false;
      }
    }
    return true;
  }

  private createStore(size: number): { [index: number]: boolean } {
    const storage: { [index: number]: boolean } = {};
    for (
      let storageCellIndex = 0;
      storageCellIndex < size;
      storageCellIndex += 1
    ) {
      storage[storageCellIndex] = false;
    }
    return storage;
  }

  private firstHash(item: string): number {
    let hash = 0;
    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      const char = item.charCodeAt(charIndex);
      hash = (hash << 5) + hash + char;
      hash &= hash;
      hash = Math.abs(hash);
    }
    return hash % this.size;
  }

  private secondHash(item: string): number {
    let hash = 5381;
    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      const char = item.charCodeAt(charIndex);
      hash = (hash << 5) + hash + char;
    }
    return Math.abs(hash % this.size);
  }

  private thirdHash(item: string): number {
    let hash = 0;
    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      const char = item.charCodeAt(charIndex);
      hash = (hash << 5) - hash;
      hash += char;
      hash &= hash;
    }
    return Math.abs(hash % this.size);
  }

  private getHashValues(item: string): number[] {
    return [this.firstHash(item), this.secondHash(item), this.thirdHash(item)];
  }
}
