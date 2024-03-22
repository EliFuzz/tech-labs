package main

type Node struct {
	value    interface{}
	next     *Node
	previous *Node
}

type DoublyLinkedList struct {
	head *Node
	tail *Node
}

func (list *DoublyLinkedList) prepend(value interface{}) {
	n := &Node{value: value}
	if list.head == nil {
		list.head = n
		list.tail = n
	} else {
		n.previous = list.tail
		list.tail.next = n
		list.tail = n
	}
}

func (list *DoublyLinkedList) append(value interface{}) {
	n := &Node{value: value}
	if list.head == nil {
		list.head = n
		list.tail = n
	} else {
		list.tail.next = n
		n.previous = list.tail
		list.tail = n
	}
}

func (list *DoublyLinkedList) search(value interface{}) *Node {
	currentNode := list.head
	for currentNode != nil && currentNode.value != value {
		currentNode = currentNode.next
	}
	return currentNode
}

func (list *DoublyLinkedList) deleteHead() *Node {
	if list.head == nil {
		return nil
	}

	deletedHead := list.head

	if list.head.next != nil {
		list.head = list.head.next
		list.head.previous = nil
	} else {
		list.tail = nil
		list.head = nil
	}
	return deletedHead
}

func (list *DoublyLinkedList) deleteNode(value interface{}) {
	current := list.head

	for current != nil {
		if current.value == value {
			if current == list.head {
				list.head = current.next
				list.head.previous = nil
			} else {
				current.previous.next = current.next
				current.next.previous = current.previous
			}
			return
		}
		current = current.next
	}
}

func (list *DoublyLinkedList) deleteLast() {
	if list.tail == nil {
		fmt.Println("The list is empty!")
		return
	}

	if list.head == list.tail {
		list.head = nil
		list.tail = nil
		return
	}

	prevNode := list.tail.previous
	prevNode.next = nil
	list.tail = prevNode
}

func (list *DoublyLinkedList) reverse() {
	currentNode := list.head
	var previousNode *Node
	var nextNode *Node

	for currentNode != nil {
		nextNode = currentNode.next
		previousNode = currentNode.previous

		currentNode.next = previousNode
		currentNode.previous = nextNode

		previousNode = currentNode
		currentNode = nextNode
	}

	list.tail = list.head
	list.head = previousNode
}

func (list *DoublyLinkedList) traversal() {
	current := list.head
	for current != nil {
		fmt.Println(current.value)
		current = current.next
	}
}

func (list *DoublyLinkedList) reverseTraversal() {
	current := list.tail
	for current != nil {
		fmt.Println(current.value)
		current = current.previous
	}
}
