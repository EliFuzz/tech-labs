use std::collections::VecDeque;

// Graph DFS
fn dfs(graph: &Vec<Vec<usize>>, start: usize) {
    let mut visited = vec![false; graph.len()];
    let mut stack = Vec::new();
    stack.push(start);

    while let Some(node) = stack.pop() {
        if !visited[node] {
            visited[node] = true;
            print!("{} ", node);

            for &neighbor in &graph[node] {
                if !visited[neighbor] {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Binary Tree DFS
struct TreeNode {
    val: i32,
    left: Option<Box<TreeNode>>,
    right: Option<Box<TreeNode>>,
}

impl TreeNode {
    fn new(val: i32) -> Self {
        TreeNode { val, left: None, right: None }
    }
}

fn dfs_binary_tree(root: Option<Box<TreeNode>>) {
    let mut stack = Vec::new();
    stack.push(root);

    while let Some(mut node) = stack.pop() {
        if let Some(n) = node.as_ref() {
            print!("{} ", n.val);

            if let Some(right) = &n.right {
                stack.push(Some(right.clone()));
            }
            if let Some(left) = &n.left {
                stack.push(Some(left.clone()));
            }
        }
    }
}
