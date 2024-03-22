class PriorityQueue<T> {
    private val heap: MutableList<Pair<T, Int>> = mutableListOf()

    fun enqueue(item: T, priority: Int) {
        heap.add(Pair(item, priority))
        heapifyUp()
    }

    fun dequeue(): T? {
        if (heap.isEmpty()) {
            return null
        }
        val highestPriorityItem = heap[0].first
        heap[0] = heap.last()
        heap.removeAt(heap.lastIndex)
        heapifyDown()
        return highestPriorityItem
    }

    fun peek(): T? {
        return if (heap.isEmpty()) {
            null
        } else {
            heap[0].first
        }
    }

    fun changePriority(item: T, newPriority: Int) {
        val index = heap.indexOfFirst { it.first == item }
        if (index != -1) {
            heap[index] = Pair(item, newPriority)
            heapifyUp(index)
        }
    }

    fun findByValue(item: T): T? {
        val index = heap.indexOfFirst { it.first == item }
        return if (index != -1) {
            heap[index].first
        } else {
            null
        }
    }

    private fun heapifyUp(index: Int = heap.lastIndex) {
        if (index == 0) {
            return
        }
        val parentIndex = (index - 1) / 2
        if (heap[parentIndex].second < heap[index].second) {
            swap(heap, parentIndex, index)
            heapifyUp(parentIndex)
        }
    }

    private fun heapifyDown() {
        var index = 0
        while (index < heap.size) {
            val leftChildIndex = 2 * index + 1
            val rightChildIndex = 2 * index + 2
            val smallestIndex = when {
                leftChildIndex < heap.size && heap[leftChildIndex].second < heap[index].second -> leftChildIndex
                rightChildIndex < heap.size && heap[rightChildIndex].second < heap[index].second -> rightChildIndex
                else -> break
            }
            swap(heap, index, smallestIndex)
            index = smallestIndex
        }
    }

    private fun swap(list: MutableList<Pair<T, Int>>, i: Int, j: Int) {
        val temp = list[i]
        list[i] = list[j]
        list[j] = temp
    }
}
