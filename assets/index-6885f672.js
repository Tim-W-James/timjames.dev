import{R as n}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const u=n.createContext({});function s(t){return e;function e(o){const r=c(o.components);return n.createElement(t,{...o,allComponents:r})}}function c(t){const e=n.useContext(u);return n.useMemo(()=>typeof t=="function"?t(e):{...e,...t},[e,t])}const i={};function C({components:t,children:e,disableParentContext:o}){let r=c(t);return o&&(r=t||i),n.createElement(u.Provider,{value:r},e)}export{u as MDXContext,C as MDXProvider,c as useMDXComponents,s as withMDXComponents};
//# sourceMappingURL=index-6885f672.js.map