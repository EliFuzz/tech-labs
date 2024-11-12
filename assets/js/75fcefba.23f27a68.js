"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8952],{41068:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"education/programming-languages/frontend/js/framework/react/state-management","title":"State Management","description":"State Management","source":"@site/docs/education/02-programming-languages/02-frontend/01-js/03-framework/01-react/02-state-management.mdx","sourceDirName":"education/02-programming-languages/02-frontend/01-js/03-framework/01-react","slug":"/education/programming-languages/frontend/js/framework/react/state-management","permalink":"/tech-labs/docs/education/programming-languages/frontend/js/framework/react/state-management","draft":false,"unlisted":false,"editUrl":"https://github.com/EliFuzz/tech-labs/docs/education/02-programming-languages/02-frontend/01-js/03-framework/01-react/02-state-management.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"State Management","description":"State Management","hide_table_of_contents":true},"sidebar":"education","previous":{"title":"Basics","permalink":"/tech-labs/docs/education/programming-languages/frontend/js/framework/react/"},"next":{"title":"Backend","permalink":"/tech-labs/docs/category/backend"}}');var r=a(86070),s=a(15658),o=a(33407),d=a(33903);const i={title:"State Management",description:"State Management",hide_table_of_contents:!0},c=void 0,l={},u=[{value:"Redux",id:"redux",level:2}];function m(e){const n={h2:"h2",mermaid:"mermaid",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"redux",children:"Redux"}),"\n",(0,r.jsx)(o.A,{queryParam:"primary",children:(0,r.jsx)(d.A,{value:"overview",label:"Overview",children:(0,r.jsx)(n.mermaid,{value:"graph TB\n\nsubgraph Store[Redux: Store]\ndirection TB\n\ndispatcher(Dispatcher)\ndispatcher --\x3e|send| reducer(Reducer)\nreducer --\x3e|new state| state(State)\nstate --\x3e|previous state| reducer\nstate --\x3e|exposed by| selector(Selector)\nend\n\nsubgraph Linker[Linker: connects react & redux]\ndirection TB\n\ncontainer(Container) --\x3e|updates| mapToStore(Map Store to Props)\nend\n\nsubgraph Middleware\ndirection TB\n\nreduxSaga(redux-saga)\nend\n\nsubgraph Saga[Saga Middleware]\ndirection TB\n\nstandardChannel(Standard Channel)\nstandardChannel ~~~|executes or queues a task depending on the state of the scheduler| standardChannel\nstandardChannel --\x3e|new task<br/>take / takeEvery / takeLatest| watcher(Watcher)\nwatcher --\x3e|iterators #40;next#41;| watcher\nwatcher --\x3e|call / apply| worker(Worker)\nworker --\x3e|iterators #40;next#41;<br/>call / apply / fork / cancel / spawn / join| worker\nend\n\nsubgraph View [React: View / UI]\ndirection TB\n\nprops(Props) --\x3e|re-renders| template(Template with React Components)\nend\n\nmapToStore --\x3e|map| props\n\nworker --\x3e|request| api(REST API)\nworker --\x3e|put / select / take| reduxSaga\n\ncontainer --\x3e|trigger| action(Action)\naction --\x3e|dispatch| Middleware\nMiddleware --\x3e|send| dispatcher\nselector --\x3e|used by| container\ntemplate --\x3e|event| container\n\nreduxSaga --\x3e|register dispatch action| standardChannel\n"})})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);