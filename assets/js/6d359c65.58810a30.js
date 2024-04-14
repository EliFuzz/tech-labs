"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5926],{31711:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>I,contentTitle:()=>f,default:()=>p,frontMatter:()=>m,metadata:()=>v,toc:()=>L});var n=t(11527),a=t(84135),c=t(40521),l=t(74109),i=t(80035);const s="package main\n\nfunc bruteforceRainTerraces(terraces []int) int {\n\twaterAmount := 0\n\n\tfor terraceIndex := 0; terraceIndex < len(terraces); terraceIndex++ {\n\t\tleftHighestLevel := 0\n\t\tfor leftIndex := terraceIndex - 1; leftIndex >= 0; leftIndex-- {\n\t\t\tleftHighestLevel = max(leftHighestLevel, terraces[leftIndex])\n\t\t}\n\n\t\trightHighestLevel := 0\n\t\tfor rightIndex := terraceIndex + 1; rightIndex < len(terraces); rightIndex++ {\n\t\t\trightHighestLevel = max(rightHighestLevel, terraces[rightIndex])\n\t\t}\n\n\t\tterraceBoundaryLevel := min(leftHighestLevel, rightHighestLevel)\n\t\tif terraceBoundaryLevel > terraces[terraceIndex] {\n\t\t\twaterAmount += terraceBoundaryLevel - terraces[terraceIndex]\n\t\t}\n\t}\n\n\treturn waterAmount\n}\n\nfunc dynamicProgrammingRainTerraces(terraces []int) int {\n\twaterAmount := 0\n\n\tleftMaxLevels := make([]int, len(terraces))\n\trightMaxLevels := make([]int, len(terraces))\n\n\tleftMaxLevels[0] = terraces[0]\n\tfor terraceIndex := 1; terraceIndex < len(terraces); terraceIndex++ {\n\t\tleftMaxLevels[terraceIndex] = max(terraces[terraceIndex], leftMaxLevels[terraceIndex-1])\n\t}\n\n\trightMaxLevels[len(terraces)-1] = terraces[len(terraces)-1]\n\tfor terraceIndex := len(terraces) - 2; terraceIndex >= 0; terraceIndex-- {\n\t\trightMaxLevels[terraceIndex] = max(terraces[terraceIndex], rightMaxLevels[terraceIndex+1])\n\t}\n\n\tfor terraceIndex := 0; terraceIndex < len(terraces); terraceIndex++ {\n\t\tcurrentTerraceBoundary := min(leftMaxLevels[terraceIndex], rightMaxLevels[terraceIndex])\n\n\t\tif currentTerraceBoundary > terraces[terraceIndex] {\n\t\t\twaterAmount += currentTerraceBoundary - terraces[terraceIndex]\n\t\t}\n\t}\n\n\treturn waterAmount\n}\n\nfunc max(a, b int) int {\n\tif a > b {\n\t\treturn a\n\t}\n\treturn b\n}\n\nfunc min(a, b int) int {\n\tif a < b {\n\t\treturn a\n\t}\n\treturn b\n}\n",d="public class RainTerraces {\n\n  public static int bruteforceRainTerraces(int[] terraces) {\n    int waterAmount = 0;\n\n    for (int terraceIndex = 0; terraceIndex < terraces.length; terraceIndex++) {\n      int leftHighestLevel = 0;\n      for (int leftIndex = terraceIndex - 1; leftIndex >= 0; leftIndex--) {\n        leftHighestLevel = Math.max(leftHighestLevel, terraces[leftIndex]);\n      }\n\n      int rightHighestLevel = 0;\n      for (int rightIndex = terraceIndex + 1; rightIndex < terraces.length; rightIndex++) {\n        rightHighestLevel = Math.max(rightHighestLevel, terraces[rightIndex]);\n      }\n\n      int terraceBoundaryLevel = Math.min(leftHighestLevel, rightHighestLevel);\n      if (terraceBoundaryLevel > terraces[terraceIndex]) {\n        waterAmount += terraceBoundaryLevel - terraces[terraceIndex];\n      }\n    }\n\n    return waterAmount;\n  }\n\n  public static int dynamicProgrammingRainTerraces(int[] terraces) {\n    int waterAmount = 0;\n\n    int[] leftMaxLevels = new int[terraces.length];\n    int[] rightMaxLevels = new int[terraces.length];\n\n    leftMaxLevels[0] = terraces[0];\n    for (int terraceIndex = 1; terraceIndex < terraces.length; terraceIndex++) {\n      leftMaxLevels[terraceIndex] = Math.max(terraces[terraceIndex], leftMaxLevels[terraceIndex - 1]);\n    }\n\n    rightMaxLevels[terraces.length - 1] = terraces[terraces.length - 1];\n    for (int terraceIndex = terraces.length - 2; terraceIndex >= 0; terraceIndex--) {\n      rightMaxLevels[terraceIndex] = Math.max(terraces[terraceIndex], rightMaxLevels[terraceIndex + 1]);\n    }\n\n    for (int terraceIndex = 0; terraceIndex < terraces.length; terraceIndex++) {\n      int currentTerraceBoundary = Math.min(leftMaxLevels[terraceIndex], rightMaxLevels[terraceIndex]);\n\n      if (currentTerraceBoundary > terraces[terraceIndex]) {\n        waterAmount += currentTerraceBoundary - terraces[terraceIndex];\n      }\n    }\n\n    return waterAmount;\n  }\n}\n",x="function bruteforceRainTerraces(terraces) {\n  let waterAmount = 0;\n\n  for (\n    let terraceIndex = 0;\n    terraceIndex < terraces.length;\n    terraceIndex += 1\n  ) {\n    let leftHighestLevel = 0;\n    for (let leftIndex = terraceIndex - 1; leftIndex >= 0; leftIndex -= 1) {\n      leftHighestLevel = Math.max(leftHighestLevel, terraces[leftIndex]);\n    }\n\n    let rightHighestLevel = 0;\n    for (\n      let rightIndex = terraceIndex + 1;\n      rightIndex < terraces.length;\n      rightIndex += 1\n    ) {\n      rightHighestLevel = Math.max(rightHighestLevel, terraces[rightIndex]);\n    }\n\n    const terraceBoundaryLevel = Math.min(leftHighestLevel, rightHighestLevel);\n    if (terraceBoundaryLevel > terraces[terraceIndex]) {\n      waterAmount += terraceBoundaryLevel - terraces[terraceIndex];\n    }\n  }\n\n  return waterAmount;\n}\n\nfunction dynamicProgrammingRainTerraces(terraces) {\n  let waterAmount = 0;\n\n  const leftMaxLevels = new Array(terraces.length).fill(0);\n  const rightMaxLevels = new Array(terraces.length).fill(0);\n\n  [leftMaxLevels[0]] = terraces;\n  for (\n    let terraceIndex = 1;\n    terraceIndex < terraces.length;\n    terraceIndex += 1\n  ) {\n    leftMaxLevels[terraceIndex] = Math.max(\n      terraces[terraceIndex],\n      leftMaxLevels[terraceIndex - 1],\n    );\n  }\n\n  rightMaxLevels[terraces.length - 1] = terraces[terraces.length - 1];\n  for (\n    let terraceIndex = terraces.length - 2;\n    terraceIndex >= 0;\n    terraceIndex -= 1\n  ) {\n    rightMaxLevels[terraceIndex] = Math.max(\n      terraces[terraceIndex],\n      rightMaxLevels[terraceIndex + 1],\n    );\n  }\n\n  for (\n    let terraceIndex = 0;\n    terraceIndex < terraces.length;\n    terraceIndex += 1\n  ) {\n    const currentTerraceBoundary = Math.min(\n      leftMaxLevels[terraceIndex],\n      rightMaxLevels[terraceIndex],\n    );\n\n    if (currentTerraceBoundary > terraces[terraceIndex]) {\n      waterAmount += currentTerraceBoundary - terraces[terraceIndex];\n    }\n  }\n\n  return waterAmount;\n}\n",h="fun bruteforceRainTerraces(terraces: IntArray): Int {\n    var waterAmount = 0\n\n    for (terraceIndex in terraces.indices) {\n        var leftHighestLevel = 0\n        for (leftIndex in terraceIndex - 1 downTo 0) {\n            leftHighestLevel = maxOf(leftHighestLevel, terraces[leftIndex])\n        }\n\n        var rightHighestLevel = 0\n        for (rightIndex in terraceIndex + 1 until terraces.size) {\n            rightHighestLevel = maxOf(rightHighestLevel, terraces[rightIndex])\n        }\n\n        val terraceBoundaryLevel = minOf(leftHighestLevel, rightHighestLevel)\n        if (terraceBoundaryLevel > terraces[terraceIndex]) {\n            waterAmount += terraceBoundaryLevel - terraces[terraceIndex]\n        }\n    }\n\n    return waterAmount\n}\n\nfun dynamicProgrammingRainTerraces(terraces: IntArray): Int {\n    var waterAmount = 0\n\n    val leftMaxLevels = IntArray(terraces.size) { 0 }\n    val rightMaxLevels = IntArray(terraces.size) { 0 }\n\n    leftMaxLevels[0] = terraces[0]\n    for (terraceIndex in 1 until terraces.size) {\n        leftMaxLevels[terraceIndex] = maxOf(terraces[terraceIndex], leftMaxLevels[terraceIndex - 1])\n    }\n\n    rightMaxLevels[terraces.size - 1] = terraces[terraces.size - 1]\n    for (terraceIndex in terraces.size - 2 downTo 0) {\n        rightMaxLevels[terraceIndex] = maxOf(terraces[terraceIndex], rightMaxLevels[terraceIndex + 1])\n    }\n\n    for (terraceIndex in terraces.indices) {\n        val currentTerraceBoundary = minOf(leftMaxLevels[terraceIndex], rightMaxLevels[terraceIndex])\n\n        if (currentTerraceBoundary > terraces[terraceIndex]) {\n            waterAmount += currentTerraceBoundary - terraces[terraceIndex]\n        }\n    }\n\n    return waterAmount\n}\n",o="def bruteforceRainTerraces(terraces):\n    waterAmount = 0\n\n    for terraceIndex in range(len(terraces)):\n        leftHighestLevel = 0\n        for leftIndex in range(terraceIndex - 1, -1, -1):\n            leftHighestLevel = max(leftHighestLevel, terraces[leftIndex])\n\n        rightHighestLevel = 0\n        for rightIndex in range(terraceIndex + 1, len(terraces)):\n            rightHighestLevel = max(rightHighestLevel, terraces[rightIndex])\n\n        terraceBoundaryLevel = min(leftHighestLevel, rightHighestLevel)\n        if terraceBoundaryLevel > terraces[terraceIndex]:\n            waterAmount += terraceBoundaryLevel - terraces[terraceIndex]\n\n    return waterAmount\n\n\ndef dynamicProgrammingRainTerraces(terraces):\n    waterAmount = 0\n\n    leftMaxLevels = [0] * len(terraces)\n    rightMaxLevels = [0] * len(terraces)\n\n    leftMaxLevels[0] = terraces[0]\n    for terraceIndex in range(1, len(terraces)):\n        leftMaxLevels[terraceIndex] = max(terraces[terraceIndex], leftMaxLevels[terraceIndex - 1])\n\n    rightMaxLevels[len(terraces) - 1] = terraces[len(terraces) - 1]\n    for terraceIndex in range(len(terraces) - 2, -1, -1):\n        rightMaxLevels[terraceIndex] = max(terraces[terraceIndex], rightMaxLevels[terraceIndex + 1])\n\n    for terraceIndex in range(len(terraces)):\n        currentTerraceBoundary = min(leftMaxLevels[terraceIndex], rightMaxLevels[terraceIndex])\n\n        if currentTerraceBoundary > terraces[terraceIndex]:\n            waterAmount += currentTerraceBoundary - terraces[terraceIndex]\n\n    return waterAmount\n",u="fn bruteforce_rain_terraces(terraces: &[i32]) -> i32 {\n    let mut water_amount = 0;\n\n    for terrace_index in 0..terraces.len() {\n        let mut left_highest_level = 0;\n        for left_index in (0..terrace_index).rev() {\n            left_highest_level = left_highest_level.max(terraces[left_index]);\n        }\n\n        let mut right_highest_level = 0;\n        for right_index in (terrace_index + 1)..terraces.len() {\n            right_highest_level = right_highest_level.max(terraces[right_index]);\n        }\n\n        let terrace_boundary_level = left_highest_level.min(right_highest_level);\n        if terrace_boundary_level > terraces[terrace_index] {\n            water_amount += terrace_boundary_level - terraces[terrace_index];\n        }\n    }\n\n    water_amount\n}\n\nfn dynamic_programming_rain_terraces(terraces: &[i32]) -> i32 {\n    let mut water_amount = 0;\n\n    let mut left_max_levels = vec![0; terraces.len()];\n    let mut right_max_levels = vec![0; terraces.len()];\n\n    left_max_levels[0] = terraces[0];\n    for terrace_index in 1..terraces.len() {\n        left_max_levels[terrace_index] =\n            terraces[terrace_index].max(left_max_levels[terrace_index - 1]);\n    }\n\n    right_max_levels[terraces.len() - 1] = terraces[terraces.len() - 1];\n    for terrace_index in (0..terraces.len() - 1).rev() {\n        right_max_levels[terrace_index] =\n            terraces[terrace_index].max(right_max_levels[terrace_index + 1]);\n    }\n\n    for terrace_index in 0..terraces.len() {\n        let current_terrace_boundary = left_max_levels[terrace_index]\n            .min(right_max_levels[terrace_index]);\n\n        if current_terrace_boundary > terraces[terrace_index] {\n            water_amount += current_terrace_boundary - terraces[terrace_index];\n        }\n    }\n\n    water_amount\n}\n",g="function bruteforceRainTerraces(terraces: number[]): number {\n  let waterAmount = 0;\n\n  for (\n    let terraceIndex = 0;\n    terraceIndex < terraces.length;\n    terraceIndex += 1\n  ) {\n    let leftHighestLevel = 0;\n    for (let leftIndex = terraceIndex - 1; leftIndex >= 0; leftIndex -= 1) {\n      leftHighestLevel = Math.max(leftHighestLevel, terraces[leftIndex]);\n    }\n\n    let rightHighestLevel = 0;\n    for (\n      let rightIndex = terraceIndex + 1;\n      rightIndex < terraces.length;\n      rightIndex += 1\n    ) {\n      rightHighestLevel = Math.max(rightHighestLevel, terraces[rightIndex]);\n    }\n\n    const terraceBoundaryLevel = Math.min(leftHighestLevel, rightHighestLevel);\n    if (terraceBoundaryLevel > terraces[terraceIndex]) {\n      waterAmount += terraceBoundaryLevel - terraces[terraceIndex];\n    }\n  }\n\n  return waterAmount;\n}\n\nfunction dynamicProgrammingRainTerraces(terraces: number[]): number {\n  let waterAmount = 0;\n\n  const leftMaxLevels: number[] = new Array(terraces.length).fill(0);\n  const rightMaxLevels: number[] = new Array(terraces.length).fill(0);\n\n  [leftMaxLevels[0]] = terraces;\n  for (\n    let terraceIndex = 1;\n    terraceIndex < terraces.length;\n    terraceIndex += 1\n  ) {\n    leftMaxLevels[terraceIndex] = Math.max(\n      terraces[terraceIndex],\n      leftMaxLevels[terraceIndex - 1],\n    );\n  }\n\n  rightMaxLevels[terraces.length - 1] = terraces[terraces.length - 1];\n  for (\n    let terraceIndex = terraces.length - 2;\n    terraceIndex >= 0;\n    terraceIndex -= 1\n  ) {\n    rightMaxLevels[terraceIndex] = Math.max(\n      terraces[terraceIndex],\n      rightMaxLevels[terraceIndex + 1],\n    );\n  }\n\n  for (\n    let terraceIndex = 0;\n    terraceIndex < terraces.length;\n    terraceIndex += 1\n  ) {\n    const currentTerraceBoundary = Math.min(\n      leftMaxLevels[terraceIndex],\n      rightMaxLevels[terraceIndex],\n    );\n\n    if (currentTerraceBoundary > terraces[terraceIndex]) {\n      waterAmount += currentTerraceBoundary - terraces[terraceIndex];\n    }\n  }\n\n  return waterAmount;\n}\n",m={title:"Rain Terraces",description:"Rain Terraces",hide_table_of_contents:!0},f=void 0,v={id:"education/computer-science/algorithms/algo/rain-terraces",title:"Rain Terraces",description:"Rain Terraces",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/rain-terraces.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/rain-terraces",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/rain-terraces",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/rain-terraces.mdx",tags:[],version:"current",frontMatter:{title:"Rain Terraces",description:"Rain Terraces",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Rail Fence Cipher",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/rail-fence-cipher"},next:{title:"Recursive Staircase",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/recursive-staircase"}},I={},L=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function _(e){const r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(l.Z,{value:"definition",label:"Definition",children:(0,n.jsx)(r.p,{children:"The Rain Terraces Algorithm is a technique used to calculate the total volume of water that can be trapped between terraces formed by an elevation map"})}),(0,n.jsx)(l.Z,{value:"how",label:"Explanation",children:(0,n.jsx)(r.p,{children:"Iterate through the elevation map and calculating the amount of water that can be trapped between the terraces formed by the varying heights. It uses two pointers approach to keep track of the maximum height seen so far from the left and right side for each element. The trapped water for each element is then calculated based on the difference between the minimum of the maximum heights on both sides and the height of the current element"})}),(0,n.jsx)(l.Z,{value:"guidance",label:"Guidance",children:(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Initialize variables: ",(0,n.jsx)(r.code,{children:"left_max"}),", ",(0,n.jsx)(r.code,{children:"right_max"}),", and ",(0,n.jsx)(r.code,{children:"water_volume"})," to ",(0,n.jsx)(r.code,{children:"0"})]}),"\n",(0,n.jsxs)(r.li,{children:["Iterate through each element in the elevation map","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["for each element, update ",(0,n.jsx)(r.code,{children:"left_max = max(left_max, elevation_map[i])"})]}),"\n",(0,n.jsx)(r.li,{children:"iterate from the end of the elevation map to the current element and update right_max similarly"}),"\n",(0,n.jsxs)(r.li,{children:["calculate the trapped water for the current element: ",(0,n.jsx)(r.code,{children:"trapped_water = min(left_max, right_max) - elevation_map[i]"})]}),"\n",(0,n.jsx)(r.li,{children:"add the calculated trapped water to the total water volume"}),"\n",(0,n.jsx)(r.li,{children:"repeat steps until all elements in the elevation map are processed"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.li,{children:"Return the total water volume as the result"}),"\n"]})}),(0,n.jsx)(l.Z,{value:"tips",label:"Tips",children:(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"keep track of the maximum height seen from both sides for each element efficiently to optimize the algorithm's performance"}),"\n",(0,n.jsx)(r.li,{children:"handle edge cases such as empty elevation maps or maps with fewer than three elements appropriately"}),"\n"]})})]}),"\n",(0,n.jsx)(r.h2,{id:"practice",children:"Practice"}),"\n",(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(l.Z,{value:"practice",label:"Practice",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"rainTerraces(elevation_map):\n  left_max = 0\n  right_max = 0\n  water_volume = 0\n\n  for i from 0 to length(elevation_map) - 1:\n    left_max = max(left_max, elevation_map[i])\n\n  for i from length(elevation_map) - 1 to 0:\n    right_max = max(right_max, elevation_map[i])\n\n  for i from 0 to length(elevation_map) - 1:\n    water_volume += min(left_max, right_max) - elevation_map[i]\n    left_max = max(left_max, elevation_map[i])\n\n  return water_volume\n"})})}),(0,n.jsx)(l.Z,{value:"solution",label:"Solution",children:(0,n.jsxs)(c.Z,{queryString:"code",children:[(0,n.jsx)(l.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,n.jsx)(i.Z,{language:"go",children:s})}),(0,n.jsx)(l.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,n.jsx)(i.Z,{language:"java",children:d})}),(0,n.jsx)(l.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,n.jsx)(i.Z,{language:"js",children:x})}),(0,n.jsx)(l.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,n.jsx)(i.Z,{language:"kotlin",children:h})}),(0,n.jsx)(l.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,n.jsx)(i.Z,{language:"python",children:o})}),(0,n.jsx)(l.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,n.jsx)(i.Z,{language:"rust",children:u})}),(0,n.jsx)(l.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,n.jsx)(i.Z,{language:"ts",children:g})})]})})]})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(_,{...e})}):_(e)}}}]);