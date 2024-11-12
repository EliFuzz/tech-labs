"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8959],{94222:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>h,default:()=>j,frontMatter:()=>c,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"education/system-design/design-principles","title":"Design Principles","description":"Design Principles Overview","source":"@site/docs/education/04-system-design/11-design-principles.mdx","sourceDirName":"education/04-system-design","slug":"/education/system-design/design-principles","permalink":"/tech-labs/docs/education/system-design/design-principles","draft":false,"unlisted":false,"editUrl":"https://github.com/EliFuzz/tech-labs/docs/education/04-system-design/11-design-principles.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Design Principles","description":"Design Principles Overview","hide_table_of_contents":true},"sidebar":"education","previous":{"title":"Data Management","permalink":"/tech-labs/docs/education/system-design/data-management"},"next":{"title":"Real World Examples","permalink":"/tech-labs/docs/education/system-design/real-world"}}');var n=i(86070),a=i(15658),r=i(33407),m=i(33903);const c={title:"Design Principles",description:"Design Principles Overview",hide_table_of_contents:!0},h=void 0,t={},d=[{value:"Reliability",id:"reliability",level:3}];function x(s){const e={annotation:"annotation",code:"code",h3:"h3",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...s.components};return(0,n.jsxs)(r.A,{queryString:"primary",children:[(0,n.jsx)(m.A,{value:"design-principles-definitions",label:"Definitions",children:(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"DAU"}),": Daily Active Users"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"HA"}),": High Availability"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"HLD"}),": High Level Design"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"LLD"}),": Low Level Design"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"QPS"}),": Queries Per Second"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"RPO"}),": Recovery Point Objective"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"RT"}),": Response Time"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"RTO"}),": Recovery Time Objective"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"SLI"}),": Service Level Indicator"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"SLO"}),": Service Level Objective"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"TPS"}),": Transactions Per Second"]}),"\n"]})}),(0,n.jsx)(m.A,{value:"design-principles-service-management-and-delivery",label:"Service Management & Delivery",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Type"}),(0,n.jsx)("th",{children:"Definition"}),(0,n.jsx)("th",{children:"Examples"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Service Level Objective (SLO)"})}),(0,n.jsx)("td",{children:"Objectives your team must hit to meet that agreement. What are the goals you are trying to accomplish for either ourselves or the customer"}),(0,n.jsx)("td",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Durability of disks should be 99.9%"}),(0,n.jsx)("li",{children:"Availability of service should be 99.95%"}),(0,n.jsx)("li",{children:"Service should successfully serve 99.999% of requests/transactions"}),(0,n.jsx)("li",{children:"99.5% of requests will be completed in 5ms"})]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Service Level Indicator (SLI)"})}),(0,n.jsx)("td",{children:"Real numbers (metrics) on system performance. What were chosen to measure progress towards the final goal"}),(0,n.jsx)("td",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Requests latency"}),(0,n.jsx)("li",{children:"Availability/uptime of the service"}),(0,n.jsx)("li",{children:"Failures per requests"}),(0,n.jsx)("li",{children:"Consistency and durability of the data"})]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Service Level Agreement (SLA)"})}),(0,n.jsx)("td",{children:"The agreement that you make with your clients. Consequences of failing to achieve your defined SLO"}),(0,n.jsx)("td",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Partial refund of service subscription fee"}),(0,n.jsx)("li",{children:"Additional subscription time added for free"}),(0,n.jsx)("li",{children:"If 99% of the system requests aren't completed in 5ms, client will get a refund"})]})})]})]})]})}),(0,n.jsx)(m.A,{value:"design-principles-estimation",label:"Estimation",children:(0,n.jsxs)(r.A,{queryString:"secondary",children:[(0,n.jsxs)(m.A,{value:"estimation-availability",label:"Availability",attributes:{className:"tabs__vertical"},children:[(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Availability"})," is the % of time a service or infrastructure is accessible and functioning normally."]}),(0,n.jsx)(e.p,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"A"}),(0,n.jsx)(e.mi,{children:"v"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"%"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"D"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"w"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"e"})]})]}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mn,{children:"100"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"Availability \\% = \\frac{(Total Time - Total Downtime)} {Total Time} * 100"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9444em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ai"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"abi"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mord",children:"%"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.355em",verticalAlign:"-0.345em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.01em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"lT"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"im"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.485em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mopen mtight",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"lT"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"im"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"Do"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"},children:"w"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"im"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mclose mtight",children:")"})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"100"})]})]})]})}),(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Availability % (Nines)"}),(0,n.jsx)("th",{children:"Downtime (Year)"}),(0,n.jsx)("th",{children:"Downtime (Month)"}),(0,n.jsx)("th",{children:"Downtime (Week)"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"90% (one nine)"}),(0,n.jsx)("td",{children:"36.53 days"}),(0,n.jsx)("td",{children:"72 hours"}),(0,n.jsx)("td",{children:"16.8 hours"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"99% (two nines)"}),(0,n.jsx)("td",{children:"3.65 days"}),(0,n.jsx)("td",{children:"7.20 hours"}),(0,n.jsx)("td",{children:"1.68 hours"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"99.9% (three nines)"}),(0,n.jsx)("td",{children:"8.77 hours"}),(0,n.jsx)("td",{children:"43.8 minutes"}),(0,n.jsx)("td",{children:"10.1 minutes"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"99.99% (four nines)"}),(0,n.jsx)("td",{children:"52.6 minutes"}),(0,n.jsx)("td",{children:"4.32 minutes"}),(0,n.jsx)("td",{children:"1.01 minutes"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"99.999% (five nines)"}),(0,n.jsx)("td",{children:"5.25 minutes"}),(0,n.jsx)("td",{children:"25.9 seconds"}),(0,n.jsx)("td",{children:"6.05 seconds"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"99.9999% (six nines)"}),(0,n.jsx)("td",{children:"31.56 seconds"}),(0,n.jsx)("td",{children:"2.59 seconds"}),(0,n.jsx)("td",{children:"604.8 milliseconds"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"99.99999% (seven nines)"}),(0,n.jsx)("td",{children:"3.15 seconds"}),(0,n.jsx)("td",{children:"263 milliseconds"}),(0,n.jsx)("td",{children:"60.5 milliseconds"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"99.999999% (eight nines)"}),(0,n.jsx)("td",{children:"315.6 milliseconds"}),(0,n.jsx)("td",{children:"26.3 milliseconds"}),(0,n.jsx)("td",{children:"6 milliseconds"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"99.9999999% (nine nines)"}),(0,n.jsx)("td",{children:"31.6 milliseconds"}),(0,n.jsx)("td",{children:"2.6 milliseconds"}),(0,n.jsx)("td",{children:"0.6 milliseconds"})]})]})]}),(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Availability Type"}),(0,n.jsx)("th",{children:"Overall Availability Trend"}),(0,n.jsx)("th",{children:"Formula"}),(0,n.jsx)("th",{children:"Example"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Sequential"})}),(0,n.jsx)("td",{children:"Decreases"}),(0,n.jsx)("td",{children:(0,n.jsx)(e.code,{children:"AvailabilityServiceA \u2217 AvailabilityServiceB"})}),(0,n.jsx)("td",{children:(0,n.jsx)(e.code,{children:"99.9% * 99.9% = 99.8%"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Parallel"})}),(0,n.jsx)("td",{children:"Increases"}),(0,n.jsx)("td",{children:(0,n.jsx)(e.code,{children:"1 - (1 - AvailabilityServiceA) * (1 - AvailabilityServiceB)"})}),(0,n.jsx)("td",{children:(0,n.jsx)(e.code,{children:"1 - (1 - 99.9%) * (1 - 99.9%) = 99.9999%"})})]})]})]}),(0,n.jsx)(e.h3,{id:"reliability",children:"Reliability"}),(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Reliability"})," is the probability of a service working as expected for a certain time, even under different conditions."]}),(0,n.jsx)(e.p,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"B"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"w"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"F"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"B"}),(0,n.jsx)(e.mi,{children:"F"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"E"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"S"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mi,{children:"D"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"w"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"e"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mi,{children:"F"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"s"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"Mean Time Between Failures (MTBF) = \\frac{Total Elapsed Time - Sum Of Downtime}{Total Number Of Failures}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"im"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"tw"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ee"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ai"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"res"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"MTBF"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.4133em",verticalAlign:"-0.4811em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.9322em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"lN"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"mb"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"er"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"ai"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"res"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.4461em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"lEl"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"se"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"im"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"Do"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"},children:"w"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"im"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.4811em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})}),(0,n.jsx)(e.p,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"R"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"R"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"e"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mi,{children:"R"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"s"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"Mean Time To Repair (MTTR) = \\frac{Total Maintenance Time}{Total Number Of Repairs}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"im"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ai"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"MTTR"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.3612em",verticalAlign:"-0.4811em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.8801em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"lN"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"mb"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"er"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.00773em"},children:"R"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"ai"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"rs"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.394em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"lM"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"ain"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"nan"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"ce"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"im"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.4811em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})})]}),(0,n.jsxs)(m.A,{value:"estimation-calculations",label:"Calculations",children:[(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Power of Two"}),(0,n.jsx)("th",{children:"Approximate Value"}),(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Conversion"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"10"})}),(0,n.jsx)("td",{children:"Thousand (1000)"}),(0,n.jsx)("td",{children:"1 KB (Kilobyte)"}),(0,n.jsx)("td",{children:"8 KB"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"20"})}),(0,n.jsx)("td",{children:"Million (1,000,000)"}),(0,n.jsx)("td",{children:"1 MB (Megabyte)"}),(0,n.jsxs)("td",{children:["8 KB * 10",(0,n.jsx)("sup",{children:"3"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"30"})}),(0,n.jsx)("td",{children:"Billion (1,000,000,000)"}),(0,n.jsx)("td",{children:"1 GB (Gigabyte)"}),(0,n.jsxs)("td",{children:["8 KB * 10",(0,n.jsx)("sup",{children:"6"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"40"})}),(0,n.jsx)("td",{children:"Trillion (1,000,000,000,000)"}),(0,n.jsx)("td",{children:"1 TB (Terabyte)"}),(0,n.jsxs)("td",{children:["8 KB * 10",(0,n.jsx)("sup",{children:"9"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"50"})}),(0,n.jsx)("td",{children:"Quadrillion (1,000,000,000,000,000)"}),(0,n.jsx)("td",{children:"1 PB (Petabyte)"}),(0,n.jsxs)("td",{children:["8 KB * 10",(0,n.jsx)("sup",{children:"12"})]})]})]})]}),(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Type"}),(0,n.jsx)("th",{children:"Formula"}),(0,n.jsx)("th",{children:"Example"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Bandwidth"})}),(0,n.jsx)("td",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(e.code,{children:"KB/message * message/day * days/sec"})}),(0,n.jsxs)("li",{children:["10",(0,n.jsx)("sup",{children:"-5"})," days/sec"]})]})}),(0,n.jsx)("td",{children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Example: ",(0,n.jsx)(e.code,{children:"2.5 KB/message * 100M message/day * 1 day/sec"})," (",(0,n.jsx)(e.code,{children:"24 hours * 60 min * 60 sec = 86400 sec = 10^-5 day/sec"}),")"]}),(0,n.jsxs)("li",{children:["Calculate the number: ",(0,n.jsx)(e.code,{children:"2.5"})]}),(0,n.jsxs)("li",{children:["Calculate zeros: ",(0,n.jsx)(e.code,{children:"0 (from KB) + 2 (from 100M) + 6 (from millions) - 5 (from days/sec) = 10^3"})]}),(0,n.jsxs)("li",{children:['Check the "Power of Two" table: ',(0,n.jsx)(e.code,{children:"10^3"})]}),(0,n.jsxs)("li",{children:["Combine all together: ",(0,n.jsx)(e.code,{children:"2.5 MB/sec"})]})]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Memory"})}),(0,n.jsx)("td",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(e.code,{children:"KB/message * message/day * 20%"})}),(0,n.jsx)("li",{children:"80%/20% cache hits rule: 80% of egress is served by 20% of data stored on the cache servers"})]})}),(0,n.jsx)("td",{children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Example: ",(0,n.jsx)(e.code,{children:"2.5 KB/message * 100M message/day * 20%"})]}),(0,n.jsxs)("li",{children:["Calculate the number: ",(0,n.jsx)(e.code,{children:"2.5 (from KB/message) * 2 (from %) = 5"})]}),(0,n.jsxs)("li",{children:["Calculate zeros: ",(0,n.jsx)(e.code,{children:"2 (from 100M) + 6 (from millions) - 1 (from % because 20% is 0.2) = 10^7"})]}),(0,n.jsxs)("li",{children:['Check the "Power of Two" table: ',(0,n.jsx)(e.code,{children:"10 * 10^6"})]}),(0,n.jsxs)("li",{children:["Combine all together: ",(0,n.jsx)(e.code,{children:"2.5 * 10 = 25 GB/day"})]})]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Storage"})}),(0,n.jsx)("td",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Memory Storage = Throughput (bytes/day) * Retention Period (days)"}),(0,n.jsx)("li",{children:(0,n.jsx)(e.code,{children:"KB/message * message/day * days * years"})})]})}),(0,n.jsx)("td",{children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Example: ",(0,n.jsx)(e.code,{children:"2.5 KB/message * 100M message/day * 365 days"})]}),(0,n.jsxs)("li",{children:["Calculate the number: ",(0,n.jsx)(e.code,{children:"3 (round 2.5) * 3 (365 reduce to 300 and remove zeros) = 9"})]}),(0,n.jsxs)("li",{children:["Calculate zeros: ",(0,n.jsx)(e.code,{children:"0 (from KB) + 2 (from 100M) + 6 (from millions) + 2 (from 300 which is a rounded 365 days) = 10^10"})," "]}),(0,n.jsxs)("li",{children:['Check the "Power of Two" table: ',(0,n.jsx)(e.code,{children:"10 * 10^9 = 10 * 10^9"})]}),(0,n.jsxs)("li",{children:["Combine all together: ",(0,n.jsx)(e.code,{children:"9 * 10 (that is left from the zeros) = 90 TB"})]})]})})]})]})]})]}),(0,n.jsx)(m.A,{value:"estimation-compression",label:"Compression",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Uncompressed"}),(0,n.jsx)("th",{children:"Compressed"}),(0,n.jsx)("th",{children:"Compression Ratio"}),(0,n.jsx)("th",{children:"Savings (%)"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"100 GB"}),(0,n.jsx)("td",{children:"40 GB"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(e.code,{children:"100 / 40 = 2.5"})," or ",(0,n.jsx)(e.code,{children:"2.5:1"})]}),(0,n.jsx)("td",{children:(0,n.jsx)(e.code,{children:"100 * (1 - 40/100) = 60%"})})]})})]})})]})})]})}function j(s={}){const{wrapper:e}={...(0,a.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(x,{...s})}):x(s)}}}]);