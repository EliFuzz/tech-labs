package main

import "container/heap"

type Item struct {
	Value    interface{}
	Priority int
}

type PriorityQueue []*Item

func (pq PriorityQueue) Len() int {
	return len(pq)
}

func (pq PriorityQueue) Less(i, j int) bool {
	return pq[i].Priority < pq[j].Priority
}

func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
}

func (pq *PriorityQueue) Push(x interface{}) {
	item := x.(*Item)
	*pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	*pq = old[0 : n-1]
	return item
}

func NewPriorityQueue() *PriorityQueue {
	pq := make(PriorityQueue, 0)
	heap.Init(&pq)
	return &pq
}

func (pq *PriorityQueue) Enqueue(value interface{}, priority int) {
	heap.Push(pq, &Item{Value: value, Priority: priority})
}

func (pq *PriorityQueue) Dequeue() interface{} {
	if pq.Len() == 0 {
		return nil
	}
	return heap.Pop(pq).(*Item).Value
}

func (pq *PriorityQueue) Peek() interface{} {
	if pq.Len() == 0 {
		return nil
	}
	return (pq[0]).Value
}

func (pq *PriorityQueue) ChangePriority(value interface{}, newPriority int) {
	for i := 0; i < pq.Len(); i++ {
		if pq[i].Value == value {
			pq[i].Priority = newPriority
			heap.Fix(pq, i)
			break
		}
	}
}

func (pq *PriorityQueue) FindByValue(value interface{}) interface{} {
	for i := 0; i < pq.Len(); i++ {
		if pq[i].Value == value {
			return pq[i].Value
		}
	}
	return nil
}
