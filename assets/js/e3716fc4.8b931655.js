"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2315],{15581:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>Z,frontMatter:()=>p,metadata:()=>g,toc:()=>x});var t=r(11527),i=r(88672),a=r(29140),l=r(52360),s=r(52296);const o="package main\n\nfunc bubbleSort(arr []int) {\n    n := len(arr)\n    for i := 0; i < n-1; i++ {\n        for j := 0; j < n-i-1; j++ {\n            if arr[j] > arr[j+1] {\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n            }\n        }\n    }\n}\n",c="public class BubbleSort {\n\n  public static void bubbleSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 0; i < n - 1; i++) {\n      for (int j = 0; j < n - i - 1; j++) {\n        if (arr[j] > arr[j + 1]) {\n          int temp = arr[j];\n          arr[j] = arr[j + 1];\n          arr[j + 1] = temp;\n        }\n      }\n    }\n  }\n}\n",u="function bubbleSort(arr) {\n  const n = arr.length;\n  for (let i = 0; i < n - 1; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n      }\n    }\n  }\n}\n",h="fun bubbleSort(arr: IntArray) {\n    val n = arr.size\n    for (i in 0 until n - 1) {\n        for (j in 0 until n - i - 1) {\n            if (arr[j] > arr[j + 1]) {\n                val temp = arr[j]\n                arr[j] = arr[j + 1]\n                arr[j + 1] = temp\n            }\n        }\n    }\n}\n",d="def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        for j in range(n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n",j="fn bubble_sort(arr: &mut [i32]) {\n    let n = arr.len();\n    for i in 0..n {\n        for j in 0..n - i - 1 {\n            if arr[j] > arr[j + 1] {\n                arr.swap(j, j + 1);\n            }\n        }\n    }\n}\n",b="function bubbleSort(arr: number[]): void {\n  const n: number = arr.length;\n  for (let i: number = 0; i < n - 1; i++) {\n    for (let j: number = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n      }\n    }\n  }\n}\n",p={title:"Bubble Sort",description:"Bubble Sort",hide_table_of_contents:!0},m=void 0,g={id:"education/computer-science/algorithms/algo/bubble-sort",title:"Bubble Sort",description:"Bubble Sort",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/bubble-sort.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/bubble-sort",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/bubble-sort",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/bubble-sort.mdx",tags:[],version:"current",frontMatter:{title:"Bubble Sort",description:"Bubble Sort",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Bridges",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/bridges"},next:{title:"Bucket Sort",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/bucket-sort"}},f={},x=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function v(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(l.Z,{value:"definition",label:"Definition",children:(0,t.jsx)(n.p,{children:"Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted"})}),(0,t.jsx)(l.Z,{value:"how",label:"Explanation",children:(0,t.jsx)(n.p,{children:"The Bubble Sort algorithm begins by iterating through the list from the start. It compares adjacent elements, swapping them if they're in the wrong order. This comparison continues for each pair until the end of the list is reached. This process repeats for every element until the entire list is sorted"})}),(0,t.jsx)(l.Z,{value:"guidance",label:"Guidance",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Start from the beginning of the list"}),"\n",(0,t.jsxs)(n.li,{children:["Compare the first two elements","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the first element is greater than the second, swap them"}),"\n",(0,t.jsx)(n.li,{children:"Move to the next pair of elements"}),"\n",(0,t.jsx)(n.li,{children:"Repeat steps until you reach the end of the list"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Repeat steps until the entire list is sorted"}),"\n"]})}),(0,t.jsx)(l.Z,{value:"tips",label:"Tips",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"keep track of whether any swaps are made in each pass. If no swaps are made, the list is already sorted, and the algorithm can terminate early"}),"\n",(0,t.jsx)(n.li,{children:"optimize the algorithm by implementing a flag to check if any swapping occurred in a pass. If no swaps occur, the list is sorted, and further iterations can be skipped"}),"\n"]})})]}),"\n",(0,t.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(l.Z,{value:"practice",label:"Practice",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"function bubbleSort(arr)\n  n = length(arr)\n  swapped = true\n  while swapped is true\n    swapped = false\n    for i from 0 to n-2\n      if arr[i] > arr[i+1]\n        swap(arr[i], arr[i+1])\n        swapped = true\n"})})}),(0,t.jsx)(l.Z,{value:"solution",label:"Solution",children:(0,t.jsxs)(a.Z,{queryString:"code",children:[(0,t.jsx)(l.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,t.jsx)(s.Z,{language:"go",children:o})}),(0,t.jsx)(l.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,t.jsx)(s.Z,{language:"java",children:c})}),(0,t.jsx)(l.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,t.jsx)(s.Z,{language:"js",children:u})}),(0,t.jsx)(l.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,t.jsx)(s.Z,{language:"kotlin",children:h})}),(0,t.jsx)(l.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,t.jsx)(s.Z,{language:"python",children:d})}),(0,t.jsx)(l.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,t.jsx)(s.Z,{language:"rust",children:j})}),(0,t.jsx)(l.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,t.jsx)(s.Z,{language:"ts",children:b})})]})})]})]})}function Z(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}}}]);