class ListNode {

  int val;
  ListNode next;

  ListNode(int x) {
    val = x;
  }
}

public class Main {

  public void reverseTraversal(ListNode head) {
    if (head == null) {
      return;
    }
    reverseTraversal(head.next);
    System.out.println(head.val);
  }
}
