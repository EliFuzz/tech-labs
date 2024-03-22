class DoublyLinkedList<T> {
    data class Node<T>(var value: T, var next: Node<T>? = null, var previous: Node<T>? = null)

    private var head: Node<T>? = null
    private var tail: Node<T>? = null

    fun prepend(value: T) {
        val n = Node(value)
        if (head == null) {
            head = n
            tail = n
        } else {
            n.previous = tail
            tail?.next = n
            tail = n
        }
    }

    fun append(value: T) {
        val n = Node(value)
        if (head == null) {
            head = n
            tail = n
        } else {
            tail?.next = n
            n.previous = tail
            tail = n
        }
    }

    fun search(value: Int): Node? {
        var currentNode = head
        while (currentNode != null && currentNode.value != value) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    fun deleteHead(): Node? {
        if (head == null) {
            return null
        }

        val deletedHead = head

        if (head?.next != null) {
            head = head?.next
            head?.previous = null
        } else {
            tail = null
            head = null
        }

        return deletedHead
    }

    fun deleteNode(value: T) {
        var current = head

        while (current != null) {
            if (current.value == value) {
                if (current == head) {
                    head = current.next
                    head?.previous = null
                } else {
                    current.previous?.next = current.next
                    current.next?.previous = current.previous
                }
                return
            }
            current = current.next
        }
    }

    fun deleteLast() {
        if (tail == null) {
            println("The list is empty!")
            return
        }

        if (head == tail) {
            head = null
            tail = null
            return
        }

        val prevNode = tail?.previous
        prevNode?.next = null
        tail = prevNode
    }

    fun reverse() {
        var currentNode = head
        var previousNode: Node? = null
        var nextNode: Node?

        while (currentNode != null) {
            nextNode = currentNode.next
            previousNode = currentNode.previous

            currentNode.next = previousNode
            currentNode.previous = nextNode

            previousNode = currentNode
            currentNode = nextNode
        }

        tail = head
        head = previousNode
    }

    fun traversal() {
        var current = head
        while (current != null) {
            println(current.data)
            current = current.next
        }
    }

    fun reverseTraversal() {
        var current = tail
        while (current != null) {
            println(current.data)
            current = current.prev
        }
    }
}
