import{r as v}from"./index-B3pBfn-S.js";var u={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=v,d=Symbol.for("react.element"),E=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,R=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,o){var r,n={},s=null,f=null;o!==void 0&&(s=""+o),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(f=e.ref);for(r in e)O.call(e,r)&&!b.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:d,type:t,key:s,ref:f,props:n,_owner:R.current}}p.Fragment=E;p.jsx=l;p.jsxs=l;u.exports=p;var S=u.exports;function _(t){var e,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(o=_(t[e]))&&(r&&(r+=" "),r+=o)}else for(o in t)t[o]&&(r&&(r+=" "),r+=o);return r}function m(){for(var t,e,o=0,r="",n=arguments.length;o<n;o++)(t=arguments[o])&&(e=_(t))&&(r&&(r+=" "),r+=e);return r}const j=(t,e,o,r,n,s,f,a,i,c)=>m(t,e,o,r,n,s,f,a,i,c),h=t=>(e,o,r,n,s,f,a,i,c,y)=>m(e,o,r,n,s,f,a,i,c,y),k=j;export{h as a,m as b,k as c,S as j};
