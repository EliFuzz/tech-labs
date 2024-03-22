"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8213],{7398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>j,default:()=>w,frontMatter:()=>p,metadata:()=>f,toc:()=>b});var i=t(11527),s=t(88672),r=t(29140),a=t(52360),l=t(52296);const o='package main\n\nimport (\n\t"strings"\n)\n\nfunc isPalindrome(s string) bool {\n\ts = strings.ToLower(s)\n\ti, j := 0, len(s)-1\n\tfor i < j {\n\t\tif s[i] != s[j] {\n\t\t\treturn false\n\t\t}\n\t\ti++\n\t\tj--\n\t}\n\treturn true\n}\n',c="function isPalindrome(s) {\n  s = s.toLowerCase();\n  let i = 0, j = s.length - 1;\n  while (i < j) {\n    if (s[i] !== s[j]) {\n      return false;\n    }\n    i++;\n    j--;\n  }\n  return true;\n}\n",h="function isPalindrome(s) {\n  s = s.toLowerCase();\n  let i = 0,\n    j = s.length - 1;\n  while (i < j) {\n    if (s[i] !== s[j]) {\n      return false;\n    }\n    i++;\n    j--;\n  }\n  return true;\n}\n",d="fun isPalindrome(s: String): Boolean {\n    var i = 0\n    var j = s.length - 1\n    val str = s.toLowerCase()\n    while (i < j) {\n        if (str[i] != str[j]) {\n            return false\n        }\n        i++\n        j--\n    }\n    return true\n}\n",u="def is_palindrome(s):\n    s = s.lower()\n    i, j = 0, len(s) - 1\n    while i < j:\n        if s[i] != s[j]:\n            return False\n        i += 1\n        j -= 1\n    return True\n",m="fn is_palindrome(s: &str) -> bool {\n    let s = s.to_lowercase();\n    let mut i = 0;\n    let mut j = s.len() - 1;\n    while i < j {\n        if s.chars().nth(i).unwrap() != s.chars().nth(j).unwrap() {\n            return false;\n        }\n        i += 1;\n        j -= 1;\n    }\n    true\n}\n",g="function isPalindrome(s: string): boolean {\n  s = s.toLowerCase();\n  let i = 0,\n    j = s.length - 1;\n  while (i < j) {\n    if (s[i] !== s[j]) {\n      return false;\n    }\n    i++;\n    j--;\n  }\n  return true;\n}\n",p={title:"Palindrome",description:"Palindrome",hide_table_of_contents:!0},j=void 0,f={id:"education/computer-science/algorithms/algo/palindrome",title:"Palindrome",description:"Palindrome",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/palindrome.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/palindrome",permalink:"/docs/education/computer-science/algorithms/algo/palindrome",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/palindrome.mdx",tags:[],version:"current",frontMatter:{title:"Palindrome",description:"Palindrome",hide_table_of_contents:!0},sidebar:"education",previous:{title:"NanoNeuron",permalink:"/docs/education/computer-science/algorithms/algo/nano-neuron"},next:{title:"Pascal's Triangle",permalink:"/docs/education/computer-science/algorithms/algo/pascals-triangle"}},x={},b=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function v(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(a.Z,{value:"definition",label:"Definition",children:(0,i.jsx)(n.p,{children:"The Palindrome Algorithm is a method used to determine whether a given input string reads the same forwards and backwards. It utilizes string manipulation techniques to compare characters from both ends of the string simultaneously"})}),(0,i.jsx)(a.Z,{value:"how",label:"Explanation",children:(0,i.jsx)(n.p,{children:"It works by comparing characters from the beginning and end of the input string. It iterates through the string, starting from both ends and moving towards the center simultaneously. At each step, it compares the characters at these positions. If all characters match, the string is a palindrome. If any characters don't match, the string is not a palindrome. The algorithm terminates when the pointers meet at the center of the string or cross each other"})}),(0,i.jsx)(a.Z,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Start with two pointers, one at the beginning and one at the end of the string","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"compare characters at these pointers"}),"\n",(0,i.jsx)(n.li,{children:"if they match, move both pointers towards the center of the string"}),"\n",(0,i.jsx)(n.li,{children:"if they don't match, the string is not a palindrome"}),"\n",(0,i.jsx)(n.li,{children:"repeat steps until the pointers meet at the center or cross each other"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"If the pointers meet without any mismatch, the string is a palindrome"}),"\n"]})}),(0,i.jsx)(a.Z,{value:"tips",label:"Tips",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"avoid unnecessary operations that may increase the time complexity"}),"\n",(0,i.jsx)(n.li,{children:"consider edge cases such as empty strings or strings with a single character"}),"\n"]})})]}),"\n",(0,i.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(a.Z,{value:"practice",label:"Practice",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"isPalindrome(string):\n  // Initialize pointers\n  leftPointer = 0\n  rightPointer = length(string) - 1\n\n  // Loop until pointers meet or cross\n  while leftPointer < rightPointer:\n    // Compare characters at pointers\n    if string[leftPointer] != string[rightPointer]:\n      return false // Not a palindrome\n    // Move pointers towards center\n    leftPointer += 1\n    rightPointer -= 1\n\n  return true // Palindrome\n"})})}),(0,i.jsx)(a.Z,{value:"solution",label:"Solution",children:(0,i.jsxs)(r.Z,{queryString:"code",children:[(0,i.jsx)(a.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(l.Z,{language:"go",children:o})}),(0,i.jsx)(a.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(l.Z,{language:"java",children:c})}),(0,i.jsx)(a.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(l.Z,{language:"js",children:h})}),(0,i.jsx)(a.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(l.Z,{language:"kotlin",children:d})}),(0,i.jsx)(a.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(l.Z,{language:"python",children:u})}),(0,i.jsx)(a.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(l.Z,{language:"rust",children:m})}),(0,i.jsx)(a.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(l.Z,{language:"ts",children:g})})]})})]})]})}function w(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}}}]);