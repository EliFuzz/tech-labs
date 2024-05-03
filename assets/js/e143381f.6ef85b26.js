"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1462],{52067:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(86070),t=n(27468);const o={title:"Roadmap Overview",description:"Overview Roadmap",hide_table_of_contents:!0},i=void 0,c={id:"roadmap/overview",title:"Roadmap Overview",description:"Overview Roadmap",source:"@site/docs/roadmap/01-overview.mdx",sourceDirName:"roadmap",slug:"/roadmap/overview",permalink:"/tech-labs/docs/roadmap/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/roadmap/01-overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Roadmap Overview",description:"Overview Roadmap",hide_table_of_contents:!0},sidebar:"roadmap",next:{title:"Computer Science",permalink:"/tech-labs/docs/roadmap/computer-science"}},s={},d=[];function l(e){const r={mermaid:"mermaid",...(0,t.R)(),...e.components};return(0,a.jsx)(r.mermaid,{value:'graph TB\n\n    Prerequisites --\x3e SystemAdministration\n    Prerequisites --\x3e Development\n    Prerequisites --\x3e Security\n    Prerequisites --\x3e DataScience\n    SystemAdministration --\x3e Architect\n    Security --\x3e Architect\n    Development --\x3e Architect\n    DataScience --\x3e Architect\n\n    SystemAdministration --\x3e Management\n    Security --\x3e Management\n    Development --\x3e Management\n    DataScience --\x3e Management\n    Architect --\x3e Management\n\n    subgraph Prerequisites\n      direction TB\n\n      ComputerScience(<a href="/en/docs/roadmap/computer-science" target="_blank" rel="noopener noreferrer">Computer Science</a>)\n      Mathematics(<a href="en/docs/category/computer-science" target="_blank" rel="noopener noreferrer">Mathematics</a>)\n      Statistics(<a href="/en/docs/category/statistics" target="_blank" rel="noopener noreferrer">Statistics</a>)\n      Econometrics(<a href="/en/docs/category/econometrics" target="_blank" rel="noopener noreferrer">Econometrics</a>)\n      InternetTechnology(<a href="/en/docs/category/networking" target="_blank" rel="noopener noreferrer">Internet Technology</a>)\n    end\n\n    subgraph SystemAdministration [System Administration]\n      direction LR\n\n      LinuxAdmin(Linux Administrator)\n      WindowsAdmin(Windows Administrator)\n      CloudAdmin(Cloud Administrator)\n    end\n\n    subgraph Security\n      direction LR\n\n      SecuritySoftwareDeveloper(<a href="/en/docs/roadmap/cyber-security" target="_blank" rel="noopener noreferrer">Security Software Developer</a>)\n      PenetrationTester(<a href="/en/docs/roadmap/cyber-security" target="_blank" rel="noopener noreferrer">Penetration Tester / Ethical Hacker</a>)\n      ApplicationSecurityEngineer(<a href="/en/docs/roadmap/cyber-security" target="_blank" rel="noopener noreferrer">Application Security Engineer</a>)\n      CyberSecurity(<a href="/en/docs/roadmap/cyber-security" target="_blank" rel="noopener noreferrer">Cyber Security</a>)\n      infoSec(<a href="/en/docs/roadmap/cyber-security" target="_blank" rel="noopener noreferrer">InfoSec Analyst / Cyber Security Analyst</a>)\n      NetworkSecurityArchitect(<a href="/en/docs/roadmap/cyber-security" target="_blank" rel="noopener noreferrer">Network Security Architect</a>)\n    end\n\n    subgraph Development\n      direction LR\n\n      Frontend(<a href="/en/docs/roadmap/frontend" target="_blank" rel="noopener noreferrer">Frontend</a>)\n      Backend(<a href="/en/docs/roadmap/backend" target="_blank" rel="noopener noreferrer">Backend</a>)\n      Mobile(<a href="/en/docs/roadmap/mobile" target="_blank" rel="noopener noreferrer">Mobile</a>)\n      Game(<a href="/en/docs/roadmap/game" target="_blank" rel="noopener noreferrer">Game</a>)\n      Blockchain(<a href="/en/docs/roadmap/blockchain" target="_blank" rel="noopener noreferrer">Blockchain</a>)\n      DevOps(<a href="/en/docs/roadmap/devops" target="_blank" rel="noopener noreferrer">DevOps</a>)\n      UIUX(<a href="/en/docs/roadmap/ui-ux-designer" target="_blank" rel="noopener noreferrer">UI/UX Design</a>)\n    end\n\n    subgraph DataScience [Data Science]\n      direction LR\n\n      AI(<a href="/en/docs/roadmap/data-scientist" target="_blank" rel="noopener noreferrer">Artificial Intelligence</a>)\n      DataEngineer(<a href="/en/docs/roadmap/mlops" target="_blank" rel="noopener noreferrer">Data Engineer</a>)\n      MLOps(<a href="/en/docs/roadmap/mlops" target="_blank" rel="noopener noreferrer">MLOps</a>)\n      DataAnalytics(<a href="/en/docs/roadmap/data-scientist" target="_blank" rel="noopener noreferrer">Data Analytics</a>)\n      DataScientist(<a href="/en/docs/roadmap/data-scientist" target="_blank" rel="noopener noreferrer">Data Scientist</a>)\n    end\n\n    subgraph Architect\n      direction TB\n\n      Domain(<a href="/en/docs/roadmap/software-architect" target="_blank" rel="noopener noreferrer">Domain Architect</a>)\n      Cloud(<a href="/en/docs/roadmap-architect" target="_blank" rel="noopener noreferrer">Cloud Architect</a>)\n      Solution(<a href="/en/docs/roadmap-architect" target="_blank" rel="noopener noreferrer">Solutions Architect</a>)\n      Enterprise(<a href="/en/docs/roadmap-architect" target="_blank" rel="noopener noreferrer">Enterprise Architect</a>)\n    end\n\n    subgraph Management\n      direction TB\n\n      TeamLead(<a href="/en/docs/roadmap/management" target="_blank" rel="noopener noreferrer">Team Lead</a>)\n      EngineeringManager(<a href="/en/docs/roadmap/management" target="_blank" rel="noopener noreferrer">Engineering Manager</a>)\n      DirectorOfEngineering(<a href="/en/docs/roadmap/management" target="_blank" rel="noopener noreferrer">Director of Engineering</a>)\n      VPOfEngineering(<a href="/en/docs/roadmap/management" target="_blank" rel="noopener noreferrer">VP of Engineering</a>)\n      ChiefOfEngineering(<a href="/en/docs/roadmap/management" target="_blank" rel="noopener noreferrer">Chief of Engineering</a>)\n      CTO(<a href="/en/docs/roadmap/management" target="_blank" rel="noopener noreferrer">Chief Technology Officer #40;CTO#41;</a>)\n    end'})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);