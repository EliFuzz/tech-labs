"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6958],{19052:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var i=n(11527),t=n(88672),r=n(29140),a=n(52360);const o={title:"Architectural Styles",description:"Architectural Styles",hide_table_of_contents:!0},c=void 0,l={id:"education/design-patterns/architectural-styles",title:"Architectural Styles",description:"Architectural Styles",source:"@site/docs/education/03-design-patterns/04-architectural-styles.mdx",sourceDirName:"education/03-design-patterns",slug:"/education/design-patterns/architectural-styles",permalink:"/tech-labs/docs/education/design-patterns/architectural-styles",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/03-design-patterns/04-architectural-styles.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Architectural Styles",description:"Architectural Styles",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Clean Code",permalink:"/tech-labs/docs/education/design-patterns/clean-code"},next:{title:"Gangs of Four (GoF)",permalink:"/tech-labs/docs/education/design-patterns/gof"}},d={},h=[];function u(e){const s={li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(a.Z,{value:"definition",label:"Definition",children:(0,i.jsx)(s.p,{children:"Architectural style is a framework of guidelines dictating the structure and organization of a software system, encompassing component roles, interactions, and dependencies. It also addresses non-functional aspects like scalability, performance, security, testability, and maintainability. While not rigid, it offers a flexible approach adaptable to project requirements. There's no one-size-fits-all solution; instead, various trade-offs and considerations must be weighed to select the most suitable style for a given scenario"})}),(0,i.jsx)(a.Z,{value:"benefits",label:"Benefits",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Modularity"}),": breaking down a complex system into smaller and simpler components that can be developed, tested, deployed, and maintained independently"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Reusability"}),": avoiding duplication of code and logic by creating reusable components that can be shared across different parts of the system or even across different systems"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Extensibility"}),": allowing the system to evolve and adapt to changing requirements and new features by adding or modifying components without affecting the existing ones"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Testability"}),": making the system easier to test by isolating the components and their dependencies and providing clear interfaces and contracts between them"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Maintainability"}),": making the system easier to understand, modify, debug, and refactor by following consistent and coherent conventions and principles"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Decoupling"}),": reducing the coupling or dependency between components by minimizing the amount of information and behavior they share or expose to each other"]}),"\n"]})}),(0,i.jsxs)(a.Z,{value:"performance",label:"Software Performance",children:[(0,i.jsx)(s.p,{children:"Software performance refers to the ability of a software system to execute its intended functions within a certain time frame and with optimal use of resources. It is a critical aspect of software development and maintenance, as it directly impacts the user experience, system reliability, and overall efficiency."}),(0,i.jsx)(s.p,{children:"Software performance can be defined as the measure of how well a software system executes its intended functions and responds to user input within a specified time frame."}),(0,i.jsx)(s.p,{children:"It encompasses various aspects, including:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Response time"}),": The time it takes for the system to respond to user input or queries"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Throughput"}),": The number of tasks or requests the system can process within a given time frame"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Resource"})," utilization: The efficiency with which the system uses hardware and software resources, such as CPU, memory, disk I/O, and network bandwidth"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Scalability"}),": The system\u2019s ability to handle increased workload or user traffic without a significant decrease in performance"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Reliability"}),": The system\u2019s ability to perform its intended functions consistently and without errors or failures"]}),"\n"]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Key Performance Indicators (KPIs) for Software Systems"})}),(0,i.jsx)(s.p,{children:"Key Performance Indicators (KPIs) are measurable values that demonstrate how effectively a software system is achieving its intended goals."}),(0,i.jsx)(s.p,{children:"Some common KPIs for software performance include:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Response time"}),": Average response time, response time variability, and response time distribution"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Throughput"}),": Number of requests processed per unit time, such as requests per second (RPS) or transactions per minute (TPM)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Resource utilization"}),": CPU usage, memory usage, disk I/O, network bandwidth, and database queries per second"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Scalability"}),": Number of users, concurrent connections, or requests handled by the system without significant performance degradation"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Reliability"}),": Mean time between failures (MTBF), mean time to recover (MTTR), and error rates"]}),"\n"]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Factors that Affect Software Performance"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Hardware resources"}),": Availability, utilization, and performance of hardware components, such as CPU, memory, storage, and network interfaces"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Software architecture"}),": Design and structure of the software system, including the number of layers, components, and interactions between them"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Algorithmic complexity"}),": The time and space complexity of algorithms used in the software, which can impact response time and resource utilization"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Data size and growth"}),": The amount of data processed and stored by the system, which can affect performance as the data set grows"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"User behavior"}),": Patterns and intensity of user activity, such as the number of concurrent users, frequency of requests, and usage patterns"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Network and I/O performance"}),": Network latency, packet loss, and I/O operations can impact the system\u2019s ability to retrieve and process data"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Resource contention"}),": Competition for shared resources, such as CPU, memory, and I/O devices, which can lead to performance bottlenecks"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Interference and noise"}),": Interference from other systems or background processes, as well as random fluctuations in system performance, can affect software performance"]}),"\n"]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Methods for Measuring and Monitoring Software Performance"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Synthetic transactions"}),": Simulating user interactions to measure response time, throughput, and resource utilization"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Real-user monitoring"}),": Tracking actual user interactions to assess performance from the end-user perspective"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Load testing"}),": Testing the system under varying loads to evaluate its scalability and performance under different workloads"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Stress testing"}),": Testing the system under extreme conditions, such as high concurrency or large data sets, to identify performance bottlenecks"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"End-user experience monitoring"}),": Monitoring user experience metrics, such as page load times, error rates, and user satisfaction"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Performance modeling"}),": Creating mathematical models of the system to predict performance under different conditions and optimize system configuration"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Performance benchmarking"}),": Comparing the system\u2019s performance to industry-standard benchmarks or competing systems"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Root cause analysis"}),": Identifying the underlying causes of performance issues through techniques such as profiling, tracing, and logging"]}),"\n"]})]}),(0,i.jsxs)(a.Z,{value:"styles",label:"Architectural Styles",children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Ways to Apply Architectural Style"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Entire system"}),": defining the high-level structure and organization of the system as a whole, such as how it is divided into subsystems or modules, how they communicate with each other, and how they interact with external systems or services"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Subsystem or module"}),": defining the internal structure and organization of a subsystem or module within the system, such as how it is divided into components or classes, how they collaborate with each other, and how they expose their functionality to other subsystems or modules"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Component or class"}),": defining the internal structure and organization of a component or class within a subsystem or module, such as how it is divided into methods or functions, how they implement the logic and behavior of the component or class, and how they access data or resources"]}),"\n"]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Overview"})}),(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Architectural Style"}),(0,i.jsx)("th",{children:"Definition"}),(0,i.jsx)("th",{children:"Technical Concepts"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Asynchronous Messaging"}),(0,i.jsx)("td",{children:"Pattern where the sender and receiver of a message don't need to interact with the message queue at the same time"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Decoupling"}),": This refers to the lack of a direct connection between the sender and receiver, allowing them to operate independently"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Message Exchange Architectures"}),": These are structures designed for transferring messages between a sender and receiver"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Eventual Consistency"}),": This concept suggests that changes made to one service may potentially lead to unintended and negative consequences in other parts of the system"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Blackboard"}),(0,i.jsx)("td",{children:"Decentralized problem-solving model that uses a modular approach. It\u2019s designed to tackle complex problems that don\u2019t have a clear algorithm or pre-set architecture"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Initialization:"})," The blackboard is prepared with the initial problem statement and any available input data"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Activation:"})," Based on the current state of the problem and the data on the blackboard, the controller selects and activates one or more knowledge sources"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Execution:"})," The activated knowledge sources independently analyze the problem, apply their specialized algorithms or techniques, and produce partial solutions or hypotheses"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Conflict resolution:"})," If multiple knowledge sources generate conflicting or overlapping solutions, a conflict resolution mechanism is used to reconcile the differences and select the most appropriate solution(s)"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Update:"})," The knowledge sources update the blackboard with their outputs, such as new constraints, proposed solutions, or intermediate results"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Iteration:"})," The controller repeats the activation and execution steps until a satisfactory solution is reached, convergence criteria are met, or a predefined time limit is exceeded"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Client-Server"}),(0,i.jsx)("td",{children:"Model of interaction in a distributed system where software runs on local client devices and connects to remote server resources"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Loose coupling:"})," Clients and servers are separate entities that communicate over a network"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Horizontal scaling:"})," Servers can be added to handle increased load"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Distributed database:"})," Data can be stored across multiple servers, improving availability and performance"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Asynchronous communication:"})," Clients make requests to servers and continue processing until the server responds"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Stateless or stateful:"})," Servers can be designed to be stateless for scalability or stateful for simplicity"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Cloud Computing Patterns"}),(0,i.jsx)("td",{children:"Adapting to the many new possibilities but very different set of architectural constraints offered by the cloud compared to traditional on-premises infrastructure"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Functional requirements:"})," What the system should do"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Non-functional requirements:"})," How the system should perform"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Constraints:"})," What is out-of-scope to change"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Self-healing:"})," The system should be able to recover from failures automatically"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Cost efficient:"})," The system should make optimal use of resources to minimize costs"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Continuous Integration/Continuous Delivery (CI/CD):"})," The system should be easily updated and maintained"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Component-Based"}),(0,i.jsx)("td",{children:"Framework for building software based on reusable components. It provides a higher level of abstraction and divides the problem into sub-problems, each associated with component partitions"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Components:"})," The building blocks that are highly flexible, modular, and reused across several projects. They follow repeatable conventions and can be used across other interfaces and modules without compromising the integrity of your code or UX"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Interfaces:"})," Well-defined communication interfaces containing methods, events, and properties"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Contracts:"})," Define the functionality provided by the component and the functionality required from the system to be operational"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Component models and frameworks:"})," Define standards for component implementation, composition, and deployment"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Composition:"})," The way components are assembled to form a system"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Certification:"})," The process of verifying that a component meets its specification"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Database-Centric"}),(0,i.jsx)("td",{children:"Treats data as a valuable and versatile asset, acknowledging its role in the larger enterprise and industry ecosystem"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Centralized Data:"})," Refers to data collected and stored in one place, allowing frequent access and modification by various components"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Security, Integration, Portability, and Analysis:"})," Significantly simplified in a data-centric approach, facilitating faster insights across the entire data value chain"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Interoperability and Versatility:"})," By freeing data from a single monolithic stack, there are greater opportunities for accelerating digital transformation"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Domain-Driven Design (DDD)"}),(0,i.jsx)("td",{children:"Architecture style that focuses on modeling business domains and their logic in code"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Domain model:"})," A central, conceptual model of the business domain that guides the design of the application"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Bounded context:"})," A self-contained model representing a specific aspect of the business domain"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Ubiquitous language:"})," A shared language used across the entire development team to describe the domain model"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Event-Driven"}),(0,i.jsx)("td",{children:"Design pattern that organizes the application around the production, transformation, and consumption of events"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Event sources:"})," Services or systems that generate events"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Event processors:"})," Services or systems that consume and process events"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Event stores:"})," Systems that store events for later processing"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Layered"}),(0,i.jsx)("td",{children:"Architecture that separates the application into distinct layers, each with its own set of responsibilities"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Logical separation of components:"})," Components that are related or similar are usually placed on the same layers"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Layers of isolation:"})," Layers can be modified and the change won't affect other layers"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Separation of concerns:"})," The modules on a single layer together perform a single function"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Microkernel"}),(0,i.jsx)("td",{children:"A type of operating system kernel that is designed to provide only the most basic services required for an operating system to function"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Minimal functional core:"})," Only essential services run in kernel space, such as low-level address space management, thread management, and inter-process communication (IPC)"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"User-level processes:"})," Services like device drivers and file systems are implemented as user-level processes, communicating with the microkernel via message passing"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Modularity and flexibility:"})," The system is designed to easily add, remove, or replace services without affecting other parts of the system"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Model\u2013View\u2013Controller"}),(0,i.jsx)("td",{children:"Design pattern that separates an application into 3 interconnected components: the model, the view, and the controller"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Model:"})," The heart of the system, managing the data, logic, and rules of the application"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"View:"})," Represents any output of information"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Controller:"})," Accepts input and transforms it into commands for either the model or view"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Monolithic Application"}),(0,i.jsx)("td",{children:"Single, self-contained unit that includes all the components and functionality of the application"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Tight coupling:"})," Components are closely integrated and communicate directly with each other"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Vertical scaling:"})," The entire application is deployed and scaled as a single unit"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Shared database:"})," A single database is used to store all data for the application"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Multitier Architecture"}),(0,i.jsx)("td",{children:"Client\u2013server architecture in which presentation, application processing, and data management functions are physically separated"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"N-tier architecture:"})," Software engineering approach where processing, data management, and presentation functions are physically and logically separated"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Three-tier architecture:"})," Consists of 3 components: a presentation tier, a logic tier, and a data tier"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Layer vs Tier:"})," A layer refers to the logical structure of elements in a software solution, while a tier refers to the physical structure of hardware elements in the system infrastructure"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Object Request Broker"}),(0,i.jsx)("td",{children:"Middleware architecture used in distributed computing to coordinate and enable communication between registered servers and clients"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Language Independence:"})," CORBA is not associated with a particular programming language, and any language with a CORBA binding can be used to call and implement CORBA objects"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Interface Definition Language (IDL):"})," Objects are described in a syntax called IDL"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Object Request Broker (ORB):"})," The ORB handles communication, marshaling, and unmarshaling of parameters, making parameter handling transparent for CORBA server and client applications"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Naming Service:"})," The naming service holds references to CORBA objects"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Peer-to-Peer"}),(0,i.jsx)("td",{children:"Network architecture where each workstation, or node, has the same capabilities and responsibilities"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Decentralized:"})," Tasks are distributed among all peers, eliminating the need for a central server"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Equal Contribution:"})," Every device in the network functions as both a client and a server"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Resilience to Change:"})," The network can adapt to changes in its participants"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Elimination of Single Points of Failure:"})," The dual role of peers as both clients and servers helps avoid single points of failure, making this architecture useful for applications that require high reliability"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Resource Sharing:"})," The network allows for the sharing of resources among peers"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Pipes and Filters"}),(0,i.jsx)("td",{children:"Architectural pattern for stream processing. It consists of one or more components called filters"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Filters:"})," Components that transform or filter data, such as sorting and counting functions"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Pipes:"})," Connectors that pass data from one filter to another"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Independent Processing:"})," Filters do not share state with other filters, allowing them to work independently without needing to know the identity of their upstream or downstream filters"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Change Resilience:"})," New filters can be added to existing systems since filters are separate from each other and connected by explicit connectors"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Presentation\u2013Abstraction\u2013Control (PAC)"}),(0,i.jsx)("td",{children:"Interaction-oriented software architecture that separates an interactive system into 3 types of components"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Abstraction Component:"})," Retrieves and processes data"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Presentation Component:"})," Formats the visual and audio presentation of data"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Control Component:"})," Handles the flow of control and communication between the other two components"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Publish-Subscribe"}),(0,i.jsx)("td",{children:"Messaging system where publishers categorize messages into classes without knowing the subscribers. Subscribers, on the other hand, show interest in certain classes of messages and receive only those, without knowing the publishers"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Decoupling:"})," Publishers and subscribers are independent entities, connected only through a message queue"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Asynchronous communication:"})," Messages are exchanged without requiring immediate acknowledgement, allowing tasks to continue uninterrupted"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Scalability:"})," The system can easily accommodate new publishers and subscribers without disruption"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Fault tolerance:"})," If a message isn't processed successfully, it can be retried or moved to a separate queue for handling errors"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Reflection"}),(0,i.jsx)("td",{children:"Architectural style based on the concept of reflection, which allows a system to observe and modify its own structure and behavior"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Reification:"})," The process of making something real, bringing something into being, or making something concrete"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Structural Language:"})," A declarative language that defines an architecture\u2019s static skeleton"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Dynamic Language:"})," An imperative language that appears as a set of constraining rules written in a concurrent language"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Behavioral and structural reflection:"})," Involves agent computation and structure"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Pre-reflective architecture:"})," There exists a particular precognitive communication between an architectural work and the body, which shapes the overall (embodied) experience of an architectural setting"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Representational State Transfer (REST)"}),(0,i.jsx)("td",{children:"Architectural style that uses a subset of HTTP. It is commonly used to create interactive applications that use Web services"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Stateless:"})," Each request from client to server must contain all the information needed to understand and process the request"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Client-Server:"})," The client and server are separate entities that communicate over a network"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Cacheable:"})," Clients can cache responses to improve performance"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Layered System:"})," The architecture is composed of hierarchical layers, providing a high level of abstraction"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Uniform Interface:"})," The method of communication between the client and server is standardized"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Rule-Based"}),(0,i.jsx)("td",{children:"Architectural style where the system\u2019s behavior is dictated by a set of rules"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Rule Engine:"})," The core component that interprets and executes rules"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Rules:"})," Defined in a specific format, often IF-THEN-ELSE statements"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Fact Model:"})," The data on which rules operate"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Rulebase:"})," The storage of rules"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Inference Engine:"})," Applies the rules to the known facts to deduce new facts"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Working Memory:"})," Stores the facts the system currently knows"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Sensor\u2013Controller\u2013Actuator"}),(0,i.jsx)("td",{children:"Architectural pattern that helps with actuating in face of several input senses"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Sensing:"})," Responsible for collecting sensor data"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Planning:"})," Processes sensor data and passes information to the controller"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Execution:"})," Also known as the controller, sends actuator commands based on information received from the planner"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Sequential organization:"})," Components are organized sequentially, with sensor data passed to the planner, who then passes information to the controller, which sends actuator commands"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Service-Oriented Architecture (SOA)"}),(0,i.jsx)("td",{children:"Design pattern that organizes the application into a collection of interconnected services"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Service contracts:"})," Services communicate through well-defined interfaces"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Service discovery:"})," Services are registered and discovered at runtime"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Service composition:"})," Services are combined to form complex business processes"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Shared Nothing Architecture (SNA)"}),(0,i.jsx)("td",{children:"Distributed computing architecture that consists of multiple separated nodes that don\u2019t share resources"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Independent Nodes:"})," Each node in the system is independent and self-sufficient with its own disk space and memory"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Data Partitioning:"})," The data set/workload is split into smaller sets (nodes) distributed into different parts of the system"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"High-Speed Interconnect Network:"})," Nodes communicate and synchronize through a high-speed interconnect network"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Scalability:"})," The system supports incremental growth. New nodes can be added to scale the distributed system horizontally"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"No Shared Resources:"})," Unlike other architectures, SNA has no shared resources"]})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Space-Based Architecture (SBA)"}),(0,i.jsx)("td",{children:"Distributed-computing architecture for achieving linear scalability of stateful, high-performance applications"}),(0,i.jsx)("td",{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Tuple Space Paradigm:"})," Components interact by exchanging tuples or entries via shared spaces"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Processing Units (PUs):"})," Self-sufficient units independent of each other, encapsulating business logic and required data"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Space:"})," A distributed, shared memory data grid where all data resides and is accessible to every processing unit"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Router:"})," Routes client requests to the appropriate processing unit"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Shared Nothing System:"})," Achieves scalability by distributing both processing and storage across multiple servers"]})]})})]})]})]})]})]})}function m(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);