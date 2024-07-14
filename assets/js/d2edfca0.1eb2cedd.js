"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6500],{234:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>R,default:()=>_,frontMatter:()=>C,metadata:()=>p,toc:()=>D});var i=r(86070),t=r(25710),c=r(98459),a=r(37515),l=r(18792);const o='package main\n\nimport "strings"\n\nvar DIRECTIONS = map[string]int{"UP": -1, "DOWN": 1}\n\nfunc buildFence(rowsNum int) [][]rune {\n    fence := make([][]rune, rowsNum)\n    for i := range fence {\n        fence[i] = []rune{}\n    }\n    return fence\n}\n\nfunc getNextDirection(railCount, currentRail, direction int) int {\n    if currentRail == 0 {\n        return DIRECTIONS["DOWN"]\n    } else if currentRail == railCount-1 {\n        return DIRECTIONS["UP"]\n    }\n    return direction\n}\n\nfunc fillEncodeFence(fence [][]rune, input string, railCount int) [][]rune {\n    currentRail := 0\n    direction := DIRECTIONS["DOWN"]\n\n    for _, char := range input {\n        fence[currentRail] = append(fence[currentRail], char)\n        direction = getNextDirection(railCount, currentRail, direction)\n        currentRail += direction\n    }\n\n    return fence\n}\n\nfunc fillDecodeFence(fence [][]rune, input string, railCount int) [][]rune {\n    currentRail := 0\n    currentColumn := 0\n    direction := DIRECTIONS["DOWN"]\n\n    for _, char := range input {\n        fence[currentRail][currentColumn] = char\n        direction = getNextDirection(railCount, currentRail, direction)\n        currentRail += direction\n        currentColumn = (currentColumn + 1) % len(input)\n    }\n\n    return fence\n}\n\nfunc decodeFence(fence [][]rune, railCount int) string {\n    var decodedMessage []rune\n\n    currentRail := 0\n    direction := DIRECTIONS["DOWN"]\n\n    for i := 0; i < railCount; i++ {\n        decodedMessage = append(decodedMessage, fence[currentRail]...)\n        direction = getNextDirection(railCount, currentRail, direction)\n        currentRail += direction\n    }\n\n    return string(decodedMessage)\n}\n\nfunc encodeRailFenceCipher(input string, railCount int) string {\n    fence := buildFence(railCount)\n    fence = fillEncodeFence(fence, input, railCount)\n    var encodedMessage strings.Builder\n    for _, row := range fence {\n        for _, char := range row {\n            encodedMessage.WriteRune(char)\n        }\n    }\n    return encodedMessage.String()\n}\n\nfunc decodeRailFenceCipher(input string, railCount int) string {\n    fence := buildFence(railCount)\n    fence = fillDecodeFence(fence, input, railCount)\n    return decodeFence(fence, railCount)\n}\n',u="import java.util.ArrayList;\nimport java.util.List;\n\npublic class RailFenceCipher {\n\n  static final int UP = -1;\n  static final int DOWN = 1;\n\n  static int[] buildFence(int rowsNum) {\n    int[] fence = new int[rowsNum];\n    for (int i = 0; i < rowsNum; i++) {\n      fence[i] = 0;\n    }\n    return fence;\n  }\n\n  static int getNextDirection(int railCount, int currentRail, int direction) {\n    if (currentRail == 0) {\n      return DOWN;\n    } else if (currentRail == railCount - 1) {\n      return UP;\n    } else {\n      return direction;\n    }\n  }\n\n  static int[][] fillEncodeFence(int[][] fence, String string, int railCount) {\n    int currentRail = 0;\n    int direction = DOWN;\n\n    for (char c : string.toCharArray()) {\n      fence[currentRail][fence[currentRail].length - 1] = c;\n      direction = getNextDirection(railCount, currentRail, direction);\n      currentRail += direction;\n    }\n\n    return fence;\n  }\n\n  static int[][] fillDecodeFence(int[][] fence, String string, int railCount) {\n    int currentRail = 0;\n    int currentColumn = 0;\n    int direction = DOWN;\n\n    for (char c : string.toCharArray()) {\n      fence[currentRail][currentColumn] = c;\n      direction = getNextDirection(railCount, currentRail, direction);\n      currentRail += direction;\n      currentColumn = (currentColumn + 1) % string.length();\n    }\n\n    return fence;\n  }\n\n  static String decodeFence(int[][] fence, int railCount) {\n    StringBuilder decodedMessage = new StringBuilder();\n\n    int currentRail = 0;\n    int direction = DOWN;\n\n    for (int i = 0; i < railCount; i++) {\n      for (int j = 0; j < fence[currentRail].length; j++) {\n        if (fence[currentRail][j] != 0) {\n          decodedMessage.append((char) fence[currentRail][j]);\n        }\n      }\n      direction = getNextDirection(railCount, currentRail, direction);\n      currentRail += direction;\n    }\n\n    return decodedMessage.toString();\n  }\n\n  public static String encodeRailFenceCipher(String string, int railCount) {\n    int[][] fence = new int[railCount][string.length()];\n    fillEncodeFence(fence, string, railCount);\n    StringBuilder encodedMessage = new StringBuilder();\n    for (int i = 0; i < railCount; i++) {\n      for (int j = 0; j < fence[i].length; j++) {\n        if (fence[i][j] != 0) {\n          encodedMessage.append((char) fence[i][j]);\n        }\n      }\n    }\n    return encodedMessage.toString();\n  }\n\n  public static String decodeRailFenceCipher(String string, int railCount) {\n    int[][] fence = new int[railCount][string.length()];\n    fillDecodeFence(fence, string, railCount);\n    return decodeFence(fence, railCount);\n  }\n}\n",s='const DIRECTIONS = { UP: -1, DOWN: 1 };\n\nconst buildFence = (rowsNum) => Array.from({ length: rowsNum }, () => []);\n\nconst getNextDirection = ({ railCount, currentRail, direction }) => {\n  if (currentRail === 0) {\n    return DIRECTIONS.DOWN;\n  } else if (currentRail === railCount - 1) {\n    return DIRECTIONS.UP;\n  } else {\n    return direction;\n  }\n};\n\nconst fillEncodeFence = (fence, string, railCount) => {\n  let currentRail = 0;\n  let direction = DIRECTIONS.DOWN;\n\n  for (const char of string) {\n    fence[currentRail].push(char);\n    direction = getNextDirection({ railCount, currentRail, direction });\n    currentRail += direction;\n  }\n\n  return fence;\n};\n\nconst fillDecodeFence = (fence, string, railCount) => {\n  let currentRail = 0;\n  let currentColumn = 0;\n  let direction = DIRECTIONS.DOWN;\n\n  for (const char of string) {\n    fence[currentRail][currentColumn] = char;\n    direction = getNextDirection({ railCount, currentRail, direction });\n    currentRail += direction;\n    currentColumn = (currentColumn + 1) % string.length;\n  }\n\n  return fence;\n};\n\nconst decodeFence = (fence, railCount) => {\n  const decodedMessage = [];\n\n  let currentRail = 0;\n  let direction = DIRECTIONS.DOWN;\n\n  for (let i = 0; i < railCount; i++) {\n    decodedMessage.push(...fence[currentRail]);\n    direction = getNextDirection({ railCount, currentRail, direction });\n    currentRail += direction;\n  }\n\n  return decodedMessage.join("");\n};\n\nexport const encodeRailFenceCipher = (string, railCount) => {\n  const fence = buildFence(railCount);\n  fillEncodeFence(fence, string, railCount);\n  return fence.flat().join("");\n};\n\nexport const decodeRailFenceCipher = (string, railCount) => {\n  const fence = buildFence(railCount);\n  fillDecodeFence(fence, string, railCount);\n  return decodeFence(fence, railCount);\n};\n',d='val DIRECTIONS = mapOf("UP" to -1, "DOWN" to 1)\n\nfun buildFence(rowsNum: Int): Array<CharArray> {\n    return Array(rowsNum) { CharArray(0) }\n}\n\nfun getNextDirection(railCount: Int, currentRail: Int, direction: Int): Int {\n    return if (currentRail == 0) {\n        DIRECTIONS["DOWN"] ?: error("Direction not found")\n    } else if (currentRail == railCount - 1) {\n        DIRECTIONS["UP"] ?: error("Direction not found")\n    } else {\n        direction\n    }\n}\n\nfun fillEncodeFence(fence: Array<CharArray>, string: String, railCount: Int): Array<CharArray> {\n    var currentRail = 0\n    var direction = DIRECTIONS["DOWN"] ?: error("Direction not found")\n\n    for (char in string) {\n        fence[currentRail] += char\n        direction = getNextDirection(railCount, currentRail, direction)\n        currentRail += direction\n    }\n\n    return fence\n}\n\nfun fillDecodeFence(fence: Array<CharArray>, string: String, railCount: Int): Array<CharArray> {\n    var currentRail = 0\n    var currentColumn = 0\n    var direction = DIRECTIONS["DOWN"] ?: error("Direction not found")\n\n    for (char in string) {\n        fence[currentRail][currentColumn] = char\n        direction = getNextDirection(railCount, currentRail, direction)\n        currentRail += direction\n        currentColumn = (currentColumn + 1) % string.length\n    }\n\n    return fence\n}\n\nfun decodeFence(fence: Array<CharArray>, railCount: Int): String {\n    val decodedMessage = mutableListOf<Char>()\n\n    var currentRail = 0\n    var direction = DIRECTIONS["DOWN"] ?: error("Direction not found")\n\n    repeat(railCount) {\n        decodedMessage.addAll(fence[currentRail])\n        direction = getNextDirection(railCount, currentRail, direction)\n        currentRail += direction\n    }\n\n    return decodedMessage.joinToString("")\n}\n\nfun encodeRailFenceCipher(string: String, railCount: Int): String {\n    val fence = buildFence(railCount)\n    fillEncodeFence(fence, string, railCount)\n    return fence.flatMap { it.toList() }.joinToString("")\n}\n\nfun decodeRailFenceCipher(string: String, railCount: Int): String {\n    val fence = buildFence(railCount)\n    fillDecodeFence(fence, string, railCount)\n    return decodeFence(fence, railCount)\n}\n',f='DIRECTIONS = {"UP": -1, "DOWN": 1}\n\ndef buildFence(rowsNum):\n    return [[] for _ in range(rowsNum)]\n\ndef getNextDirection(railCount, currentRail, direction):\n    if currentRail == 0:\n        return DIRECTIONS["DOWN"]\n    elif currentRail == railCount - 1:\n        return DIRECTIONS["UP"]\n    else:\n        return direction\n\ndef fillEncodeFence(fence, string, railCount):\n    currentRail = 0\n    direction = DIRECTIONS["DOWN"]\n\n    for char in string:\n        fence[currentRail].append(char)\n        direction = getNextDirection(railCount, currentRail, direction)\n        currentRail += direction\n\n    return fence\n\ndef fillDecodeFence(fence, string, railCount):\n    currentRail = 0\n    currentColumn = 0\n    direction = DIRECTIONS["DOWN"]\n\n    for char in string:\n        fence[currentRail][currentColumn] = char\n        direction = getNextDirection(railCount, currentRail, direction)\n        currentRail += direction\n        currentColumn = (currentColumn + 1) % len(string)\n\n    return fence\n\ndef decodeFence(fence, railCount):\n    decodedMessage = []\n\n    currentRail = 0\n    direction = DIRECTIONS["DOWN"]\n\n    for _ in range(railCount):\n        decodedMessage.extend(fence[currentRail])\n        direction = getNextDirection(railCount, currentRail, direction)\n        currentRail += direction\n\n    return \'\'.join(decodedMessage)\n\ndef encodeRailFenceCipher(string, railCount):\n    fence = buildFence(railCount)\n    fillEncodeFence(fence, string, railCount)\n    return \'\'.join(\'\'.join(row) for row in fence)\n\ndef decodeRailFenceCipher(string, railCount):\n    fence = buildFence(railCount)\n    fillDecodeFence(fence, string, railCount)\n    return decodeFence(fence, railCount)\n',g='use std::collections::HashMap;\n\nconst DIRECTIONS: HashMap<&str, i32> = [("UP", -1), ("DOWN", 1)]\n    .iter()\n    .cloned()\n    .collect();\n\nfn build_fence(rows_num: usize) -> Vec<Vec<char>> {\n    vec![vec![\' \'; 0]; rows_num]\n}\n\nfn get_next_direction(rail_count: usize, current_rail: usize, direction: i32) -> i32 {\n    if current_rail == 0 {\n        *DIRECTIONS.get("DOWN").unwrap()\n    } else if current_rail == rail_count - 1 {\n        *DIRECTIONS.get("UP").unwrap()\n    } else {\n        direction\n    }\n}\n\nfn fill_encode_fence(mut fence: Vec<Vec<char>>, string: &str, rail_count: usize) -> Vec<Vec<char>> {\n    let mut current_rail = 0;\n    let mut direction = *DIRECTIONS.get("DOWN").unwrap();\n\n    for c in string.chars() {\n        fence[current_rail].push(c);\n        direction = get_next_direction(rail_count, current_rail, direction);\n        current_rail = (current_rail as i32 + direction) as usize;\n    }\n\n    fence\n}\n\nfn fill_decode_fence(mut fence: Vec<Vec<char>>, string: &str, rail_count: usize) -> Vec<Vec<char>> {\n    let mut current_rail = 0;\n    let mut current_column = 0;\n    let mut direction = *DIRECTIONS.get("DOWN").unwrap();\n\n    for c in string.chars() {\n        fence[current_rail][current_column] = c;\n        direction = get_next_direction(rail_count, current_rail, direction);\n        current_rail = (current_rail as i32 + direction) as usize;\n        current_column = (current_column + 1) % string.len();\n    }\n\n    fence\n}\n\nfn decode_fence(fence: Vec<Vec<char>>, rail_count: usize) -> String {\n    let mut decoded_message = Vec::new();\n\n    let mut current_rail = 0;\n    let mut direction = *DIRECTIONS.get("DOWN").unwrap();\n\n    for _ in 0..rail_count {\n        decoded_message.extend_from_slice(&fence[current_rail]);\n        direction = get_next_direction(rail_count, current_rail, direction);\n        current_rail = (current_rail as i32 + direction) as usize;\n    }\n\n    decoded_message.into_iter().collect()\n}\n\npub fn encode_rail_fence_cipher(string: &str, rail_count: usize) -> String {\n    let fence = build_fence(rail_count);\n    let fence = fill_encode_fence(fence, string, rail_count);\n    fence.into_iter().flatten().collect()\n}\n\npub fn decode_rail_fence_cipher(string: &str, rail_count: usize) -> String {\n    let fence = build_fence(rail_count);\n    let fence = fill_decode_fence(fence, string, rail_count);\n    decode_fence(fence, rail_count)\n}\n',h='const DIRECTIONS: { [key: string]: number } = { UP: -1, DOWN: 1 };\n\nconst buildFence = (rowsNum: number): string[][] => {\n  return Array.from({ length: rowsNum }, () => []);\n};\n\nconst getNextDirection = ({\n  railCount,\n  currentRail,\n  direction,\n}: {\n  railCount: number;\n  currentRail: number;\n  direction: number;\n}): number => {\n  if (currentRail === 0) {\n    return DIRECTIONS.DOWN;\n  } else if (currentRail === railCount - 1) {\n    return DIRECTIONS.UP;\n  } else {\n    return direction;\n  }\n};\n\nconst fillEncodeFence = (\n  fence: string[][],\n  string: string,\n  railCount: number,\n): string[][] => {\n  let currentRail = 0;\n  let direction = DIRECTIONS.DOWN;\n\n  for (const char of string) {\n    fence[currentRail].push(char);\n    direction = getNextDirection({ railCount, currentRail, direction });\n    currentRail += direction;\n  }\n\n  return fence;\n};\n\nconst fillDecodeFence = (\n  fence: string[][],\n  string: string,\n  railCount: number,\n): string[][] => {\n  let currentRail = 0;\n  let currentColumn = 0;\n  let direction = DIRECTIONS.DOWN;\n\n  for (const char of string) {\n    fence[currentRail][currentColumn] = char;\n    direction = getNextDirection({ railCount, currentRail, direction });\n    currentRail += direction;\n    currentColumn = (currentColumn + 1) % string.length;\n  }\n\n  return fence;\n};\n\nconst decodeFence = (fence: string[][], railCount: number): string => {\n  const decodedMessage: string[] = [];\n\n  let currentRail = 0;\n  let direction = DIRECTIONS.DOWN;\n\n  for (let i = 0; i < railCount; i++) {\n    decodedMessage.push(...fence[currentRail]);\n    direction = getNextDirection({ railCount, currentRail, direction });\n    currentRail += direction;\n  }\n\n  return decodedMessage.join("");\n};\n\nexport const encodeRailFenceCipher = (\n  string: string,\n  railCount: number,\n): string => {\n  const fence = buildFence(railCount);\n  fillEncodeFence(fence, string, railCount);\n  return fence.flat().join("");\n};\n\nexport const decodeRailFenceCipher = (\n  string: string,\n  railCount: number,\n): string => {\n  const fence = buildFence(railCount);\n  fillDecodeFence(fence, string, railCount);\n  return decodeFence(fence, railCount);\n};\n',C={title:"Rail Fence Cipher",description:"Rail Fence Cipher",hide_table_of_contents:!0},R=void 0,p={id:"education/computer-science/algorithms/algo/rail-fence-cipher",title:"Rail Fence Cipher",description:"Rail Fence Cipher",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/rail-fence-cipher.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/rail-fence-cipher",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/rail-fence-cipher",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/rail-fence-cipher.mdx",tags:[],version:"current",frontMatter:{title:"Rail Fence Cipher",description:"Rail Fence Cipher",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Radix Sort",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/radix-sort"},next:{title:"Rain Terraces",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/rain-terraces"}},m={},D=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function N(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(c.A,{queryString:"primary",children:[(0,i.jsx)(a.A,{value:"definition",label:"Definition",children:(0,i.jsx)(e.p,{children:'The Rail Fence Cipher is a transposition cipher technique that rearranges the plaintext characters by writing them in a zigzag pattern across a specified number of "rails" or lines. It is a simple form of encryption that can be easily implemented'})}),(0,i.jsx)(a.A,{value:"how",label:"Explanation",children:(0,i.jsx)(e.p,{children:"Arranging the plaintext characters in a zigzag pattern across a specified number of rails. First, the plaintext is written diagonally up and down the rails. Then, the ciphertext is formed by reading off the characters row by row"})}),(0,i.jsx)(a.A,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Choose the number of rails (usually referred to as the key) for the cipher"}),"\n",(0,i.jsx)(e.li,{children:"Write the plaintext diagonally across the rails in a zigzag pattern"}),"\n",(0,i.jsx)(e.li,{children:"Read the characters row by row to form the ciphertext"}),"\n"]})}),(0,i.jsx)(a.A,{value:"tips",label:"Tips",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"ensure that the number of rails chosen is less than the length of the plaintext to avoid errors"}),"\n",(0,i.jsx)(e.li,{children:"take care when writing and reading characters diagonally to maintain the integrity of the encryption"}),"\n"]})})]}),"\n",(0,i.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(c.A,{queryString:"primary",children:[(0,i.jsx)(a.A,{value:"practice",label:"Practice",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"rail_fence_cipher(plaintext, num_rails):\n    // Initialize an empty list for each rail\n    rails = []\n    for i from 0 to num_rails - 1:\n        rails.append([])\n\n    // Fill the rails with the plaintext characters\n    rail_num = 0\n    direction = 1 // Direction of the diagonal movement\n    for char in plaintext:\n        rails[rail_num].append(char)\n        rail_num += direction\n        // Change direction when reaching the first or last rail\n        if rail_num == 0 or rail_num == num_rails - 1:\n            direction = -direction\n\n    // Concatenate the characters from each rail to form the ciphertext\n    ciphertext = \"\"\n    for rail in rails:\n        ciphertext += ''.join(rail)\n\n    return ciphertext\n"})})}),(0,i.jsx)(a.A,{value:"solution",label:"Solution",children:(0,i.jsxs)(c.A,{queryString:"code",children:[(0,i.jsx)(a.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(l.A,{language:"go",children:o})}),(0,i.jsx)(a.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(l.A,{language:"java",children:u})}),(0,i.jsx)(a.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(l.A,{language:"js",children:s})}),(0,i.jsx)(a.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(l.A,{language:"kotlin",children:d})}),(0,i.jsx)(a.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(l.A,{language:"python",children:f})}),(0,i.jsx)(a.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(l.A,{language:"rust",children:g})}),(0,i.jsx)(a.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(l.A,{language:"ts",children:h})})]})})]})]})}function _(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(N,{...n})}):N(n)}}}]);