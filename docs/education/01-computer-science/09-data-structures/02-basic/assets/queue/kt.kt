class Queue<T> {
    private val queue: MutableList<T> = mutableListOf()

    fun enqueue(item: T) {
        queue.add(item)
    }

    fun peek(): T? {
        return elements.firstOrNull()
    }

    fun dequeue(): T? {
        return elements.removeFirstOrNull()
    }
}
