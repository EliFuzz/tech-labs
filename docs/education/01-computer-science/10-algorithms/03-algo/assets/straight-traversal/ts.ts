class Node {
  data: number;
  next: Node | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

function traverseList(head: Node | null): void {
  let current: Node | null = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}
