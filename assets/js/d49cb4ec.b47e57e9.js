"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1401],{21425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>j,default:()=>v,frontMatter:()=>x,metadata:()=>p,toc:()=>b});var i=t(11527),s=t(88672),l=t(29140),o=t(52360),r=t(52296);const c="package main\n\nfunc longestCommonSubsequence(text1 string, text2 string) int {\n\tm, n := len(text1), len(text2)\n\tdp := make([][]int, m+1)\n\tfor i := range dp {\n\t\tdp[i] = make([]int, n+1)\n\t}\n\tfor i := 1; i <= m; i++ {\n\t\tfor j := 1; j <= n; j++ {\n\t\t\tif text1[i-1] == text2[j-1] {\n\t\t\t\tdp[i][j] = dp[i-1][j-1] + 1\n\t\t\t} else {\n\t\t\t\tdp[i][j] = max(dp[i-1][j], dp[i][j-1])\n\t\t\t}\n\t\t}\n\t}\n\treturn dp[m][n]\n}\n\nfunc max(a, b int) int {\n\tif a > b {\n\t\treturn a\n\t}\n\treturn b\n}\n",a="public class LongestCommonSubsequence {\n\n  public int longestCommonSubsequence(String text1, String text2) {\n    int m = text1.length();\n    int n = text2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 1; i <= m; i++) {\n      for (int j = 1; j <= n; j++) {\n        if (text1.charAt(i - 1) == text2.charAt(j - 1)) {\n          dp[i][j] = dp[i - 1][j - 1] + 1;\n        } else {\n          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n        }\n      }\n    }\n    return dp[m][n];\n  }\n}\n",m="function longestCommonSubsequence(text1, text2) {\n  const m = text1.length;\n  const n = text2.length;\n  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1] + 1;\n      } else {\n        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n      }\n    }\n  }\n  return dp[m][n];\n}\n",u="fun longestCommonSubsequence(text1: String, text2: String): Int {\n    val m = text1.length\n    val n = text2.length\n    val dp = Array(m + 1) { IntArray(n + 1) }\n    for (i in 1..m) {\n        for (j in 1..n) {\n            dp[i][j] = if (text1[i - 1] == text2[j - 1]) {\n                dp[i - 1][j - 1] + 1\n            } else {\n                maxOf(dp[i - 1][j], dp[i][j - 1])\n            }\n        }\n    }\n    return dp[m][n]\n}\n",h="def longestCommonSubsequence(text1: str, text2: str) -> int:\n    m, n = len(text1), len(text2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if text1[i - 1] == text2[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1] + 1\n            else:\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\n    return dp[m][n]\n",d="fn longest_common_subsequence(text1: &str, text2: &str) -> usize {\n    let m = text1.len();\n    let n = text2.len();\n    let mut dp = vec![vec![0; n + 1]; m + 1];\n    for i in 1..=m {\n        for j in 1..=n {\n            if text1.chars().nth(i - 1) == text2.chars().nth(j - 1) {\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n            } else {\n                dp[i][j] = dp[i - 1][j].max(dp[i][j - 1]);\n            }\n        }\n    }\n    dp[m][n]\n}\n",g="function longestCommonSubsequence(text1: string, text2: string): number {\n  const m = text1.length;\n  const n = text2.length;\n  const dp: number[][] = Array.from({ length: m + 1 }, () =>\n    Array(n + 1).fill(0),\n  );\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1] + 1;\n      } else {\n        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n      }\n    }\n  }\n  return dp[m][n];\n}\n",x={title:"Longest Common Subsequence (LCS)",description:"Longest Common Subsequence (LCS)",hide_table_of_contents:!0},j=void 0,p={id:"education/computer-science/algorithms/algo/longest-common-subsequence",title:"Longest Common Subsequence (LCS)",description:"Longest Common Subsequence (LCS)",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/longest-common-subsequence.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/longest-common-subsequence",permalink:"/docs/education/computer-science/algorithms/algo/longest-common-subsequence",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/longest-common-subsequence.mdx",tags:[],version:"current",frontMatter:{title:"Longest Common Subsequence (LCS)",description:"Longest Common Subsequence (LCS)",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Liu Hui `\u03c0` Algorithm",permalink:"/docs/education/computer-science/algorithms/algo/liu-hui-algorithm"},next:{title:"Longest Common Substring (LCS)",permalink:"/docs/education/computer-science/algorithms/algo/longest-common-substring"}},f={},b=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function q(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(o.Z,{value:"definition",label:"Definition",children:(0,i.jsx)(n.p,{children:"The Longest Common Subsequence (LCS) Algorithm is a dynamic programming approach used to find the longest subsequence present in given sequences"})}),(0,i.jsx)(o.Z,{value:"how",label:"Explanation",children:(0,i.jsx)(n.p,{children:"The LCS algorithm aims to find the longest subsequence that is common to two given sequences. It starts by constructing a matrix where each cell represents the length of the longest common subsequence up to that point in the sequences. By iteratively filling this matrix, the algorithm efficiently computes the length of the longest common subsequence. It does so by comparing characters of the input sequences at each step. If the characters match, it adds one to the length of the LCS obtained without considering those characters. Otherwise, it takes the maximum length obtained so far without considering either of the characters. Finally, tracing back through the filled matrix yields the actual LCS"})}),(0,i.jsx)(o.Z,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Initialize a matrix with dimensions ",(0,i.jsx)(n.code,{children:"[m+1][n+1]"})," where ",(0,i.jsx)(n.code,{children:"m"})," and ",(0,i.jsx)(n.code,{children:"n"})," are the lengths of the 2 sequences"]}),"\n",(0,i.jsx)(n.li,{children:"Iterate through each cell of the matrix"}),"\n",(0,i.jsx)(n.li,{children:"If the characters at the corresponding positions in the sequences match, increment the value in the current cell by 1 plus the value in the diagonal cell"}),"\n",(0,i.jsx)(n.li,{children:"If the characters don't match, take the maximum of the values in the adjacent cells (above or to the left)"}),"\n",(0,i.jsx)(n.li,{children:"Continue this process until the entire matrix is filled"}),"\n",(0,i.jsx)(n.li,{children:"Trace back through the matrix from the bottom-right cell to reconstruct the LCS"}),"\n"]})}),(0,i.jsx)(o.Z,{value:"tips",label:"Tips",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["optimize space usage by realizing that you only need to keep track of the current row and the previous row of the matrix, reducing space complexity to ",(0,i.jsx)(n.code,{children:"O(min(m, n))"})]}),"\n",(0,i.jsx)(n.li,{children:"ensure your implementation handles edge cases properly, such as empty sequences or sequences with no common elements"}),"\n"]})})]}),"\n",(0,i.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(o.Z,{value:"practice",label:"Practice",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"longest_common_subsequence(sequence1, sequence2):\n  m = length(sequence1)\n  n = length(sequence2)\n  matrix = initialize_matrix(m, n)\n\n  for i from 1 to m:\n    for j from 1 to n:\n      if sequence1[i-1] == sequence2[j-1]:\n        matrix[i][j] = matrix[i-1][j-1] + 1\n      else:\n        matrix[i][j] = max(matrix[i-1][j], matrix[i][j-1])\n\n  return reconstruct_lcs(matrix, sequence1, sequence2, m, n)\n\nreconstruct_lcs(matrix, sequence1, sequence2, m, n):\n  lcs = []\n  i = m\n  j = n\n\n  while i > 0 and j > 0:\n    if sequence1[i-1] == sequence2[j-1]:\n      lcs.push(sequence1[i-1])\n      i -= 1\n      j -= 1\n    else if matrix[i-1][j] > matrix[i][j-1]:\n      i -= 1\n    else:\n      j -= 1\n\n  return reverse(lcs)\n\ninitialize_matrix(m, n):\n  matrix = new matrix with dimensions (m+1) x (n+1)\n  for i from 0 to m:\n    matrix[i][0] = 0\n  for j from 0 to n:\n    matrix[0][j] = 0\n  return matrix\n"})})}),(0,i.jsx)(o.Z,{value:"solution",label:"Solution",children:(0,i.jsxs)(l.Z,{queryString:"code",children:[(0,i.jsx)(o.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(r.Z,{language:"go",children:c})}),(0,i.jsx)(o.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(r.Z,{language:"java",children:a})}),(0,i.jsx)(o.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(r.Z,{language:"js",children:m})}),(0,i.jsx)(o.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(r.Z,{language:"kotlin",children:u})}),(0,i.jsx)(o.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(r.Z,{language:"python",children:h})}),(0,i.jsx)(o.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(r.Z,{language:"rust",children:d})}),(0,i.jsx)(o.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(r.Z,{language:"ts",children:g})})]})})]})]})}function v(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}}}]);