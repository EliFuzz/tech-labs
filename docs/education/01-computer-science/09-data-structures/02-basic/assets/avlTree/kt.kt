class AVLTree {
    data class AVLNode(var key: Int, var left: AVLNode? = null, var right: AVLNode? = null, var height: Int = 1)

    var root: AVLNode? = null

    fun insert(node: AVLNode?, key: Int): AVLNode {
        if (node == null) {
            return AVLNode(key)
        }

        if (key < node.key) {
            node.left = insert(node.left, key)
        } else if (key > node.key) {
            node.right = insert(node.right, key)
        } else {
        }

        node.height = 1 + max(height(node.left), height(node.right))

        return rebalance(node)
    }

    private fun rebalance(node: AVLNode?): AVLNode {
        val balance = getBalance(node)

        if (balance > 1) {
            if (getBalance(node?.left) < 0) {
                node?.left = leftRotate(node?.left)
            }
            return rightRotate(node)
        }

        if (balance < -1) {
            if (getBalance(node?.right) > 0) {
                node?.right = rightRotate(node?.right)
            }
            return leftRotate(node)
        }

        return node ?: AVLNode(0)
    }

    private fun leftRotate(y: AVLNode?): AVLNode? {
        val x = y?.right
        val T2 = x?.left

        x?.left = y
        y?.right = T2

        y?.height = 1 + max(height(y?.left), height(y?.right))
        x?.height = 1 + max(height(x?.left), height(x?.right))

        return x
    }

    private fun rightRotate(x: AVLNode?): AVLNode? {
        val y = x?.left
        val T2 = y?.right

        y?.right = x
        x?.left = T2

        x?.height = 1 + max(height(x?.left), height(x?.right))
        y?.height = 1 + max(height(y?.left), height(y?.right))

        return y
    }

    private fun height(node: AVLNode?): Int {
        return node?.height ?: 0
    }

    private fun getBalance(node: AVLNode?): Int {
        return height(node?.left) - height(node?.right)
    }

    fun search(node: AVLNode?, key: Int): AVLNode? {
        if (node == null || key == node.key) {
            return node
        }
        return if (key < node.key) {
            search(node.left, key)
        } else {
            search(node.right, key)
        }
    }

    fun findMin(node: AVLNode?): AVLNode? {
        var current = node
        while (current?.left != null) {
            current = current.left
        }
        return current
    }

    fun findMax(node: AVLNode?): AVLNode? {
        var current = node
        while (current?.right != null) {
            current = current.right
        }
        return current
    }
}
