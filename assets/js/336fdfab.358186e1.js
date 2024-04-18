"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5684],{37842:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var t=n(11527),i=n(84135),r=n(40521),a=n(74109);const c={title:"Basics",description:"Networking: Basics",hide_table_of_contents:!0},d="Networking: Basics",o={id:"education/computer-science/networking/basics/basics",title:"Basics",description:"Networking: Basics",source:"@site/docs/education/01-computer-science/05-networking/01-basics/01-basics.mdx",sourceDirName:"education/01-computer-science/05-networking/01-basics",slug:"/education/computer-science/networking/basics/",permalink:"/tech-labs/docs/education/computer-science/networking/basics/",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/05-networking/01-basics/01-basics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Basics",description:"Networking: Basics",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Networking",permalink:"/tech-labs/docs/category/networking"},next:{title:"Security",permalink:"/tech-labs/docs/category/security"}},l={},h=[{value:"Overview",id:"overview",level:2}];function p(e){const s={h1:"h1",h2:"h2",img:"img",mermaid:"mermaid",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"networking-basics",children:"Networking: Basics"}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(r.Z,{queryString:"primary",children:[(0,t.jsxs)(a.Z,{value:"networking",label:"Networking",children:[(0,t.jsx)(s.p,{children:"The internet connects various computing devices globally. When accessing a website from a smartphone or laptop, the connection typically goes through a cellular tower, a router, and then to\nInternet Service Providers (ISPs). Packets are forwarded through local ISPs to the network hosting the website. Within the company network, packets pass through a link-layer switch to reach the\nappropriate server."}),(0,t.jsx)(s.p,{children:"Routers and link-layer switches are both packet switches responsible for forwarding packets. Routers are primarily used in the network core to connect multiple networks, while link-layer switches\nare utilized in access networks to connect multiple devices within a single network."}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Computer Networking: Top-Down Approach"})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(58155).Z+"",width:"1092",height:"279"})})]}),(0,t.jsxs)(a.Z,{value:"osi",label:"OSI Model",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"OSI (Open Systems Interconnection) model"})," is a conceptual framework used to understand and standardize the functions of a telecommunication or computing system."]}),(0,t.jsxs)("table",{className:"sticky column",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{style:{minWidth:"150px"},children:"OSI Model Layer"}),(0,t.jsx)("th",{style:{minWidth:"350px"},children:"Visualization"}),(0,t.jsx)("th",{style:{minWidth:"350px"},children:"Description"}),(0,t.jsx)("th",{children:"Protocols"}),(0,t.jsx)("th",{children:"Data Format"}),(0,t.jsx)("th",{children:"TCP/IP Model"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Application Layer"}),(0,t.jsx)("td",{children:(0,t.jsx)(s.mermaid,{value:"graph LR\nclient(Client) --\x3e|request| server(Server)\nserver --\x3e|response| client"})}),(0,t.jsx)("td",{children:"Closest to end users; where most applications reside. Requests data from backend servers without needing to understand data transmission specifics"}),(0,t.jsx)("td",{children:"DNS, HTTP, SMTP, FTP"}),(0,t.jsx)("td",{rowspan:"3",children:"Sending Data"}),(0,t.jsx)("td",{rowspan:"3",children:"Application Layer"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Presentation Layer"}),(0,t.jsx)("td",{children:(0,t.jsx)(s.mermaid,{value:"graph LR\ncompression ~~~| | encryption ~~~| | encoding"})}),(0,t.jsx)("td",{children:"Handles data encoding, encryption, and compression for the application layer and prepares data for transmission, such as HTTPS using TLS for secure communications"}),(0,t.jsx)("td",{children:"TLS, SSL"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Session Layer"}),(0,t.jsx)("td",{children:(0,t.jsx)(s.mermaid,{value:"graph LR\nclient(Client) <--\x3e|session| server(Server)"})}),(0,t.jsx)("td",{children:"Manages opening and closing of communications between devices and sets checkpoints for large data to avoid full retransmission from the beginning"}),(0,t.jsx)("td",{children:"Sockets"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Transport Layer"}),(0,t.jsx)("td",{children:(0,t.jsx)(s.mermaid,{value:"graph LR\nsegmentation(Data: segmentation) --\x3e|transport| reassembly(Data: reassembly)"})}),(0,t.jsx)("td",{children:"Manages end-to-end communication between devices. Breaks data into segments at sender's side and reassembles at receiver's side. Implements flow control to prevent congestion"}),(0,t.jsx)("td",{children:"TCP, UDP"}),(0,t.jsx)("td",{children:"Sending Segments, Datagrams"}),(0,t.jsx)("td",{children:"Transport Layer"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Network Layer (IP logical addressing)"}),(0,t.jsx)("td",{children:(0,t.jsx)(s.mermaid,{value:"graph LR\npackets(Packets) --\x3e|transport| assembly(Packets assembly)"})}),(0,t.jsx)("td",{children:"Facilitates data transfer between different networks. Divides segments or datagrams into smaller packets. Finds optimal route to destination using IP addresses (routing)"}),(0,t.jsx)("td",{children:"IP, ICMP, IGMP, IPsec"}),(0,t.jsx)("td",{children:"Sending Packets"}),(0,t.jsx)("td",{children:"Internet Layer"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Data Link Layer (MAC physical addressing)"}),(0,t.jsx)("td",{children:(0,t.jsx)(s.mermaid,{value:"graph LR\nframes(Frames) --\x3e|transport| infra(Infra-Network Communications)"})}),(0,t.jsx)("td",{children:"Allows data transfer between devices on the same network. Breaks packets into frames confined to local area network"}),(0,t.jsx)("td",{children:"Ethernet, WiFi"}),(0,t.jsx)("td",{children:"Sending Frames"}),(0,t.jsx)("td",{rowspan:"2",children:"Network Address Layer"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Physical Layer (cables)"}),(0,t.jsx)("td",{children:(0,t.jsx)(s.mermaid,{value:"graph LR\nsending(Sending Cable) --\x3e|bite stream: 00100111| receiving(Receiving Cable)"})}),(0,t.jsx)("td",{children:"Sends bitstreams over cables and switches. Closely associated with physical connection between devices"}),(0,t.jsx)("td",{children:"Fiber"}),(0,t.jsx)("td",{children:"Sending Bits"})]})]})]}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Transfer Process"})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(3139).Z+"",width:"733",height:"819"})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Linux Kernel"})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(20657).Z+"",width:"318",height:"1058"})})]})]})]})}function m(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},58155:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/computerNetworking-4432ca7524ed759ea937e5c6ce96d6e5.svg"},20657:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/linuxKernel-c0238aa2ca2937ae92f4522da901c895.svg"},3139:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/transferProcess-cce6440d99e543d316bf83772bb0ae29.svg"}}]);