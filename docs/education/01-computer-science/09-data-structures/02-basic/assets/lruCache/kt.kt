class LRUCacheOnMap(private val capacity: Int) {
    private val items = mutableMapOf<Any, Any>()

    fun get(key: Any): Any? {
        if (!items.containsKey(key)) return null
        val value = items.remove(key)
        items[key] = value!!
        return value
    }

    fun set(key: Any, value: Any) {
        items.remove(key)
        items[key] = value
        if (items.size > capacity) {
            val headKey = items.keys.firstOrNull()
            items.remove(headKey)
        }
    }
}

class LinkedListNode(
        val key: Any,
        val value: Any,
        var prev: LinkedListNode? = null,
        var next: LinkedListNode? = null
)

class LRUCache(private val capacity: Int) {
    private val nodesMap = mutableMapOf<Any, LinkedListNode>()
    private var size = 0
    private val head = LinkedListNode(0, 0)
    private val tail = LinkedListNode(0, 0)

    fun get(key: Any): Any? {
        if (!nodesMap.containsKey(key)) return null
        val node = nodesMap[key]!!
        promote(node)
        return node.value
    }

    fun set(key: Any, value: Any) {
        if (nodesMap.containsKey(key)) {
            val node = nodesMap[key]!!
            node.value = value
            promote(node)
        } else {
            val node = LinkedListNode(key, value)
            append(node)
        }
    }

    private fun promote(node: LinkedListNode) {
        evict(node)
        append(node)
    }

    private fun append(node: LinkedListNode) {
        nodesMap[node.key] = node

        if (head.next == null) {
            head.next = node
            tail.prev = node
            node.prev = head
            node.next = tail
        } else {
            val oldTail = tail.prev!!
            oldTail.next = node
            node.prev = oldTail
            node.next = tail
            tail.prev = node
        }

        size += 1

        if (size > capacity) {
            evict(head.next!!)
        }
    }

    private fun evict(node: LinkedListNode) {
        nodesMap.remove(node.key)
        size -= 1

        val prevNode = node.prev!!
        val nextNode = node.next!!

        if (prevNode == head && nextNode == tail) {
            head.next = null
            tail.prev = null
            size = 0
            return
        }

        if (prevNode == head) {
            nextNode.prev = head
            head.next = nextNode
            return
        }

        if (nextNode == tail) {
            prevNode.next = tail
            tail.prev = prevNode
            return
        }

        prevNode.next = nextNode
        nextNode.prev = prevNode
    }
}
