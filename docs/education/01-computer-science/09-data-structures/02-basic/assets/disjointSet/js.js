class DisjointSetItem {
  constructor(value, keyCallback) {
    this.value = value;
    this.keyCallback = keyCallback;
    this.parent = null;
    this.children = {};
  }

  getKey() {
    if (this.keyCallback) {
      return this.keyCallback(this.value);
    }
    return this.value;
  }

  getRoot() {
    return this.isRoot() ? this : this.parent.getRoot();
  }

  isRoot() {
    return this.parent === null;
  }

  getRank() {
    if (this.getChildren().length === 0) {
      return 0;
    }

    let rank = 0;

    this.getChildren().forEach((child) => {
      rank += 1;
      rank += child.getRank();
    });

    return rank;
  }

  getChildren() {
    return Object.values(this.children);
  }

  setParent(parentItem, forceSettingParentChild = true) {
    this.parent = parentItem;
    if (forceSettingParentChild) {
      parentItem.addChild(this);
    }

    return this;
  }

  addChild(childItem) {
    this.children[childItem.getKey()] = childItem;
    childItem.setParent(this, false);

    return this;
  }
}

class DisjointSet {
  constructor(keyCallback) {
    this.keyCallback = keyCallback;
    this.items = {};
  }

  makeSet(itemValue) {
    const disjointSetItem = new DisjointSetItem(itemValue, this.keyCallback);

    if (!this.items[disjointSetItem.getKey()]) {
      this.items[disjointSetItem.getKey()] = disjointSetItem;
    }

    return this;
  }

  find(itemValue) {
    const templateDisjointItem = new DisjointSetItem(
      itemValue,
      this.keyCallback,
    );
    const requiredDisjointItem = this.items[templateDisjointItem.getKey()];

    if (!requiredDisjointItem) {
      return null;
    }

    return requiredDisjointItem.getRoot().getKey();
  }

  union(valueA, valueB) {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      throw new Error("One or two values are not in sets");
    }

    if (rootKeyA === rootKeyB) {
      return this;
    }

    const rootA = this.items[rootKeyA];
    const rootB = this.items[rootKeyB];

    if (rootA.getRank() < rootB.getRank()) {
      rootB.addChild(rootA);
      return this;
    }

    rootA.addChild(rootB);

    return this;
  }

  inSameSet(valueA, valueB) {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      throw new Error("One or two values are not in sets");
    }

    return rootKeyA === rootKeyB;
  }
}
