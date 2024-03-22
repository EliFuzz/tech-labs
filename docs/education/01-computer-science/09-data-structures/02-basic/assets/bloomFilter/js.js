class BloomFilter {
  constructor(size = 100) {
    this.size = size;
    this.storage = this.createStore(size);
  }

  insert(item) {
    const hashValues = this.getHashValues(item);
    hashValues.forEach((val) => this.storage.setValue(val));
  }

  mayContain(item) {
    const hashValues = this.getHashValues(item);
    for (let hashIndex = 0; hashIndex < hashValues.length; hashIndex += 1) {
      if (!this.storage.getValue(hashValues[hashIndex])) {
        return false;
      }
    }
    return true;
  }

  createStore(size) {
    const storage = [];
    for (
      let storageCellIndex = 0;
      storageCellIndex < size;
      storageCellIndex += 1
    ) {
      storage.push(false);
    }
    const storageInterface = {
      getValue(index) {
        return storage[index];
      },
      setValue(index) {
        storage[index] = true;
      },
    };
    return storageInterface;
  }

  firstHash(item) {
    let hash = 0;
    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      const char = item.charCodeAt(charIndex);
      hash = (hash << 5) + hash + char;
      hash &= hash;
      hash = Math.abs(hash);
    }
    return hash % this.size;
  }

  secondHash(item) {
    let hash = 5381;
    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      const char = item.charCodeAt(charIndex);
      hash = (hash << 5) + hash + char;
    }
    return Math.abs(hash % this.size);
  }

  thirdHash(item) {
    let hash = 0;
    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      const char = item.charCodeAt(charIndex);
      hash = (hash << 5) - hash;
      hash += char;
      hash &= hash;
    }
    return Math.abs(hash % this.size);
  }

  getHashValues(item) {
    return [this.firstHash(item), this.secondHash(item), this.thirdHash(item)];
  }
}
