"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8661],{67470:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>m,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var i=t(86070),r=t(25710),s=t(98459),a=t(37515),l=t(18792);const o="package main\n\n// iterative\nfunc fastPowerIterative(x, n int) int {\n    result := 1\n    for n > 0 {\n        if n&1 == 1 {\n            result *= x\n        }\n        x *= x\n        n >>= 1\n    }\n    return result\n}\n\n// recursive\nfunc fastPowerRecursive(x, n int) int {\n    if n == 0 {\n        return 1\n    }\n    temp := fastPowerRecursive(x, n/2)\n    if n%2 == 0 {\n        return temp * temp\n    }\n    return x * temp * temp\n}\n",c="public class Main {\n\n  // iterative\n  public static int fastPowerIterative(int x, int n) {\n    int result = 1;\n    while (n > 0) {\n      if ((n & 1) == 1) {\n        result *= x;\n      }\n      x *= x;\n      n >>= 1;\n    }\n    return result;\n  }\n\n  // recursive\n  public static int fastPowerRecursive(int x, int n) {\n    if (n == 0) {\n      return 1;\n    }\n    int temp = fastPowerRecursive(x, n / 2);\n    if (n % 2 == 0) {\n      return temp * temp;\n    }\n    return x * temp * temp;\n  }\n}\n",u="// iterative\nfunction fastPowerIterative(x, n) {\n  let result = 1;\n  while (n > 0) {\n    if (n & 1) {\n      result *= x;\n    }\n    x *= x;\n    n >>= 1;\n  }\n  return result;\n}\n\n// recursive\nfunction fastPowerRecursive(x, n) {\n  if (n === 0) {\n    return 1;\n  }\n  const temp = fastPowerRecursive(x, Math.floor(n / 2));\n  if (n % 2 === 0) {\n    return temp * temp;\n  }\n  return x * temp * temp;\n}\n",d="// iterative\nfun fastPowerIterative(x: Int, n: Int): Int {\n    var result = 1\n    var base = x\n    var exponent = n\n    while (exponent > 0) {\n        if (exponent and 1 == 1) {\n            result *= base\n        }\n        base *= base\n        exponent = exponent shr 1\n    }\n    return result\n}\n\n// recursive\nfun fastPowerRecursive(x: Int, n: Int): Int {\n    if (n == 0) {\n        return 1\n    }\n    val temp = fastPowerRecursive(x, n / 2)\n    return if (n % 2 == 0) temp * temp else x * temp * temp\n}\n",p="# iterative\ndef fast_power_iterative(x, n):\n    result = 1\n    while n > 0:\n        if n & 1:\n            result *= x\n        x *= x\n        n >>= 1\n    return result\n\n# recursive\ndef fast_power_recursive(x, n):\n    if n == 0:\n        return 1\n    temp = fast_power_recursive(x, n // 2)\n    if n % 2 == 0:\n        return temp * temp\n    return x * temp * temp\n",h="// iterative\nfn fast_power_iterative(x: i32, n: i32) -> i32 {\n    let mut result = 1;\n    let mut base = x;\n    let mut exponent = n;\n    while exponent > 0 {\n        if exponent & 1 == 1 {\n            result *= base;\n        }\n        base *= base;\n        exponent >>= 1;\n    }\n    result\n}\n\n// recursive\nfn fast_power_recursive(x: i32, n: i32) -> i32 {\n    if n == 0 {\n        return 1;\n    }\n    let temp = fast_power_recursive(x, n / 2);\n    if n % 2 == 0 {\n        temp * temp\n    } else {\n        x * temp * temp\n    }\n}\n",x="// iterative\nfunction fastPowerIterative(x: number, n: number): number {\n  let result = 1;\n  while (n > 0) {\n    if (n & 1) {\n      result *= x;\n    }\n    x *= x;\n    n >>= 1;\n  }\n  return result;\n}\n\n// recursive\nfunction fastPowerRecursive(x: number, n: number): number {\n  if (n === 0) {\n    return 1;\n  }\n  const temp = fastPowerRecursive(x, Math.floor(n / 2));\n  if (n % 2 === 0) {\n    return temp * temp;\n  }\n  return x * temp * temp;\n}\n",f={title:"Fast Powering",description:"Fast Powering",hide_table_of_contents:!0},m=void 0,g={id:"education/computer-science/algorithms/algo/fast-powering",title:"Fast Powering",description:"Fast Powering",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/fast-powering.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/fast-powering",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/fast-powering",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/fast-powering.mdx",tags:[],version:"current",frontMatter:{title:"Fast Powering",description:"Fast Powering",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Factorial",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/factorial"},next:{title:"Fibonacci Number",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/fibonacci-number"}},v={},b=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function j(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(s.A,{queryString:"primary",children:[(0,i.jsx)(a.A,{value:"definition",label:"Definition",children:(0,i.jsx)(n.p,{children:"The Fast Powering Algorithm, also known as Exponentiation by Squaring, is a method used to efficiently compute large powers of a number. It reduces the number of multiplications required, making it significantly faster than the naive approach of repeated multiplication"})}),(0,i.jsx)(a.A,{value:"how",label:"Explanation",children:(0,i.jsxs)(n.p,{children:["First step involves checking if the exponent (",(0,i.jsx)(n.code,{children:"n"}),") is ",(0,i.jsx)(n.code,{children:"0"}),"; if it is, the algorithm returns ",(0,i.jsx)(n.code,{children:"1"}),". Next, for even exponents, the algorithm recursively computes the value of ",(0,i.jsx)(n.code,{children:"x"})," raised to the power of half of ",(0,i.jsx)(n.code,{children:"n"}),". On the other hand, for odd exponents, it multiplies ",(0,i.jsx)(n.code,{children:"x"})," by the result of ",(0,i.jsx)(n.code,{children:"x"})," raised to half of (",(0,i.jsx)(n.code,{children:"n - 1"}),"), and then continues this process recursively. Finally, the algorithm combines the results obtained from both even and odd exponent calculations to obtain the final result"]})}),(0,i.jsx)(a.A,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["See if the exponent ",(0,i.jsx)(n.code,{children:"n"})," is ",(0,i.jsx)(n.code,{children:"0"}),". If it is, just give back ",(0,i.jsx)(n.code,{children:"1"})]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"n"})," is an even number, find out what ",(0,i.jsx)(n.code,{children:"x"})," raised to the power of half of ",(0,i.jsx)(n.code,{children:"n"})," is, and do it again until you get the answer"]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"n"})," is an odd number, first find out what ",(0,i.jsx)(n.code,{children:"x"})," raised to the power of half of (",(0,i.jsx)(n.code,{children:"n - 1"}),") is, then multiply it by ",(0,i.jsx)(n.code,{children:"x"}),", and repeat until you get the answer"]}),"\n",(0,i.jsx)(n.li,{children:"Combine the results obtained and return the final result"}),"\n"]})}),(0,i.jsx)(a.A,{value:"tips",label:"Tips",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"utilize recursion efficiently to minimize the number of multiplications"}),"\n",(0,i.jsx)(n.li,{children:"optimize for even and odd exponents separately"}),"\n"]})})]}),"\n",(0,i.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(s.A,{queryString:"primary",children:[(0,i.jsx)(a.A,{value:"practice",label:"Practice",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"fast_power(x, n):\n  if n == 0:\n    return 1\n  else if n % 2 == 0:\n    temp = fast_power(x, n/2)\n    return temp * temp\n  else:\n    temp = fast_power(x, (n-1)/2)\n    return x * temp * temp\n"})})}),(0,i.jsx)(a.A,{value:"solution",label:"Solution",children:(0,i.jsxs)(s.A,{queryString:"code",children:[(0,i.jsx)(a.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(l.A,{language:"go",children:o})}),(0,i.jsx)(a.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(l.A,{language:"java",children:c})}),(0,i.jsx)(a.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(l.A,{language:"js",children:u})}),(0,i.jsx)(a.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(l.A,{language:"kotlin",children:d})}),(0,i.jsx)(a.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(l.A,{language:"python",children:p})}),(0,i.jsx)(a.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(l.A,{language:"rust",children:h})}),(0,i.jsx)(a.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(l.A,{language:"ts",children:x})})]})})]})]})}function w(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}}}]);