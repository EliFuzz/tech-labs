(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8592],{80035:(e,t,n)=>{"use strict";n.d(t,{Z:()=>M});var r=n(50959),s=n(70244),o=n(86259),a=n(95589),c=n(94004);function l(){const{prism:e}=(0,c.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var i=n(13679),u=n(77226),d=n.n(u);const m=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},f={...b,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},h=Object.keys(b);function g(e,t){const n=e.map((e=>{const{start:n,end:r}=f[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:s,metastring:o}=t;if(o&&p.test(o)){const e=o.match(p).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,r=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return g(["tex"],t);case"lua":case"haskell":case"sql":return g(["lua"],t);case"wasm":return g(["wasm"],t);case"vb":case"vba":case"visual-basic":return g(["vb","rem"],t);case"vbnet":return g(["vbnet","rem"],t);case"batch":return g(["rem"],t);case"basic":return g(["rem","f90"],t);case"fsharp":return g(["js","ml"],t);case"ocaml":case"sml":return g(["ml"],t);case"fortran":return g(["f90"],t);case"cobol":return g(["cobol"],t);default:return g(h,t)}}(r,s),c=n.split("\n"),l=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<c.length;){const e=c[d].match(a);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${d},`:u[t]?l[u[t]].start=d:m[t]&&(l[m[t]].range+=`${l[m[t]].start}-${d-1},`),c.splice(d,1)}n=c.join("\n");const b={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{b[e]??=[],b[e].push(t)}))})),{lineClassNames:b,code:n}}const k={codeBlockContainer:"codeBlockContainer_gIWa"};var y=n(11527);function x(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,s]=e;const o=t[r];o&&"string"==typeof s&&(n[o]=s)})),n}(l());return(0,y.jsx)(t,{...n,style:r,className:(0,o.Z)(n.className,k.codeBlockContainer,i.k.common.codeBlock)})}const j={codeBlockContent:"codeBlockContent_OhzY",codeBlockTitle:"codeBlockTitle_ZokE",codeBlock:"codeBlock_sd81",codeBlockStandalone:"codeBlockStandalone_HhPu",codeBlockLines:"codeBlockLines_zFyb",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_AqKW",buttonGroup:"buttonGroup_CPZB"};function w(e){let{children:t,className:n}=e;return(0,y.jsx)(x,{as:"pre",tabIndex:0,className:(0,o.Z)(j.codeBlockStandalone,"thin-scrollbar",n),children:(0,y.jsx)("code",{className:j.codeBlockLines,children:t})})}var B=n(92337);const N={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,s]=(0,r.useState)(),o=(0,r.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,r.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=N);const s=(0,B.zX)(t),o=(0,B.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,o),()=>t.disconnect()}),[e,s,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var E=n(2425);const I={codeLine:"codeLine_s2XA",codeLineNumber:"codeLineNumber_obNw",codeLineContent:"codeLineContent_V6mV"};function L(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:s,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=s({line:t,className:(0,o.Z)(n,r&&I.codeLine)}),l=t.map(((e,t)=>(0,y.jsx)("span",{...a({token:e,key:t})},t)));return(0,y.jsxs)("span",{...c,children:[r?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{className:I.codeLineNumber}),(0,y.jsx)("span",{className:I.codeLineContent,children:l})]}):l,(0,y.jsx)("br",{})]})}var V=n(92978);function S(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function T(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const A={copyButtonCopied:"copyButtonCopied_FvCm",copyButtonIcons:"copyButtonIcons_ji9D",copyButtonIcon:"copyButtonIcon_nyyI",copyButtonSuccessIcon:"copyButtonSuccessIcon_bkA5"};function _(e){let{code:t,className:n}=e;const[s,a]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const r=document.createElement("textarea"),s=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection(),a=o.rangeCount>0&&o.getRangeAt(0);n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}r.remove(),a&&(o.removeAllRanges(),o.addRange(a)),s&&s.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,y.jsx)("button",{type:"button","aria-label":s?(0,V.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,V.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,V.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",n,A.copyButton,s&&A.copyButtonCopied),onClick:l,children:(0,y.jsxs)("span",{className:A.copyButtonIcons,"aria-hidden":"true",children:[(0,y.jsx)(S,{className:A.copyButtonIcon}),(0,y.jsx)(T,{className:A.copyButtonSuccessIcon})]})})}function Z(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const $={wordWrapButtonIcon:"wordWrapButtonIcon_ccgV",wordWrapButtonEnabled:"wordWrapButtonEnabled_UpoM"};function W(e){let{className:t,onClick:n,isEnabled:r}=e;const s=(0,V.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,y.jsx)("button",{type:"button",onClick:n,className:(0,o.Z)("clean-btn",t,r&&$.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,y.jsx)(Z,{className:$.wordWrapButtonIcon,"aria-hidden":"true"})})}function q(e){let{children:t,className:n="",metastring:s,title:a,showLineNumbers:i,language:u}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,c.L)(),b=function(e){return e?.toLowerCase()}(u??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d),f=l(),h=function(){const[e,t]=(0,r.useState)(!1),[n,s]=(0,r.useState)(!1),o=(0,r.useRef)(null),a=(0,r.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");s(n)}),[o]);return C(o,c),(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:a}}(),g=function(e){return e?.match(m)?.groups.title??""}(s)||a,{lineClassNames:k,code:w}=v(t,{metastring:s,language:b,magicComments:p}),B=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(s);return(0,y.jsxs)(x,{as:"div",className:(0,o.Z)(n,b&&!n.includes(`language-${b}`)&&`language-${b}`),children:[g&&(0,y.jsx)("div",{className:j.codeBlockTitle,children:g}),(0,y.jsxs)("div",{className:j.codeBlockContent,children:[(0,y.jsx)(E.y$,{theme:f,code:w,language:b??"text",children:e=>{let{className:t,style:n,tokens:r,getLineProps:s,getTokenProps:a}=e;return(0,y.jsx)("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,o.Z)(t,j.codeBlock,"thin-scrollbar"),style:n,children:(0,y.jsx)("code",{className:(0,o.Z)(j.codeBlockLines,B&&j.codeBlockLinesWithNumbering),children:r.map(((e,t)=>(0,y.jsx)(L,{line:e,getLineProps:s,getTokenProps:a,classNames:k[t],showLineNumbers:B},t)))})})}}),(0,y.jsxs)("div",{className:j.buttonGroup,children:[(h.isEnabled||h.isCodeScrollable)&&(0,y.jsx)(W,{className:j.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),(0,y.jsx)(_,{className:j.codeButton,code:w})]})]})]})}function M(e){let{children:t,...n}=e;const o=(0,s.Z)(),a=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof a?q:w;return(0,y.jsx)(c,{...n,children:a},String(o))}},74109:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});n(50959);var r=n(86259);const s={tabItem:"tabItem_D2xM"};var o=n(11527);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:n,children:t})}},40521:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r=n(50959),s=n(86259),o=n(36655),a=n(28903),c=n(1881),l=n(72447),i=n(65973),u=n(1918);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=m(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,d]=b({queryString:n,groupId:s}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,u.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),g=(()=>{const e=i??f;return p({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=n(70244);const g={tabList:"tabList_ZpGV",tabItem:"tabItem_VZQW"};var v=n(11527);function k(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=c[n].value;s!==r&&(i(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(k,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function j(e){const t=(0,h.Z)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},77226:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,s,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},84135:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c,a:()=>a});var r=n(50959);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);