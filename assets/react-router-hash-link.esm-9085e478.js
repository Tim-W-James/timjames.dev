import{R as m}from"./index-f1f749bf.js";import{L as O,N as h}from"./index-03b8123c.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(){return s=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)};function k(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}var o="",u=null,f=null,y=null;function d(){o="",u!==null&&u.disconnect(),f!==null&&(window.clearTimeout(f),f=null)}function v(t){var e=["BUTTON","INPUT","SELECT","TEXTAREA"],r=["A","AREA"];return e.includes(t.tagName)&&!t.hasAttribute("disabled")||r.includes(t.tagName)&&t.hasAttribute("href")}function b(){var t=null;if(o==="#")t=document.body;else{var e=o.replace("#","");t=document.getElementById(e),t===null&&o==="#top"&&(t=document.body)}if(t!==null){y(t);var r=t.getAttribute("tabindex");return r===null&&!v(t)&&t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),r===null&&!v(t)&&(t.blur(),t.removeAttribute("tabindex")),d(),!0}return!1}function A(t){window.setTimeout(function(){b()===!1&&(u===null&&(u=new MutationObserver(b)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),f=window.setTimeout(function(){d()},t||1e4))},0)}function g(t){return m.forwardRef(function(e,r){var n="";typeof e.to=="string"&&e.to.includes("#")?n="#"+e.to.split("#").slice(1).join("#"):typeof e.to=="object"&&typeof e.to.hash=="string"&&(n=e.to.hash);var i={};t===h&&(i.isActive=function(l,c){return l&&l.isExact&&c.hash===n});function a(l){d(),o=e.elementId?"#"+e.elementId:n,e.onClick&&e.onClick(l),o!==""&&!l.defaultPrevented&&l.button===0&&(!e.target||e.target==="_self")&&!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)&&(y=e.scroll||function(c){return e.smooth?c.scrollIntoView({behavior:"smooth"}):c.scrollIntoView()},A(e.timeout))}var w=k(e,["scroll","smooth","timeout","elementId"]);return m.createElement(t,s({},i,w,{onClick:a,ref:r}),e.children)})}var I=g(O);g(h);export{I as H};
//# sourceMappingURL=react-router-hash-link.esm-9085e478.js.map
