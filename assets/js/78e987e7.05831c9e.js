"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[126],{65030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var s=n(11527),r=n(88672),a=n(29140),i=n(52360);const c={title:"Gangs of Four (GoF)",description:"Gangs of Four (GoF) Design Patterns",hide_table_of_contents:!0},o="Gangs of Four (GoF) Design Patterns",l={id:"education/design-patterns/gof",title:"Gangs of Four (GoF)",description:"Gangs of Four (GoF) Design Patterns",source:"@site/docs/education/03-design-patterns/02-gof.mdx",sourceDirName:"education/03-design-patterns",slug:"/education/design-patterns/gof",permalink:"/docs/education/design-patterns/gof",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/03-design-patterns/02-gof.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Gangs of Four (GoF)",description:"Gangs of Four (GoF) Design Patterns",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Definition",permalink:"/docs/education/design-patterns/definition"},next:{title:"Enterprise",permalink:"/docs/education/design-patterns/enterprise"}},d={},h=[{value:"Overview",id:"overview",level:2}];function m(e){const t={h1:"h1",h2:"h2",mermaid:"mermaid",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"gangs-of-four-gof-design-patterns",children:"Gangs of Four (GoF) Design Patterns"}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsxs)(i.Z,{value:"creational",label:"Creational",children:[(0,s.jsx)(t.p,{children:"Deal with object creation mechanisms, trying to create objects in a manner\nsuitable to the situation. These patterns help in making a system\nindependent of how its objects are created, composed, and represented."}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{style:{minWidth:"440px"},children:"Visualization"}),(0,s.jsx)("th",{children:"Definition"}),(0,s.jsx)("th",{children:"Example"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Singleton"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\nclass Singleton {\n-static instance: Singleton\n- constructor()\n+ static getInstance() Singleton\n}"})}),(0,s.jsx)("td",{children:"ensures a class has only one instance and provides a global point of access to it"}),(0,s.jsx)("td",{children:"database connection manager in a web application"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Factory"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass Creator {\n+factoryMethod(): Product\n}\n\nclass ConcreteCreator {\n+factoryMethod(): Product\n\n}\n\nConcreteCreator ..|> Creator : implements\nConcreteCreator ..> Product : depends on\nConcreteProduct ..|> ProductInterface: implements"})}),(0,s.jsx)("td",{children:"interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created"}),(0,s.jsx)("td",{children:"different factories produce different types of vehicles (car, truck)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Abstract Factory"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass AbstractFactoryInterface {\n+createProductA(): AbstractProduct\n+createProductB(): AbstractProduct\n}\nclass ConcreteFactory {\n+createProductA(): ConcreteProduct\n+createProductB(): ConcreteProduct\n}\n\nClient --\x3e AbstractFactoryInterface : create\nClient --\x3e AbstractProduct : use\nConcreteProduct ..|> AbstractProduct : implements\nConcreteFactory ..|> AbstractFactoryInterface : implements"})}),(0,s.jsx)("td",{children:"interface for creating families of related or dependent objects without specifying their concrete classes"}),(0,s.jsx)("td",{children:"GUI toolkit providing different look and feel for different operating systems"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Builder"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection BT\nclass Director {\n+construct(builder: BuilderInterface)\n}\nclass BuilderInterface {\n+buildPart()\n}\nclass ConcreteBuilder {\n  +buildPart()\n  + getResult()\n}\n\nConcreteBuilder ..|> BuilderInterface : implements\nBuilderInterface ..* Director : has-a"})}),(0,s.jsx)("td",{children:"separates the construction of a complex object from its representation, allowing the same construction process to create various representations"}),(0,s.jsx)("td",{children:"construction of complex objects like HTML documents"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Prototype"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass PrototypeInterface {\n+clone(): PrototypeInterface\n}\nclass ConcretePrototype {\n+clone(): PrototypeInterface\n}\nClient --\x3e PrototypeInterface : use\nConcretePrototype ..|> PrototypeInterface : implements"})}),(0,s.jsx)("td",{children:"specifies the kinds of objects to create using a prototypical instance, and creates new objects by copying this prototype"}),(0,s.jsx)("td",{children:"creating multiple instances of a document (cloning objects) with different content but similar structure"})]})]})]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Factory vs Abstract Factory"})}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Aspect"}),(0,s.jsx)("th",{children:"Factory Method"}),(0,s.jsx)("th",{children:"Abstract Factory"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Product Type"})}),(0,s.jsx)("td",{children:"creates one product only"}),(0,s.jsx)("td",{children:"creates families of related or dependent products"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Exposure"})}),(0,s.jsx)("td",{children:"exposes a method to create the object"}),(0,s.jsx)("td",{children:"exposes a family of related objects"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Construction Hiding"})}),(0,s.jsx)("td",{children:"hides the construction of a single object"}),(0,s.jsx)("td",{children:"hides the construction of a family of related objects. Abstract factories are usually implemented using (a set of) factory methods"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Creation Responsibility"})}),(0,s.jsx)("td",{children:"uses inheritance and relies on a derived class or subclass to create an object"}),(0,s.jsx)("td",{children:"uses composition to delegate the responsibility of creating an object to another class"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Ideal Usage"})}),(0,s.jsx)("td",{children:"best for cases where the client doesn't know what concrete classes it will be required to create at runtime"}),(0,s.jsx)("td",{children:"best utilized when your system has to create multiple families of products or you want to provide a library of products without exposing the implementation details"})]})]})]})]}),(0,s.jsxs)(i.Z,{value:"structural",label:"Structural",children:[(0,s.jsx)(t.p,{children:"Focus on organizing different classes and objects to form larger structures\nand provide new functionality. They help ensure that if one part of a system\nchanges, the entire system doesn't need to do so. These patterns generally\nidentify simple ways to realize relationships between entities."}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{style:{minWidth:"350px"},children:"Visualization"}),(0,s.jsx)("th",{children:"Definition"}),(0,s.jsx)("th",{children:"Example"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Adapter"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass AdapterInterface {\n+operation()\n}\nclass ConcreteAdapter {\n-adaptee: Adaptee\n+operation()\n}\nclass Adaptee {\n+adaptedOperation()\n}\n\nClient --\x3e AdapterInterface : uses\nConcreteAdapter ..|> AdapterInterface : implements\nConcreteAdapter --\x3e Adaptee : uses"})}),(0,s.jsx)("td",{children:"allows objects with incompatible interfaces to collaborate"}),(0,s.jsx)("td",{children:"adapting an old version of an API to a new version"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Bridge"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass Abstraction{\n+operation()\n}\nclass BridgeInterface{\n+operationImpl()\n}\nclass ConcreteA {\n+operationImpl()\n}\nclass ConcreteB {\n+operationImpl()\n}\n\nConcreteA ..|> BridgeInterface : implements\nConcreteB ..|> BridgeInterface : implements\nBridgeInterface ..* Abstraction : has-a"})}),(0,s.jsx)("td",{children:"decouples an abstraction from its implementation so that the two can vary independently"}),(0,s.jsx)("td",{children:"Different rendering engines (DirectX, OpenGL) for graphical shapes in a drawing application"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Composite"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass ComponentInterface {\n+operation()\n}\nclass Leaf {\n+operation()\n}\nclass Composite {\n-children: Component[]\n+ operation()\n+ add(component: Component)\n+ remove(component: Component)\n+ getChild(index: number): Component\n}\n\nLeaf ..|> ComponentInterface : implements\nComposite ..|> ComponentInterface : implements\nComponentInterface ..* Composite : has-a (children)"})}),(0,s.jsx)("td",{children:"composes objects into tree structures to represent part-whole hierarchies"}),(0,s.jsx)("td",{children:"representing a hierarchy of files and directories in a file system"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Decorator"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass ComponentInterface {\n+operation()\n}\nclass ConcreteComponent {\n+operation()\n}\nclass Decorator {\n-component: ComponentInterface\n+ operation()\n}\nclass ConcreteDecorator {\n  +operation()\n  + addedBehavior()\n}\nConcreteComponent ..|> ComponentInterface : implements\nDecorator ..|> ComponentInterface : implements\nConcreteDecorator --|> Decorator : extends\nConcreteComponent --* Decorator : has-a"})}),(0,s.jsx)("td",{children:"attaches additional responsibilities to an object dynamically, providing a flexible alternative to subclassing"}),(0,s.jsx)("td",{children:"adding additional features to a text editor, such as spell checking or formatting"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Facade"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass Facade {\n-subsystem1: Subsystem1\n-subsystem2: Subsystem2\n-subsystem3: Subsystem3\n+ operation()\n}\nnamespace ComplexSystem {\nclass Subsystem1 {\n+\n\n  operation1()\n}\nclass Subsystem2 {\n+ operation2()\n}\nclass Subsystem3 {\n+ operation3()\n}\n}\n\nFacade --\x3e Subsystem1 : uses\nFacade --\x3e Subsystem2 : uses\nFacade --\x3e Subsystem3 : uses"})}),(0,s.jsx)("td",{children:"provides a simplified interface to a complex system of classes, libraries, or frameworks"}),(0,s.jsx)("td",{children:"providing a simplified interface to a complex subsystem like a software library"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Flyweight"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass FlyweightFactory {\n-flyweights: Map[Key, FlyweightInterface]\n+ getFlyweight(key: Key): FlyweightInterface\n}\nclass FlyweightInterface {\n+operation()\n}\nclass ConcreteFlyweight {\n  -state\n  + operation()\n}\nclass UnsharedConcreteFlyweight {\n  -allState\n  + operation()\n}\nFlyweightInterface --* FlyweightFactory : has-a\nConcreteFlyweight ..|> FlyweightInterface : implements\nUnsharedConcreteFlyweight..|> FlyweightInterface : implements\nClient --\x3e FlyweightFactory : creates\nClient --\x3e ConcreteFlyweight : uses\nClient --\x3e UnsharedConcreteFlyweight : uses"})}),(0,s.jsx)("td",{children:"shares common state among multiple objects, effectively reducing memory consumption"}),(0,s.jsx)("td",{children:"text editing software where frequently used characters (space, period) are stored as flyweight objects to save memory"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Proxy"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass SubjectInterface {\n+request()\n}\nclass RealSubject {\n+request()\n}\nclass Proxy {\n+request()\n}\nRealSubject ..|> SubjectInterface : implements\nProxy ..|> SubjectInterface : implements\nProxy --\x3e RealSubject : represents"})}),(0,s.jsx)("td",{children:"provides a surrogate or placeholder for another object to control access to it"}),(0,s.jsx)("td",{children:"proxy server that acts as an intermediary between clients and a web server, handling requests and caching responses"})]})]})]})]}),(0,s.jsxs)(i.Z,{value:"behavioral",label:"Behavioral",children:[(0,s.jsx)(t.p,{children:"Concentrate on algorithms and the assignment of responsibilities between\nobjects. They describe not just patterns of objects or classes but also the\npatterns of communication between them. These patterns help in defining how\nobjects interact and communicate with each other."}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{style:{minWidth:"350px"},children:"Visualization"}),(0,s.jsx)("th",{children:"Definition"}),(0,s.jsx)("th",{children:"Example"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Chain of Responsibility"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass HandlerInterface {\n-successor: HandlerInterface\n+ handleRequest(request: Request)\n}\nclass HandlerA {\n+handleRequest(request: Request)\n}\nclass HandlerB {\n+handleRequest(request: Request)\n}\nHandlerA ..|> HandlerInterface : implements\nHandlerB ..|> HandlerInterface : implements"})}),(0,s.jsx)("td",{children:"passes requests along a chain of handlers, allowing multiple objects to handle a request without the sender needing to know which object will ultimately process it"}),(0,s.jsx)("td",{children:"handling support tickets in a customer service system where tickets are passed down a chain of support agents until one can handle it"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Command"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass CommandInterface {\n+execute()\n}\nclass ConcreteCommand {\n-receiver: Receiver\n+ execute()\n}\nclass Receiver {\n+action()\n}\nclass Invoker {\n-command: CommandInterface\n+ executeCommand()\n}\nConcreteCommand ..|> CommandInterface : implements\nInvoker --\x3e CommandInterface : uses\nClient --\x3e Invoker : uses\nClient --\x3e Receiver : uses\nClient ..> CommandInterface : depends on"})}),(0,s.jsx)("td",{children:"encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations"}),(0,s.jsx)("td",{children:"undo and redo operations in a text editor"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Interpreter"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass ExpressionInterface {\n+interpret(context: Context)\n}\nclass Expression1 {\n+interpret(context: Context)\n}\nclass Expression2 {\n+interpret(context: Context)\n}\n\nClient --\x3e Context : uses\nClient --\x3e ExpressionInterface : uses\nExpression1..> ExpressionInterface : implements\nExpression2..> ExpressionInterface : implements\nExpression2 --o ExpressionInterface : uses"})}),(0,s.jsx)("td",{children:"defines a grammatical representation for a language and provides an interpreter to interpret sentences in the language"}),(0,s.jsx)("td",{children:"implementing a query language interpreter for a database system to parse and execute user queries"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Iterator"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass IteratorInterface {\n+next(): Context\n}\nclass ConcreteIterator {\n+next(): Context\n}\nclass AggregateInterface {\n+createIterator(): Context\n}\nclass ConcreteAggregate {\n+createIterator(): Context\n}\n\nConcreteIterator --|> IteratorInterface : implements\nConcreteAggregate --|> AggregateInterface : implements\nClient --\x3e AggregateInterface : uses\nClient --\x3e IteratorInterface : uses"})}),(0,s.jsx)("td",{children:"provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation"}),(0,s.jsx)("td",{children:"iterating through a collection of objects in a database system"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Mediator"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass ColleagueInterface {\n+send()\n}\nclass ColleagueA {\n+send()\n}\nclass ColleagueB {\n+send()\n}\nclass Mediator {\n+notify(sender: ColleagueInterface)\n}\nclass ConcreteMediator {\n+notify(sender: ColleagueInterface)\n}\n\nColleagueInterface --\x3e Mediator : informs\nConcreteMediator --|> Mediator : inherits\nConcreteMediator --\x3e ColleagueA : notifies\nConcreteMediator --\x3e ColleagueB : notifies\nColleagueA ..|> ColleagueInterface : implements\nColleagueB ..|> ColleagueInterface : implements"})}),(0,s.jsx)("td",{children:"defines an object that encapsulates how a set of objects interact, promoting loose coupling by keeping objects from referring to each other explicitly"}),(0,s.jsx)("td",{children:"chat application where users communicate through a central chat room (mediator) rather than directly with each other"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Memento"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass Caretaker {\n-memento: Memento\n}\nclass Memento {\n-state\n}\nclass Originator {\n  -state\n  - memento: Memento\n+ createMemento(): Memento\n}\nOriginator ..> Memento : creates\nMemento --* Caretaker : holds"})}),(0,s.jsx)("td",{children:"captures and externalizes an object's internal state so that the object can be restored to this state later"}),(0,s.jsx)("td",{children:"saving and restoring the state of a text editor (cursor position, selected text) to implement undo/redo functionality"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Observer"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass SubjectInterface {\n+attach(observer: ObserverInterface)\n+ detach(observer: ObserverInterface)\n+ notify()\n}\nclass ConcreteSubject {\n+attach(observer: ObserverInterface)\n+ detach(observer: ObserverInterface)\n+ notify()\n}\nclass ObserverInterface {\n+update()\n}\nclass ConcreteObserver {\n+update()\n}\n\nConcreteSubject ..|> SubjectInterface : implements\nConcreteObserver ..|> ObserverInterface : implements\nSubjectInterface --\x3e ObserverInterface : notifies\nConcreteObserver --\x3e ConcreteSubject : observes"})}),(0,s.jsx)("td",{children:"defines a one-to-many dependency between objects, so that when one object changes state, all its dependents are notified and updated automatically"}),(0,s.jsx)("td",{children:"updating the GUI when the contents of a text editor change"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"State"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass StateInterface {\n+handle(context: Context)\n}\nclass Context {\n-state: StateInterface\n+ request()\n}\nclass StateA {\n+handle(context: Context)\n}\nclass StateB {\n+handle(context: Context)\n}\n\nStateInterface ..* Context : has-a\nStateA ..> StateInterface : implements\nStateB ..> StateInterface : implements"})}),(0,s.jsx)("td",{children:"allows an object to alter its behavior when its internal state changes, encapsulating state-specific behavior into separate objects"}),(0,s.jsx)("td",{children:"switching between different views of a text editor (normal, bold, italic). Deals with what (state or type) an object is (in). It encapsulates state-dependent behavior"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Strategy"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass Context {\n-strategy: StrategyInterface\n+ executeStrategy()\n}\nclass StrategyInterface {\n+execute()\n}\nclass StrategyA {\n+execute()\n}\nclass StrategyB {\n+execute()\n}\n\nStrategyInterface ..* Context : has-a\nStrategyA ..|> StrategyInterface : implements\nStrategyB ..|> StrategyInterface : implements"})}),(0,s.jsx)("td",{children:"defines a family of algorithms, encapsulates each one, and makes them interchangeable, allowing the algorithm to vary independently from clients that use it"}),(0,s.jsx)("td",{children:"switching between different sorting algorithms (quicksort, mergesort, heapsort). Deals with how an object performs a certain task. It encapsulates an algorithm"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Template Method"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass AbstractClass {\n+templateMethod()\n# subMethod()\n}\nclass ConcreteClass {\n# subMethod()\n}\n\nConcreteClass --|> AbstractClass : extends"})}),(0,s.jsx)("td",{children:"defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure"}),(0,s.jsx)("td",{children:"creating a new type of text editor (text editor with spell checking)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Visitor"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.mermaid,{value:"classDiagram\ndirection TB\nclass VisitorInterface {\n+visitElementA(element: ElementA)\n+ visitElementB(element: ElementB)\n}\nclass ConcreteVisitor {\n+visitElementA(element: ElementA)\n+ visitElementB(element: ElementB)\n}\nclass ElementInterface {\n+accept(visitor: VisitorInterface)\n}\nclass ElementA {\n+accept(visitor: VisitorInterface)\n}\nclass ElementB {\n+accept(visitor: VisitorInterface)\n}\n\nClient --\x3e VisitorInterface : uses\nClient --\x3e ElementInterface : uses\nConcreteVisitor ..|> VisitorInterface : implements\nElementA..|> ElementInterface : implements\nElementB..|> ElementInterface : implements"})}),(0,s.jsx)("td",{children:"represents an operation to be performed on elements of an object structure, decoupling the algorithm from the object structure"}),(0,s.jsx)("td",{children:"compiler that traverses an abstract syntax tree representing code and performs different operations (type checking, code generation) based on the node being visited"})]})]})]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"State vs Strategy"})}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Aspect"}),(0,s.jsx)("th",{children:"State"}),(0,s.jsx)("th",{children:"Strategy"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Storage of Context Object Reference"})}),(0,s.jsx)("td",{children:"store a reference to the context object that contains them"}),(0,s.jsx)("td",{children:"do not store"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Replacement Ability"})}),(0,s.jsx)("td",{children:"are allowed to replace themselves, changing the state of the context object"}),(0,s.jsx)("td",{children:"cannot replace themselves or change the state of the context object"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Creation"})}),(0,s.jsx)("td",{children:"created by the context object itself"}),(0,s.jsx)("td",{children:"passed to the context object as parameters"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Responsibility"})}),(0,s.jsx)("td",{children:"provide the underlying implementation for most actions of the context object"}),(0,s.jsx)("td",{children:"handle specific tasks but do not dictate the behavior of the context object"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Focus"})}),(0,s.jsxs)("td",{children:["deals with ",(0,s.jsx)("b",{children:"what"})," (state or type) an object is (in). It encapsulates state-dependent behavior"]}),(0,s.jsxs)("td",{children:["deals with ",(0,s.jsx)("b",{children:"how"})," an object performs a certain task. It encapsulates an algorithm"]})]})]})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);