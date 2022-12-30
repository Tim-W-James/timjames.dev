import{r as u}from"./index-f1f749bf.js";var l={},h={get exports(){return l},set exports(t){l=t}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=u,y=Symbol.for("react.element"),x=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,S=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function m(t,s,n){var e,o={},r=null,a=null;n!==void 0&&(r=""+n),s.key!==void 0&&(r=""+s.key),s.ref!==void 0&&(a=s.ref);for(e in s)E.call(s,e)&&!O.hasOwnProperty(e)&&(o[e]=s[e]);if(t&&t.defaultProps)for(e in s=t.defaultProps,s)o[e]===void 0&&(o[e]=s[e]);return{$$typeof:y,type:t,key:r,ref:a,props:o,_owner:S.current}}c.Fragment=x;c.jsx=m;c.jsxs=m;(function(t){t.exports=c})(h);var f={},w={get exports(){return f},set exports(t){f=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var s={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var a=typeof r;if(a==="string"||a==="number")e.push(r);else if(Array.isArray(r)){if(r.length){var p=n.apply(null,r);p&&e.push(p)}}else if(a==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)s.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(w);const v=f,j=(t,s,n,e,o)=>v(t,s,n,e,o),R=()=>(t,s,n,e,o)=>v(t,s,n,e,o),d=t=>{const[s,n]=u.useState(!1);return u.useEffect(()=>{const e=window.matchMedia(t);n(e.matches);const o=r=>n(r.matches);return e.addEventListener("change",o),()=>e.removeEventListener("change",o)},[]),s},L=()=>d("(hover: none) and (pointer: coarse)"),N=()=>d("(pointer: coarse)");export{R as a,L as b,j as c,d,l as j,N as u};
//# sourceMappingURL=useMediaQuery-26fe9ddf.js.map
