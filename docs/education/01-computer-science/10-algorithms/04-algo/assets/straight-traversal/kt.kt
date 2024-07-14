class Node(var data: Int) {
    var next: Node? = null
}

fun traverseList(head: Node?) {
    var current = head
    while (current != null) {
        print("${current.data} ")
        current = current.next
    }
}
