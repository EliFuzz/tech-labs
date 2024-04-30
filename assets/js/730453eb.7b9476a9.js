"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1208],{8807:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>A,contentTitle:()=>p,default:()=>x,frontMatter:()=>b,metadata:()=>f,toc:()=>v});var t=i(86070),a=i(27468),l=i(78826),r=i(28437),o=i(41634);const s='package main\n\nimport (\n\t"math"\n)\n\nfunc euclideanAlgorithm(originalA, originalB int) int {\n\ta := int(math.Abs(float64(originalA)))\n\tb := int(math.Abs(float64(originalB)))\n\n\tif b == 0 {\n\t\treturn a\n\t}\n\treturn euclideanAlgorithm(b, a%b)\n}\n\nfunc leastCommonMultiple(a, b int) int {\n\tif a == 0 || b == 0 {\n\t\treturn 0\n\t}\n\treturn int(math.Abs(float64(a*b))) / euclideanAlgorithm(a, b)\n}\n',c="public class Main {\n\n  public static int euclideanAlgorithm(int originalA, int originalB) {\n    int a = Math.abs(originalA);\n    int b = Math.abs(originalB);\n\n    return b == 0 ? a : euclideanAlgorithm(b, a % b);\n  }\n\n  public static int leastCommonMultiple(int a, int b) {\n    if (a == 0 || b == 0) {\n      return 0;\n    }\n    return Math.abs(a * b) / euclideanAlgorithm(a, b);\n  }\n}\n",u="function euclideanAlgorithm(originalA, originalB) {\n  const a = Math.abs(originalA);\n  const b = Math.abs(originalB);\n\n  return b === 0 ? a : euclideanAlgorithm(b, a % b);\n}\n\nfunction leastCommonMultiple(a, b) {\n  return a === 0 || b === 0 ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);\n}\n",m="import kotlin.math.abs\n\nfun euclideanAlgorithm(originalA: Int, originalB: Int): Int {\n    val a = abs(originalA)\n    val b = abs(originalB)\n\n    return if (b == 0) a else euclideanAlgorithm(b, a % b)\n}\n\nfun leastCommonMultiple(a: Int, b: Int): Int {\n    return if (a == 0 || b == 0) {\n        0\n    } else {\n        (abs(a * b) / euclideanAlgorithm(a, b))\n    }\n}\n",h="import math\n\ndef euclideanAlgorithm(originalA, originalB):\n    a = abs(originalA)\n    b = abs(originalB)\n\n    return a if b == 0 else euclideanAlgorithm(b, a % b)\n\ndef leastCommonMultiple(a, b):\n    if a == 0 or b == 0:\n        return 0\n    return abs(a * b) // euclideanAlgorithm(a, b)\n",d="fn euclidean_algorithm(original_a: i32, original_b: i32) -> i32 {\n    let a = original_a.abs();\n    let b = original_b.abs();\n\n    if b == 0 {\n        a\n    } else {\n        euclidean_algorithm(b, a % b)\n    }\n}\n\nfn least_common_multiple(a: i32, b: i32) -> i32 {\n    if a == 0 || b == 0 {\n        0\n    } else {\n        (a.abs() * b.abs()) / euclidean_algorithm(a, b)\n    }\n}\n",g="function euclideanAlgorithm(originalA: number, originalB: number): number {\n  const a = Math.abs(originalA);\n  const b = Math.abs(originalB);\n\n  return b === 0 ? a : euclideanAlgorithm(b, a % b);\n}\n\nfunction leastCommonMultiple(a: number, b: number): number {\n  return a === 0 || b === 0 ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);\n}\n",b={title:"Least Common Multiple (LCM)",description:"Least Common Multiple (LCM)",hide_table_of_contents:!0},p=void 0,f={id:"education/computer-science/algorithms/algo/least-common-multiple",title:"Least Common Multiple (LCM)",description:"Least Common Multiple (LCM)",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/least-common-multiple.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/least-common-multiple",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/least-common-multiple",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/least-common-multiple.mdx",tags:[],version:"current",frontMatter:{title:"Least Common Multiple (LCM)",description:"Least Common Multiple (LCM)",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Kruskal's Algorithm",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/kruskals-algorithm"},next:{title:"Levenshtein Distance",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/levenshtein-distance"}},A={},v=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function j(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsxs)(l.A,{queryString:"primary",children:[(0,t.jsx)(r.A,{value:"definition",label:"Definition",children:(0,t.jsx)(e.p,{children:"The Least Common Multiple (LCM) algorithm is a computational method used to find the smallest positive integer that is divisible by two or more given integers"})}),(0,t.jsx)(r.A,{value:"how",label:"Explanation",children:(0,t.jsx)(e.p,{children:"The LCM algorithm works by identifying the prime factors of each given integer and then determining the product of the highest powers of all prime factors involved. This ensures that the resulting number is divisible by all given integers and is the smallest such number"})}),(0,t.jsx)(r.A,{value:"guidance",label:"Guidance",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Identify the prime factors of each given integer"}),"\n",(0,t.jsx)(e.li,{children:"Determine the highest power of each prime factor among the given integers"}),"\n",(0,t.jsx)(e.li,{children:"Multiply these highest powers together"}),"\n",(0,t.jsx)(e.li,{children:"The result is the least common multiple of the given integers"}),"\n"]})}),(0,t.jsx)(r.A,{value:"tips",label:"Tips",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"utilize efficient prime factorization techniques such as trial division or the Sieve of Eratosthenes"}),"\n",(0,t.jsx)(e.li,{children:"use an optimized method to find the highest power of each prime factor, possibly through exponentiation or dynamic programming"}),"\n"]})})]}),"\n",(0,t.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,t.jsxs)(l.A,{queryString:"primary",children:[(0,t.jsx)(r.A,{value:"practice",label:"Practice",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"LCM(nums):\n  lcm = 1\n  prime_factors = []\n\n  for num in nums:\n    factors = prime_factorization(num)\n    update_prime_factors(prime_factors, factors)\n\n  for factor in prime_factors:\n    lcm *= factor\n\n  return lcm\n\nprime_factorization(num):\n  factors = []\n  divisor = 2\n\n  while num > 1:\n    while num % divisor == 0:\n      factors.append(divisor)\n      num /= divisor\n    divisor += 1\n\n  return factors\n\nupdate_prime_factors(prime_factors, factors):\n  for factor in factors:\n    if prime_factors.count(factor) < factors.count(factor):\n      prime_factors.append(factor)\n"})})}),(0,t.jsx)(r.A,{value:"solution",label:"Solution",children:(0,t.jsxs)(l.A,{queryString:"code",children:[(0,t.jsx)(r.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,t.jsx)(o.A,{language:"go",children:s})}),(0,t.jsx)(r.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,t.jsx)(o.A,{language:"java",children:c})}),(0,t.jsx)(r.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,t.jsx)(o.A,{language:"js",children:u})}),(0,t.jsx)(r.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,t.jsx)(o.A,{language:"kotlin",children:m})}),(0,t.jsx)(r.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,t.jsx)(o.A,{language:"python",children:h})}),(0,t.jsx)(r.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,t.jsx)(o.A,{language:"rust",children:d})}),(0,t.jsx)(r.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,t.jsx)(o.A,{language:"ts",children:g})})]})})]})]})}function x(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(j,{...n})}):j(n)}}}]);