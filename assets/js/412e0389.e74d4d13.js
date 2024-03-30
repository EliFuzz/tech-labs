"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6109],{42462:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=i(11527),t=i(88672),r=i(29140),a=i(52360);const l={title:"Microservices",description:"Microservices",hide_table_of_contents:!0},o=void 0,c={id:"education/design-patterns/microservices",title:"Microservices",description:"Microservices",source:"@site/docs/education/03-design-patterns/06-microservices.mdx",sourceDirName:"education/03-design-patterns",slug:"/education/design-patterns/microservices",permalink:"/tech-labs/docs/education/design-patterns/microservices",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/03-design-patterns/06-microservices.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Microservices",description:"Microservices",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Gangs of Four (GoF)",permalink:"/tech-labs/docs/education/design-patterns/gof"},next:{title:"Enterprise",permalink:"/tech-labs/docs/education/design-patterns/enterprise"}},d={},h=[{value:"Migration",id:"migration",level:2}];function u(e){const n={h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(a.Z,{value:"overview",label:"High Overview",children:(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Category"}),(0,s.jsx)("th",{children:"Monolithic architecture"}),(0,s.jsx)("th",{children:"Microservices architecture"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Design"})}),(0,s.jsx)("td",{children:"Single code base with multiple interdependent functions"}),(0,s.jsx)("td",{children:"Independent software components with autonomous functionality that communicate with each other using APIs"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Development"})}),(0,s.jsx)("td",{children:"Requires less planning at the start, but gets increasingly complex to understand and maintain"}),(0,s.jsx)("td",{children:"Requires more planning and infrastructure at the start, but gets easier to manage and maintain over time"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Deployment"})}),(0,s.jsx)("td",{children:"Entire application deployed as a single entity"}),(0,s.jsx)("td",{children:"Every microservice is an independent software entity that requires individual containerized deployment"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Debugging"})}),(0,s.jsx)("td",{children:"Trace the code path in the same environment"}),(0,s.jsx)("td",{children:"Requires advanced debugging tools to trace the data exchange between multiple microservices"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Modification"})}),(0,s.jsx)("td",{children:"Small changes introduce greater risks as they impact the entire code base"}),(0,s.jsx)("td",{children:"You can modify individual microservices without impacting the entire application"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Scale"})}),(0,s.jsx)("td",{children:"You have to scale the entire application, even if only certain functional areas experience an increase in demand"}),(0,s.jsx)("td",{children:"You can scale individual microservices as required, which saves overall scaling costs"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Investment"})}),(0,s.jsx)("td",{children:"Low upfront investment at the cost of increased ongoing and maintenance efforts"}),(0,s.jsx)("td",{children:"Additional time and cost investment to set up the required infrastructure and build team competency. However, long-term cost savings, maintenance, and adaptability"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Use Cases"})}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Small to medium-sized projects"}),(0,s.jsx)("li",{children:"Rapid prototyping and MVP development"}),(0,s.jsx)("li",{children:"Tightly coupled components"}),(0,s.jsx)("li",{children:"Resource constraints"}),(0,s.jsx)("li",{children:"Low-usage applications for improving cost efficiency"})]})}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Large and complex systems"}),(0,s.jsx)("li",{children:"Scalability demands"}),(0,s.jsx)("li",{children:"Technology diversity"}),(0,s.jsx)("li",{children:"Independent deployment and continuous delivery"}),(0,s.jsx)("li",{children:"High fault tolerance and resilience"}),(0,s.jsx)("li",{children:"Large cross-functional development teams"}),(0,s.jsx)("li",{children:"Rapid evolving requirements"})]})})]})]})}),(0,s.jsx)(a.Z,{value:"monolithic",label:"Monolithic",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(a.Z,{value:"overview",label:"Overview",attributes:{className:"tabs__vertical"},children:[(0,s.jsx)(n.mermaid,{value:"    graph TB\n\n    client(Client)\n\n    payment(Payment)\n    shoppingCart(Shopping Cart)\n    inventory(Inventory)\n\n    singleInstance(Monolith)\n\n    database[(Database)]\n\n    client --\x3e payment\n    client --\x3e shoppingCart\n    client --\x3e inventory\n\n    payment --\x3e singleInstance\n    shoppingCart --\x3e singleInstance\n    inventory --\x3e singleInstance\n    singleInstance --\x3e database\n\n    subgraph dev [Development]\n        direction LR\n\n        subgraph vcs[Version Control System]\n            direction TB\n\n            git{{Git/Mercurial}}\n        end\n\n        subgraph teams [Dev Teams]\n            direction TB\n\n            developer1(Dev Team)\n            developer2(Dev Team)\n            developer3(Dev Team)\n        end\n    end\n\n    vcs --\x3e singleInstance\n    teams --\x3e vcs"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Monolithic architecture"})," is a single application that is built as a single unit. Is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the complete application."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Monolithic applications initially offer advantages such as ease of development and deployment"}),"\n",(0,s.jsx)(n.li,{children:"Challenges arise as teams grow, leading to blocked deploys, cross-team functionality issues, and difficulties with updates"}),"\n"]}),(0,s.jsxs)(n.p,{children:["As a result, monolithic applications are often difficult to scale and maintain and often migrate to a ",(0,s.jsx)(n.strong,{children:"microservices architecture"}),". This involves identifying and modifying tightly coupled entities, which is complex."]})]}),(0,s.jsxs)(a.Z,{value:"modular",label:"Modular Monolith",children:[(0,s.jsxs)(n.p,{children:["Monolithic applications can be transformed into ",(0,s.jsx)(n.strong,{children:"modular monolith"})," by starting with a single repository and clear boundaries between business contexts. Which will allow for easier transition to microservices architecture."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Advantages of Modular Monolith"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bounded contexts in a modular monolith encompass independent business functions"}),"\n",(0,s.jsx)(n.li,{children:"Isolating business contexts within a single codebase and database prevents future issues and facilitates changes"}),"\n",(0,s.jsx)(n.li,{children:"Changes within a modular monolith are less costly compared to traditional monoliths, as data migration isn't necessary"}),"\n",(0,s.jsx)(n.li,{children:"Communication between modules in a modular monolith should utilize events instead of direct method calls"}),"\n",(0,s.jsx)(n.li,{children:"Techniques for maintaining data consistency and event management include emitting events, using databases, or employing message queues"}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Segregation by Feature"})}),(0,s.jsx)(n.mermaid,{value:'    graph LR\n\n    subgraph monolith[Modular Monolith]\n        direction LR\n\n        subgraph module1["Payment Module"]\n            direction LR\n\n            subgraph placeOrder[Place Order Feature]\n                direction TB\n\n                view1(View)\n                controller1(Controller)\n                model1(Model)\n\n                view1 --\x3e controller1\n                controller1 --\x3e model1\n            end\n        end\n\n        subgraph module2["Shopping Cart Module"]\n            direction LR\n\n            subgraph shoppingCart[Shopping Cart Feature]\n                direction TB\n\n                view2(View)\n                controller2(Controller)\n                model2(Model)\n\n                view2 --\x3e controller2\n                controller2 --\x3e model2\n            end\n        end\n\n        subgraph module3["Inventory Module"]\n            direction LR\n\n            subgraph inventory1[Product Catalog Management Feature]\n                direction TB\n\n                view3(View)\n                controller3(Controller)\n                model3(Model)\n\n                view3 --\x3e controller3\n                controller3 --\x3e model3\n            end\n\n            subgraph inventory2[Inventory Tracking Feature]\n                direction TB\n\n                view4(View)\n                controller4(Controller)\n                model4(Model)\n\n                view4 --\x3e controller4\n                controller4 --\x3e model4\n            end\n        end\n    end\n\n    database[(Database)]\n\n    model1 --\x3e database\n    model2 --\x3e database\n    model3 --\x3e database\n    model4 --\x3e database\n\n    devTeam1(Dev Team) --\x3e module1\n    devTeam2(Dev Team) --\x3e module2\n    devTeam3(Dev Team) --\x3e module3'})]})]})}),(0,s.jsx)(a.Z,{value:"microservices",label:"Microservices",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(a.Z,{value:"overview",label:"Overview",attributes:{className:"tabs__vertical"},children:[(0,s.jsx)(n.mermaid,{value:"    graph LR\n\n    subgraph microservices[Microservices]\n        direction TB\n\n        payment(Payment)\n        shoppingCart(Shopping Cart)\n        inventory(Inventory)\n\n        payment <--\x3e shoppingCart\n        payment <--\x3e inventory\n        shoppingCart <--\x3e inventory\n    end\n\n    client(Client) --\x3e payment\n    client --\x3e shoppingCart\n    client --\x3e inventory"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Microservices"})," are independent, and loosely coupled software components that perform specific tasks within a larger application, facilitating scalability, flexibility, and maintainability in software development. They organize the subdomains into one or more deployable/executable components."]})]}),(0,s.jsx)(a.Z,{value:"advantages",label:"Advantages",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simple Components"}),": Small, focused components, simplifying development and maintenance"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team Autonomy"}),": Teams should have the independence to develop, test, and deploy their software autonomously, enabling faster iterations and reducing dependencies on other teams"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fast Deployment Pipeline"}),": A rapid deployment pipeline facilitates quick feedback and frequent deployments"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Support for Multiple Technology Stacks"}),": Applications may utilize various technologies within different subdomains, requiring developers to update the technology stack to maintain compatibility with current languages and frameworks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Segregation by Characteristics"}),": Segregating components based on characteristics like resource requirements, availability, and security enhances scalability, availability, and security, respectively"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simple Interactions"}),": Operations that involve local or straightforward interactions between components are easier to troubleshoot"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Efficient Interactions"}),": Distributed operations involving numerous network round trips and large data transfers can be inefficient and should be minimized for optimal performance"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prefer ACID over BASE"}),": Implementing operations as ACID transactions rather than eventually consistent sagas simplifies development and maintenance"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Minimize Runtime Coupling"}),": Reducing runtime coupling maximizes availability and minimizes latency for operations, improving overall system performance"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Minimize Design Time Coupling"}),": Decreasing design time coupling reduces the likelihood of services needing to be changed simultaneously, enhancing productivity and flexibility in development"]}),"\n"]})}),(0,s.jsx)(a.Z,{value:"principles",label:"Principles",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Organized around Business Capabilities"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Traditional division based on technology layers leads to cross-team projects for even simple changes due to Conway's Law (the way people within an organization communicate influences the structure of the systems they build)"}),"\n",(0,s.jsx)(n.li,{children:"Microservice approach focuses on organizing services around business capabilities"}),"\n",(0,s.jsx)(n.li,{children:"Cross-functional teams with skills for entire development process"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Size of Microservices"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Varies, often sized around Amazon\'s "Two Pizza Team" concept (organizing teams small enough that they can be fed with just two pizzas)'}),"\n",(0,s.jsx)(n.li,{children:"Ranges from a dozen people supporting several services to a smaller team per service"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Product Ownership"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Microservice teams own products over their full lifetime"}),"\n",(0,s.jsx)(n.li,{children:'Inspired by Amazon\'s "you build, you run it" philosophy'}),"\n",(0,s.jsx)(n.li,{children:"Emphasizes ongoing relationship and enhancing business capabilities"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Communication Structure"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Smart endpoints and dumb pipes approach"}),"\n",(0,s.jsx)(n.li,{children:"Microservices use simple protocols like HTTP request-response and lightweight messaging"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Comparison with SOA"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Microservices similar to some aspects of Service Oriented Architecture (SOA) but with distinct differences by focusing on avoiding pitfalls of traditional SOA implementations"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Decentralized Governance"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Encourages using right tools for the job rather than standardizing on single technology platforms"}),"\n",(0,s.jsx)(n.li,{children:"Promotes producing useful tools shared within teams, similar to internal open source model"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Infrastructure Automation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Utilizes extensive automation techniques for building, deploying, and operating microservices"}),"\n",(0,s.jsx)(n.li,{children:"Enables teams to manage infrastructure efficiently and deploy software frequently"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Design Considerations"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Emphasis on failure tolerance, real-time monitoring, and asynchronous communication"}),"\n",(0,s.jsx)(n.li,{children:"Supports evolutionary design, modular decomposition, and granular release planning"}),"\n",(0,s.jsx)(n.li,{children:"Prefers tolerant services over heavy versioning for managing changes"}),"\n"]}),"\n"]}),"\n"]})})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"migration",children:"Migration"}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(a.Z,{value:"process",label:"Process",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Discovering system operations"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Analyzing existing monolithic architecture"}),"\n",(0,s.jsx)(n.li,{children:"Identifying functionalities and dependencies"}),"\n",(0,s.jsx)(n.li,{children:"Documenting system components, interactions, and data flows"}),"\n",(0,s.jsx)(n.li,{children:"Conducting interviews with stakeholders to understand business requirements"}),"\n",(0,s.jsx)(n.li,{children:"Profiling system performance and resource utilization"}),"\n",(0,s.jsx)(n.li,{children:"Assessing scalability and maintainability issues in the current architecture"}),"\n",(0,s.jsx)(n.li,{children:"Generating system documentation and diagrams (e.g., entity-relationship diagrams, flowcharts)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Defining subdomains"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use domain-driven design approach"}),"\n",(0,s.jsx)(n.li,{children:"Identifying business capabilities and boundaries"}),"\n",(0,s.jsx)(n.li,{children:"Decomposing the monolithic system into cohesive subdomains"}),"\n",(0,s.jsx)(n.li,{children:"Prioritizing subdomains based on business impact and complexity"}),"\n",(0,s.jsx)(n.li,{children:"Defining bounded contexts for each subdomain"}),"\n",(0,s.jsx)(n.li,{children:"Documenting subdomain boundaries, responsibilities, and contexts"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Designing services and their collaborations"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Selecting appropriate communication protocols (e.g., REST, gRPC, GraphQL, Publish-Subscribe messaging)"}),"\n",(0,s.jsx)(n.li,{children:"Defining service interfaces and contracts"}),"\n",(0,s.jsx)(n.li,{children:"Choosing technology stacks for individual services"}),"\n",(0,s.jsx)(n.li,{children:"Designing fault-tolerant and resilient services"}),"\n",(0,s.jsx)(n.li,{children:"Implementing event-driven architectures or choreographed workflows"}),"\n",(0,s.jsx)(n.li,{children:"Establishing service discovery and registry mechanisms"}),"\n",(0,s.jsx)(n.li,{children:"Developing API gateways for routing and security"}),"\n",(0,s.jsx)(n.li,{children:"Implementing circuit breakers and retries for robustness"}),"\n",(0,s.jsx)(n.li,{children:"Designing data consistency strategies (e.g., eventual consistency, transactional boundaries)"}),"\n",(0,s.jsx)(n.li,{children:"Defining service versioning and backward compatibility policies"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Evaluating a microservice architecture"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Performing architectural reviews and inspections"}),"\n",(0,s.jsx)(n.li,{children:"Conducting proof-of-concept implementations"}),"\n",(0,s.jsx)(n.li,{children:"Analyzing trade-offs between microservices and monolithic architectures"}),"\n",(0,s.jsx)(n.li,{children:"Evaluating scalability, performance, and latency requirements"}),"\n",(0,s.jsx)(n.li,{children:"Assessing operational overhead and deployment complexities"}),"\n",(0,s.jsx)(n.li,{children:"Conducting cost-benefit analysis of microservices adoption"}),"\n",(0,s.jsx)(n.li,{children:"Benchmarking against key performance indicators (KPIs) and service level objectives (SLOs)"}),"\n",(0,s.jsx)(n.li,{children:"Considering organizational readiness and cultural implications"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Refactoring a microservice architecture"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Identifying code smells and anti-patterns in the existing architecture"}),"\n",(0,s.jsx)(n.li,{children:"Decomposing monolithic codebase into microservices"}),"\n",(0,s.jsx)(n.li,{children:"Applying domain-driven design principles for service boundaries"}),"\n",(0,s.jsx)(n.li,{children:"Implementing continuous integration and continuous deployment (CI/CD) pipelines"}),"\n",(0,s.jsx)(n.li,{children:"Automating testing, deployment, and monitoring processes"}),"\n",(0,s.jsx)(n.li,{children:"Establishing DevOps practices for collaboration and feedback loops"}),"\n",(0,s.jsx)(n.li,{children:"Implementing distributed tracing and logging for observability"}),"\n",(0,s.jsx)(n.li,{children:"Refactoring data storage and access patterns"}),"\n",(0,s.jsx)(n.li,{children:"Ensuring backward compatibility and data migration strategies"}),"\n",(0,s.jsx)(n.li,{children:"Documenting refactoring decisions and outcomes"}),"\n"]}),"\n"]}),"\n"]})}),(0,s.jsx)(a.Z,{value:"decomposition",label:"Service Decomposition",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(a.Z,{value:"overview",label:"Overview",attributes:{className:"tabs__vertical"},children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{}),(0,s.jsx)("th",{children:"Decompose by Business Capability"}),(0,s.jsx)("th",{children:"Decompose by Subdomain"}),(0,s.jsx)("th",{children:"Self-contained Service"}),(0,s.jsx)("th",{children:"Service per Team"}),(0,s.jsx)("th",{children:"Strangler Application"}),(0,s.jsx)("th",{children:"Anti-corruption Layer"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Definition"}),(0,s.jsx)("td",{children:"Breaks down the application into services based on business capabilities or functions"}),(0,s.jsx)("td",{children:"Splits services based on different subdomains or components of the business"}),(0,s.jsx)("td",{children:"Each service is independent and complete in itself, reducing dependencies"}),(0,s.jsx)("td",{children:"Each team is responsible for one or more services, allowing for ownership and autonomy"}),(0,s.jsx)("td",{children:"A new system slowly replaces the old one by gradually taking over its functionalities"}),(0,s.jsx)("td",{children:"Creates a layer between two services to ensure that changes in one do not affect the other"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Complexity"}),(0,s.jsx)("td",{children:"Medium. Requires a good understanding of business capabilities"}),(0,s.jsx)("td",{children:"High. Requires a deep understanding of the domain and its subdomains"}),(0,s.jsx)("td",{children:"High. Each service must be self-sufficient"}),(0,s.jsx)("td",{children:"Low. Teams have full control over their services"}),(0,s.jsx)("td",{children:"Medium. Requires careful planning and incremental implementation"}),(0,s.jsx)("td",{children:"Medium. Requires understanding of both services involved"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Use Cases"}),(0,s.jsx)("td",{children:"Large applications with distinct business functions"}),(0,s.jsx)("td",{children:"Complex domains with distinct subdomains"}),(0,s.jsx)("td",{children:"Applications where each service can operate independently"}),(0,s.jsx)("td",{children:"Teams with specific domain knowledge or skills"}),(0,s.jsx)("td",{children:"Legacy systems that need to be replaced"}),(0,s.jsx)("td",{children:"Preventing unwanted dependencies between services"})]})]})]})}),(0,s.jsxs)(a.Z,{value:"subdomain",label:"Decompose by Subdomain / Business Capability",children:[(0,s.jsx)(n.mermaid,{value:"  graph LR\n\n  subgraph ssd[Successful Software Development]\n    direction BT\n\n    process(<b>Process</b><br/>CI/CD)\n\n    architecture(<b>Architecture</b><br/>Microservice Architecture)\n\n    organization(<b>Organization</b><br/>small, agile, autonomous, cross-functional teams)\n\n    organization ---\x3e|enables| process\n    architecture --\x3e|enables| process\n    architecture --\x3e|enables| organization\n  end"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stable Architecture"}),": Ensure the architecture is robust and consistent, minimizing disruptions and failures"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cohesive Services"}),": Services should focus on a specific set of closely related functions, enhancing clarity and maintainability"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Common Closure Principle"}),": Group together components that are likely to change together, reducing the ripple effect of modifications across the system"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Loose Coupling"}),": Services should expose clear APIs to interact with, allowing for flexibility in implementation changes without impacting clients"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Testability"}),": Each service should be designed to be easily testable, facilitating quality assurance and reliability"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scalable Team Size"}),": Services should be small enough that they can be developed and managed effectively by a team of 6-10 people, promoting efficiency and communication"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Autonomous Teams"}),": Teams responsible for services should have the autonomy to develop, deploy, and maintain their services independently, minimizing dependencies and streamlining workflows"]}),"\n"]})]}),(0,s.jsxs)(a.Z,{value:"selfContained",label:"Self-Contained Service",children:[(0,s.jsx)(n.mermaid,{value:"    graph RL\n\n    client(Client)\n\n    subgraph contained[Self-Contained Service]\n        direction LR\n\n        embedded(Embedded Module)\n    end\n\n    client <--\x3e|HTTP Request/Response| contained\n    contained --- dbReplica\n\n    dbReplica[(CQRS Replica)]\n\n    message([Message Channel])\n    saga(Saga Participant Service)\n\n    saga --- message\n    message --- contained\n\n    event([Event Channel])\n    cqrs(CQRS data owner Service)\n\n    db[(DB)]\n\n    db --- cqrs\n    cqrs --- event\n    event --- contained"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Pros"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Improved availability and response time"}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Cons"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Increased cost and complexity of using CQRS"}),"\n",(0,s.jsx)(n.li,{children:"Increased complexity of using sagas"}),"\n",(0,s.jsx)(n.li,{children:"Less straightforward API when using sagas"}),"\n"]})]}),(0,s.jsxs)(a.Z,{value:"team",label:"Service per Team",children:[(0,s.jsx)(n.mermaid,{value:"    graph BT\n\n    api1((API))\n    api2((API))\n\n    subgraph serviceA [Service A]\n        direction TB\n\n        module1(Module 1)\n        module2(Module 2)\n    end\n\n    api1 --\x3e serviceA\n    serviceA --\x3e api2\n\n    business(business capability-based, cross-functional, team) ---\x3e|responsible for| api1\n    business --\x3e|owns and deploys| serviceA\n\n    negotiates{{negotiates}} -.-> anotherTeam(team)\n    business -.-> negotiates\n    negotiates -.-> api2\n\n    anotherTeam --\x3e|owns and deploy| serviceB(Service B)"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Pros"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Facilitates autonomous team work with minimal coordination"}),"\n",(0,s.jsx)(n.li,{children:"Promotes loose coupling between teams"}),"\n",(0,s.jsx)(n.li,{children:"Achieves autonomy and loose coupling with fewer services"}),"\n",(0,s.jsx)(n.li,{children:"Enhances code quality through long-term ownership"}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Cons"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Teams may not always align with end user features"}),"\n",(0,s.jsx)(n.li,{children:"Implementing cross-service features becomes more complex and requires collaboration between teams"}),"\n"]})]}),(0,s.jsxs)(a.Z,{value:"strangler",label:"Strangler Pattern",children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Identify the system boundary you want to re-architect"})}),"\n",(0,s.jsx)(n.mermaid,{value:"  graph LR\n\n  subgraph legacy[Legacy System]\n    boundary[[Boundary]]\n  end"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create a facade"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"During system re-architecture, it's crucial that clients remain unaffected. To achieve this, the facade should align with the existing system API, providing a seamless transition for users"}),"\n",(0,s.jsx)(n.li,{children:"API of the new service needs to be meticulously crafted to maintain backward compatibility with the legacy API. Any potential breaking changes to the new service's API should only be implemented after the re-architecture process is complete"}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(n.mermaid,{value:"  graph LR\n\n    subgraph legacy[Legacy System]\n      boundary[[Boundary]]\n    end\n\n    facade(Strangler Facade) <--\x3e boundary"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Re-architect"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement the new service and integrate it with the strangler facade"}),"\n",(0,s.jsx)(n.li,{children:"Dark launch the new service by diverting traffic between the new and legacy implementations"}),"\n",(0,s.jsx)(n.li,{children:"Initially, return responses from the legacy implementation while monitoring the behavior of the new implementation"}),"\n",(0,s.jsx)(n.li,{children:"Optionally, employ continuous deployment to deploy partial implementations of the new service to gain confidence and reduce risk"}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(n.mermaid,{value:"  graph LR\n\n    subgraph legacy[Legacy System]\n      boundary{{Boundary}}\n    end\n\n    newService(New Service)\n\n    facade(Strangler Facade) <--\x3e boundary\n    facade --\x3e newService\n    newService --\x3e stop((\ud83d\udeab))"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cutover"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Once confident in the new implementation, switch production traffic to be served from the new implementation"}),"\n",(0,s.jsx)(n.li,{children:"Retain the legacy implementation for easy rollback if necessary"}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(n.mermaid,{value:"  graph LR\n\n    subgraph legacy[Legacy System]\n      boundary{{Boundary}}\n    end\n\n    newService(New Service)\n\n    facade(Strangler Facade) <--\x3e newService\n    boundary --\x3e stop((\ud83d\udeab))"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Clean up"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Delete the legacy code that has been replaced once the new system is established"}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(n.mermaid,{value:"  graph LR\n\n    legacy[Legacy System]\n\n    newService(New Service)\n\n    facade(Strangler Facade) <--\x3e newService"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Migrate clients to the new API and remove the strangler facade"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Manage the transition to the new API, potentially requiring breaking changes to clients"}),"\n",(0,s.jsx)(n.li,{children:"Expose the new API while maintaining the strangler facade for large client bases"}),"\n",(0,s.jsx)(n.li,{children:"Monitor usage of the strangler facade and assist clients in migrating to the new API"}),"\n",(0,s.jsx)(n.li,{children:"Remove the strangler facade once it's no longer in use"}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(n.mermaid,{value:"  graph LR\n\n    legacy[Legacy System]\n\n    client(Client) <--\x3e newService(New Service)"})]})]})})]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);