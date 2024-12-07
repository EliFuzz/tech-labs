"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6765],{93635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>v,frontMatter:()=>j,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"education/computer-science/data-structures/basic/stack","title":"Stack","description":"Stack Data Structure","source":"@site/docs/education/01-computer-science/09-data-structures/02-basic/05-stack.mdx","sourceDirName":"education/01-computer-science/09-data-structures/02-basic","slug":"/education/computer-science/data-structures/basic/stack","permalink":"/tech-labs/docs/education/computer-science/data-structures/basic/stack","draft":false,"unlisted":false,"editUrl":"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/09-data-structures/02-basic/05-stack.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Stack","description":"Stack Data Structure","hide_table_of_contents":true},"sidebar":"education","previous":{"title":"Queue","permalink":"/tech-labs/docs/education/computer-science/data-structures/basic/queue"},"next":{"title":"Hast Table","permalink":"/tech-labs/docs/education/computer-science/data-structures/basic/hash-table"}}');var l=n(86070),i=n(15658),a=n(52421),c=n(74610),r=n(42953);const o="package main\n\ntype Stack struct {\n\telements []interface{}\n}\n\nfunc (s *Stack) Push(item interface{}) {\n\ts.elements = append(s.elements, item)\n}\n\nfunc (s *Stack) Pop() (interface{}, bool) {\n\tif len(s.elements) == 0 {\n\t\treturn nil, false\n\t} else {\n\t\tindex := len(s.elements) - 1\n\t\telement := s.elements[index]\n\t\ts.elements = s.elements[:index]\n\t\treturn element, true\n\t}\n}\n\nfunc (s *Stack) Peek() (interface{}, bool) {\n\tif len(s.elements) == 0 {\n\t\treturn nil, false\n\t} else {\n\t\tindex := len(s.elements) - 1\n\t\treturn s.elements[index], true\n\t}\n}\n",d="import java.util.ArrayList;\n\npublic class Stack<T> {\n\n  private ArrayList<T> elements = new ArrayList<>();\n\n  public void push(T item) {\n    elements.add(item);\n  }\n\n  public T pop() {\n    if (!elements.isEmpty()) {\n      return elements.remove(elements.size() - 1);\n    }\n    return null;\n  }\n\n  public T peek() {\n    if (!elements.isEmpty()) {\n      return elements.get(elements.size() - 1);\n    }\n    return null;\n  }\n}\n",u="class Stack {\n  constructor() {\n    this.elements = [];\n  }\n\n  push(item) {\n    this.elements.push(item);\n  }\n\n  pop() {\n    if (this.elements.length !== 0) {\n      return this.elements.pop();\n    }\n    return null;\n  }\n\n  peek() {\n    if (this.elements.length !== 0) {\n      return this.elements[this.elements.length - 1];\n    }\n    return null;\n  }\n}\n",h="class Stack<T> {\n    private val elements: MutableList<T> = mutableListOf()\n\n    fun push(item: T) {\n        elements.add(item)\n    }\n\n    fun pop(): T? {\n        if (elements.isNotEmpty()) {\n            return elements.removeAt(elements.size - 1)\n        }\n        return null\n    }\n\n    fun peek(): T? {\n        return elements.lastOrNull()\n    }\n}\n",m="class Stack:\n    def __init__(self):\n        self.elements = []\n\n    def push(self, item):\n        self.elements.append(item)\n\n    def pop(self):\n        if len(self.elements) > 0:\n            return self.elements.pop()\n        return None\n\n    def peek(self):\n        if len(self.elements) > 0:\n            return self.elements[-1]\n        return None\n",p="struct Stack<T> {\n    elements: Vec<T>,\n}\n\nimpl<T> Stack<T> {\n    fn new() -> Self {\n        Stack {\n            elements: Vec::new(),\n        }\n    }\n\n    fn push(&mut self, item: T) {\n        self.elements.push(item);\n    }\n\n    fn pop(&mut self) -> Option<T> {\n        self.elements.pop()\n    }\n\n    fn peek(&self) -> Option<&T> {\n        self.elements.last()\n    }\n}\n",x="class Stack<T> {\n  private elements: T[] = [];\n\n  push(item: T): void {\n    this.elements.push(item);\n  }\n\n  pop(): T | null {\n    if (this.elements.length > 0) {\n      return this.elements.pop();\n    }\n    return null;\n  }\n\n  peek(): T | null {\n    return this.elements[this.elements.length - 1] || null;\n  }\n}\n",j={title:"Stack",description:"Stack Data Structure",hide_table_of_contents:!0},f=void 0,k={},b=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function g(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(2264).A+""})}),"\n",(0,l.jsxs)("table",{children:[(0,l.jsxs)("thead",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Space"}),(0,l.jsx)("th",{colspan:"6",children:"Time"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{}),(0,l.jsx)("th",{children:"Access"}),(0,l.jsx)("th",{children:"Lookup"}),(0,l.jsx)("th",{children:"Insertion"}),(0,l.jsx)("th",{children:"Deletion"})]})]}),(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("code",{className:"fair",children:"O(n)"})}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{className:"fair",children:"O(n)"})}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{className:"fair",children:"O(n)"})}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{className:"excellent",children:"O(1)"})})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,l.jsxs)(a.A,{queryString:"primary",children:[(0,l.jsxs)(c.A,{value:"short",label:"Short",children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Stack"})," is a data structure that stores items in a Last-In-First-Out (LIFO) manner, meaning the most recently added item is the first one to be removed."]}),(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Simplified"}),(0,l.jsx)(t.p,{children:"You have a stack of plates. You can only put a new plate on the top of the stack, and you can only take the plate that\u2019s on the top. You can\u2019t take the ones in the middle until you\u2019ve take the\nones on top of them."})]})]}),(0,l.jsxs)(c.A,{value:"detailed",label:"Detailed",children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Stack"})," is a concept that functions as a collection of elements. It primarily operates through 2 actions:"]}),(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"push"}),", which adds an element to the collection"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"pop"}),", which removes the most recent element that hasn't been removed yet"]}),"\n"]}),(0,l.jsxs)(t.p,{children:["This structure is also known as LIFO (last in, first out) due to the order in which elements are removed. A ",(0,l.jsx)(t.code,{children:"peek"}),' operation can also be used to access the top element without altering the stack.\nThe term "stack" is derived from the physical analogy of items stacked on top of each other, allowing easy removal from the top, while accessing deeper items may require removing several top items\nfirst.']})]})]}),"\n",(0,l.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,l.jsxs)(a.A,{queryString:"primary",children:[(0,l.jsx)(c.A,{value:"practice",label:"Practice",children:(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Aspect"}),(0,l.jsx)("th",{children:"Pseudo Code"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Peek"}),(0,l.jsx)("td",{children:(0,l.jsx)(t.code,{children:"peek(): stack.show_last()"})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Push"}),(0,l.jsx)("td",{children:(0,l.jsx)(t.code,{children:"push(): stack.add_to_end(data)"})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Pop"}),(0,l.jsx)("td",{children:(0,l.jsx)(t.code,{children:"pop(): stack.pop_from_end()"})})]})]})]})}),(0,l.jsx)(c.A,{value:"solution",label:"Solution",children:(0,l.jsxs)(a.A,{queryString:"code",children:[(0,l.jsx)(c.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,l.jsx)(r.A,{language:"go",children:o})}),(0,l.jsx)(c.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,l.jsx)(r.A,{language:"java",children:d})}),(0,l.jsx)(c.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,l.jsx)(r.A,{language:"js",children:u})}),(0,l.jsx)(c.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,l.jsx)(r.A,{language:"kotlin",children:h})}),(0,l.jsx)(c.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,l.jsx)(r.A,{language:"python",children:m})}),(0,l.jsx)(c.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,l.jsx)(r.A,{language:"rust",children:p})}),(0,l.jsx)(c.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,l.jsx)(r.A,{language:"ts",children:x})})]})})]})]})}function v(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},2264:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/stack-5b4819661d09ed9a32ba008bc122f59d.svg"}}]);