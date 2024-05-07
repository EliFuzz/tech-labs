"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8401],{4192:(e,t,s)=>{s.d(t,{A:()=>v});s(30758);var n=s(13526),a=s(49758),i=s(65719),l=s(49148),o=s(85565),r=s(8019),c=s(11386),d=s(86070);function m(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const u={breadcrumbHomeIcon:"breadcrumbHomeIcon_RXMJ"};function h(){const e=(0,c.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(m,{className:u.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Cyaw"};function x(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,d.jsx)(o.A,{className:a,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function p(e){let{children:t,active:s,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function v(){const e=(0,i.OF)(),t=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,n.A)(a.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:n,index:s,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:n,children:t.label})},s)}))]})}):null}},25062:(e,t,s)=>{s.r(t),s.d(t,{default:()=>W});var n=s(30758),a=s(67507),i=s(44151),l=s(86070);const o=n.createContext(null);function r(e){let{children:t,content:s}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,n.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var m=s(13526),u=s(79104),h=s(68082);function b(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var x=s(49002),p=s(58871),v=s(49758),g=s(8019),j=s(85565);const f={tag:"tag_Ffia",tagRegular:"tagRegular_mGqL",tagWithCount:"tagWithCount_VUQ3"};function A(e){let{permalink:t,label:s,count:n}=e;return(0,l.jsxs)(j.A,{href:t,className:(0,m.A)(f.tag,n?f.tagWithCount:f.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}const _={tags:"tags_VNSP",tag:"tag_CIAN"};function C(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(g.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,m.A)(_.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,l.jsx)("li",{className:_.tag,children:(0,l.jsx)(A,{label:t,permalink:s})},s)}))})]})}var N=s(63538);function L(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,tags:a}=e,i=a.length>0,o=!!(t||s||n);return i||o?(0,l.jsxs)("footer",{className:(0,m.A)(v.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,m.A)("row margin-top--sm",v.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(C,{tags:a})})}),o&&(0,l.jsx)(N.A,{className:(0,m.A)("margin-top--sm",v.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n})]}):null}var T=s(9741),k=s(9412);const M={tocCollapsibleButton:"tocCollapsibleButton_Gy7Q",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_Pwsg"};function w(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,m.A)("clean-btn",M.tocCollapsibleButton,!t&&M.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(g.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const I={tocCollapsible:"tocCollapsible_G6qJ",tocCollapsibleContent:"tocCollapsibleContent_QtxC",tocCollapsibleExpanded:"tocCollapsibleExpanded_VgJl"};function B(e){let{toc:t,className:s,minHeadingLevel:n,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,T.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,m.A)(I.tocCollapsible,!i&&I.tocCollapsibleExpanded,s),children:[(0,l.jsx)(w,{collapsed:i,onClick:o}),(0,l.jsx)(T.N,{lazy:!0,className:I.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(k.A,{toc:t,minHeadingLevel:n,maxHeadingLevel:a})})]})}const y={tocMobile:"tocMobile_l7dW"};function V(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(B,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.A)(v.G.docs.docTocMobile,y.tocMobile)})}var H=s(18217);function G(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(H.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.G.docs.docTocDesktop})}var P=s(75449),R=s(57870);function E(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=c();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,m.A)(v.G.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(P.A,{as:"h1",children:s})}),(0,l.jsx)(R.A,{children:t})]})}var S=s(4192),U=s(60095);const F={docItemContainer:"docItemContainer_AZLk",docItemCol:"docItemCol_PqIa"};function D(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=c(),s=(0,u.l)(),n=e.hide_table_of_contents,a=!n&&t.length>0;return{hidden:n,mobile:a?(0,l.jsx)(V,{}):void 0,desktop:!a||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)(G,{})}}(),{metadata:{unlisted:n}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,m.A)("col",!s.hidden&&F.docItemCol),children:[n&&(0,l.jsx)(U.A,{}),(0,l.jsx)(x.A,{}),(0,l.jsxs)("div",{className:F.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(S.A,{}),(0,l.jsx)(p.A,{}),s.mobile,(0,l.jsx)(E,{children:t}),(0,l.jsx)(L,{})]}),(0,l.jsx)(b,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function W(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(D,{children:(0,l.jsx)(s,{})})]})})}},68082:(e,t,s)=>{s.d(t,{A:()=>r});s(30758);var n=s(8019),a=s(13526),i=s(85565),l=s(86070);function o(e){const{permalink:t,title:s,subLabel:n,isNext:o}=e;return(0,l.jsxs)(i.A,{className:(0,a.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[n&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:n}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function r(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(o,{...t,subLabel:(0,l.jsx)(n.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(o,{...s,subLabel:(0,l.jsx)(n.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},58871:(e,t,s)=>{s.d(t,{A:()=>r});s(30758);var n=s(13526),a=s(8019),i=s(49758),l=s(31107),o=s(86070);function r(e){let{className:t}=e;const s=(0,l.r)();return s.badge?(0,o.jsx)("span",{className:(0,n.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},49002:(e,t,s)=>{s.d(t,{A:()=>p});s(30758);var n=s(13526),a=s(69497),i=s(85565),l=s(8019),o=s(98859),r=s(49758),c=s(59796),d=s(31107),m=s(86070);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=u[e.versionMetadata.banner];return(0,m.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,m.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,m.jsx)("b",{children:(0,m.jsx)(i.A,{to:s,onClick:n,children:(0,m.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:i}}=(0,a.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:u,latestVersionSuggestion:x}=(0,o.HW)(l),p=u??(v=x).docs.find((e=>e.id===v.mainDocId));var v;return(0,m.jsxs)("div",{className:(0,n.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(h,{siteTitle:i,versionMetadata:s})}),(0,m.jsx)("div",{className:"margin-top--md",children:(0,m.jsx)(b,{versionLabel:x.label,to:p.path,onClick:()=>d(x.name)})})]})}function p(e){let{className:t}=e;const s=(0,d.r)();return s.banner?(0,m.jsx)(x,{className:t,versionMetadata:s}):null}}}]);