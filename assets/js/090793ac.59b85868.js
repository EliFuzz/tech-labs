"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4169],{1750:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>j,contentTitle:()=>p,default:()=>A,frontMatter:()=>g,metadata:()=>m,toc:()=>x});var t=i(86070),r=i(25710),a=i(98459),l=i(37515),c=i(18792);const s="package main\n\n// recursive\nfunc factorialRecursive(n int) int {\n    if n <= 1 {\n        return 1\n    }\n    return n * factorialRecursive(n-1)\n}\n\n// iterative\nfunc factorialIterative(n int) int {\n    result := 1\n    for i := 2; i <= n; i++ {\n        result *= i\n    }\n    return result\n}\n",o="public class Main {\n\n  // recursive\n  public static int factorialRecursive(int n) {\n    if (n <= 1) {\n      return 1;\n    }\n    return n * factorialRecursive(n - 1);\n  }\n\n  // iterative\n  public static int factorialIterative(int n) {\n    int result = 1;\n    for (int i = 2; i <= n; i++) {\n      result *= i;\n    }\n    return result;\n  }\n}\n",u="// recursive\nfunction factorialRecursive(n) {\n  if (n <= 1) {\n    return 1;\n  }\n  return n * factorialRecursive(n - 1);\n}\n\n// iterative\nfunction factorialIterative(n) {\n  let result = 1;\n  for (let i = 2; i <= n; i++) {\n    result *= i;\n  }\n  return result;\n}\n",d="// recursive\nfun factorialRecursive(n: Int): Int {\n    return if (n <= 1) 1 else n * factorialRecursive(n - 1)\n}\n\n// iterative\nfun factorialIterative(n: Int): Int {\n    var result = 1\n    for (i in 2..n) {\n        result *= i\n    }\n    return result\n}\n=\n",h="# recursive\ndef factorial_recursive(n):\n    return 1 if n <= 1 else n * factorial_recursive(n - 1)\n\n# iterative\ndef factorial_iterative(n):\n    result = 1\n    for i in range(2, n + 1):\n        result *= i\n    return result\n",f="// recursive\nfn factorial_recursive(n: u64) -> u64 {\n    if n <= 1 {\n        1\n    } else {\n        n * factorial_recursive(n - 1)\n    }\n}\n\n// iterative\nfn factorial_iterative(n: u64) -> u64 {\n    let mut result = 1;\n    for i in 2..=n {\n        result *= i;\n    }\n    result\n}\n",v="// recursive\nfunction factorialRecursive(n: number): number {\n  return n <= 1 ? 1 : n * factorialRecursive(n - 1);\n}\n\n// iterative\nfunction factorialIterative(n: number): number {\n  let result = 1;\n  for (let i = 2; i <= n; i++) {\n    result *= i;\n  }\n  return result;\n}\n",g={title:"Factorial",description:"Factorial",hide_table_of_contents:!0},p=void 0,m={id:"education/computer-science/algorithms/algo/factorial",title:"Factorial",description:"Factorial",source:"@site/docs/education/01-computer-science/10-algorithms/04-algo/factorial.mdx",sourceDirName:"education/01-computer-science/10-algorithms/04-algo",slug:"/education/computer-science/algorithms/algo/factorial",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/factorial",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/04-algo/factorial.mdx",tags:[],version:"current",frontMatter:{title:"Factorial",description:"Factorial",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Eulerian Path and Eulerian Circuit - Fleury's Algorithm",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/eulerian-path-and-eulerian-circuit-fleurys-algorithm"},next:{title:"Fast Powering",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/fast-powering"}},j={},x=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function b(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsxs)(a.A,{queryString:"primary",children:[(0,t.jsx)(l.A,{value:"definition",label:"Definition",children:(0,t.jsx)(n.p,{children:"The Factorial Algorithm is a mathematical procedure used to calculate the factorial of a non-negative integer"})}),(0,t.jsx)(l.A,{value:"how",label:"Explanation",children:(0,t.jsxs)(n.p,{children:["The factorial of a non-negative integer ",(0,t.jsx)(n.code,{children:"n"}),", denoted as ",(0,t.jsx)(n.code,{children:"n!"}),", is the product of all positive integers less than or equal to ",(0,t.jsx)(n.code,{children:"n"}),". It's often expressed recursively or iteratively"]})}),(0,t.jsx)(l.A,{value:"guidance",label:"Guidance",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Start with a non-negative integer input ",(0,t.jsx)(n.code,{children:"n"})]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"n"})," is ",(0,t.jsx)(n.code,{children:"0"})," or ",(0,t.jsx)(n.code,{children:"1"}),", return ",(0,t.jsx)(n.code,{children:"1"})," (base case)"]}),"\n",(0,t.jsxs)(n.li,{children:["Otherwise, recursively multiply ",(0,t.jsx)(n.code,{children:"n"})," by the factorial of (",(0,t.jsx)(n.code,{children:"n-1"}),") until reaching the base case"]}),"\n",(0,t.jsx)(n.li,{children:"Return the final result"}),"\n"]})}),(0,t.jsx)(l.A,{value:"tips",label:"Tips",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"for small inputs (typically less than 12), consider using an iterative approach for efficiency"}),"\n",(0,t.jsx)(n.li,{children:"optimize for tail recursion if using a recursive approach to prevent stack overflow errors"}),"\n",(0,t.jsx)(n.li,{children:"use memoization technique to reduce the computation time and improve the performance"}),"\n"]})})]}),"\n",(0,t.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,t.jsxs)(a.A,{queryString:"primary",children:[(0,t.jsx)(l.A,{value:"practice",label:"Practice",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'factorial(n):\n  if n is negative:\n    throw "Invalid input: Cannot compute factorial of a negative number"\n  else if n equals 0 or 1:\n    return 1\n  else:\n    return n * factorial(n - 1)\n'})})}),(0,t.jsx)(l.A,{value:"solution",label:"Solution",children:(0,t.jsxs)(a.A,{queryString:"code",children:[(0,t.jsx)(l.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,t.jsx)(c.A,{language:"go",children:s})}),(0,t.jsx)(l.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,t.jsx)(c.A,{language:"java",children:o})}),(0,t.jsx)(l.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,t.jsx)(c.A,{language:"js",children:u})}),(0,t.jsx)(l.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,t.jsx)(c.A,{language:"kotlin",children:d})}),(0,t.jsx)(l.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,t.jsx)(c.A,{language:"python",children:h})}),(0,t.jsx)(l.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,t.jsx)(c.A,{language:"rust",children:f})}),(0,t.jsx)(l.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,t.jsx)(c.A,{language:"ts",children:v})})]})})]})]})}function A(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}}}]);