class Stack<T> {
    private val elements: MutableList<T> = mutableListOf()

    fun push(item: T) {
        elements.add(item)
    }

    fun pop(): T? {
        if (elements.isNotEmpty()) {
            return elements.removeAt(elements.size - 1)
        }
        return null
    }

    fun peek(): T? {
        return elements.lastOrNull()
    }
}
