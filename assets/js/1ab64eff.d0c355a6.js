"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2780],{36195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>j,default:()=>S,frontMatter:()=>m,metadata:()=>f,toc:()=>x});var r=t(86070),a=t(27468),i=t(78826),l=t(28437),s=t(41634);const o="package main\n\nfunc shellSort(arr []int) {\n    n := len(arr)\n    gap := n / 2\n    for gap > 0 {\n        for i := gap; i < n; i++ {\n            temp := arr[i]\n            j := i\n            for j >= gap && arr[j-gap] > temp {\n                arr[j] = arr[j-gap]\n                j -= gap\n            }\n            arr[j] = temp\n        }\n        gap /= 2\n    }\n}\n",c="public class ShellSort {\n\n  public static void shellSort(int[] arr) {\n    int n = arr.length;\n    for (int gap = n / 2; gap > 0; gap /= 2) {\n      for (int i = gap; i < n; i++) {\n        int temp = arr[i];\n        int j = i;\n        while (j >= gap && arr[j - gap] > temp) {\n          arr[j] = arr[j - gap];\n          j -= gap;\n        }\n        arr[j] = temp;\n      }\n    }\n  }\n}\n",p="function shellSort(arr) {\n  let n = arr.length;\n  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {\n    for (let i = gap; i < n; i++) {\n      let temp = arr[i];\n      let j = i;\n      while (j >= gap && arr[j - gap] > temp) {\n        arr[j] = arr[j - gap];\n        j -= gap;\n      }\n      arr[j] = temp;\n    }\n  }\n}\n",g="fun shellSort(arr: IntArray) {\n    val n = arr.size\n    var gap = n / 2\n    while (gap > 0) {\n        for (i in gap until n) {\n            val temp = arr[i]\n            var j = i\n            while (j >= gap && arr[j - gap] > temp) {\n                arr[j] = arr[j - gap]\n                j -= gap\n            }\n            arr[j] = temp\n        }\n        gap /= 2\n    }\n}\n",h="def shell_sort(arr):\n    n = len(arr)\n    gap = n // 2\n    while gap > 0:\n        for i in range(gap, n):\n            temp = arr[i]\n            j = i\n            while j >= gap and arr[j - gap] > temp:\n                arr[j] = arr[j - gap]\n                j -= gap\n            arr[j] = temp\n        gap //= 2\n",d="fn shell_sort(arr: &mut [i32]) {\n    let n = arr.len();\n    let mut gap = n / 2;\n    while gap > 0 {\n        for i in gap..n {\n            let mut j = i;\n            let temp = arr[i];\n            while j >= gap && arr[j - gap] > temp {\n                arr[j] = arr[j - gap];\n                j -= gap;\n            }\n            arr[j] = temp;\n        }\n        gap /= 2;\n    }\n}\n",u="function shellSort(arr: number[]): void {\n  const n: number = arr.length;\n  for (\n    let gap: number = Math.floor(n / 2);\n    gap > 0;\n    gap = Math.floor(gap / 2)\n  ) {\n    for (let i: number = gap; i < n; i++) {\n      let temp: number = arr[i];\n      let j: number = i;\n      while (j >= gap && arr[j - gap] > temp) {\n        arr[j] = arr[j - gap];\n        j -= gap;\n      }\n      arr[j] = temp;\n    }\n  }\n}\n",m={title:"Shellsort",description:"Shellsort",hide_table_of_contents:!0},j=void 0,f={id:"education/computer-science/algorithms/algo/shellsort",title:"Shellsort",description:"Shellsort",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/shellsort.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/shellsort",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/shellsort",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/shellsort.mdx",tags:[],version:"current",frontMatter:{title:"Shellsort",description:"Shellsort",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Selection Sort",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/selection-sort"},next:{title:"Shortest Common Supersequence (SCS)",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/shortest-common-supersequence"}},b={},x=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function v(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(i.A,{queryString:"primary",children:[(0,r.jsx)(l.A,{value:"definition",label:"Definition",children:(0,r.jsx)(n.p,{children:"Shellsort is an efficient sorting algorithm that improves upon the insertion sort algorithm by sorting sublists of the data and then eventually sorting the entire list. It belongs to the family of comparison-based sorting algorithms and operates by moving elements closer to their sorted position through a series of diminishing increment gaps"})}),(0,r.jsx)(l.A,{value:"how",label:"Explanation",children:(0,r.jsx)(n.p,{children:"Start by sorting elements that are far apart from each other and then progressively reduces the gap between elements to be compared. It involves dividing the list into smaller sublists and sorting them using the insertion sort algorithm. These sublists are created by selecting elements that are a certain distance apart from each other, called the gap or increment sequence. The algorithm continues to decrease the gap until it becomes 1, at which point the list is sorted"})}),(0,r.jsx)(l.A,{value:"guidance",label:"Guidance",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Define an increment sequence to determine the gap between elements to be compared"}),"\n",(0,r.jsx)(n.li,{children:"Start with the largest gap and perform an insertion sort on sublists created by this gap"}),"\n",(0,r.jsx)(n.li,{children:"Reduce the gap and repeat the insertion sort process until the gap becomes 1"}),"\n",(0,r.jsx)(n.li,{children:"Finally, perform a standard insertion sort with a gap of 1 to sort the entire list"}),"\n"]})}),(0,r.jsx)(l.A,{value:"tips",label:"Tips",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"experiment with different increment sequences to find the most efficient one for your dataset"}),"\n",(0,r.jsx)(n.li,{children:"avoid using large gaps at the beginning, as this might result in inefficient sorting"}),"\n",(0,r.jsx)(n.li,{children:"consider using the Knuth sequence (3x + 1) for determining the increment sequence, as it often yields good result"}),"\n"]})})]}),"\n",(0,r.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsxs)(i.A,{queryString:"primary",children:[(0,r.jsx)(l.A,{value:"practice",label:"Practice",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"shellSort(arr):\n  # Define increment sequence\n  gaps = [701, 301, 132, 57, 23, 10, 4, 1]\n\n  # Iterate over each gap\n  for gap in gaps:\n    # Perform insertion sort with current gap\n    for i = gap to length(arr):\n      temp = arr[i]\n      j = i\n      # Move elements of arr[0..i-gap] that are greater than temp to their positions ahead of current position\n      while j >= gap and arr[j - gap] > temp:\n        arr[j] = arr[j - gap]\n        j = j - gap\n      arr[j] = temp\n"})})}),(0,r.jsx)(l.A,{value:"solution",label:"Solution",children:(0,r.jsxs)(i.A,{queryString:"code",children:[(0,r.jsx)(l.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,r.jsx)(s.A,{language:"go",children:o})}),(0,r.jsx)(l.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,r.jsx)(s.A,{language:"java",children:c})}),(0,r.jsx)(l.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,r.jsx)(s.A,{language:"js",children:p})}),(0,r.jsx)(l.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,r.jsx)(s.A,{language:"kotlin",children:g})}),(0,r.jsx)(l.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,r.jsx)(s.A,{language:"python",children:h})}),(0,r.jsx)(l.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,r.jsx)(s.A,{language:"rust",children:d})}),(0,r.jsx)(l.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,r.jsx)(s.A,{language:"ts",children:u})})]})})]})]})}function S(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}}}]);