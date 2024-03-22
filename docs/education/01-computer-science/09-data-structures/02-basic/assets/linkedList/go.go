package main

type Node struct {
	data interface{}
	next *Node
}

type LinkedList struct {
	head *Node
}

func (l *LinkedList) prepend(data interface{}) {
	l.head = &Node{data: data, next: l.head}
}

func (l *LinkedList) insertBefore(value interface{}, data interface{}) {
	if l.head == nil {
		return
	}

	if l.head.data == value {
		l.head = &Node{data: data, next: l.head}
		return
	}

	current := l.head
	for current.next != nil && current.next.data != value {
		current = current.next
	}

	if current.next != nil {
		current.next = &Node{data: data, next: current.next}
	}
}

func (l *LinkedList) insertAfter(value interface{}, data interface{}) {
	current := l.head
	for current != nil && current.data != value {
		current = current.next
	}

	if current != nil {
		current.next = &Node{data: data, next: current.next}
	}
}

func (l *LinkedList) insertAt(index int, data interface{}) {
	if index < 0 {
		panic("Index must be greater than or equal to 0")
	}

	if index == 0 {
		l.head = &Node{data: data, next: l.head}
		return
	}

	current := l.head
	currentIndex := 0
	for current != nil && currentIndex < index-1 {
		current = current.next
		currentIndex++
	}

	if current == nil {
		panic("Index exceeds the size of the list")
	}

	current.next = &Node{data: data, next: current.next}
}

func (l *LinkedList) append(data interface{}) {
	if l.head == nil {
		l.head = &Node{data: data}
	} else {
		current := l.head
		for current.next != nil {
			current = current.next
		}
		current.next = &Node{data: data}
	}
}

func (l *LinkedList) find(value interface{}) *Node {
	current := l.head
	for current != nil && current.data != value {
		current = current.next
	}
	return current
}

func (l *LinkedList) deleteHead() {
	if l.head != nil {
		l.head = l.head.next
	}
}

func (l *LinkedList) delete(value interface{}) {
	if l.head == nil {
		return
	}

	if l.head.data == value {
		l.head = l.head.next
		return
	}

	current := l.head
	for current.next != nil && current.next.data != value {
		current = current.next
	}

	if current.next != nil {
		current.next = current.next.next
	}
}

func (l *LinkedList) deleteLast() {
	if l.head == nil {
		return
	}

	if l.head.next == nil {
		l.head = nil
		return
	}

	current := l.head
	for current.next.next != nil {
		current = current.next
	}
	current.next = nil
}

func (l *LinkedList) reverse() {
	var prev *Node
	current := l.head
	var next *Node
	for current != nil {
		next = current.next
		current.next = prev
		prev = current
		current = next
	}
	l.head = prev
}

func (l *LinkedList) traverse() {
	current := l.head
	for current != nil {
		fmt.Println(current.data)
		current = current.next
	}
}
