"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7324],{30328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>x,default:()=>T,frontMatter:()=>N,metadata:()=>f,toc:()=>j});var r=t(11527),l=t(88672),i=t(29140),d=t(52360),u=t(52296);const s='package main\n\ntype Node struct {\n\tvalue    interface{}\n\tnext     *Node\n\tprevious *Node\n}\n\ntype DoublyLinkedList struct {\n\thead *Node\n\ttail *Node\n}\n\nfunc (list *DoublyLinkedList) prepend(value interface{}) {\n\tn := &Node{value: value}\n\tif list.head == nil {\n\t\tlist.head = n\n\t\tlist.tail = n\n\t} else {\n\t\tn.previous = list.tail\n\t\tlist.tail.next = n\n\t\tlist.tail = n\n\t}\n}\n\nfunc (list *DoublyLinkedList) append(value interface{}) {\n\tn := &Node{value: value}\n\tif list.head == nil {\n\t\tlist.head = n\n\t\tlist.tail = n\n\t} else {\n\t\tlist.tail.next = n\n\t\tn.previous = list.tail\n\t\tlist.tail = n\n\t}\n}\n\nfunc (list *DoublyLinkedList) search(value interface{}) *Node {\n\tcurrentNode := list.head\n\tfor currentNode != nil && currentNode.value != value {\n\t\tcurrentNode = currentNode.next\n\t}\n\treturn currentNode\n}\n\nfunc (list *DoublyLinkedList) deleteHead() *Node {\n\tif list.head == nil {\n\t\treturn nil\n\t}\n\n\tdeletedHead := list.head\n\n\tif list.head.next != nil {\n\t\tlist.head = list.head.next\n\t\tlist.head.previous = nil\n\t} else {\n\t\tlist.tail = nil\n\t\tlist.head = nil\n\t}\n\treturn deletedHead\n}\n\nfunc (list *DoublyLinkedList) deleteNode(value interface{}) {\n\tcurrent := list.head\n\n\tfor current != nil {\n\t\tif current.value == value {\n\t\t\tif current == list.head {\n\t\t\t\tlist.head = current.next\n\t\t\t\tlist.head.previous = nil\n\t\t\t} else {\n\t\t\t\tcurrent.previous.next = current.next\n\t\t\t\tcurrent.next.previous = current.previous\n\t\t\t}\n\t\t\treturn\n\t\t}\n\t\tcurrent = current.next\n\t}\n}\n\nfunc (list *DoublyLinkedList) deleteLast() {\n\tif list.tail == nil {\n\t\tfmt.Println("The list is empty!")\n\t\treturn\n\t}\n\n\tif list.head == list.tail {\n\t\tlist.head = nil\n\t\tlist.tail = nil\n\t\treturn\n\t}\n\n\tprevNode := list.tail.previous\n\tprevNode.next = nil\n\tlist.tail = prevNode\n}\n\nfunc (list *DoublyLinkedList) reverse() {\n\tcurrentNode := list.head\n\tvar previousNode *Node\n\tvar nextNode *Node\n\n\tfor currentNode != nil {\n\t\tnextNode = currentNode.next\n\t\tpreviousNode = currentNode.previous\n\n\t\tcurrentNode.next = previousNode\n\t\tcurrentNode.previous = nextNode\n\n\t\tpreviousNode = currentNode\n\t\tcurrentNode = nextNode\n\t}\n\n\tlist.tail = list.head\n\tlist.head = previousNode\n}\n\nfunc (list *DoublyLinkedList) traversal() {\n\tcurrent := list.head\n\tfor current != nil {\n\t\tfmt.Println(current.value)\n\t\tcurrent = current.next\n\t}\n}\n\nfunc (list *DoublyLinkedList) reverseTraversal() {\n\tcurrent := list.tail\n\tfor current != nil {\n\t\tfmt.Println(current.value)\n\t\tcurrent = current.previous\n\t}\n}\n',a='public class DoublyLinkedList<T> {\n\n  private Node<T> head = null;\n  private Node<T> tail = null;\n\n  public void prepend(T value) {\n    Node<T> n = new Node<>(value);\n    if (head == null) {\n      head = n;\n      tail = n;\n    } else {\n      n.previous = tail;\n      tail.next = n;\n      tail = n;\n    }\n  }\n\n  public void append(T value) {\n    Node<T> n = new Node<>(value);\n    if (head == null) {\n      head = n;\n      tail = n;\n    } else {\n      tail.next = n;\n      n.previous = tail;\n      tail = n;\n    }\n  }\n\n  public Node<T> search(T value) {\n    Node<T> currentNode = head;\n    while (currentNode != null && !currentNode.value.equals(value)) {\n      currentNode = currentNode.next;\n    }\n    return currentNode;\n  }\n\n  public Node<T> deleteHead() {\n    if (head == null) {\n      return null;\n    }\n\n    Node<T> deletedHead = head;\n\n    if (head.next != null) {\n      head = head.next;\n      head.previous = null;\n    } else {\n      tail = null;\n      head = null;\n    }\n\n    return deletedHead;\n  }\n\n  public void deleteNode(T value) {\n    Node<T> current = head;\n\n    while (current != null) {\n      if (current.value.equals(value)) {\n        if (current == head) {\n          head = current.next;\n          if (head != null) {\n            head.previous = null;\n          }\n        } else {\n          current.previous.next = current.next;\n          if (current.next != null) {\n            current.next.previous = current.previous;\n          }\n        }\n        return;\n      }\n      current = current.next;\n    }\n  }\n\n  public void deleteLast() {\n    if (tail == null) {\n      System.out.println("The list is empty!");\n      return;\n    }\n\n    if (head == tail) {\n      head = null;\n      tail = null;\n      return;\n    }\n\n    Node<T> prevNode = tail.previous;\n    if (prevNode != null) {\n      prevNode.next = null;\n    }\n    tail = prevNode;\n  }\n\n  public void reverse() {\n    Node<T> currentNode = head;\n    Node<T> previousNode = null;\n    Node<T> nextNode;\n\n    while (currentNode != null) {\n      nextNode = currentNode.next;\n      previousNode = currentNode.previous;\n\n      currentNode.next = previousNode;\n      currentNode.previous = nextNode;\n\n      previousNode = currentNode;\n      currentNode = nextNode;\n    }\n\n    tail = head;\n    head = previousNode;\n  }\n\n  public void traversal() {\n    Node<T> current = head;\n    while (current != null) {\n      System.out.println(current.value);\n      current = current.next;\n    }\n  }\n\n  public void reverseTraversal() {\n    Node<T> current = tail;\n    while (current != null) {\n      System.out.println(current.value);\n      current = current.previous;\n    }\n  }\n\n  public class Node<T> {\n\n    T value;\n    Node<T> next = null;\n    Node<T> previous = null;\n\n    public Node(T value) {\n      this.value = value;\n    }\n  }\n}\n',o='class DoublyLinkedList {\n  constructor() {\n    this.head = null;\n    this.tail = null;\n  }\n\n  Node(value) {\n    return { value: value, next: null, previous: null };\n  }\n\n  prepend(value) {\n    const n = this.Node(value);\n    if (this.head === null) {\n      this.head = n;\n      this.tail = n;\n    } else {\n      n.previous = this.tail;\n      this.tail.next = n;\n      this.tail = n;\n    }\n  }\n\n  append(value) {\n    const n = this.Node(value);\n    if (this.head === null) {\n      this.head = n;\n      this.tail = n;\n    } else {\n      this.tail.next = n;\n      n.previous = this.tail;\n      this.tail = n;\n    }\n  }\n\n  search(value) {\n    let currentNode = this.head;\n    while (currentNode !== null && currentNode.value !== value) {\n      currentNode = currentNode.next;\n    }\n    return currentNode;\n  }\n\n  deleteHead() {\n    if (this.head === null) {\n      return null;\n    }\n\n    const deletedHead = this.head;\n\n    if (this.head.next !== null) {\n      this.head = this.head.next;\n      this.head.previous = null;\n    } else {\n      this.tail = null;\n      this.head = null;\n    }\n\n    return deletedHead;\n  }\n\n  deleteNode(value) {\n    let current = this.head;\n\n    while (current !== null) {\n      if (current.value === value) {\n        if (current === this.head) {\n          this.head = current.next;\n          this.head.previous = null;\n        } else {\n          current.previous.next = current.next;\n          current.next.previous = current.previous;\n        }\n        return;\n      }\n      current = current.next;\n    }\n  }\n\n  deleteLast() {\n    if (this.tail === null) {\n      console.log("The list is empty!");\n      return;\n    }\n\n    if (this.head === this.tail) {\n      this.head = null;\n      this.tail = null;\n      return;\n    }\n\n    const prevNode = this.tail.previous;\n    prevNode.next = null;\n    this.tail = prevNode;\n  }\n\n  reverse() {\n    let currentNode = this.head;\n    let previousNode = null;\n    let nextNode;\n\n    while (currentNode !== null) {\n      nextNode = currentNode.next;\n      previousNode = currentNode.previous;\n\n      currentNode.next = previousNode;\n      currentNode.previous = nextNode;\n\n      previousNode = currentNode;\n      currentNode = nextNode;\n    }\n\n    this.tail = this.head;\n    this.head = previousNode;\n  }\n\n  traversal() {\n    let current = this.head;\n    while (current !== null) {\n      console.log(current.value);\n      current = current.next;\n    }\n  }\n\n  reverseTraversal() {\n    let current = this.tail;\n    while (current !== null) {\n      console.log(current.value);\n      current = current.previous;\n    }\n  }\n}\n',c='class DoublyLinkedList<T> {\n    data class Node<T>(var value: T, var next: Node<T>? = null, var previous: Node<T>? = null)\n\n    private var head: Node<T>? = null\n    private var tail: Node<T>? = null\n\n    fun prepend(value: T) {\n        val n = Node(value)\n        if (head == null) {\n            head = n\n            tail = n\n        } else {\n            n.previous = tail\n            tail?.next = n\n            tail = n\n        }\n    }\n\n    fun append(value: T) {\n        val n = Node(value)\n        if (head == null) {\n            head = n\n            tail = n\n        } else {\n            tail?.next = n\n            n.previous = tail\n            tail = n\n        }\n    }\n\n    fun search(value: Int): Node? {\n        var currentNode = head\n        while (currentNode != null && currentNode.value != value) {\n            currentNode = currentNode.next\n        }\n        return currentNode\n    }\n\n    fun deleteHead(): Node? {\n        if (head == null) {\n            return null\n        }\n\n        val deletedHead = head\n\n        if (head?.next != null) {\n            head = head?.next\n            head?.previous = null\n        } else {\n            tail = null\n            head = null\n        }\n\n        return deletedHead\n    }\n\n    fun deleteNode(value: T) {\n        var current = head\n\n        while (current != null) {\n            if (current.value == value) {\n                if (current == head) {\n                    head = current.next\n                    head?.previous = null\n                } else {\n                    current.previous?.next = current.next\n                    current.next?.previous = current.previous\n                }\n                return\n            }\n            current = current.next\n        }\n    }\n\n    fun deleteLast() {\n        if (tail == null) {\n            println("The list is empty!")\n            return\n        }\n\n        if (head == tail) {\n            head = null\n            tail = null\n            return\n        }\n\n        val prevNode = tail?.previous\n        prevNode?.next = null\n        tail = prevNode\n    }\n\n    fun reverse() {\n        var currentNode = head\n        var previousNode: Node? = null\n        var nextNode: Node?\n\n        while (currentNode != null) {\n            nextNode = currentNode.next\n            previousNode = currentNode.previous\n\n            currentNode.next = previousNode\n            currentNode.previous = nextNode\n\n            previousNode = currentNode\n            currentNode = nextNode\n        }\n\n        tail = head\n        head = previousNode\n    }\n\n    fun traversal() {\n        var current = head\n        while (current != null) {\n            println(current.data)\n            current = current.next\n        }\n    }\n\n    fun reverseTraversal() {\n        var current = tail\n        while (current != null) {\n            println(current.data)\n            current = current.prev\n        }\n    }\n}\n',h='class Node:\n    def __init__(self, value, next=None, previous=None):\n        self.value = value\n        self.next = next\n        self.previous = previous\n\nclass DoublyLinkedList:\n    def __init__(self):\n        self.head = None\n        self.tail = None\n\n    def prepend(self, value):\n        n = Node(value)\n        if self.head is None:\n            self.head = n\n            self.tail = n\n        else:\n            n.previous = self.tail\n            self.tail.next = n\n            self.tail = n\n\n    def append(self, value):\n        n = Node(value)\n        if self.head is None:\n            self.head = n\n            self.tail = n\n        else:\n            self.tail.next = n\n            n.previous = self.tail\n            self.tail = n\n\n    def search(self, value):\n        currentNode = self.head\n        while currentNode is not None and currentNode.value != value:\n            currentNode = currentNode.next\n        return currentNode\n\n    def deleteHead(self):\n        if self.head is None:\n            return None\n\n        deletedHead = self.head\n\n        if self.head.next is not None:\n            self.head = self.head.next\n            self.head.previous = None\n        else:\n            self.tail = None\n            self.head = None\n\n        return deletedHead\n\n    def deleteNode(self, value):\n        current = self.head\n\n        while current is not None:\n            if current.value == value:\n                if current == self.head:\n                    self.head = current.next\n                    if self.head is not None:\n                        self.head.previous = None\n                else:\n                    current.previous.next = current.next\n                    if current.next is not None:\n                        current.next.previous = current.previous\n                return\n            current = current.next\n\n    def deleteLast(self):\n        if self.tail is None:\n            print("The list is empty!")\n            return\n\n        if self.head == self.tail:\n            self.head = None\n            self.tail = None\n            return\n\n        prevNode = self.tail.previous\n        if prevNode is not None:\n            prevNode.next = None\n        self.tail = prevNode\n\n    def reverse(self):\n        currentNode = self.head\n        previousNode = None\n        nextNode = None\n\n        while currentNode is not None:\n            nextNode = currentNode.next\n            previousNode = currentNode.previous\n\n            currentNode.next = previousNode\n            currentNode.previous = nextNode\n\n            previousNode = currentNode\n            currentNode = nextNode\n\n        self.tail = self.head\n        self.head = previousNode\n\n    def traversal(self):\n        current = self.head\n        while current is not None:\n            print(current.value)\n            current = current.next\n\n    def reverseTraversal(self):\n        current = self.tail\n        while current is not None:\n            print(current.value)\n            current = current.previous\n',v='pub struct DoublyLinkedList<T> {\n    head: Option<Box<Node<T>>>,\n    tail: Option<*mut Node<T>>,\n}\n\nstruct Node<T> {\n    value: T,\n    next: Option<Box<Node<T>>>,\n    prev: Option<*mut Node<T>>,\n}\n\nimpl<T> DoublyLinkedList<T> {\n    pub fn new() -> Self {\n        DoublyLinkedList {\n            head: None,\n            tail: None,\n        }\n    }\n\n    pub fn prepend(&mut self, value: T) {\n        let mut new_node = Box::new(Node {\n            value,\n            next: self.head.take(),\n            prev: None,\n        });\n\n        let raw_node = &mut *new_node as *mut Node<T>;\n\n        if let Some(old_head) = self.head.as_mut() {\n            old_head.prev = Some(raw_node);\n        } else {\n            self.tail = Some(raw_node);\n        }\n\n        self.head = Some(new_node);\n    }\n\n    pub fn append(&mut self, value: T) {\n        let mut new_node = Box::new(Node {\n            value,\n            next: None,\n            prev: self.tail,\n        });\n\n        let raw_node = &mut *new_node as *mut Node<T>;\n\n        unsafe {\n            if let Some(old_tail) = self.tail.as_mut() {\n                (*old_tail).next = Some(new_node);\n            } else {\n                self.head = Some(new_node);\n            }\n        }\n\n        self.tail = Some(raw_node);\n    }\n\n    pub fn search(&self, value: T) -> Option<&Node<T>>\n    where\n        T: std::cmp::PartialEq,\n    {\n        let mut current = self.head.as_deref();\n\n        while let Some(node) = current {\n            if node.value == value {\n                return Some(node);\n            }\n\n            current = node.next.as_deref();\n        }\n\n        None\n    }\n\n    pub fn delete_head(&mut self) -> Option<Box<Node<T>>> {\n        self.head.take().map(|mut old_head| {\n            self.head = old_head.next.take();\n\n            if let Some(head) = self.head.as_mut() {\n                head.prev = None;\n            } else {\n                self.tail = None;\n            }\n\n            old_head\n        })\n    }\n\n    pub fn delete_node(&mut self, value: T)\n    where\n        T: std::cmp::PartialEq,\n    {\n        let mut current = self.head.as_mut();\n\n        while let Some(node) = current {\n            if node.value == value {\n                let next = node.next.take();\n\n                if let Some(prev) = unsafe { node.prev.as_mut() } {\n                    prev.next = next;\n                } else {\n                    self.head = next;\n                }\n\n                return;\n            }\n\n            current = node.next.as_mut();\n        }\n    }\n\n    pub fn delete_last(&mut self) {\n        if let Some(tail) = self.tail {\n            unsafe {\n                if let Some(prev) = (*tail).prev.as_mut() {\n                    prev.next = None;\n                } else {\n                    self.head = None;\n                }\n            }\n\n            self.tail = None;\n        }\n    }\n\n    pub fn reverse(&mut self) {\n        let mut current = self.head.as_mut();\n        let mut prev: Option<*mut Node<T>> = None;\n\n        while let Some(node) = current {\n            let next = node.next.take();\n            node.prev = next.as_mut().map(|node| &mut **node as *mut Node<T>);\n            node.next = unsafe { prev.map(|prev| &mut *prev) };\n\n            prev = Some(node as *mut Node<T>);\n            current = next.as_mut();\n        }\n\n        std::mem::swap(&mut self.head, &mut self.tail);\n    }\n\n    pub fn traversal(&self) {\n        let mut current = self.head.as_deref();\n\n        while let Some(node) = current {\n            println!("{:?}", node.value);\n            current = node.next.as_deref();\n        }\n    }\n\n    pub fn reverse_traversal(&self) {\n        let mut current = self.tail;\n\n        while let Some(node) = unsafe { current.as_ref() } {\n            println!("{:?}", node.value);\n            current = node.prev;\n        }\n    }\n}\n',p='class DoublyLinkedList<T> {\n  class Node<T> {\n    constructor(public value: T, public next: Node<T> | null = null, public previous: Node<T> | null = null) {}\n  }\n\n  private head: Node<T> | null = null;\n  private tail: Node<T> | null = null;\n\n  prepend(value: T) {\n    const n = new Node(value);\n    if (this.head === null) {\n      this.head = n;\n      this.tail = n;\n    } else {\n      n.previous = this.tail;\n      if (this.tail) this.tail.next = n;\n      this.tail = n;\n    }\n  }\n\n  append(value: T) {\n    const n = new Node(value);\n    if (this.head === null) {\n      this.head = n;\n      this.tail = n;\n    } else {\n      if (this.tail) this.tail.next = n;\n      n.previous = this.tail;\n      this.tail = n;\n    }\n  }\n\n  search(value: T): Node<T> | null {\n    let currentNode = this.head;\n    while (currentNode !== null && currentNode.value !== value) {\n      currentNode = currentNode.next;\n    }\n    return currentNode;\n  }\n\n  deleteHead(): Node<T> | null {\n    if (this.head === null) {\n      return null;\n    }\n\n    const deletedHead = this.head;\n\n    if (this.head.next !== null) {\n      this.head = this.head.next;\n      if (this.head) this.head.previous = null;\n    } else {\n      this.tail = null;\n      this.head = null;\n    }\n\n    return deletedHead;\n  }\n\n  deleteNode(value: T) {\n    let current = this.head;\n\n    while (current !== null) {\n      if (current.value === value) {\n        if (current === this.head) {\n          this.head = current.next;\n          if (this.head) this.head.previous = null;\n        } else {\n          if (current.previous) current.previous.next = current.next;\n          if (current.next) current.next.previous = current.previous;\n        }\n        return;\n      }\n      current = current.next;\n    }\n  }\n\n  deleteLast() {\n    if (this.tail === null) {\n      console.log("The list is empty!");\n      return;\n    }\n\n    if (this.head === this.tail) {\n      this.head = null;\n      this.tail = null;\n      return;\n    }\n\n    const prevNode = this.tail.previous;\n    if (prevNode) prevNode.next = null;\n    this.tail = prevNode;\n  }\n\n  reverse() {\n    let currentNode = this.head;\n    let previousNode: Node<T> | null = null;\n    let nextNode: Node<T> | null;\n\n    while (currentNode !== null) {\n      nextNode = currentNode.next;\n      previousNode = currentNode.previous;\n\n      currentNode.next = previousNode;\n      currentNode.previous = nextNode;\n\n      previousNode = currentNode;\n      currentNode = nextNode;\n    }\n\n    this.tail = this.head;\n    this.head = previousNode;\n  }\n\n  traversal() {\n    let current = this.head;\n    while (current !== null) {\n      console.log(current.value);\n      current = current.next;\n    }\n  }\n\n  reverseTraversal() {\n    let current = this.tail;\n    while (current !== null) {\n      console.log(current.value);\n      current = current.previous;\n    }\n  }\n}\n',N={title:"Doubly Linked List",description:"Doubly Linked List Data Structure",hide_table_of_contents:!0},x=void 0,f={id:"education/computer-science/data-structures/basic/doubly-linked-list",title:"Doubly Linked List",description:"Doubly Linked List Data Structure",source:"@site/docs/education/01-computer-science/09-data-structures/02-basic/03-doubly-linked-list.mdx",sourceDirName:"education/01-computer-science/09-data-structures/02-basic",slug:"/education/computer-science/data-structures/basic/doubly-linked-list",permalink:"/tech-labs/docs/education/computer-science/data-structures/basic/doubly-linked-list",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/09-data-structures/02-basic/03-doubly-linked-list.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Doubly Linked List",description:"Doubly Linked List Data Structure",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Linked List",permalink:"/tech-labs/docs/education/computer-science/data-structures/basic/linked-list"},next:{title:"Queue",permalink:"/tech-labs/docs/education/computer-science/data-structures/basic/queue"}},m={},j=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function b(e){const n={admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(26194).Z+""})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Space"}),(0,r.jsx)("th",{colspan:"6",children:"Time"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{}),(0,r.jsx)("th",{children:"Access"}),(0,r.jsx)("th",{children:"Lookup"}),(0,r.jsx)("th",{children:"Insertion"}),(0,r.jsx)("th",{children:"Deletion"})]})]}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"fair",children:"O(n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"fair",children:"O(n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"fair",children:"O(n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(d.Z,{value:"short",label:"Short",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Doubly Linked List"})," is a type of data structure in which each node contains a data part and 2 pointers, one pointing to the next node and another pointing to the previous node in the sequence."]}),(0,r.jsx)(n.admonition,{title:"Simplified",type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Doubly Linked List"}),' is like a game of hopscotch. Each square, or "node", holds an item and information about the next and previous squares. You start at the "head" and can move forward or\nbackward to the "tail". You can also add or remove squares during the game.']})})]}),(0,r.jsx)(d.Z,{value:"detailed",label:"Detailed",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Doubly Linked List"})," in computer science is a sequence of nodes linked in both directions. Each node has two links pointing to its previous and next nodes. The list starts and ends with a\nterminator, usually a sentinel node or null, aiding in list traversal. If there's only one sentinel node, the list forms a circular link through it. Essentially, it's like having two singly linked\nlists with the same data but in reverse orders."]})})]}),"\n",(0,r.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(d.Z,{value:"practice",label:"Practice",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Aspect"}),(0,r.jsx)("th",{children:"Pseudo Code"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Prepend"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"prepend(value)\n  n = Node(value)\n  if head == \xf8:\n    head = n\n    tail = n\n  else:\n    n.previous = tail\n    tail.next = n\n    tail = n\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Append"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"append(value):\n  n = Node(value)\n  if head == \xf8:\n    head = n\n    tail = n\n  else:\n    tail.next = n\n    n.previous = tail\n    tail = n\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Search"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"search(value):\n  current_node = head\n  while current_node != \xf8 and current_node.value != value:\n    current_node = current_node.next\n  return current_node\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Delete Head"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"delete_head():\n  if head == \xf8:\n    return \xf8\n  deleted_head = head\n  if head.next != \xf8:\n    head = head.next\n    head.previous = \xf8\n  else:\n    tail = \xf8\n    head = \xf8\n  return deleted_head\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Delete Node"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"delete_node(value):\n current = head\n while current != \xf8:\n   if current.value == value:\n     if current == head:\n       head = current.next\n       head.previous = \xf8\n     else:\n       current.previous.next = current.next\n       current.next.previous = current.previous\n     return current\n   current = current.next\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Delete Tail"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'delete_tail():\n  if tail == \xf8:\n    print("The list is empty!")\n    return\n  if head == tail:\n    head = \xf8\n    tail = \xf8\n    return\n  prevNode = tail.previous\n  prevNode.next = \xf8\n  tail = prevNode\n'})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Reverse"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"reverse():\n  current_node = head\n  previous_node = \xf8\n  next_node = \xf8\n\n  while current_node != \xf8:\n    next_node = current_node.next\n    previous_node = current_node.previous\n    current_node.next = previous_node\n    current_node.previous = next_node\n    previous_node = current_node\n    current_node = next_node\n\n  tail = head\n  head = previous_node\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Traverse"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"traversal():\n  current = head\n  while current != \xf8:\n    yield current.data\n    current = current.next\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Reverse Traversal"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"reverse_traversal():\n  current = tail\n  while current != \xf8:\n    yield current.data\n    current = current.previous\n"})})})]})]})]})}),(0,r.jsx)(d.Z,{value:"solution",label:"Solution",children:(0,r.jsxs)(i.Z,{queryString:"code",children:[(0,r.jsx)(d.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,r.jsx)(u.Z,{language:"go",children:s})}),(0,r.jsx)(d.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,r.jsx)(u.Z,{language:"java",children:a})}),(0,r.jsx)(d.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,r.jsx)(u.Z,{language:"js",children:o})}),(0,r.jsx)(d.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,r.jsx)(u.Z,{language:"kotlin",children:c})}),(0,r.jsx)(d.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,r.jsx)(u.Z,{language:"python",children:h})}),(0,r.jsx)(d.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,r.jsx)(u.Z,{language:"rust",children:v})}),(0,r.jsx)(d.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,r.jsx)(u.Z,{language:"ts",children:p})})]})})]})]})}function T(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},26194:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/doublyLinkedList-270cc639812b3bad9df5fcb80720be44.svg"}}]);