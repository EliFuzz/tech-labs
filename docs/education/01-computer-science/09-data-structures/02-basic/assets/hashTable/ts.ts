class HashTable {
  private table: { [key: string]: any } = {};
  private size: number = 10;

  insert(key: string, value: any) {
    const index = this.hash(key);
    this.table[index] = { key, value };
  }

  search(key: string): any {
    const index = this.hash(key);
    if (this.table[index] !== undefined) {
      return this.table[index].value;
    }
    return null;
  }

  delete(key: string) {
    const index = this.hash(key);
    delete this.table[index];
  }

  private hash(key: string): number {
    return key.hashCode() % this.size;
  }
}
