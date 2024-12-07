"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5149],{91249:(e,n,t)=>{t.d(n,{A:()=>Ve});var o=t(32277),r=t(30758),a=t(97500),i=t.n(a),l=t(75890),c=t(66313),d=t(50459),s=t(32511),u=t(29699),f=t(88113),p=t(4447),h=t(54286);const v=r.createContext({});var m=t(69826),g=t(3205),b="__rc_cascader_search_mark__",y=function(e,n,t){var o=t.label,r=void 0===o?"":o;return n.some((function(n){return String(n[r]).toLowerCase().includes(e.toLowerCase())}))},C=function(e,n,t,o){return n.map((function(e){return e[o.label]})).join(" / ")};const k=function(e,n,t,a,i,l){var d=i.filter,s=void 0===d?y:d,u=i.render,f=void 0===u?C:u,p=i.limit,h=void 0===p?50:p,v=i.sort;return r.useMemo((function(){var r=[];if(!e)return[];return function n(i,d){var u=arguments.length>2&&void 0!==arguments[2]&&arguments[2];i.forEach((function(i){if(!(!v&&!1!==h&&h>0&&r.length>=h)){var p,m=[].concat((0,o.A)(d),[i]),y=i[t.children],C=u||i.disabled;if(!y||0===y.length||l)if(s(e,m,{label:t.label}))r.push((0,c.A)((0,c.A)({},i),{},(p={disabled:C},(0,g.A)(p,t.label,f(e,m,a,t)),(0,g.A)(p,b,m),(0,g.A)(p,t.children,void 0),p)));y&&n(i[t.children],m,C)}}))}(n,[]),v&&r.sort((function(n,o){return v(n[b],o[b],e,t)})),!1!==h&&h>0?r.slice(0,h):r}),[e,n,t,a,f,l,s,v,h])};var x="__RC_CASCADER_SPLIT__",S="SHOW_PARENT",A="SHOW_CHILD";function w(e){return e.join(x)}function $(e){return e.map(w)}function O(e){var n=e||{},t=n.label,o=n.value||"value";return{label:t||"label",value:o,key:o,children:n.children||"children"}}function E(e,n){var t,o;return null!==(t=e.isLeaf)&&void 0!==t?t:!(null!==(o=e[n.children])&&void 0!==o&&o.length)}function I(e){var n=e.parentElement;if(n){var t=e.offsetTop-n.offsetTop;t-n.scrollTop<0?n.scrollTo({top:t}):t+e.offsetHeight-n.scrollTop>n.offsetHeight&&n.scrollTo({top:t+e.offsetHeight-n.offsetHeight})}}function N(e,n){return e.map((function(e){var t;return null===(t=e[b])||void 0===t?void 0:t.map((function(e){return e[n.value]}))}))}function P(e){return e?function(e){return Array.isArray(e)&&Array.isArray(e[0])}(e)?e:(0===e.length?[]:[e]).map((function(e){return Array.isArray(e)?e:[e]})):[]}function z(e,n,t){var o=new Set(e),r=n();return e.filter((function(e){var n=r[e],a=n?n.parent:null,i=n?n.children:null;return!(!n||!n.node.disabled)||(t===A?!(i&&i.some((function(e){return e.key&&o.has(e.key)}))):!(a&&!a.node.disabled&&o.has(a.key)))}))}function M(e,n,t){for(var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=n,a=[],i=function(){var n,i,c,d=e[l],s=null===(n=r)||void 0===n?void 0:n.findIndex((function(e){var n=e[t.value];return o?String(n)===String(d):n===d})),u=-1!==s?null===(i=r)||void 0===i?void 0:i[s]:null;a.push({value:null!==(c=null==u?void 0:u[t.value])&&void 0!==c?c:d,index:s,option:u}),r=null==u?void 0:u[t.children]},l=0;l<e.length;l+=1)i();return a}function T(e,n){return r.useCallback((function(t){var o=[],r=[];return t.forEach((function(t){M(t,e,n).every((function(e){return e.option}))?r.push(t):o.push(t)})),[r,o]}),[e,n])}var W=t(42048);const j=function(e,n){var t=r.useRef({options:[],info:{keyEntities:{},pathKeyEntities:{}}});return r.useCallback((function(){return t.current.options!==e&&(t.current.options=e,t.current.info=(0,W.cG)(e,{fieldNames:n,initWrapper:function(e){return(0,c.A)((0,c.A)({},e),{},{pathKeyEntities:{}})},processEntity:function(e,t){var o=e.nodes.map((function(e){return e[n.value]})).join(x);t.pathKeyEntities[o]=e,e.key=o}})),t.current.info.pathKeyEntities}),[n,e])};function H(e,n){var t=r.useMemo((function(){return n||[]}),[n]),o=j(t,e),a=r.useCallback((function(n){var t=o();return n.map((function(n){return t[n].nodes.map((function(n){return n[e.value]}))}))}),[o,e]);return[t,o,a]}t(94587);var D=t(30918);function _(e,n,t,r,a,i,l,c){return function(d){if(e){var s=w(d),u=$(t),f=$(r),p=u.includes(s),h=a.some((function(e){return w(e)===s})),v=t,m=a;if(h&&!p)m=a.filter((function(e){return w(e)!==s}));else{var g,b=p?u.filter((function(e){return e!==s})):[].concat((0,o.A)(u),[s]),y=i();if(p)g=(0,D.p)(b,{checked:!1,halfCheckedKeys:f},y).checkedKeys;else g=(0,D.p)(b,!0,y).checkedKeys;var C=z(g,i,c);v=l(C)}n([].concat((0,o.A)(m),(0,o.A)(v)))}else n(d)}}function K(e,n,t,o,a){return r.useMemo((function(){var r=a(n),i=(0,d.A)(r,2),l=i[0],c=i[1];if(!e||!n.length)return[l,[],c];var s=$(l),u=t(),f=(0,D.p)(s,!0,u),p=f.checkedKeys,h=f.halfCheckedKeys;return[o(p),o(h),c]}),[e,n,t,o,a])}const R=r.memo((function(e){return e.children}),(function(e,n){return!n.open}));function V(e){var n,t=e.prefixCls,o=e.checked,a=e.halfChecked,l=e.disabled,c=e.onClick,d=e.disableCheckbox,s=r.useContext(v).checkable,u="boolean"!=typeof s?s:null;return r.createElement("span",{className:i()("".concat(t),(n={},(0,g.A)(n,"".concat(t,"-checked"),o),(0,g.A)(n,"".concat(t,"-indeterminate"),!o&&a),(0,g.A)(n,"".concat(t,"-disabled"),l||d),n)),onClick:c},u)}var B="__cascader_fix_label__";function F(e){var n=e.prefixCls,t=e.multiple,a=e.options,l=e.activeValue,c=e.prevValuePath,d=e.onToggleOpen,s=e.onSelect,u=e.onActive,f=e.checkedSet,p=e.halfCheckedSet,h=e.loadingKeys,m=e.isSelectable,y=e.disabled,C="".concat(n,"-menu"),k="".concat(n,"-menu-item"),x=r.useContext(v),S=x.fieldNames,A=x.changeOnSelect,$=x.expandTrigger,O=x.expandIcon,I=x.loadingIcon,N=x.dropdownMenuColumnStyle,P=x.optionRender,z="hover"===$,M=function(e){return y||e},T=r.useMemo((function(){return a.map((function(e){var n,t=e.disabled,r=e.disableCheckbox,a=e[b],i=null!==(n=e[B])&&void 0!==n?n:e[S.label],l=e[S.value],d=E(e,S),s=a?a.map((function(e){return e[S.value]})):[].concat((0,o.A)(c),[l]),u=w(s);return{disabled:t,label:i,value:l,isLeaf:d,isLoading:h.includes(u),checked:f.has(u),halfChecked:p.has(u),option:e,disableCheckbox:r,fullPath:s,fullPathKey:u}}))}),[a,f,S,p,h,c]);return r.createElement("ul",{className:C,role:"menu"},T.map((function(e){var a,c,f=e.disabled,p=e.label,h=e.value,v=e.isLeaf,b=e.isLoading,y=e.checked,C=e.halfChecked,x=e.option,S=e.fullPath,w=e.fullPathKey,$=e.disableCheckbox,E=function(){if(!M(f)){var e=(0,o.A)(S);z&&v&&e.pop(),u(e)}},T=function(){m(x)&&!M(f)&&s(S,v)};return"string"==typeof x.title?c=x.title:"string"==typeof p&&(c=p),r.createElement("li",{key:w,className:i()(k,(a={},(0,g.A)(a,"".concat(k,"-expand"),!v),(0,g.A)(a,"".concat(k,"-active"),l===h||l===w),(0,g.A)(a,"".concat(k,"-disabled"),M(f)),(0,g.A)(a,"".concat(k,"-loading"),b),a)),style:N,role:"menuitemcheckbox",title:c,"aria-checked":y,"data-path-key":w,onClick:function(){E(),$||t&&!v||T()},onDoubleClick:function(){A&&d(!1)},onMouseEnter:function(){z&&E()},onMouseDown:function(e){e.preventDefault()}},t&&r.createElement(V,{prefixCls:"".concat(n,"-checkbox"),checked:y,halfChecked:C,disabled:M(f)||$,disableCheckbox:$,onClick:function(e){$||(e.stopPropagation(),T())}}),r.createElement("div",{className:"".concat(k,"-content")},P?P(x):p),!b&&O&&!v&&r.createElement("div",{className:"".concat(k,"-expand-icon")},O),b&&I&&r.createElement("div",{className:"".concat(k,"-loading-icon")},I))})))}const L=function(e,n){var t=r.useContext(v).values[0],o=r.useState([]),a=(0,d.A)(o,2),i=a[0],l=a[1];return r.useEffect((function(){e||l(t||[])}),[n,t]),[i,l]};var G=t(30385);const X=function(e,n,t,a,i,l,c){var s=c.direction,u=c.searchValue,f=c.toggleOpen,p=c.open,h="rtl"===s,v=r.useMemo((function(){for(var e=-1,o=n,r=[],i=[],l=a.length,c=N(n,t),d=function(n){var l=o.findIndex((function(e,o){return(c[o]?w(c[o]):e[t.value])===a[n]}));if(-1===l)return 1;e=l,r.push(e),i.push(a[n]),o=o[e][t.children]},s=0;s<l&&o&&!d(s);s+=1);for(var u=n,f=0;f<r.length-1;f+=1)u=u[r[f]][t.children];return[i,e,u,c]}),[a,t,n]),m=(0,d.A)(v,4),g=m[0],y=m[1],C=m[2],k=m[3],x=function(e){i(e)},S=function(){if(g.length>1){var e=g.slice(0,-1);x(e)}else f(!1)},A=function(){var e,n=((null===(e=C[y])||void 0===e?void 0:e[t.children])||[]).find((function(e){return!e.disabled}));if(n){var r=[].concat((0,o.A)(g),[n[t.value]]);x(r)}};r.useImperativeHandle(e,(function(){return{onKeyDown:function(e){var n=e.which;switch(n){case G.A.UP:case G.A.DOWN:var o=0;n===G.A.UP?o=-1:n===G.A.DOWN&&(o=1),0!==o&&function(e){var n=C.length,o=y;-1===o&&e<0&&(o=n);for(var r=0;r<n;r+=1){var a=C[o=(o+e+n)%n];if(a&&!a.disabled){var i=g.slice(0,-1).concat(k[o]?w(k[o]):a[t.value]);return void x(i)}}}(o);break;case G.A.LEFT:if(u)break;h?A():S();break;case G.A.RIGHT:if(u)break;h?S():A();break;case G.A.BACKSPACE:u||S();break;case G.A.ENTER:if(g.length){var r=C[y],a=(null==r?void 0:r[b])||[];a.length?l(a.map((function(e){return e[t.value]})),a[a.length-1]):l(g,C[y])}break;case G.A.ESC:f(!1),p&&e.stopPropagation()}},onKeyUp:function(){}}}))};const q=r.forwardRef((function(e,n){var t,a,s,u=e.prefixCls,f=e.multiple,p=e.searchValue,h=e.toggleOpen,m=e.notFoundContent,b=e.direction,y=e.open,C=e.disabled,k=r.useRef(null),S="rtl"===b,A=r.useContext(v),O=A.options,P=A.values,z=A.halfValues,T=A.fieldNames,W=A.changeOnSelect,j=A.onSelect,H=A.searchOptions,D=A.dropdownPrefixCls,_=A.loadData,K=A.expandTrigger,V=D||u,G=r.useState([]),q=(0,d.A)(G,2),Q=q[0],U=q[1];r.useEffect((function(){Q.length&&Q.forEach((function(e){var n=M(e.split(x),O,T,!0).map((function(e){return e.option})),t=n[n.length-1];(!t||t[T.children]||E(t,T))&&U((function(n){return n.filter((function(n){return n!==e}))}))}))}),[O,Q,T]);var Y=r.useMemo((function(){return new Set($(P))}),[P]),J=r.useMemo((function(){return new Set($(z))}),[z]),Z=L(f,y),ee=(0,d.A)(Z,2),ne=ee[0],te=ee[1],oe=function(e){te(e),function(e){if(_&&!p){var n=M(e,O,T).map((function(e){return e.option})),t=n[n.length-1];if(t&&!E(t,T)){var r=w(e);U((function(e){return[].concat((0,o.A)(e),[r])})),_(n)}}}(e)},re=function(e){if(C)return!1;var n=e.disabled,t=E(e,T);return!n&&(t||W||f)},ae=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];j(e),!f&&(n||W&&("hover"===K||t))&&h(!1)},ie=r.useMemo((function(){return p?H:O}),[p,H,O]),le=r.useMemo((function(){for(var e=[{options:ie}],n=ie,t=N(n,T),o=function(){var o=ne[r],a=n.find((function(e,n){return(t[n]?w(t[n]):e[T.value])===o})),i=null==a?void 0:a[T.children];if(null==i||!i.length)return 1;n=i,e.push({options:i})},r=0;r<ne.length&&!o();r+=1);return e}),[ie,ne,T]);X(n,ie,T,ne,oe,(function(e,n){re(n)&&ae(e,E(n,T),!0)}),{direction:b,searchValue:p,toggleOpen:h,open:y}),r.useEffect((function(){if(!p)for(var e=0;e<ne.length;e+=1){var n,t=w(ne.slice(0,e+1)),o=null===(n=k.current)||void 0===n?void 0:n.querySelector('li[data-path-key="'.concat(t.replace(/\\{0,2}"/g,'\\"'),'"]'));o&&I(o)}}),[ne,p]);var ce=!(null!==(t=le[0])&&void 0!==t&&null!==(t=t.options)&&void 0!==t&&t.length),de=[(a={},(0,g.A)(a,T.value,"__EMPTY__"),(0,g.A)(a,B,m),(0,g.A)(a,"disabled",!0),a)],se=(0,c.A)((0,c.A)({},e),{},{multiple:!ce&&f,onSelect:ae,onActive:oe,onToggleOpen:h,checkedSet:Y,halfCheckedSet:J,loadingKeys:Q,isSelectable:re}),ue=(ce?[{options:de}]:le).map((function(e,n){var t=ne.slice(0,n),o=ne[n];return r.createElement(F,(0,l.A)({key:n},se,{prefixCls:V,options:e.options,prevValuePath:t,activeValue:o}))}));return r.createElement(R,{open:y},r.createElement("div",{className:i()("".concat(V,"-menus"),(s={},(0,g.A)(s,"".concat(V,"-menu-empty"),ce),(0,g.A)(s,"".concat(V,"-rtl"),S),s)),ref:k},ue))}));const Q=r.forwardRef((function(e,n){var t=(0,u.Vm)();return r.createElement(q,(0,l.A)({},e,t,{ref:n}))}));var U=t(4323);function Y(){}function J(e){var n,t=e,o=t.prefixCls,a=void 0===o?"rc-cascader":o,l=t.style,c=t.className,s=t.options,u=t.checkable,f=t.defaultValue,p=t.value,h=t.fieldNames,m=t.changeOnSelect,b=t.onChange,y=t.showCheckedStrategy,C=t.loadData,k=t.expandTrigger,x=t.expandIcon,S=void 0===x?">":x,A=t.loadingIcon,w=t.direction,$=t.notFoundContent,E=void 0===$?"Not Found":$,I=t.disabled,N=!!u,z=(0,U.vz)(f,{value:p,postState:P}),W=(0,d.A)(z,2),j=W[0],D=W[1],R=r.useMemo((function(){return O(h)}),[JSON.stringify(h)]),V=H(R,s),B=(0,d.A)(V,3),F=B[0],L=B[1],G=B[2],X=T(F,R),Q=K(N,j,L,G,X),J=(0,d.A)(Q,3),Z=J[0],ee=J[1],ne=J[2],te=(0,U._q)((function(e){if(D(e),b){var n=P(e),t=n.map((function(e){return M(e,F,R).map((function(e){return e.option}))})),o=N?n:n[0],r=N?t:t[0];b(o,r)}})),oe=_(N,te,Z,ee,ne,L,G,y),re=(0,U._q)((function(e){oe(e)})),ae=r.useMemo((function(){return{options:F,fieldNames:R,values:Z,halfValues:ee,changeOnSelect:m,onSelect:re,checkable:u,searchOptions:[],dropdownPrefixCls:void 0,loadData:C,expandTrigger:k,expandIcon:S,loadingIcon:A,dropdownMenuColumnStyle:void 0}}),[F,R,Z,ee,m,re,u,C,k,S,A]),ie="".concat(a,"-panel"),le=!F.length;return r.createElement(v.Provider,{value:ae},r.createElement("div",{className:i()(ie,(n={},(0,g.A)(n,"".concat(ie,"-rtl"),"rtl"===w),(0,g.A)(n,"".concat(ie,"-empty"),le),n),c),style:l},le?E:r.createElement(q,{prefixCls:a,searchValue:"",multiple:N,toggleOpen:Y,open:!0,direction:w,disabled:I})))}var Z=["id","prefixCls","fieldNames","defaultValue","value","changeOnSelect","onChange","displayRender","checkable","autoClearSearchValue","searchValue","onSearch","showSearch","expandTrigger","options","dropdownPrefixCls","loadData","popupVisible","open","popupClassName","dropdownClassName","dropdownMenuColumnStyle","dropdownStyle","popupPlacement","placement","onDropdownVisibleChange","onPopupVisibleChange","expandIcon","loadingIcon","children","dropdownMatchSelectWidth","showCheckedStrategy","optionRender"],ee=r.forwardRef((function(e,n){var t=e.id,a=e.prefixCls,i=void 0===a?"rc-cascader":a,g=e.fieldNames,b=e.defaultValue,y=e.value,C=e.changeOnSelect,x=e.onChange,A=e.displayRender,E=e.checkable,I=e.autoClearSearchValue,N=void 0===I||I,W=e.searchValue,j=e.onSearch,D=e.showSearch,R=e.expandTrigger,V=e.options,B=e.dropdownPrefixCls,F=e.loadData,L=e.popupVisible,G=e.open,X=e.popupClassName,q=e.dropdownClassName,U=e.dropdownMenuColumnStyle,Y=e.dropdownStyle,J=e.popupPlacement,ee=e.placement,ne=e.onDropdownVisibleChange,te=e.onPopupVisibleChange,oe=e.expandIcon,re=void 0===oe?">":oe,ae=e.loadingIcon,ie=e.children,le=e.dropdownMatchSelectWidth,ce=void 0!==le&&le,de=e.showCheckedStrategy,se=void 0===de?S:de,ue=e.optionRender,fe=(0,s.A)(e,Z),pe=(0,f.Ay)(t),he=!!E,ve=(0,h.A)(b,{value:y,postState:P}),me=(0,d.A)(ve,2),ge=me[0],be=me[1],ye=r.useMemo((function(){return O(g)}),[JSON.stringify(g)]),Ce=H(ye,V),ke=(0,d.A)(Ce,3),xe=ke[0],Se=ke[1],Ae=ke[2],we=(0,h.A)("",{value:W,postState:function(e){return e||""}}),$e=(0,d.A)(we,2),Oe=$e[0],Ee=$e[1],Ie=function(e){return r.useMemo((function(){if(!e)return[!1,{}];var n={matchInputWidth:!0,limit:50};return e&&"object"===(0,m.A)(e)&&(n=(0,c.A)((0,c.A)({},n),e)),n.limit<=0&&(n.limit=!1),[!0,n]}),[e])}(D),Ne=(0,d.A)(Ie,2),Pe=Ne[0],ze=Ne[1],Me=k(Oe,xe,ye,B||i,ze,C||he),Te=T(xe,ye),We=K(he,ge,Se,Ae,Te),je=(0,d.A)(We,3),He=je[0],De=je[1],_e=je[2],Ke=function(e,n,t,a,i){return r.useMemo((function(){var l=i||function(e){var n=a?e.slice(-1):e;return n.every((function(e){return["string","number"].includes((0,m.A)(e))}))?n.join(" / "):n.reduce((function(e,n,t){var a=r.isValidElement(n)?r.cloneElement(n,{key:t}):n;return 0===t?[a]:[].concat((0,o.A)(e),[" / ",a])}),[])};return e.map((function(e){var o,r=M(e,n,t),a=l(r.map((function(e){var n,o=e.option,r=e.value;return null!==(n=null==o?void 0:o[t.label])&&void 0!==n?n:r})),r.map((function(e){return e.option}))),i=w(e);return{label:a,value:i,key:i,valueCells:e,disabled:null===(o=r[r.length-1])||void 0===o||null===(o=o.option)||void 0===o?void 0:o.disabled}}))}),[e,n,t,i,a])}(r.useMemo((function(){var e=z($(He),Se,se);return[].concat((0,o.A)(_e),(0,o.A)(Ae(e)))}),[He,Se,Ae,_e,se]),xe,ye,he,A),Re=(0,p.A)((function(e){if(be(e),x){var n=P(e),t=n.map((function(e){return M(e,xe,ye).map((function(e){return e.option}))})),o=he?n:n[0],r=he?t:t[0];x(o,r)}})),Ve=_(he,Re,He,De,_e,Se,Ae,se),Be=(0,p.A)((function(e){he&&!N||Ee(""),Ve(e)})),Fe=void 0!==G?G:L,Le=q||X,Ge=ee||J;var Xe=r.useMemo((function(){return{options:xe,fieldNames:ye,values:He,halfValues:De,changeOnSelect:C,onSelect:Be,checkable:E,searchOptions:Me,dropdownPrefixCls:B,loadData:F,expandTrigger:R,expandIcon:re,loadingIcon:ae,dropdownMenuColumnStyle:U,optionRender:ue}}),[xe,ye,He,De,C,Be,E,Me,B,F,R,re,ae,U,ue]),qe=!(Oe?Me:xe).length,Qe=Oe&&ze.matchInputWidth||qe?{}:{minWidth:"auto"};return r.createElement(v.Provider,{value:Xe},r.createElement(u.g3,(0,l.A)({},fe,{ref:n,id:pe,prefixCls:i,autoClearSearchValue:N,dropdownMatchSelectWidth:ce,dropdownStyle:(0,c.A)((0,c.A)({},Qe),Y),displayValues:Ke,onDisplayValuesChange:function(e,n){if("clear"!==n.type){var t=n.values[0].valueCells;Be(t)}else Re([])},mode:he?"multiple":void 0,searchValue:Oe,onSearch:function(e,n){Ee(e),"blur"!==n.source&&j&&j(e)},showSearch:Pe,OptionList:Q,emptyOptions:qe,open:Fe,dropdownClassName:Le,placement:Ge,onDropdownVisibleChange:function(e){null==ne||ne(e),null==te||te(e)},getRawInputElement:function(){return ie}})))}));ee.SHOW_PARENT=S,ee.SHOW_CHILD=A,ee.Panel=J;const ne=ee;var te=t(27494),oe=t(86074),re=t(87520),ae=t(10460),ie=t(80243),le=t(10578),ce=t(97251),de=t(55242),se=t(31157),ue=t(68664),fe=t(91936),pe=t(44020),he=t(53460),ve=t(7629),me=t(40724),ge=t(57384),be=t(80050);const ye=function(e,n){const{getPrefixCls:t,direction:o,renderEmpty:a}=r.useContext(le.QO),i=n||o;return[t("select",e),t("cascader",e),i,a]};function Ce(e,n){return r.useMemo((()=>!!n&&r.createElement("span",{className:`${e}-checkbox-inner`})),[n])}var ke=t(30972),xe=t(27036),Se=t(88780);const Ae=(e,n,t)=>{let o=t;t||(o=n?r.createElement(ke.A,null):r.createElement(Se.A,null));const a=r.createElement("span",{className:`${e}-menu-item-loading-icon`},r.createElement(xe.A,{spin:!0}));return r.useMemo((()=>[o,a]),[o])};var we=t(11461),$e=t(23369),Oe=t(35073),Ee=t(68604),Ie=t(55968);const Ne=e=>{const{prefixCls:n,componentCls:t}=e,o=`${t}-menu-item`,r=`\n  &${o}-expand ${o}-expand-icon,\n  ${o}-loading-icon\n`;return[(0,Ee.gd)(`${n}-checkbox`,e),{[t]:{"&-checkbox":{top:0,marginInlineEnd:e.paddingXS},"&-menus":{display:"flex",flexWrap:"nowrap",alignItems:"flex-start",[`&${t}-menu-empty`]:{[`${t}-menu`]:{width:"100%",height:"auto",[o]:{color:e.colorTextDisabled}}}},"&-menu":{flexGrow:1,flexShrink:0,minWidth:e.controlItemWidth,height:e.dropdownHeight,margin:0,padding:e.menuPadding,overflow:"auto",verticalAlign:"top",listStyle:"none","-ms-overflow-style":"-ms-autohiding-scrollbar","&:not(:last-child)":{borderInlineEnd:`${(0,Oe.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},"&-item":Object.assign(Object.assign({},Ie.L9),{display:"flex",flexWrap:"nowrap",alignItems:"center",padding:e.optionPadding,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationMid}`,borderRadius:e.borderRadiusSM,"&:hover":{background:e.controlItemBgHover},"&-disabled":{color:e.colorTextDisabled,cursor:"not-allowed","&:hover":{background:"transparent"},[r]:{color:e.colorTextDisabled}},[`&-active:not(${o}-disabled)`]:{"&, &:hover":{fontWeight:e.optionSelectedFontWeight,backgroundColor:e.optionSelectedBg}},"&-content":{flex:"auto"},[r]:{marginInlineStart:e.paddingXXS,color:e.colorTextDescription,fontSize:e.fontSizeIcon},"&-keyword":{color:e.colorHighlight}})}}}]},Pe=e=>{const{componentCls:n,antCls:t}=e;return[{[n]:{width:e.controlWidth}},{[`${n}-dropdown`]:[{[`&${t}-select-dropdown`]:{padding:0}},Ne(e)]},{[`${n}-dropdown-rtl`]:{direction:"rtl"}},(0,we.G)(e)]},ze=e=>{const n=Math.round((e.controlHeight-e.fontSize*e.lineHeight)/2);return{controlWidth:184,controlItemWidth:111,dropdownHeight:180,optionSelectedBg:e.controlItemBgActive,optionSelectedFontWeight:e.fontWeightStrong,optionPadding:`${n}px ${e.paddingSM}px`,menuPadding:e.paddingXXS}},Me=(0,$e.OF)("Cascader",(e=>[Pe(e)]),ze),Te=(0,$e.Or)(["Cascader","Panel"],(e=>(e=>{const{componentCls:n}=e;return{[`${n}-panel`]:[Ne(e),{display:"inline-flex",border:`${(0,Oe.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,borderRadius:e.borderRadiusLG,overflowX:"auto",maxWidth:"100%",[`${n}-menus`]:{alignItems:"stretch"},[`${n}-menu`]:{height:"auto"},"&-empty":{padding:e.paddingXXS}}]}})(e)),ze);const We=function(e){const{prefixCls:n,className:t,multiple:o,rootClassName:a,notFoundContent:l,direction:c,expandIcon:d,disabled:s}=e,u=r.useContext(de.A),f=null!=s?s:u,[p,h,v,m]=ye(n,c),g=(0,se.A)(h),[b,y,C]=Me(h,g);Te(h);const k="rtl"===v,[x,S]=Ae(p,k,d),A=l||(null==m?void 0:m("Cascader"))||r.createElement(ce.A,{componentName:"Cascader"}),w=Ce(h,o);return b(r.createElement(J,Object.assign({},e,{checkable:w,prefixCls:h,className:i()(t,y,a,C,g),notFoundContent:A,direction:v,expandIcon:x,loadingIcon:S,disabled:f})))};var je=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};const{SHOW_CHILD:He,SHOW_PARENT:De}=ne;const _e=(e,n,t,a)=>{const i=[],l=e.toLowerCase();return n.forEach(((e,n)=>{0!==n&&i.push(" / ");let c=e[a.label];const d=typeof c;"string"!==d&&"number"!==d||(c=function(e,n,t){const a=e.toLowerCase().split(n).reduce(((e,t,r)=>0===r?[t]:[].concat((0,o.A)(e),[n,t])),[]),i=[];let l=0;return a.forEach(((n,o)=>{const a=l+n.length;let c=e.slice(l,a);l=a,o%2==1&&(c=r.createElement("span",{className:`${t}-menu-item-keyword`,key:`separator-${o}`},c)),i.push(c)})),i}(String(c),l,t)),i.push(c)})),i},Ke=r.forwardRef(((e,n)=>{var t;const{prefixCls:o,size:a,disabled:l,className:c,rootClassName:d,multiple:s,bordered:u=!0,transitionName:f,choiceTransitionName:p="",popupClassName:h,dropdownClassName:v,expandIcon:m,placement:g,showSearch:b,allowClear:y=!0,notFoundContent:C,direction:k,getPopupContainer:x,status:S,showArrow:A,builtinPlacements:w,style:$,variant:O}=e,E=je(e,["prefixCls","size","disabled","className","rootClassName","multiple","bordered","transitionName","choiceTransitionName","popupClassName","dropdownClassName","expandIcon","placement","showSearch","allowClear","notFoundContent","direction","getPopupContainer","status","showArrow","builtinPlacements","style","variant"]),I=(0,te.A)(E,["suffixIcon"]),{getPopupContainer:N,getPrefixCls:P,popupOverflow:z,cascader:M}=r.useContext(le.QO),{status:T,hasFeedback:W,isFormItemInput:j,feedbackIcon:H}=r.useContext(fe.$W),D=(0,ie.v)(T,S);const[_,K,R,V]=ye(o,k),B="rtl"===R,F=P(),L=(0,se.A)(_),[G,X,q]=(0,ve.A)(_,L),Q=(0,se.A)(K),[U]=Me(K,Q),{compactSize:Y,compactItemClassnames:J}=(0,be.RQ)(_,k),[Z,ee]=(0,pe.A)("cascader",O,u),ae=C||(null==V?void 0:V("Cascader"))||r.createElement(ce.A,{componentName:"Cascader"}),ke=i()(h||v,`${K}-dropdown`,{[`${K}-dropdown-rtl`]:"rtl"===R},d,L,Q,X,q),xe=r.useMemo((()=>{if(!b)return b;let e={render:_e};return"object"==typeof b&&(e=Object.assign(Object.assign({},e),b)),e}),[b]),Se=(0,ue.A)((e=>{var n;return null!==(n=null!=a?a:Y)&&void 0!==n?n:e})),we=r.useContext(de.A),$e=null!=l?l:we,[Oe,Ee]=Ae(_,B,m),Ie=Ce(K,s),Ne=(0,ge.A)(e.suffixIcon,A),{suffixIcon:Pe,removeIcon:ze,clearIcon:Te}=(0,me.A)(Object.assign(Object.assign({},e),{hasFeedback:W,feedbackIcon:H,showSuffixIcon:Ne,multiple:s,prefixCls:_,componentName:"Cascader"})),We=r.useMemo((()=>void 0!==g?g:B?"bottomRight":"bottomLeft"),[g,B]),He=!0===y?{clearIcon:Te}:y,[De]=(0,oe.YK)("SelectLike",null===(t=I.dropdownStyle)||void 0===t?void 0:t.zIndex);return U(G(r.createElement(ne,Object.assign({prefixCls:_,className:i()(!o&&K,{[`${_}-lg`]:"large"===Se,[`${_}-sm`]:"small"===Se,[`${_}-rtl`]:B,[`${_}-${Z}`]:ee,[`${_}-in-form-item`]:j},(0,ie.L)(_,D,W),J,null==M?void 0:M.className,c,d,L,Q,X,q),disabled:$e,style:Object.assign(Object.assign({},null==M?void 0:M.style),$)},I,{builtinPlacements:(0,he.A)(w,z),direction:R,placement:We,notFoundContent:ae,allowClear:He,showSearch:xe,expandIcon:Oe,suffixIcon:Pe,removeIcon:ze,loadingIcon:Ee,checkable:Ie,dropdownClassName:ke,dropdownPrefixCls:o||K,dropdownStyle:Object.assign(Object.assign({},I.dropdownStyle),{zIndex:De}),choiceTransitionName:(0,re.b)(F,"",p),transitionName:(0,re.b)(F,"slide-up",f),getPopupContainer:x||N,ref:n}))))}));const Re=(0,ae.A)(Ke);Ke.SHOW_PARENT=De,Ke.SHOW_CHILD=He,Ke.Panel=We,Ke._InternalPanelDoNotUseOrYouWillBeFired=Re;const Ve=Ke},68604:(e,n,t)=>{t.d(n,{Ay:()=>d,gd:()=>c});var o=t(35073),r=t(55968),a=t(42632),i=t(23369);const l=e=>{const{checkboxCls:n}=e,t=`${n}-wrapper`;return[{[`${n}-group`]:Object.assign(Object.assign({},(0,r.dF)(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[t]:Object.assign(Object.assign({},(0,r.dF)(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${t}`]:{marginInlineStart:0},[`&${t}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[n]:Object.assign(Object.assign({},(0,r.dF)(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${n}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${n}-inner`]:Object.assign({},(0,r.jk)(e))},[`${n}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${(0,o.zA)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${(0,o.zA)(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`\n        ${t}:not(${t}-disabled),\n        ${n}:not(${n}-disabled)\n      `]:{[`&:hover ${n}-inner`]:{borderColor:e.colorPrimary}},[`${t}:not(${t}-disabled)`]:{[`&:hover ${n}-checked:not(${n}-disabled) ${n}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${n}-checked:not(${n}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${n}-checked`]:{[`${n}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`\n        ${t}-checked:not(${t}-disabled),\n        ${n}-checked:not(${n}-disabled)\n      `]:{[`&:hover ${n}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[n]:{"&-indeterminate":{[`${n}-inner`]:{backgroundColor:`${e.colorBgContainer} !important`,borderColor:`${e.colorBorder} !important`,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}},[`&:hover ${n}-inner`]:{backgroundColor:`${e.colorBgContainer} !important`,borderColor:`${e.colorPrimary} !important`}}}},{[`${t}-disabled`]:{cursor:"not-allowed"},[`${n}-disabled`]:{[`&, ${n}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${n}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${n}-indeterminate ${n}-inner::after`]:{background:e.colorTextDisabled}}}]};function c(e,n){const t=(0,a.oX)(n,{checkboxCls:`.${e}`,checkboxSize:n.controlInteractiveSize});return[l(t)]}const d=(0,i.OF)("Checkbox",((e,n)=>{let{prefixCls:t}=n;return[c(t,e)]}))},85037:(e,n,t)=>{t.d(n,{A:()=>h});var o=t(30758),r=t(97500),a=t.n(r),i=t(10578),l=t(35073),c=t(55968),d=t(23369),s=t(42632);const u=e=>{const{componentCls:n,sizePaddingEdgeHorizontal:t,colorSplit:o,lineWidth:r,textPaddingInline:a,orientationMargin:i,verticalMarginInline:d}=e;return{[n]:Object.assign(Object.assign({},(0,c.dF)(e)),{borderBlockStart:`${(0,l.zA)(r)} solid ${o}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:d,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,l.zA)(r)} solid ${o}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,l.zA)(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${n}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,l.zA)(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${o}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,l.zA)(r)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${n}-with-text-left`]:{"&::before":{width:`calc(${i} * 100%)`},"&::after":{width:`calc(100% - ${i} * 100%)`}},[`&-horizontal${n}-with-text-right`]:{"&::before":{width:`calc(100% - ${i} * 100%)`},"&::after":{width:`calc(${i} * 100%)`}},[`${n}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:a},"&-dashed":{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:`${(0,l.zA)(r)} 0 0`},[`&-horizontal${n}-with-text${n}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${n}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:o,borderStyle:"dotted",borderWidth:`${(0,l.zA)(r)} 0 0`},[`&-horizontal${n}-with-text${n}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${n}-dotted`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${n}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${n}-with-text-left${n}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${n}-inner-text`]:{paddingInlineStart:t}},[`&-horizontal${n}-with-text-right${n}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${n}-inner-text`]:{paddingInlineEnd:t}}})}},f=(0,d.OF)("Divider",(e=>{const n=(0,s.oX)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[u(n)]}),(e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS})),{unitless:{orientationMargin:!0}});var p=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};const h=e=>{const{getPrefixCls:n,direction:t,divider:r}=o.useContext(i.QO),{prefixCls:l,type:c="horizontal",orientation:d="center",orientationMargin:s,className:u,rootClassName:h,children:v,dashed:m,variant:g="solid",plain:b,style:y}=e,C=p(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),k=n("divider",l),[x,S,A]=f(k),w=!!v,$="left"===d&&null!=s,O="right"===d&&null!=s,E=a()(k,null==r?void 0:r.className,S,A,`${k}-${c}`,{[`${k}-with-text`]:w,[`${k}-with-text-${d}`]:w,[`${k}-dashed`]:!!m,[`${k}-${g}`]:"solid"!==g,[`${k}-plain`]:!!b,[`${k}-rtl`]:"rtl"===t,[`${k}-no-default-orientation-margin-left`]:$,[`${k}-no-default-orientation-margin-right`]:O},u,h),I=o.useMemo((()=>"number"==typeof s?s:/^\d+$/.test(s)?Number(s):s),[s]),N=Object.assign(Object.assign({},$&&{marginLeft:I}),O&&{marginRight:I});return x(o.createElement("div",Object.assign({className:E,style:Object.assign(Object.assign({},null==r?void 0:r.style),y)},C,{role:"separator"}),v&&"vertical"!==c&&o.createElement("span",{className:`${k}-inner-text`,style:N},v)))}},30918:(e,n,t)=>{t.d(n,{p:()=>l});var o=t(94587),r=t(72785);function a(e,n){var t=new Set;return e.forEach((function(e){n.has(e)||t.add(e)})),t}function i(e){var n=e||{},t=n.disabled,o=n.disableCheckbox,r=n.checkable;return!(!t&&!o)||!1===r}function l(e,n,t,l){var c,d=[];c=l||i;var s,u=new Set(e.filter((function(e){var n=!!(0,r.A)(t,e);return n||d.push(e),n}))),f=new Map,p=0;return Object.keys(t).forEach((function(e){var n=t[e],o=n.level,r=f.get(o);r||(r=new Set,f.set(o,r)),r.add(n),p=Math.max(p,o)})),(0,o.Ay)(!d.length,"Tree missing follow keys: ".concat(d.slice(0,100).map((function(e){return"'".concat(e,"'")})).join(", "))),s=!0===n?function(e,n,t,o){for(var r=new Set(e),i=new Set,l=0;l<=t;l+=1)(n.get(l)||new Set).forEach((function(e){var n=e.key,t=e.node,a=e.children,i=void 0===a?[]:a;r.has(n)&&!o(t)&&i.filter((function(e){return!o(e.node)})).forEach((function(e){r.add(e.key)}))}));for(var c=new Set,d=t;d>=0;d-=1)(n.get(d)||new Set).forEach((function(e){var n=e.parent,t=e.node;if(!o(t)&&e.parent&&!c.has(e.parent.key))if(o(e.parent.node))c.add(n.key);else{var a=!0,l=!1;(n.children||[]).filter((function(e){return!o(e.node)})).forEach((function(e){var n=e.key,t=r.has(n);a&&!t&&(a=!1),l||!t&&!i.has(n)||(l=!0)})),a&&r.add(n.key),l&&i.add(n.key),c.add(n.key)}}));return{checkedKeys:Array.from(r),halfCheckedKeys:Array.from(a(i,r))}}(u,f,p,c):function(e,n,t,o,r){for(var i=new Set(e),l=new Set(n),c=0;c<=o;c+=1)(t.get(c)||new Set).forEach((function(e){var n=e.key,t=e.node,o=e.children,a=void 0===o?[]:o;i.has(n)||l.has(n)||r(t)||a.filter((function(e){return!r(e.node)})).forEach((function(e){i.delete(e.key)}))}));l=new Set;for(var d=new Set,s=o;s>=0;s-=1)(t.get(s)||new Set).forEach((function(e){var n=e.parent,t=e.node;if(!r(t)&&e.parent&&!d.has(e.parent.key))if(r(e.parent.node))d.add(n.key);else{var o=!0,a=!1;(n.children||[]).filter((function(e){return!r(e.node)})).forEach((function(e){var n=e.key,t=i.has(n);o&&!t&&(o=!1),a||!t&&!l.has(n)||(a=!0)})),o||i.delete(n.key),a&&l.add(n.key),d.add(n.key)}}));return{checkedKeys:Array.from(i),halfCheckedKeys:Array.from(a(l,i))}}(u,n.halfCheckedKeys,f,p,c),s}},72785:(e,n,t)=>{function o(e,n){return e[n]}t.d(n,{A:()=>o})},42048:(e,n,t)=>{t.d(n,{$9:()=>m,AZ:()=>h,Hj:()=>y,N5:()=>b,cG:()=>g,i7:()=>p,vH:()=>v});var o=t(69826),r=t(32277),a=t(66313),i=t(32511),l=t(73469),c=t(27494),d=t(94587),s=t(72785),u=["children"];function f(e,n){return"".concat(e,"-").concat(n)}function p(e,n){return null!=e?e:n}function h(e){var n=e||{},t=n.title||"title";return{title:t,_title:n._title||[t],key:n.key||"key",children:n.children||"children"}}function v(e){return function e(n){return(0,l.A)(n).map((function(n){if(!function(e){return e&&e.type&&e.type.isTreeNode}(n))return(0,d.Ay)(!n,"Tree/TreeNode can only accept TreeNode as children."),null;var t=n.key,o=n.props,r=o.children,l=(0,i.A)(o,u),c=(0,a.A)({key:t},l),s=e(r);return s.length&&(c.children=s),c})).filter((function(e){return e}))}(e)}function m(e,n,t){var o=h(t),a=o._title,i=o.key,l=o.children,d=new Set(!0===n?[]:n),s=[];return function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t.map((function(u,h){for(var v,m=f(o?o.pos:"0",h),g=p(u[i],m),b=0;b<a.length;b+=1){var y=a[b];if(void 0!==u[y]){v=u[y];break}}var C=Object.assign((0,c.A)(u,[].concat((0,r.A)(a),[i,l])),{title:v,key:g,parent:o,pos:m,children:null,data:u,isStart:[].concat((0,r.A)(o?o.isStart:[]),[0===h]),isEnd:[].concat((0,r.A)(o?o.isEnd:[]),[h===t.length-1])});return s.push(C),!0===n||d.has(g)?C.children=e(u[l]||[],C):C.children=[],C}))}(e),s}function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.initWrapper,a=n.processEntity,i=n.onProcessFinished,l=n.externalGetKey,c=n.childrenPropName,d=n.fieldNames,s=l||(arguments.length>2?arguments[2]:void 0),u={},v={},m={posEntities:u,keyEntities:v};return t&&(m=t(m)||m),function(e,n,t){var a,i=("object"===(0,o.A)(t)?t:{externalGetKey:t})||{},l=i.childrenPropName,c=i.externalGetKey,d=h(i.fieldNames),s=d.key,u=d.children,v=l||u;c?"string"==typeof c?a=function(e){return e[c]}:"function"==typeof c&&(a=function(e){return c(e)}):a=function(e,n){return p(e[s],n)},function t(o,i,l,c){var d=o?o[v]:e,s=o?f(l.pos,i):"0",u=o?[].concat((0,r.A)(c),[o]):[];if(o){var p=a(o,s),h={node:o,index:i,pos:s,key:p,parentPos:l.node?l.pos:null,level:l.level+1,nodes:u};n(h)}d&&d.forEach((function(e,n){t(e,n,{node:o,pos:s,level:l?l.level+1:-1},u)}))}(null)}(e,(function(e){var n=e.node,t=e.index,o=e.pos,r=e.key,i=e.parentPos,l=e.level,c={node:n,nodes:e.nodes,index:t,key:r,pos:o,level:l},d=p(r,o);u[o]=c,v[d]=c,c.parent=u[i],c.parent&&(c.parent.children=c.parent.children||[],c.parent.children.push(c)),a&&a(c,m)}),{externalGetKey:s,childrenPropName:c,fieldNames:d}),i&&i(m),m}function b(e,n){var t=n.expandedKeys,o=n.selectedKeys,r=n.loadedKeys,a=n.loadingKeys,i=n.checkedKeys,l=n.halfCheckedKeys,c=n.dragOverNodeKey,d=n.dropPosition,u=n.keyEntities,f=(0,s.A)(u,e);return{eventKey:e,expanded:-1!==t.indexOf(e),selected:-1!==o.indexOf(e),loaded:-1!==r.indexOf(e),loading:-1!==a.indexOf(e),checked:-1!==i.indexOf(e),halfChecked:-1!==l.indexOf(e),pos:String(f?f.pos:""),dragOver:c===e&&0===d,dragOverGapTop:c===e&&-1===d,dragOverGapBottom:c===e&&1===d}}function y(e){var n=e.data,t=e.expanded,o=e.selected,r=e.checked,i=e.loaded,l=e.loading,c=e.halfChecked,s=e.dragOver,u=e.dragOverGapTop,f=e.dragOverGapBottom,p=e.pos,h=e.active,v=e.eventKey,m=(0,a.A)((0,a.A)({},n),{},{expanded:t,selected:o,checked:r,loaded:i,loading:l,halfChecked:c,dragOver:s,dragOverGapTop:u,dragOverGapBottom:f,pos:p,active:h,key:v});return"props"in m||Object.defineProperty(m,"props",{get:function(){return(0,d.Ay)(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),e}}),m}}}]);