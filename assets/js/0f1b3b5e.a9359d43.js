"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8236],{78867:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>f,contentTitle:()=>u,default:()=>b,frontMatter:()=>j,metadata:()=>g,toc:()=>N});var i=n(11527),a=n(84135),l=n(40521),t=n(74109),c=n(80035);const r="package main\n\nfunc hornersMethod(coefficients []int, x int) int {\n    result := coefficients[0]\n    for i := 1; i < len(coefficients); i++ {\n        result = result*x + coefficients[i]\n    }\n    return result\n}\n",m="public class HornersMethod {\n\n  public static int hornersMethod(int[] coefficients, int x) {\n    int result = coefficients[0];\n    for (int i = 1; i < coefficients.length; i++) {\n      result = result * x + coefficients[i];\n    }\n    return result;\n  }\n}\n",h="function hornersMethod(coefficients, x) {\n  let result = coefficients[0];\n  for (let i = 1; i < coefficients.length; i++) {\n    result = result * x + coefficients[i];\n  }\n  return result;\n}\n",o="fun hornersMethod(coefficients: IntArray, x: Int): Int {\n    var result = coefficients[0]\n    for (i in 1 until coefficients.size) {\n        result = result * x + coefficients[i]\n    }\n    return result\n}\n",d="def horners_method(coefficients, x):\n    result = coefficients[0]\n    for coefficient in coefficients[1:]:\n        result = result * x + coefficient\n    return result\n",x="fn horners_method(coefficients: &[i32], x: i32) -> i32 {\n    let mut result = coefficients[0];\n    for &coefficient in &coefficients[1..] {\n        result = result * x + coefficient;\n    }\n    result\n}\n",p="function hornersMethod(coefficients: number[], x: number): number {\n  let result = coefficients[0];\n  for (let i = 1; i < coefficients.length; i++) {\n    result = result * x + coefficients[i];\n  }\n  return result;\n}\n",j={title:"Horner's Method",description:"Horner's Method",hide_table_of_contents:!0},u=void 0,g={id:"education/computer-science/algorithms/algo/horners-method",title:"Horner's Method",description:"Horner's Method",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/horners-method.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/horners-method",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/horners-method",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/horners-method.mdx",tags:[],version:"current",frontMatter:{title:"Horner's Method",description:"Horner's Method",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Hill Cipher",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/hill-cipher"},next:{title:"Insertion Sort",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/insertion-sort"}},f={},N=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function v(s){const e={annotation:"annotation",code:"code",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,a.a)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(l.Z,{queryString:"primary",children:[(0,i.jsx)(t.Z,{value:"definition",label:"Definition",children:(0,i.jsx)(e.p,{children:"Horner's Method is an algorithm used to efficiently evaluate polynomials. It reduces the number of arithmetic operations required compared to other methods by evaluating the polynomial as a nested multiplication and addition process"})}),(0,i.jsx)(t.Z,{value:"how",label:"Explanation",children:(0,i.jsxs)(e.p,{children:["evaluates a polynomial of the form ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"n"})]}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mi,{children:"n"})]}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"})]})]}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"})]})]}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mo,{children:"\u2026"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mn,{children:"0"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"a_nx^n + a_{n-1}x^{n-1} + \\ldots + a_1x + a_0"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8144em",verticalAlign:"-0.15em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1.0224em",verticalAlign:"-0.2083em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,i.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.2083em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,i.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})})})})})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"minner",children:"\u2026"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7333em",verticalAlign:"-0.15em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})]})]}),". Instead of evaluating each term individually and then summing them up, it uses a nested multiplication and addition approach. Starting from the highest degree term, it multiplies the current result by ",(0,i.jsx)(e.code,{children:"x"})," and adds the next coefficient. This process continues until the constant term is reached."]})}),(0,i.jsx)(t.Z,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Initialize a variable ",(0,i.jsx)(e.code,{children:"result"})," to ",(0,i.jsx)(e.code,{children:"0"})]}),"\n",(0,i.jsx)(e.li,{children:"Iterate through the coefficients of the polynomial from highest degree to lowest"}),"\n",(0,i.jsxs)(e.li,{children:["For each coefficient","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["multiply the current ",(0,i.jsx)(e.code,{children:"result"})," by ",(0,i.jsx)(e.code,{children:"x"})]}),"\n",(0,i.jsxs)(e.li,{children:["add the coefficient to the ",(0,i.jsx)(e.code,{children:"result"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Once all coefficients are processed, the ",(0,i.jsx)(e.code,{children:"result"})," will hold the value of the polynomial evaluated at ",(0,i.jsx)(e.code,{children:"x"})]}),"\n"]})}),(0,i.jsx)(t.Z,{value:"tips",label:"Tips",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"ensure the coefficients of the polynomial are stored efficiently to reduce memory usage"}),"\n",(0,i.jsx)(e.li,{children:"implement bounds checking to handle cases where the polynomial has fewer terms than expected"}),"\n"]})})]}),"\n",(0,i.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(l.Z,{queryString:"primary",children:[(0,i.jsx)(t.Z,{value:"practice",label:"Practice",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"evaluate_polynomial(coefficients, x):\n  result = 0\n  for i from n to 0:\n    result = result * x + coefficients[i]\n  return result\n"})})}),(0,i.jsx)(t.Z,{value:"solution",label:"Solution",children:(0,i.jsxs)(l.Z,{queryString:"code",children:[(0,i.jsx)(t.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(c.Z,{language:"go",children:r})}),(0,i.jsx)(t.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(c.Z,{language:"java",children:m})}),(0,i.jsx)(t.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(c.Z,{language:"js",children:h})}),(0,i.jsx)(t.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(c.Z,{language:"kotlin",children:o})}),(0,i.jsx)(t.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(c.Z,{language:"python",children:d})}),(0,i.jsx)(t.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(c.Z,{language:"rust",children:x})}),(0,i.jsx)(t.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(c.Z,{language:"ts",children:p})})]})})]})]})}function b(s={}){const{wrapper:e}={...(0,a.a)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(v,{...s})}):v(s)}}}]);