# Graph DFS
def dfs_graph(graph, start):
    visited = [False] * len(graph)
    stack = []
    stack.append(start)

    while stack:
        node = stack.pop()
        if not visited[node]:
            visited[node] = True
            print(node, end=" ")

            for neighbor in graph[node]:
                if not visited[neighbor]:
                    stack.append(neighbor)

# Binary Tree DFS
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def dfs_binary_tree(root):
    if not root:
        return
    stack = []
    stack.append(root)

    while stack:
        node = stack.pop()
        print(node.val, end=" ")

        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)
