"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3626],{46874:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>g,contentTitle:()=>m,default:()=>b,frontMatter:()=>h,metadata:()=>w,toc:()=>x});var t=i(86070),a=i(25710),r=i(98459),s=i(37515),l=i(18792);const o="package main\n\ntype Graph map[int][]int\n\nfunc dfs(u int, visited map[int]bool, parent map[int]int, low map[int]int, disc map[int]int, ap map[int]bool, g Graph) {\n    children := 0\n    visited[u] = true\n    disc[u] = disc[parent[u]] + 1\n    low[u] = disc[u]\n\n    for _, v := range g[u] {\n        if !visited[v] {\n            children++\n            parent[v] = u\n            dfs(v, visited, parent, low, disc, ap, g)\n            low[u] = min(low[u], low[v])\n            if parent[u] != -1 && low[v] >= disc[u] {\n                ap[u] = true\n            }\n        } else if v != parent[u] {\n            low[u] = min(low[u], disc[v])\n        }\n    }\n\n    if parent[u] == -1 && children > 1 {\n        ap[u] = true\n    }\n}\n\nfunc min(a, b int) int {\n    if a < b {\n        return a\n    }\n    return b\n}\n\nfunc findArticulationPoints(g Graph) []int {\n    visited := make(map[int]bool)\n    parent := make(map[int]int)\n    disc := make(map[int]int)\n    low := make(map[int]int)\n    ap := make(map[int]bool)\n\n    for v := range g {\n        visited[v] = false\n        parent[v] = -1\n        disc[v] = 0\n        low[v] = 0\n        ap[v] = false\n    }\n\n    for v := range g {\n        if !visited[v] {\n            dfs(v, visited, parent, low, disc, ap, g)\n        }\n    }\n\n    result := []int{}\n    for v := range g {\n        if ap[v] {\n            result = append(result, v)\n        }\n    }\n    return result\n}\n",c="import java.util.*;\n\nclass ArticulationPoints {\n\n  private final int NIL = -1;\n  private int time;\n\n  private void dfs(int u, boolean[] visited, int[] disc, int[] low, int[] parent, boolean[] ap, List<Integer>[] graph) {\n    int children = 0;\n    visited[u] = true;\n    disc[u] = low[u] = ++time;\n\n    for (int v : graph[u]) {\n      if (!visited[v]) {\n        children++;\n        parent[v] = u;\n        dfs(v, visited, disc, low, parent, ap, graph);\n        low[u] = Math.min(low[u], low[v]);\n        if (parent[u] == NIL && children > 1 || parent[u] != NIL && low[v] >= disc[u]) {\n          ap[u] = true;\n        }\n      } else if (v != parent[u]) {\n        low[u] = Math.min(low[u], disc[v]);\n      }\n    }\n  }\n\n  public List<Integer> findArticulationPoints(List<Integer>[] graph, int V) {\n    boolean[] visited = new boolean[V];\n    int[] disc = new int[V];\n    int[] low = new int[V];\n    int[] parent = new int[V];\n    boolean[] ap = new boolean[V];\n    time = 0;\n\n    Arrays.fill(parent, NIL);\n\n    for (int i = 0; i < V; i++) {\n      if (!visited[i]) {\n        dfs(i, visited, disc, low, parent, ap, graph);\n      }\n    }\n\n    List<Integer> result = new ArrayList<>();\n    for (int i = 0; i < V; i++) {\n      if (ap[i]) {\n        result.add(i);\n      }\n    }\n    return result;\n  }\n}\n",d="class Graph {\n  constructor(vertices) {\n    this.V = vertices;\n    this.adj = new Array(vertices).fill(null).map(() => []);\n  }\n\n  addEdge(u, v) {\n    this.adj[u].push(v);\n    this.adj[v].push(u);\n  }\n\n  dfs(u, visited, parent, low, disc, ap) {\n    let children = 0;\n    visited[u] = true;\n    disc[u] = low[u] = ++this.time;\n\n    for (const v of this.adj[u]) {\n      if (!visited[v]) {\n        children++;\n        parent[v] = u;\n        this.dfs(v, visited, parent, low, disc, ap);\n        low[u] = Math.min(low[u], low[v]);\n        if (\n          (parent[u] === -1 && children > 1) ||\n          (parent[u] !== -1 && low[v] >= disc[u])\n        ) {\n          ap[u] = true;\n        }\n      } else if (v !== parent[u]) {\n        low[u] = Math.min(low[u], disc[v]);\n      }\n    }\n  }\n\n  findArticulationPoints() {\n    const visited = new Array(this.V).fill(false);\n    const parent = new Array(this.V).fill(-1);\n    const disc = new Array(this.V).fill(0);\n    const low = new Array(this.V).fill(0);\n    const ap = new Array(this.V).fill(false);\n    this.time = 0;\n\n    for (let i = 0; i < this.V; i++) {\n      if (!visited[i]) {\n        this.dfs(i, visited, parent, low, disc, ap);\n      }\n    }\n\n    const result = [];\n    for (let i = 0; i < this.V; i++) {\n      if (ap[i]) {\n        result.push(i);\n      }\n    }\n    return result;\n  }\n}\n",u="class Graph(private val V: Int) {\n    private val adj: Array<MutableList<Int>> = Array(V) { mutableListOf() }\n    private var time = 0\n\n    fun addEdge(u: Int, v: Int) {\n        adj[u].add(v)\n        adj[v].add(u)\n    }\n\n    private fun dfs(u: Int, visited: BooleanArray, parent: IntArray, low: IntArray, disc: IntArray, ap: BooleanArray) {\n        var children = 0\n        visited[u] = true\n        disc[u] = ++time\n        low[u] = disc[u]\n\n        for (v in adj[u]) {\n            if (!visited[v]) {\n                children++\n                parent[v] = u\n                dfs(v, visited, parent, low, disc, ap)\n                low[u] = minOf(low[u], low[v])\n                if ((parent[u] == -1 && children > 1) || (parent[u] != -1 && low[v] >= disc[u])) {\n                    ap[u] = true\n                }\n            } else if (v != parent[u]) {\n                low[u] = minOf(low[u], disc[v])\n            }\n        }\n    }\n\n    fun findArticulationPoints(): List<Int> {\n        val visited = BooleanArray(V)\n        val parent = IntArray(V) { -1 }\n        val disc = IntArray(V)\n        val low = IntArray(V)\n        val ap = BooleanArray(V)\n\n        for (i in 0 until V) {\n            if (!visited[i]) {\n                dfs(i, visited, parent, low, disc, ap)\n            }\n        }\n\n        return ap.indices.filter { ap[it] }\n    }\n}\n",v='class Graph:\n    def __init__(self, V):\n        self.V = V\n        self.adj = [[] for _ in range(V)]\n        self.time = 0\n\n    def add_edge(self, u, v):\n        self.adj[u].append(v)\n        self.adj[v].append(u)\n\n    def dfs(self, u, visited, parent, low, disc, ap):\n        children = 0\n        visited[u] = True\n        disc[u] = self.time\n        low[u] = self.time\n        self.time += 1\n\n        for v in self.adj[u]:\n            if not visited[v]:\n                children += 1\n                parent[v] = u\n                self.dfs(v, visited, parent, low, disc, ap)\n                low[u] = min(low[u], low[v])\n                if (parent[u] == -1 and children > 1) or (parent[u] != -1 and low[v] >= disc[u]):\n                    ap[u] = True\n            elif v != parent[u]:\n                low[u] = min(low[u], disc[v])\n\n    def find_articulation_points(self):\n        visited = [False] * self.V\n        parent = [-1] * self.V\n        disc = [float("inf")] * self.V\n        low = [float("inf")] * self.V\n        ap = [False] * self.V\n\n        for i in range(self.V):\n            if not visited[i]:\n                self.dfs(i, visited, parent, low, disc, ap)\n\n        return [i for i in range(self.V) if ap[i]]\n',p="use std::collections::HashMap;\n\nstruct Graph {\n    vertices: usize,\n    adj_list: HashMap<usize, Vec<usize>>,\n    time: usize,\n}\n\nimpl Graph {\n    fn new(vertices: usize) -> Self {\n        Graph {\n            vertices,\n            adj_list: HashMap::new(),\n            time: 0,\n        }\n    }\n\n    fn add_edge(&mut self, u: usize, v: usize) {\n        self.adj_list.entry(u).or_insert(Vec::new()).push(v);\n        self.adj_list.entry(v).or_insert(Vec::new()).push(u);\n    }\n\n    fn dfs(\n        &mut self,\n        u: usize,\n        visited: &mut Vec<bool>,\n        parent: &mut Vec<isize>,\n        disc: &mut Vec<usize>,\n        low: &mut Vec<usize>,\n        ap: &mut Vec<bool>,\n    ) {\n        let mut children = 0;\n        visited[u] = true;\n        disc[u] = self.time;\n        low[u] = self.time;\n        self.time += 1;\n\n        for &v in self.adj_list.get(&u).unwrap().iter() {\n            if !visited[v] {\n                children += 1;\n                parent[v] = u as isize;\n                self.dfs(v, visited, parent, disc, low, ap);\n                low[u] = low[u].min(low[v]);\n                if (parent[u] == -1 && children > 1) || (parent[u] != -1 && low[v] >= disc[u]) {\n                    ap[u] = true;\n                }\n            } else if v as isize != parent[u] {\n                low[u] = low[u].min(disc[v]);\n            }\n        }\n    }\n\n    fn find_articulation_points(&mut self) -> Vec<usize> {\n        let mut visited = vec![false; self.vertices];\n        let mut parent = vec![-1; self.vertices];\n        let mut disc = vec![0; self.vertices];\n        let mut low = vec![0; self.vertices];\n        let mut ap = vec![false; self.vertices];\n\n        for i in 0..self.vertices {\n            if !visited[i] {\n                self.dfs(i, &mut visited, &mut parent, &mut disc, &mut low, &mut ap);\n            }\n        }\n\n        ap.iter()\n            .enumerate()\n            .filter_map(|(i, &b)| if b { Some(i) } else { None })\n            .collect()\n    }\n}\n",f="class Graph {\n  V: number;\n  adj: Map<number, number[]>;\n  time: number;\n\n  constructor(V: number) {\n    this.V = V;\n    this.adj = new Map();\n    this.time = 0;\n    for (let i = 0; i < V; i++) {\n      this.adj.set(i, []);\n    }\n  }\n\n  addEdge(u: number, v: number) {\n    this.adj.get(u).push(v);\n    this.adj.get(v).push(u);\n  }\n\n  dfs(\n    u: number,\n    visited: boolean[],\n    parent: number[],\n    disc: number[],\n    low: number[],\n    ap: boolean[],\n  ) {\n    let children = 0;\n    visited[u] = true;\n    disc[u] = this.time;\n    low[u] = this.time;\n    this.time++;\n\n    for (const v of this.adj.get(u)!) {\n      if (!visited[v]) {\n        children++;\n        parent[v] = u;\n        this.dfs(v, visited, parent, disc, low, ap);\n        low[u] = Math.min(low[u], low[v]);\n        if (\n          (parent[u] === -1 && children > 1) ||\n          (parent[u] !== -1 && low[v] >= disc[u])\n        ) {\n          ap[u] = true;\n        }\n      } else if (v !== parent[u]) {\n        low[u] = Math.min(low[u], disc[v]);\n      }\n    }\n  }\n\n  findArticulationPoints(): number[] {\n    const visited: boolean[] = new Array(this.V).fill(false);\n    const parent: number[] = new Array(this.V).fill(-1);\n    const disc: number[] = new Array(this.V).fill(0);\n    const low: number[] = new Array(this.V).fill(0);\n    const ap: boolean[] = new Array(this.V).fill(false);\n\n    for (let i = 0; i < this.V; i++) {\n      if (!visited[i]) {\n        this.dfs(i, visited, parent, disc, low, ap);\n      }\n    }\n\n    return ap.map((val, idx) => (val ? idx : -1)).filter((val) => val !== -1);\n  }\n}\n",h={title:"Articulation Points",description:"Articulation Points",hide_table_of_contents:!0},m=void 0,w={id:"education/computer-science/algorithms/algo/articulation-points",title:"Articulation Points",description:"Articulation Points",source:"@site/docs/education/01-computer-science/10-algorithms/04-algo/articulation-points.mdx",sourceDirName:"education/01-computer-science/10-algorithms/04-algo",slug:"/education/computer-science/algorithms/algo/articulation-points",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/articulation-points",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/04-algo/articulation-points.mdx",tags:[],version:"current",frontMatter:{title:"Articulation Points",description:"Articulation Points",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Algorithms",permalink:"/tech-labs/docs/category/algorithms-1"},next:{title:"Bellman-Ford Algorithm",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/bellman-ford-algorithm"}},g={},x=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function j(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsxs)(r.A,{queryString:"primary",children:[(0,t.jsx)(s.A,{value:"definition",label:"Definition",children:(0,t.jsx)(e.p,{children:"Articulation Points Algorithm is a graph algorithm used to identify critical points, or articulation points, within a connected graph. These points, when removed, disconnect the graph or increase its number of connected components"})}),(0,t.jsx)(s.A,{value:"how",label:"Explanation",children:(0,t.jsx)(e.p,{children:"Begin by initializing variables and data structures to represent the graph, then perform a Depth First Search (DFS) or Breadth First Search (BFS) traversal on the graph, marking vertices as visited and keeping track of discovery time and low value for each vertex during the traversal. Determine if a vertex is an articulation point by examining its children in the DFS tree, and finally output the identified articulation points"})}),(0,t.jsx)(s.A,{value:"guidance",label:"Guidance",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Initialize variables","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"initialize an empty list to store articulation points"}),"\n",(0,t.jsx)(e.li,{children:"implement a graph representation (adjacency list or matrix)"}),"\n",(0,t.jsx)(e.li,{children:"initialize arrays to track visited status, discovery time, and low values for vertices"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Traverse the graph","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"start DFS or BFS traversal from any vertex"}),"\n",(0,t.jsx)(e.li,{children:"during traversal, mark vertices as visited and update discovery time"}),"\n",(0,t.jsx)(e.li,{children:"keep track of the lowest discovery time reachable from each vertex (low value)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Identify Articulation Points","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"in DFS, maintain a parent array to keep track of the parent of each vertex"}),"\n",(0,t.jsx)(e.li,{children:"for each vertex, traverse its adjacent vertices"}),"\n",(0,t.jsx)(e.li,{children:"if a vertex's child has a lower discovery time than the current vertex's low value, update the low value"}),"\n",(0,t.jsx)(e.li,{children:"if the current vertex is the root of the DFS tree and has more than one child, it's an articulation point"}),"\n",(0,t.jsx)(e.li,{children:"if the current vertex is not the root and has a child with a discovery time less than or equal to its low value, it's an articulation point\nOutput"}),"\n",(0,t.jsx)(e.li,{children:"output the list of articulation points identified during traversal"}),"\n"]}),"\n"]}),"\n"]})}),(0,t.jsx)(s.A,{value:"tips",label:"Tips",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"utilize efficient data structures for graph representation to optimize traversal"}),"\n",(0,t.jsx)(e.li,{children:"ensure proper handling of back edges during traversal to accurately determine articulation points"}),"\n",(0,t.jsx)(e.li,{children:"pay attention to the conditions for identifying articulation points, especially considering the root vertex and its children"}),"\n"]})})]}),"\n",(0,t.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,t.jsxs)(r.A,{queryString:"primary",children:[(0,t.jsx)(s.A,{value:"practice",label:"Practice",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"function findArticulationPoints(graph):\n  // Initialization\n  articulationPoints = []\n  visited = [False] * (number of vertices)\n  discoveryTime = [0] * (number of vertices)\n  low = [float('inf')] * (number of vertices)\n  parent = [-1] * (number of vertices)\n  time = 0\n\n  // DFS traversal\n  for vertex in range(number of vertices):\n    if not visited[vertex]:\n      dfsArticulationPoints(graph, vertex, visited, discoveryTime, low, parent, articulationPoints)\n\n  return articulationPoints\n\nfunction dfsArticulationPoints(graph, vertex, visited, discoveryTime, low, parent, articulationPoints):\n  // Initialization\n  visited[vertex] = True\n  children = 0\n  discoveryTime[vertex] = time\n  low[vertex] = time\n  time += 1\n\n  // Traverse adjacent vertices\n  for adjacentVertex in graph[vertex]:\n    if not visited[adjacentVertex]:\n      children += 1\n      parent[adjacentVertex] = vertex\n      dfsArticulationPoints(graph, adjacentVertex, visited, discoveryTime, low, parent, articulationPoints)\n\n      // Update low value\n      low[vertex] = min(low[vertex], low[adjacentVertex])\n\n      // Check if vertex is articulation point\n      if parent[vertex] == -1 and children > 1:\n        articulationPoints.append(vertex)\n      if parent[vertex] != -1 and low[adjacentVertex] >= discoveryTime[vertex]:\n        articulationPoints.append(vertex)\n    elif adjacentVertex != parent[vertex]:\n      low[vertex] = min(low[vertex], discoveryTime[adjacentVertex])\n"})})}),(0,t.jsx)(s.A,{value:"solution",label:"Solution",children:(0,t.jsxs)(r.A,{queryString:"code",children:[(0,t.jsx)(s.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,t.jsx)(l.A,{language:"go",children:o})}),(0,t.jsx)(s.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,t.jsx)(l.A,{language:"java",children:c})}),(0,t.jsx)(s.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,t.jsx)(l.A,{language:"js",children:d})}),(0,t.jsx)(s.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,t.jsx)(l.A,{language:"kotlin",children:u})}),(0,t.jsx)(s.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,t.jsx)(l.A,{language:"python",children:v})}),(0,t.jsx)(s.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,t.jsx)(l.A,{language:"rust",children:p})}),(0,t.jsx)(s.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,t.jsx)(l.A,{language:"ts",children:f})})]})})]})]})}function b(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(j,{...n})}):j(n)}}}]);