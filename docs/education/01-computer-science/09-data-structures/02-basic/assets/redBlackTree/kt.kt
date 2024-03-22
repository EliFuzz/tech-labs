class RedBlackTree {
    enum class Color {
        RED,
        BLACK
    }

    data class Node(var key: Int, var color: String, var leftChild: Node? = null, var rightChild: Node? = null, var parent: Node? = null)

    var root: Node? = null

    fun insertRBTree(key: Int) {
        val newNode = Node(key, RED)
        var uncle: Node? = null
        var currentNode = root

        while (currentNode != null) {
            uncle = currentNode
            if (newNode.key < currentNode.key) {
                currentNode = currentNode.leftChild
            } else {
                currentNode = currentNode.rightChild
            }
        }

        newNode.parent = uncle
        if (uncle == null) {
            root = newNode
        } else if (newNode.key < uncle.key) {
            uncle.leftChild = newNode
        } else {
            uncle.rightChild = newNode
        }

        insertFixup(newNode)
        root?.color = BLACK
    }

    private fun leftRotate(currentNode: Node) {
        val uncle = currentNode.rightChild
        currentNode.rightChild = uncle?.leftChild
        uncle?.leftChild?.parent = currentNode
        uncle?.parent = currentNode.parent

        if (currentNode.parent == null) {
            root = uncle
        } else if (currentNode == currentNode.parent?.leftChild) {
            currentNode.parent?.leftChild = uncle
        } else {
            currentNode.parent?.rightChild = uncle
        }

        uncle?.leftChild = currentNode
        currentNode.parent = uncle
    }

    private fun rightRotate(uncle: Node) {
        val currentNode = uncle.leftChild
        uncle.leftChild = currentNode?.rightChild
        currentNode?.rightChild?.parent = uncle
        currentNode?.parent = uncle.parent

        if (uncle.parent == null) {
            root = currentNode
        } else if (uncle == uncle.parent?.leftChild) {
            uncle.parent?.leftChild = currentNode
        } else {
            uncle.parent?.rightChild = currentNode
        }

        currentNode?.rightChild = uncle
        uncle.parent = currentNode
    }

    private fun insertFixup(newNode: Node?) {
        var current = newNode
        while (current?.parent != null && current.parent?.color == RED) {
            if (current.parent == current.parent?.parent?.leftChild) {
                val y = current.parent?.parent?.rightChild
                if (y != null && y.color == RED) {
                    current.parent?.color = BLACK
                    y.color = BLACK
                    current.parent?.parent?.color = RED
                    current = current.parent?.parent
                } else {
                    if (current == current.parent?.rightChild) {
                        current = current.parent
                        leftRotate(current)
                    }
                    current.parent?.color = BLACK
                    current.parent?.parent?.color = RED
                    rightRotate(current.parent?.parent!!)
                }
            } else {
                val y = current.parent?.parent?.leftChild
                if (y != null && y.color == RED) {
                    current.parent?.color = BLACK
                    y.color = BLACK
                    current.parent?.parent?.color = RED
                    current = current.parent?.parent
                } else {
                    if (current == current.parent?.leftChild) {
                        current = current.parent
                        rightRotate(current)
                    }
                    current.parent?.color = BLACK
                    current.parent?.parent?.color = RED
                    leftRotate(current.parent?.parent!!)
                }
            }
        }
        root?.color = BLACK
    }

    fun deleteRBTree(key: Int) {
        val nodeToDelete = search(root, key)
        if (nodeToDelete == null) {
            return
        }

        var successor = nodeToDelete
        var successorOriginalColor = successor.color
        val successorChild: Node?

        if (nodeToDelete.leftChild == null) {
            successorChild = nodeToDelete.rightChild
            transplant(nodeToDelete, nodeToDelete.rightChild)
        } else if (nodeToDelete.rightChild == null) {
            successorChild = nodeToDelete.leftChild
            transplant(nodeToDelete, nodeToDelete.leftChild)
        } else {
            successor = findMinNode(nodeToDelete.rightChild!!)
            successorOriginalColor = successor.color
            successorChild = successor.rightChild

            if (successor.parent == nodeToDelete) {
                successorChild?.parent = successor
            } else {
                transplant(successor, successor.rightChild)
                successor.rightChild = nodeToDelete.rightChild
                successor.rightChild?.parent = successor
            }

            transplant(nodeToDelete, successor)
            successor.leftChild = nodeToDelete.leftChild
            successor.leftChild?.parent = successor
            successor.color = nodeToDelete.color
        }

        if (successorOriginalColor == BLACK) {
            deleteFixup(successorChild)
        }
    }

    private fun search(root: Node?, key: Int): Node? {
        var current = root
        while (current != null && current.key != key) {
            if (key < current.key) {
                current = current.leftChild
            } else {
                current = current.rightChild
            }
        }
        return current
    }

    private fun findMinNode(node: Node): Node {
        var current = node
        while (current.leftChild != null) {
            current = current.leftChild!!
        }
        return current
    }

    private fun transplant(parent: Node, child: Node?) {
        if (parent.parent == null) {
            root = child
        } else if (parent == parent.parent?.leftChild) {
            parent.parent?.leftChild = child
        } else {
            parent.parent?.rightChild = child
        }

        child?.parent = parent.parent
    }

    private fun deleteFixup(currentNode: Node?) {
        var current = currentNode
        while (current != root && (current == null || current.color == BLACK)) {
            if (current == current?.parent?.leftChild) {
                var currentNodeSibling = current.parent?.rightChild
                if (currentNodeSibling?.color == RED) {
                    currentNodeSibling.color = BLACK
                    current.parent?.color = RED
                    leftRotate(current.parent!!)
                    currentNodeSibling = current.parent?.rightChild
                }
                if ((currentNodeSibling?.leftChild == null || currentNodeSibling.leftChild?.color == BLACK) &&
                        (currentNodeSibling.rightChild == null || currentNodeSibling.rightChild?.color == BLACK)
                ) {
                    currentNodeSibling.color = RED
                    current = current.parent
                } else {
                    if (currentNodeSibling.rightChild == null || currentNodeSibling.rightChild?.color == BLACK) {
                        currentNodeSibling.leftChild?.color = BLACK
                        currentNodeSibling.color = RED
                        rightRotate(currentNodeSibling)
                        currentNodeSibling = current.parent?.rightChild
                    }
                    currentNodeSibling?.color = current.parent?.color
                    current.parent?.color = BLACK
                    currentNodeSibling?.rightChild?.color = BLACK
                    leftRotate(tree, currentNode.parent!!)

                    current = root
                }
            } else {
                var currentNodeSibling = current.parent?.leftChild
                if (currentNodeSibling?.color == RED) {
                    currentNodeSibling.color = BLACK
                    current.parent?.color = RED
                    rightRotate(current.parent!!)
                    currentNodeSibling = current.parent?.leftChild
                }
                if ((currentNodeSibling?.rightChild == null || currentNodeSibling.rightChild?.color == BLACK) &&
                        (currentNodeSibling.leftChild == null || currentNodeSibling.leftChild?.color == BLACK)
                ) {
                    currentNodeSibling.color = RED
                    current = current.parent
                } else {
                    if (currentNodeSibling.leftChild == null || currentNodeSibling.leftChild?.color == BLACK) {
                        currentNodeSibling.rightChild?.color = BLACK
                        currentNodeSibling.color = RED
                        leftRotate(currentNodeSibling)
                        currentNodeSibling = current.parent?.leftChild
                    }
                    currentNodeSibling?.color = current.parent?.color
                    current.parent?.color = BLACK
                    currentNodeSibling?.leftChild?.color = BLACK
                    rightRotate(tree, currentNode.parent!!)
                    current = root
                }
            }
        }
        current?.color = BLACK
    }
}
