"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8269],{95367:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>x,contentTitle:()=>p,default:()=>v,frontMatter:()=>g,metadata:()=>j,toc:()=>b});var r=a(86070),t=a(27468),i=a(78826),l=a(28437),s=a(41634);const o='package main\n\nimport (\n\t"math/rand"\n)\n\nfunc shuffle(arr []int) {\n\tfor i := len(arr) - 1; i > 0; i-- {\n\t\tj := rand.Intn(i + 1)\n\t\tarr[i], arr[j] = arr[j], arr[i]\n\t}\n}\n',c="import java.util.Arrays;\nimport java.util.Random;\n\npublic class FisherYatesShuffle {\n\n  public static void shuffle(int[] arr) {\n    Random rand = new Random();\n    for (int i = arr.length - 1; i > 0; i--) {\n      int j = rand.nextInt(i + 1);\n      int temp = arr[i];\n      arr[i] = arr[j];\n      arr[j] = temp;\n    }\n  }\n}\n",h="function shuffle(arr) {\n  for (let i = arr.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n  }\n}\n",d="import java.util.*\n\nfun shuffle(arr: IntArray) {\n    val rand = Random()\n    for (i in arr.size - 1 downTo 1) {\n        val j = rand.nextInt(i + 1)\n        val temp = arr[i]\n        arr[i] = arr[j]\n        arr[j] = temp\n    }\n}\n",u="import random\n\ndef shuffle(arr):\n    for i in range(len(arr) - 1, 0, -1):\n        j = random.randint(0, i)\n        arr[i], arr[j] = arr[j], arr[i]\n",m="use rand::seq::SliceRandom;\nuse rand::thread_rng;\n\nfn shuffle(arr: &mut [i32]) {\n    let mut rng = thread_rng();\n    arr.shuffle(&mut rng);\n}\n",f="function shuffle(arr: number[]) {\n  for (let i = arr.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n  }\n}\n",g={title:"Fisher\u2013Yates Shuffle",description:"Fisher\u2013Yates Shuffle",hide_table_of_contents:!0},p=void 0,j={id:"education/computer-science/algorithms/algo/fisher\u2013yates-shuffle",title:"Fisher\u2013Yates Shuffle",description:"Fisher\u2013Yates Shuffle",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/fisher\u2013yates-shuffle.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/fisher\u2013yates-shuffle",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/fisher\u2013yates-shuffle",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/fisher\u2013yates-shuffle.mdx",tags:[],version:"current",frontMatter:{title:"Fisher\u2013Yates Shuffle",description:"Fisher\u2013Yates Shuffle",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Fibonacci Number",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/fibonacci-number"},next:{title:"Floyd-Warshall Algorithm",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/floyd-warshall-algorithm"}},x={},b=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function y(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(i.A,{queryString:"primary",children:[(0,r.jsx)(l.A,{value:"definition",label:"Definition",children:(0,r.jsx)(n.p,{children:"The Fisher-Yates Shuffle Algorithm, also known as the Knuth Shuffle, is a method for generating a random permutation of a finite sequence. It efficiently shuffles elements within an array or list, ensuring each permutation has an equal probability of occurrence"})}),(0,r.jsx)(l.A,{value:"how",label:"Explanation",children:(0,r.jsx)(n.p,{children:"Start by having an array containing the elements to be shuffled. Proceed by traversing the array, moving from the last element to the second. During each iteration, generate a random index within the inclusive range of 0 to the current index. Subsequently, swap the element located at the current index with the element positioned at the randomly chosen index. Repeat this process until all elements within the array have undergone shuffling. This algorithm ensures that each element within the array has an equal probability of appearing at any position, resulting in a random permutation of the original sequence"})}),(0,r.jsx)(l.A,{value:"guidance",label:"Guidance",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Begin with an array of elements to be shuffled"}),"\n",(0,r.jsx)(n.li,{children:"Start iterating backward through the array, from the last element to the second"}),"\n",(0,r.jsxs)(n.li,{children:["At each iteration","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Generate a random index ",(0,r.jsx)(n.code,{children:"randomIndex"})," between 0 and the current index (inclusive)"]}),"\n",(0,r.jsxs)(n.li,{children:["Swap the element at the current index with the element at ",(0,r.jsx)(n.code,{children:"randomIndex"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Continue this process until all elements have been shuffled"}),"\n"]})}),(0,r.jsx)(l.A,{value:"tips",label:"Tips",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ensure that your random number generator is capable of producing uniformly distributed random numbers"}),"\n",(0,r.jsx)(n.li,{children:"avoid using inefficient random number generators to maintain the algorithm's time complexity"}),"\n",(0,r.jsx)(n.li,{children:"double-check your implementation to ensure that each element has an equal probability of ending up in any position within the array"}),"\n"]})})]}),"\n",(0,r.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsxs)(i.A,{queryString:"primary",children:[(0,r.jsx)(l.A,{value:"practice",label:"Practice",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"fisherYatesShuffle(array):\n  n = length(array)\n  for i from n-1 down to 1:\n    randomIndex = random(0, i)\n    swap(array[i], array[randomIndex])\n"})})}),(0,r.jsx)(l.A,{value:"solution",label:"Solution",children:(0,r.jsxs)(i.A,{queryString:"code",children:[(0,r.jsx)(l.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,r.jsx)(s.A,{language:"go",children:o})}),(0,r.jsx)(l.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,r.jsx)(s.A,{language:"java",children:c})}),(0,r.jsx)(l.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,r.jsx)(s.A,{language:"js",children:h})}),(0,r.jsx)(l.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,r.jsx)(s.A,{language:"kotlin",children:d})}),(0,r.jsx)(l.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,r.jsx)(s.A,{language:"python",children:u})}),(0,r.jsx)(l.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,r.jsx)(s.A,{language:"rust",children:m})}),(0,r.jsx)(l.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,r.jsx)(s.A,{language:"ts",children:f})})]})})]})]})}function v(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}}}]);