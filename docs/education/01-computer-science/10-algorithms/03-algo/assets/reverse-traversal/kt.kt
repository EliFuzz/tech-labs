class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

fun reverseTraversal(head: ListNode?) {
    if (head == null) return
    reverseTraversal(head.next)
    println(head.`val`)
}
