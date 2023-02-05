import{j as n,c as _,a as y}from"./cssUtils-781a8f60.js";import{l as W}from"./logo-7615857d.js";import{u as z,b as $}from"./useMediaQuery-f3cc2322.js";import{r as u,R as J}from"./index-f1f749bf.js";import{m as Q}from"./motion-42e193da.js";import{L as A,u as F}from"./index-72f284f9.js";import{s as U}from"./mouseHover-f6e29944.js";import{i as G,a as K}from"./lib-f6600d63.js";const B={title:void 0,description:void 0,routes:["/","/home","/about","/index","/index.html","/timjames.dev"]},O={title:"Projects",description:"View my past projects, career events, and more.",routes:["/projects","/timeline"]},R={title:"Blog",description:"View my blog - web development, tech tips, and more.",routes:["/blog","/articles"]},P={title:"Contact",description:"Find me on social media, or send me an email.",routes:["/contact"]};function j(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var M={click:"onClick",focusin:"onFocus",focusout:"onFocus",mousedown:"onMouseDown",mouseup:"onMouseUp",touchstart:"onTouchStart",touchend:"onTouchEnd"},D=function(e){var t,o=e.children,m=e.onClickAway,d=e.focusEvent,r=d===void 0?"focusin":d,i=e.mouseEvent,a=i===void 0?"click":i,T=e.touchEvent,f=T===void 0?"touchend":T,b=u.useRef(null),H=u.useRef(null),w=u.useRef(!1);u.useEffect(function(){return setTimeout(function(){w.current=!0},0),function(){w.current=!1}},[]);var x=function(c){return function(s){H.current=s.target;var l=o==null?void 0:o.props[c];l&&l(s)}};u.useEffect(function(){var c,s,l=(c=(s=b.current)===null||s===void 0?void 0:s.ownerDocument)!==null&&c!==void 0?c:document,p=function(h){w.current&&(b.current&&b.current.contains(h.target)||H.current===h.target||!l.contains(h.target)||m(h))};return l.addEventListener(a,p),l.addEventListener(f,p),l.addEventListener(r,p),function(){l.removeEventListener(a,p),l.removeEventListener(f,p),l.removeEventListener(r,p)}},[r,a,m,f]);var V=M[a],S=M[f],q=M[r];return J.Children.only(u.cloneElement(o,(j(t={ref:function(c){b.current=c;var s=o.ref;typeof s=="function"?s(c):s&&(s.current=c)}},q,x(q)),j(t,V,x(V)),j(t,S,x(S)),t)))};D.displayName="ClickAwayListener";const N=e=>n.jsx(Q.path,{fill:"transparent",strokeLinecap:"round",strokeWidth:"3",...e}),k={duration:.11},I=({toggle:e,isOpen:t,baseColor:o,hoverColor:m})=>{const[d,r]=u.useState(!1),i=z(),a=d&&!i?m:o;return n.jsx("button",{"aria-label":"Open Navigation Menu",onClick:e,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),type:"button",children:n.jsxs("svg",{height:"50",viewBox:"-1 -3 25 25",width:"50",children:[n.jsx(N,{animate:t?"open":"closed",initial:!1,transition:k,variants:{closed:{d:"M 2 2.5 L 20 2.5",stroke:a},open:{d:"M 3 16.5 L 17 2.5",stroke:a}}}),n.jsx(N,{animate:t?"open":"closed",d:"M 2 9.423 L 20 9.423",initial:!1,stroke:a,transition:k,variants:{closed:{opacity:1},open:{opacity:0}}}),n.jsx(N,{animate:t?"open":"closed",initial:!1,transition:k,variants:{closed:{d:"M 2 16.346 L 20 16.346",stroke:a},open:{d:"M 3 2.5 L 17 16.346",stroke:a}}})]})})};try{I.displayName="MenuToggle",I.__docgenInfo={description:"Description placeholder",displayName:"MenuToggle",props:{toggle:{defaultValue:null,description:"",name:"toggle",required:!0,type:{name:"() => void"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},baseColor:{defaultValue:null,description:"",name:"baseColor",required:!0,type:{name:"string"}},hoverColor:{defaultValue:null,description:"",name:"hoverColor",required:!0,type:{name:"string"}}}}}catch{}const X="__navbar_18hzy_1",Y="__navbarMenu_18hzy_8",L={_navbar:X,_navbarMenu:Y},C=({label:e,to:t,logo:o})=>n.jsxs(A,{className:_("subtitle whitespace-nowrap"),onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},to:t,type:"button",children:[n.jsx("img",{alt:"brand",className:_("inline-block","rounded-full","h-8 align-bottom"),src:o})," ",e]});try{C.displayName="NavbarBrand",C.__docgenInfo={description:"Brand for the navbar with a logo",displayName:"NavbarBrand",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"string"}},to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}}}}}catch{}const Z="__navbarLink_d2nb7_1",ee="__selected_d2nb7_26",te="__dropdownItem1_d2nb7_47",ne="__safari_d2nb7_47",oe="__dropdownItem2_d2nb7_70",re="__dropdownItem3_d2nb7_93",ae="__dropdownItem4_d2nb7_116",se="__dropdownItem5_d2nb7_139",g={_navbarLink:Z,_selected:ee,"shadow-inset-center":"_shadow-inset-center_d2nb7_1",_dropdownItem1:te,_safari:ne,"rotate-x":"_rotate-x_d2nb7_1",_dropdownItem2:oe,_dropdownItem3:re,_dropdownItem4:ae,_dropdownItem5:se},v=({label:e,to:t,order:o,isSelected:m,inHamburgerMenu:d})=>{const r=F(),i=z();return n.jsx(A,{className:y()("subtitle px-8 py-2",g._navbarLink,{[g._selected]:r.pathname===t||!!m},d?g[`_dropdownItem${o}`]:"",{[g._safari]:G||K}),onClick:()=>setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},0),onMouseMove:a=>U(a,!0,i),to:t||"/",type:"button",children:e})};try{v.displayName="NavbarLink",v.__docgenInfo={description:"Link in the navbar",displayName:"NavbarLink",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},order:{defaultValue:null,description:"",name:"order",required:!0,type:{name:"enum",value:[{value:"5"},{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!1,type:{name:"boolean"}},inHamburgerMenu:{defaultValue:null,description:"",name:"inHamburgerMenu",required:!1,type:{name:"boolean"}}}}}catch{}const E=()=>{const e=F(),[t,o]=u.useState(!1),m=$("(max-width: 1050px)"),d=n.jsxs(n.Fragment,{children:[n.jsx(v,{inHamburgerMenu:t,isSelected:B.routes.includes(e.pathname),label:"Home",order:1,to:B.routes[0]}),n.jsx(v,{inHamburgerMenu:t,isSelected:O.routes.includes(e.pathname),label:"Projects",order:2,to:O.routes[0]}),n.jsx(v,{inHamburgerMenu:t,isSelected:R.routes.some(i=>e.pathname.startsWith(i)),label:"Blog",order:3,to:R.routes[0]}),n.jsx(v,{inHamburgerMenu:t,isSelected:P.routes.some(i=>e.pathname.startsWith(i)),label:"Contact",order:4,to:P.routes[0]})]}),r=n.jsx(C,{label:"TimJames.dev",logo:W,to:"/"});return u.useEffect(()=>{o(!1)},[e]),m?n.jsx(D,{onClickAway:()=>o(!1),children:n.jsxs("nav",{className:_("fixed z-50 top-0 left-0"),children:[n.jsxs("div",{className:y()("flex justify-between w-screen content-center items-center py-2","flex-row",L._navbar),children:[r,n.jsx(I,{baseColor:"hsl(185deg 46% 52%)",hoverColor:"hsl(180deg 5% 91%)",isOpen:t,toggle:()=>o(!t)})]}),n.jsx("div",{className:y()(L._navbarMenu),children:t?d:null})]})}):n.jsx("nav",{className:y()(L._navbar,"w-screen fixed top-0 left-0 z-50"),children:n.jsx("div",{className:_("container mx-auto"),children:n.jsxs("div",{className:_("flex items-center justify-between","flex-row"),children:[r,n.jsx("div",{className:_("flex justify-around"),children:d})]})})})},ve=E;try{E.displayName="Navbar",E.__docgenInfo={description:"Responsive nav bar",displayName:"Navbar",props:{}}}catch{}export{R as B,P as C,B as H,ve as N,O as P};
//# sourceMappingURL=Navbar-e65408cc.js.map