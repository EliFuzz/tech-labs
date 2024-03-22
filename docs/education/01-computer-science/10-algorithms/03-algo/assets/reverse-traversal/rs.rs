struct ListNode {
    val: i32,
    next: Option<Box<ListNode>>,
}

impl ListNode {
    fn new(val: i32) -> Self {
        ListNode { val, next: None }
    }
}

fn reverse_traversal(head: Option<Box<ListNode>>) {
    if let Some(node) = head {
        reverse_traversal(node.next);
        println!("{}", node.val);
    }
}
