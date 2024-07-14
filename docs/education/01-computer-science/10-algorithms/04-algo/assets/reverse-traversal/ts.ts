class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseTraversal(head: ListNode | null): void {
  if (head === null) return;
  reverseTraversal(head.next);
  console.log(head.val);
}
