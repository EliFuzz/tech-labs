"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[386],{68966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>v,frontMatter:()=>m,metadata:()=>f,toc:()=>j});var s=n(86070),i=n(25710),a=n(98459),r=n(37515),o=n(18792);const l='package main\n\nimport (\n\t"math"\n)\n\nfunc SqrtNewton(x float64) float64 {\n\tz := x / 2\n\tfor i := 0; i < 10; i++ {\n\t\tz -= (z*z - x) / (2 * z)\n\t}\n\treturn z\n}\n',c="public class Main {\n\n  public static double sqrtNewton(double x) {\n    double z = x / 2;\n    for (int i = 0; i < 10; i++) {\n      z -= (z * z - x) / (2 * z);\n    }\n    return z;\n  }\n}\n",u="function sqrtNewton(x) {\n  let z = x / 2;\n  for (let i = 0; i < 10; i++) {\n    z -= (z * z - x) / (2 * z);\n  }\n  return z;\n}\n",h="fun sqrtNewton(x: Double): Double {\n    var z = x / 2\n    repeat(10) {\n        z -= (z * z - x) / (2 * z)\n    }\n    return z\n}\n",d="def sqrt_newton(x):\n    z = x / 2\n    for _ in range(10):\n        z -= (z*z - x) / (2 * z)\n    return z\n",g="fn sqrt_newton(x: f64) -> f64 {\n    let mut z = x / 2.0;\n    for _ in 0..10 {\n        z -= (z * z - x) / (2.0 * z);\n    }\n    z\n}\n",x="function sqrtNewton(x: number): number {\n  let z: number = x / 2;\n  for (let i: number = 0; i < 10; i++) {\n    z -= (z * z - x) / (2 * z);\n  }\n  return z;\n}\n",m={title:"Square Root - Newton's method",description:"Square Root - Newton's method",hide_table_of_contents:!0},p=void 0,f={id:"education/computer-science/algorithms/algo/square-root-newtons-method",title:"Square Root - Newton's method",description:"Square Root - Newton's method",source:"@site/docs/education/01-computer-science/10-algorithms/04-algo/square-root-newtons-method.mdx",sourceDirName:"education/01-computer-science/10-algorithms/04-algo",slug:"/education/computer-science/algorithms/algo/square-root-newtons-method",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/square-root-newtons-method",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/04-algo/square-root-newtons-method.mdx",tags:[],version:"current",frontMatter:{title:"Square Root - Newton's method",description:"Square Root - Newton's method",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Sieve of Eratosthenes",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/sieve-of-eratosthenes"},next:{title:"Straight Traversal",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/straight-traversal"}},b={},j=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function z(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsxs)(a.A,{queryString:"primary",children:[(0,s.jsx)(r.A,{value:"definition",label:"Definition",children:(0,s.jsx)(t.p,{children:"Newton's method is an iterative algorithm used for finding successively better approximations to the roots of a real-valued function. In the context of finding the square root of a number, Newton's method can be applied iteratively to converge upon the square root"})}),(0,s.jsx)(r.A,{value:"how",label:"Explanation",children:(0,s.jsx)(t.p,{children:"Involves repeatedly refining an initial guess until it is close enough to the actual square root. It achieves this by using the tangent line of the function at each guess to find a better approximation. This process continues until the approximation is within an acceptable range of the actual square root"})}),(0,s.jsx)(r.A,{value:"guidance",label:"Guidance",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Choose an initial guess for the square root, preferably close to the actual square root"}),"\n",(0,s.jsxs)(t.li,{children:["Calculate the next approximation: ",(0,s.jsx)(t.code,{children:"next_guess = (current_guess + (number / current_guess)) / 2"})]}),"\n",(0,s.jsx)(t.li,{children:"Check if the difference between the current guess and the next guess is within a predefined tolerance"}),"\n",(0,s.jsx)(t.li,{children:"If the tolerance is met, the current guess is the square root. If not, repeat steps 2 and 3 with the next guess as the current guess"}),"\n",(0,s.jsx)(t.li,{children:"Continue iterating until the tolerance is satisfied, producing successively better approximations of the square root"}),"\n"]})}),(0,s.jsx)(r.A,{value:"tips",label:"Tips",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"choose the initial guess wisely to expedite convergence"}),"\n",(0,s.jsx)(t.li,{children:"adjust the tolerance level based on the desired accuracy versus computational cost trade-off"}),"\n",(0,s.jsx)(t.li,{children:"ensure proper handling of edge cases such as zero or negative input numbers"}),"\n"]})})]}),"\n",(0,s.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,s.jsxs)(a.A,{queryString:"primary",children:[(0,s.jsx)(r.A,{value:"practice",label:"Practice",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"square_root(number, tolerance):\n  // Initialize the initial guess\n  guess = number / 2\n\n  // Iterate until convergence\n  while true:\n    // Calculate the next guess\n    next_guess = (guess + (number / guess)) / 2\n\n    // Check if the tolerance is met\n    if abs(next_guess - guess) < tolerance:\n      return next_guess\n\n    // Update the current guess\n    guess = next_guess\n"})})}),(0,s.jsx)(r.A,{value:"solution",label:"Solution",children:(0,s.jsxs)(a.A,{queryString:"code",children:[(0,s.jsx)(r.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,s.jsx)(o.A,{language:"go",children:l})}),(0,s.jsx)(r.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,s.jsx)(o.A,{language:"java",children:c})}),(0,s.jsx)(r.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,s.jsx)(o.A,{language:"js",children:u})}),(0,s.jsx)(r.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,s.jsx)(o.A,{language:"kotlin",children:h})}),(0,s.jsx)(r.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,s.jsx)(o.A,{language:"python",children:d})}),(0,s.jsx)(r.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,s.jsx)(o.A,{language:"rust",children:g})}),(0,s.jsx)(r.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,s.jsx)(o.A,{language:"ts",children:x})})]})})]})]})}function v(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(z,{...e})}):z(e)}}}]);