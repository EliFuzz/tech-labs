"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9815],{91294:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>x,contentTitle:()=>p,default:()=>Z,frontMatter:()=>f,metadata:()=>j,toc:()=>b});var i=t(11527),s=t(84135),r=t(40521),a=t(74109),c=t(80035);const l="package main\n\nfunc hammingDistance(str1, str2 string) int {\n    if len(str1) != len(str2) {\n        return -1\n    }\n    distance := 0\n    for i := 0; i < len(str1); i++ {\n        if str1[i] != str2[i] {\n            distance++\n        }\n    }\n    return distance\n}\n",o="public class HammingDistance {\n\n  public static int hammingDistance(String str1, String str2) {\n    if (str1.length() != str2.length()) {\n      return -1;\n    }\n    int distance = 0;\n    for (int i = 0; i < str1.length(); i++) {\n      if (str1.charAt(i) != str2.charAt(i)) {\n        distance++;\n      }\n    }\n    return distance;\n  }\n}\n",h="function hammingDistance(str1, str2) {\n  if (str1.length !== str2.length) {\n    return -1;\n  }\n  let distance = 0;\n  for (let i = 0; i < str1.length; i++) {\n    if (str1[i] !== str2[i]) {\n      distance++;\n    }\n  }\n  return distance;\n}\n",d='fun hammingDistance(str1: String, str2: String): Int {\n    require(str1.length == str2.length) { "Strings must be of equal length" }\n    var distance = 0\n    for (i in str1.indices) {\n        if (str1[i] != str2[i]) {\n            distance++\n        }\n    }\n    return distance\n}\n',g="def hamming_distance(str1, str2):\n    if len(str1) != len(str2):\n        return -1\n    distance = 0\n    for char1, char2 in zip(str1, str2):\n        if char1 != char2:\n            distance += 1\n    return distance\n",u='fn hamming_distance(str1: &str, str2: &str) -> Result<usize, &\'static str> {\n    if str1.len() != str2.len() {\n        return Err("Strings must be of equal length");\n    }\n    let mut distance = 0;\n    for (c1, c2) in str1.chars().zip(str2.chars()) {\n        if c1 != c2 {\n            distance += 1;\n        }\n    }\n    Ok(distance)\n}\n',m="function hammingDistance(str1: string, str2: string): number {\n  if (str1.length !== str2.length) {\n    return -1;\n  }\n  let distance = 0;\n  for (let i = 0; i < str1.length; i++) {\n    if (str1[i] !== str2[i]) {\n      distance++;\n    }\n  }\n  return distance;\n}\n",f={title:"Hamming Distance",description:"Hamming Distance",hide_table_of_contents:!0},p=void 0,j={id:"education/computer-science/algorithms/algo/hamming-distance",title:"Hamming Distance",description:"Hamming Distance",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/hamming-distance.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/hamming-distance",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/hamming-distance",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/hamming-distance.mdx",tags:[],version:"current",frontMatter:{title:"Hamming Distance",description:"Hamming Distance",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Hamiltonian Cycle",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/hamiltonian-cycle"},next:{title:"Heap Sort",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/heap-sort"}},x={},b=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function v(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(r.Z,{queryString:"primary",children:[(0,i.jsx)(a.Z,{value:"definition",label:"Definition",children:(0,i.jsx)(e.p,{children:"The Hamming Distance Algorithm calculates the number of positions at which corresponding symbols differ between two strings of equal length"})}),(0,i.jsx)(a.Z,{value:"how",label:"Explanation",children:(0,i.jsx)(e.p,{children:"The algorithm iterates over each symbol in the strings and compares them. It increments a counter whenever it finds a difference. The final count represents the Hamming distance"})}),(0,i.jsx)(a.Z,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Take two strings as input, ensuring they are of equal length"}),"\n",(0,i.jsxs)(e.li,{children:["Initialize a variable ",(0,i.jsx)(e.code,{children:"distance"})," to ",(0,i.jsx)(e.code,{children:"0"})," to keep track of differences"]}),"\n",(0,i.jsx)(e.li,{children:"Iterate over each character in the strings simultaneously"}),"\n",(0,i.jsx)(e.li,{children:"Compare characters at the same position in both strings"}),"\n",(0,i.jsxs)(e.li,{children:["If characters differ, increment ",(0,i.jsx)(e.code,{children:"distance"})," by ",(0,i.jsx)(e.code,{children:"1"})]}),"\n",(0,i.jsx)(e.li,{children:"Continue until you've checked all positions"}),"\n",(0,i.jsxs)(e.li,{children:["Return the value of ",(0,i.jsx)(e.code,{children:"distance"})]}),"\n"]})}),(0,i.jsx)(a.Z,{value:"tips",label:"Tips",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"ensure both strings are of equal length before applying the algorithm"}),"\n",(0,i.jsx)(e.li,{children:"optimize by exiting the loop early if the lengths of the strings are exceeded"}),"\n"]})})]}),"\n",(0,i.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(r.Z,{queryString:"primary",children:[(0,i.jsx)(a.Z,{value:"practice",label:"Practice",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'hammingDistance(string1, string2):\n  if length(string1) \u2260 length(string2):\n    throw "Error: Strings must be of equal length"\n\n  distance = 0\n  for i = 0 to length(string1) - 1:\n    if string1[i] \u2260 string2[i]:\n      distance += 1\n\n  return distance\n'})})}),(0,i.jsx)(a.Z,{value:"solution",label:"Solution",children:(0,i.jsxs)(r.Z,{queryString:"code",children:[(0,i.jsx)(a.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(c.Z,{language:"go",children:l})}),(0,i.jsx)(a.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(c.Z,{language:"java",children:o})}),(0,i.jsx)(a.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(c.Z,{language:"js",children:h})}),(0,i.jsx)(a.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(c.Z,{language:"kotlin",children:d})}),(0,i.jsx)(a.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(c.Z,{language:"python",children:g})}),(0,i.jsx)(a.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(c.Z,{language:"rust",children:u})}),(0,i.jsx)(a.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(c.Z,{language:"ts",children:m})})]})})]})]})}function Z(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(v,{...n})}):v(n)}}}]);