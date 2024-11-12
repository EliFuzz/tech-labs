"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6048],{69278:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>b,contentTitle:()=>f,default:()=>v,frontMatter:()=>g,metadata:()=>t,toc:()=>x});const t=JSON.parse('{"id":"education/computer-science/algorithms/algo/unique-paths","title":"Unique Paths","description":"Unique Paths","source":"@site/docs/education/01-computer-science/10-algorithms/04-algo/unique-paths.mdx","sourceDirName":"education/01-computer-science/10-algorithms/04-algo","slug":"/education/computer-science/algorithms/algo/unique-paths","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/unique-paths","draft":false,"unlisted":false,"editUrl":"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/04-algo/unique-paths.mdx","tags":[],"version":"current","frontMatter":{"title":"Unique Paths","description":"Unique Paths","hide_table_of_contents":true},"sidebar":"education","previous":{"title":"Travelling Salesman Problem","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/travelling-salesman-problem"},"next":{"title":"Weighted Random","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/weighted-random"}}');var r=i(86070),a=i(15658),l=i(33407),s=i(33903),o=i(68171);const c="package main\n\nfunc uniquePaths(m int, n int) int {\nfunc uniquePaths(m int, n int) int {\n    dp := make([][]int, m)\n    for i := range dp {\n        dp[i] = make([]int, n)\n        dp[i][0] = 1\n    }\n    for j := 0; j < n; j++ {\n        dp[0][j] = 1\n    }\n    for i := 1; i < m; i++ {\n        for j := 1; j < n; j++ {\n            dp[i][j] = dp[i-1][j] + dp[i][j-1]\n        }\n    }\n    return dp[m-1][n-1]\n}\n",u="public class UniquePaths {\n\n  public int uniquePaths(int m, int n) {\n    int[][] dp = new int[m][n];\n    for (int i = 0; i < m; i++) {\n      dp[i][0] = 1;\n    }\n    for (int j = 0; j < n; j++) {\n      dp[0][j] = 1;\n    }\n    for (int i = 1; i < m; i++) {\n      for (int j = 1; j < n; j++) {\n        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\n      }\n    }\n    return dp[m - 1][n - 1];\n  }\n}\n",d="function uniquePaths(m, n) {\n  const dp = Array.from(Array(m), () => Array(n).fill(1));\n  for (let i = 1; i < m; i++) {\n    for (let j = 1; j < n; j++) {\n      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\n    }\n  }\n  return dp[m - 1][n - 1];\n}\n",h="fun uniquePaths(m: Int, n: Int): Int {\n    val dp = Array(m) { IntArray(n) { 1 } }\n    for (i in 1 until m) {\n        for (j in 1 until n) {\n            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]\n        }\n    }\n    return dp[m - 1][n - 1]\n}\n",m="def uniquePaths(m, n):\n    dp = [[1] * n for _ in range(m)]\n    for i in range(1, m):\n        for j in range(1, n):\n            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]\n    return dp[-1][-1]\n",p="fn unique_paths(m: i32, n: i32) -> i32 {\n    let mut dp = vec![vec![1; n as usize]; m as usize];\n    for i in 1..m as usize {\n        for j in 1..n as usize {\n            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\n        }\n    }\n    dp[(m - 1) as usize][(n - 1) as usize]\n}\n",j="function uniquePaths(m: number, n: number): number {\n  const dp: number[][] = Array.from(Array(m), () => Array(n).fill(1));\n  for (let i = 1; i < m; i++) {\n    for (let j = 1; j < n; j++) {\n      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\n    }\n  }\n  return dp[m - 1][n - 1];\n}\n",g={title:"Unique Paths",description:"Unique Paths",hide_table_of_contents:!0},f=void 0,b={},x=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function q(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(l.A,{queryString:"primary",children:[(0,r.jsx)(s.A,{value:"definition",label:"Definition",children:(0,r.jsx)(e.p,{children:"The Unique Paths Algorithm calculates the number of unique paths from the top-left corner to the bottom-right corner of a grid, moving only down or right"})}),(0,r.jsx)(s.A,{value:"how",label:"Explanation",children:(0,r.jsx)(e.p,{children:"It utilizes dynamic programming to compute the number of unique paths. It starts with initializing a 2D array to store the number of unique paths for each cell. Then, it iterates through each cell of the grid, calculating the number of unique paths to reach that cell by summing the paths from the cell above and the cell to the left. Finally, it returns the value in the bottom-right corner, which represents the total number of unique paths"})}),(0,r.jsx)(s.A,{value:"guidance",label:"Guidance",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Initialize a 2D array grid of size m x n, where ",(0,r.jsx)(e.code,{children:"grid[i][j]"})," represents the number of unique paths to reach cell ",(0,r.jsx)(e.code,{children:"[i, j]"})]}),"\n",(0,r.jsxs)(e.li,{children:["Set ",(0,r.jsx)(e.code,{children:"grid[0][0]"})," to ",(0,r.jsx)(e.code,{children:"1"}),", as there's only one way to reach the starting cell"]}),"\n",(0,r.jsxs)(e.li,{children:["Iterate through each cell in the grid","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["for each cell ",(0,r.jsx)(e.code,{children:"[i, j]"}),", update ",(0,r.jsx)(e.code,{children:"grid[i][j]=grid[i-1][j] + grid[i][j-1]"})," (if they exist)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Return ",(0,r.jsx)(e.code,{children:"grid[m-1][n-1]"}),", which represents the number of unique paths from the top-left corner to the bottom-right corner"]}),"\n"]})}),(0,r.jsx)(s.A,{value:"tips",label:"Tips",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"utilize memoization or dynamic programming to optimize computation time and space"}),"\n",(0,r.jsx)(e.li,{children:"be mindful of integer overflow when dealing with large grid"}),"\n"]})})]}),"\n",(0,r.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsxs)(l.A,{queryString:"primary",children:[(0,r.jsx)(s.A,{value:"practice",label:"Practice",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"uniquePaths(m, n):\n  # Initialize a 2D array to store the number of unique paths\n  grid = [[0] * n for _ in range(m)]\n\n  # Set the starting point to 1\n  grid[0][0] = 1\n\n  # Iterate through each cell\n  for i from 0 to m-1:\n    for j from 0 to n-1:\n      # Update the number of unique paths for the current cell\n      if i > 0:\n        grid[i][j] += grid[i-1][j]\n      if j > 0:\n        grid[i][j] += grid[i][j-1]\n\n  # Return the number of unique paths to the bottom-right corner\n  return grid[m-1][n-1]\n"})})}),(0,r.jsx)(s.A,{value:"solution",label:"Solution",children:(0,r.jsxs)(l.A,{queryString:"code",children:[(0,r.jsx)(s.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,r.jsx)(o.A,{language:"go",children:c})}),(0,r.jsx)(s.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,r.jsx)(o.A,{language:"java",children:u})}),(0,r.jsx)(s.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,r.jsx)(o.A,{language:"js",children:d})}),(0,r.jsx)(s.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,r.jsx)(o.A,{language:"kotlin",children:h})}),(0,r.jsx)(s.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,r.jsx)(o.A,{language:"python",children:m})}),(0,r.jsx)(s.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,r.jsx)(o.A,{language:"rust",children:p})}),(0,r.jsx)(s.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,r.jsx)(o.A,{language:"ts",children:j})})]})})]})]})}function v(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(q,{...n})}):q(n)}}}]);