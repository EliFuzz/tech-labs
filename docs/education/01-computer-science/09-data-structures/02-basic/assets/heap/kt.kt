class Heap<T>(private val comparator: (T, T) -> Int) {
    private val heap: MutableList<T> = mutableListOf()

    fun findMin(): T? = heap.firstOrNull()

    fun findMax(): T? = heap.lastOrNull()

    fun extractMin(): T? {
        if (heap.isEmpty()) return null

        val min = heap[0]
        heap[0] = heap.last()
        heap.removeAt(heap.lastIndex)
        heapifyDown()

        return min
    }

    fun extractMax(): T? {
        if (heap.isEmpty()) return null

        val max = heap.last()
        heap[0] = heap.first()
        heap.removeAt(heap.lastIndex)
        heapifyDown()

        return max
    }

    fun insert(element: T) {
        heap.add(element)
        heapifyUp()
    }

    fun increaseKey(index: Int, newKey: T) {
        if (newKey < heap[index]) throw IllegalArgumentException("New key must be greater than current key")

        heap[index] = newKey
        heapifyUp(index)
    }

    fun decreaseKey(index: Int, newKey: T) {
        if (newKey > heap[index]) throw IllegalArgumentException("New key must be less than current key")

        heap[index] = newKey
        heapifyDown(index)
    }

    fun meld(other: Heap<T>): Heap<T> {
        val mergedHeap = Heap(comparator)
        mergedHeap.heap.addAll(heap)
        mergedHeap.heap.addAll(other.heap)

        for (i in heap.size / 2 downTo 0) {
            heapifyDown(i)
        }

        return mergedHeap
    }

    private fun heapifyUp(index: Int = heap.size - 1) {
        var currentIndex = index
        val currentElement = heap[currentIndex]

        while (currentIndex > 0) {
            val parentIndex = (currentIndex - 1) / 2
            val parent = heap[parentIndex]

            if (comparator(currentElement, parent) >= 0) break

            heap[currentIndex] = parent
            currentIndex = parentIndex
        }

        heap[currentIndex] = currentElement
    }

    private fun heapifyDown(index: Int = 0) {
        var currentIndex = index

        while (currentIndex < heap.size) {
            val leftChildIndex = 2 * currentIndex + 1
            val rightChildIndex = 2 * currentIndex + 2
            val leftChild = heap.getOrNull(leftChildIndex)
            val rightChild = heap.getOrNull(rightChildIndex)

            val minChildIndex = if (leftChild == null || rightChild == null) {
                if (leftChild == null) leftChildIndex else rightChildIndex
            } else {
                when (comparator(leftChild, rightChild)) {
                    -1 -> leftChildIndex
                    1 -> rightChildIndex
                    else -> if (comparator(leftChild, heap[currentIndex]) <= 0) leftChildIndex else rightChildIndex
                }
            }

            if (minChildIndex == null || comparator(heap[minChildIndex], heap[currentIndex]) >= 0) break

            val minChild = heap[minChildIndex]
            heap[currentIndex] = minChild
            currentIndex = minChildIndex
        }

        heap[currentIndex] = heap[index]
    }
}
