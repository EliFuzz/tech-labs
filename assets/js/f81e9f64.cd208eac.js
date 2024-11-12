"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1480],{77517:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>y,frontMatter:()=>f,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"education/computer-science/algorithms/algo/floyd-warshall-algorithm","title":"Floyd-Warshall Algorithm","description":"Floyd-Warshall Algorithm","source":"@site/docs/education/01-computer-science/10-algorithms/04-algo/floyd-warshall-algorithm.mdx","sourceDirName":"education/01-computer-science/10-algorithms/04-algo","slug":"/education/computer-science/algorithms/algo/floyd-warshall-algorithm","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/floyd-warshall-algorithm","draft":false,"unlisted":false,"editUrl":"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/04-algo/floyd-warshall-algorithm.mdx","tags":[],"version":"current","frontMatter":{"title":"Floyd-Warshall Algorithm","description":"Floyd-Warshall Algorithm","hide_table_of_contents":true},"sidebar":"education","previous":{"title":"Fisher\u2013Yates Shuffle","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/fisher\u2013yates-shuffle"},"next":{"title":"Hamiltonian Cycle","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/hamiltonian-cycle"}}');var a=i(86070),r=i(15658),s=i(33407),l=i(33903),o=i(68171);const c="package main\n\nfunc floydWarshall(graph [][]int, V int) [][]int {\n\tdist := make([][]int, V)\n\n\tfor i := range dist {\n\t\tdist[i] = make([]int, V)\n\t\tcopy(dist[i], graph[i])\n\t}\n\n\tfor k := 0; k < V; k++ {\n\t\tfor i := 0; i < V; i++ {\n\t\t\tfor j := 0; j < V; j++ {\n\t\t\t\tif dist[i][k]+dist[k][j] < dist[i][j] {\n\t\t\t\t\tdist[i][j] = dist[i][k] + dist[k][j]\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\treturn dist\n}\n",d="import java.util.Arrays;\n\nclass FloydWarshall {\n\n  final static int INF = 99999;\n\n  void floydWarshall(int graph[][], int V) {\n    int dist[][] = new int[V][V];\n\n    for (int i = 0; i < V; i++) {\n      for (int j = 0; j < V; j++) {\n        dist[i][j] = graph[i][j];\n      }\n    }\n\n    for (int k = 0; k < V; k++) {\n      for (int i = 0; i < V; i++) {\n        for (int j = 0; j < V; j++) {\n          if (dist[i][k] + dist[k][j] < dist[i][j]) {\n            dist[i][j] = dist[i][k] + dist[k][j];\n          }\n        }\n      }\n    }\n    printSolution(dist, V);\n  }\n}\n",h="const INF = 99999;\n\nfunction floydWarshall(graph) {\n  const dist = [...graph.map((row) => [...row])];\n  const V = dist.length;\n\n  for (let k = 0; k < V; k++) {\n    for (let i = 0; i < V; i++) {\n      for (let j = 0; j < V; j++) {\n        if (dist[i][k] + dist[k][j] < dist[i][j]) {\n          dist[i][j] = dist[i][k] + dist[k][j];\n        }\n      }\n    }\n  }\n\n  return dist;\n}\n",g="fun floydWarshall(graph: Array<IntArray>, V: Int): Array<IntArray> {\n    val dist = Array(V) { i -> IntArray(V) { j -> graph[i][j] } }\n\n    for (k in 0 until V) {\n        for (i in 0 until V) {\n            for (j in 0 until V) {\n                if (dist[i][k] + dist[k][j] < dist[i][j]) {\n                    dist[i][j] = dist[i][k] + dist[k][j]\n                }\n            }\n        }\n    }\n\n    return dist\n}\n",u="INF = 99999\n\ndef floydWarshall(graph):\n    V = len(graph)\n    dist = [[0] * V for _ in range(V)]\n\n    for i in range(V):\n        for j in range(V):\n            dist[i][j] = graph[i][j]\n\n    for k in range(V):\n        for i in range(V):\n            for j in range(V):\n                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])\n\n    return dist\n",p="const INF: i32 = 99999;\n\nfn floyd_warshall(graph: &mut Vec<Vec<i32>>) {\n    let V = graph.len();\n    for k in 0..V {\n        for i in 0..V {\n            for j in 0..V {\n                if graph[i][k] + graph[k][j] < graph[i][j] {\n                    graph[i][j] = graph[i][k] + graph[k][j];\n                }\n            }\n        }\n    }\n}\n",j="function floydWarshall(graph: number[][]): number[][] {\n  const V = graph.length;\n  const dist: number[][] = [];\n\n  for (let i = 0; i < V; i++) {\n    dist[i] = [];\n    for (let j = 0; j < V; j++) {\n      dist[i][j] = graph[i][j];\n    }\n  }\n\n  for (let k = 0; k < V; k++) {\n    for (let i = 0; i < V; i++) {\n      for (let j = 0; j < V; j++) {\n        if (dist[i][k] + dist[k][j] < dist[i][j]) {\n          dist[i][j] = dist[i][k] + dist[k][j];\n        }\n      }\n    }\n  }\n\n  return dist;\n}\n",f={title:"Floyd-Warshall Algorithm",description:"Floyd-Warshall Algorithm",hide_table_of_contents:!0},m=void 0,v={},x=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function k(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsxs)(s.A,{queryString:"primary",children:[(0,a.jsx)(l.A,{value:"definition",label:"Definition",children:(0,a.jsx)(t.p,{children:"The Floyd-Warshall algorithm is a dynamic programming technique used to find the shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles). It efficiently computes the shortest paths between all pairs of vertices in a graph, making it suitable for problems where the shortest distances between all pairs of vertices are required"})}),(0,a.jsx)(l.A,{value:"how",label:"Explanation",children:(0,a.jsx)(t.p,{children:"Initialize a distance matrix, which encapsulates the shortest distances between every pair of vertices within the graph. It then systematically iterates through the vertices, entertaining each vertex as a potential intermediary in pathfinding. During each iteration, the algorithm evaluates if including an intermediate vertex could potentially yield a shorter distance between two vertices. If such an improvement is discovered, the distance matrix is promptly updated. This process continues iteratively until the algorithm has thoroughly explored all possible paths, resulting in the determination of the shortest path between every pair of vertices within the graph"})}),(0,a.jsx)(l.A,{value:"guidance",label:"Guidance",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Initialize a distance matrix where each element represents the direct edge weight between vertices. If there's no direct edge, set the distance to infinity"}),"\n",(0,a.jsx)(t.li,{children:"Iterate through all vertices and consider each vertex as an intermediate vertex in the shortest path computation"}),"\n",(0,a.jsxs)(t.li,{children:["For each pair of vertices (",(0,a.jsx)(t.code,{children:"u, v"}),"), update the distance matrix by comparing the distance between u and v with the sum of distances between u and the intermediate vertex k and between the intermediate vertex ",(0,a.jsx)(t.code,{children:"k"})," and ",(0,a.jsx)(t.code,{children:"v"}),". If this sum is smaller, update the distance matrix accordingly","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Repeat the step for all possible intermediate vertices"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"After completing all iterations, the distance matrix will contain the shortest distances between all pairs of vertices"}),"\n"]})}),(0,a.jsx)(l.A,{value:"tips",label:"Tips",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"ensure that the graph does not contain negative cycles, as the algorithm does not work correctly in such cases"}),"\n",(0,a.jsx)(t.li,{children:"the algorithm can efficiently handle graphs with both positive and negative edge weights"}),"\n",(0,a.jsx)(t.li,{children:"it is suitable for dense graphs or graphs with a relatively small number of vertices and edges"}),"\n"]})})]}),"\n",(0,a.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,a.jsxs)(s.A,{queryString:"primary",children:[(0,a.jsx)(l.A,{value:"practice",label:"Practice",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"FloydWarshall(graph):\n  n = number of vertices in the graph\n  distance[][] = initialize distance matrix with direct edge weights\n\n  // Compute shortest paths\n  for k from 1 to n:\n    for i from 1 to n:\n      for j from 1 to n:\n        // If vertex k is on the shortest path from i to j\n        if distance[i][k] + distance[k][j] < distance[i][j]:\n          distance[i][j] = distance[i][k] + distance[k][j]\n\n  return distance\n"})})}),(0,a.jsx)(l.A,{value:"solution",label:"Solution",children:(0,a.jsxs)(s.A,{queryString:"code",children:[(0,a.jsx)(l.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,a.jsx)(o.A,{language:"go",children:c})}),(0,a.jsx)(l.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,a.jsx)(o.A,{language:"java",children:d})}),(0,a.jsx)(l.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,a.jsx)(o.A,{language:"js",children:h})}),(0,a.jsx)(l.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,a.jsx)(o.A,{language:"kotlin",children:g})}),(0,a.jsx)(l.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,a.jsx)(o.A,{language:"python",children:u})}),(0,a.jsx)(l.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,a.jsx)(o.A,{language:"rust",children:p})}),(0,a.jsx)(l.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,a.jsx)(o.A,{language:"ts",children:j})})]})})]})]})}function y(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}}}]);