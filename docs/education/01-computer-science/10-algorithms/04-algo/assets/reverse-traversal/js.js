class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseTraversal(head) {
  if (head === null) {
    return;
  }
  reverseTraversal(head.next);
  console.log(head.val);
}
