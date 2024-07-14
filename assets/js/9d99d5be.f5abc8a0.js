"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9108],{3481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>f,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>x});var i=n(86070),r=n(25710),a=n(98459),s=n(37515),o=n(18792);const c="package main\n\ntype Graph struct {\n\tvertices  int\n\tadjacency map[int][]int\n}\n\nfunc NewGraph(vertices int) *Graph {\n\treturn &Graph{\n\t\tvertices:  vertices,\n\t\tadjacency: make(map[int][]int),\n\t}\n}\n\nfunc (g *Graph) AddEdge(u, v int) {\n\tg.adjacency[u] = append(g.adjacency[u], v)\n}\n\nfunc (g *Graph) topologicalSortUtil(vertex int, visited map[int]bool, stack *[]int) {\n\tvisited[vertex] = true\n\tfor _, v := range g.adjacency[vertex] {\n\t\tif !visited[v] {\n\t\t\tg.topologicalSortUtil(v, visited, stack)\n\t\t}\n\t}\n\t*stack = append(*stack, vertex)\n}\n\nfunc (g *Graph) TopologicalSort() []int {\n\tstack := make([]int, 0)\n\tvisited := make(map[int]bool)\n\n\tfor i := 0; i < g.vertices; i++ {\n\t\tif !visited[i] {\n\t\t\tg.topologicalSortUtil(i, visited, &stack)\n\t\t}\n\t}\n\n\tresult := make([]int, g.vertices)\n\tfor i := 0; i < g.vertices; i++ {\n\t\tresult[i] = stack[g.vertices-i-1]\n\t}\n\treturn result\n}\n",l="import java.util.*;\n\nclass Graph {\n\n  private int vertices;\n  private Map<Integer, List<Integer>> adjacency;\n\n  public Graph(int vertices) {\n    this.vertices = vertices;\n    adjacency = new HashMap<>();\n    for (int i = 0; i < vertices; i++) {\n      adjacency.put(i, new ArrayList<>());\n    }\n  }\n\n  public void addEdge(int u, int v) {\n    adjacency.get(u).add(v);\n  }\n\n  private void topologicalSortUtil(int vertex, boolean[] visited, Stack<Integer> stack) {\n    visited[vertex] = true;\n    for (int v : adjacency.get(vertex)) {\n      if (!visited[v]) {\n        topologicalSortUtil(v, visited, stack);\n      }\n    }\n    stack.push(vertex);\n  }\n\n  public List<Integer> topologicalSort() {\n    Stack<Integer> stack = new Stack<>();\n    boolean[] visited = new boolean[vertices];\n\n    for (int i = 0; i < vertices; i++) {\n      if (!visited[i]) {\n        topologicalSortUtil(i, visited, stack);\n      }\n    }\n\n    List<Integer> result = new ArrayList<>();\n    while (!stack.isEmpty()) {\n      result.add(stack.pop());\n    }\n    return result;\n  }\n}\n",d="class Graph {\n  constructor(vertices) {\n    this.vertices = vertices;\n    this.adjacency = new Map();\n    for (let i = 0; i < vertices; i++) {\n      this.adjacency.set(i, []);\n    }\n  }\n\n  addEdge(u, v) {\n    this.adjacency.get(u).push(v);\n  }\n\n  topologicalSortUtil(vertex, visited, stack) {\n    visited[vertex] = true;\n    for (const v of this.adjacency.get(vertex)) {\n      if (!visited[v]) {\n        this.topologicalSortUtil(v, visited, stack);\n      }\n    }\n    stack.push(vertex);\n  }\n\n  topologicalSort() {\n    const stack = [];\n    const visited = new Array(this.vertices).fill(false);\n\n    for (let i = 0; i < this.vertices; i++) {\n      if (!visited[i]) {\n        this.topologicalSortUtil(i, visited, stack);\n      }\n    }\n\n    return stack.reverse();\n  }\n}\n",u="import java.util.*\n\nclass Graph(private val vertices: Int) {\n    private val adjacency: MutableMap<Int, MutableList<Int>> = HashMap()\n\n    init {\n        for (i in 0 until vertices) {\n            adjacency[i] = ArrayList()\n        }\n    }\n\n    fun addEdge(u: Int, v: Int) {\n        adjacency[u]?.add(v)\n    }\n\n    private fun topologicalSortUtil(vertex: Int, visited: BooleanArray, stack: Stack<Int>) {\n        visited[vertex] = true\n        adjacency[vertex]?.forEach { v ->\n            if (!visited[v]) {\n                topologicalSortUtil(v, visited, stack)\n            }\n        }\n        stack.push(vertex)\n    }\n\n    fun topologicalSort(): List<Int> {\n        val stack = Stack<Int>()\n        val visited = BooleanArray(vertices)\n\n        for (i in 0 until vertices) {\n            if (!visited[i]) {\n                topologicalSortUtil(i, visited, stack)\n            }\n        }\n\n        return stack.toList().reversed()\n    }\n}\n",v="from collections import defaultdict\n\nclass Graph:\n    def __init__(self, vertices):\n        self.vertices = vertices\n        self.adjacency = defaultdict(list)\n\n    def add_edge(self, u, v):\n        self.adjacency[u].append(v)\n\n    def topological_sort_util(self, vertex, visited, stack):\n        visited[vertex] = True\n        for v in self.adjacency[vertex]:\n            if not visited[v]:\n                self.topological_sort_util(v, visited, stack)\n        stack.append(vertex)\n\n    def topological_sort(self):\n        visited = [False] * self.vertices\n        stack = []\n\n        for i in range(self.vertices):\n            if not visited[i]:\n                self.topological_sort_util(i, visited, stack)\n\n        return stack[::-1]\n",g="use std::collections::{HashMap, HashSet};\n\nstruct Graph {\n    vertices: usize,\n    adjacency: HashMap<usize, Vec<usize>>,\n}\n\nimpl Graph {\n    fn new(vertices: usize) -> Self {\n        let mut adjacency = HashMap::new();\n        for i in 0..vertices {\n            adjacency.insert(i, Vec::new());\n        }\n        Graph {\n            vertices,\n            adjacency,\n        }\n    }\n\n    fn add_edge(&mut self, u: usize, v: usize) {\n        self.adjacency.get_mut(&u).unwrap().push(v);\n    }\n\n    fn topological_sort_util(&self, vertex: usize, visited: &mut HashSet<usize>, stack: &mut Vec<usize>) {\n        visited.insert(vertex);\n        for &v in &self.adjacency[&vertex] {\n            if !visited.contains(&v) {\n                self.topological_sort_util(v, visited, stack);\n            }\n        }\n        stack.push(vertex);\n    }\n\n    fn topological_sort(&self) -> Vec<usize> {\n        let mut visited = HashSet::new();\n        let mut stack = Vec::new();\n\n        for i in 0..self.vertices {\n            if !visited.contains(&i) {\n                self.topological_sort_util(i, &mut visited, &mut stack);\n            }\n        }\n\n        stack.into_iter().rev().collect()\n    }\n}\n",h="class Graph {\n  vertices: number;\n  adjacency: Map<number, number[]>;\n\n  constructor(vertices: number) {\n    this.vertices = vertices;\n    this.adjacency = new Map();\n    for (let i = 0; i < vertices; i++) {\n      this.adjacency.set(i, []);\n    }\n  }\n\n  addEdge(u: number, v: number): void {\n    this.adjacency.get(u)?.push(v);\n  }\n\n  topologicalSort(): number[] {\n    const stack: number[] = [];\n    const visited: boolean[] = new Array(this.vertices).fill(false);\n\n    for (let i = 0; i < this.vertices; i++) {\n      if (!visited[i]) {\n        this.topologicalSortUtil(i, visited, stack);\n      }\n    }\n\n    return stack.reverse();\n  }\n\n  private topologicalSortUtil(\n    vertex: number,\n    visited: boolean[],\n    stack: number[],\n  ): void {\n    visited[vertex] = true;\n    for (const v of this.adjacency.get(vertex)!) {\n      if (!visited[v]) {\n        this.topologicalSortUtil(v, visited, stack);\n      }\n    }\n    stack.push(vertex);\n  }\n}\n",p={title:"Topological Sorting",description:"Topological Sorting",hide_table_of_contents:!0},f=void 0,m={id:"education/computer-science/algorithms/algo/topological-sorting",title:"Topological Sorting",description:"Topological Sorting",source:"@site/docs/education/01-computer-science/10-algorithms/04-algo/topological-sorting.mdx",sourceDirName:"education/01-computer-science/10-algorithms/04-algo",slug:"/education/computer-science/algorithms/algo/topological-sorting",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/topological-sorting",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/04-algo/topological-sorting.mdx",tags:[],version:"current",frontMatter:{title:"Topological Sorting",description:"Topological Sorting",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Strongly Connected Components - Kosaraju's Algorithm",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/strongly-connected-components-kosarajus-algorithm"},next:{title:"Tower of Hanoi",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/tower-of-hanoi"}},j={},x=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function k(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(a.A,{queryString:"primary",children:[(0,i.jsx)(s.A,{value:"definition",label:"Definition",children:(0,i.jsxs)(t.p,{children:["Topological sorting is a linear ordering of vertices in a directed graph such that for every directed edge ",(0,i.jsx)(t.code,{children:"uv"})," from vertex ",(0,i.jsx)(t.code,{children:"u"})," to vertex ",(0,i.jsx)(t.code,{children:"v"}),", ",(0,i.jsx)(t.code,{children:"u"})," comes before ",(0,i.jsx)(t.code,{children:"v"})," in the ordering"]})}),(0,i.jsx)(s.A,{value:"how",label:"Explanation",children:(0,i.jsx)(t.p,{children:"Repeatedly select a vertex with no incoming edges (in-degree of 0), adding it to the topological order, and removing it along with its outgoing edges. This process continues until all vertices are included in the topological order or until no vertex with zero in-degree is found"})}),(0,i.jsx)(s.A,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Initialize an empty list to store the topological order"}),"\n",(0,i.jsx)(t.li,{children:"Compute the in-degree of each vertex in the graph"}),"\n",(0,i.jsx)(t.li,{children:"Enqueue all vertices with an in-degree of 0 into a queue"}),"\n",(0,i.jsxs)(t.li,{children:["While the queue is not empty","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Dequeue a vertex u from the queue"}),"\n",(0,i.jsx)(t.li,{children:"Add u to the topological order list"}),"\n",(0,i.jsx)(t.li,{children:"For each neighbor v of u, decrement the in-degree of v"}),"\n",(0,i.jsx)(t.li,{children:"If the in-degree of v becomes 0, enqueue v into the queue"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"If the topological order list's length is equal to the number of vertices, return the list as the topological order. Otherwise, the graph has a cycle"}),"\n"]})}),(0,i.jsx)(s.A,{value:"tips",label:"Tips",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"ensure the graph is directed before applying the algorithm"}),"\n",(0,i.jsx)(t.li,{children:"handle cases where the graph may contain cycles"}),"\n",(0,i.jsx)(t.li,{children:"use data structures like queues to efficiently track vertices with zero in-degree"}),"\n"]})})]}),"\n",(0,i.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(a.A,{queryString:"primary",children:[(0,i.jsx)(s.A,{value:"practice",label:"Practice",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'topologicalSort(graph):\n  inDegree[] // array to store in-degree of vertices\n  queue // queue to store vertices with in-degree 0\n  topologicalOrder[] // list to store topological order\n\n  // Initialize in-degree array and queue\n  for each vertex v in graph:\n    inDegree[v] = 0\n  for each edge (u, v) in graph:\n    inDegree[v]++\n    if inDegree[v] == 0:\n      queue.enqueue(v)\n\n  // Perform topological sort\n  while queue is not empty:\n    u = queue.dequeue()\n    topologicalOrder.append(u)\n    for each neighbor v of u in graph:\n      inDegree[v]--\n      if inDegree[v] == 0:\n        queue.enqueue(v)\n\n  // Check for cycles\n  if size of topologicalOrder != number of vertices:\n    return "Graph has a cycle"\n\n  return topologicalOrder\n'})})}),(0,i.jsx)(s.A,{value:"solution",label:"Solution",children:(0,i.jsxs)(a.A,{queryString:"code",children:[(0,i.jsx)(s.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(o.A,{language:"go",children:c})}),(0,i.jsx)(s.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(o.A,{language:"java",children:l})}),(0,i.jsx)(s.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(o.A,{language:"js",children:d})}),(0,i.jsx)(s.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(o.A,{language:"kotlin",children:u})}),(0,i.jsx)(s.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(o.A,{language:"python",children:v})}),(0,i.jsx)(s.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(o.A,{language:"rust",children:g})}),(0,i.jsx)(s.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(o.A,{language:"ts",children:h})})]})})]})]})}function y(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);