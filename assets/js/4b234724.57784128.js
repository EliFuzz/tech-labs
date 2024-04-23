"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6386],{2498:(n,o,t)=>{t.r(o),t.d(o,{assets:()=>_,contentTitle:()=>g,default:()=>x,frontMatter:()=>d,metadata:()=>f,toc:()=>O});var e=t(11527),i=t(84135),s=t(40521),c=t(74109),m=t(80035);const r="package main\n\nfunc combineWithoutRepetitions(comboOptions []int, comboLength int) [][]int {\n\tif comboLength == 1 {\n\t\tresult := make([][]int, len(comboOptions))\n\t\tfor i, v := range comboOptions {\n\t\t\tresult[i] = []int{v}\n\t\t}\n\t\treturn result\n\t}\n\n\tvar combos [][]int\n\n\tfor optionIndex, currentOption := range comboOptions {\n\t\tsmallerCombos := combineWithoutRepetitions(comboOptions[optionIndex+1:], comboLength-1)\n\n\t\tfor _, smallerCombo := range smallerCombos {\n\t\t\tcombos = append(combos, append([]int{currentOption}, smallerCombo...))\n\t\t}\n\t}\n\n\treturn combos\n}\n\nfunc combineWithRepetitions(comboOptions []int, comboLength int) [][]int {\n\tif comboLength == 1 {\n\t\tresult := make([][]int, len(comboOptions))\n\t\tfor i, v := range comboOptions {\n\t\t\tresult[i] = []int{v}\n\t\t}\n\t\treturn result\n\t}\n\n\tvar combos [][]int\n\n\tfor optionIndex, currentOption := range comboOptions {\n\t\tsmallerCombos := combineWithRepetitions(comboOptions[optionIndex:], comboLength-1)\n\n\t\tfor _, smallerCombo := range smallerCombos {\n\t\t\tcombos = append(combos, append([]int{currentOption}, smallerCombo...))\n\t\t}\n\t}\n\n\treturn combos\n}\n",l="import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n\n  public static List<List<Integer>> combineWithoutRepetitions(List<Integer> comboOptions, int comboLength) {\n    List<List<Integer>> combos = new ArrayList<>();\n    if (comboLength == 1) {\n      for (Integer comboOption : comboOptions) {\n        List<Integer> list = new ArrayList<>();\n        list.add(comboOption);\n        combos.add(list);\n      }\n    } else {\n      for (int i = 0; i <= comboOptions.size() - comboLength; i++) {\n        int currentOption = comboOptions.get(i);\n        List<List<Integer>> smallerCombos = combineWithoutRepetitions(comboOptions.subList(i + 1, comboOptions.size()), comboLength - 1);\n        for (List<Integer> smallerCombo : smallerCombos) {\n          List<Integer> newList = new ArrayList<>();\n          newList.add(currentOption);\n          newList.addAll(smallerCombo);\n          combos.add(newList);\n        }\n      }\n    }\n    return combos;\n  }\n\n  public static List<List<Integer>> combineWithRepetitions(List<Integer> comboOptions, int comboLength) {\n    List<List<Integer>> combos = new ArrayList<>();\n    if (comboLength == 1) {\n      for (Integer comboOption : comboOptions) {\n        List<Integer> list = new ArrayList<>();\n        list.add(comboOption);\n        combos.add(list);\n      }\n    } else {\n      for (int i = 0; i < comboOptions.size(); i++) {\n        int currentOption = comboOptions.get(i);\n        List<List<Integer>> smallerCombos = combineWithRepetitions(comboOptions.subList(i, comboOptions.size()), comboLength - 1);\n        for (List<Integer> smallerCombo : smallerCombos) {\n          List<Integer> newList = new ArrayList<>();\n          newList.add(currentOption);\n          newList.addAll(smallerCombo);\n          combos.add(newList);\n        }\n      }\n    }\n    return combos;\n  }\n}\n",a="function combineWithoutRepetitions(comboOptions, comboLength) {\n  if (comboLength === 1) {\n    return comboOptions.map((comboOption) => [comboOption]);\n  }\n\n  const combos = [];\n\n  comboOptions.forEach((currentOption, optionIndex) => {\n    const smallerCombos = combineWithoutRepetitions(\n      comboOptions.slice(optionIndex + 1),\n      comboLength - 1,\n    );\n\n    smallerCombos.forEach((smallerCombo) => {\n      combos.push([currentOption].concat(smallerCombo));\n    });\n  });\n\n  return combos;\n}\n\nfunction combineWithRepetitions(comboOptions, comboLength) {\n  if (comboLength === 1) {\n    return comboOptions.map((comboOption) => [comboOption]);\n  }\n\n  const combos = [];\n\n  comboOptions.forEach((currentOption, optionIndex) => {\n    const smallerCombos = combineWithRepetitions(\n      comboOptions.slice(optionIndex),\n      comboLength - 1,\n    );\n\n    smallerCombos.forEach((smallerCombo) => {\n      combos.push([currentOption].concat(smallerCombo));\n    });\n  });\n\n  return combos;\n}\n",b="fun combineWithoutRepetitions(comboOptions: List<Int>, comboLength: Int): List<List<Int>> {\n    val combos = mutableListOf<List<Int>>()\n    if (comboLength == 1) {\n        for (comboOption in comboOptions) {\n            combos.add(listOf(comboOption))\n        }\n    } else {\n        for (i in 0..comboOptions.size - comboLength) {\n            val currentOption = comboOptions[i]\n            val smallerCombos = combineWithoutRepetitions(comboOptions.subList(i + 1, comboOptions.size), comboLength - 1)\n            for (smallerCombo in smallerCombos) {\n                combos.add(listOf(currentOption) + smallerCombo)\n            }\n        }\n    }\n    return combos\n}\n\nfun combineWithRepetitions(comboOptions: List<Int>, comboLength: Int): List<List<Int>> {\n    val combos = mutableListOf<List<Int>>()\n    if (comboLength == 1) {\n        for (comboOption in comboOptions) {\n            combos.add(listOf(comboOption))\n        }\n    } else {\n        for (i in comboOptions.indices) {\n            val currentOption = comboOptions[i]\n            val smallerCombos = combineWithRepetitions(comboOptions.subList(i, comboOptions.size), comboLength - 1)\n            for (smallerCombo in smallerCombos) {\n                combos.add(listOf(currentOption) + smallerCombo)\n            }\n        }\n    }\n    return combos\n}\n",p="def combine_without_repetitions(combo_options, combo_length):\n    combos = []\n    if combo_length == 1:\n        for combo_option in combo_options:\n            combos.append([combo_option])\n    else:\n        for i in range(len(combo_options) - combo_length + 1):\n            current_option = combo_options[i]\n            smaller_combos = combine_without_repetitions(combo_options[i + 1:], combo_length - 1)\n            for smaller_combo in smaller_combos:\n                combos.append([current_option] + smaller_combo)\n    return combos\n\n\ndef combine_with_repetitions(combo_options, combo_length):\n    combos = []\n    if combo_length == 1:\n        for combo_option in combo_options:\n            combos.append([combo_option])\n    else:\n        for i in range(len(combo_options)):\n            current_option = combo_options[i]\n            smaller_combos = combine_with_repetitions(combo_options[i:], combo_length - 1)\n            for smaller_combo in smaller_combos:\n                combos.append([current_option] + smaller_combo)\n    return combos\n",u="fn combine_without_repetitions(combo_options: &[i32], combo_length: usize) -> Vec<Vec<i32>> {\n    let mut combos = Vec::new();\n    if combo_length == 1 {\n        for &combo_option in combo_options {\n            combos.push(vec![combo_option]);\n        }\n    } else {\n        for i in 0..=combo_options.len() - combo_length {\n            let current_option = combo_options[i];\n            let smaller_combos = combine_without_repetitions(&combo_options[i + 1..], combo_length - 1);\n            for smaller_combo in smaller_combos {\n                let mut new_combo = vec![current_option];\n                new_combo.extend_from_slice(&smaller_combo);\n                combos.push(new_combo);\n            }\n        }\n    }\n    combos\n}\n\nfn combine_with_repetitions(combo_options: &[i32], combo_length: usize) -> Vec<Vec<i32>> {\n    let mut combos = Vec::new();\n    if combo_length == 1 {\n        for &combo_option in combo_options {\n            combos.push(vec![combo_option]);\n        }\n    } else {\n        for i in 0..combo_options.len() {\n            let current_option = combo_options[i];\n            let smaller_combos = combine_with_repetitions(&combo_options[i..], combo_length - 1);\n            for smaller_combo in smaller_combos {\n                let mut new_combo = vec![current_option];\n                new_combo.extend_from_slice(&smaller_combo);\n                combos.push(new_combo);\n            }\n        }\n    }\n    combos\n}\n",h="function combineWithoutRepetitions(\n  comboOptions: number[],\n  comboLength: number,\n): number[][] {\n  const combos: number[][] = [];\n  if (comboLength === 1) {\n    for (const comboOption of comboOptions) {\n      combos.push([comboOption]);\n    }\n  } else {\n    for (let i = 0; i <= comboOptions.length - comboLength; i++) {\n      const currentOption = comboOptions[i];\n      const smallerCombos = combineWithoutRepetitions(\n        comboOptions.slice(i + 1),\n        comboLength - 1,\n      );\n      for (const smallerCombo of smallerCombos) {\n        combos.push([currentOption, ...smallerCombo]);\n      }\n    }\n  }\n  return combos;\n}\n\nfunction combineWithRepetitions(\n  comboOptions: number[],\n  comboLength: number,\n): number[][] {\n  const combos: number[][] = [];\n  if (comboLength === 1) {\n    for (const comboOption of comboOptions) {\n      combos.push([comboOption]);\n    }\n  } else {\n    for (let i = 0; i < comboOptions.length; i++) {\n      const currentOption = comboOptions[i];\n      const smallerCombos = combineWithRepetitions(\n        comboOptions.slice(i),\n        comboLength - 1,\n      );\n      for (const smallerCombo of smallerCombos) {\n        combos.push([currentOption, ...smallerCombo]);\n      }\n    }\n  }\n  return combos;\n}\n",d={title:"Combinations",description:"Combinations",hide_table_of_contents:!0},g=void 0,f={id:"education/computer-science/algorithms/algo/combinations",title:"Combinations",description:"Combinations",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/combinations.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/combinations",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/combinations",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/combinations.mdx",tags:[],version:"current",frontMatter:{title:"Combinations",description:"Combinations",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Combination Sum",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/combination-sum"},next:{title:"Complex Number",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/complex-number"}},_={},O=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function L(n){const o={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,e.jsxs)(s.Z,{queryString:"primary",children:[(0,e.jsx)(c.Z,{value:"definition",label:"Definition",children:(0,e.jsx)(o.p,{children:"The Combinations Algorithm generates all possible combinations of elements from a given set without considering the order of elements"})}),(0,e.jsx)(c.Z,{value:"how",label:"Explanation",children:(0,e.jsx)(o.p,{children:"The algorithm accepts a set of elements and a desired combination size. It employs recursion to systematically construct combinations by selecting elements iteratively. At each iteration, it evaluates whether to include the current element. This process persists until the combination achieves the target size, upon which it is appended to the result set. This cycle continues for all elements in the set until all possible combinations are exhausted"})}),(0,e.jsx)(c.Z,{value:"guidance",label:"Guidance",children:(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsx)(o.li,{children:"Start with an empty combination and an empty result set"}),"\n",(0,e.jsxs)(o.li,{children:["Iterate through each element in the given set","\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:["for each element, decide whether to include it in the current combination or not","\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsx)(o.li,{children:"if including the element, add it to the current combination and recursively call the algorithm with a reduced target size and remaining elements"}),"\n",(0,e.jsx)(o.li,{children:"if not including the element, skip it and recursively call the algorithm with the same target size and remaining elements"}),"\n",(0,e.jsx)(o.li,{children:"repeat steps until the target size is reached"}),"\n",(0,e.jsx)(o.li,{children:"add the generated combination to the result set"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(o.li,{children:"Repeat for all elements in the set"}),"\n",(0,e.jsx)(o.li,{children:"Return the result set containing all possible combinations"}),"\n"]})}),(0,e.jsx)(c.Z,{value:"tips",label:"Tips",children:(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsx)(o.li,{children:"utilize recursion to simplify the implementation"}),"\n",(0,e.jsx)(o.li,{children:"keep track of the current combination and remaining elements during recursion"}),"\n",(0,e.jsx)(o.li,{children:"use backtracking to efficiently explore all possible combinations"}),"\n"]})})]}),"\n",(0,e.jsx)(o.h2,{id:"practice",children:"Practice"}),"\n",(0,e.jsxs)(s.Z,{queryString:"primary",children:[(0,e.jsx)(c.Z,{value:"practice",label:"Practice",children:(0,e.jsx)(o.pre,{children:(0,e.jsx)(o.code,{className:"language-python",children:"generateCombinations(set, targetSize, currentCombination, index, results)\n  if size of currentCombination is equal to targetSize\n    add currentCombination to results\n    return\n  end if\n\n  if index is equal to size of set\n    return\n  end if\n\n  // Include the current element\n  add set[index] to currentCombination\n  generateCombinations(set, targetSize, currentCombination, index + 1, results)\n\n  // Exclude the current element\n  remove set[index] from currentCombination\n  generateCombinations(set, targetSize, currentCombination, index + 1, results)\n\nend function\n\n// Example usage:\nresults = []\nset = [1, 2, 3, 4]\ntargetSize = 2\ngenerateCombinations(set, targetSize, [], 0, results)\nprint results\n"})})}),(0,e.jsx)(c.Z,{value:"solution",label:"Solution",children:(0,e.jsxs)(s.Z,{queryString:"code",children:[(0,e.jsx)(c.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,e.jsx)(m.Z,{language:"go",children:r})}),(0,e.jsx)(c.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,e.jsx)(m.Z,{language:"java",children:l})}),(0,e.jsx)(c.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,e.jsx)(m.Z,{language:"js",children:a})}),(0,e.jsx)(c.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,e.jsx)(m.Z,{language:"kotlin",children:b})}),(0,e.jsx)(c.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,e.jsx)(m.Z,{language:"python",children:p})}),(0,e.jsx)(c.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,e.jsx)(m.Z,{language:"rust",children:u})}),(0,e.jsx)(c.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,e.jsx)(m.Z,{language:"ts",children:h})})]})})]})]})}function x(n={}){const{wrapper:o}={...(0,i.a)(),...n.components};return o?(0,e.jsx)(o,{...n,children:(0,e.jsx)(L,{...n})}):L(n)}}}]);