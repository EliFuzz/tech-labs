package main

type ListNode struct {
    Val  int
    Next *ListNode
}

func reverseTraversal(head *ListNode) {
    if head == nil {
        return
    }
    reverseTraversal(head.Next)
    fmt.Println(head.Val)
}
