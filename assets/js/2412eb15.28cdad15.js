"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1202],{32431:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>f,contentTitle:()=>g,default:()=>I,frontMatter:()=>h,metadata:()=>b,toc:()=>_});var s=t(11527),r=t(88672),u=t(29140),l=t(52360),o=t(52296);const m='package main\n\nimport (\n\t"math"\n)\n\nfunc backtrackingJumpGame(numbers []int, startIndex int, currentJumps []int) bool {\n\tif startIndex == len(numbers)-1 {\n\t\treturn true\n\t}\n\n\tmaxJumpLength := int(math.Min(float64(numbers[startIndex]), float64(len(numbers)-1-startIndex)))\n\n\tfor jumpLength := maxJumpLength; jumpLength > 0; jumpLength-- {\n\t\tnextIndex := startIndex + jumpLength\n\t\tcurrentJumps = append(currentJumps, nextIndex)\n\n\t\tisJumpSuccessful := backtrackingJumpGame(numbers, nextIndex, currentJumps)\n\n\t\tif isJumpSuccessful {\n\t\t\treturn true\n\t\t}\n\n\t\tcurrentJumps = currentJumps[:len(currentJumps)-1]\n\t}\n\n\treturn false\n}\n\nfunc dpBottomUpJumpGame(numbers []int) bool {\n\tcellsGoodness := make([]bool, len(numbers))\n\tcellsGoodness[len(cellsGoodness)-1] = true\n\n\tfor cellIndex := len(numbers) - 2; cellIndex >= 0; cellIndex-- {\n\t\tmaxJumpLength := int(math.Min(float64(numbers[cellIndex]), float64(len(numbers)-1-cellIndex)))\n\n\t\tfor jumpLength := maxJumpLength; jumpLength > 0; jumpLength-- {\n\t\t\tnextIndex := cellIndex + jumpLength\n\t\t\tif cellsGoodness[nextIndex] {\n\t\t\t\tcellsGoodness[cellIndex] = true\n\t\t\t\tbreak\n\t\t\t}\n\t\t}\n\t}\n\n\treturn cellsGoodness[0]\n}\n\nfunc dpTopDownJumpGame(numbers []int, startIndex int, currentJumps []int, cellsGoodness []bool) bool {\n\tif startIndex == len(numbers)-1 {\n\t\treturn true\n\t}\n\n\tcurrentCellsGoodness := make([]bool, len(cellsGoodness))\n\tcopy(currentCellsGoodness, cellsGoodness)\n\tif len(currentCellsGoodness) == 0 {\n\t\tfor range numbers {\n\t\t\tcurrentCellsGoodness = append(currentCellsGoodness, false)\n\t\t}\n\t\tcurrentCellsGoodness[len(cellsGoodness)-1] = true\n\t}\n\n\tmaxJumpLength := int(math.Min(float64(numbers[startIndex]), float64(len(numbers)-1-startIndex)))\n\n\tfor jumpLength := maxJumpLength; jumpLength > 0; jumpLength-- {\n\t\tnextIndex := startIndex + jumpLength\n\n\t\tif !currentCellsGoodness[nextIndex] {\n\t\t\tcurrentJumps = append(currentJumps, nextIndex)\n\n\t\t\tisJumpSuccessful := dpTopDownJumpGame(numbers, nextIndex, currentJumps, currentCellsGoodness)\n\n\t\t\tif isJumpSuccessful {\n\t\t\t\treturn true\n\t\t\t}\n\n\t\t\tcurrentJumps = currentJumps[:len(currentJumps)-1]\n\n\t\t\tcurrentCellsGoodness[nextIndex] = true\n\t\t}\n\t}\n\n\treturn false\n}\n\nfunc greedyJumpGame(numbers []int) bool {\n\tleftGoodPosition := len(numbers) - 1\n\n\tfor numberIndex := len(numbers) - 2; numberIndex >= 0; numberIndex-- {\n\t\tmaxCurrentJumpLength := numberIndex + numbers[numberIndex]\n\t\tif maxCurrentJumpLength >= leftGoodPosition {\n\t\t\tleftGoodPosition = numberIndex\n\t\t}\n\t}\n\n\treturn leftGoodPosition == 0\n}\n',a="import java.util.*;\n\npublic class JumpGame {\n\n  public static boolean backtrackingJumpGame(int[] numbers, int startIndex, List<Integer> currentJumps) {\n    if (startIndex == numbers.length - 1) {\n      return true;\n    }\n\n    int maxJumpLength = Math.min(numbers[startIndex], numbers.length - 1 - startIndex);\n\n    for (int jumpLength = maxJumpLength; jumpLength > 0; jumpLength--) {\n      int nextIndex = startIndex + jumpLength;\n      currentJumps.add(nextIndex);\n\n      boolean isJumpSuccessful = backtrackingJumpGame(numbers, nextIndex, currentJumps);\n\n      if (isJumpSuccessful) {\n        return true;\n      }\n\n      currentJumps.remove(currentJumps.size() - 1);\n    }\n\n    return false;\n  }\n\n  public static boolean dpBottomUpJumpGame(int[] numbers) {\n    Boolean[] cellsGoodness = new Boolean[numbers.length];\n    Arrays.fill(cellsGoodness, null);\n    cellsGoodness[cellsGoodness.length - 1] = true;\n\n    for (int cellIndex = numbers.length - 2; cellIndex >= 0; cellIndex--) {\n      int maxJumpLength = Math.min(numbers[cellIndex], numbers.length - 1 - cellIndex);\n\n      for (int jumpLength = maxJumpLength; jumpLength > 0; jumpLength--) {\n        int nextIndex = cellIndex + jumpLength;\n        if (cellsGoodness[nextIndex] != null && cellsGoodness[nextIndex]) {\n          cellsGoodness[cellIndex] = true;\n          break;\n        }\n      }\n    }\n\n    return cellsGoodness[0] != null && cellsGoodness[0];\n  }\n\n  public static boolean dpTopDownJumpGame(int[] numbers, int startIndex, List<Integer> currentJumps, Boolean[] cellsGoodness) {\n    if (startIndex == numbers.length - 1) {\n      return true;\n    }\n\n    Boolean[] currentCellsGoodness = Arrays.copyOf(cellsGoodness, cellsGoodness.length);\n    if (currentCellsGoodness.length == 0) {\n      currentCellsGoodness = new Boolean[numbers.length];\n      Arrays.fill(currentCellsGoodness, null);\n      currentCellsGoodness[cellsGoodness.length - 1] = true;\n    }\n\n    int maxJumpLength = Math.min(numbers[startIndex], numbers.length - 1 - startIndex);\n\n    for (int jumpLength = maxJumpLength; jumpLength > 0; jumpLength--) {\n      int nextIndex = startIndex + jumpLength;\n\n      if (currentCellsGoodness[nextIndex] != Boolean.FALSE) {\n        currentJumps.add(nextIndex);\n\n        boolean isJumpSuccessful = dpTopDownJumpGame(numbers, nextIndex, currentJumps, currentCellsGoodness);\n\n        if (isJumpSuccessful) {\n          return true;\n        }\n\n        currentJumps.remove(currentJumps.size() - 1);\n\n        currentCellsGoodness[nextIndex] = false;\n      }\n    }\n\n    return false;\n  }\n\n  public static boolean greedyJumpGame(int[] numbers) {\n    int leftGoodPosition = numbers.length - 1;\n\n    for (int numberIndex = numbers.length - 2; numberIndex >= 0; numberIndex--) {\n      int maxCurrentJumpLength = numberIndex + numbers[numberIndex];\n      if (maxCurrentJumpLength >= leftGoodPosition) {\n        leftGoodPosition = numberIndex;\n      }\n    }\n\n    return leftGoodPosition == 0;\n  }\n}\n",i="function backtrackingJumpGame(numbers, startIndex = 0, currentJumps = []) {\n  if (startIndex === numbers.length - 1) {\n    return true;\n  }\n\n  const maxJumpLength = Math.min(\n    numbers[startIndex],\n    numbers.length - 1 - startIndex,\n  );\n\n  for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {\n    const nextIndex = startIndex + jumpLength;\n    currentJumps.push(nextIndex);\n\n    const isJumpSuccessful = backtrackingJumpGame(\n      numbers,\n      nextIndex,\n      currentJumps,\n    );\n\n    if (isJumpSuccessful) {\n      return true;\n    }\n\n    currentJumps.pop();\n  }\n\n  return false;\n}\n\nfunction dpBottomUpJumpGame(numbers) {\n  const cellsGoodness = Array(numbers.length).fill(undefined);\n  cellsGoodness[cellsGoodness.length - 1] = true;\n\n  for (let cellIndex = numbers.length - 2; cellIndex >= 0; cellIndex -= 1) {\n    const maxJumpLength = Math.min(\n      numbers[cellIndex],\n      numbers.length - 1 - cellIndex,\n    );\n\n    for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {\n      const nextIndex = cellIndex + jumpLength;\n      if (cellsGoodness[nextIndex] === true) {\n        cellsGoodness[cellIndex] = true;\n        break;\n      }\n    }\n  }\n\n  return cellsGoodness[0] === true;\n}\n\nfunction dpTopDownJumpGame(\n  numbers,\n  startIndex = 0,\n  currentJumps = [],\n  cellsGoodness = [],\n) {\n  if (startIndex === numbers.length - 1) {\n    return true;\n  }\n\n  const currentCellsGoodness = [...cellsGoodness];\n  if (!currentCellsGoodness.length) {\n    numbers.forEach(() => currentCellsGoodness.push(undefined));\n    currentCellsGoodness[cellsGoodness.length - 1] = true;\n  }\n\n  const maxJumpLength = Math.min(\n    numbers[startIndex],\n    numbers.length - 1 - startIndex,\n  );\n\n  for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {\n    const nextIndex = startIndex + jumpLength;\n\n    if (currentCellsGoodness[nextIndex] !== false) {\n      currentJumps.push(nextIndex);\n\n      const isJumpSuccessful = dpTopDownJumpGame(\n        numbers,\n        nextIndex,\n        currentJumps,\n        currentCellsGoodness,\n      );\n\n      if (isJumpSuccessful) {\n        return true;\n      }\n\n      currentJumps.pop();\n\n      currentCellsGoodness[nextIndex] = false;\n    }\n  }\n\n  return false;\n}\n\nfunction greedyJumpGame(numbers) {\n  let leftGoodPosition = numbers.length - 1;\n\n  for (\n    let numberIndex = numbers.length - 2;\n    numberIndex >= 0;\n    numberIndex -= 1\n  ) {\n    const maxCurrentJumpLength = numberIndex + numbers[numberIndex];\n    if (maxCurrentJumpLength >= leftGoodPosition) {\n      leftGoodPosition = numberIndex;\n    }\n  }\n\n  return leftGoodPosition === 0;\n}\n",c="fun backtrackingJumpGame(numbers: IntArray, startIndex: Int = 0, currentJumps: MutableList<Int> = mutableListOf()): Boolean {\n    if (startIndex == numbers.size - 1) {\n        return true\n    }\n\n    val maxJumpLength = Math.min(numbers[startIndex], numbers.size - 1 - startIndex)\n\n    for (jumpLength in maxJumpLength downTo 1) {\n        val nextIndex = startIndex + jumpLength\n        currentJumps.add(nextIndex)\n\n        val isJumpSuccessful = backtrackingJumpGame(numbers, nextIndex, currentJumps)\n\n        if (isJumpSuccessful) {\n            return true\n        }\n\n        currentJumps.removeAt(currentJumps.size - 1)\n    }\n\n    return false\n}\n\nfun dpBottomUpJumpGame(numbers: IntArray): Boolean {\n    val cellsGoodness = Array(numbers.size) { _ -> null }\n    cellsGoodness[cellsGoodness.size - 1] = true\n\n    for (cellIndex in numbers.size - 2 downTo 0) {\n        val maxJumpLength = Math.min(numbers[cellIndex], numbers.size - 1 - cellIndex)\n\n        for (jumpLength in maxJumpLength downTo 1) {\n            val nextIndex = cellIndex + jumpLength\n            if (cellsGoodness[nextIndex] == true) {\n                cellsGoodness[cellIndex] = true\n                break\n            }\n        }\n    }\n\n    return cellsGoodness[0] == true\n}\n\nfun dpTopDownJumpGame(numbers: IntArray, startIndex: Int = 0, currentJumps: MutableList<Int> = mutableListOf(), cellsGoodness: MutableList<Boolean?> = mutableListOf()): Boolean {\n    if (startIndex == numbers.size - 1) {\n        return true\n    }\n\n    val currentCellsGoodness = cellsGoodness.toMutableList()\n    if (currentCellsGoodness.isEmpty()) {\n        repeat(numbers.size) { _ -> currentCellsGoodness.add(null) }\n        currentCellsGoodness[currentCellsGoodness.size - 1] = true\n    }\n\n    val maxJumpLength = Math.min(numbers[startIndex], numbers.size - 1 - startIndex)\n\n    for (jumpLength in maxJumpLength downTo 1) {\n        val nextIndex = startIndex + jumpLength\n\n        if (currentCellsGoodness[nextIndex] != false) {\n            currentJumps.add(nextIndex)\n\n            val isJumpSuccessful = dpTopDownJumpGame(numbers, nextIndex, currentJumps, currentCellsGoodness)\n\n            if (isJumpSuccessful) {\n                return true\n            }\n\n            currentJumps.removeAt(currentJumps.size - 1)\n\n            currentCellsGoodness[nextIndex] = false\n        }\n    }\n\n    return false\n}\n\nfun greedyJumpGame(numbers: IntArray): Boolean {\n    var leftGoodPosition = numbers.size - 1\n\n    for (numberIndex in numbers.size - 2 downTo 0) {\n        val maxCurrentJumpLength = numberIndex + numbers[numberIndex]\n        if (maxCurrentJumpLength >= leftGoodPosition) {\n            leftGoodPosition = numberIndex\n        }\n    }\n\n    return leftGoodPosition == 0\n}\n",d="def backtracking_jump_game(numbers, start_index=0, current_jumps=None):\n    if current_jumps is None:\n        current_jumps = []\n\n    if start_index == len(numbers) - 1:\n        return True\n\n    max_jump_length = min(numbers[start_index], len(numbers) - 1 - start_index)\n\n    for jump_length in range(max_jump_length, 0, -1):\n        next_index = start_index + jump_length\n        current_jumps.append(next_index)\n\n        is_jump_successful = backtracking_jump_game(numbers, next_index, current_jumps)\n\n        if is_jump_successful:\n            return True\n\n        current_jumps.pop()\n\n    return False\n\n\ndef dp_bottom_up_jump_game(numbers):\n    cells_goodness = [None] * len(numbers)\n    cells_goodness[-1] = True\n\n    for cell_index in range(len(numbers) - 2, -1, -1):\n        max_jump_length = min(numbers[cell_index], len(numbers) - 1 - cell_index)\n\n        for jump_length in range(max_jump_length, 0, -1):\n            next_index = cell_index + jump_length\n            if cells_goodness[next_index] is True:\n                cells_goodness[cell_index] = True\n                break\n\n    return cells_goodness[0] is True\n\n\ndef dp_top_down_jump_game(numbers, start_index=0, current_jumps=None, cells_goodness=None):\n    if current_jumps is None:\n        current_jumps = []\n    if cells_goodness is None:\n        cells_goodness = []\n\n    if start_index == len(numbers) - 1:\n        return True\n\n    current_cells_goodness = cells_goodness.copy()\n    if not current_cells_goodness:\n        current_cells_goodness.extend([None] * len(numbers))\n        current_cells_goodness[-1] = True\n\n    max_jump_length = min(numbers[start_index], len(numbers) - 1 - start_index)\n\n    for jump_length in range(max_jump_length, 0, -1):\n        next_index = start_index + jump_length\n\n        if current_cells_goodness[next_index] is not False:\n            current_jumps.append(next_index)\n\n            is_jump_successful = dp_top_down_jump_game(numbers, next_index, current_jumps, current_cells_goodness)\n\n            if is_jump_successful:\n                return True\n\n            current_jumps.pop()\n\n            current_cells_goodness[next_index] = False\n\n    return False\n\n\ndef greedy_jump_game(numbers):\n    left_good_position = len(numbers) - 1\n\n    for number_index in range(len(numbers) - 2, -1, -1):\n        max_current_jump_length = number_index + numbers[number_index]\n        if max_current_jump_length >= left_good_position:\n            left_good_position = number_index\n\n    return left_good_position == 0\n",p="fn backtracking_jump_game(numbers: &[i32], start_index: usize, current_jumps: &mut Vec<usize>) -> bool {\n    if start_index == numbers.len() - 1 {\n        return true;\n    }\n\n    let max_jump_length = numbers[start_index].min(numbers.len() as i32 - 1 - start_index);\n\n    for jump_length in (1..=max_jump_length).rev() {\n        let next_index = start_index + jump_length as usize;\n        current_jumps.push(next_index);\n\n        let is_jump_successful = backtracking_jump_game(numbers, next_index, current_jumps);\n\n        if is_jump_successful {\n            return true;\n        }\n\n        current_jumps.pop();\n    }\n\n    false\n}\n\nfn dp_bottom_up_jump_game(numbers: &[i32]) -> bool {\n    let mut cells_goodness = vec![None; numbers.len()];\n    cells_goodness[cells_goodness.len() - 1] = Some(true);\n\n    for cell_index in (0..numbers.len() - 1).rev() {\n        let max_jump_length = numbers[cell_index].min(numbers.len() as i32 - 1 - cell_index as i32);\n\n        for jump_length in (1..=max_jump_length).rev() {\n            let next_index = cell_index + jump_length as usize;\n            if cells_goodness[next_index] == Some(true) {\n                cells_goodness[cell_index] = Some(true);\n                break;\n            }\n        }\n    }\n\n    cells_goodness[0] == Some(true)\n}\n\nfn dp_top_down_jump_game(numbers: &[i32], start_index: usize, current_jumps: &mut Vec<usize>, cells_goodness: &mut Vec<Option<bool>>) -> bool {\n    if start_index == numbers.len() - 1 {\n        return true;\n    }\n\n    let mut current_cells_goodness = cells_goodness.clone();\n    if current_cells_goodness.is_empty() {\n        current_cells_goodness.extend(vec![None; numbers.len()]);\n        current_cells_goodness[cells_goodness.len() - 1] = Some(true);\n    }\n\n    let max_jump_length = numbers[start_index].min(numbers.len() as i32 - 1 - start_index as i32);\n\n    for jump_length in (1..=max_jump_length).rev() {\n        let next_index = start_index + jump_length as usize;\n\n        if current_cells_goodness[next_index] != Some(false) {\n            current_jumps.push(next_index);\n\n            let is_jump_successful = dp_top_down_jump_game(numbers, next_index, current_jumps, &mut current_cells_goodness);\n\n            if is_jump_successful {\n                return true;\n            }\n\n            current_jumps.pop();\n\n            current_cells_goodness[next_index] = Some(false);\n        }\n    }\n\n    false\n}\n\nfn greedy_jump_game(numbers: &[i32]) -> bool {\n    let mut left_good_position = numbers.len() - 1;\n\n    for number_index in (0..numbers.len() - 1).rev() {\n        let max_current_jump_length = number_index + numbers[number_index] as usize;\n        if max_current_jump_length >= left_good_position {\n            left_good_position = number_index;\n        }\n    }\n\n    left_good_position == 0\n}\n",x="function backtrackingJumpGame(\n  numbers: number[],\n  startIndex: number = 0,\n  currentJumps: number[] = [],\n): boolean {\n  if (startIndex === numbers.length - 1) {\n    return true;\n  }\n\n  const maxJumpLength = Math.min(\n    numbers[startIndex],\n    numbers.length - 1 - startIndex,\n  );\n\n  for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {\n    const nextIndex = startIndex + jumpLength;\n    currentJumps.push(nextIndex);\n\n    const isJumpSuccessful = backtrackingJumpGame(\n      numbers,\n      nextIndex,\n      currentJumps,\n    );\n\n    if (isJumpSuccessful) {\n      return true;\n    }\n\n    currentJumps.pop();\n  }\n\n  return false;\n}\n\nfunction dpBottomUpJumpGame(numbers: number[]): boolean {\n  const cellsGoodness: (boolean | undefined)[] = Array(numbers.length).fill(\n    undefined,\n  );\n  cellsGoodness[cellsGoodness.length - 1] = true;\n\n  for (let cellIndex = numbers.length - 2; cellIndex >= 0; cellIndex -= 1) {\n    const maxJumpLength = Math.min(\n      numbers[cellIndex],\n      numbers.length - 1 - cellIndex,\n    );\n\n    for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {\n      const nextIndex = cellIndex + jumpLength;\n      if (cellsGoodness[nextIndex] === true) {\n        cellsGoodness[cellIndex] = true;\n        break;\n      }\n    }\n  }\n\n  return cellsGoodness[0] === true;\n}\n\nfunction dpTopDownJumpGame(\n  numbers: number[],\n  startIndex: number = 0,\n  currentJumps: number[] = [],\n  cellsGoodness: (boolean | undefined)[] = [],\n): boolean {\n  if (startIndex === numbers.length - 1) {\n    return true;\n  }\n\n  const currentCellsGoodness = [...cellsGoodness];\n  if (!currentCellsGoodness.length) {\n    numbers.forEach(() => currentCellsGoodness.push(undefined));\n    currentCellsGoodness[cellsGoodness.length - 1] = true;\n  }\n\n  const maxJumpLength = Math.min(\n    numbers[startIndex],\n    numbers.length - 1 - startIndex,\n  );\n\n  for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {\n    const nextIndex = startIndex + jumpLength;\n\n    if (currentCellsGoodness[nextIndex] !== false) {\n      currentJumps.push(nextIndex);\n\n      const isJumpSuccessful = dpTopDownJumpGame(\n        numbers,\n        nextIndex,\n        currentJumps,\n        currentCellsGoodness,\n      );\n\n      if (isJumpSuccessful) {\n        return true;\n      }\n\n      currentJumps.pop();\n\n      currentCellsGoodness[nextIndex] = false;\n    }\n  }\n\n  return false;\n}\n\nfunction greedyJumpGame(numbers: number[]): boolean {\n  let leftGoodPosition = numbers.length - 1;\n\n  for (\n    let numberIndex = numbers.length - 2;\n    numberIndex >= 0;\n    numberIndex -= 1\n  ) {\n    const maxCurrentJumpLength = numberIndex + numbers[numberIndex];\n    if (maxCurrentJumpLength >= leftGoodPosition) {\n      leftGoodPosition = numberIndex;\n    }\n  }\n\n  return leftGoodPosition === 0;\n}\n",h={title:"Jump Game",description:"Jump Game",hide_table_of_contents:!0},g=void 0,b={id:"education/computer-science/algorithms/algo/jump-game",title:"Jump Game",description:"Jump Game",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/jump-game.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/jump-game",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/jump-game",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/jump-game.mdx",tags:[],version:"current",frontMatter:{title:"Jump Game",description:"Jump Game",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Is Power of Two",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/is-power-of-two"},next:{title:"Jump Search (or Block Search)",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/jump-search"}},f={},_=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function j(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(l.Z,{value:"definition",label:"Definition",children:(0,s.jsx)(e.p,{children:"The Jump Game Algorithm determines if it's possible to reach the last index of an array starting from the first index, given that each element in the array represents the maximum number of steps that can be taken from that position"})}),(0,s.jsx)(l.Z,{value:"how",label:"Explanation",children:(0,s.jsx)(e.p,{children:"The algorithm iterates through each element in the array, keeping track of the maximum reachable index. If at any point the current index exceeds this maximum reachable index, it indicates that it's not possible to reach the end"})}),(0,s.jsx)(l.Z,{value:"guidance",label:"Guidance",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Set a starting point at the beginning of the array"}),"\n",(0,s.jsxs)(e.li,{children:["Traverse each number in the array","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"for each number"}),"\n",(0,s.jsx)(e.li,{children:"determine if advancing by the number of steps it indicates would take you farther than before"}),"\n",(0,s.jsx)(e.li,{children:"update your furthest reachable position accordingly"}),"\n",(0,s.jsx)(e.li,{children:"if you can already reach the end from your current position return true"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"If you've covered all numbers without reaching the end return false"}),"\n"]})}),(0,s.jsx)(l.Z,{value:"tips",label:"Tips",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"keep track of the maximum reachable index as you iterate through the array"}),"\n",(0,s.jsx)(e.li,{children:"if at any point the current index exceeds the maximum reachable index, it's not possible to reach the end"}),"\n"]})})]}),"\n",(0,s.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(l.Z,{value:"practice",label:"Practice",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"canReachEnd(nums):\n  max_reachable = 0\n  for i from 0 to length(nums) - 1:\n    if i > max_reachable:\n      return false\n    max_reachable = max(max_reachable, i + nums[i])\n    if max_reachable >= length(nums) - 1:\n      return true\n  return false\n"})})}),(0,s.jsx)(l.Z,{value:"solution",label:"Solution",children:(0,s.jsxs)(u.Z,{queryString:"code",children:[(0,s.jsx)(l.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,s.jsx)(o.Z,{language:"go",children:m})}),(0,s.jsx)(l.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,s.jsx)(o.Z,{language:"java",children:a})}),(0,s.jsx)(l.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,s.jsx)(o.Z,{language:"js",children:i})}),(0,s.jsx)(l.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,s.jsx)(o.Z,{language:"kotlin",children:c})}),(0,s.jsx)(l.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,s.jsx)(o.Z,{language:"python",children:d})}),(0,s.jsx)(l.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,s.jsx)(o.Z,{language:"rust",children:p})}),(0,s.jsx)(l.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,s.jsx)(o.Z,{language:"ts",children:x})})]})})]})]})}function I(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}}}]);