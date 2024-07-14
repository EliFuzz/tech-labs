"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2560],{48766:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>g,default:()=>v,frontMatter:()=>b,metadata:()=>f,toc:()=>x});var i=n(86070),a=n(25710),r=n(98459),s=n(37515),c=n(18792);const l="func combinationSum(candidates []int, target int) [][]int {\n    var res [][]int\n    backtrack(&res, []int{}, candidates, target, 0)\n    return res\n}\n\nfunc backtrack(res *[][]int, temp []int, candidates []int, remain int, start int) {\n    if remain < 0 {\n        return\n    } else if remain == 0 {\n        c := make([]int, len(temp))\n        copy(c, temp)\n        *res = append(*res, c)\n        return\n    } else {\n        for i := start; i < len(candidates); i++ {\n            temp = append(temp, candidates[i])\n            backtrack(res, temp, candidates, remain-candidates[i], i)\n            temp = temp[:len(temp)-1]\n        }\n    }\n}\n",u="import java.util.*;\n\npublic class Solution {\n\n  public List<List<Integer>> combinationSum(int[] candidates, int target) {\n    List<List<Integer>> result = new ArrayList<>();\n    backtrack(result, new ArrayList<>(), candidates, target, 0);\n    return result;\n  }\n\n  private void backtrack(List<List<Integer>> result, List<Integer> tempList, int[] candidates, int remain, int start) {\n    if (remain < 0) {\n      return;\n    } else if (remain == 0) {\n      result.add(new ArrayList<>(tempList));\n    } else {\n      for (int i = start; i < candidates.length; i++) {\n        tempList.add(candidates[i]);\n        backtrack(result, tempList, candidates, remain - candidates[i], i);\n        tempList.remove(tempList.size() - 1);\n      }\n    }\n  }\n}\n",o="function combinationSum(candidates, target) {\n  let result = [];\n  backtrack(result, [], candidates, target, 0);\n  return result;\n}\n\nfunction backtrack(result, tempList, candidates, remain, start) {\n  if (remain < 0) {\n\n  } else if (remain === 0) {\n    result.push([...tempList]);\n  } else {\n    for (let i = start; i < candidates.length; i++) {\n      tempList.push(candidates[i]);\n      backtrack(result, tempList, candidates, remain - candidates[i], i);\n      tempList.pop();\n    }\n  }\n}\n",d="fun combinationSum(candidates: IntArray, target: Int): List<List<Int>> {\n    val result = mutableListOf<List<Int>>()\n    backtrack(result, mutableListOf(), candidates, target, 0)\n    return result\n}\n\nfun backtrack(result: MutableList<List<Int>>, tempList: MutableList<Int>, candidates: IntArray, remain: Int, start: Int) {\n    if (remain < 0) {\n        return\n    } else if (remain == 0) {\n        result.add(ArrayList(tempList))\n    } else {\n        for (i in start until candidates.size) {\n            tempList.add(candidates[i])\n            backtrack(result, tempList, candidates, remain - candidates[i], i)\n            tempList.removeAt(tempList.size - 1)\n        }\n    }\n}\n",m="def combinationSum(candidates, target):\n    result = []\n    backtrack(result, [], candidates, target, 0)\n    return result\n\ndef backtrack(result, tempList, candidates, remain, start):\n    if remain < 0:\n        return\n    elif remain == 0:\n        result.append(list(tempList))\n    else:\n        for i in range(start, len(candidates)):\n            tempList.append(candidates[i])\n            backtrack(result, tempList, candidates, remain - candidates[i], i)\n            tempList.pop()\n",p="pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {\n    let mut result = vec![];\n    backtrack(&mut result, &mut vec![], &candidates, target, 0);\n    result\n}\n\nfn backtrack(result: &mut Vec<Vec<i32>>, temp_list: &mut Vec<i32>, candidates: &Vec<i32>, remain: i32, start: usize) {\n    if remain < 0 {\n        return;\n    } else if remain == 0 {\n        result.push(temp_list.clone());\n    } else {\n        for i in start..candidates.len() {\n            temp_list.push(candidates[i]);\n            backtrack(result, temp_list, candidates, remain - candidates[i], i);\n            temp_list.pop();\n        }\n    }\n}\n",h="function combinationSum(candidates: number[], target: number): number[][] {\n  const result: number[][] = [];\n  backtrack(result, [], candidates, target, 0);\n  return result;\n}\n\nfunction backtrack(\n  result: number[][],\n  tempList: number[],\n  candidates: number[],\n  remain: number,\n  start: number,\n) {\n  if (remain < 0) {\n    return;\n  } else if (remain === 0) {\n    result.push([...tempList]);\n  } else {\n    for (let i = start; i < candidates.length; i++) {\n      tempList.push(candidates[i]);\n      backtrack(result, tempList, candidates, remain - candidates[i], i);\n      tempList.pop();\n    }\n  }\n}\n",b={title:"Combination Sum",description:"Combination Sum",hide_table_of_contents:!0},g=void 0,f={id:"education/computer-science/algorithms/algo/combination-sum",title:"Combination Sum",description:"Combination Sum",source:"@site/docs/education/01-computer-science/10-algorithms/04-algo/combination-sum.mdx",sourceDirName:"education/01-computer-science/10-algorithms/04-algo",slug:"/education/computer-science/algorithms/algo/combination-sum",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/combination-sum",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/04-algo/combination-sum.mdx",tags:[],version:"current",frontMatter:{title:"Combination Sum",description:"Combination Sum",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Cartesian Product",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/cartesian-product"},next:{title:"Combinations",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/combinations"}},k={},x=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function j(t){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(r.A,{queryString:"primary",children:[(0,i.jsx)(s.A,{value:"definition",label:"Definition",children:(0,i.jsx)(e.p,{children:"The Combination Sum Algorithm finds all unique combinations of a given set of numbers that sum up to a specific target value. It's a backtracking algorithm commonly used in scenarios where you need to solve problems related to combinations and permutations"})}),(0,i.jsx)(s.A,{value:"how",label:"Explanation",children:(0,i.jsx)(e.p,{children:"The algorithm begins by sorting the input array to manage duplicates effectively. It then recursively traverses through potential combinations of numbers to reach the target sum. During each iteration, it chooses whether to include or exclude a number from the array in the current combination. This recursive process persists until either a combination adding up to the target is found or all possibilities are exhausted"})}),(0,i.jsx)(s.A,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Sort the input array in non-decreasing order to handle duplicates"}),"\n",(0,i.jsx)(e.li,{children:"Initialize an empty list to store combinations"}),"\n",(0,i.jsxs)(e.li,{children:["Implement a recursive function","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Base case: If the target sum becomes 0, add the current combination to the result list"}),"\n",(0,i.jsxs)(e.li,{children:["Iterate through the array","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"For each element, subtract it from the target sum"}),"\n",(0,i.jsx)(e.li,{children:"Recursively call the function with the updated target and the remaining elements of the array"}),"\n",(0,i.jsx)(e.li,{children:"Remove the element from the current combination"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"Call the recursive function with the initial target sum and the entire input array"}),"\n",(0,i.jsx)(e.li,{children:"Return the list of combinations"}),"\n"]})}),(0,i.jsx)(s.A,{value:"tips",label:"Tips",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"avoid duplicate combinations by sorting the input array and skipping duplicates during recursion"}),"\n",(0,i.jsx)(e.li,{children:"prune the search space by stopping recursion if the current element exceeds the remaining target sum"}),"\n",(0,i.jsx)(e.li,{children:"use a data structure like a set to store unique combinations and avoid duplicates"}),"\n"]})})]}),"\n",(0,i.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(r.A,{queryString:"primary",children:[(0,i.jsx)(s.A,{value:"practice",label:"Practice",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"combinationSum(nums, target):\n  sort(nums) // Sort the input array\n  result = [] // Initialize result list\n\n  backtrack(0, target, []) // Call the recursive function with initial parameters\n  return result\n\nbacktrack(start, target, path):\n  if target == 0:\n    result.append(path) // Add current combination to result\n    return\n\n  for i from start to length(nums):\n    if nums[i] > target:\n      break // Stop recursion if current element exceeds target\n\n    backtrack(i, target - nums[i], path + [nums[i]]) // Recur with updated target and path\n"})})}),(0,i.jsx)(s.A,{value:"solution",label:"Solution",children:(0,i.jsxs)(r.A,{queryString:"code",children:[(0,i.jsx)(s.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(c.A,{language:"go",children:l})}),(0,i.jsx)(s.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(c.A,{language:"java",children:u})}),(0,i.jsx)(s.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(c.A,{language:"js",children:o})}),(0,i.jsx)(s.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(c.A,{language:"kotlin",children:d})}),(0,i.jsx)(s.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(c.A,{language:"python",children:m})}),(0,i.jsx)(s.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(c.A,{language:"rust",children:p})}),(0,i.jsx)(s.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(c.A,{language:"ts",children:h})})]})})]})]})}function v(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(j,{...t})}):j(t)}}}]);