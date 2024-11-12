"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3289],{54321:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>y,contentTitle:()=>v,default:()=>m,frontMatter:()=>b,metadata:()=>i,toc:()=>S});const i=JSON.parse('{"id":"education/computer-science/algorithms/algo/detect-graph-cycle","title":"Detect Graph Cycle","description":"Detect Graph Cycle","source":"@site/docs/education/01-computer-science/10-algorithms/04-algo/detect-graph-cycle.mdx","sourceDirName":"education/01-computer-science/10-algorithms/04-algo","slug":"/education/computer-science/algorithms/algo/detect-graph-cycle","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/detect-graph-cycle","draft":false,"unlisted":false,"editUrl":"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/04-algo/detect-graph-cycle.mdx","tags":[],"version":"current","frontMatter":{"title":"Detect Graph Cycle","description":"Detect Graph Cycle","hide_table_of_contents":true},"sidebar":"education","previous":{"title":"Depth-First Search (DFS)","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/depth-first-search"},"next":{"title":"Dijkstra Algorithm","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/dijkstra-algorithm"}}');var r=t(86070),s=t(15658),o=t(33407),a=t(33903),c=t(68171);const d="// Detect cycle in directed graph using DFS\nfunc hasCycleDirected(graph map[int][]int) bool {\n\tvisited := make(map[int]bool)\n\trecursionStack := make(map[int]bool)\n\n\tvar dfs func(node int) bool\n\tdfs = func(node int) bool {\n\t\tvisited[node] = true\n\t\trecursionStack[node] = true\n\n\t\tfor _, neighbor := range graph[node] {\n\t\t\tif !visited[neighbor] {\n\t\t\t\tif dfs(neighbor) {\n\t\t\t\t\treturn true\n\t\t\t\t}\n\t\t\t} else if recursionStack[neighbor] {\n\t\t\t\treturn true\n\t\t\t}\n\t\t}\n\n\t\trecursionStack[node] = false\n\t\treturn false\n\t}\n\n\tfor node := range graph {\n\t\tif !visited[node] {\n\t\t\tif dfs(node) {\n\t\t\t\treturn true\n\t\t\t}\n\t\t}\n\t}\n\n\treturn false\n}\n\n// Detect cycle in undirected graph using DFS\nfunc hasCycleUndirected(graph map[int][]int) bool {\n\tvisited := make(map[int]bool)\n\n\tvar dfs func(node, parent int) bool\n\tdfs = func(node, parent int) bool {\n\t\tvisited[node] = true\n\n\t\tfor _, neighbor := range graph[node] {\n\t\t\tif !visited[neighbor] {\n\t\t\t\tif dfs(neighbor, node) {\n\t\t\t\t\treturn true\n\t\t\t\t}\n\t\t\t} else if neighbor != parent {\n\t\t\t\treturn true\n\t\t\t}\n\t\t}\n\n\t\treturn false\n\t}\n\n\tfor node := range graph {\n\t\tif !visited[node] {\n\t\t\tif dfs(node, -1) {\n\t\t\t\treturn true\n\t\t\t}\n\t\t}\n\t}\n\n\treturn false\n}\n\n// Detect cycle in undirected graph using disjoint sets\ntype disjointSet struct {\n\tparent []int\n}\n\nfunc newDisjointSet(size int) *disjointSet {\n\treturn &disjointSet{\n\t\tparent: make([]int, size),\n\t}\n}\n\nfunc (d *disjointSet) find(x int) int {\n\tif d.parent[x] == -1 {\n\t\treturn x\n\t}\n\treturn d.find(d.parent[x])\n}\n\nfunc (d *disjointSet) union(x, y int) bool {\n\trootX := d.find(x)\n\trootY := d.find(y)\n\n\tif rootX != rootY {\n\t\td.parent[rootX] = rootY\n\t\treturn false\n\t}\n\treturn true\n}\n\nfunc hasCycleUndirectedDisjointSets(graph map[int][]int) bool {\n\tsize := len(graph)\n\tds := newDisjointSet(size)\n\n\tfor node, neighbors := range graph {\n\t\tfor _, neighbor := range neighbors {\n\t\t\tif ds.union(node, neighbor) {\n\t\t\t\treturn true\n\t\t\t}\n\t\t}\n\t}\n\n\treturn false\n}\n",l="import java.util.*;\n\n// Detect cycle in directed graph using DFS\npublic class DirectedCycleDetection {\n\n  public static boolean hasCycle(Map<Integer, List<Integer>> graph) {\n    Set<Integer> visited = new HashSet<>();\n    Set<Integer> recursionStack = new HashSet<>();\n\n    for (Integer node : graph.keySet()) {\n      if (!visited.contains(node)) {\n        if (dfs(graph, node, visited, recursionStack)) {\n          return true;\n        }\n      }\n    }\n\n    return false;\n  }\n\n  private static boolean dfs(Map<Integer, List<Integer>> graph, int node, Set<Integer> visited, Set<Integer> recursionStack) {\n    visited.add(node);\n    recursionStack.add(node);\n\n    for (Integer neighbor : graph.getOrDefault(node, new ArrayList<>())) {\n      if (!visited.contains(neighbor)) {\n        if (dfs(graph, neighbor, visited, recursionStack)) {\n          return true;\n        }\n      } else if (recursionStack.contains(neighbor)) {\n        return true;\n      }\n    }\n\n    recursionStack.remove(node);\n    return false;\n  }\n}\n\n// Detect cycle in undirected graph using DFS\npublic class UndirectedCycleDetection {\n\n  public static boolean hasCycle(Map<Integer, List<Integer>> graph) {\n    Set<Integer> visited = new HashSet<>();\n\n    for (Integer node : graph.keySet()) {\n      if (!visited.contains(node)) {\n        if (dfs(graph, node, -1, visited)) {\n          return true;\n        }\n      }\n    }\n\n    return false;\n  }\n\n  private static boolean dfs(Map<Integer, List<Integer>> graph, int node, int parent, Set<Integer> visited) {\n    visited.add(node);\n\n    for (Integer neighbor : graph.getOrDefault(node, new ArrayList<>())) {\n      if (!visited.contains(neighbor)) {\n        if (dfs(graph, neighbor, node, visited)) {\n          return true;\n        }\n      } else if (neighbor != parent) {\n        return true;\n      }\n    }\n\n    return false;\n  }\n}\n\n// Detect cycle in undirected graph using disjoint sets\npublic class DisjointSetCycleDetection {\n\n  public static boolean hasCycle(Map<Integer, List<Integer>> graph) {\n    DisjointSet ds = new DisjointSet(graph.size());\n\n    for (Integer node : graph.keySet()) {\n      for (Integer neighbor : graph.get(node)) {\n        if (ds.union(node, neighbor)) {\n          return true;\n        }\n      }\n    }\n\n    return false;\n  }\n\n  static class DisjointSet {\n\n    int[] parent;\n\n    public DisjointSet(int size) {\n      parent = new int[size];\n      Arrays.fill(parent, -1);\n    }\n\n    public int find(int x) {\n      if (parent[x] == -1) {\n        return x;\n      }\n      return find(parent[x]);\n    }\n\n    public boolean union(int x, int y) {\n      int rootX = find(x);\n      int rootY = find(y);\n\n      if (rootX != rootY) {\n        parent[rootX] = rootY;\n        return false;\n      }\n      return true;\n    }\n  }\n}\n",u="// Detect cycle in directed graph using DFS\nfunction hasCycleDirected(graph) {\n  const visited = new Set();\n  const recursionStack = new Set();\n\n  function dfs(node) {\n    visited.add(node);\n    recursionStack.add(node);\n\n    for (const neighbor of graph[node]) {\n      if (!visited.has(neighbor)) {\n        if (dfs(neighbor)) {\n          return true;\n        }\n      } else if (recursionStack.has(neighbor)) {\n        return true;\n      }\n    }\n\n    recursionStack.delete(node);\n    return false;\n  }\n\n  for (const node in graph) {\n    if (!visited.has(node)) {\n      if (dfs(node)) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n}\n\n// Detect cycle in undirected graph using DFS\nfunction hasCycleUndirected(graph) {\n  const visited = new Set();\n\n  function dfs(node, parent) {\n    visited.add(node);\n\n    for (const neighbor of graph[node]) {\n      if (!visited.has(neighbor)) {\n        if (dfs(neighbor, node)) {\n          return true;\n        }\n      } else if (neighbor !== parent) {\n        return true;\n      }\n    }\n\n    return false;\n  }\n\n  for (const node in graph) {\n    if (!visited.has(node)) {\n      if (dfs(node, null)) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n}\n\n// Detect cycle in undirected graph using disjoint sets\nclass DisjointSet {\n  constructor(size) {\n    this.parent = Array(size).fill(-1);\n  }\n\n  find(x) {\n    if (this.parent[x] === -1) {\n      return x;\n    }\n    return this.find(this.parent[x]);\n  }\n\n  union(x, y) {\n    const rootX = this.find(x);\n    const rootY = this.find(y);\n\n    if (rootX !== rootY) {\n      this.parent[rootX] = rootY;\n      return false;\n    }\n    return true;\n  }\n}\n\nfunction hasCycleUndirectedDisjointSets(graph) {\n  const disjointSet = new DisjointSet(Object.keys(graph).length);\n\n  for (const node in graph) {\n    for (const neighbor of graph[node]) {\n      if (disjointSet.union(node, neighbor)) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n}\n",f="// Detect cycle in directed graph using DFS\nclass DirectedCycleDetection(private val graph: Map<Int, List<Int>>) {\n    fun hasCycle(): Boolean {\n        val visited = mutableSetOf<Int>()\n        val recursionStack = mutableSetOf<Int>()\n\n        for (node in graph.keys) {\n            if (!visited.contains(node)) {\n                if (dfs(node, visited, recursionStack)) {\n                    return true\n                }\n            }\n        }\n\n        return false\n    }\n\n    private fun dfs(node: Int, visited: MutableSet<Int>, recursionStack: MutableSet<Int>): Boolean {\n        visited.add(node)\n        recursionStack.add(node)\n\n        for (neighbor in graph[node] ?: emptyList()) {\n            if (!visited.contains(neighbor)) {\n                if (dfs(neighbor, visited, recursionStack)) {\n                    return true\n                }\n            } else if (recursionStack.contains(neighbor)) {\n                return true\n            }\n        }\n\n        recursionStack.remove(node)\n        return false\n    }\n}\n\n// Detect cycle in undirected graph using DFS\nclass UndirectedCycleDetection(private val graph: Map<Int, List<Int>>) {\n    fun hasCycle(): Boolean {\n        val visited = mutableSetOf<Int>()\n\n        for (node in graph.keys) {\n            if (!visited.contains(node)) {\n                if (dfs(node, -1, visited)) {\n                    return true\n                }\n            }\n        }\n\n        return false\n    }\n\n    private fun dfs(node: Int, parent: Int, visited: MutableSet<Int>): Boolean {\n        visited.add(node)\n\n        for (neighbor in graph[node] ?: emptyList()) {\n            if (!visited.contains(neighbor)) {\n                if (dfs(neighbor, node, visited)) {\n                    return true\n                }\n            } else if (neighbor != parent) {\n                return true\n            }\n        }\n\n        return false\n    }\n}\n\n// Detect cycle in undirected graph using disjoint sets\nclass DisjointSetCycleDetection(private val graph: Map<Int, List<Int>>) {\n    private class DisjointSet(size: Int) {\n        val parent = IntArray(size) { -1 }\n\n        fun find(x: Int): Int {\n            return if (parent[x] == -1) x else find(parent[x])\n        }\n\n        fun union(x: Int, y: Int): Boolean {\n            val rootX = find(x)\n            val rootY = find(y)\n\n            if (rootX != rootY) {\n                parent[rootX] = rootY\n                return false\n            }\n            return true\n        }\n    }\n\n    fun hasCycle(): Boolean {\n        val ds = DisjointSet(graph.size)\n\n        for ((node, neighbors) in graph) {\n            for (neighbor in neighbors) {\n                if (ds.union(node, neighbor)) {\n                    return true\n                }\n            }\n        }\n\n        return false\n    }\n}\n",h="# Detect cycle in directed graph using DFS\nclass DirectedCycleDetection:\n    def __init__(self, graph):\n        self.graph = graph\n        self.visited = set()\n        self.recursion_stack = set()\n\n    def has_cycle(self):\n        for node in self.graph:\n            if node not in self.visited:\n                if self.dfs(node):\n                    return True\n        return False\n\n    def dfs(self, node):\n        self.visited.add(node)\n        self.recursion_stack.add(node)\n\n        for neighbor in self.graph.get(node, []):\n            if neighbor not in self.visited:\n                if self.dfs(neighbor):\n                    return True\n            elif neighbor in self.recursion_stack:\n                return True\n\n        self.recursion_stack.remove(node)\n        return False\n\n# Detect cycle in undirected graph using DFS\nclass UndirectedCycleDetection:\n    def __init__(self, graph):\n        self.graph = graph\n        self.visited = set()\n\n    def has_cycle(self):\n        for node in self.graph:\n            if node not in self.visited:\n                if self.dfs(node, -1):\n                    return True\n        return False\n\n    def dfs(self, node, parent):\n        self.visited.add(node)\n\n        for neighbor in self.graph.get(node, []):\n            if neighbor not in self.visited:\n                if self.dfs(neighbor, node):\n                    return True\n            elif neighbor != parent:\n                return True\n\n        return False\n\n# Detect cycle in undirected graph using disjoint sets\nclass DisjointSet:\n    def __init__(self, size):\n        self.parent = [-1] * size\n\n    def find(self, x):\n        if self.parent[x] == -1:\n            return x\n        return self.find(self.parent[x])\n\n    def union(self, x, y):\n        root_x = self.find(x)\n        root_y = self.find(y)\n\n        if root_x != root_y:\n            self.parent[root_x] = root_y\n            return False\n        return True\n\n\nclass DisjointSetCycleDetection:\n    def __init__(self, graph):\n        self.graph = graph\n\n    def has_cycle(self):\n        ds = DisjointSet(len(self.graph))\n\n        for node in self.graph:\n            for neighbor in self.graph[node]:\n                if ds.union(node, neighbor):\n                    return True\n\n        return False\n",g="use std::collections::{HashSet, HashMap};\n\n// Detect cycle in directed graph using DFS\nstruct DirectedCycleDetection<'a> {\n    graph: &'a HashMap<usize, Vec<usize>>,\n    visited: HashSet<usize>,\n    recursion_stack: HashSet<usize>,\n}\n\nimpl<'a> DirectedCycleDetection<'a> {\n    fn new(graph: &'a HashMap<usize, Vec<usize>>) -> Self {\n        DirectedCycleDetection {\n            graph,\n            visited: HashSet::new(),\n            recursion_stack: HashSet::new(),\n        }\n    }\n\n    fn has_cycle(&mut self) -> bool {\n        for &node in self.graph.keys() {\n            if !self.visited.contains(&node) {\n                if self.dfs(node) {\n                    return true;\n                }\n            }\n        }\n        false\n    }\n\n    fn dfs(&mut self, node: usize) -> bool {\n        self.visited.insert(node);\n        self.recursion_stack.insert(node);\n\n        if let Some(neighbors) = self.graph.get(&node) {\n            for &neighbor in neighbors {\n                if !self.visited.contains(&neighbor) {\n                    if self.dfs(neighbor) {\n                        return true;\n                    }\n                } else if self.recursion_stack.contains(&neighbor) {\n                    return true;\n                }\n            }\n        }\n\n        self.recursion_stack.remove(&node);\n        false\n    }\n}\n\n// Detect cycle in undirected graph using DFS\nstruct UndirectedCycleDetection<'a> {\n    graph: &'a HashMap<usize, Vec<usize>>,\n    visited: HashSet<usize>,\n}\n\nimpl<'a> UndirectedCycleDetection<'a> {\n    fn new(graph: &'a HashMap<usize, Vec<usize>>) -> Self {\n        UndirectedCycleDetection {\n            graph,\n            visited: HashSet::new(),\n        }\n    }\n\n    fn has_cycle(&mut self) -> bool {\n        for &node in self.graph.keys() {\n            if !self.visited.contains(&node) {\n                if self.dfs(node, 0) {\n                    return true;\n                }\n            }\n        }\n        false\n    }\n\n    fn dfs(&mut self, node: usize, parent: usize) -> bool {\n        self.visited.insert(node);\n\n        if let Some(neighbors) = self.graph.get(&node) {\n            for &neighbor in neighbors {\n                if !self.visited.contains(&neighbor) {\n                    if self.dfs(neighbor, node) {\n                        return true;\n                    }\n                } else if neighbor != parent {\n                    return true;\n                }\n            }\n        }\n\n        false\n    }\n}\n\n\n//Detect cycle in undirected graph using disjoint sets\nstruct UndirectedCycleDetection<'a> {\n    graph: &'a HashMap<usize, Vec<usize>>,\n    visited: HashSet<usize>,\n}\n\nimpl<'a> UndirectedCycleDetection<'a> {\n    fn new(graph: &'a HashMap<usize, Vec<usize>>) -> Self {\n        UndirectedCycleDetection {\n            graph,\n            visited: HashSet::new(),\n        }\n    }\n\n    fn has_cycle(&mut self) -> bool {\n        for &node in self.graph.keys() {\n            if !self.visited.contains(&node) {\n                if self.dfs(node, 0) {\n                    return true;\n                }\n            }\n        }\n        false\n    }\n\n    fn dfs(&mut self, node: usize, parent: usize) -> bool {\n        self.visited.insert(node);\n\n        if let Some(neighbors) = self.graph.get(&node) {\n            for &neighbor in neighbors {\n                if !self.visited.contains(&neighbor) {\n                    if self.dfs(neighbor, node) {\n                        return true;\n                    }\n                } else if neighbor != parent {\n                    return true;\n                }\n            }\n        }\n\n        false\n    }\n}\n",p="// Detect cycle in directed graph using DFS\nclass DirectedCycleDetection {\n  graph: Map<number, number[]>;\n  visited: Set<number>;\n  recursionStack: Set<number>;\n\n  constructor(graph: Map<number, number[]>) {\n    this.graph = graph;\n    this.visited = new Set();\n    this.recursionStack = new Set();\n  }\n\n  hasCycle(): boolean {\n    for (const node of this.graph.keys()) {\n      if (!this.visited.has(node)) {\n        if (this.dfs(node)) {\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n\n  dfs(node: number): boolean {\n    this.visited.add(node);\n    this.recursionStack.add(node);\n\n    const neighbors = this.graph.get(node) || [];\n    for (const neighbor of neighbors) {\n      if (!this.visited.has(neighbor)) {\n        if (this.dfs(neighbor)) {\n          return true;\n        }\n      } else if (this.recursionStack.has(neighbor)) {\n        return true;\n      }\n    }\n\n    this.recursionStack.delete(node);\n    return false;\n  }\n}\n\n// Detect cycle in undirected graph using DFS\nclass UndirectedCycleDetection {\n  graph: Map<number, number[]>;\n  visited: Set<number>;\n\n  constructor(graph: Map<number, number[]>) {\n    this.graph = graph;\n    this.visited = new Set();\n  }\n\n  hasCycle(): boolean {\n    for (const node of this.graph.keys()) {\n      if (!this.visited.has(node)) {\n        if (this.dfs(node, -1)) {\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n\n  dfs(node: number, parent: number): boolean {\n    this.visited.add(node);\n\n    const neighbors = this.graph.get(node) || [];\n    for (const neighbor of neighbors) {\n      if (!this.visited.has(neighbor)) {\n        if (this.dfs(neighbor, node)) {\n          return true;\n        }\n      } else if (neighbor !== parent) {\n        return true;\n      }\n    }\n\n    return false;\n  }\n}\n\n//Detect cycle in undirected graph using disjoint sets\nclass DisjointSet {\n  parent: number[];\n\n  constructor(size: number) {\n    this.parent = Array(size).fill(-1);\n  }\n\n  find(x: number): number {\n    if (this.parent[x] === -1) {\n      return x;\n    }\n    return this.find(this.parent[x]);\n  }\n\n  union(x: number, y: number): boolean {\n    const rootX = this.find(x);\n    const rootY = this.find(y);\n\n    if (rootX !== rootY) {\n      this.parent[rootX] = rootY;\n      return false;\n    }\n    return true;\n  }\n}\n\nclass DisjointSetCycleDetection {\n  graph: Map<number, number[]>;\n\n  constructor(graph: Map<number, number[]>) {\n    this.graph = graph;\n  }\n\n  hasCycle(): boolean {\n    const ds = new DisjointSet(this.graph.size);\n\n    for (const [node, neighbors] of this.graph.entries()) {\n      for (const neighbor of neighbors) {\n        if (ds.union(node, neighbor)) {\n          return true;\n        }\n      }\n    }\n\n    return false;\n  }\n}\n",b={title:"Detect Graph Cycle",description:"Detect Graph Cycle",hide_table_of_contents:!0},v=void 0,y={},S=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function D(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(o.A,{queryString:"primary",children:[(0,r.jsx)(a.A,{value:"definition",label:"Definition",children:(0,r.jsx)(e.p,{children:"The Detect Cycle Algorithm in Graph is used to identify if a graph contains cycles, i.e., closed loops where a sequence of edges returns to a vertex. It's crucial for various applications such as network routing, deadlock detection, and more. This algorithm typically employs Depth-First Search (DFS) or Union-Find to traverse the graph and detect cycles efficiently"})}),(0,r.jsx)(a.A,{value:"how",label:"Explanation",children:(0,r.jsx)(e.p,{children:"The algorithm utilizes Depth-First Search (DFS) to traverse the graph. During traversal, it keeps track of visited vertices and explores adjacent vertices. If it encounters a visited vertex during traversal other than its parent (in the DFS tree), it signifies the presence of a cycle"})}),(0,r.jsx)(a.A,{value:"guidance",label:"Guidance",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Start with an empty set to keep track of visited vertices"}),"\n",(0,r.jsx)(e.li,{children:"Begin DFS traversal from any vertex in the graph"}),"\n",(0,r.jsxs)(e.li,{children:["While traversing, mark each visited vertex","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"if during traversal, you encounter a visited vertex that is not the parent of the current vertex in the DFS tree, a cycle is detected"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"Continue DFS until all vertices are visited"}),"\n",(0,r.jsx)(e.li,{children:"If no cycles are detected, the graph is acyclic"}),"\n"]})}),(0,r.jsx)(a.A,{value:"tips",label:"Tips",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"use an efficient data structure for storing visited vertices, such as a set or array"}),"\n",(0,r.jsx)(e.li,{children:"understand the behavior of DFS in traversing graphs"}),"\n",(0,r.jsx)(e.li,{children:"pay attention to how the algorithm handles back edges during traversal"}),"\n"]})})]}),"\n",(0,r.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsxs)(o.A,{queryString:"primary",children:[(0,r.jsx)(a.A,{value:"practice",label:"Practice",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"hasCycle(graph):\n  visited = set() // Set to keep track of visited vertices\n  for vertex in graph.vertices:\n    if vertex not in visited:\n      if dfs(vertex, visited, None): // Start DFS from current vertex\n        return true // If cycle detected, return true\n  return false // If no cycle detected, return false\n\ndfs(vertex, visited, parent):\n  visited.add(vertex) // Mark current vertex as visited\n  for neighbor in vertex.neighbors:\n    if neighbor not in visited: // If neighbor not visited, recursively call DFS\n      if dfs(neighbor, visited, vertex):\n        return true // If cycle detected, return true\n    else if neighbor != parent: // If neighbor is visited and not parent, cycle detected\n      return true\n  return false // If no cycle detected, return false\n"})})}),(0,r.jsx)(a.A,{value:"solution",label:"Solution",children:(0,r.jsxs)(o.A,{queryString:"code",children:[(0,r.jsx)(a.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,r.jsx)(c.A,{language:"go",children:d})}),(0,r.jsx)(a.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,r.jsx)(c.A,{language:"java",children:l})}),(0,r.jsx)(a.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,r.jsx)(c.A,{language:"js",children:u})}),(0,r.jsx)(a.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,r.jsx)(c.A,{language:"kotlin",children:f})}),(0,r.jsx)(a.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,r.jsx)(c.A,{language:"python",children:h})}),(0,r.jsx)(a.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,r.jsx)(c.A,{language:"rust",children:g})}),(0,r.jsx)(a.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,r.jsx)(c.A,{language:"ts",children:p})})]})})]})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(D,{...n})}):D(n)}}}]);