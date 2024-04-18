"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3138],{63114:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>j,contentTitle:()=>f,default:()=>P,frontMatter:()=>u,metadata:()=>g,toc:()=>y});var t=i(11527),r=i(84135),s=i(40521),a=i(74109),c=i(80035);const l='package main\n\nimport (\n\t"math"\n)\n\nfunc maxProfitDC(prices []int) int {\n\treturn maxProfitHelper(prices, 0, len(prices)-1)\n}\n\nfunc maxProfitHelper(prices []int, start, end int) int {\n\tif start >= end {\n\t\treturn 0\n\t}\n\n\tmid := start + (end-start)/2\n\n\tleftProfit := maxProfitHelper(prices, start, mid)\n\trightProfit := maxProfitHelper(prices, mid+1, end)\n\tcrossProfit := maxCrossProfit(prices, start, mid, end)\n\n\treturn max(leftProfit, max(rightProfit, crossProfit))\n}\n\nfunc maxCrossProfit(prices []int, start, mid, end int) int {\n\tleftMax := math.MinInt64\n\trightMax := math.MinInt64\n\n\tleftSum := 0\n\tfor i := mid; i >= start; i-- {\n\t\tleftSum += prices[i]\n\t\tleftMax = max(leftMax, leftSum)\n\t}\n\n\trightSum := 0\n\tfor i := mid + 1; i <= end; i++ {\n\t\trightSum += prices[i]\n\t\trightMax = max(rightMax, rightSum)\n\t}\n\n\treturn leftMax + rightMax\n}\n\nfunc max(a, b int) int {\n\tif a > b {\n\t\treturn a\n\t}\n\treturn b\n}\n',o="public class Main {\n\n  public int maxProfitDC(int[] prices) {\n    return maxProfitHelper(prices, 0, prices.length - 1);\n  }\n\n  private int maxProfitHelper(int[] prices, int start, int end) {\n    if (start >= end) {\n      return 0;\n    }\n\n    int mid = start + (end - start) / 2;\n\n    int leftProfit = maxProfitHelper(prices, start, mid);\n    int rightProfit = maxProfitHelper(prices, mid + 1, end);\n    int crossProfit = maxCrossProfit(prices, start, mid, end);\n\n    return Math.max(leftProfit, Math.max(rightProfit, crossProfit));\n  }\n\n  private int maxCrossProfit(int[] prices, int start, int mid, int end) {\n    int leftMax = Integer.MIN_VALUE;\n    int rightMax = Integer.MIN_VALUE;\n\n    int leftSum = 0;\n    for (int i = mid; i >= start; i--) {\n      leftSum += prices[i];\n      leftMax = Math.max(leftMax, leftSum);\n    }\n\n    int rightSum = 0;\n    for (int i = mid + 1; i <= end; i++) {\n      rightSum += prices[i];\n      rightMax = Math.max(rightMax, rightSum);\n    }\n\n    return leftMax + rightMax;\n  }\n}\n",d="function maxProfitDC(prices) {\n  return maxProfitHelper(prices, 0, prices.length - 1);\n}\n\nfunction maxProfitHelper(prices, start, end) {\n  if (start >= end) {\n    return 0;\n  }\n\n  const mid = Math.floor((start + end) / 2);\n\n  const leftProfit = maxProfitHelper(prices, start, mid);\n  const rightProfit = maxProfitHelper(prices, mid + 1, end);\n  const crossProfit = maxCrossProfit(prices, start, mid, end);\n\n  return Math.max(leftProfit, rightProfit, crossProfit);\n}\n\nfunction maxCrossProfit(prices, start, mid, end) {\n  let leftMax = -Infinity;\n  let rightMax = -Infinity;\n\n  let leftSum = 0;\n  for (let i = mid; i >= start; i--) {\n    leftSum += prices[i];\n    leftMax = Math.max(leftMax, leftSum);\n  }\n\n  let rightSum = 0;\n  for (let i = mid + 1; i <= end; i++) {\n    rightSum += prices[i];\n    rightMax = Math.max(rightMax, rightSum);\n  }\n\n  return leftMax + rightMax;\n}\n",m="fun maxProfitDC(prices: IntArray): Int {\n    return maxProfitHelper(prices, 0, prices.size - 1)\n}\n\nfun maxProfitHelper(prices: IntArray, start: Int, end: Int): Int {\n    if (start >= end) return 0\n\n    val mid = start + (end - start) / 2\n\n    val leftProfit = maxProfitHelper(prices, start, mid)\n    val rightProfit = maxProfitHelper(prices, mid + 1, end)\n    val crossProfit = maxCrossProfit(prices, start, mid, end)\n\n    return maxOf(leftProfit, rightProfit, crossProfit)\n}\n\nfun maxCrossProfit(prices: IntArray, start: Int, mid: Int, end: Int): Int {\n    var leftMax = Int.MIN_VALUE\n    var rightMax = Int.MIN_VALUE\n\n    var leftSum = 0\n    for (i in mid downTo start) {\n        leftSum += prices[i]\n        leftMax = maxOf(leftMax, leftSum)\n    }\n\n    var rightSum = 0\n    for (i in mid + 1..end) {\n        rightSum += prices[i]\n        rightMax = maxOf(rightMax, rightSum)\n    }\n\n    return leftMax + rightMax\n}\n",p="def maxProfitOnePass(prices):\n    if not prices:\n        return 0\n\n    max_profit = 0\n    min_price = prices[0]\n\n    for price in prices:\n        min_price = min(min_price, price)\n        max_profit = max(max_profit, price - min_price)\n\n    return max_profit\n",h="fn max_profit_one_pass(prices: Vec<i32>) -> i32 {\n    if prices.is_empty() {\n        return 0;\n    }\n\n    let mut max_profit = 0;\n    let mut min_price = prices[0];\n\n    for price in prices {\n        min_price = min_price.min(price);\n        max_profit = max_profit.max(price - min_price);\n    }\n\n    max_profit\n}\n",x="function maxProfitOnePass(prices: number[]): number {\n  if (prices.length === 0) return 0;\n\n  let maxProfit = 0;\n  let minPrice = prices[0];\n\n  for (let i = 1; i < prices.length; i++) {\n    minPrice = Math.min(minPrice, prices[i]);\n    maxProfit = Math.max(maxProfit, prices[i] - minPrice);\n  }\n\n  return maxProfit;\n}\n",u={title:"Best Time To Buy Sell Stocks",description:"Best Time To Buy Sell Stocks",hide_table_of_contents:!0},f=void 0,g={id:"education/computer-science/algorithms/algo/best-time-to-buy-sell-stocks",title:"Best Time To Buy Sell Stocks",description:"Best Time To Buy Sell Stocks",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/best-time-to-buy-sell-stocks.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/best-time-to-buy-sell-stocks",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/best-time-to-buy-sell-stocks",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/best-time-to-buy-sell-stocks.mdx",tags:[],version:"current",frontMatter:{title:"Best Time To Buy Sell Stocks",description:"Best Time To Buy Sell Stocks",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Bellman-Ford Algorithm",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/bellman-ford-algorithm"},next:{title:"Binary Floating Point",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/binary-floating-point"}},j={},y=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function b(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsxs)(s.Z,{queryString:"primary",children:[(0,t.jsx)(a.Z,{value:"definition",label:"Definition",children:(0,t.jsx)(n.p,{children:"Problem of finding the maximum profit from buying and selling stocks at the right times"})}),(0,t.jsx)(a.Z,{value:"how",label:"Explanation",children:(0,t.jsx)(n.p,{children:"To find the best time to buy and sell stocks, start by initializing variables to track the minimum stock price and maximum profit. Then, go through each day's stock price, updating the minimum price encountered so far. Calculate the potential profit if selling at the current price and update the maximum profit if this exceeds the current maximum. Finally, return the maximum profit found"})}),(0,t.jsxs)(a.Z,{value:"guidance",label:"Guidance",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Detailed Description"})}),(0,t.jsxs)(n.p,{children:["Say you have an array prices for which the ",(0,t.jsx)(n.code,{children:"i-th"})," element is the price of a given stock on day ",(0,t.jsx)(n.code,{children:"i"}),". Find the maximum profit. You may complete as many transactions as you like (i.e., buy one and\nsell one share of the stock multiple times)."]}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again)."}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example #1"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: [7, 1, 5, 3, 6, 4]\nOutput: 7\n"})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Explanation"}),": Buy on day ",(0,t.jsx)(n.code,{children:"2"})," (",(0,t.jsx)(n.code,{children:"price = 1"}),") and sell on day ",(0,t.jsx)(n.code,{children:"3"})," (",(0,t.jsx)(n.code,{children:"price = 5"}),"), ",(0,t.jsx)(n.code,{children:"profit = 5 - 1 = 4"}),". Then buy on day ",(0,t.jsx)(n.code,{children:"4"})," (",(0,t.jsx)(n.code,{children:"price = 3"}),") and sell on day ",(0,t.jsx)(n.code,{children:"5"})," (",(0,t.jsx)(n.code,{children:"price = 6"}),"), ",(0,t.jsx)(n.code,{children:"profit = 6 - 3 = 3"}),"."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example #2"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: [1, 2, 3, 4, 5]\nOutput: 4\n"})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Explanation"}),": Buy on day ",(0,t.jsx)(n.code,{children:"1"})," (",(0,t.jsx)(n.code,{children:"price = 1"}),") and sell on day ",(0,t.jsx)(n.code,{children:"5"})," (",(0,t.jsx)(n.code,{children:"price = 5"}),"), ",(0,t.jsx)(n.code,{children:"profit = 5 - 1 = 4"}),". Note that you cannot buy on day ",(0,t.jsx)(n.code,{children:"1"}),", buy on day ",(0,t.jsx)(n.code,{children:"2"})," and sell them later, as you are engaging\nmultiple transactions at the same time. You must sell before buying again."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example #3"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: [7, 6, 4, 3, 1]\nOutput: 0\n"})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Explanation"}),": In this case, no transaction is done, i.e. max ",(0,t.jsx)(n.code,{children:"profit = 0"}),"."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Divide and Conquer"})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Complexity"}),": Time: ",(0,t.jsxs)("code",{className:"horrible",style:{whiteSpace:"pre"},children:["O(2",(0,t.jsx)("sup",{children:"n"}),")"]})," Space: ",(0,t.jsx)("code",{className:"fair",style:{whiteSpace:"pre"},children:"O(n)"})]}),(0,t.jsxs)(n.p,{children:["Using a divide and conquer approach, we can exhaustively explore all buying and selling combinations to find the most profitable one. For instance, given an array of prices like ",(0,t.jsx)(n.code,{children:"[7, 6, 4, 3, 1]"}),",\nat each step, we decide whether to keep the money or buy/sell at the current price, recursively considering the remaining stocks."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Peak Valley"})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Complexity"}),": Time: ",(0,t.jsx)("code",{className:"fair",style:{whiteSpace:"pre"},children:"O(n)"})," Space: ",(0,t.jsx)("code",{className:"excellent",style:{whiteSpace:"pre"},children:"O(1)"})]}),(0,t.jsxs)(n.p,{children:["If we plot the prices array ",(0,t.jsx)(n.code,{children:"[7, 1, 5, 3, 6, 4]"})," we may notice that the points of interest are the consecutive valleys and peaks"]}),(0,t.jsx)(n.mermaid,{value:"---\nconfig:\nxyChart:\nwidth: 900\n---\nxychart-beta\nx-axis [1,2,3,4,5,6]\ny-axis 0 --\x3e 8\nbar [7,1,5,3,6,4]\nline [7,1,5,3,6,4]"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Accumulator"})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Complexity"}),": Time: ",(0,t.jsx)("code",{className:"fair",children:"O(n)"})," Space: ",(0,t.jsx)("code",{className:"excellent",children:"O(1)"})]}),(0,t.jsxs)(n.p,{children:["With prices array ",(0,t.jsx)(n.code,{children:"[1, 7, 2, 3, 6, 7, 6, 7]"})," we may notice that we don't need to keep track of all the points of interest. Instead, we may simply add the price difference for all growing segments\nof the chart which eventually sums up to the highest possible profit"]}),(0,t.jsx)(n.mermaid,{value:"---\nconfig:\nxyChart:\nwidth: 900\n---\nxychart-beta\nx-axis [1,2,3,4,5,6,7,8]\ny-axis 0 --\x3e 8\nbar [1,7,2,3,6,7,6,7]\nline [1,7,2,3,6,7,6,7]"})]}),(0,t.jsx)(a.Z,{value:"tips",label:"Tips",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ensure the algorithm handles edge cases like an empty list of stock prices"}),"\n",(0,t.jsx)(n.li,{children:"emphasize efficiency to handle large datasets efficiently"}),"\n",(0,t.jsx)(n.li,{children:"utilize dynamic programming to optimize time complexity"}),"\n"]})})]}),"\n",(0,t.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,t.jsxs)(s.Z,{queryString:"primary",children:[(0,t.jsx)(a.Z,{value:"practice",label:"Practice",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"function maxProfit(prices):\n  if prices is empty:\n    return 0\n\n  min_price = infinity\n  max_profit = 0\n\n  for price in prices:\n    min_price = min(min_price, price)\n    potential_profit = price - min_price\n    max_profit = max(max_profit, potential_profit)\n\n  return max_profit\n"})})}),(0,t.jsx)(a.Z,{value:"solution",label:"Solution",children:(0,t.jsxs)(s.Z,{queryString:"code",children:[(0,t.jsx)(a.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,t.jsx)(c.Z,{language:"go",children:l})}),(0,t.jsx)(a.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,t.jsx)(c.Z,{language:"java",children:o})}),(0,t.jsx)(a.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,t.jsx)(c.Z,{language:"js",children:d})}),(0,t.jsx)(a.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,t.jsx)(c.Z,{language:"kotlin",children:m})}),(0,t.jsx)(a.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,t.jsx)(c.Z,{language:"python",children:p})}),(0,t.jsx)(a.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,t.jsx)(c.Z,{language:"rust",children:h})}),(0,t.jsx)(a.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,t.jsx)(c.Z,{language:"ts",children:x})})]})})]})]})}function P(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}}}]);