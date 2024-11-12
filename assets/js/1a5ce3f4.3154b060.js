"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3535],{66279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>f,default:()=>v,frontMatter:()=>p,metadata:()=>r,toc:()=>y});const r=JSON.parse('{"id":"education/computer-science/algorithms/algo/insertion-sort","title":"Insertion Sort","description":"Insertion Sort","source":"@site/docs/education/01-computer-science/10-algorithms/04-algo/insertion-sort.mdx","sourceDirName":"education/01-computer-science/10-algorithms/04-algo","slug":"/education/computer-science/algorithms/algo/insertion-sort","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/insertion-sort","draft":false,"unlisted":false,"editUrl":"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/04-algo/insertion-sort.mdx","tags":[],"version":"current","frontMatter":{"title":"Insertion Sort","description":"Insertion Sort","hide_table_of_contents":true},"sidebar":"education","previous":{"title":"Horner\'s Method","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/horners-method"},"next":{"title":"Integer Partition","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/integer-partition"}}');var i=t(86070),a=t(15658),l=t(33407),o=t(33903),s=t(68171);const c="package main\n\nfunc insertionSort(arr []int) {\n    for i := 1; i < len(arr); i++ {\n        key := arr[i]\n        j := i - 1\n        for j >= 0 && arr[j] > key {\n            arr[j+1] = arr[j]\n            j = j - 1\n        }\n        arr[j+1] = key\n    }\n}\n",u="public class InsertionSort {\n\n  public static void insertionSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 1; i < n; ++i) {\n      int key = arr[i];\n      int j = i - 1;\n      while (j >= 0 && arr[j] > key) {\n        arr[j + 1] = arr[j];\n        j = j - 1;\n      }\n      arr[j + 1] = key;\n    }\n  }\n}\n",h="function insertionSort(arr) {\n  const n = arr.length;\n  for (let i = 1; i < n; i++) {\n    let key = arr[i];\n    let j = i - 1;\n    while (j >= 0 && arr[j] > key) {\n      arr[j + 1] = arr[j];\n      j = j - 1;\n    }\n    arr[j + 1] = key;\n  }\n}\n",d="fun insertionSort(arr: IntArray) {\n    val n = arr.size\n    for (i in 1 until n) {\n        val key = arr[i]\n        var j = i - 1\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j]\n            j--\n        }\n        arr[j + 1] = key\n    }\n}\n",j="def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n",m="fn insertion_sort(arr: &mut [i32]) {\n    let n = arr.len();\n    for i in 1..n {\n        let mut j = i;\n        while j > 0 && arr[j - 1] > arr[j] {\n            arr.swap(j, j - 1);\n            j -= 1;\n        }\n    }\n}\n",g="function insertionSort(arr: number[]): void {\n  const n: number = arr.length;\n  for (let i: number = 1; i < n; i++) {\n    let key: number = arr[i];\n    let j: number = i - 1;\n    while (j >= 0 && arr[j] > key) {\n      arr[j + 1] = arr[j];\n      j = j - 1;\n    }\n    arr[j + 1] = key;\n  }\n}\n",p={title:"Insertion Sort",description:"Insertion Sort",hide_table_of_contents:!0},f=void 0,x={},y=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function b(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(l.A,{queryString:"primary",children:[(0,i.jsx)(o.A,{value:"definition",label:"Definition",children:(0,i.jsx)(n.p,{children:"Horner's method is an efficient algorithm for evaluating polynomials. It reduces the number of multiplications required to evaluate a polynomial by factoring out common factors, resulting in a faster computation process"})}),(0,i.jsx)(o.A,{value:"how",label:"Explanation",children:(0,i.jsx)(n.p,{children:"Horner's method works by evaluating a polynomial in a nested fashion, starting from the highest degree term and gradually working towards the lowest degree term. At each step, it factors out the current term and multiplies the result by the variable, accumulating the sum as it progresses through the polynomial"})}),(0,i.jsx)(o.A,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Start with the highest degree term of the polynomial"}),"\n",(0,i.jsx)(n.li,{children:"Multiply the coefficient of this term by the variable (x), and add the next lower degree term"}),"\n",(0,i.jsx)(n.li,{children:"Repeat this process until you reach the constant term"}),"\n",(0,i.jsx)(n.li,{children:"The final sum is the value of the polynomial at the given point"}),"\n"]})}),(0,i.jsx)(o.A,{value:"tips",label:"Tips",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"keep track of the intermediate result as you iterate through the terms"}),"\n",(0,i.jsx)(n.li,{children:"utilize a single loop to iterate through the polynomial terms to improve efficiency"}),"\n"]})})]}),"\n",(0,i.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(l.A,{queryString:"primary",children:[(0,i.jsx)(o.A,{value:"practice",label:"Practice",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"evaluatePolynomial(coefficients[], x):\n  n = length(coefficients)\n  result = coefficients[0] // Initialize result with the constant term\n  for i from 1 to n - 1:\n    result = result * x + coefficients[i] // Multiply result by x and add the next coefficient\n  return result\n"})})}),(0,i.jsx)(o.A,{value:"solution",label:"Solution",children:(0,i.jsxs)(l.A,{queryString:"code",children:[(0,i.jsx)(o.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(s.A,{language:"go",children:c})}),(0,i.jsx)(o.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(s.A,{language:"java",children:u})}),(0,i.jsx)(o.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(s.A,{language:"js",children:h})}),(0,i.jsx)(o.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(s.A,{language:"kotlin",children:d})}),(0,i.jsx)(o.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(s.A,{language:"python",children:j})}),(0,i.jsx)(o.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(s.A,{language:"rust",children:m})}),(0,i.jsx)(o.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(s.A,{language:"ts",children:g})})]})})]})]})}function v(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}}}]);