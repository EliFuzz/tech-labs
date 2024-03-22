class LinkedList<T> {
    class Node<T>(var data: T, var next: Node<T>? = null)

    private var head: Node<T>? = null

    fun prepend(data: T) {
        head = Node(data, head)
    }

    fun insertBefore(value: T, data: T) {
        if (head == null) {
            return
        }

        if (head?.data == value) {
            head = Node(data, head)
            return
        }

        var current = head
        while (current?.next != null && current.next?.data != value) {
            current = current.next
        }

        if (current?.next != null) {
            current.next = Node(data, current.next)
        }
    }

    fun insertAfter(value: T, data: T) {
        var current = head
        while (current != null && current.data != value) {
            current = current.next
        }

        if (current != null) {
            current.next = Node(data, current.next)
        }
    }

    fun insertAt(index: Int, data: T) {
        if (index < 0) {
            throw IndexOutOfBoundsException("Index must be greater than or equal to 0")
        }

        if (index == 0) {
            head = Node(data, head)
            return
        }

        var current = head
        var currentIndex = 0
        while (current != null && currentIndex < index - 1) {
            current = current.next
            currentIndex++
        }

        if (current == null) {
            throw IndexOutOfBoundsException("Index exceeds the size of the list")
        }

        current.next = Node(data, current.next)
    }

    fun append(data: T) {
        if (head == null) {
            head = Node(data)
        } else {
            var current = head
            while (current?.next != null) {
                current = current.next
            }
            current?.next = Node(data)
        }
    }

    fun find(value: T): Node<T>? {
        var current = head
        while (current != null && current.data != value) {
            current = current.next
        }
        return current?.data
    }

    fun deleteHead() {
        if (head != null) {
            head = head?.next
        }
    }

    fun delete(value: T) {
        if (head == null) {
            return
        }

        if (head?.data == value) {
            head = head?.next
            return
        }

        var current = head
        while (current?.next != null && current.next?.data != value) {
            current = current.next
        }

        if (current?.next != null) {
            current.next = current.next?.next
        }
    }

    fun deleteLast() {
        if (head == null) {
            return
        }

        if (head?.next == null) {
            head = null
            return
        }

        var current = head
        while (current?.next?.next != null) {
            current = current.next
        }

        current?.next = null
    }

    fun reverse() {
        var prev: Node<T>?
        var current = head
        var next: Node<T>?
        while (current != null) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        head = prev
    }

    fun traverse() {
        var current = head
        while (current != null) {
            println(current.data)
            current = current.next
        }
    }
}
