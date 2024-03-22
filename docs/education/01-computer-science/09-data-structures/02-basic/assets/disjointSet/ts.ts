class DisjointSetItem<T> {
  value: T;
  keyCallback: ((value: T) => string) | undefined;
  parent: DisjointSetItem<T> | null;
  children: { [key: string]: DisjointSetItem<T> };

  constructor(value: T, keyCallback?: (value: T) => string) {
    this.value = value;
    this.keyCallback = keyCallback;
    this.parent = null;
    this.children = {};
  }

  getKey(): string {
    if (this.keyCallback) {
      return this.keyCallback(this.value);
    }
    return String(this.value);
  }

  getRoot(): DisjointSetItem<T> {
    return this.isRoot() ? this : this.parent!.getRoot();
  }

  isRoot(): boolean {
    return this.parent === null;
  }

  getRank(): number {
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

  getChildren(): DisjointSetItem<T>[] {
    return Object.values(this.children);
  }

  setParent(
    parentItem: DisjointSetItem<T>,
    forceSettingParentChild: boolean = true,
  ): this {
    this.parent = parentItem;
    if (forceSettingParentChild) {
      parentItem.addChild(this);
    }

    return this;
  }

  addChild(childItem: DisjointSetItem<T>): this {
    this.children[childItem.getKey()] = childItem;
    childItem.setParent(this, false);

    return this;
  }
}

class DisjointSet<T> {
  keyCallback: ((value: T) => string) | undefined;
  items: { [key: string]: DisjointSetItem<T> };

  constructor(keyCallback?: (value: T) => string) {
    this.keyCallback = keyCallback;
    this.items = {};
  }

  makeSet(itemValue: T): this {
    const disjointSetItem = new DisjointSetItem(itemValue, this.keyCallback);

    if (!this.items[disjointSetItem.getKey()]) {
      this.items[disjointSetItem.getKey()] = disjointSetItem;
    }

    return this;
  }

  find(itemValue: T): string | null {
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

  union(valueA: T, valueB: T): this {
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
    } else {
      rootA.addChild(rootB);
    }

    return this;
  }

  inSameSet(valueA: T, valueB: T): boolean {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      throw new Error("One or two values are not in sets");
    }

    return rootKeyA === rootKeyB;
  }
}
