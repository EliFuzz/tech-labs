package main

import (
	"container/list"
)

type LRUCacheOnMap struct {
	capacity int
	items    map[interface{}]interface{}
}

func NewLRUCacheOnMap(capacity int) *LRUCacheOnMap {
	return &LRUCacheOnMap{
		capacity: capacity,
		items:    make(map[interface{}]interface{}),
	}
}

func (lru *LRUCacheOnMap) Get(key interface{}) interface{} {
	if val, ok := lru.items[key]; ok {
		delete(lru.items, key)
		lru.items[key] = val
		return val
	}
	return nil
}

func (lru *LRUCacheOnMap) Set(key, val interface{}) {
	delete(lru.items, key)
	lru.items[key] = val
	if len(lru.items) > lru.capacity {
		for headKey := range lru.items {
			delete(lru.items, headKey)
			break
		}
	}
}

type LinkedListNode struct {
	key, val  interface{}
	prev, next *LinkedListNode
}

type LRUCache struct {
	capacity int
	nodesMap map[interface{}]*LinkedListNode
	size     int
	head     *LinkedListNode
	tail     *LinkedListNode
}

func NewLRUCache(capacity int) *LRUCache {
	head := &LinkedListNode{}
	tail := &LinkedListNode{}
	head.next = tail
	tail.prev = head

	return &LRUCache{
		capacity: capacity,
		nodesMap: make(map[interface{}]*LinkedListNode),
		size:     0,
		head:     head,
		tail:     tail,
	}
}

func (lru *LRUCache) Get(key interface{}) interface{} {
	if node, ok := lru.nodesMap[key]; ok {
		lru.promote(node)
		return node.val
	}
	return nil
}

func (lru *LRUCache) Set(key, val interface{}) {
	if node, ok := lru.nodesMap[key]; ok {
		node.val = val
		lru.promote(node)
	} else {
		node := &LinkedListNode{key: key, val: val}
		lru.append(node)
	}
}

func (lru *LRUCache) promote(node *LinkedListNode) {
	lru.evict(node)
	lru.append(node)
}

func (lru *LRUCache) append(node *LinkedListNode) {
	lru.nodesMap[node.key] = node

	oldTail := lru.tail.prev
	oldTail.next = node
	node.prev = oldTail
	node.next = lru.tail
	lru.tail.prev = node

	lru.size++

	if lru.size > lru.capacity {
		lru.evict(lru.head.next)
	}
}

func (lru *LRUCache) evict(node *LinkedListNode) {
	delete(lru.nodesMap, node.key)
	lru.size--

	prevNode := node.prev
	nextNode := node.next

	prevNode.next = nextNode
	nextNode.prev = prevNode
}
