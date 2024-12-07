"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8739],{30177:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>f,default:()=>b,frontMatter:()=>z,metadata:()=>i,toc:()=>j});const i=JSON.parse('{"id":"education/computer-science/algorithms/algo/z-algorithm","title":"Z Algorithm","description":"Z Algorithm","source":"@site/docs/education/01-computer-science/10-algorithms/04-algo/z-algorithm.mdx","sourceDirName":"education/01-computer-science/10-algorithms/04-algo","slug":"/education/computer-science/algorithms/algo/z-algorithm","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/z-algorithm","draft":false,"unlisted":false,"editUrl":"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/04-algo/z-algorithm.mdx","tags":[],"version":"current","frontMatter":{"title":"Z Algorithm","description":"Z Algorithm","hide_table_of_contents":true},"sidebar":"education","previous":{"title":"Weighted Random","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/weighted-random"},"next":{"title":"Tech Stack","permalink":"/tech-labs/docs/category/tech-stack"}}');var r=e(86070),l=e(15658),a=e(52421),c=e(74610),s=e(42953);const o="package main\n\nfunc zAlgorithm(text string) []int {\n\tn := len(text)\n\tz := make([]int, n)\n\tvar l, r int\n\tfor i := 1; i < n; i++ {\n\t\tif i <= r {\n\t\t\tz[i] = min(r-i+1, z[i-l])\n\t\t}\n\t\tfor i+z[i] < n && text[z[i]] == text[i+z[i]] {\n\t\t\tz[i]++\n\t\t}\n\t\tif i+z[i]-1 > r {\n\t\t\tl = i\n\t\t\tr = i + z[i] - 1\n\t\t}\n\t}\n\treturn z\n}\n\nfunc min(a, b int) int {\n\tif a < b {\n\t\treturn a\n\t}\n\treturn b\n}\n",h="import java.util.Arrays;\n\npublic class ZAlgorithm {\n\n  public static int[] zAlgorithm(String text) {\n    int n = text.length();\n    int[] z = new int[n];\n    int l = 0, r = 0;\n    for (int i = 1; i < n; i++) {\n      if (i <= r) {\n        z[i] = Math.min(r - i + 1, z[i - l]);\n      }\n      while (i + z[i] < n && text.charAt(z[i]) == text.charAt(i + z[i])) {\n        z[i]++;\n      }\n      if (i + z[i] - 1 > r) {\n        l = i;\n        r = i + z[i] - 1;\n      }\n    }\n    return z;\n  }\n}\n",d="function zAlgorithm(text) {\n  const n = text.length;\n  const z = new Array(n).fill(0);\n  let l = 0,\n    r = 0;\n  for (let i = 1; i < n; i++) {\n    if (i <= r) {\n      z[i] = Math.min(r - i + 1, z[i - l]);\n    }\n    while (i + z[i] < n && text.charAt(z[i]) === text.charAt(i + z[i])) {\n      z[i]++;\n    }\n    if (i + z[i] - 1 > r) {\n      l = i;\n      r = i + z[i] - 1;\n    }\n  }\n  return z;\n}\n",u="fun zAlgorithm(text: String): IntArray {\n    val n = text.length\n    val z = IntArray(n)\n    var l = 0\n    var r = 0\n    for (i in 1 until n) {\n        if (i <= r) {\n            z[i] = minOf(r - i + 1, z[i - l])\n        }\n        while (i + z[i] < n && text[z[i]] == text[i + z[i]]) {\n            z[i]++\n        }\n        if (i + z[i] - 1 > r) {\n            l = i\n            r = i + z[i] - 1\n        }\n    }\n    return z\n}\n",g="def z_algorithm(text):\n    n = len(text)\n    z = [0] * n\n    l, r = 0, 0\n    for i in range(1, n):\n        if i <= r:\n            z[i] = min(r - i + 1, z[i - l])\n        while i + z[i] < n and text[z[i]] == text[i + z[i]]:\n            z[i] += 1\n        if i + z[i] - 1 > r:\n            l, r = i, i + z[i] - 1\n    return z\n",m="fn z_algorithm(text: &str) -> Vec<usize> {\n    let n = text.len();\n    let mut z = vec![0; n];\n    let (mut l, mut r) = (0, 0);\n    for i in 1..n {\n        if i <= r {\n            z[i] = (r - i + 1).min(z[i - l]);\n        }\n        while i + z[i] < n && text.as_bytes()[z[i]] == text.as_bytes()[i + z[i]] {\n            z[i] += 1;\n        }\n        if i + z[i] - 1 > r {\n            l = i;\n            r = i + z[i] - 1;\n        }\n    }\n    z\n}\n",x="function zAlgorithm(text: string): number[] {\n  const n = text.length;\n  const z: number[] = new Array(n).fill(0);\n  let l = 0,\n    r = 0;\n  for (let i = 1; i < n; i++) {\n    if (i <= r) {\n      z[i] = Math.min(r - i + 1, z[i - l]);\n    }\n    while (i + z[i] < n && text[z[i]] === text[i + z[i]]) {\n      z[i]++;\n    }\n    if (i + z[i] - 1 > r) {\n      l = i;\n      r = i + z[i] - 1;\n    }\n  }\n  return z;\n}\n",z={title:"Z Algorithm",description:"Z Algorithm",hide_table_of_contents:!0},f=void 0,p={},j=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function A(n){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(a.A,{queryString:"primary",children:[(0,r.jsx)(c.A,{value:"definition",label:"Definition",children:(0,r.jsx)(t.p,{children:"The Z Algorithm is a linear time pattern matching algorithm used to find all occurrences of a pattern in a given text. It preprocesses the pattern to create a Z-array, which stores the longest common prefix between the pattern and every suffix of the pattern. This array is then utilized to efficiently find matches in the text"})}),(0,r.jsx)(c.A,{value:"how",label:"Explanation",children:(0,r.jsx)(t.p,{children:"Preprocesses the pattern and text to construct a Z-array, where each element Z[i] represents the length of the longest substring starting from index i that matches the prefix of the pattern. By comparing the Z-array values with the length of the pattern, we can identify positions in the text where the pattern occurs"})}),(0,r.jsx)(c.A,{value:"guidance",label:"Guidance",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Preprocess the pattern and text to construct the Z-array"}),"\n",(0,r.jsxs)(t.li,{children:["Initialize two pointers, ",(0,r.jsx)(t.code,{children:"L"})," and ",(0,r.jsx)(t.code,{children:"R"}),", where ",(0,r.jsx)(t.code,{children:"L"})," left boundary and ",(0,r.jsx)(t.code,{children:"R"})," right boundary of the current match"]}),"\n",(0,r.jsxs)(t.li,{children:["Iterate through the text","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["update ",(0,r.jsx)(t.code,{children:"R"})," to the maximum index where ",(0,r.jsx)(t.code,{children:"Z[R-L]"})," equals the length of the pattern or until the end of the text"]}),"\n",(0,r.jsxs)(t.li,{children:["if ",(0,r.jsx)(t.code,{children:"R"})," exceeds the current right boundary, update ",(0,r.jsx)(t.code,{children:"L"})," and ",(0,r.jsx)(t.code,{children:"R"})," accordingly"]}),"\n",(0,r.jsxs)(t.li,{children:["if ",(0,r.jsx)(t.code,{children:"R"})," reaches the end of the pattern, record the starting index of the match"]}),"\n"]}),"\n"]}),"\n"]})}),(0,r.jsx)(c.A,{value:"tips",label:"Tips",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"utilize the Z-array efficiently to avoid unnecessary comparisons"}),"\n",(0,r.jsx)(t.li,{children:"consider edge cases such as empty pattern or text"}),"\n"]})})]}),"\n",(0,r.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsxs)(a.A,{queryString:"primary",children:[(0,r.jsx)(c.A,{value:"practice",label:"Practice",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'ZAlgorithm(text, pattern):\n  concat = pattern + "$" + text\n  Z = [0] * length(concat)\n  L = 0\n  R = 0\n\n  for i from 1 to length(concat) - 1:\n    if i > R:\n      L = R = i\n      while R < length(concat) and concat[R - L] == concat[R]:\n        R += 1\n      Z[i] = R - L\n      R -= 1\n    else:\n      k = i - L\n      if R - i + 1 > Z[k]:\n        Z[i] = Z[k]\n      else:\n        L = i\n        while R < length(concat) and concat[R - L] == concat[R]:\n          R += 1\n        Z[i] = R - L\n        R -= 1\n\n  matches = []\n  for i from length(pattern) + 1 to length(concat) - 1:\n    if Z[i] == length(pattern):\n      matches.append(i - length(pattern) - 1)\n\n  return matches\n'})})}),(0,r.jsx)(c.A,{value:"solution",label:"Solution",children:(0,r.jsxs)(a.A,{queryString:"code",children:[(0,r.jsx)(c.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,r.jsx)(s.A,{language:"go",children:o})}),(0,r.jsx)(c.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,r.jsx)(s.A,{language:"java",children:h})}),(0,r.jsx)(c.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,r.jsx)(s.A,{language:"js",children:d})}),(0,r.jsx)(c.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,r.jsx)(s.A,{language:"kotlin",children:u})}),(0,r.jsx)(c.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,r.jsx)(s.A,{language:"python",children:g})}),(0,r.jsx)(c.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,r.jsx)(s.A,{language:"rust",children:m})}),(0,r.jsx)(c.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,r.jsx)(s.A,{language:"ts",children:x})})]})})]})]})}function b(n={}){const{wrapper:t}={...(0,l.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(A,{...n})}):A(n)}}}]);