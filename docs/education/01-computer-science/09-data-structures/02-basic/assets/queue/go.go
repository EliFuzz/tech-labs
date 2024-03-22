package main

import (
	"sync"
)

type Queue struct {
	queue []interface{}
	lock  sync.RWMutex
}

func NewQueue() *Queue {
	return &Queue{queue: make([]interface{}, 0)}
}

func (q *Queue) Enqueue(item interface{}) {
	q.lock.Lock()
	defer q.lock.Unlock()

	q.queue = append(q.queue, item)
}

func (q *Queue) Peek() (interface{}, bool) {
	q.lock.RLock()
	defer q.lock.RUnlock()

	if len(q.queue) == 0 {
		return nil, false
	}
	return q.queue[0], true
}

func (q *Queue) Dequeue() (interface{}, bool) {
	q.lock.Lock()
	defer q.lock.Unlock()

	if len(q.queue) == 0 {
		return nil, false
	}
	item := q.queue[0]
	q.queue = q.queue[1:]
	return item, true
}
