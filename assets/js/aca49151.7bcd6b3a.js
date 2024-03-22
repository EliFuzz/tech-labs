"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[666],{35564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>v,frontMatter:()=>g,metadata:()=>f,toc:()=>j});var i=n(11527),s=n(88672),r=n(29140),a=n(52360),l=n(52296);const u="package main\n\nfunc permutations(nums []int) [][]int {\n\tvar result [][]int\n\tvar backtrack func(start int)\n\tbacktrack = func(start int) {\n\t\tif start == len(nums) {\n\t\t\ttemp := make([]int, len(nums))\n\t\t\tcopy(temp, nums)\n\t\t\tresult = append(result, temp)\n\t\t\treturn\n\t\t}\n\t\tfor i := start; i < len(nums); i++ {\n\t\t\tnums[i], nums[start] = nums[start], nums[i]\n\t\t\tbacktrack(start + 1)\n\t\t\tnums[i], nums[start] = nums[start], nums[i]\n\t\t}\n\t}\n\tbacktrack(0)\n\treturn result\n}\n",c="import java.util.ArrayList;\nimport java.util.List;\n\npublic class Permutations {\n\n  public List<List<Integer>> permute(int[] nums) {\n    List<List<Integer>> result = new ArrayList<>();\n    backtrack(nums, new ArrayList<>(), result);\n    return result;\n  }\n\n  private void backtrack(int[] nums, List<Integer> temp, List<List<Integer>> result) {\n    if (temp.size() == nums.length) {\n      result.add(new ArrayList<>(temp));\n      return;\n    }\n    for (int i = 0; i < nums.length; i++) {\n      if (temp.contains(nums[i])) {\n        continue;\n      }\n      temp.add(nums[i]);\n      backtrack(nums, temp, result);\n      temp.remove(temp.size() - 1);\n    }\n  }\n}\n",m="function permutations(nums) {\n  const result = [];\n\n  function backtrack(temp) {\n    if (temp.length === nums.length) {\n      result.push([...temp]);\n      return;\n    }\n    for (let num of nums) {\n      if (!temp.includes(num)) {\n        temp.push(num);\n        backtrack(temp);\n        temp.pop();\n      }\n    }\n  }\n\n  backtrack([]);\n  return result;\n}\n",o="fun permutations(nums: IntArray): List<List<Int>> {\n    val result = mutableListOf<List<Int>>()\n    fun backtrack(temp: MutableList<Int>) {\n        if (temp.size == nums.size) {\n            result.add(temp.toList())\n            return\n        }\n        for (num in nums) {\n            if (!temp.contains(num)) {\n                temp.add(num)\n                backtrack(temp)\n                temp.removeAt(temp.size - 1)\n            }\n        }\n    }\n    backtrack(mutableListOf())\n    return result\n}\n",p="def permutations(nums):\n    result = []\n\n    def backtrack(temp):\n        if len(temp) == len(nums):\n            result.append(temp[:])\n            return\n        for num in nums:\n            if num not in temp:\n                temp.append(num)\n                backtrack(temp)\n                temp.pop()\n\n    backtrack([])\n    return result\n",d="fn permutations(nums: &mut Vec<i32>) -> Vec<Vec<i32>> {\n    let mut result = Vec::new();\n\n    fn backtrack(nums: &mut Vec<i32>, start: usize, result: &mut Vec<Vec<i32>>) {\n        if start == nums.len() {\n            result.push(nums.clone());\n            return;\n        }\n        for i in start..nums.len() {\n            nums.swap(start, i);\n            backtrack(nums, start + 1, result);\n            nums.swap(start, i);\n        }\n    }\n\n    backtrack(nums, 0, &mut result);\n    result\n}\n",h="function permutations(nums: number[]): number[][] {\n  const result: number[][] = [];\n\n  function backtrack(temp: number[]) {\n    if (temp.length === nums.length) {\n      result.push([...temp]);\n      return;\n    }\n    for (let num of nums) {\n      if (!temp.includes(num)) {\n        temp.push(num);\n        backtrack(temp);\n        temp.pop();\n      }\n    }\n  }\n\n  backtrack([]);\n  return result;\n}\n",g={title:"Permutations",description:"Permutations",hide_table_of_contents:!0},b=void 0,f={id:"education/computer-science/algorithms/algo/permutations",title:"Permutations",description:"Permutations",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/permutations.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/permutations",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/permutations",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/permutations.mdx",tags:[],version:"current",frontMatter:{title:"Permutations",description:"Permutations",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Pascal's Triangle",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/pascals-triangle"},next:{title:"Polynomial Hash",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/polynomial-hash"}},k={},j=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function x(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(a.Z,{value:"definition",label:"Definition",children:(0,i.jsx)(t.p,{children:"The Permutations Algorithm is a method used to generate all possible arrangements of elements in a set"})}),(0,i.jsx)(a.Z,{value:"how",label:"Explanation",children:(0,i.jsx)(t.p,{children:"Recursively or iteratively generating permutations of elements in a set. At each step, it selects an element from the set and appends it to the current permutation. Then, it recursively generates permutations for the remaining elements until all elements have been used. The algorithm backtracks whenever it completes a permutation or reaches a dead-end, allowing it to explore all possible arrangements"})}),(0,i.jsx)(a.Z,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Start with an empty permutation list"}),"\n",(0,i.jsx)(t.li,{children:"Iterate through each element in the set"}),"\n",(0,i.jsxs)(t.li,{children:["For each element","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Append it to the current permutation"}),"\n",(0,i.jsx)(t.li,{children:"Recursively generate permutations for the remaining elements"}),"\n",(0,i.jsx)(t.li,{children:"Backtrack to explore other possibilities"}),"\n",(0,i.jsx)(t.li,{children:"Repeat until all elements have been used"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Return the list of permutations"}),"\n"]})}),(0,i.jsx)(a.Z,{value:"tips",label:"Tips",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"use efficient data structures like arrays or lists to store permutations"}),"\n",(0,i.jsx)(t.li,{children:"implement the algorithm using recursion for simplicity, but consider optimizing it with iteration for large sets"}),"\n",(0,i.jsx)(t.li,{children:"utilize techniques like backtracking to efficiently explore all possible arrangements and avoid unnecessary computations"}),"\n"]})})]}),"\n",(0,i.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(a.Z,{value:"practice",label:"Practice",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"generate_permutations(elements, current_permutation, permutations):\n  if length(current_permutation) == length(elements):\n    permutations.append(current_permutation)\n    return\n\n  for each element in elements:\n    if element not in current_permutation:\n      new_permutation = current_permutation + [element]\n      generate_permutations(elements, new_permutation, permutations)\n"})})}),(0,i.jsx)(a.Z,{value:"solution",label:"Solution",children:(0,i.jsxs)(r.Z,{queryString:"code",children:[(0,i.jsx)(a.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(l.Z,{language:"go",children:u})}),(0,i.jsx)(a.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(l.Z,{language:"java",children:c})}),(0,i.jsx)(a.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(l.Z,{language:"js",children:m})}),(0,i.jsx)(a.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(l.Z,{language:"kotlin",children:o})}),(0,i.jsx)(a.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(l.Z,{language:"python",children:p})}),(0,i.jsx)(a.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(l.Z,{language:"rust",children:d})}),(0,i.jsx)(a.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(l.Z,{language:"ts",children:h})})]})})]})]})}function v(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);