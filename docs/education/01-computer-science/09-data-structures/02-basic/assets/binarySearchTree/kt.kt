class BinarySearchTree {
    data class Node(var key: Int, var left: Node? = null, var right: Node? = null)

    var root: Node? = null

    fun insert(root: Node?, key: Int): Node {
        if (root == null) {
            return Node(key)
        }

        if (key < root.key) {
            root.left = insert(root.left, key)
        } else if (key > root.key) {
            root.right = insert(root.right, key)
        }

        return root
    }

    fun search(root: Node?, key: Int): Node? {
        if (root == null || root.key == key) {
            return root
        }

        return if (key < root.key) {
            search(root.left, key)
        } else {
            search(root.right, key)
        }
    }

    fun findMin(root: Node?): Node? {
        var current = root
        while (current?.left != null) {
            current = current.left
        }
        return current
    }

    fun findMax(root: Node?): Node? {
        var current = root
        while (current?.right != null) {
            current = current.right
        }
        return current
    }

    fun findSuccessor(root: Node?, key: Int): Node? {
        if (root == null) {
            return null
        }

        var current = root
        var successor: Node? = null

        while (current != null) {
            if (key < current.key) {
                successor = current
                current = current.left
            } else {
                current = current.right
            }
        }

        return successor
    }

    fun findPredecessor(root: Node?, key: Int): Node? {
        if (root == null) {
            return null
        }

        var current = root
        var predecessor: Node? = null

        while (current != null) {
            if (key > current.key) {
                predecessor = current
                current = current.right
            } else {
                current = current.left
            }
        }

        return predecessor
    }

    fun deleteNode(root: Node?, key: Int): Node? {
        if (root == null) {
            return null
        }

        if (key < root.key) {
            root.left = deleteNode(root.left, key)
        } else if (key > root.key) {
            root.right = deleteNode(root.right, key)
        } else {
            if (root.left == null) {
                return root.right
            } else if (root.right == null) {
                return root.left
            }

            val successor = findMin(root.right)
            root.key = successor?.key ?: 0

            root.right = deleteNode(root.right, successor?.key ?: 0)
        }

        return root
    }

    fun bfsRecursive(root: Node?) {
        if (root == null) {
            return
        }

        val queue = mutableListOf<Node?>()
        queue.add(root)

        bfsHelper(queue)
    }

    private fun bfsHelper(queue: MutableList<Node?>) {
        if (queue.isEmpty()) {
            return
        }

        val current = queue.removeAt(0)
        println(it.key)

        current?.left?.let { queue.add(it) }
        current?.right?.let { queue.add(it) }

        bfsHelper(queue)
    }

    fun bfsIterative(root: Node?) {
        if (root == null) {
            return
        }

        val queue = mutableListOf<Node?>()
        queue.add(root)

        while (queue.isNotEmpty()) {
            val current = queue.removeAt(0)
            println(it.key)

            current?.left?.let { queue.add(it) }
            current?.right?.let { queue.add(it) }
        }
    }

    fun dfsPreOrderRecursive(root: Node?) {
        if (root == null) {
            return
        }
        println(it.key)
        dfsPreOrderRecursive(root.left)
        dfsPreOrderRecursive(root.right)
    }

    fun dfsPreOrderIterative(root: Node?) {
        if (root == null) {
            return
        }

        val stack = mutableListOf<Node?>()
        stack.add(root)

        while (stack.isNotEmpty()) {
            val current = stack.removeAt(stack.size - 1)
            println(it.key)

            current?.right?.let { stack.add(it) }
            current?.left?.let { stack.add(it) }
        }
    }

    fun dfsInOrderRecursive(root: Node?) {
        if (root == null) {
            return
        }
        dfsInOrderRecursive(root.left)
        println(it.key)
        dfsInOrderRecursive(root.right)
    }

    fun dfsInOrderIterative(root: Node?) {
        if (root == null) {
            return
        }

        val stack = mutableListOf<Node?>()
        var current = root

        while (current != null || stack.isNotEmpty()) {
            while (current != null) {
                stack.add(current)
                current = current.left
            }

            current = stack.removeAt(stack.size - 1)
            println(it.key)
            current = current.right
        }
    }

    fun dfsPostOrderRecursive(root: Node?) {
        if (root == null) {
            return
        }
        dfsPostOrderRecursive(root.left)
        dfsPostOrderRecursive(root.right)
        println(it.key)
    }

    fun dfsPostOrderIterative(root: Node?) {
        if (root == null) {
            return
        }

        val stack1 = mutableListOf<Node?>()
        val stack2 = mutableListOf<Node?>()
        stack1.add(root)

        while (stack1.isNotEmpty()) {
            val current = stack1.removeAt(stack1.size - 1)
            stack2.add(current)

            current?.left?.let { stack1.add(it) }
            current?.right?.let { stack1.add(it) }
        }

        while (stack2.isNotEmpty()) {
            println(it.key)
        }
    }
}
