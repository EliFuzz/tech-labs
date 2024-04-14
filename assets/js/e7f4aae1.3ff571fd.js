"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1316],{9411:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>w,frontMatter:()=>p,metadata:()=>v,toc:()=>j});var i=e(11527),r=e(84135),a=e(40521),s=e(74109),o=e(80035);const c='package main\n\nimport (\n\t"math"\n)\n\nfunc primeFactors(n int) []int {\n\tvar factors []int\n\n\tfor n%2 == 0 {\n\t\tfactors = append(factors, 2)\n\t\tn /= 2\n\t}\n\n\tfor factor := 3; factor <= int(math.Sqrt(float64(n))); factor += 2 {\n\t\tfor n%factor == 0 {\n\t\t\tfactors = append(factors, factor)\n\t\t\tn /= factor\n\t\t}\n\t}\n\n\tif n > 2 {\n\t\tfactors = append(factors, n)\n\t}\n\n\treturn factors\n}\n',l="import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n\n  public static List<Integer> primeFactors(int n) {\n    List<Integer> factors = new ArrayList<>();\n\n    while (n % 2 == 0) {\n      factors.add(2);\n      n /= 2;\n    }\n\n    for (int factor = 3; factor <= Math.sqrt(n); factor += 2) {\n      while (n % factor == 0) {\n        factors.add(factor);\n        n /= factor;\n      }\n    }\n\n    if (n > 2) {\n      factors.add(n);\n    }\n\n    return factors;\n  }\n}\n",f="function primeFactors(n) {\n  const factors = [];\n\n  while (n % 2 === 0) {\n    factors.push(2);\n    n = Math.floor(n / 2);\n  }\n\n  for (let factor = 3; factor <= Math.sqrt(n); factor += 2) {\n    while (n % factor === 0) {\n      factors.push(factor);\n      n = Math.floor(n / factor);\n    }\n  }\n\n  if (n > 2) {\n    factors.push(n);\n  }\n\n  return factors;\n}\n",d="fun primeFactors(n: Int): List<Int> {\n    val factors = mutableListOf<Int>()\n\n    var num = n\n    while (num % 2 == 0) {\n        factors.add(2)\n        num /= 2\n    }\n\n    var factor = 3\n    while (factor <= Math.sqrt(num.toDouble())) {\n        while (num % factor == 0) {\n            factors.add(factor)\n            num /= factor\n        }\n        factor += 2\n    }\n\n    if (num > 2) {\n        factors.add(num)\n    }\n\n    return factors\n}\n",h="def prime_factors(n):\n    factors = []\n\n    while n % 2 == 0:\n        factors.append(2)\n        n //= 2\n\n    factor = 3\n    while factor <= int(n ** 0.5):\n        while n % factor == 0:\n            factors.append(factor)\n            n //= factor\n        factor += 2\n\n    if n > 2:\n        factors.append(n)\n\n    return factors\n",u="fn prime_factors(mut n: i32) -> Vec<i32> {\n    let mut factors = Vec::new();\n\n    while n % 2 == 0 {\n        factors.push(2);\n        n /= 2;\n    }\n\n    let mut factor = 3;\n    while factor <= (n as f64).sqrt() as i32 {\n        while n % factor == 0 {\n            factors.push(factor);\n            n /= factor;\n        }\n        factor += 2;\n    }\n\n    if n > 2 {\n        factors.push(n);\n    }\n\n    factors\n}\n",m="function primeFactors(n: number): number[] {\n  const factors: number[] = [];\n\n  while (n % 2 === 0) {\n    factors.push(2);\n    n = Math.floor(n / 2);\n  }\n\n  for (let factor = 3; factor <= Math.sqrt(n); factor += 2) {\n    while (n % factor === 0) {\n      factors.push(factor);\n      n = Math.floor(n / factor);\n    }\n  }\n\n  if (n > 2) {\n    factors.push(n);\n  }\n\n  return factors;\n}\n",p={title:"Prime Factors",description:"Prime Factors",hide_table_of_contents:!0},g=void 0,v={id:"education/computer-science/algorithms/algo/prime-factors",title:"Prime Factors",description:"Prime Factors",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/prime-factors.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/prime-factors",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/prime-factors",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/prime-factors.mdx",tags:[],version:"current",frontMatter:{title:"Prime Factors",description:"Prime Factors",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Primality Test",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/primality-test"},next:{title:"Prim's Algorithm",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/prims-algorithm"}},b={},j=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function x(n){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(s.Z,{value:"definition",label:"Definition",children:(0,i.jsx)(t.p,{children:"The Prime Factors Algorithm is a computational method used to find the prime factors of a given integer. It leverages the fundamental theorem of arithmetic, which states that every integer greater than 1 either is a prime number itself or can be factorized into a unique combination of prime numbers. The algorithm efficiently identifies these prime factors, aiding in various mathematical and cryptographic applications"})}),(0,i.jsx)(s.Z,{value:"how",label:"Explanation",children:(0,i.jsx)(t.p,{children:"Iteratively dividing the given integer by the smallest prime numbers (starting from 2) until the quotient becomes 1. At each step, it checks if the current divisor divides the integer evenly. If so, the divisor is a prime factor, and it is added to the list of factors. This process continues until the quotient becomes 1, indicating that all prime factors have been found"})}),(0,i.jsx)(s.Z,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Start with the given integer to factorize"}),"\n",(0,i.jsx)(t.li,{children:"Initialize an empty list to store prime factors"}),"\n",(0,i.jsxs)(t.li,{children:["Begin iterating from 2, the smallest prime number","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"check if the current number divides the given integer evenly"}),"\n",(0,i.jsx)(t.li,{children:"if it does, add the current number to the list of prime factors"}),"\n",(0,i.jsx)(t.li,{children:"divide the given integer by the current number"}),"\n",(0,i.jsx)(t.li,{children:"repeat steps until the given integer becomes 1"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Return the list of prime factors"}),"\n"]})}),(0,i.jsx)(s.Z,{value:"tips",label:"Tips",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"use the fundamental theorem of arithmetic to guide the algorithm"}),"\n",(0,i.jsx)(t.li,{children:"utilize efficient data structures to store factors and perform divisions"}),"\n",(0,i.jsx)(t.li,{children:"handle edge cases like prime numbers or negative integers appropriately"}),"\n"]})})]}),"\n",(0,i.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(s.Z,{value:"practice",label:"Practice",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"prime_factors(n):\n  factors = []  # Initialize empty list to store prime factors\n  divisor = 2   # Start with the smallest prime number\n\n  while n > 1:\n    while n % divisor == 0:  # Check if divisor divides n evenly\n      factors.append(divisor)  # Add divisor to list of prime factors\n      n = n / divisor   # Update n by dividing by divisor\n    divisor = divisor + 1  # Move to the next number\n  return factors  # Return the list of prime factors\n"})})}),(0,i.jsx)(s.Z,{value:"solution",label:"Solution",children:(0,i.jsxs)(a.Z,{queryString:"code",children:[(0,i.jsx)(s.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(o.Z,{language:"go",children:c})}),(0,i.jsx)(s.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(o.Z,{language:"java",children:l})}),(0,i.jsx)(s.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(o.Z,{language:"js",children:f})}),(0,i.jsx)(s.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(o.Z,{language:"kotlin",children:d})}),(0,i.jsx)(s.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(o.Z,{language:"python",children:h})}),(0,i.jsx)(s.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(o.Z,{language:"rust",children:u})}),(0,i.jsx)(s.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(o.Z,{language:"ts",children:m})})]})})]})]})}function w(n={}){const{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}}}]);