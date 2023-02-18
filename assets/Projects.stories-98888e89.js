import{j as r}from"./jsx-runtime-ccada58e.js";import{F as ee}from"./Footer-54aaa8cf.js";import{P as te}from"./Page-397641ad.js";import{N as oe,P as F}from"./Navbar-435ef75a.js";import{S as se}from"./ScrollToTop-491c0d1c.js";import{a as re,B as ne}from"./index-72f284f9.js";import{B as b}from"./Button-a81ec639.js";import{S as ae,M as P}from"./MultiSelection-4bdea2de.js";import{S as ie}from"./SearchField-c8533b4c.js";import{b as le,t as v,c as ce}from"./TimelineItem-50835b9c.js";import{T as pe}from"./Timeline-ad4210c9.js";import{c as ue,b as de,a as me,s as fe}from"./timelineSortFuncs-ea2c891a.js";import{u as ge,a as he,d as B,e as L,R as $}from"./index.esm-ce798ad2.js";import{c}from"./cssUtils-1e7dba99.js";import{r as s}from"./index-f1f749bf.js";import{F as xe}from"./index-963fef9e.js";import{d as ye,n as Ce}from"./index.esm-fa6ef5c1.js";import"./useMediaQuery-f3cc2322.js";import"./index.esm-966ec57a.js";import"./iconBase-4e3618d4.js";import"./iframe-1e0db22d.js";import"../sb-preview/runtime.mjs";import"./logo-7f2f81ce.js";import"./mouseHover-f6e29944.js";import"./lib-32fe9ed5.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-34e645d9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./hoist-non-react-statics.cjs-691fe6cb.js";import"./index-96c5f47c.js";import"./index.esm-77211171.js";import"./react-router-hash-link.esm-2c818053.js";import"./features-animation-1377b90f.js";const je=e=>s.isValidElement(e)&&Boolean(e.props.children),S=je,Se=e=>s.isValidElement(e)&&S(e)&&s.Children.toArray(e.props.children).reduce((o,t)=>o||s.isValidElement(t),!1),h=Se,D=(e,o)=>s.Children.toArray(e).filter(o).map(t=>s.isValidElement(t)&&h(t)?s.cloneElement(t,{...t.props,children:D(t.props.children,o)}):t),z=D,G=(e,o)=>{let t;return s.Children.toArray(e).find((n,a,u)=>o(n,a,u)?(t=n,!0):s.isValidElement(n)&&h(n)?(t=G(n.props.children,o),typeof t<"u"):!1),t},be=G,H=(e,o)=>{s.Children.forEach(e,(t,n)=>{s.isValidElement(t)&&h(t)&&H(t.props.children,o),o(t,n)})},Te=H,I=(e,o)=>s.Children.toArray(e).map((t,n,a)=>s.isValidElement(t)&&h(t)?o(s.cloneElement(t,{...t.props,children:I(t.props.children,o)})):o(t,n,a)),ve=I,we=(e,o)=>s.Children.toArray(e).filter(o),Ee=we,Ne=e=>s.isValidElement(e)?typeof e.type=="string"?e.type:e.type.name:null,M=Ne,Oe=(e,o=[],t="rest")=>{const n=o.map(a=>typeof a=="string"?a:a.name);return s.Children.toArray(e).reduce((a,u)=>{const p=M(u),d=p!==null&&n.includes(p)?p:t;return typeof a[d]>"u"&&(a[d]=[]),a[d]=[...a[d],u],a},{})},Fe=Oe,A=e=>typeof e>"u"||e===null||typeof e=="boolean"||JSON.stringify(e)==="{}"?"":e.toString(),U=e=>!(e instanceof Array)&&!s.isValidElement(e)?A(e):s.Children.toArray(e).reduce((o,t)=>{let n="";return s.isValidElement(t)&&S(t)?n=U(t.props.children):s.isValidElement(t)&&!S(t)?n="":n=A(t),o.concat(n)},""),Pe=U,Be=e=>z(e,o=>s.isValidElement(o)),Le=Be,$e={...s.Children,deepFilter:z,deepFind:be,deepForEach:Te,deepMap:ve,filter:Ee,getElementName:M,groupByType:Fe,hasChildren:S,hasComplexChildren:h,onlyText:Pe,onlyValid:Le},R=Object.keys(le).map(e=>{const o=v.filter(t=>{var n;return(n=t.technologies)==null?void 0:n.includes(e)}).length;return{value:e,count:o,label:`${e} (${o})`}}).filter(e=>e.count>0).sort((e,o)=>o.count-e.count),V=Object.keys(ce).map(e=>{const o=v.filter(t=>t.category===e).length;return{value:e,count:o,label:`${e} (${o})`}}).filter(e=>e.count>0).sort((e,o)=>o.count-e.count),Ae=["Featured","Newest","Duration","Number of Technologies","Category"],j=Ae.map(e=>({value:e,label:e})),y=j[0],Re=e=>{switch(e){case"Duration":return fe;case"Category":return me;case"Number of Technologies":return de;case"Featured":return ue;default:return()=>0}},Ve=(e,o)=>{var n;const t=e.toLowerCase();return t.length===0&&!o.searchOnly||t.length>0&&(o.title.toLowerCase().includes(t)||$e.onlyText(o.body).toLowerCase().includes(t)||((n=o.technologies)==null?void 0:n.some(a=>a.toLowerCase().includes(t)))||o.category.toLowerCase().includes(t))},T=()=>{const[e,o]=s.useState([]),[t,n]=s.useState([]),[a,u]=s.useState(y),[p,d]=s.useState(""),q=s.useCallback(i=>{i.preventDefault(),d(i.target.value)},[]),[Q,w]=s.useState(!1),E=s.useCallback(()=>{o([]),n([]),u(y),d(""),w(!0),setTimeout(()=>{w(!1)},500)},[]),N=re(),[x,K]=ge("projectOptions",{technologies:[],categories:[],sort:y,searchText:""}),f=he();s.useEffect(()=>{if(f.toString()){if(f.get("reset"))return E(),N({hash:window.location.hash,search:""},{replace:!0}),()=>{};o([]),B(f.get("technologies")||"").forEach(i=>{const l=R.find(m=>m.value.toLowerCase()===i.toLowerCase());l&&o(m=>[...m,l])}),n([]),B(f.get("categories")||"").forEach(i=>{const l=V.find(m=>m.value.toLowerCase()===i.toLowerCase());l&&n(m=>[...m,l])}),u(j.find(i=>{var l;return i.value.toLowerCase()===((l=f.get("sort"))==null?void 0:l.toLowerCase())})||y),d(f.get("searchText")||"")}else o(x.technologies),n(x.categories),u(x.sort),d(x.searchText);return()=>{}},[]),s.useEffect(()=>{var i;K({technologies:e,categories:t,sort:a,searchText:p}),N({hash:window.location.hash,search:`?${new URLSearchParams(JSON.parse(JSON.stringify({technologies:L(e.map(l=>l.value))||void 0,categories:L(t.map(l=>l.value))||void 0,sort:a.value===((i=j[0])==null?void 0:i.value)?void 0:a.value,searchText:p||void 0}))).toString()}`},{replace:!0})},[p,t,a,e]);const X=s.useCallback(i=>{const l=e.map(g=>g.value),m=l.length===0||i.technologies&&i.technologies.filter(g=>l.includes(g)).length>0,O=t.map(g=>g.value),Z=O.length===0||O.includes(i.category);return Boolean(m&&Z&&Ve(p,i))},[p,t,e]),Y=s.useCallback(()=>window.scrollTo({top:0,behavior:"smooth"}),[]);return r.jsx("div",{children:r.jsxs(xe,{transitionDuration:200,children:[r.jsx("div",{className:c("flex justify-center mb-8"),children:r.jsx(b,{icon:r.jsx(ye,{}),isLight:!0,label:"GitHub",to:"https://github.com/Tim-W-James",tooltip:"Find more projects on GitHub"})}),r.jsxs("section",{"aria-label":"Search Controls",className:c("flex mx-auto items-center place-content-center mb-4 max-md:mb-8","flex-col"),children:[r.jsxs("div",{className:c("w-full flex gap-4"),children:[r.jsx(ie,{handleChange:q,searchText:p}),r.jsx(b,{className:c("!text-3xl !px-2 !py-2 !-mt-1"),icon:Q?r.jsx("span",{className:c("inline-block","leading-0","motion-safe:animate-spin"),children:r.jsx($,{})}):r.jsx($,{}),iconRight:!0,isLabelHidden:!0,isLight:!0,label:"Reset",mode:"button",onClick:E,tooltip:"Reset search and filter options"})]}),r.jsxs("div",{className:c("flex gap-4 w-full","flex-wrap"),children:[r.jsx("div",{className:c("z-30 grow min-w-fit"),children:r.jsx(ae,{options:j,selectedOption:a,setSelectedOption:u})}),r.jsx("div",{className:c("z-20 grow"),children:r.jsx(P,{options:V,placeholder:"Filter by category...",selectedOptions:t,setSelectedOptions:n})}),r.jsx("div",{className:c("z-10 grow"),children:r.jsx(P,{options:R,placeholder:"Filter by technology...",selectedOptions:e,setSelectedOptions:o})})]})]}),r.jsxs("section",{"aria-label":"Timeline",className:c("mb-8"),id:"timeline",children:[r.jsx(pe,{data:v,filterFunc:X,sortFunc:Re(a.value)}),r.jsx("div",{className:c("flex justify-center"),children:r.jsx(b,{icon:r.jsx(Ce,{}),isLight:!0,label:"Back to top",mode:"button",onClick:Y,tooltip:"Back to top"})})]})]})})},W=T;try{T.displayName="Projects",T.__docgenInfo={description:"",displayName:"Projects",props:{}}}catch{}const ht={component:W,parameters:{backgrounds:{disable:!0},controls:{hideNoControlsWarning:!0}}},C=()=>r.jsxs(ne,{children:[r.jsx(se,{}),r.jsx(oe,{}),r.jsx(te,{content:r.jsx(W,{}),description:F.description,title:F.title}),r.jsx(ee,{allowFixed:!0})]});var k,_,J;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Router>
    <ScrollToTop />
    <Navbar />
    <Page content={<ProjectsPage />} description={PROJECTS.description} title={PROJECTS.title} />
    <Footer allowFixed />
  </Router>`,...(J=(_=C.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};const xt=["Projects"];export{C as Projects,xt as __namedExportsOrder,ht as default};
//# sourceMappingURL=Projects.stories-98888e89.js.map