"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1777],{7189:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>j,contentTitle:()=>v,default:()=>R,frontMatter:()=>m,metadata:()=>p,toc:()=>g});var c=i(11527),t=i(88672),r=i(29140),a=i(52360),s=i(52296);const l="package main\n\n// Recursive\nfunc fibonacciRecursive(n int) int {\n    if n <= 1 {\n        return n\n    }\n    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)\n}\n\n// Iterative\nfunc fibonacciIterative(n int) int {\n    if n <= 1 {\n        return n\n    }\n    a, b := 0, 1\n    for i := 2; i <= n; i++ {\n        a, b = b, a+b\n    }\n    return b\n}\n",o="public class Fibonacci {\n\n  // Recursive\n  public static int fibonacciRecursive(int n) {\n    if (n <= 1) {\n      return n;\n    }\n    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);\n  }\n\n  // Iterative\n  public static int fibonacciIterative(int n) {\n    if (n <= 1) {\n      return n;\n    }\n    int a = 0, b = 1;\n    for (int i = 2; i <= n; i++) {\n      int temp = b;\n      b = a + b;\n      a = temp;\n    }\n    return b;\n  }\n}\n",u="// Recursive\nfunction fibonacciRecursive(n) {\n  if (n <= 1) {\n    return n;\n  }\n  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);\n}\n\n// Iterative\nfunction fibonacciIterative(n) {\n  if (n <= 1) {\n    return n;\n  }\n  let a = 0, b = 1;\n  for (let i = 2; i <= n; i++) {\n    let temp = b;\n    b = a + b;\n    a = temp;\n  }\n  return b;\n}\n",d="// Recursive\nfun fibonacciRecursive(n: Int): Int {\n    return if (n <= 1) n else fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)\n}\n\n// Iterative\nfun fibonacciIterative(n: Int): Int {\n    if (n <= 1) return n\n    var a = 0\n    var b = 1\n    var temp: Int\n    for (i in 2..n) {\n        temp = b\n        b += a\n        a = temp\n    }\n    return b\n}\n",b="# Recursive\ndef fibonacciRecursive(n):\n    if n <= 1:\n        return n\n    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)\n\n# Iterative\ndef fibonacciIterative(n):\n    if n <= 1:\n        return n\n    a, b = 0, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b\n",h="// Recursive\nfn fibonacci_recursive(n: i32) -> i32 {\n    if n <= 1 {\n        n\n    } else {\n        fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)\n    }\n}\n\n// Iterative\nfn fibonacci_iterative(n: i32) -> i32 {\n    if n <= 1 {\n        return n;\n    }\n    let mut a = 0;\n    let mut b = 1;\n    for _ in 2..=n {\n        let temp = b;\n        b += a;\n        a = temp;\n    }\n    b\n}\n",f="// Recursive\nfunction fibonacciRecursive(n: number): number {\n  if (n <= 1) return n;\n  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);\n}\n\n// Iterative\nfunction fibonacciIterative(n: number): number {\n  if (n <= 1) return n;\n  let a = 0,\n    b = 1;\n  for (let i = 2; i <= n; i++) {\n    let temp = b;\n    b = a + b;\n    a = temp;\n  }\n  return b;\n}\n",m={title:"Fibonacci Number",description:"Fibonacci Number",hide_table_of_contents:!0},v=void 0,p={id:"education/computer-science/algorithms/algo/fibonacci-number",title:"Fibonacci Number",description:"Fibonacci Number",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/fibonacci-number.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/fibonacci-number",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/fibonacci-number",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/fibonacci-number.mdx",tags:[],version:"current",frontMatter:{title:"Fibonacci Number",description:"Fibonacci Number",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Fast Powering",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/fast-powering"},next:{title:"Fisher\u2013Yates Shuffle",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/fisher\u2013yates-shuffle"}},j={},g=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function x(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(a.Z,{value:"definition",label:"Definition",children:(0,c.jsx)(e.p,{children:"The Fibonacci number algorithm generates a sequence of numbers known as the Fibonacci sequence, where each number is the sum of the two preceding ones, starting with 0 and 1"})}),(0,c.jsx)(a.Z,{value:"how",label:"Explanation",children:(0,c.jsxs)(e.p,{children:["To compute the nth Fibonacci number, a function named ",(0,c.jsx)(e.code,{children:"fibonacci"})," is created, accepting an integer parameter ",(0,c.jsx)(e.code,{children:"n"}),". Inside this function, a base case is established: if ",(0,c.jsx)(e.code,{children:"n"})," is 0 or 1, the function returns ",(0,c.jsx)(e.code,{children:"n"}),". Otherwise, the function recursively calls itself with ",(0,c.jsx)(e.code,{children:"n - 1"})," and ",(0,c.jsx)(e.code,{children:"n - 2"}),", adding their results together. This recursive process continues until reaching the base case. Finally, the sum obtained from these recursive calls is returned as the nth Fibonacci number"]})}),(0,c.jsx)(a.Z,{value:"guidance",label:"Guidance",children:(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["Start with ",(0,c.jsx)(e.code,{children:"a = 0"})," and ",(0,c.jsx)(e.code,{children:"b = 1"})]}),"\n",(0,c.jsxs)(e.li,{children:["Iterate ",(0,c.jsx)(e.code,{children:"n"})," times (where ",(0,c.jsx)(e.code,{children:"n"})," is the desired Fibonacci number's position)","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["update ",(0,c.jsx)(e.code,{children:"temp"})," to ",(0,c.jsx)(e.code,{children:"a"})]}),"\n",(0,c.jsxs)(e.li,{children:["set ",(0,c.jsx)(e.code,{children:"a"})," to ",(0,c.jsx)(e.code,{children:"b"})]}),"\n",(0,c.jsxs)(e.li,{children:["update ",(0,c.jsx)(e.code,{children:"b"})," to ",(0,c.jsx)(e.code,{children:"temp + b"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["Return the value of ",(0,c.jsx)(e.code,{children:"a"})]}),"\n"]})}),(0,c.jsx)(a.Z,{value:"tips",label:"Tips",children:(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"use dynamic programming for better efficiency"}),"\n",(0,c.jsx)(e.li,{children:"avoid recursive approaches for large values of n due to stack overflow"}),"\n"]})})]}),"\n",(0,c.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(a.Z,{value:"practice",label:"Practice",children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"fibonacci(n):\n  if n <= 1:\n    return n\n  else:\n    return fibonacci(n - 1) + fibonacci(n - 2)\n"})})}),(0,c.jsx)(a.Z,{value:"solution",label:"Solution",children:(0,c.jsxs)(r.Z,{queryString:"code",children:[(0,c.jsx)(a.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,c.jsx)(s.Z,{language:"go",children:l})}),(0,c.jsx)(a.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,c.jsx)(s.Z,{language:"java",children:o})}),(0,c.jsx)(a.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,c.jsx)(s.Z,{language:"js",children:u})}),(0,c.jsx)(a.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,c.jsx)(s.Z,{language:"kotlin",children:d})}),(0,c.jsx)(a.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,c.jsx)(s.Z,{language:"python",children:b})}),(0,c.jsx)(a.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,c.jsx)(s.Z,{language:"rust",children:h})}),(0,c.jsx)(a.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,c.jsx)(s.Z,{language:"ts",children:f})})]})})]})]})}function R(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(x,{...n})}):x(n)}}}]);