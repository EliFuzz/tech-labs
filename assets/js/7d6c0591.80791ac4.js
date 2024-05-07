"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9432],{3372:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var t=s(86070),r=s(27468);const n={title:"Techniques",description:"Techniques / Patterns for Common Algorithms",hide_table_of_contents:!0},o=void 0,a={id:"education/computer-science/algorithms/techniques",title:"Techniques",description:"Techniques / Patterns for Common Algorithms",source:"@site/docs/education/01-computer-science/10-algorithms/02-techniques.mdx",sourceDirName:"education/01-computer-science/10-algorithms",slug:"/education/computer-science/algorithms/techniques",permalink:"/tech-labs/docs/education/computer-science/algorithms/techniques",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/02-techniques.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Techniques",description:"Techniques / Patterns for Common Algorithms",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Definition",permalink:"/tech-labs/docs/education/computer-science/algorithms/definition"},next:{title:"Algorithms",permalink:"/tech-labs/docs/category/algorithms-1"}},l={},c=[];function d(e){const i={code:"code",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)("table",{class:"sticky column",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Technique"}),(0,t.jsx)("th",{children:"Definition"}),(0,t.jsx)("th",{children:"Examples"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"0/1 Knapsack (Dynamic Programming)"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(i.p,{children:["Problem where you need to determine the most valuable combination of items to include in a knapsack without exceeding its weight capacity. Items can either be included wholly (",(0,t.jsx)(i.code,{children:"1"}),") or not at all (",(0,t.jsx)(i.code,{children:"0"}),"), hence the name ",(0,t.jsx)(i.code,{children:"0/1"}),". The problem is solved using Dynamic Programming, a technique that breaks down complex problems into simpler subproblems. The solution to the 0/1 Knapsack problem involves finding the optimal combinations for each possible weight limit up to the capacity of the knapsack, ensuring the maximum possible value is achieved"]})}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("b",{children:"Project Management"}),": A manager has a fixed budget and a list of projects, each with a cost and expected return"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("b",{children:"Logistics"}),": Shipping company has a truck with a weight limit and various packages with different weights and values"]})})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Backtracking"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Backtracking is a depth-first search (DFS) algorithm used to solve computational problems by reversing steps when a solution is non-viable. It discards multiple solutions without fully examining them and continues by choosing another option until a solution is found or options are exhausted. It's efficient for large solution spaces (exponential), but can be inefficient if many partially built solutions are rejected"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"solve puzzle"}),(0,t.jsx)("li",{children:"pathfinding"}),(0,t.jsx)("li",{children:"combinatorial optimization problems"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Bitwise Operations"})}),(0,t.jsxs)("td",{children:["Bitwise operators are used in programming to manipulate individual bits in binary numbers. They include Bitwise AND (",(0,t.jsx)(i.code,{children:"&"}),"), OR (",(0,t.jsx)(i.code,{children:"|"}),"), XOR (",(0,t.jsx)(i.code,{children:"^"}),"), NOT (",(0,t.jsx)(i.code,{children:"~"}),"), Left Shift (",(0,t.jsx)(i.code,{children:"<<"}),"), and Right Shift (",(0,t.jsx)(i.code,{children:">>"}),"). They operate at the binary level, comparing or shifting bits based on the operator used"]}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Hardware Device Control"}),": read/write to specific bits in device's hardware registers"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Data Compression"}),": used in algorithms for data compression and decompression"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Cryptography"}),": essential for manipulating binary data in encryption techniques"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Network Protocols"}),": used to extract specific fields from the packet data in network protocols like TCP/IP"]})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Dynamic Programming (DP)"})}),(0,t.jsx)("td",{children:"Method that solves complex problems by breaking them down into simpler subproblems. It helps optimize computation time by storing the results of these subproblems in an array or table, which can be reused when the same subproblem reoccurs, a concept known as memoization"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Inventory Management"}),": determine the optimal quantity of items to stock to maximize profit"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Financial Budgeting"}),": helps in allocating a fixed budget to maximize return or profit"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Machine Learning"}),": In reinforcement learning, dynamic programming helps an agent to learn an optimal policy to navigate in an environment by maximizing rewards"]})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Fast & Slow Pointers"})}),(0,t.jsx)("td",{children:"It's a technique that primarily used in linked list data structures. It involves 2 pointers that move at different speeds through the list"}),(0,t.jsx)("td",{children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:"cycle detection and locating the start of it"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Island (Matrix Traversal) Pattern"})}),(0,t.jsx)("td",{children:'Helps to identify, count or process distinct groups, known as "islands", in a matrix or 2D array. An island is a group of connected components that are horizontally or vertically adjacent. The pattern uses Depth-First Search (DFS) or Breadth-First Search (BFS) algorithms to traverse the matrix, starting from a point and moving to adjacent points until the entire island is covered'}),(0,t.jsx)("td",{children:(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Digital Image Processing"}),": The Island Pattern identifies distinct shapes in a binary image by counting groups of connected pixels"]})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"K-way Merge"})}),(0,t.jsxs)("td",{children:["It's used to merge ",(0,t.jsx)(i.code,{children:"k"})," number of sorted lists into 1 sorted list. It uses a min-heap or priority queue to efficiently combine the lists, resulting in a time complexity of ",(0,t.jsx)(i.code,{children:"O(n log k)"}),", where ",(0,t.jsx)(i.code,{children:"n"})," is the total number of elements and ",(0,t.jsx)(i.code,{children:"k"})," is the number of sorted lists"]}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Database Systems"}),": In the process of external sorting, databases use K-way Merge to merge sorted runs of records, especially when they don't fit into the main memory"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Big Data Processing"}),": Frameworks like Apache Hadoop or Apache Spark use K-way Merge to merge data from multiple reducers into a globally sorted output"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Streaming Data Processing"}),": For real-time analytics or IoT data processing, K-way Merge merges multiple sorted data streams into a single sorted stream for further analysis"]})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Memoization"})}),(0,t.jsx)("td",{children:"It's a technique that speeds up programs by storing the results of expensive function calls or computations and reusing them when the same inputs occur. It's particularly useful in problems with overlapping subproblems, like dynamic programming. Although it enhances performance, it can also increase memory usage due to the cached values. Therefore, it represents a trade-off between time and space complexity"}),(0,t.jsx)("td",{children:(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Dynamic Programming"}),": is used to improve the performance of algorithm by caching the results of previously computed subproblems"]})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Merge Intervals"})}),(0,t.jsx)("td",{children:"Common algorithmic problem, which involves merging overlapping intervals from a given collection. The problem requires sorting the intervals based on start times and then iterating through, merging intervals where the end of one interval is greater than the start of the next. This problem is fundamental in areas like interval scheduling and computational geometry"}),(0,t.jsx)("td",{children:(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Meeting Scheduler Application"}),": identify and merge overlapping meetings"]})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Monotonic Stack"})}),(0,t.jsx)("td",{children:"Variation of Stack (FIFO) that only allows items to be pushed onto the stack or popped off the stack in a specific order"}),(0,t.jsx)("td",{children:(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Nearest Greater or Smaller Element"}),": to find the nearest greater or smaller element to the left or right of each element in an array or sequence"]})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Recursion"})}),(0,t.jsx)("td",{children:"Function that calls itself to solve smaller instances of the same problem. It's used in repetitive structures like searching and sorting algorithms. A recursive algorithm progresses towards a base case to avoid indefinite recursion. It's a powerful tool, but should be used cautiously to prevent high memory usage and stack overflow errors"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Family Tree"}),": Each person in a family tree is a parent to the next generation, repeating the parent-child relationship"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Computer Directories"}),": A directory can contain sub-directories which further contain more sub-directories, showing recursive structure"]})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Search"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Binary Search"}),(0,t.jsx)("li",{children:"Breadth First Search (BFS)"}),(0,t.jsx)("li",{children:"Depth First Search (DFS)"})]})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Sliding Window"})}),(0,t.jsx)("td",{children:"It's used in algorithms to limit data processed at one time, often in array or list manipulation. The 'window' slides along the array or list, providing control over memory usage and computational complexity"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Video Streaming"}),": Streaming services like using it to buffer videos for smooth playback"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Text Analysis"}),": in natural language processing, sliding windows analyze subsets of words for tasks like sentiment analysis"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Time Series Analysis"}),": calculates moving averages in time series analysis by updating the data set as new information comes in"]})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Sorting"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Binary Sort"}),(0,t.jsx)("li",{children:"Topological Sort"}),(0,t.jsx)("li",{children:"Cyclic Sort"})]})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Subsets"})}),(0,t.jsx)("td",{children:"Subset, is a set that contains all, some, or none of the elements of another set, known as the superset"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Top 'K' Elements"})}),(0,t.jsx)("td",{children:"Refers to identifying the 'K' highest-ranking or most common elements in a collection like an array or list. The value of 'K' can vary and the 'top' elements are determined based on factors such as numerical value, frequency, or a custom logic. This problem is often solved using data structures and algorithms such as priority queues, max-heaps, hash maps, or binary search trees"}),(0,t.jsx)("td",{children:(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:"Search Engine or Social Media Platforms"}),": returns the top 'K' most relevant web pages / trending hashtags for a user's query"]})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Trie"})}),(0,t.jsx)("td",{children:"Trie (prefix tree), is a tree-like data structure used for efficient key retrieval in a dataset of strings. Each node of the Trie holds a reference to its child nodes, and the key is represented by the string of characters from the root to that node"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"dictionaries with prefix lookup"}),(0,t.jsx)("li",{children:"auto-complete suggestions"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Two Heaps"})}),(0,t.jsx)("td",{children:"Involves max-heap and a min-heap, for efficient extreme value tracking. This setup is particularly useful in streaming data situations where you need to find the median value quickly"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Two Pointers"})}),(0,t.jsx)("td",{children:"Involves two pointers to traverse through an array or linked list efficiently. This technique is valuable for reducing time and space complexity in problem-solving. It can be employed in various ways, including moving pointers towards each other, away from each other, or in the same direction, depending on the specific problem"}),(0,t.jsx)("td",{})]})]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);