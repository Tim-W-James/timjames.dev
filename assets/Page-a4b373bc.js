import{j as e,c}from"./cssUtils-de5e8e0f.js";import{G as E}from"./iconBase-4e3618d4.js";import{B as v}from"./Button-88a38e8d.js";import{r as p}from"./index-f1f749bf.js";import{_ as b}from"./inheritsLoose-c82a83d4.js";import{C as j}from"./index.esm-966ec57a.js";function S(r){return E({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.82-4.924A7 7 0 0 0 9.032 5.658l.975 1.755A5 5 0 0 1 17 12h-3l2.82 5.076zm-1.852 1.266l-.975-1.755A5 5 0 0 1 7 12h3L7.18 6.924a7 7 0 0 0 7.788 11.418z"}}]}]})(r)}const h=r=>(p.useEffect(()=>{console.error(new Error("Error loading page:",{cause:r.error}))},[r.error]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:c("fixed w-screen h-screen bg-dark-shades -z-10")}),e.jsxs("div",{className:c("text-center  mt-8"),children:[e.jsx("h1",{className:c("text-8xl pt-10 text-light-accent font-bold"),id:"error",children:"Error"}),e.jsxs("h2",{children:[e.jsx("span",{className:c("text-danger"),children:"Oops!"})," Something went wrong."]}),e.jsx("h3",{children:"Please reload the page and try again."}),e.jsx("br",{}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(v,{icon:e.jsx(S,{}),isLight:!0,label:"Reload",mode:"button",onClick:r.resetErrorBoundary,tooltip:"Reload the page"})})]})]}));try{h.displayName="ErrorFallback",h.__docgenInfo={description:"Fallback error display for any unrecoverable errors.",displayName:"ErrorFallback",props:{}}}catch{}const f="Tim James",g=" | ",R="Full-Stack Software Engineer 🚀",k="Hi, I'm Tim William James, a full-stack developer from Canberra, Australia. My core technologies include TypeScript, React, Tailwind, AWS, and ForgeRock.",F=(r,o,s)=>{p.useEffect(()=>{document.title=r?`${r}${g}${f}`:`${f}${g}${R}`;const a=document.querySelector("meta[name='description']");a&&a.setAttribute("content",o||k);const t=document.querySelector("link[rel='canonical']");t&&s&&t.setAttribute("href",s)},[s,o,r])};var N=function(o,s){return o===void 0&&(o=[]),s===void 0&&(s=[]),o.length!==s.length||o.some(function(a,t){return!Object.is(a,s[t])})},x={error:null},w=function(r){b(o,r);function o(){for(var a,t=arguments.length,l=new Array(t),n=0;n<t;n++)l[n]=arguments[n];return a=r.call.apply(r,[this].concat(l))||this,a.state=x,a.resetErrorBoundary=function(){for(var i,d=arguments.length,u=new Array(d),m=0;m<d;m++)u[m]=arguments[m];a.props.onReset==null||(i=a.props).onReset.apply(i,u),a.reset()},a}o.getDerivedStateFromError=function(t){return{error:t}};var s=o.prototype;return s.reset=function(){this.setState(x)},s.componentDidCatch=function(t,l){var n,i;(n=(i=this.props).onError)==null||n.call(i,t,l)},s.componentDidUpdate=function(t,l){var n=this.state.error,i=this.props.resetKeys;if(n!==null&&l.error!==null&&N(t.resetKeys,i)){var d,u;(d=(u=this.props).onResetKeysChange)==null||d.call(u,t.resetKeys,i),this.reset()}},s.render=function(){var t=this.state.error,l=this.props,n=l.fallbackRender,i=l.FallbackComponent,d=l.fallback;if(t!==null){var u={error:t,resetErrorBoundary:this.resetErrorBoundary};if(p.isValidElement(d))return d;if(typeof n=="function")return n(u);if(i)return p.createElement(i,u);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},o}(p.Component);const A=()=>e.jsx("div",{className:c("flex justify-center"),children:e.jsx("span",{className:c("inline-block","leading-0","animate-spin","text-light-accent text-7xl"),children:e.jsx(j,{})})}),y=({title:r,description:o,canonical:s,nonStandardLayout:a,content:t,fallback:l})=>(F(r,o,s),p.useEffect(()=>{const n=document.querySelector(".grecaptcha-badge");n&&(r==="Contact"?n.classList.add("captcha-show"):n.classList.remove("captcha-show"))},[r]),e.jsx(w,{FallbackComponent:h,onReset:()=>window.location.reload(),children:a?e.jsx(p.Suspense,{fallback:l,children:t}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:c("fixed bg-dark-shades w-screen h-screen -z-10")}),e.jsxs("div",{className:c("my-10 mx-auto pt-10 px-8 container"),children:[e.jsx("header",{className:c("flex mx-auto items-center place-content-center","px-8 text-center","flex-col"),children:e.jsxs("h1",{className:c("text-light-accent font-bold"),id:r,children:[r,e.jsx("hr",{className:c("radial-border")})]})}),e.jsx("main",{children:e.jsx(p.Suspense,{fallback:l||e.jsx(A,{}),children:t})})]})]})}));try{y.displayName="Page",y.__docgenInfo={description:"Wrapper for page content that sets the title.",displayName:"Page",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},canonical:{defaultValue:null,description:"",name:"canonical",required:!1,type:{name:"string"}},nonStandardLayout:{defaultValue:null,description:"",name:"nonStandardLayout",required:!1,type:{name:"boolean"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"Element"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Element"}}}}}catch{}export{y as P,S as R};
//# sourceMappingURL=Page-a4b373bc.js.map