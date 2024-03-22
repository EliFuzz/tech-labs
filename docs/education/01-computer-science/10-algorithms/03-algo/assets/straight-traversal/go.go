package main

type Node struct {
    data int
    next *Node
}

func traverseList(head *Node) {
    current := head
    for current != nil {
        fmt.Print(current.data, " ")
        current = current.next
    }
}
