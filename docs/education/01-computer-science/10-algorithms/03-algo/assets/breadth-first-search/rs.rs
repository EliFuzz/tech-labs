// Graph BFS
use std::collections::VecDeque;

fn bfs(graph: &Vec<Vec<usize>>, start: usize) {
    let mut visited = vec![false; graph.len()];
    let mut queue = VecDeque::new();
    queue.push_back(start);
    visited[start] = true;

    while let Some(node) = queue.pop_front() {
        print!("{} ", node);

        for &neighbor in &graph[node] {
            if !visited[neighbor] {
                visited[neighbor] = true;
                queue.push_back(neighbor);
            }
        }
    }
}

// Binary Tree BFS
#[derive(Debug)]
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

fn bfs(root: Option<Box<TreeNode>>) {
    if let Some(mut node) = root {
        let mut queue = VecDeque::new();
        queue.push_back(&mut node);

        while let Some(cur) = queue.pop_front() {
            print!("{} ", cur.val);

            if let Some(left) = &mut cur.left {
                queue.push_back(left);
            }
            if let Some(right) = &mut cur.right {
                queue.push_back(right);
            }
        }
    }
}
