"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4134],{31983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>g,default:()=>v,frontMatter:()=>f,metadata:()=>x,toc:()=>y});var r=n(11527),a=n(88672),s=n(29140),i=n(52360),c=n(52296);const l="package main\n\nfunc cartesianProduct(arrays [][]interface{}) [][]interface{} {\n    if len(arrays) == 0 {\n        return [][]interface{}{}\n    }\n\n    result := [][]interface{}{{}}\n\n    for _, array := range arrays {\n        var temp [][]interface{}\n        for _, item := range array {\n            for _, res := range result {\n                t := append(res[:len(res):len(res)], item)\n                temp = append(temp, t)\n            }\n        }\n        result = temp\n    }\n\n    return result\n}\n",o="import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n\n  public static List<List<Object>> cartesianProduct(List<List<Object>> arrays) {\n    List<List<Object>> result = new ArrayList<>();\n    result.add(new ArrayList<>());\n\n    for (List<Object> array : arrays) {\n      List<List<Object>> temp = new ArrayList<>();\n      for (Object item : array) {\n        for (List<Object> res : result) {\n          List<Object> t = new ArrayList<>(res);\n          t.add(item);\n          temp.add(t);\n        }\n      }\n      result = temp;\n    }\n\n    return result;\n  }\n}\n",u="function cartesianProduct(arrays) {\n  return arrays.reduce(\n    (acc, array) => {\n      return acc.flatMap((res) => {\n        return array.map((item) => {\n          return res.concat(item);\n        });\n      });\n    },\n    [[]],\n  );\n}\n",d="fun cartesianProduct(arrays: List<List<Any>>): List<List<Any>> {\n    var result = listOf(emptyList<Any>())\n\n    for (array in arrays) {\n        val temp = mutableListOf<List<Any>>()\n        for (item in array) {\n            for (res in result) {\n                val t = res.toMutableList()\n                t.add(item)\n                temp.add(t)\n            }\n        }\n        result = temp\n    }\n\n    return result\n}\n",m="def cartesian_product(arrays):\n    result = [[]]\n    for array in arrays:\n        result = [x + [y] for x in result for y in array]\n    return result\n",h="fn cartesian_product(arrays: &[Vec<&str>]) -> Vec<Vec<&str>> {\n    let mut result = vec![vec![]];\n    for array in arrays {\n        let mut temp = vec![];\n        for item in array {\n            for res in &result {\n                let mut t = res.clone();\n                t.push(item);\n                temp.push(t);\n            }\n        }\n        result = temp;\n    }\n    result\n}\n",p="function cartesianProduct<T>(arrays: T[][]): T[][] {\n  return arrays.reduce(\n    (acc, array) => {\n      return acc.flatMap((res) => {\n        return array.map((item) => {\n          return [...res, item];\n        });\n      });\n    },\n    [[] as T[]],\n  );\n}\n",f={title:"Cartesian Product",description:"Cartesian Product",hide_table_of_contents:!0},g=void 0,x={id:"education/computer-science/algorithms/algo/cartesian-product",title:"Cartesian Product",description:"Cartesian Product",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/cartesian-product.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/cartesian-product",permalink:"/docs/education/computer-science/algorithms/algo/cartesian-product",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/cartesian-product.mdx",tags:[],version:"current",frontMatter:{title:"Cartesian Product",description:"Cartesian Product",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Caesar Cipher",permalink:"/docs/education/computer-science/algorithms/algo/caesar-cipher"},next:{title:"Combination Sum",permalink:"/docs/education/computer-science/algorithms/algo/combination-sum"}},j={},y=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function b(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{value:"definition",label:"Definition",children:(0,r.jsx)(t.p,{children:"The Cartesian Product Algorithm is a computational method used to find the Cartesian product of two or more sets. It generates all possible combinations of elements from these sets, creating a new set of tuples"})}),(0,r.jsx)(i.Z,{value:"how",label:"Explanation"}),(0,r.jsx)(i.Z,{value:"guidance",label:"Guidance",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Iterate through each element of the first set"}),"\n",(0,r.jsx)(t.li,{children:"For each element, iterate through each element of the second set"}),"\n",(0,r.jsx)(t.li,{children:"Combine the elements into tuples"}),"\n",(0,r.jsx)(t.li,{children:"If there are more sets, repeat steps 2-3 for each subsequent set"}),"\n",(0,r.jsx)(t.li,{children:"Store the tuples in the Cartesian product set"}),"\n"]})}),(0,r.jsx)(i.Z,{value:"tips",label:"Tips",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"ensure efficient memory usage, especially for large sets, as the Cartesian product can grow exponentially"}),"\n",(0,r.jsx)(t.li,{children:"optimize the algorithm by avoiding unnecessary iterations or redundant computations"}),"\n",(0,r.jsx)(t.li,{children:"use appropriate data structures to store intermediate results and the final Cartesian product set efficiently"}),"\n"]})})]}),"\n",(0,r.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{value:"practice",label:"Practice",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"cartesianProduct(sets):\n  // Initialize an empty list to store the Cartesian product\n  cartesianSet = []\n\n  // Initialize a list to keep track of the current index of each set\n  currentIndex = [0] * length(sets)\n\n  // Start with the first element of the first set\n  generateCartesianProduct(sets, cartesianSet, currentIndex, 0)\n\n  return cartesianSet\n\ngenerateCartesianProduct(sets, cartesianSet, currentIndex, setIndex):\n  // Base case: if all sets have been traversed, add the current combination to the Cartesian product\n  if setIndex == length(sets):\n    cartesianSet.append(getCurrentCombination(sets, currentIndex))\n    return\n\n  // Iterate over each element in the current set\n  for i from 0 to length(sets[setIndex]) - 1:\n    // Update the current index for the current set\n    currentIndex[setIndex] = i\n\n    // Recursively generate combinations for the next set\n    generateCartesianProduct(sets, cartesianSet, currentIndex, setIndex + 1)\n\ngetCurrentCombination(sets, currentIndex):\n  // Initialize an empty list to store the current combination\n  combination = []\n\n  // Iterate over each set and append the element at the current index to the combination\n  for i from 0 to length(sets) - 1:\n    combination.append(sets[i][currentIndex[i]])\n\n  return combination\n"})})}),(0,r.jsx)(i.Z,{value:"solution",label:"Solution",children:(0,r.jsxs)(s.Z,{queryString:"code",children:[(0,r.jsx)(i.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,r.jsx)(c.Z,{language:"go",children:l})}),(0,r.jsx)(i.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,r.jsx)(c.Z,{language:"java",children:o})}),(0,r.jsx)(i.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,r.jsx)(c.Z,{language:"js",children:u})}),(0,r.jsx)(i.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,r.jsx)(c.Z,{language:"kotlin",children:d})}),(0,r.jsx)(i.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,r.jsx)(c.Z,{language:"python",children:m})}),(0,r.jsx)(i.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,r.jsx)(c.Z,{language:"rust",children:h})}),(0,r.jsx)(i.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,r.jsx)(c.Z,{language:"ts",children:p})})]})})]})]})}function v(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}}}]);