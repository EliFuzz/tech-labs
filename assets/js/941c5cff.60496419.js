"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8306],{24041:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>f,contentTitle:()=>z,default:()=>b,frontMatter:()=>x,metadata:()=>p,toc:()=>j});var i=e(11527),r=e(84135),l=e(40521),a=e(74109),c=e(80035);const s="package main\n\nfunc zAlgorithm(text string) []int {\n\tn := len(text)\n\tz := make([]int, n)\n\tvar l, r int\n\tfor i := 1; i < n; i++ {\n\t\tif i <= r {\n\t\t\tz[i] = min(r-i+1, z[i-l])\n\t\t}\n\t\tfor i+z[i] < n && text[z[i]] == text[i+z[i]] {\n\t\t\tz[i]++\n\t\t}\n\t\tif i+z[i]-1 > r {\n\t\t\tl = i\n\t\t\tr = i + z[i] - 1\n\t\t}\n\t}\n\treturn z\n}\n\nfunc min(a, b int) int {\n\tif a < b {\n\t\treturn a\n\t}\n\treturn b\n}\n",o="import java.util.Arrays;\n\npublic class ZAlgorithm {\n\n  public static int[] zAlgorithm(String text) {\n    int n = text.length();\n    int[] z = new int[n];\n    int l = 0, r = 0;\n    for (int i = 1; i < n; i++) {\n      if (i <= r) {\n        z[i] = Math.min(r - i + 1, z[i - l]);\n      }\n      while (i + z[i] < n && text.charAt(z[i]) == text.charAt(i + z[i])) {\n        z[i]++;\n      }\n      if (i + z[i] - 1 > r) {\n        l = i;\n        r = i + z[i] - 1;\n      }\n    }\n    return z;\n  }\n}\n",h="function zAlgorithm(text) {\n  const n = text.length;\n  const z = new Array(n).fill(0);\n  let l = 0,\n    r = 0;\n  for (let i = 1; i < n; i++) {\n    if (i <= r) {\n      z[i] = Math.min(r - i + 1, z[i - l]);\n    }\n    while (i + z[i] < n && text.charAt(z[i]) === text.charAt(i + z[i])) {\n      z[i]++;\n    }\n    if (i + z[i] - 1 > r) {\n      l = i;\n      r = i + z[i] - 1;\n    }\n  }\n  return z;\n}\n",d="fun zAlgorithm(text: String): IntArray {\n    val n = text.length\n    val z = IntArray(n)\n    var l = 0\n    var r = 0\n    for (i in 1 until n) {\n        if (i <= r) {\n            z[i] = minOf(r - i + 1, z[i - l])\n        }\n        while (i + z[i] < n && text[z[i]] == text[i + z[i]]) {\n            z[i]++\n        }\n        if (i + z[i] - 1 > r) {\n            l = i\n            r = i + z[i] - 1\n        }\n    }\n    return z\n}\n",u="def z_algorithm(text):\n    n = len(text)\n    z = [0] * n\n    l, r = 0, 0\n    for i in range(1, n):\n        if i <= r:\n            z[i] = min(r - i + 1, z[i - l])\n        while i + z[i] < n and text[z[i]] == text[i + z[i]]:\n            z[i] += 1\n        if i + z[i] - 1 > r:\n            l, r = i, i + z[i] - 1\n    return z\n",g="fn z_algorithm(text: &str) -> Vec<usize> {\n    let n = text.len();\n    let mut z = vec![0; n];\n    let (mut l, mut r) = (0, 0);\n    for i in 1..n {\n        if i <= r {\n            z[i] = (r - i + 1).min(z[i - l]);\n        }\n        while i + z[i] < n && text.as_bytes()[z[i]] == text.as_bytes()[i + z[i]] {\n            z[i] += 1;\n        }\n        if i + z[i] - 1 > r {\n            l = i;\n            r = i + z[i] - 1;\n        }\n    }\n    z\n}\n",m="function zAlgorithm(text: string): number[] {\n  const n = text.length;\n  const z: number[] = new Array(n).fill(0);\n  let l = 0,\n    r = 0;\n  for (let i = 1; i < n; i++) {\n    if (i <= r) {\n      z[i] = Math.min(r - i + 1, z[i - l]);\n    }\n    while (i + z[i] < n && text[z[i]] === text[i + z[i]]) {\n      z[i]++;\n    }\n    if (i + z[i] - 1 > r) {\n      l = i;\n      r = i + z[i] - 1;\n    }\n  }\n  return z;\n}\n",x={title:"Z Algorithm",description:"Z Algorithm",hide_table_of_contents:!0},z=void 0,p={id:"education/computer-science/algorithms/algo/z-algorithm",title:"Z Algorithm",description:"Z Algorithm",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/z-algorithm.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/z-algorithm",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/z-algorithm",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/z-algorithm.mdx",tags:[],version:"current",frontMatter:{title:"Z Algorithm",description:"Z Algorithm",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Weighted Random",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/weighted-random"},next:{title:"Programming Languages",permalink:"/tech-labs/docs/category/programming-languages"}},f={},j=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function Z(n){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(l.Z,{queryString:"primary",children:[(0,i.jsx)(a.Z,{value:"definition",label:"Definition",children:(0,i.jsx)(t.p,{children:"The Z Algorithm is a linear time pattern matching algorithm used to find all occurrences of a pattern in a given text. It preprocesses the pattern to create a Z-array, which stores the longest common prefix between the pattern and every suffix of the pattern. This array is then utilized to efficiently find matches in the text"})}),(0,i.jsx)(a.Z,{value:"how",label:"Explanation",children:(0,i.jsx)(t.p,{children:"Preprocesses the pattern and text to construct a Z-array, where each element Z[i] represents the length of the longest substring starting from index i that matches the prefix of the pattern. By comparing the Z-array values with the length of the pattern, we can identify positions in the text where the pattern occurs"})}),(0,i.jsx)(a.Z,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Preprocess the pattern and text to construct the Z-array"}),"\n",(0,i.jsxs)(t.li,{children:["Initialize two pointers, ",(0,i.jsx)(t.code,{children:"L"})," and ",(0,i.jsx)(t.code,{children:"R"}),", where ",(0,i.jsx)(t.code,{children:"L"})," left boundary and ",(0,i.jsx)(t.code,{children:"R"})," right boundary of the current match"]}),"\n",(0,i.jsxs)(t.li,{children:["Iterate through the text","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["update ",(0,i.jsx)(t.code,{children:"R"})," to the maximum index where ",(0,i.jsx)(t.code,{children:"Z[R-L]"})," equals the length of the pattern or until the end of the text"]}),"\n",(0,i.jsxs)(t.li,{children:["if ",(0,i.jsx)(t.code,{children:"R"})," exceeds the current right boundary, update ",(0,i.jsx)(t.code,{children:"L"})," and ",(0,i.jsx)(t.code,{children:"R"})," accordingly"]}),"\n",(0,i.jsxs)(t.li,{children:["if ",(0,i.jsx)(t.code,{children:"R"})," reaches the end of the pattern, record the starting index of the match"]}),"\n"]}),"\n"]}),"\n"]})}),(0,i.jsx)(a.Z,{value:"tips",label:"Tips",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"utilize the Z-array efficiently to avoid unnecessary comparisons"}),"\n",(0,i.jsx)(t.li,{children:"consider edge cases such as empty pattern or text"}),"\n"]})})]}),"\n",(0,i.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(l.Z,{queryString:"primary",children:[(0,i.jsx)(a.Z,{value:"practice",label:"Practice",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'ZAlgorithm(text, pattern):\n  concat = pattern + "$" + text\n  Z = [0] * length(concat)\n  L = 0\n  R = 0\n\n  for i from 1 to length(concat) - 1:\n    if i > R:\n      L = R = i\n      while R < length(concat) and concat[R - L] == concat[R]:\n        R += 1\n      Z[i] = R - L\n      R -= 1\n    else:\n      k = i - L\n      if R - i + 1 > Z[k]:\n        Z[i] = Z[k]\n      else:\n        L = i\n        while R < length(concat) and concat[R - L] == concat[R]:\n          R += 1\n        Z[i] = R - L\n        R -= 1\n\n  matches = []\n  for i from length(pattern) + 1 to length(concat) - 1:\n    if Z[i] == length(pattern):\n      matches.append(i - length(pattern) - 1)\n\n  return matches\n'})})}),(0,i.jsx)(a.Z,{value:"solution",label:"Solution",children:(0,i.jsxs)(l.Z,{queryString:"code",children:[(0,i.jsx)(a.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(c.Z,{language:"go",children:s})}),(0,i.jsx)(a.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(c.Z,{language:"java",children:o})}),(0,i.jsx)(a.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(c.Z,{language:"js",children:h})}),(0,i.jsx)(a.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(c.Z,{language:"kotlin",children:d})}),(0,i.jsx)(a.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(c.Z,{language:"python",children:u})}),(0,i.jsx)(a.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(c.Z,{language:"rust",children:g})}),(0,i.jsx)(a.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(c.Z,{language:"ts",children:m})})]})})]})]})}function b(n={}){const{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(Z,{...n})}):Z(n)}}}]);