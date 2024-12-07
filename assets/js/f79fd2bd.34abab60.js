"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9575],{19241:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>j,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"education/tech-stack/frontend/js/framework/react/design-patterns","title":"Design Patterns","description":"React Design Patterns","source":"@site/docs/education/02-tech-stack/02-frontend/01-js/03-framework/01-react/03-design-patterns.mdx","sourceDirName":"education/02-tech-stack/02-frontend/01-js/03-framework/01-react","slug":"/education/tech-stack/frontend/js/framework/react/design-patterns","permalink":"/tech-labs/docs/education/tech-stack/frontend/js/framework/react/design-patterns","draft":false,"unlisted":false,"editUrl":"https://github.com/EliFuzz/tech-labs/docs/education/02-tech-stack/02-frontend/01-js/03-framework/01-react/03-design-patterns.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Design Patterns","description":"React Design Patterns","hide_table_of_contents":true},"sidebar":"education","previous":{"title":"State Management","permalink":"/tech-labs/docs/education/tech-stack/frontend/js/framework/react/state-management"},"next":{"title":"GraphQL","permalink":"/tech-labs/docs/category/graphql"}}');var r=i(86070),t=i(15658),l=i(52421),c=i(74610);const d={title:"Design Patterns",description:"React Design Patterns",hide_table_of_contents:!0},a=void 0,o={},h=[];function x(e){const n={code:"code",p:"p",...(0,t.R)(),...e.components};return(0,r.jsx)(l.A,{queryString:"primary",children:(0,r.jsx)(c.A,{value:"overview",label:"Overview",children:(0,r.jsxs)(l.A,{queryString:"secondary",children:[(0,r.jsx)(c.A,{value:"component",label:"Component",attributes:{className:"tabs__vertical"},children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Design Pattern"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Use Cases"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Functional Components"})}),(0,r.jsx)("td",{children:"Simplify components by using functions instead of classes"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"simple UI elements without complex logic"}),(0,r.jsx)("li",{children:"stateless or UI-only components (like buttons, labels)"}),(0,r.jsx)("li",{children:"rendering small reusable parts of the UI"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Higher-Order Components (HOC)"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Functions that take a component and return an enhanced component with additional\nfunctionality"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"logging"}),(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"enhancing existing components with additional functionality (e.g., authentication\nchecks)"})}),(0,r.jsx)("li",{children:"sharing logic between components (e.g., logging, analytics)"}),(0,r.jsx)("li",{children:"extending component functionality without modifying the component directly"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Render Props"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Components with a function as a prop that allows dynamic content rendering based on the\nfunction's\noutput"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"sharing stateful logic, such as managing data-fetching"}),(0,r.jsx)("li",{children:"toggle or switch functionality (e.g., showing/hiding elements)"}),(0,r.jsx)("li",{children:"reusing animation logic across components"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Controlled and Uncontrolled Components"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Controlled components are fully managed by React state and are preferable for predictable\nbehavior,\nwhile uncontrolled components maintain their own state"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"form inputs where fine control over input values is needed (Controlled)"}),(0,r.jsx)("li",{children:"simple, self-contained forms with minimal logic requirements (Uncontrolled)"}),(0,r.jsx)("li",{children:"cases where validation needs vary based on input type or conditions"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Container and Presentational Components"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:'Separates "smart" (container) components, which manage state and business logic, from "dumb"\n(presentational) components, which focus on rendering UI'})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"large applications where separation of UI and logic is beneficial"}),(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"apps using state management (e.g., Redux) or context, where logic and display need\ndecoupling"})}),(0,r.jsx)("li",{children:"optimizing re-rendering by isolating presentation logic from data handling"})]})})]})]})]})}),(0,r.jsx)(c.A,{value:"state-management",label:"State Management",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Design Pattern"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Use Cases"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Lifting State Up"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"When several components need to share data, the state can be lifted to their closest common\nancestor\nand passed as props to maintain a single source of truth"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"sharing state between sibling components"}),(0,r.jsx)("li",{children:"reducing redundant state variables in different components"}),(0,r.jsx)("li",{children:"managing form data across related inputs"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Context API"})}),(0,r.jsx)("td",{children:"Allows state to be shared across components without prop drilling"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"providing global configuration or theme to multiple components"}),(0,r.jsx)("li",{children:"sharing user authentication status or locale settings"}),(0,r.jsx)("li",{children:"avoiding prop drilling in deeply nested component structures"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"State Colocation"})}),(0,r.jsx)("td",{children:"Keeps the state as close to where it is needed as possible"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"keeping state close to where it's used (e.g., within a component)"}),(0,r.jsx)("li",{children:"reducing unnecessary re-renders by managing state scope"}),(0,r.jsx)("li",{children:"improving component reusability by limiting state exposure"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"State Reducers"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Useful for managing complex state logic, often in conjunction with hooks like useReducer to\nhandle\nvarious state transitions in a centralized way"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"managing complex state logic (e.g., form handling, wizards)"}),(0,r.jsx)("li",{children:"containing state transitions in one location for predictable updates"}),(0,r.jsx)("li",{children:"reducing repetitive state update functions in larger components"})]})})]})]})]})}),(0,r.jsx)(c.A,{value:"hooks",label:"Hooks",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Design Pattern"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Use Cases"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Custom Hooks"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Encapsulate reusable stateful logic into functions that can be shared across multiple\ncomponents"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"reusing common logic (e.g., data fetching, form handling)"}),(0,r.jsx)("li",{children:"simplifying complex components by extracting logic"}),(0,r.jsx)("li",{children:"managing shared logic across multiple components"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"UseEffect"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"React Hook for managing side effects in functional components, such as data fetching or\nsubscriptions. It runs after rendering and can be controlled with a dependency array to\ndetermine\nwhen it should re-run. A cleanup function can be returned to handle cleanup tasks before the\ncomponent unmounts or before the effect re-runs"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"executing code on component mount (e.g., API calls)"}),(0,r.jsx)("li",{children:"cleaning up resources (e.g., removing event listeners)"}),(0,r.jsx)("li",{children:"syncing state with external dependencies"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"UseMemo and UseCallback"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Optimize performance by memoizing expensive calculations (",(0,r.jsx)(n.code,{children:"useMemo"}),") or functions\n(",(0,r.jsx)(n.code,{children:"useCallback"}),") to\nprevent unnecessary re-renders"]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"optimizing performance for expensive calculations"}),(0,r.jsx)("li",{children:"avoiding unnecessary re-renders for stable functions"}),(0,r.jsx)("li",{children:"preventing child component re-renders in complex UIs"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"UseImperativeHandle"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Provides a way for functional components to expose imperative methods to parent components,\noften\nused with ",(0,r.jsx)(n.code,{children:"forwardRef"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"exposing component functions to parent components"}),(0,r.jsx)("li",{children:"managing custom focus control for input fields"}),(0,r.jsx)("li",{children:"controlling animation or scroll actions externally"})]})})]})]})]})}),(0,r.jsx)(c.A,{value:"code-organization",label:"Code Organization",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Design Pattern"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Use Cases"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Folder Structure"})}),(0,r.jsx)("td",{children:"Organizes files and directories for better readability and scalability"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["organizing code by features, domains, or types (e.g., ",(0,r.jsx)(n.code,{children:"components"}),", ",(0,r.jsx)(n.code,{children:"hooks"}),")"]}),(0,r.jsx)("li",{children:"improving project scalability and team collaboration"}),(0,r.jsx)("li",{children:"enhancing maintainability for large-scale applications"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Extensible Styles"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Modularizes styling in CSS (CSS-in-JS), allowing styles to be scoped to individual\ncomponents"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"creating scoped styles to avoid CSS conflicts"}),(0,r.jsx)("li",{children:"applying dynamic styling in JavaScript (e.g., theme-based)"}),(0,r.jsx)("li",{children:"sharing component-specific styles in a modular fashion"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Centralized Prop Types"})}),(0,r.jsx)("td",{children:"Defines prop types for reusable components in a single location"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"improving type safety and readability of component props"}),(0,r.jsx)("li",{children:"ensuring consistent prop validation across the app"}),(0,r.jsx)("li",{children:"reducing errors from inconsistent prop usage"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Service Layers"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Creates a service layer for API calls, caching, or other external resources to keep\ncomponents\nfocused on UI rendering"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"centralizing API requests and data handling logic"}),(0,r.jsx)("li",{children:"encapsulating external service interactions for consistency"}),(0,r.jsx)("li",{children:"separating business logic from UI components"})]})})]})]})]})}),(0,r.jsx)(c.A,{value:"data-fetching",label:"Data Fetching",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Design Pattern"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Use Cases"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Fetching on Render"})}),(0,r.jsxs)("td",{children:["Triggers data fetching when a component mounts, using hooks like ",(0,r.jsx)(n.code,{children:"useEffect"})]}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"basic data loading when the component mounts"}),(0,r.jsx)("li",{children:"retrieving initial data for page rendering"}),(0,r.jsx)("li",{children:"simplifying logic for components that don't need caching"}),(0,r.jsx)("li",{children:"static or infrequently data changes"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Fetching on Interaction"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Triggers data fetching based on user interactions (e.g., clicking a button) to optimize\nperformance"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"loading data only when the user initiates (e.g., button click)"}),(0,r.jsx)("li",{children:"reducing initial load time by delaying fetches"}),(0,r.jsx)("li",{children:"triggering data fetch on specific user actions (e.g., load more)"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Data Fetching with Suspense"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Uses React Suspense to manage async data fetching with loading states in a declarative way"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"handling loading and error states with minimal code"}),(0,r.jsx)("li",{children:"simplifying asynchronous data handling"}),(0,r.jsx)("li",{children:"optimizing loading experience with React Suspense features"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Infinite Scrolling / Pagination"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Used for loading data progressively, enhancing performance and user experience with lazy\nloading\npatterns"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"displaying large datasets efficiently"}),(0,r.jsx)("li",{children:"improving UX for continuous data loading"}),(0,r.jsx)("li",{children:"enabling smooth scrolling or pagination for long lists"})]})})]})]})]})}),(0,r.jsx)(c.A,{value:"error-handling",label:"Error Handling",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Design Pattern"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Use Cases"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Error Boundaries"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Components that catch JavaScript errors in their child component tree and display a fallback\nUI"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"global error handling"}),(0,r.jsx)("li",{children:"prevents the entire app from crashing"}),(0,r.jsx)("li",{children:"providing fallback UI for failed component rendering"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Try/Catch with Async Functions"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Used to handle errors in async data fetching functions, often paired with user notifications\nfor\nbetter error management"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"handling errors during asynchronous operations (e.g., API calls)"}),(0,r.jsx)("li",{children:"avoiding unhandled promise rejections"}),(0,r.jsx)("li",{children:"logging or displaying error messages for async failures"})]})})]})]})]})}),(0,r.jsx)(c.A,{value:"performance-optimization",label:"Performance Optimization",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Design Pattern"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Use Cases"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Lazy Loading and Code Splitting"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Loads only the required modules at a time, often using ",(0,r.jsx)(n.code,{children:"React.lazy"})," and ",(0,r.jsx)(n.code,{children:"Suspense"})," to delay\ncomponent loading until needed"]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"loading components only when needed (e.g., dynamic imports)"}),(0,r.jsx)("li",{children:"reducing initial page load times for faster interaction"}),(0,r.jsx)("li",{children:"enhancing performance by splitting large bundles"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Virtualization"})}),(0,r.jsx)("td",{children:"Renders only visible items in a large list, improving performance for large data sets"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"rendering only visible items in long lists"}),(0,r.jsx)("li",{children:"reducing DOM elements to improve performance"}),(0,r.jsx)("li",{children:"efficiently handling large datasets in list or table views"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Memoization"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Optimizes components with ",(0,r.jsx)(n.code,{children:"React.memo"})," or ",(0,r.jsx)(n.code,{children:"useMemo"})," to avoid re-rendering when props or\nstate\nhaven\u2019t changed"]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"caching expensive calculations or API results"}),(0,r.jsx)("li",{children:"reducing unnecessary re-renders by using stable values"}),(0,r.jsx)("li",{children:"improving performance for complex computations in real time"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Throttling and Debouncing"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Controls the rate at which functions like API calls are executed, reducing unnecessary\nre-renders or\ndata fetching"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"limiting function executions in rapid interactions (e.g., resize)"}),(0,r.jsx)("li",{children:"improving input performance by delaying actions"}),(0,r.jsx)("li",{children:"optimizing resource usage in frequent events (e.g., scroll)"})]})})]})]})]})}),(0,r.jsx)(c.A,{value:"routing",label:"Routing",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Design Pattern"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Use Cases"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Nested Routing"})}),(0,r.jsx)("td",{children:"Creates a hierarchy of routes, allowing sub-routes to be rendered inside parent routes"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"defining routes that need hierarchical structure"}),(0,r.jsx)("li",{children:"managing parent-child relationships in route paths"}),(0,r.jsx)("li",{children:"building layouts where pages have nested views"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Dynamic Routing"})}),(0,r.jsx)("td",{children:"Allows routes to change based on state or data"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"loading routes based on dynamic parameters (e.g., user ID)"}),(0,r.jsx)("li",{children:"creating flexible route structures for user-generated content"}),(0,r.jsx)("li",{children:"user-specific or resource-specific routes"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Protected Routes"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Guards routes that require authentication, often wrapping them with an authentication check\ncomponent"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"restricting access to authenticated users only"}),(0,r.jsx)("li",{children:"redirecting unauthenticated users to login pages"}),(0,r.jsx)("li",{children:"securing sensitive pages with conditional access"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Lazy Loading Routes"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Delays loading of route-based components until they\u2019re needed, improving load times and\nreducing\ninitial bundle size"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"loading routes only when they're accessed"}),(0,r.jsx)("li",{children:"reducing initial app bundle size"}),(0,r.jsx)("li",{children:"optimizing route handling for large applications"})]})})]})]})]})}),(0,r.jsx)(c.A,{value:"miscellaneous",label:"Miscellaneous",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Design Pattern"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Use Cases"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Portals"})}),(0,r.jsx)("td",{children:"Renders components outside of the main React tree"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"rendering modals, tooltips, or dropdowns outside the parent DOM"}),(0,r.jsx)("li",{children:"managing z-index and overlay issues"}),(0,r.jsx)("li",{children:"ensuring elements appear above the rest of the UI"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Compound Components"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Creates a group of components that work together, like ",(0,r.jsx)(n.code,{children:"<Tabs/>"})," and ",(0,r.jsx)(n.code,{children:"<Tab/>"}),", where the\nparent\ncomponent manages the state of its children"]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"creating components with flexible subcomponents (e.g., tabs)"}),(0,r.jsx)("li",{children:"enabling users to customize the structure within the main component"}),(0,r.jsx)("li",{children:"providing a consistent API for complex component patterns"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Configuration-Driven UI"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Allows components to be rendered based on configuration objects, making UI structure\nflexible and\ncustomizable"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"building UI based on JSON or configuration files"}),(0,r.jsx)("li",{children:"creating reusable and customizable forms or tables"}),(0,r.jsx)("li",{children:"separating UI structure from hardcoded layouts"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Facade"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Provides a simplified interface to complex logic, often wrapping multiple hooks or\ncomponents for\nsimplified usage"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"simplifying complex functionality with a single interface"}),(0,r.jsx)("li",{children:"abstracting library methods into app-specific functions"}),(0,r.jsx)("li",{children:"managing third-party service integrations efficiently"})]})})]})]})]})})]})})})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);