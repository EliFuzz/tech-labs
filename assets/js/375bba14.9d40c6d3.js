"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3077],{34484:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>h,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>l,toc:()=>t});var r=s(11527),n=s(84135);const c={title:"Regex",description:"Regex Overview"},i=void 0,l={id:"education/software-development/regex",title:"Regex",description:"Regex Overview",source:"@site/docs/education/03-software-development/05-regex.mdx",sourceDirName:"education/03-software-development",slug:"/education/software-development/regex",permalink:"/tech-labs/docs/education/software-development/regex",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/03-software-development/05-regex.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Regex",description:"Regex Overview"},sidebar:"education",previous:{title:"Bitwise Operations",permalink:"/tech-labs/docs/education/software-development/bitwise-operations"},next:{title:"Security",permalink:"/tech-labs/docs/education/software-development/security"}},h={},t=[{value:"Anchors",id:"anchors",level:2},{value:"Character Classes",id:"character-classes",level:2},{value:"POSIX",id:"posix",level:2},{value:"Assertions",id:"assertions",level:2},{value:"Quantifiers",id:"quantifiers",level:2},{value:"Escape Sequences",id:"escape-sequences",level:2},{value:"Special Characters",id:"special-characters",level:2},{value:"Groups and Ranges",id:"groups-and-ranges",level:2},{value:"Pattern Modifiers",id:"pattern-modifiers",level:2},{value:"String Replacement",id:"string-replacement",level:2}];function x(e){const d={code:"code",h2:"h2",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"Regex"})," - is a sequence of characters that define a search pattern."]}),"\n",(0,r.jsx)(d.h2,{id:"anchors",children:"Anchors"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Regex Component"}),(0,r.jsx)("th",{children:"Meaning"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"^"})})}),(0,r.jsx)("td",{children:"Start of string, or start of line in multi-line pattern"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"^cat"}),"  ",(0,r.jsx)(d.strong,{children:"cat"}),", ",(0,r.jsx)(d.strong,{children:"cats"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\A"})})}),(0,r.jsx)("td",{children:"Start of string"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\Adog"})," ",(0,r.jsx)(d.strong,{children:"dog"}),", ",(0,r.jsx)(d.strong,{children:"dogs"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"$"})})}),(0,r.jsx)("td",{children:"End of string, or end of line in multi-line pattern"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"bird$"})," ",(0,r.jsx)(d.strong,{children:"lovebird"}),", ",(0,r.jsx)(d.strong,{children:"tweeting bird"}),", ",(0,r.jsx)(d.strong,{children:"bird"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\Z"})})}),(0,r.jsx)("td",{children:"End of string"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"fish\\Z"})," ",(0,r.jsx)(d.strong,{children:"goldfish"}),", ",(0,r.jsx)(d.strong,{children:"jellyfish"}),", ",(0,r.jsx)(d.strong,{children:"fish"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\b"})})}),(0,r.jsx)("td",{children:"Word boundary"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\bwolf\\b"}),"  ",(0,r.jsx)(d.strong,{children:"The wolf howls"}),", ",(0,r.jsx)(d.strong,{children:"Lone wolf"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\B"})})}),(0,r.jsx)("td",{children:"Not word boundary"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\Bcat\\"})," ",(0,r.jsx)(d.strong,{children:"concatenate"}),", ",(0,r.jsx)(d.strong,{children:"scatter"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\<"})})}),(0,r.jsx)("td",{children:"Start of word"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\<day"})," ",(0,r.jsx)(d.strong,{children:"day"}),", ",(0,r.jsx)(d.strong,{children:"days are long"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\>"})})}),(0,r.jsx)("td",{children:"End of word"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"night\\>"})," ",(0,r.jsx)(d.strong,{children:"goodnight"}),", ",(0,r.jsx)(d.strong,{children:"tonight"})]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"character-classes",children:"Character Classes"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Regex Component"}),(0,r.jsx)("th",{children:"Meaning"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\c"})})}),(0,r.jsx)("td",{children:"Control character"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\c"})," ",(0,r.jsx)(d.strong,{children:"\\cC"}),", ",(0,r.jsx)(d.strong,{children:"\\cZ"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\s"})})}),(0,r.jsx)("td",{children:"White space"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\s"})," ",(0,r.jsx)(d.strong,{children:"\\t"}),", ",(0,r.jsx)(d.strong,{children:"\\n"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\S"})})}),(0,r.jsx)("td",{children:"Not white space"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\S"})," ",(0,r.jsx)(d.strong,{children:"c"}),", ",(0,r.jsx)(d.strong,{children:"a"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\d"})})}),(0,r.jsx)("td",{children:"Digit"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\d"})," ",(0,r.jsx)(d.strong,{children:"0"}),", ",(0,r.jsx)(d.strong,{children:"1"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\D"})})}),(0,r.jsx)("td",{children:"Not digit"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\D"})," ",(0,r.jsx)(d.strong,{children:"c"}),", ",(0,r.jsx)(d.strong,{children:"a"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\w"})})}),(0,r.jsx)("td",{children:"Word (alphanumeric or underscore)"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\w"})," ",(0,r.jsx)(d.strong,{children:"a"}),", ",(0,r.jsx)(d.strong,{children:"_"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\W"})})}),(0,r.jsx)("td",{children:"Not word"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\W"})," ",(0,r.jsx)(d.strong,{children:"-"}),", ",(0,r.jsx)(d.strong,{children:"."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\x"})})}),(0,r.jsx)("td",{children:"Hexadecimal digit"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\x"})," ",(0,r.jsx)(d.strong,{children:"0x0"}),", ",(0,r.jsx)(d.strong,{children:"0xFF"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\O"})})}),(0,r.jsx)("td",{children:"Octal digit"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\O"})," ",(0,r.jsx)(d.strong,{children:"07"}),", ",(0,r.jsx)(d.strong,{children:"075"})]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"posix",children:"POSIX"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Regex Component"}),(0,r.jsx)("th",{children:"Meaning"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:upper:]"})})}),(0,r.jsx)("td",{children:"Upper case letters"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:upper:]"})," ",(0,r.jsx)(d.strong,{children:"A"}),", ",(0,r.jsx)(d.strong,{children:"B"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:lower:]"})})}),(0,r.jsx)("td",{children:"Lower case letters"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:lower:]"})," ",(0,r.jsx)(d.strong,{children:"a"}),", ",(0,r.jsx)(d.strong,{children:"b"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:alpha:]"})})}),(0,r.jsx)("td",{children:"All letters"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:alpha:]"})," ",(0,r.jsx)(d.strong,{children:"A"}),", ",(0,r.jsx)(d.strong,{children:"b"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:alnum:]"})})}),(0,r.jsx)("td",{children:"Digits and letters"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:alnum:]"})," ",(0,r.jsx)(d.strong,{children:"0"}),", ",(0,r.jsx)(d.strong,{children:"a"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:digit:]"})})}),(0,r.jsx)("td",{children:"Digits"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:digit:]"})," ",(0,r.jsx)(d.strong,{children:"0"}),", ",(0,r.jsx)(d.strong,{children:"1"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:xdigit:]"})})}),(0,r.jsx)("td",{children:"Hexadecimal digits"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:xdigit:]"})," ",(0,r.jsx)(d.strong,{children:"0"}),", ",(0,r.jsx)(d.strong,{children:"F"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:punct:]"})})}),(0,r.jsx)("td",{children:"Punctuation"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:punct:]"})," ",(0,r.jsx)(d.strong,{children:"!"}),", ",(0,r.jsx)(d.strong,{children:"."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:blank:]"})})}),(0,r.jsx)("td",{children:"Space and tab"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:blank:]"})," ",(0,r.jsx)(d.strong,{children:"\\t"}),', " "']})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:space:]"})})}),(0,r.jsx)("td",{children:"Blank characters"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:space:]"})," ",(0,r.jsx)(d.strong,{children:"\\t"}),", ",(0,r.jsx)(d.strong,{children:"\\n"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:cntrl:]"})})}),(0,r.jsx)("td",{children:"Control characters"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:cntrl:]"})," ",(0,r.jsx)(d.strong,{children:"\\t"}),", ",(0,r.jsx)(d.strong,{children:"\\n"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:graph:]"})})}),(0,r.jsx)("td",{children:"Printed characters (excluding space)"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:graph:]"})," ",(0,r.jsx)(d.strong,{children:"A"}),", ",(0,r.jsx)(d.strong,{children:"?"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:print:]"})})}),(0,r.jsx)("td",{children:"Printed characters and spaces"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:print:]"})," ",(0,r.jsx)(d.strong,{children:"A"}),", ",(0,r.jsx)(d.strong,{children:"?"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[:word:]"})})}),(0,r.jsx)("td",{children:"Digits, letters and underscore"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[:word:]"})," ",(0,r.jsx)(d.strong,{children:"a"}),", ",(0,r.jsx)(d.strong,{children:"_"})]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"assertions",children:"Assertions"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Regex Component"}),(0,r.jsx)("th",{children:"Meaning"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"?="})})}),(0,r.jsx)("td",{children:"Lookahead assertion"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"cat(?=s)"})," ",(0,r.jsx)(d.strong,{children:"cats"}),", ",(0,r.jsx)(d.strong,{children:"catalog"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"?!"})})}),(0,r.jsx)("td",{children:"Negative lookahead"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"cat(?!s)"})," ",(0,r.jsx)(d.strong,{children:"cat"}),", ",(0,r.jsx)(d.strong,{children:"catch"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"?<="})})}),(0,r.jsx)("td",{children:"Lookbehind assertion"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"(?<=re)cat"})," ",(0,r.jsx)(d.strong,{children:"recat"}),", ",(0,r.jsx)(d.strong,{children:"precative"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)("b",{children:[(0,r.jsx)(d.code,{children:"?!="})," or ",(0,r.jsx)(d.code,{children:"?<!"})]})}),(0,r.jsx)("td",{children:"Negative lookbehind"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"(?<!re)cat"})," ",(0,r.jsx)(d.strong,{children:"cat"}),", ",(0,r.jsx)(d.strong,{children:"catch"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"?>"})})}),(0,r.jsx)("td",{children:"Once-only Subexpression"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"(?>foo|fo)bar"})," ",(0,r.jsx)(d.strong,{children:"foobar"}),", ",(0,r.jsx)(d.strong,{children:"fofoobar"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"?()"})})}),(0,r.jsx)("td",{children:"Condition (if-then)"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"(?(?=d)foo|bar)"})," ",(0,r.jsx)(d.strong,{children:"dog"}),", ",(0,r.jsx)(d.strong,{children:"food"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"?()|"})})}),(0,r.jsx)("td",{children:"Condition (if-then-else)"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"(?(?=d)foo|bar)"})," ",(0,r.jsx)(d.strong,{children:"dog"}),", ",(0,r.jsx)(d.strong,{children:"food"})]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"quantifiers",children:"Quantifiers"}),"\n",(0,r.jsxs)(d.p,{children:["Add ",(0,r.jsx)(d.code,{children:"?"})," to a quantifier to make it ungreedy."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Regex Component"}),(0,r.jsx)("th",{children:"Meaning"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"*"})})}),(0,r.jsx)("td",{children:"0 or more"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"go*gle"})," ",(0,r.jsx)(d.strong,{children:"ggle"}),", ",(0,r.jsx)(d.strong,{children:"google"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"+"})})}),(0,r.jsx)("td",{children:"1 or more"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"go+gle"})," ",(0,r.jsx)(d.strong,{children:"google"}),", ",(0,r.jsx)(d.strong,{children:"gogle"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"?"})})}),(0,r.jsx)("td",{children:"0 or 1"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"colou?r"})," ",(0,r.jsx)(d.strong,{children:"color"}),", ",(0,r.jsx)(d.strong,{children:"colour"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"{3}"})})}),(0,r.jsx)("td",{children:"Exactly 3"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"go{3}gle"})," ",(0,r.jsx)(d.strong,{children:"gooogle"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"{3,}"})})}),(0,r.jsx)("td",{children:"3 or more"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"go{3,}gle"})," ",(0,r.jsx)(d.strong,{children:"goooogle"}),", ",(0,r.jsx)(d.strong,{children:"goooogle"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"{3,5}"})})}),(0,r.jsx)("td",{children:"3, 4 or 5"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"go{3,5}gle"})," ",(0,r.jsx)(d.strong,{children:"goooogle"}),", ",(0,r.jsx)(d.strong,{children:"goooooogle"})]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"escape-sequences",children:"Escape Sequences"}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"Escaping"})," is a way of treating characters which have a special meaning in regular expressions literally, rather than as special characters."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Regex Component"}),(0,r.jsx)("th",{children:"Meaning"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\"})})}),(0,r.jsx)("td",{children:"Escape following character"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\$"})," ",(0,r.jsx)(d.strong,{children:"The price is $10"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\Q"})})}),(0,r.jsx)("td",{children:"Begin literal sequence"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\Q$10\\E"})," ",(0,r.jsx)(d.strong,{children:"The price is $10"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\E"})})}),(0,r.jsx)("td",{children:"End literal sequence"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\Q$10\\E"})," ",(0,r.jsx)(d.strong,{children:"The price is $10"})]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"special-characters",children:"Special Characters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Regex Component"}),(0,r.jsx)("th",{children:"Meaning"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\n"})})}),(0,r.jsx)("td",{children:"New line"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"Hello\\nWorld"})," ",(0,r.jsx)(d.strong,{children:"Hello\\nWorld"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\r"})})}),(0,r.jsx)("td",{children:"Carriage return"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"First line\\rSecond line"})," ",(0,r.jsx)(d.strong,{children:"First line\\rSecond line"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\t"})})}),(0,r.jsx)("td",{children:"Tab"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"Name:\\tJohn"})," ",(0,r.jsx)(d.strong,{children:"Name:    John"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\v"})})}),(0,r.jsx)("td",{children:"Vertical tab"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"First line\\vSecond line"})," ",(0,r.jsx)(d.strong,{children:"First line\\vSecond line"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\f"})})}),(0,r.jsx)("td",{children:"Form feed"}),(0,r.jsxs)("td",{children:["``Page 1\\fPage 2` ",(0,r.jsx)(d.strong,{children:"Page 1\\fPage 2"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\o"})})}),(0,r.jsx)("td",{children:"Octal character"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\o123"})," ",(0,r.jsx)(d.strong,{children:"123"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"\\x"})})}),(0,r.jsx)("td",{children:"Hex character"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"\\x41"})," ",(0,r.jsx)(d.strong,{children:"41"})]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"groups-and-ranges",children:"Groups and Ranges"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Regex Component"}),(0,r.jsx)("th",{children:"Meaning"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"."})})}),(0,r.jsxs)("td",{children:["Any character except new line (",(0,r.jsx)(d.code,{children:"\\n"}),")"]}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"c.t"})," ",(0,r.jsx)(d.strong,{children:"cAt"}),", ",(0,r.jsx)(d.strong,{children:"c1t"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"(|)"})})}),(0,r.jsx)("td",{children:"Or"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"(cat|dog)"})," ",(0,r.jsx)(d.strong,{children:"cat"}),", ",(0,r.jsx)(d.strong,{children:"dog"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"()"})})}),(0,r.jsx)("td",{children:"Group"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"(ab)+"})," ",(0,r.jsx)(d.strong,{children:"abab"}),", ",(0,r.jsx)(d.strong,{children:"ababab"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"(?:)"})})}),(0,r.jsx)("td",{children:"Passive (non-capturing) group"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"(?:abc)+"})," ",(0,r.jsx)(d.strong,{children:"abc"}),", ",(0,r.jsx)(d.strong,{children:"abcabcabc"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[]"})})}),(0,r.jsx)("td",{children:"Range"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[ae]"})," ",(0,r.jsx)(d.strong,{children:"a"}),", ",(0,r.jsx)(d.strong,{children:"e"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[^]"})})}),(0,r.jsx)("td",{children:"Not in range"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[^ae]"})," ",(0,r.jsx)(d.strong,{children:"b"}),", ",(0,r.jsx)(d.strong,{children:"d"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[a-z]"})})}),(0,r.jsx)("td",{children:"Range of lowercase letters from a to z"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[a-z]+"})," ",(0,r.jsx)(d.strong,{children:"abc"}),", ",(0,r.jsx)(d.strong,{children:"hello"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[A-Z]"})})}),(0,r.jsx)("td",{children:"Range of uppercase letters from A to Z"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[A-Z]+"})," ",(0,r.jsx)(d.strong,{children:"ABC"}),", ",(0,r.jsx)(d.strong,{children:"HELLO"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"[0-9]"})})}),(0,r.jsx)("td",{children:"Range of digits from 0 to 9"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"[0-9]+"})," ",(0,r.jsx)(d.strong,{children:"123"}),", ",(0,r.jsx)(d.strong,{children:"45"})]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"pattern-modifiers",children:"Pattern Modifiers"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Regex Component"}),(0,r.jsx)("th",{children:"Meaning"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"g"})})}),(0,r.jsx)("td",{children:"Global match"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"/cat/g"})," ",(0,r.jsx)(d.strong,{children:"cat"}),", ",(0,r.jsx)(d.strong,{children:"cats"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"i"})})}),(0,r.jsx)("td",{children:"Case-insensitive (PCRE)"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"/cat/i"})," ",(0,r.jsx)(d.strong,{children:"cAt"}),", ",(0,r.jsx)(d.strong,{children:"Cat"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"m"})})}),(0,r.jsx)("td",{children:"Multiple lines (PCRE)"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"/^cat/m"})," ",(0,r.jsx)(d.strong,{children:"cat\\nconcatenat"}),", ",(0,r.jsx)(d.strong,{children:"cat\\nsome text\\ncat"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"s"})})}),(0,r.jsx)("td",{children:"Treat string as single line (PCRE)"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"/cat.s/m"})," ",(0,r.jsx)(d.strong,{children:"cat\\ns"}),", ",(0,r.jsx)(d.strong,{children:"cat\\nsome text"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"x"})})}),(0,r.jsx)("td",{children:"Allow comments and whitespace in pattern (PCRE)"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"/c a t/x"})," ",(0,r.jsx)(d.strong,{children:"concatenate"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"e"})})}),(0,r.jsx)("td",{children:"Evaluate replacement (PCRE)"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"preg_replace('/(\\d+)/e', '$1 * 2', '123 456')"})," ",(0,r.jsx)(d.strong,{children:"246 912"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"U"})})}),(0,r.jsx)("td",{children:"Ungreedy pattern (PCRE)"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.code,{children:"/a.*b/U"})," ",(0,r.jsx)(d.strong,{children:"a test b"})]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"string-replacement",children:"String Replacement"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Regex Component"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"$n"})})}),(0,r.jsx)("td",{children:"nth non-passive group"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"$2"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.strong,{children:"xyz"})," in ",(0,r.jsx)(d.code,{children:"/^(abc(xyz))$/"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"$1"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.strong,{children:"xyz"})," in ",(0,r.jsx)(d.code,{children:"/^(?:abc)(xyz)$/"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)("code",{children:"&`"})})}),(0,r.jsx)("td",{children:"Before matched string"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"$'"})})}),(0,r.jsx)("td",{children:"After matched string"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"$+"})})}),(0,r.jsx)("td",{children:"Last matched string"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:(0,r.jsx)(d.code,{children:"$&"})})}),(0,r.jsx)("td",{children:"Entire matched string"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,n.a)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);