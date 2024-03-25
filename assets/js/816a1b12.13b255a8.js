"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2964],{28344:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>v,contentTitle:()=>j,default:()=>R,frontMatter:()=>b,metadata:()=>x,toc:()=>p});var r=i(11527),t=i(88672),s=i(29140),c=i(52360),l=i(52296);const a="package main\n\nfunc factorialRecursive(n int) int {\n    if n == 0 || n == 1 {\n        return 1\n    }\n    return n * factorialRecursive(n-1)\n}\n\nfunc factorialIterative(n int) int {\n    result := 1\n    for i := 1; i <= n; i++ {\n        result *= i\n    }\n    return result\n}\n\nfunc factorialMemoization(n int, memo map[int]int) int {\n    if n == 0 || n == 1 {\n        return 1\n    }\n    if val, ok := memo[n]; ok {\n        return val\n    }\n    memo[n] = n * factorialMemoization(n-1, memo)\n    return memo[n]\n}\n\nfunc factorialTabulation(n int) int {\n    table := make([]int, n+1)\n    table[0], table[1] = 1, 1\n    for i := 2; i <= n; i++ {\n        table[i] = i * table[i-1]\n    }\n    return table[n]\n}\n\nfunc fibonacciRecursive(n int) int {\n    if n <= 1 {\n        return n\n    }\n    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)\n}\n\nfunc fibonacciIterative(n int) int {\n    if n <= 1 {\n        return n\n    }\n    a, b := 0, 1\n    for i := 2; i <= n; i++ {\n        a, b = b, a+b\n    }\n    return b\n}\n\nfunc fibonacciMemoization(n int, memo map[int]int) int {\n    if n <= 1 {\n        return n\n    }\n    if val, ok := memo[n]; ok {\n        return val\n    }\n    memo[n] = fibonacciMemoization(n-1, memo) + fibonacciMemoization(n-2, memo)\n    return memo[n]\n}\n\nfunc fibonacciTabulation(n int) int {\n    if n <= 1 {\n        return n\n    }\n    table := make([]int, n+1)\n    table[1] = 1\n    for i := 2; i <= n; i++ {\n        table[i] = table[i-1] + table[i-2]\n    }\n    return table[n]\n}\n",o="import java.util.HashMap;\n\npublic class Recursion {\n\n  static int factorialRecursive(int n) {\n    if (n == 0 || n == 1) {\n      return 1;\n    }\n    return n * factorialRecursive(n - 1);\n  }\n\n  static int factorialIterative(int n) {\n    int result = 1;\n    for (int i = 1; i <= n; i++) {\n      result *= i;\n    }\n    return result;\n  }\n\n  static int factorialMemoization(int n, HashMap<Integer, Integer> memo) {\n    if (n == 0 || n == 1) {\n      return 1;\n    }\n    if (memo.containsKey(n)) {\n      return memo.get(n);\n    }\n    int result = n * factorialMemoization(n - 1, memo);\n    memo.put(n, result);\n    return result;\n  }\n\n  static int factorialTabulation(int n) {\n    int[] table = new int[n + 1];\n    table[0] = 1;\n    for (int i = 1; i <= n; i++) {\n      table[i] = i * table[i - 1];\n    }\n    return table[n];\n  }\n\n  static int fibonacciRecursive(int n) {\n    if (n <= 1) {\n      return n;\n    }\n    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);\n  }\n\n  static int fibonacciIterative(int n) {\n    if (n <= 1) {\n      return n;\n    }\n    int a = 0, b = 1;\n    for (int i = 2; i <= n; i++) {\n      int temp = a + b;\n      a = b;\n      b = temp;\n    }\n    return b;\n  }\n\n  static int fibonacciMemoization(int n, HashMap<Integer, Integer> memo) {\n    if (n <= 1) {\n      return n;\n    }\n    if (memo.containsKey(n)) {\n      return memo.get(n);\n    }\n    int result = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);\n    memo.put(n, result);\n    return result;\n  }\n\n  static int fibonacciTabulation(int n) {\n    if (n <= 1) {\n      return n;\n    }\n    int[] table = new int[n + 1];\n    table[1] = 1;\n    for (int i = 2; i <= n; i++) {\n      table[i] = table[i - 1] + table[i - 2];\n    }\n    return table[n];\n  }\n}\n",u="function factorialRecursive(n) {\n  if (n === 0 || n === 1) {\n    return 1;\n  }\n  return n * factorialRecursive(n - 1);\n}\n\nfunction factorialIterative(n) {\n  let result = 1;\n  for (let i = 1; i <= n; i++) {\n    result *= i;\n  }\n  return result;\n}\n\nfunction factorialMemoization(n, memo = {}) {\n  if (n === 0 || n === 1) {\n    return 1;\n  }\n  if (memo[n]) {\n    return memo[n];\n  }\n  const result = n * factorialMemoization(n - 1, memo);\n  memo[n] = result;\n  return result;\n}\n\nfunction factorialTabulation(n) {\n  const table = Array(n + 1).fill(1);\n  for (let i = 2; i <= n; i++) {\n    table[i] = i * table[i - 1];\n  }\n  return table[n];\n}\n\nfunction fibonacciRecursive(n) {\n  if (n <= 1) {\n    return n;\n  }\n  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);\n}\n\nfunction fibonacciIterative(n) {\n  if (n <= 1) {\n    return n;\n  }\n  let a = 0,\n    b = 1;\n  for (let i = 2; i <= n; i++) {\n    const temp = a + b;\n    a = b;\n    b = temp;\n  }\n  return b;\n}\n\nfunction fibonacciMemoization(n, memo = {}) {\n  if (n <= 1) {\n    return n;\n  }\n  if (memo[n]) {\n    return memo[n];\n  }\n  const result =\n    fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);\n  memo[n] = result;\n  return result;\n}\n\nfunction fibonacciTabulation(n) {\n  if (n <= 1) {\n    return n;\n  }\n  const table = [0, 1];\n  for (let i = 2; i <= n; i++) {\n    table[i] = table[i - 1] + table[i - 2];\n  }\n  return table[n];\n}\n",d="import java.util.HashMap\n\nfun factorialRecursive(n: Int): Int {\n    return if (n == 0 || n == 1) {\n        1\n    } else {\n        n * factorialRecursive(n - 1)\n    }\n}\n\nfun factorialIterative(n: Int): Int {\n    var result = 1\n    for (i in 2..n) {\n        result *= i\n    }\n    return result\n}\n\nfun factorialMemoization(n: Int, memo: HashMap<Int, Int>): Int {\n    return if (n == 0 || n == 1) {\n        1\n    } else {\n        if (memo.containsKey(n)) {\n            memo[n]!!\n        } else {\n            val result = n * factorialMemoization(n - 1, memo)\n            memo[n] = result\n            result\n        }\n    }\n}\n\nfun factorialTabulation(n: Int): Int {\n    val table = IntArray(n + 1) { 1 }\n    for (i in 2..n) {\n        table[i] = i * table[i - 1]\n    }\n    return table[n]\n}\n\nfun fibonacciRecursive(n: Int): Int {\n    return if (n <= 1) {\n        n\n    } else {\n        fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)\n    }\n}\n\nfun fibonacciIterative(n: Int): Int {\n    var a = 0\n    var b = 1\n    for (i in 2..n) {\n        val temp = a + b\n        a = b\n        b = temp\n    }\n    return b\n}\n\nfun fibonacciMemoization(n: Int, memo: HashMap<Int, Int>): Int {\n    return if (n <= 1) {\n        n\n    } else {\n        if (memo.containsKey(n)) {\n            memo[n]!!\n        } else {\n            val result = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo)\n            memo[n] = result\n            result\n        }\n    }\n}\n\nfun fibonacciTabulation(n: Int): Int {\n    if (n <= 1) {\n        return n\n    } else {\n        val table = IntArray(n + 1)\n        table[1] = 1\n        for (i in 2..n) {\n            table[i] = table[i - 1] + table[i - 2]\n        }\n        return table[n]\n    }\n}\n",h="def factorial_recursive(n):\n    if n == 0 or n == 1:\n        return 1\n    return n * factorial_recursive(n - 1)\n\ndef factorial_iterative(n):\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n\ndef factorial_memoization(n, memo={}):\n    if n == 0 or n == 1:\n        return 1\n    if n not in memo:\n        memo[n] = n * factorial_memoization(n - 1, memo)\n    return memo[n]\n\ndef factorial_tabulation(n):\n    table = [1] * (n + 1)\n    for i in range(2, n + 1):\n        table[i] = i * table[i - 1]\n    return table[n]\n\ndef fibonacci_recursive(n):\n    if n <= 1:\n        return n\n    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)\n\ndef fibonacci_iterative(n):\n    if n <= 1:\n        return n\n    a, b = 0, 1\n    for _ in range(n - 1):\n        a, b = b, a + b\n    return b\n\ndef fibonacci_memoization(n, memo={}):\n    if n <= 1:\n        return n\n    if n not in memo:\n        memo[n] = fibonacci_memoization(n - 1, memo) + fibonacci_memoization(n - 2, memo)\n    return memo[n]\n\ndef fibonacci_tabulation(n):\n    if n <= 1:\n        return n\n    table = [0] * (n + 1)\n    table[1] = 1\n    for i in range(2, n + 1):\n        table[i] = table[i - 1] + table[i - 2]\n    return table[n]\n",m="fn factorial_recursive(n: u64) -> u64 {\n    if n == 0 || n == 1 {\n        1\n    } else {\n        n * factorial_recursive(n - 1)\n    }\n}\n\nfn factorial_iterative(n: u64) -> u64 {\n    (1..=n).product()\n}\n\nuse std::collections::HashMap;\nfn factorial_memoization(n: u64, memo: &mut HashMap<u64, u64>) -> u64 {\n    if n == 0 || n == 1 {\n        1\n    } else {\n        if let Some(&result) = memo.get(&n) {\n            result\n        } else {\n            let result = n * factorial_memoization(n - 1, memo);\n            memo.insert(n, result);\n            result\n        }\n    }\n}\n\nfn factorial_tabulation(n: u64) -> u64 {\n    let mut table = vec![1; (n + 1) as usize];\n    for i in 2..=n as usize {\n        table[i] = i as u64 * table[i - 1];\n    }\n    table[n as usize]\n}\n\nfn fibonacci_recursive(n: u64) -> u64 {\n    if n <= 1 {\n        n\n    } else {\n        fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)\n    }\n}\n\nfn fibonacci_iterative(n: u64) -> u64 {\n    let (mut a, mut b) = (0, 1);\n    for _ in 2..=n {\n        let temp = a + b;\n        a = b;\n        b = temp;\n    }\n    b\n}\n\nfn fibonacci_memoization(n: u64, memo: &mut HashMap<u64, u64>) -> u64 {\n    if n <= 1 {\n        n\n    } else {\n        if let Some(&result) = memo.get(&n) {\n            result\n        } else {\n            let result = fibonacci_memoization(n - 1, memo) + fibonacci_memoization(n - 2, memo);\n            memo.insert(n, result);\n            result\n        }\n    }\n}\n\nfn fibonacci_tabulation(n: u64) -> u64 {\n    if n <= 1 {\n        n\n    } else {\n        let mut table = vec![0; (n + 1) as usize];\n        table[1] = 1;\n        for i in 2..=n as usize {\n            table[i] = table[i - 1] + table[i - 2];\n        }\n        table[n as usize]\n    }\n}\n",f="function factorialRecursive(n: number): number {\n  return n <= 1 ? 1 : n * factorialRecursive(n - 1);\n}\n\nfunction factorialIterative(n: number): number {\n  let result = 1;\n  for (let i = 1; i <= n; i++) {\n    result *= i;\n  }\n  return result;\n}\n\nfunction factorialMemoization(\n  n: number,\n  memo: Map<number, number> = new Map(),\n): number {\n  if (n <= 1) {\n    return 1;\n  }\n\n  if (memo.has(n)) {\n    return memo.get(n)!;\n  }\n\n  const result = n * factorialMemoization(n - 1, memo);\n  memo.set(n, result);\n  return result;\n}\n\nfunction factorialTabulation(n: number): number {\n  const table = new Array(n + 1).fill(1);\n  for (let i = 2; i <= n; i++) {\n    table[i] = i * table[i - 1];\n  }\n  return table[n];\n}\n\nfunction fibonacciRecursive(n: number): number {\n  return n <= 1 ? n : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);\n}\n\nfunction fibonacciIterative(n: number): number {\n  if (n <= 1) {\n    return n;\n  }\n  let a = 0,\n    b = 1;\n  for (let i = 2; i <= n; i++) {\n    const temp = a + b;\n    a = b;\n    b = temp;\n  }\n  return b;\n}\n\nfunction fibonacciMemoization(\n  n: number,\n  memo: Map<number, number> = new Map(),\n): number {\n  if (n <= 1) {\n    return n;\n  }\n\n  if (memo.has(n)) {\n    return memo.get(n)!;\n  }\n\n  const result =\n    fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);\n  memo.set(n, result);\n  return result;\n}\n\nfunction fibonacciTabulation(n: number): number {\n  if (n <= 1) {\n    return n;\n  }\n\n  const table = new Array(n + 1).fill(0);\n  table[1] = 1;\n\n  for (let i = 2; i <= n; i++) {\n    table[i] = table[i - 1] + table[i - 2];\n  }\n\n  return table[n];\n}\n",b={title:"Basics",description:"Recursion: Basics"},j="Recursion: Basics",x={id:"education/computer-science/recursion/basics/basics",title:"Basics",description:"Recursion: Basics",source:"@site/docs/education/01-computer-science/08-recursion/01-basics/01-basics.mdx",sourceDirName:"education/01-computer-science/08-recursion/01-basics",slug:"/education/computer-science/recursion/basics/",permalink:"/tech-labs/docs/education/computer-science/recursion/basics/",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/08-recursion/01-basics/01-basics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Basics",description:"Recursion: Basics"},sidebar:"education",previous:{title:"Recursion",permalink:"/tech-labs/docs/category/recursion"},next:{title:"Data Structures",permalink:"/tech-labs/docs/category/data-structures"}},v={},p=[{value:"Definition",id:"definition",level:2},{value:"Terminology",id:"terminology",level:3},{value:"Advantages",id:"advantages",level:2},{value:"Disadvantages",id:"disadvantages",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Algorithmic Steps",id:"algorithmic-steps",level:2},{value:"Memory Allocation",id:"memory-allocation",level:2},{value:"Comparison",id:"comparison",level:2},{value:"Step-by-Step",id:"step-by-step",level:2},{value:"Practice",id:"practice",level:2}];function g(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"recursion-basics",children:"Recursion: Basics"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:i(33913).Z+""})}),"\n",(0,r.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Recursion"})," is a programming concept where a function calls itself in its own definition."]}),"\n",(0,r.jsx)(e.h3,{id:"terminology",children:"Terminology"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Base Case:"})," The condition that stops the recursion"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"factorial(n):\n if n <= 0: // base case\n   return 1\n else:\n   return n * factorial(n-1)\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Recursive Case:"})," The case where the function calls itself"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Stack Overflow:"})," If the base case is not reached or defined, a stack overflow error may occur due to the continuous (infinite) addition of functions to the stack"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Direct Recursion:"})," Function calls itself"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Indirect Recursion:"})," One function calling another, forming a cycle"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Tailed Recursion:"})," When the recursive call is the last operation in the function, and its result is directly returned"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"factorial_tail(n, result=1):\n  if n <= 1:\n    return result\n  else:\n    return factorial_tail(n-1, n*result)\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Non-Tailed Recursion:"})," When the recursive call is not the last operation"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Mutual Recursion:"})," Two or more functions call each other in a cycle"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"is_even(n):\n  if n == 0:\n    return True\n  else:\n    return is_odd(n-1)\n\nis_odd(n):\n  if n == 0:\n    return False\n  else:\n    return is_even(n-1)\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Tabulation:"})," Tabulation is a bottom-up approach in dynamic programming that involves storing subproblem results in a table and employs an iterative implementation. This method is particularly effective for problems with a substantial number of inputs and is preferred when subproblems do not overlap"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Memoization:"})," Memoization is a top-down dynamic programming approach that involves caching the results of function calls through a recursive implementation. This method is effective for problems with a relatively small set of inputs, especially when the subproblems exhibit overlapping subproblems"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"advantages",children:"Advantages"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Elegant solution to complex problems"}),"\n",(0,r.jsx)(e.li,{children:"Simplifies code and improves readability"}),"\n",(0,r.jsx)(e.li,{children:"Can lead to efficient solutions"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"disadvantages",children:"Disadvantages"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"May lead to infinite recursion if not handled properly"}),"\n",(0,r.jsx)(e.li,{children:"Can be less efficient in certain cases compared to iterative solutions"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Mathematical problems like factorial, Fibonacci"}),"\n",(0,r.jsx)(e.li,{children:"Tree and graph traversals"}),"\n",(0,r.jsx)(e.li,{children:"Divide and conquer algorithms"}),"\n",(0,r.jsx)(e.li,{children:"Backtracking problems"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"algorithmic-steps",children:"Algorithmic Steps"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Define a base case"}),": Identify the simplest case for which the solution is known"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Define a recursive case"}),": Break the problem into smaller subproblems and call the function recursively"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Ensure termination"}),": Make sure the recursive function reaches the base case to avoid infinite loops"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Combine solutions"}),": Combine the solutions of subproblems to solve the original problem"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"memory-allocation",children:"Memory Allocation"}),"\n",(0,r.jsx)(e.p,{children:"Memory is allocated on the stack for each function call, with each call having its own copy of local variables. De-allocation occurs when the base case is reached."}),"\n",(0,r.jsx)(e.h2,{id:"comparison",children:"Comparison"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Method"}),(0,r.jsx)("th",{children:"Amount of calls to find 5th element"}),(0,r.jsx)("th",{children:"Amount of calls to find 10th element"}),(0,r.jsx)("th",{children:"Amount of calls to find 5th using Memoization/Tabulation"}),(0,r.jsx)("th",{children:"Amount of calls to find 10th using Memoization/Tabulation"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Factorial"}),(0,r.jsx)("td",{children:"6"}),(0,r.jsx)("td",{children:"11"}),(0,r.jsx)("td",{children:"3"}),(0,r.jsx)("td",{children:"6"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Fibonacci"}),(0,r.jsx)("td",{children:"15"}),(0,r.jsx)("td",{children:"177"}),(0,r.jsx)("td",{children:"9"}),(0,r.jsx)("td",{children:"19"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"step-by-step",children:"Step-by-Step"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(c.Z,{value:"fibonacci",label:"Fibonacci",children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:i(40493).Z+""})}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Mathematical formula"}),": ",(0,r.jsx)(e.code,{children:"F(n) = F(n\u22121) + F(n\u22122)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Initial Call"}),": start with the initial call to ",(0,r.jsx)(e.code,{children:"fibonacci(5)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Base Case Check"}),": function checks if the base case is met. In this case, if ",(0,r.jsx)(e.code,{children:"n"})," is 0 or 1, the Fibonacci number is ",(0,r.jsx)(e.code,{children:"n"}),". Since 5 is not 0 or 1, we proceed to the recursive case"]}),"\n"]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"if n == 0 or n == 1:\nreturn n\n"})}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Recursive Case"}),": since ",(0,r.jsx)(e.code,{children:"n"})," is 5, we enter the recursive case"]}),"\n"]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"else:\nreturn fibonacci(n - 1) + fibonacci(n - 2)\n"})}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"First Recursive Call"}),": function makes a recursive call to calculate ",(0,r.jsx)(e.code,{children:"fibonacci(4)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Base Case Check (First Recursive Call)"}),": base case is not met for ",(0,r.jsx)(e.code,{children:"n = 4"}),", so we proceed to the recursive case"]}),"\n"]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"else:\nreturn fibonacci(4 - 1) + fibonacci(4 - 2)\n"})}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Second Recursive Call (First Nested)"}),": function makes another recursive call to calculate ",(0,r.jsx)(e.code,{children:"fibonacci(3)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Base Case Check (First Nested Recursive Call)"}),": once again, the base case is not met for ",(0,r.jsx)(e.code,{children:"n=3"})]}),"\n"]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"else:\nreturn fibonacci(3 - 1) + fibonacci(3 - 2)\n"})}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Third Recursive Call (First Nested)"}),": another recursive call is made to calculate ",(0,r.jsx)(e.code,{children:"fibonacci(2)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Base Case Check (First Nested Recursive Call)"}),": base case is met for ",(0,r.jsx)(e.code,{children:"n = 2"}),". The function returns 2"]}),"\n"]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"if n == 0 or n == 1:\nreturn n\n"})}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"First Nested Recursive Return"}),": recursive call ",(0,r.jsx)(e.code,{children:"fibonacci(2)"})," returns 2"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Second Nested Recursive Return (First Nested)"}),": recursive call ",(0,r.jsx)(e.code,{children:"fibonacci(3)"})," receives the result (2) and makes another recursive call to ",(0,r.jsx)(e.code,{children:"fibonacci(1)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Base Case Check (Second Nested Recursive Call)"}),": base case is met for ",(0,r.jsx)(e.code,{children:"n = 1"}),". The function returns 1"]}),"\n"]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"if n == 0 or n == 1:\nreturn n\n"})}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Second Nested Recursive Return"}),": The recursive call ",(0,r.jsx)(e.code,{children:"fibonacci(1)"})," returns ",(0,r.jsx)(e.code,{children:"1"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"First Recursive Return"}),": recursive call ",(0,r.jsx)(e.code,{children:"fibonacci(3)"})," receives the results (",(0,r.jsx)(e.strong,{children:"2 and 1"}),") and returns ",(0,r.jsx)(e.code,{children:"3"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Second Recursive Return"}),": recursive call ",(0,r.jsx)(e.code,{children:"fibonacci(4)"})," receives the results (",(0,r.jsx)(e.strong,{children:"3 and 2"}),") and returns ",(0,r.jsx)(e.code,{children:"5"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Final Return"}),": initial call to ",(0,r.jsx)(e.code,{children:"fibonacci(5)"})," receives the result (",(0,r.jsx)(e.strong,{children:"5"}),") and returns ",(0,r.jsx)(e.code,{children:"5 + 3 = 8"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Result"}),": final result is ",(0,r.jsx)(e.code,{children:"fibonacci(5) = 8"})]}),"\n"]})]}),(0,r.jsxs)(c.Z,{value:"factorial",label:"Factorial",children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Mathematical formula"}),": ",(0,r.jsx)(e.code,{children:"n! = n * (n\u22121) * (n\u22122) * \u2026 * 2 * 1"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Initial Call"}),": ",(0,r.jsx)(e.code,{children:"factorial(5)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Base Case Check"}),": function checks if the base case is met. In this case, if ",(0,r.jsx)(e.code,{children:"n"})," is 0 or 1, the factorial is 1. Since 5 is not 0 or 1, we proceed to the recursive case"]}),"\n"]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"if n == 0 or n == 1:\nreturn 1\n"})}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Recursive Case"}),": since ",(0,r.jsx)(e.code,{children:"n"})," is 5, we enter the recursive case"]}),"\n"]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"else:\nreturn n * factorial(n - 1)\n"})}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Recursive Call"}),": The function makes a recursive call to calculate ",(0,r.jsx)(e.code,{children:"factorial(4)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Base Case Check (Recursive Call)"}),": again, the base case is not met for ",(0,r.jsx)(e.code,{children:"n = 4"}),", so we proceed to the recursive case"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Recursive Call (Nested)"}),": function makes another recursive call to calculate ",(0,r.jsx)(e.code,{children:"factorial(3)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Base Case Check (Nested Recursive Call)"}),": once again, the base case is not met for ",(0,r.jsx)(e.code,{children:"n = 3"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Recursive Call (Further Nested)"}),": another recursive call is made to calculate ",(0,r.jsx)(e.code,{children:"factorial(2)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Base Case Check (Further Nested Recursive Call)"}),": the base case is not met for ",(0,r.jsx)(e.code,{children:"n = 2"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Recursive Call (Deeper Nesting)"}),": final recursive call is made to calculate ",(0,r.jsx)(e.code,{children:"factorial(1)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Base Case Check (Deeper Nesting Recursive Call)"}),": now, the base case is met for ",(0,r.jsx)(e.code,{children:"n = 1"}),". The function returns 1"]}),"\n"]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"if n == 0 or n == 1:\nreturn 1\n"})}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Recursive Return (Deeper Nesting)"}),": recursive call ",(0,r.jsx)(e.code,{children:"factorial(1)"})," returns ",(0,r.jsx)(e.code,{children:"1"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Recursive Return (Further Nesting)"}),": recursive call ",(0,r.jsx)(e.code,{children:"factorial(2)"})," receives the result (",(0,r.jsx)(e.strong,{children:"1"}),") and returns ",(0,r.jsx)(e.code,{children:"2 * 1 = 2"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Recursive Return (Nested)"}),": recursive call ",(0,r.jsx)(e.code,{children:"factorial(3)"})," receives the result (",(0,r.jsx)(e.strong,{children:"2"}),") and returns ",(0,r.jsx)(e.code,{children:"3 * 2 = 6"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Recursive Return"}),": recursive call ",(0,r.jsx)(e.code,{children:"factorial(4)"})," receives the result (",(0,r.jsx)(e.strong,{children:"6"}),") and returns",(0,r.jsx)(e.code,{children:"4 * 6 = 24"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Final Return"}),": initial call to ",(0,r.jsx)(e.code,{children:"factorial(5)"})," receives the result (",(0,r.jsx)(e.strong,{children:"24"}),") and returns ",(0,r.jsx)(e.code,{children:"5 * 24 = 120"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Result"}),": final result is ",(0,r.jsx)(e.code,{children:"5! = 120"})]}),"\n"]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{value:"practice",label:"Practice",children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{value:"factorialRecursive",label:"Factorial Recursive",attributes:{className:"tabs__vertical"},children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"factorial_recursive(n):\n  if n == 0 or n == 1:\n    return 1\nreturn n * factorial_recursive(n - 1)\n"})})}),(0,r.jsx)(c.Z,{value:"factorialIterative",label:"Factorial Iterative",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"factorial_iterative(n):\n  result = 1\n  for i in range(1, n + 1):\n    result *= i\n  return result\n"})})}),(0,r.jsx)(c.Z,{value:"factorialMemoization",label:"Factorial Memoization",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"factorial_memoization(n, memo={}):\n  if n == 0 or n == 1:\n    return 1\n  if n not in memo:\n    memo[n] = n * factorial_memoization(n - 1, memo)\n  return memo[n]\n"})})}),(0,r.jsx)(c.Z,{value:"factorialTabulation",label:"Factorial Tabulation",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"factorial_tabulation(n):\n  table = [1] * (n + 1)\n  for i in range(2, n + 1):\n    table[i] = i * table[i - 1]\n  return table[n]\n"})})}),(0,r.jsx)(c.Z,{value:"fibonacciRecursive",label:"Fibonacci Recursive",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"fibonacci_recursive(n):\n  if n <= 1:\n    return n\n  return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)\n"})})}),(0,r.jsx)(c.Z,{value:"fibonacciIterative",label:"Fibonacci Iterative",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"fibonacci_iterative(n):\n  if n <= 1:\n    return n\n  a, b = 0, 1\n  for _ in range(n - 1):\n    a, b = b, a + b\n  return b\n"})})}),(0,r.jsx)(c.Z,{value:"fibonacciMemoization",label:"Fibonacci Memoization",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"fibonacci_memoization(n, memo={}):\n  if n <= 1:\n    return n\n  if n not in memo:\n    memo[n] = fibonacci_memoization(n - 1, memo) + fibonacci_memoization(n - 2, memo)\n  return memo[n]\n"})})}),(0,r.jsx)(c.Z,{value:"fibonacciTabulation",label:"Fibonacci Tabulation",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"fibonacci_tabulation(n):\n  if n <= 1:\n    return n\n  table = [0] * (n + 1)\n  table[1] = 1\n  for i in range(2, n + 1):\n    table[i] = table[i - 1] + table[i - 2]\n  return table[n]\n"})})})]})}),(0,r.jsx)(c.Z,{value:"solution",label:"Solution",children:(0,r.jsxs)(s.Z,{queryString:"code",children:[(0,r.jsx)(c.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,r.jsx)(l.Z,{language:"go",children:a})}),(0,r.jsx)(c.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,r.jsx)(l.Z,{language:"java",children:o})}),(0,r.jsx)(c.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,r.jsx)(l.Z,{language:"js",children:u})}),(0,r.jsx)(c.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,r.jsx)(l.Z,{language:"kotlin",children:d})}),(0,r.jsx)(c.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,r.jsx)(l.Z,{language:"python",children:h})}),(0,r.jsx)(c.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,r.jsx)(l.Z,{language:"rust",children:m})}),(0,r.jsx)(c.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,r.jsx)(l.Z,{language:"ts",children:f})})]})})]})]})}function R(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(g,{...n})}):g(n)}},33913:(n,e,i)=>{i.d(e,{Z:()=>r});const r=i.p+"assets/images/pow-71426e17e67e705f5cbc5633fc2a4c93.svg"},40493:(n,e,i)=>{i.d(e,{Z:()=>r});const r=i.p+"assets/images/recursion-8e67e74ee22f3dfdf9524eae94474dc8.svg"}}]);