"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2611],{83542:(e,t,s)=>{s.d(t,{A:()=>f});var l=s(30758),n=s(97500),a=s.n(n),r=s(12221);function i(e){return["small","middle","large"].includes(e)}function o(e){return!!e&&("number"==typeof e&&!Number.isNaN(e))}var c=s(91148),u=s(60328);const m=l.createContext({latestIndex:0}),d=m.Provider,p=e=>{let{className:t,index:s,children:n,split:a,style:r}=e;const{latestIndex:i}=l.useContext(m);return null==n?null:l.createElement(l.Fragment,null,l.createElement("div",{className:t,style:r},n),s<i&&a&&l.createElement("span",{className:`${t}-split`},a))};var x=s(58889),v=function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(s[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(s[l[n]]=e[l[n]])}return s};const y=l.forwardRef(((e,t)=>{var s,n;const{getPrefixCls:u,space:m,direction:y}=l.useContext(c.QO),{size:g=(null==m?void 0:m.size)||"small",align:f,className:h,rootClassName:b,children:C,direction:N="horizontal",prefixCls:j,split:w,style:A,wrap:O=!1,classNames:S,styles:$}=e,I=v(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[k,E]=Array.isArray(g)?g:[g,g],z=i(E),B=i(k),P=o(E),R=o(k),F=(0,r.A)(C,{keepEmpty:!0}),W=void 0===f&&"horizontal"===N?"center":f,G=u("space",j),[M,T,U]=(0,x.A)(G),Q=a()(G,null==m?void 0:m.className,T,`${G}-${N}`,{[`${G}-rtl`]:"rtl"===y,[`${G}-align-${W}`]:W,[`${G}-gap-row-${E}`]:z,[`${G}-gap-col-${k}`]:B},h,b,U),q=a()(`${G}-item`,null!==(s=null==S?void 0:S.item)&&void 0!==s?s:null===(n=null==m?void 0:m.classNames)||void 0===n?void 0:n.item);let D=0;const H=F.map(((e,t)=>{var s,n;null!=e&&(D=t);const a=e&&e.key||`${q}-${t}`;return l.createElement(p,{className:q,key:a,index:t,split:w,style:null!==(s=null==$?void 0:$.item)&&void 0!==s?s:null===(n=null==m?void 0:m.styles)||void 0===n?void 0:n.item},e)})),J=l.useMemo((()=>({latestIndex:D})),[D]);if(0===F.length)return null;const K={};return O&&(K.flexWrap="wrap"),!B&&R&&(K.columnGap=k),!z&&P&&(K.rowGap=E),M(l.createElement("div",Object.assign({ref:t,className:Q,style:Object.assign(Object.assign(Object.assign({},K),null==m?void 0:m.style),A)},I),l.createElement(d,{value:J},H)))})),g=y;g.Compact=u.Ay;const f=g},2611:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var l=s(62761),n=s(83542),a=s(60939),r=s(26207),i=s(95441),o=s(30758),c=s(25082),u=s(86070);const m=()=>{const[e,t]=(0,o.useState)(10),[s,m]=(0,o.useState)(10),[d,p]=(0,o.useState)(""),[x,v]=(0,o.useState)(""),[y,g]=(0,o.useState)(!0),f=(e,t,s)=>{try{g(!0);const l=t<=10&&isNaN(parseInt(e)),n=t<=Math.max(...e.toUpperCase().split("").map((e=>e.charCodeAt(0))))-55;if(l||n)return g(""===e),"";const a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/",r=t>=10&&t<=36?e.toUpperCase():e;let i=BigInt(0);if(10!==t)for(let e=0;e<r.length;e++)i=i*BigInt(t)+BigInt(a.indexOf(r[e]));else i=BigInt(r);let o="",c=i;for(;c>0;){const e=c%BigInt(s);o=a[Number(e)]+o,c/=BigInt(s)}return o}catch(l){return g(""===e),""}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(n.A.Compact,{children:[(0,u.jsx)(a.A,{prefix:"From:",style:{minWidth:"100px"},min:2,max:64,value:e,onChange:e=>{t(e),v(f(d.toString(),e,s))}}),(0,u.jsx)(a.A,{prefix:"To:",style:{minWidth:"100px"},min:2,max:64,value:s,onChange:t=>{m(t),v(f(d.toString(),e,t))}})]}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsxs)(r.A,{gutter:[12,12],children:[(0,u.jsx)(i.A,{xs:24,sm:12,children:(0,u.jsx)(c.A,{rows:4,autoSize:{minRows:3,maxRows:15},value:d,onChange:t=>{let{target:{value:l}}=t;p(l),v(f(l,e,s))},allowClear:!0,status:y?void 0:"error"})}),(0,u.jsx)(i.A,{xs:24,sm:12,style:{visibility:""===d?"hidden":"visible"},children:(0,u.jsx)(c.A,{rows:4,autoSize:{minRows:3,maxRows:15},value:x,className:"copy",onClick:()=>{""!==d&&(l.Ay.success("Copied"),navigator.clipboard.writeText(x.toString()))},readOnly:!0})})]})]})}}}]);