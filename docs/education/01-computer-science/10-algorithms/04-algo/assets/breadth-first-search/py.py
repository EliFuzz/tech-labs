# Graph BFS
from collections import deque

def BFS(graph, start):
    visited = [False] * len(graph)
    queue = deque([start])
    visited[start] = True

    while queue:
        node = queue.popleft()
        print(node, end=' ')

        for neighbor in graph[node]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append(neighbor)

# Binary Tree BFS
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def BFS(root):
    if not root:
        return
    queue = deque([root])

    while queue:
        node = queue.popleft()
        print(node.val, end=' ')

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
