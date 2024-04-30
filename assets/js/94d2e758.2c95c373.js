"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[833],{34485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>m,default:()=>k,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var r=t(86070),i=t(27468),s=t(78826),a=t(28437),o=t(41634);const d='package main\n\nimport (\n    "sort"\n)\n\ntype Edge struct {\n    Source, Destination, Weight int\n}\n\ntype Graph struct {\n    Vertices, Edges int\n    EdgeList        []Edge\n}\n\nfunc (g *Graph) addEdge(src, dest, weight int) {\n    g.EdgeList = append(g.EdgeList, Edge{src, dest, weight})\n}\n\ntype UnionFind struct {\n    parent []int\n}\n\nfunc newUnionFind(n int) *UnionFind {\n    parent := make([]int, n)\n    for i := range parent {\n        parent[i] = i\n    }\n    return &UnionFind{parent}\n}\n\nfunc (uf *UnionFind) find(x int) int {\n    if uf.parent[x] != x {\n        uf.parent[x] = uf.find(uf.parent[x])\n    }\n    return uf.parent[x]\n}\n\nfunc (uf *UnionFind) union(x, y int) {\n    rootX := uf.find(x)\n    rootY := uf.find(y)\n    uf.parent[rootX] = rootY\n}\n\nfunc kruskals(g *Graph) []Edge {\n    var result []Edge\n    sort.Slice(g.EdgeList, func(i, j int) bool {\n        return g.EdgeList[i].Weight < g.EdgeList[j].Weight\n    })\n\n    uf := newUnionFind(g.Vertices)\n    for _, edge := range g.EdgeList {\n        if uf.find(edge.Source) != uf.find(edge.Destination) {\n            uf.union(edge.Source, edge.Destination)\n            result = append(result, edge)\n        }\n    }\n    return result\n}\n',l="import java.util.*;\n\nclass Edge implements Comparable<Edge> {\n\n  int source, destination, weight;\n\n  public Edge(int source, int destination, int weight) {\n    this.source = source;\n    this.destination = destination;\n    this.weight = weight;\n  }\n\n  @Override\n  public int compareTo(Edge compareEdge) {\n    return this.weight - compareEdge.weight;\n  }\n}\n\nclass Graph {\n\n  int vertices, edges;\n  Edge[] edgeList;\n\n  public Graph(int vertices, int edges) {\n    this.vertices = vertices;\n    this.edges = edges;\n    edgeList = new Edge[edges];\n  }\n\n  public void addEdge(int source, int destination, int weight, int index) {\n    edgeList[index] = new Edge(source, destination, weight);\n  }\n}\n\nclass KruskalsAlgorithm {\n\n  public static int findParent(int[] parent, int vertex) {\n    if (parent[vertex] != vertex) {\n      parent[vertex] = findParent(parent, parent[vertex]);\n    }\n    return parent[vertex];\n  }\n\n  public static void union(int[] parent, int x, int y) {\n    int rootX = findParent(parent, x);\n    int rootY = findParent(parent, y);\n    parent[rootX] = rootY;\n  }\n\n  public static List<Edge> kruskals(Graph graph) {\n    List<Edge> result = new ArrayList<>();\n    Arrays.sort(graph.edgeList);\n\n    int[] parent = new int[graph.vertices];\n    for (int i = 0; i < graph.vertices; i++) {\n      parent[i] = i;\n    }\n\n    int edgeCount = 0;\n    for (Edge edge : graph.edgeList) {\n      if (edgeCount == graph.vertices - 1) {\n        break;\n      }\n\n      int sourceParent = findParent(parent, edge.source);\n      int destinationParent = findParent(parent, edge.destination);\n\n      if (sourceParent != destinationParent) {\n        result.add(edge);\n        union(parent, sourceParent, destinationParent);\n        edgeCount++;\n      }\n    }\n\n    return result;\n  }\n}\n",c="class Edge {\n  constructor(source, destination, weight) {\n    this.source = source;\n    this.destination = destination;\n    this.weight = weight;\n  }\n}\n\nclass Graph {\n  constructor(vertices, edges) {\n    this.vertices = vertices;\n    this.edges = edges;\n    this.edgeList = [];\n  }\n\n  addEdge(source, destination, weight) {\n    this.edgeList.push(new Edge(source, destination, weight));\n  }\n}\n\nclass KruskalsAlgorithm {\n  static findParent(parent, vertex) {\n    if (parent[vertex] !== vertex) {\n      parent[vertex] = this.findParent(parent, parent[vertex]);\n    }\n    return parent[vertex];\n  }\n\n  static union(parent, x, y) {\n    const rootX = this.findParent(parent, x);\n    const rootY = this.findParent(parent, y);\n    parent[rootX] = rootY;\n  }\n\n  static kruskals(graph) {\n    const result = [];\n    graph.edgeList.sort((a, b) => a.weight - b.weight);\n\n    const parent = Array.from({ length: graph.vertices }, (_, i) => i);\n\n    let edgeCount = 0;\n    for (const edge of graph.edgeList) {\n      if (edgeCount === graph.vertices - 1) {\n        break;\n      }\n\n      const sourceParent = this.findParent(parent, edge.source);\n      const destinationParent = this.findParent(parent, edge.destination);\n\n      if (sourceParent !== destinationParent) {\n        result.push(edge);\n        this.union(parent, sourceParent, destinationParent);\n        edgeCount++;\n      }\n    }\n\n    return result;\n  }\n}\n",g="data class Edge(val source: Int, val destination: Int, val weight: Int)\n\nclass Graph(private val vertices: Int) {\n    val edgeList = mutableListOf<Edge>()\n\n    fun addEdge(source: Int, destination: Int, weight: Int) {\n        edgeList.add(Edge(source, destination, weight))\n    }\n}\n\nclass KruskalsAlgorithm(private val graph: Graph) {\n    private fun findParent(parent: IntArray, vertex: Int): Int {\n        var v = vertex\n        if (parent[v] != v) {\n            parent[v] = findParent(parent, parent[v])\n        }\n        return parent[v]\n    }\n\n    private fun union(parent: IntArray, x: Int, y: Int) {\n        val rootX = findParent(parent, x)\n        val rootY = findParent(parent, y)\n        parent[rootX] = rootY\n    }\n\n    fun kruskals(): List<Edge> {\n        val result = mutableListOf<Edge>()\n        graph.edgeList.sortBy { it.weight }\n\n        val parent = IntArray(graph.vertices) { it }\n\n        var edgeCount = 0\n        for (edge in graph.edgeList) {\n            if (edgeCount == graph.vertices - 1)\n                break\n\n            val sourceParent = findParent(parent, edge.source)\n            val destinationParent = findParent(parent, edge.destination)\n\n            if (sourceParent != destinationParent) {\n                result.add(edge)\n                union(parent, sourceParent, destinationParent)\n                edgeCount++\n            }\n        }\n\n        return result\n    }\n}\n",u="class Edge:\n    def __init__(self, source, destination, weight):\n        self.source = source\n        self.destination = destination\n        self.weight = weight\n\nclass Graph:\n    def __init__(self, vertices):\n        self.vertices = vertices\n        self.edgeList = []\n\n    def addEdge(self, source, destination, weight):\n        self.edgeList.append(Edge(source, destination, weight))\n\nclass KruskalsAlgorithm:\n    @staticmethod\n    def findParent(parent, vertex):\n        if parent[vertex] != vertex:\n            parent[vertex] = KruskalsAlgorithm.findParent(parent, parent[vertex])\n        return parent[vertex]\n\n    @staticmethod\n    def union(parent, x, y):\n        rootX = KruskalsAlgorithm.findParent(parent, x)\n        rootY = KruskalsAlgorithm.findParent(parent, y)\n        parent[rootX] = rootY\n\n    @staticmethod\n    def kruskals(graph):\n        result = []\n        graph.edgeList.sort(key=lambda x: x.weight)\n\n        parent = [i for i in range(graph.vertices)]\n\n        edgeCount = 0\n        for edge in graph.edgeList:\n            if edgeCount == graph.vertices - 1:\n                break\n\n            sourceParent = KruskalsAlgorithm.findParent(parent, edge.source)\n            destinationParent = KruskalsAlgorithm.findParent(parent, edge.destination)\n\n            if sourceParent != destinationParent:\n                result.append(edge)\n                KruskalsAlgorithm.union(parent, sourceParent, destinationParent)\n                edgeCount += 1\n\n        return result\n",h="#[derive(Clone, Copy)]\nstruct Edge {\n    source: usize,\n    destination: usize,\n    weight: i32,\n}\n\nstruct Graph {\n    vertices: usize,\n    edge_list: Vec<Edge>,\n}\n\nimpl Graph {\n    fn new(vertices: usize) -> Self {\n        Graph {\n            vertices,\n            edge_list: Vec::new(),\n        }\n    }\n\n    fn add_edge(&mut self, source: usize, destination: usize, weight: i32) {\n        self.edge_list.push(Edge {\n            source,\n            destination,\n            weight,\n        });\n    }\n}\n\nfn find_parent(parent: &mut Vec<usize>, vertex: usize) -> usize {\n    if parent[vertex] != vertex {\n        parent[vertex] = find_parent(parent, parent[vertex]);\n    }\n    parent[vertex]\n}\n\nfn union(parent: &mut Vec<usize>, x: usize, y: usize) {\n    let root_x = find_parent(parent, x);\n    let root_y = find_parent(parent, y);\n    parent[root_x] = root_y;\n}\n\nfn kruskals(graph: &Graph) -> Vec<Edge> {\n    let mut result = Vec::new();\n    let mut edge_list = graph.edge_list.clone();\n    edge_list.sort_by_key(|x| x.weight);\n    let mut parent: Vec<usize> = (0..graph.vertices).collect();\n\n    let mut edge_count = 0;\n    for edge in edge_list {\n        if edge_count == graph.vertices - 1 {\n            break;\n        }\n        let source_parent = find_parent(&mut parent, edge.source);\n        let destination_parent = find_parent(&mut parent, edge.destination);\n        if source_parent != destination_parent {\n            result.push(edge);\n            union(&mut parent, source_parent, destination_parent);\n            edge_count += 1;\n        }\n    }\n    result\n}\n",p="class Edge {\n  source: number;\n  destination: number;\n  weight: number;\n\n  constructor(source: number, destination: number, weight: number) {\n    this.source = source;\n    this.destination = destination;\n    this.weight = weight;\n  }\n}\n\nclass Graph {\n  vertices: number;\n  edgeList: Edge[];\n\n  constructor(vertices: number) {\n    this.vertices = vertices;\n    this.edgeList = [];\n  }\n\n  addEdge(source: number, destination: number, weight: number) {\n    this.edgeList.push(new Edge(source, destination, weight));\n  }\n}\n\nclass KruskalsAlgorithm {\n  static findParent(parent: number[], vertex: number): number {\n    if (parent[vertex] !== vertex) {\n      parent[vertex] = this.findParent(parent, parent[vertex]);\n    }\n    return parent[vertex];\n  }\n\n  static union(parent: number[], x: number, y: number) {\n    const rootX = this.findParent(parent, x);\n    const rootY = this.findParent(parent, y);\n    parent[rootX] = rootY;\n  }\n\n  static kruskals(graph: Graph): Edge[] {\n    const result: Edge[] = [];\n    graph.edgeList.sort((a, b) => a.weight - b.weight);\n\n    const parent = Array.from({ length: graph.vertices }, (_, i) => i);\n\n    let edgeCount = 0;\n    for (const edge of graph.edgeList) {\n      if (edgeCount === graph.vertices - 1) break;\n\n      const sourceParent = this.findParent(parent, edge.source);\n      const destinationParent = this.findParent(parent, edge.destination);\n\n      if (sourceParent !== destinationParent) {\n        result.push(edge);\n        this.union(parent, sourceParent, destinationParent);\n        edgeCount++;\n      }\n    }\n\n    return result;\n  }\n}\n",f={title:"Kruskal's Algorithm",description:"Kruskal's Algorithm",hide_table_of_contents:!0},m=void 0,v={id:"education/computer-science/algorithms/algo/kruskals-algorithm",title:"Kruskal's Algorithm",description:"Kruskal's Algorithm",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/kruskals-algorithm.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/kruskals-algorithm",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/kruskals-algorithm",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/kruskals-algorithm.mdx",tags:[],version:"current",frontMatter:{title:"Kruskal's Algorithm",description:"Kruskal's Algorithm",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Knuth\u2013Morris\u2013Pratt Algorithm (KMP Algorithm)",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/knuth\u2013morris\u2013pratt-algorithm"},next:{title:"Least Common Multiple (LCM)",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/least-common-multiple"}},x={},b=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function w(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(s.A,{queryString:"primary",children:[(0,r.jsx)(a.A,{value:"definition",label:"Definition",children:(0,r.jsx)(n.p,{children:"Kruskal's Algorithm is a greedy algorithm used to find the minimum spanning tree (MST) of a connected, undirected graph. It works by selecting edges in increasing order of weight until all vertices are connected without forming a cycle"})}),(0,r.jsx)(a.A,{value:"how",label:"Explanation",children:(0,r.jsx)(n.p,{children:"Create an empty graph which will eventually represent the Minimum Spanning Tree (MST). Next, arrange all edges of the graph in ascending order based on their weights. Then, proceed to traverse through these sorted edges. During each iteration, evaluate if including the current edge into the MST introduces a cycle; if not, incorporate it into the MST. This process repeats until all vertices in the graph are interconnected within the MST"})}),(0,r.jsx)(a.A,{value:"guidance",label:"Guidance",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sort all edges of the graph in non-decreasing order of weight"}),"\n",(0,r.jsx)(n.li,{children:"Initialize an empty MST"}),"\n",(0,r.jsx)(n.li,{children:"Iterate through the sorted edges"}),"\n",(0,r.jsx)(n.li,{children:"If adding the current edge to the MST does not form a cycle, add it to the MST"}),"\n",(0,r.jsx)(n.li,{children:"Use a disjoint-set data structure to detect cycles"}),"\n",(0,r.jsx)(n.li,{children:"Continue until all vertices are connected in the MST"}),"\n",(0,r.jsx)(n.li,{children:"Return the MST"}),"\n"]})}),(0,r.jsx)(a.A,{value:"tips",label:"Tips",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"use a disjoint-set data structure (such as Union-Find) to efficiently detect cycles"}),"\n",(0,r.jsx)(n.li,{children:"always prioritize edges with the smallest weights to ensure the resulting MST is minimal"}),"\n",(0,r.jsx)(n.li,{children:"implement efficient sorting algorithms, such as merge sort or quicksort, to sort the edges"}),"\n"]})})]}),"\n",(0,r.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsxs)(s.A,{queryString:"primary",children:[(0,r.jsx)(a.A,{value:"practice",label:"Practice",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"kruskalMST(graph):\n    edges = graph.getAllEdges() // Retrieve all edges from the graph\n    edges.sort() // Sort edges in non-decreasing order of weight\n    MST = new Graph() // Initialize an empty graph to hold the MST\n    disjointSet = new DisjointSet() // Initialize a disjoint-set data structure\n\n    for edge in edges:\n        if !disjointSet.isSameSet(edge.start, edge.end):\n            // Adding this edge does not form a cycle\n            MST.addEdge(edge.start, edge.end, edge.weight) // Add edge to the MST\n            disjointSet.union(edge.start, edge.end) // Union the sets of the vertices\n\n        if MST.numEdges == MST.numVertices - 1:\n            break // MST is complete when all vertices are connected\n\n    return MST\n"})})}),(0,r.jsx)(a.A,{value:"solution",label:"Solution",children:(0,r.jsxs)(s.A,{queryString:"code",children:[(0,r.jsx)(a.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,r.jsx)(o.A,{language:"go",children:d})}),(0,r.jsx)(a.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,r.jsx)(o.A,{language:"java",children:l})}),(0,r.jsx)(a.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,r.jsx)(o.A,{language:"js",children:c})}),(0,r.jsx)(a.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,r.jsx)(o.A,{language:"kotlin",children:g})}),(0,r.jsx)(a.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,r.jsx)(o.A,{language:"python",children:u})}),(0,r.jsx)(a.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,r.jsx)(o.A,{language:"rust",children:h})}),(0,r.jsx)(a.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,r.jsx)(o.A,{language:"ts",children:p})})]})})]})]})}function k(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(w,{...e})}):w(e)}}}]);