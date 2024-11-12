"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4019],{60900:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>b,contentTitle:()=>g,default:()=>v,frontMatter:()=>x,metadata:()=>t,toc:()=>j});const t=JSON.parse('{"id":"education/computer-science/algorithms/algo/euclidean-distance","title":"Euclidean Distance","description":"Euclidean Distance","source":"@site/docs/education/01-computer-science/10-algorithms/04-algo/euclidean-distance.mdx","sourceDirName":"education/01-computer-science/10-algorithms/04-algo","slug":"/education/computer-science/algorithms/algo/euclidean-distance","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/euclidean-distance","draft":false,"unlisted":false,"editUrl":"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/04-algo/euclidean-distance.mdx","tags":[],"version":"current","frontMatter":{"title":"Euclidean Distance","description":"Euclidean Distance","hide_table_of_contents":true},"sidebar":"education","previous":{"title":"Euclidean Algorithm","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/euclidean-algorithm"},"next":{"title":"Eulerian Path and Eulerian Circuit - Fleury\'s Algorithm","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/eulerian-path-and-eulerian-circuit-fleurys-algorithm"}}');var a=i(86070),s=i(15658),l=i(33407),c=i(33903),r=i(68171);const o='package main\n\nimport (\n    "math"\n)\n\nfunc euclideanDistance(x1, y1, x2, y2 float64) float64 {\n    return math.Sqrt(math.Pow(x2-x1, 2) + math.Pow(y2-y1, 2))\n}\n',d="import java.lang.Math;\n\npublic class Main {\n\n  public static double euclideanDistance(double x1, double y1, double x2, double y2) {\n    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n  }\n}\n",u="function euclideanDistance(x1, y1, x2, y2) {\n  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n}\n",h="import kotlin.math.pow\nimport kotlin.math.sqrt\n\nfun euclideanDistance(x1: Double, y1: Double, x2: Double, y2: Double): Double {\n    return sqrt((x2 - x1).pow(2) + (y2 - y1).pow(2))\n}\n",m="import math\n\ndef euclidean_distance(x1, y1, x2, y2):\n    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)\n",p="fn euclidean_distance(x1: f64, y1: f64, x2: f64, y2: f64) -> f64 {\n    ((x2 - x1).powi(2) + (y2 - y1).powi(2)).sqrt()\n}\n",f="function euclideanDistance(\n  x1: number,\n  y1: number,\n  x2: number,\n  y2: number,\n): number {\n  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n}\n",x={title:"Euclidean Distance",description:"Euclidean Distance",hide_table_of_contents:!0},g=void 0,b={},j=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function y(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsxs)(l.A,{queryString:"primary",children:[(0,a.jsx)(c.A,{value:"definition",label:"Definition",children:(0,a.jsx)(n.p,{children:"The Euclidean Distance Algorithm is a mathematical method used to calculate the distance between two points in Euclidean space"})}),(0,a.jsx)(c.A,{value:"how",label:"Explanation",children:(0,a.jsx)(n.p,{children:"The Euclidean Distance Algorithm computes the straight-line distance between two points in a multi-dimensional space. It utilizes the Pythagorean theorem, treating each dimension as a separate axis. By finding the square root of the sum of the squared differences between corresponding coordinates, the algorithm determines the distance"})}),(0,a.jsx)(c.A,{value:"guidance",label:"Guidance",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Identify the Dimensionality","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"determine the number of dimensions (features) in your space. Each dimension corresponds to a specific attribute or variable"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Retrieve the Coordinates","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"obtain the coordinates of the two points for which you want to calculate the distance. These coordinates represent the values of each dimension for each point"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Calculate the Squared Differences","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"for each dimension, subtract the corresponding coordinates of the two points and square the result. Repeat this process for all dimensions"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Sum the Squared Differences","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"add up all the squared differences obtained in the previous step. This yields the sum of squared differences"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Take the Square Root","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"compute the square root of the sum obtained in previous step. This is the Euclidean distance between the two points"}),"\n"]}),"\n"]}),"\n"]})}),(0,a.jsx)(c.A,{value:"tips",label:"Tips",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ensure consistency in dimensionality between the points being compared"}),"\n",(0,a.jsx)(n.li,{children:"utilize vectorized operations for efficient computation, especially when dealing with large datasets"}),"\n",(0,a.jsx)(n.li,{children:"normalize the data if the scales of different dimensions vary significantly"}),"\n"]})})]}),"\n",(0,a.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,a.jsxs)(l.A,{queryString:"primary",children:[(0,a.jsx)(c.A,{value:"practice",label:"Practice",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"euclidean_distance(point1, point2):\n  sum_of_squared_differences = 0\n  for each dimension d in point1 and point2:\n    difference = point1[d] - point2[d]\n    squared_difference = difference * difference\n    sum_of_squared_differences += squared_difference\n  distance = square_root(sum_of_squared_differences)\n  return distance\n"})})}),(0,a.jsx)(c.A,{value:"solution",label:"Solution",children:(0,a.jsxs)(l.A,{queryString:"code",children:[(0,a.jsx)(c.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,a.jsx)(r.A,{language:"go",children:o})}),(0,a.jsx)(c.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,a.jsx)(r.A,{language:"java",children:d})}),(0,a.jsx)(c.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,a.jsx)(r.A,{language:"js",children:u})}),(0,a.jsx)(c.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,a.jsx)(r.A,{language:"kotlin",children:h})}),(0,a.jsx)(c.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,a.jsx)(r.A,{language:"python",children:m})}),(0,a.jsx)(c.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,a.jsx)(r.A,{language:"rust",children:p})}),(0,a.jsx)(c.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,a.jsx)(r.A,{language:"ts",children:f})})]})})]})]})}function v(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}}}]);