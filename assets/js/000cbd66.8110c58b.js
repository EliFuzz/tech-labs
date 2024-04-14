"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5386],{2286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>x,default:()=>b,frontMatter:()=>v,metadata:()=>m,toc:()=>_});var r=n(11527),i=n(84135),a=n(40521),c=n(74109),s=n(80035);const d="package main\n\ntype Graph map[int][]int\n\nfunc fleurysAlgorithm(graph Graph) []int {\n\tvar circuit []int\n\toddVertices := findOddVertices(graph)\n\n\tstartVertex := 0\n\tif len(oddVertices) > 0 {\n\t\tstartVertex = oddVertices[0]\n\t}\n\n\tDFS(graph, startVertex, &circuit)\n\n\treturn circuit\n}\n\nfunc DFS(graph Graph, vertex int, circuit *[]int) {\n\tfor len(graph[vertex]) > 0 {\n\t\tnextVertex := graph[vertex][0]\n\t\tremoveEdge(graph, vertex, nextVertex)\n\t\tDFS(graph, nextVertex, circuit)\n\t}\n\t*circuit = append(*circuit, vertex)\n}\n\nfunc removeEdge(graph Graph, u, v int) {\n\tfor i, w := range graph[u] {\n\t\tif w == v {\n\t\t\tgraph[u] = append(graph[u][:i], graph[u][i+1:]...)\n\t\t\tbreak\n\t\t}\n\t}\n\tfor i, w := range graph[v] {\n\t\tif w == u {\n\t\t\tgraph[v] = append(graph[v][:i], graph[v][i+1:]...)\n\t\t\tbreak\n\t\t}\n\t}\n}\n\nfunc findOddVertices(graph Graph) []int {\n\toddVertices := make([]int, 0)\n\tfor v, neighbors := range graph {\n\t\tif len(neighbors)%2 != 0 {\n\t\t\toddVertices = append(oddVertices, v)\n\t\t}\n\t}\n\treturn oddVertices\n}\n",l="import java.util.*;\n\npublic class FleuryAlgorithm {\n\n  public static List<Integer> fleurysAlgorithm(Map<Integer, List<Integer>> graph) {\n    List<Integer> circuit = new ArrayList<>();\n    List<Integer> oddVertices = findOddVertices(graph);\n\n    int startVertex = 0;\n    if (!oddVertices.isEmpty()) {\n      startVertex = oddVertices.get(0);\n    }\n\n    DFS(graph, startVertex, circuit);\n\n    return circuit;\n  }\n\n  public static void DFS(Map<Integer, List<Integer>> graph, int vertex, List<Integer> circuit) {\n    while (!graph.get(vertex).isEmpty()) {\n      int nextVertex = graph.get(vertex).get(0);\n      removeEdge(graph, vertex, nextVertex);\n      DFS(graph, nextVertex, circuit);\n    }\n    circuit.add(vertex);\n  }\n\n  public static void removeEdge(Map<Integer, List<Integer>> graph, int u, int v) {\n    graph.get(u).remove(Integer.valueOf(v));\n    graph.get(v).remove(Integer.valueOf(u));\n  }\n\n  public static List<Integer> findOddVertices(Map<Integer, List<Integer>> graph) {\n    List<Integer> oddVertices = new ArrayList<>();\n    for (Map.Entry<Integer, List<Integer>> entry : graph.entrySet()) {\n      if (entry.getValue().size() % 2 != 0) {\n        oddVertices.add(entry.getKey());\n      }\n    }\n    return oddVertices;\n  }\n}\n",h="function fleurysAlgorithm(graph) {\n  let circuit = [];\n  let oddVertices = findOddVertices(graph);\n\n  let startVertex = 0;\n  if (oddVertices.length > 0) {\n    startVertex = oddVertices[0];\n  }\n\n  DFS(graph, startVertex, circuit);\n\n  return circuit;\n}\n\nfunction DFS(graph, vertex, circuit) {\n  while (graph[vertex].length > 0) {\n    let nextVertex = graph[vertex][0];\n    removeEdge(graph, vertex, nextVertex);\n    DFS(graph, nextVertex, circuit);\n  }\n  circuit.push(vertex);\n}\n\nfunction removeEdge(graph, u, v) {\n  graph[u] = graph[u].filter((item) => item !== v);\n  graph[v] = graph[v].filter((item) => item !== u);\n}\n\nfunction findOddVertices(graph) {\n  let oddVertices = [];\n  for (let vertex in graph) {\n    if (graph[vertex].length % 2 !== 0) {\n      oddVertices.push(parseInt(vertex));\n    }\n  }\n  return oddVertices;\n}\n",o="fun fleurysAlgorithm(graph: MutableMap<Int, MutableList<Int>>): List<Int> {\n    val circuit = mutableListOf<Int>()\n    val oddVertices = findOddVertices(graph)\n\n    var startVertex = 0\n    if (oddVertices.isNotEmpty()) {\n        startVertex = oddVertices[0]\n    }\n\n    DFS(graph, startVertex, circuit)\n\n    return circuit\n}\n\nfun DFS(graph: MutableMap<Int, MutableList<Int>>, vertex: Int, circuit: MutableList<Int>) {\n    while (graph[vertex]!!.isNotEmpty()) {\n        val nextVertex = graph[vertex]!!.removeAt(0)\n        removeEdge(graph, vertex, nextVertex)\n        DFS(graph, nextVertex, circuit)\n    }\n    circuit.add(vertex)\n}\n\nfun removeEdge(graph: MutableMap<Int, MutableList<Int>>, u: Int, v: Int) {\n    graph[u]!!.remove(v)\n    graph[v]!!.remove(u)\n}\n\nfun findOddVertices(graph: Map<Int, List<Int>>): List<Int> {\n    val oddVertices = mutableListOf<Int>()\n    for ((vertex, neighbors) in graph) {\n        if (neighbors.size % 2 != 0) {\n            oddVertices.add(vertex)\n        }\n    }\n    return oddVertices\n}\n",u="def fleurys_algorithm(graph):\n    circuit = []\n    odd_vertices = find_odd_vertices(graph)\n\n    start_vertex = 0\n    if odd_vertices:\n        start_vertex = odd_vertices[0]\n\n    DFS(graph, start_vertex, circuit)\n\n    return circuit\n\ndef DFS(graph, vertex, circuit):\n    while graph[vertex]:\n        next_vertex = graph[vertex].pop(0)\n        remove_edge(graph, vertex, next_vertex)\n        DFS(graph, next_vertex, circuit)\n    circuit.append(vertex)\n\ndef remove_edge(graph, u, v):\n    graph[u].remove(v)\n    graph[v].remove(u)\n\ndef find_odd_vertices(graph):\n    odd_vertices = []\n    for vertex in graph:\n        if len(graph[vertex]) % 2 != 0:\n            odd_vertices.append(vertex)\n    return odd_vertices\n",g="use std::collections::HashMap;\n\nfn fleurys_algorithm(graph: &mut HashMap<i32, Vec<i32>>) -> Vec<i32> {\n    let mut circuit = Vec::new();\n    let odd_vertices = find_odd_vertices(graph);\n\n    let mut start_vertex = 0;\n    if !odd_vertices.is_empty() {\n        start_vertex = odd_vertices[0];\n    }\n\n    DFS(graph, start_vertex, &mut circuit);\n\n    circuit\n}\n\nfn dfs(graph: &mut HashMap<i32, Vec<i32>>, vertex: i32, circuit: &mut Vec<i32>) {\n    while !graph[&vertex].is_empty() {\n        let next_vertex = graph.get_mut(&vertex).unwrap().remove(0);\n        remove_edge(graph, vertex, next_vertex);\n        dfs(graph, next_vertex, circuit);\n    }\n    circuit.push(vertex);\n}\n\nfn remove_edge(graph: &mut HashMap<i32, Vec<i32>>, u: i32, v: i32) {\n    graph.get_mut(&u).unwrap().retain(|&x| x != v);\n    graph.get_mut(&v).unwrap().retain(|&x| x != u);\n}\n\nfn find_odd_vertices(graph: &HashMap<i32, Vec<i32>>) -> Vec<i32> {\n    let mut odd_vertices = Vec::new();\n    for (vertex, neighbors) in graph {\n        if neighbors.len() % 2 != 0 {\n            odd_vertices.push(*vertex);\n        }\n    }\n    odd_vertices\n}\n",p="function fleurysAlgorithm(graph: Map<number, number[]>): number[] {\n  const circuit: number[] = [];\n  const oddVertices = findOddVertices(graph);\n\n  let startVertex = 0;\n  if (oddVertices.length > 0) {\n    startVertex = oddVertices[0];\n  }\n\n  DFS(graph, startVertex, circuit);\n\n  return circuit;\n}\n\nfunction DFS(graph: Map<number, number[]>, vertex: number, circuit: number[]) {\n  while (graph.get(vertex)?.length) {\n    const nextVertex = graph.get(vertex)!.shift()!;\n    removeEdge(graph, vertex, nextVertex);\n    DFS(graph, nextVertex, circuit);\n  }\n  circuit.push(vertex);\n}\n\nfunction removeEdge(graph: Map<number, number[]>, u: number, v: number) {\n  graph.set(u, graph.get(u)?.filter((item) => item !== v)!);\n  graph.set(v, graph.get(v)?.filter((item) => item !== u)!);\n}\n\nfunction findOddVertices(graph: Map<number, number[]>): number[] {\n  const oddVertices: number[] = [];\n  for (let [vertex, neighbors] of graph) {\n    if (neighbors.length % 2 !== 0) {\n      oddVertices.push(vertex);\n    }\n  }\n  return oddVertices;\n}\n",v={title:"Eulerian Path and Eulerian Circuit - Fleury's Algorithm",description:"Eulerian Path and Eulerian Circuit - Fleury's Algorithm",hide_table_of_contents:!0},x=void 0,m={id:"education/computer-science/algorithms/algo/eulerian-path-and-eulerian-circuit-fleurys-algorithm",title:"Eulerian Path and Eulerian Circuit - Fleury's Algorithm",description:"Eulerian Path and Eulerian Circuit - Fleury's Algorithm",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/eulerian-path-and-eulerian-circuit-fleurys-algorithm.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/eulerian-path-and-eulerian-circuit-fleurys-algorithm",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/eulerian-path-and-eulerian-circuit-fleurys-algorithm",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/eulerian-path-and-eulerian-circuit-fleurys-algorithm.mdx",tags:[],version:"current",frontMatter:{title:"Eulerian Path and Eulerian Circuit - Fleury's Algorithm",description:"Eulerian Path and Eulerian Circuit - Fleury's Algorithm",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Euclidean Distance",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/euclidean-distance"},next:{title:"Factorial",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/factorial"}},f={},_=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function V(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(c.Z,{value:"definition",label:"Definition",children:(0,r.jsx)(t.p,{children:"Fleury's Algorithm is a method for finding Eulerian paths and circuits in a graph. It's particularly useful when dealing with graphs that have a mix of even and odd degree vertices"})}),(0,r.jsx)(c.Z,{value:"how",label:"Explanation",children:(0,r.jsx)(t.p,{children:"Select any vertex within the graph. Proceed by examining the number of edges connected to the current vertex. If only one edge exists, follow that edge. However, if multiple edges are present, prioritize selecting an edge that maintains graph connectivity; otherwise, any edge can be chosen. Once an edge is selected, mark it as visited and remove it from the graph. Transition to the vertex at the opposite end of the chosen edge. Continue this process of edge selection, traversal, and removal until no edges remain unexplored in the graph"})}),(0,r.jsx)(c.Z,{value:"guidance",label:"Guidance",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Choose a starting vertex"}),"\n",(0,r.jsx)(t.li,{children:"If the starting vertex has an odd degree, choose another starting vertex with an odd degree if one exists; otherwise, start with any vertex"}),"\n",(0,r.jsxs)(t.li,{children:["While there are unexplored edges","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"if the current vertex has only one unexplored edge, follow that edge"}),"\n",(0,r.jsxs)(t.li,{children:["if the current vertex has multiple unexplored edges","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"choose an edge that doesn't disconnect the graph if possible"}),"\n",(0,r.jsx)(t.li,{children:"if all edges disconnect the graph, choose any edge"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"mark the chosen edge as visited and remove it from the graph"}),"\n",(0,r.jsx)(t.li,{children:"move to the other end of the chosen edge"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Stop when all edges are explored"}),"\n"]})}),(0,r.jsx)(c.Z,{value:"tips",label:"Tips",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"keep track of the degrees of vertices to efficiently choose the next edge"}),"\n",(0,r.jsx)(t.li,{children:"use graph traversal techniques such as depth-first search (DFS) or breadth-first search (BFS) to implement Fleury's Algorithm"}),"\n"]})})]}),"\n",(0,r.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(c.Z,{value:"practice",label:"Practice",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"fleury(graph):\n  initialize empty list path\n  current_vertex = any_vertex_with_odd_degree(graph) or any_vertex(graph)\n  while graph has edges:\n    if current_vertex has unvisited edges:\n      next_vertex = choose_edge(current_vertex, graph)\n      remove_edge(current_vertex, next_vertex, graph)\n      add current_vertex to path\n      current_vertex = next_vertex\n    else:\n      add current_vertex to path\n      break\n  return path\n\nchoose_edge(vertex, graph):\n  for each adjacent_vertex of vertex:\n    if removing_edge(vertex, adjacent_vertex, graph) does not disconnect graph:\n      return adjacent_vertex\n  return any adjacent_vertex\n\nremoving_edge(vertex1, vertex2, graph):\n  remove edge between vertex1 and vertex2 from graph temporarily\n  check if graph is still connected\n  restore edge between vertex1 and vertex2 in graph\n  return true if graph is still connected, false otherwise\n\nany_vertex_with_odd_degree(graph):\n  for each vertex in graph:\n    if degree of vertex is odd:\n      return vertex\n  return null\n"})})}),(0,r.jsx)(c.Z,{value:"solution",label:"Solution",children:(0,r.jsxs)(a.Z,{queryString:"code",children:[(0,r.jsx)(c.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,r.jsx)(s.Z,{language:"go",children:d})}),(0,r.jsx)(c.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,r.jsx)(s.Z,{language:"java",children:l})}),(0,r.jsx)(c.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,r.jsx)(s.Z,{language:"js",children:h})}),(0,r.jsx)(c.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,r.jsx)(s.Z,{language:"kotlin",children:o})}),(0,r.jsx)(c.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,r.jsx)(s.Z,{language:"python",children:u})}),(0,r.jsx)(c.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,r.jsx)(s.Z,{language:"rust",children:g})}),(0,r.jsx)(c.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,r.jsx)(s.Z,{language:"ts",children:p})})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(V,{...e})}):V(e)}}}]);