"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8401],{62562:(e,t,s)=>{s.d(t,{A:()=>v});s(30758);var a=s(13526),n=s(68510),i=s(65911),l=s(85820),o=s(26621),r=s(32851),c=s(38202),d=s(86070);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_omDW"};function h(){const e=(0,c.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_ru6_"};function p(e){let{children:t,href:s,isLast:a}=e;const n="breadcrumbs__link";return a?(0,d.jsx)("span",{className:n,itemProp:"name",children:t}):s?(0,d.jsx)(o.A,{className:n,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:n,children:t})}function x(e){let{children:t,active:s,index:n,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,a.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function v(){const e=(0,i.OF)(),t=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,a.A)(n.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const a=s===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:a,index:s,addMicrodata:!!n,children:(0,d.jsx)(p,{href:n,isLast:a,children:t.label})},s)}))]})}):null}},96083:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Q});var a=s(30758),n=s(51887),i=s(90711),l=s(86070);const o=a.createContext(null);function r(e){let{children:t,content:s}=e;const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:n,children:t})}function c(){const e=(0,a.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=c();return(0,l.jsx)(n.be,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(13526),m=s(30496),h=s(79568);function b(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var p=s(8408),x=s(73761),v=s(68510),g=s(32851),j=s(26621);const f={tag:"tag_enLR",tagRegular:"tagRegular_FhTy",tagWithCount:"tagWithCount_B4ph"};function A(e){let{permalink:t,label:s,count:a}=e;return(0,l.jsxs)(j.A,{href:t,className:(0,u.A)(f.tag,a?f.tagWithCount:f.tagRegular),children:[s,a&&(0,l.jsx)("span",{children:a})]})}const N={tags:"tags_fiqT",tag:"tag_K6vX"};function _(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(g.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(N.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,l.jsx)("li",{className:N.tag,children:(0,l.jsx)(A,{label:t,permalink:s})},s)}))})]})}const C={iconEdit:"iconEdit_zJJC"};function T(e){let{className:t,...s}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(C.iconEdit,t),"aria-hidden":"true",...s,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function L(e){let{editUrl:t}=e;return(0,l.jsxs)(j.A,{to:t,className:v.G.common.editThisPage,children:[(0,l.jsx)(T,{}),(0,l.jsx)(g.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var k=s(6105);function U(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,k.A)(),s=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,k.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:s,...e})}function y(e){let{lastUpdatedAt:t}=e;const s=new Date(t),a=U({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(s);return(0,l.jsx)(g.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:s.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function w(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(g.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function B(e){let{lastUpdatedAt:t,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:v.G.common.lastUpdated,children:[(0,l.jsx)(g.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,l.jsx)(y,{lastUpdatedAt:t}):"",byUser:s?(0,l.jsx)(w,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const M={lastUpdated:"lastUpdated_WmUF"};function I(e){let{className:t,editUrl:s,lastUpdatedAt:a,lastUpdatedBy:n}=e;return(0,l.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,l.jsx)("div",{className:"col",children:s&&(0,l.jsx)(L,{editUrl:s})}),(0,l.jsx)("div",{className:(0,u.A)("col",M.lastUpdated),children:(a||n)&&(0,l.jsx)(B,{lastUpdatedAt:a,lastUpdatedBy:n})})]})}function E(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a,tags:n}=e,i=n.length>0,o=!!(t||s||a);return i||o?(0,l.jsxs)("footer",{className:(0,u.A)(v.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",v.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(_,{tags:n})})}),o&&(0,l.jsx)(I,{className:(0,u.A)("margin-top--sm",v.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a})]}):null}var H=s(82797),V=s(87245);const D={tocCollapsibleButton:"tocCollapsibleButton_BiWK",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_Ncgc"};function P(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,u.A)("clean-btn",D.tocCollapsibleButton,!t&&D.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(g.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const G={tocCollapsible:"tocCollapsible_lJSN",tocCollapsibleContent:"tocCollapsibleContent_OAMc",tocCollapsibleExpanded:"tocCollapsibleExpanded_gyWE"};function S(e){let{toc:t,className:s,minHeadingLevel:a,maxHeadingLevel:n}=e;const{collapsed:i,toggleCollapsed:o}=(0,H.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(G.tocCollapsible,!i&&G.tocCollapsibleExpanded,s),children:[(0,l.jsx)(P,{collapsed:i,onClick:o}),(0,l.jsx)(H.N,{lazy:!0,className:G.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(V.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:n})})]})}const F={tocMobile:"tocMobile_SKVc"};function R(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(S,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(v.G.docs.docTocMobile,F.tocMobile)})}var W=s(44007);function O(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(W.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.G.docs.docTocDesktop})}var z=s(39543),q=s(88791);function J(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=c();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(v.G.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(z.A,{as:"h1",children:s})}),(0,l.jsx)(q.A,{children:t})]})}var K=s(62562),X=s(87349);const Z={docItemContainer:"docItemContainer_pEhr",docItemCol:"docItemCol_kn3A"};function $(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=c(),s=(0,m.l)(),a=e.hide_table_of_contents,n=!a&&t.length>0;return{hidden:a,mobile:n?(0,l.jsx)(R,{}):void 0,desktop:!n||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)(O,{})}}(),{metadata:{unlisted:a}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!s.hidden&&Z.docItemCol),children:[a&&(0,l.jsx)(X.A,{}),(0,l.jsx)(p.A,{}),(0,l.jsxs)("div",{className:Z.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(K.A,{}),(0,l.jsx)(x.A,{}),s.mobile,(0,l.jsx)(J,{children:t}),(0,l.jsx)(E,{})]}),(0,l.jsx)(b,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function Q(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(n.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)($,{children:(0,l.jsx)(s,{})})]})})}},79568:(e,t,s)=>{s.d(t,{A:()=>r});s(30758);var a=s(32851),n=s(13526),i=s(26621),l=s(86070);function o(e){const{permalink:t,title:s,subLabel:a,isNext:o}=e;return(0,l.jsxs)(i.A,{className:(0,n.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function r(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(o,{...t,subLabel:(0,l.jsx)(a.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(o,{...s,subLabel:(0,l.jsx)(a.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},73761:(e,t,s)=>{s.d(t,{A:()=>r});s(30758);var a=s(13526),n=s(32851),i=s(68510),l=s(74147),o=s(86070);function r(e){let{className:t}=e;const s=(0,l.r)();return s.badge?(0,o.jsx)("span",{className:(0,a.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(n.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},8408:(e,t,s)=>{s.d(t,{A:()=>x});s(30758);var a=s(13526),n=s(6105),i=s(26621),l=s(32851),o=s(37673),r=s(68510),c=s(23348),d=s(74147),u=s(86070);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:a}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:s,onClick:a,children:(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:i}}=(0,n.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,o.HW)(l),x=m??(v=p).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,a.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:s})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:p.label,to:x.path,onClick:()=>d(p.name)})})]})}function x(e){let{className:t}=e;const s=(0,d.r)();return s.banner?(0,u.jsx)(p,{className:t,versionMetadata:s}):null}}}]);