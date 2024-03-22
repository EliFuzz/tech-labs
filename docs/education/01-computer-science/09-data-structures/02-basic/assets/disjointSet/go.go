package main

import (
	"errors"
)

type DisjointSetItem struct {
	value       interface{}
	keyCallback func(interface{}) interface{}
	parent      *DisjointSetItem
	children    map[interface{}]*DisjointSetItem
}

func NewDisjointSetItem(value interface{}, keyCallback func(interface{}) interface{}) *DisjointSetItem {
	return &DisjointSetItem{
		value:       value,
		keyCallback: keyCallback,
		children:    make(map[interface{}]*DisjointSetItem),
	}
}

func (item *DisjointSetItem) GetKey() interface{} {
	if item.keyCallback != nil {
		return item.keyCallback(item.value)
	}
	return item.value
}

func (item *DisjointSetItem) GetRoot() *DisjointSetItem {
	if item.isRoot() {
		return item
	}
	return item.parent.GetRoot()
}

func (item *DisjointSetItem) isRoot() bool {
	return item.parent == nil
}

func (item *DisjointSetItem) GetRank() int {
	if len(item.GetChildren()) == 0 {
		return 0
	}

	rank := 0

	for _, child := range item.GetChildren() {
		rank += 1
		rank += child.GetRank()
	}

	return rank
}

func (item *DisjointSetItem) GetChildren() []*DisjointSetItem {
	children := make([]*DisjointSetItem, 0, len(item.children))
	for _, child := range item.children {
		children = append(children, child)
	}
	return children
}

func (item *DisjointSetItem) SetParent(parentItem *DisjointSetItem, forceSettingParentChild bool) *DisjointSetItem {
	item.parent = parentItem
	if forceSettingParentChild {
		parentItem.AddChild(item)
	}
	return item
}

func (item *DisjointSetItem) AddChild(childItem *DisjointSetItem) *DisjointSetItem {
	item.children[childItem.GetKey()] = childItem
	childItem.SetParent(item, false)
	return item
}

type DisjointSet struct {
	keyCallback func(interface{}) interface{}
	items       map[interface{}]*DisjointSetItem
}

func NewDisjointSet(keyCallback func(interface{}) interface{}) *DisjointSet {
	return &DisjointSet{
		keyCallback: keyCallback,
		items:       make(map[interface{}]*DisjointSetItem),
	}
}

func (ds *DisjointSet) MakeSet(itemValue interface{}) *DisjointSet {
	disjointSetItem := NewDisjointSetItem(itemValue, ds.keyCallback)

	if _, exists := ds.items[disjointSetItem.GetKey()]; !exists {
		ds.items[disjointSetItem.GetKey()] = disjointSetItem
	}

	return ds
}

func (ds *DisjointSet) Find(itemValue interface{}) (interface{}, error) {
	templateDisjointItem := NewDisjointSetItem(itemValue, ds.keyCallback)
	requiredDisjointItem, exists := ds.items[templateDisjointItem.GetKey()]

	if !exists {
		return nil, nil
	}

	return requiredDisjointItem.GetRoot().GetKey(), nil
}

func (ds *DisjointSet) Union(valueA, valueB interface{}) *DisjointSet {
	rootKeyA, errA := ds.Find(valueA)
	rootKeyB, errB := ds.Find(valueB)

	if errA != nil || errB != nil {
		panic(errors.New("One or two values are not in sets"))
	}

	if rootKeyA == rootKeyB {
		return ds
	}

	rootA := ds.items[rootKeyA]
	rootB := ds.items[rootKeyB]

	if rootA.GetRank() < rootB.GetRank() {
		rootB.AddChild(rootA)
		return ds
	}

	rootA.AddChild(rootB)

	return ds
}

func (ds *DisjointSet) InSameSet(valueA, valueB interface{}) (bool, error) {
	rootKeyA, errA := ds.Find(valueA)
	rootKeyB, errB := ds.Find(valueB)

	if errA != nil || errB != nil {
		panic(errors.New("One or two values are not in sets"))
	}

	return rootKeyA == rootKeyB, nil
}
