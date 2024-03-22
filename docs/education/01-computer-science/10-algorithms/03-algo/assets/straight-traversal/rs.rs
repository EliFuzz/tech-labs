struct Node {
    data: i32,
    next: Option<Box<Node>>,
}

impl Node {
    fn new(data: i32) -> Self {
        Node { data, next: None }
    }
}

fn traverse_list(mut head: Option<Box<Node>>) {
    while let Some(node) = head {
        println!("{}", node.data);
        head = node.next;
    }
}
