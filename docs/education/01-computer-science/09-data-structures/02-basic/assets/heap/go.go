package main

type Heap struct {
	comparator func(a, b interface{}) int
	heap       []interface{}
}

func NewHeap(comparator func(a, b interface{}) int) *Heap {
	return &Heap{
		comparator: comparator,
		heap:       []interface{}{},
	}
}

func (h *Heap) FindMin() interface{} {
	if len(h.heap) == 0 {
		return nil
	}
	return h.heap[0]
}

func (h *Heap) FindMax() interface{} {
	if len(h.heap) == 0 {
		return nil
	}
	return h.heap[len(h.heap)-1]
}

func (h *Heap) ExtractMin() interface{} {
	if len(h.heap) == 0 {
		return nil
	}

	min := h.heap[0]
	h.heap[0] = h.heap[len(h.heap)-1]
	h.heap = h.heap[:len(h.heap)-1]
	h.heapifyDown()

	return min
}

func (h *Heap) ExtractMax() interface{} {
	if len(h.heap) == 0 {
		return nil
	}

	max := h.heap[len(h.heap)-1]
	h.heap[0] = h.heap[len(h.heap)-1]
	h.heap = h.heap[:len(h.heap)-1]
	h.heapifyDown()

	return max
}

func (h *Heap) Insert(element interface{}) {
	h.heap = append(h.heap, element)
	h.heapifyUp()
}

func (h *Heap) IncreaseKey(index int, newKey interface{}) {
	if h.comparator(newKey, h.heap[index]) <= 0 {
		panic("New key must be greater than current key")
	}

	h.heap[index] = newKey
	h.heapifyUp(index)
}

func (h *Heap) DecreaseKey(index int, newKey interface{}) {
	if h.comparator(newKey, h.heap[index]) >= 0 {
		panic("New key must be less than current key")
	}

	h.heap[index] = newKey
	h.heapifyDown(index)
}

func (h *Heap) Meld(other *Heap) *Heap {
	mergedHeap := NewHeap(h.comparator)
	mergedHeap.heap = append(mergedHeap.heap, h.heap...)
	mergedHeap.heap = append(mergedHeap.heap, other.heap...)

	for i := len(h.heap) / 2; i >= 0; i-- {
		mergedHeap.heapifyDown(i)
	}

	return mergedHeap
}

func (h *Heap) heapifyUp(index int) {
	if index == 0 {
		return
	}

	parentIndex := (index - 1) / 2
	currentElement := h.heap[index]

	for index > 0 && h.comparator(currentElement, h.heap[parentIndex]) < 0 {
		h.heap[index] = h.heap[parentIndex]
		index = parentIndex
		parentIndex = (index - 1) / 2
	}

	h.heap[index] = currentElement
}

func (h *Heap) heapifyDown(index int) {
	if index >= len(h.heap) {
		return
	}

	for index*2+1 < len(h.heap) {
    leftChildIndex := index*2 + 1
    rightChildIndex := index*2 + 2
    leftChild := h.heap[leftChildIndex]
    rightChild := h.heap[rightChildIndex]

    minChildIndex := leftChildIndex
    if rightChildIndex < len(h.heap) && h.comparator(rightChild, leftChild) < 0 {
      minChildIndex = rightChildIndex
    }

    if h.comparator(h.heap[minChildIndex], h.heap[index]) < 0 {
      break
    }

    h.heap[index] = h.heap[minChildIndex]
    index = minChildIndex
  }

  h.heap[index] = h.heap[len(h.heap)-1]
}
