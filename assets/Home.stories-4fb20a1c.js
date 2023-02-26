import{j as e}from"./jsx-runtime-ccada58e.js";import{F as te}from"./Footer-54aaa8cf.js";import{P as re}from"./Page-65e343ec.js";import{N as se,H as B}from"./Navbar-92ead621.js";import{S as ie}from"./ScrollToTop-491c0d1c.js";import{L as ae,B as oe}from"./index-72f284f9.js";import{L as le,l as ne}from"./Logo-b841b139.js";import{B as j}from"./Button-a81ec639.js";import{c as t,a as ce}from"./cssUtils-1e7dba99.js";import{i as de,j as D,k as me,l as pe,m as ue,f as he,d as xe,g as fe}from"./index.esm-a09efa98.js";import{e as ge,f as je,g as be}from"./index.esm-bd036b60.js";import{H as u}from"./react-router-hash-link.esm-2c818053.js";import{u as ye,e as we,d as ke,Q as Ne,c as _e}from"./sortFuncs-66e8e213.js";import{L as ve,B as Ce}from"./BlogCardLoading-64eb82b1.js";import{r as s}from"./index-f1f749bf.js";import{F as _}from"./index-963fef9e.js";import{a as Le,t as Ie,b}from"./TimelineItem-665f6999.js";import{T as Ae}from"./Timeline-38dadd0a.js";import{b as G}from"./useMediaQuery-f3cc2322.js";import{c as q,e as Fe,u as Re,P as Te,f as Ee,g as Me,L as Se,d as Pe,m as V}from"./features-animation-1377b90f.js";import{G as Q}from"./iconBase-4e3618d4.js";import{a as De,P as He}from"./ParallaxMountains-7f981085.js";import"./index.esm-966ec57a.js";import"./iframe-1d61bd34.js";import"../sb-preview/runtime.mjs";import"./logo-7f2f81ce.js";import"./mouseHover-f6e29944.js";import"./lib-32fe9ed5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-7f2f9e92.js";import"./index.esm-77211171.js";function W(){const r=s.useRef(!1);return q(()=>(r.current=!0,()=>{r.current=!1}),[]),r}function Be(){const r=W(),[a,i]=s.useState(0),o=s.useCallback(()=>{r.current&&i(a+1)},[a]);return[s.useCallback(()=>Fe.postRender(o),[o]),a]}class Ve extends s.Component{getSnapshotBeforeUpdate(a){const i=this.props.childRef.current;if(i&&a.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=i.offsetHeight||0,o.width=i.offsetWidth||0,o.top=i.offsetTop,o.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ze({children:r,isPresent:a}){const i=s.useId(),o=s.useRef(null),p=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:l,height:d,top:m,left:w}=p.current;if(a||!o.current||!l||!d)return;o.current.dataset.motionPopId=i;const x=document.createElement("style");return document.head.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${d}px !important;
            top: ${m}px !important;
            left: ${w}px !important;
          }
        `),()=>{document.head.removeChild(x)}},[a]),s.createElement(Ve,{isPresent:a,childRef:o,sizeRef:p},s.cloneElement(r,{ref:o}))}const A=({children:r,initial:a,isPresent:i,onExitComplete:o,custom:p,presenceAffectsLayout:l,mode:d})=>{const m=Re(Oe),w=s.useId(),x=s.useMemo(()=>({id:w,initial:a,isPresent:i,custom:p,onExitComplete:h=>{m.set(h,!0);for(const c of m.values())if(!c)return;o&&o()},register:h=>(m.set(h,!1),()=>m.delete(h))}),l?void 0:[i]);return s.useMemo(()=>{m.forEach((h,c)=>m.set(c,!1))},[i]),s.useEffect(()=>{!i&&!m.size&&o&&o()},[i]),d==="popLayout"&&(r=s.createElement(ze,{isPresent:i},r)),s.createElement(Te.Provider,{value:x},r)};function Oe(){return new Map}const k=r=>r.key||"";function $e(r,a){r.forEach(i=>{const o=k(i);a.set(o,i)})}function Ue(r){const a=[];return s.Children.forEach(r,i=>{s.isValidElement(i)&&a.push(i)}),a}const Ge=({children:r,custom:a,initial:i=!0,onExitComplete:o,exitBeforeEnter:p,presenceAffectsLayout:l=!0,mode:d="sync"})=>{p&&(d="wait");let[m]=Be();const w=s.useContext(Ee).forceRender;w&&(m=w);const x=W(),h=Ue(r);let c=h;const f=new Set,N=s.useRef(c),v=s.useRef(new Map).current,L=s.useRef(!0);if(q(()=>{L.current=!1,$e(h,v),N.current=c}),Me(()=>{L.current=!0,v.clear(),f.clear()}),L.current)return s.createElement(s.Fragment,null,c.map(n=>s.createElement(A,{key:k(n),isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:l,mode:d},n)));c=[...c];const I=N.current.map(k),H=h.map(k),K=I.length;for(let n=0;n<K;n++){const g=I[n];H.indexOf(g)===-1&&f.add(g)}return d==="wait"&&f.size&&(c=[]),f.forEach(n=>{if(H.indexOf(n)!==-1)return;const g=v.get(n);if(!g)return;const X=I.indexOf(n),Y=()=>{v.delete(n),f.delete(n);const Z=N.current.findIndex(ee=>ee.key===n);if(N.current.splice(Z,1),!f.size){if(N.current=h,x.current===!1)return;m(),o&&o()}};c.splice(X,0,s.createElement(A,{key:k(g),isPresent:!1,onExitComplete:Y,custom:a,presenceAffectsLayout:l,mode:d},g))}),c=c.map(n=>{const g=n.key;return f.has(g)?n:s.createElement(A,{key:k(n),isPresent:!0,presenceAffectsLayout:l,mode:d},n)}),s.createElement(s.Fragment,null,f.size?c:c.map(n=>s.cloneElement(n)))},qe="__carousel_1oxkg_1",Qe={_carousel:qe},z=30,F=()=>{const{status:r,data:a}=ye(["devdotto","articlesMeta",z,1],ke(z)),i=s.useCallback(()=>{var l;(l=document.getElementById("carousel"))==null||l.scrollBy({left:384,behavior:"smooth"})},[]),o=s.useCallback(()=>{var l;(l=document.getElementById("carousel"))==null||l.scrollBy({left:-384,behavior:"smooth"})},[]),p=s.useCallback(()=>navigator.clipboard.writeText(`${location.href.split("#")[0]||""}#blog`),[]);return e.jsxs("div",{children:[e.jsxs("h2",{className:t("self-center mb-4"),id:"blog",children:[e.jsxs(u,{className:t("hash-link"),onClick:p,to:"#blog",children:["Latest Blog Posts"," "]}),e.jsx("hr",{className:t("radial-border")})]}),e.jsxs("section",{"aria-labelledby":"blog",children:[e.jsx("div",{className:ce()("p-0 pb-4 mx-2","px-1/10","max-sm:px-1","overflow-auto snap-x","flex gap-4",Qe._carousel),id:"carousel",children:r==="loading"?[...Array(4).keys()].map(l=>e.jsx(ve,{isCarouselItem:!0},l)):r==="error"?e.jsxs("div",{className:t("text-center mb-8 text-xl"),children:[e.jsx("span",{className:t("text-danger"),children:"Something went wrong"})," - Try again later"]}):a.sort(we).map((l,d)=>e.jsx(Ce,{article:l,isCarouselItem:!0},d))}),e.jsxs("div",{className:t("flex mt-8 gap-4 justify-center items-center mx-auto"),children:[e.jsx(j,{icon:e.jsx(de,{}),isLabelHidden:!0,isLight:!0,label:"Scroll carousel left",mode:"button",onClick:o,tooltip:"Scroll carousel left"}),e.jsx(j,{icon:e.jsx(ge,{}),iconRight:!0,isLight:!0,label:"View All",mode:"route",to:"/blog?reset",tooltip:"View more articles"}),e.jsx(j,{icon:e.jsx(D,{}),isLabelHidden:!0,isLight:!0,label:"Scroll carousel right",mode:"button",onClick:i,tooltip:"Scroll carousel right"})]})]})]})};try{F.displayName="BlogPostsCarousel",F.__docgenInfo={description:"",displayName:"BlogPostsCarousel",props:{}}}catch{}const R=()=>{const r=s.useCallback(()=>navigator.clipboard.writeText(`${location.href.split("#")[0]||""}#about`),[]);return e.jsx("div",{className:t("flex mx-auto items-center place-content-center px-8 mb-8","flex-col"),children:e.jsxs(_,{transitionDuration:200,children:[e.jsxs("h2",{id:"about",children:[e.jsxs(u,{className:t("hash-link"),onClick:r,to:"#about",children:["About Me"," "]}),e.jsx("hr",{className:t("radial-border")})]}),e.jsx("br",{}),e.jsx("section",{"aria-labelledby":"about",children:e.jsxs("ul",{className:t("list-disc text-xl text-left"),children:[e.jsxs("li",{children:["💼 ",e.jsx("b",{className:t("font-bold"),children:"Software Engineer"})," at"," ",e.jsx("a",{"aria-label":"Agile Digital",className:t("link"),href:"https://github.com/agiledigital",rel:"noreferrer",target:"_blank",title:"Agile Digital Website",children:"Agile Digital"})," ","since 2021"]}),e.jsxs("li",{children:["🎓"," ",e.jsxs("b",{className:t("font-bold"),children:["Bachelor of Information Technology"," "]}),"at the"," ",e.jsx("a",{"aria-label":"Australian National University",className:t("link"),href:"https://www.anu.edu.au/",rel:"noreferrer",target:"_blank",title:"ANU",children:"Australian National University"})]}),e.jsxs("li",{children:["🗺️ Located in"," ",e.jsx("a",{"aria-label":"Canberra, Australia",className:t("link"),href:"https://www.google.com.au/maps/place/Canberra+ACT",rel:"noreferrer",target:"_blank",title:"Location",children:"Canberra, Australia"})]}),e.jsxs("li",{children:["📫 How to reach me:"," ",e.jsx("a",{className:t("link"),href:"mailto:tim.james.work9800@gmail.com",rel:"noreferrer",target:"_blank",title:"tim.james.work9800@gmail.com",children:"tim.james.work9800@gmail.com"})]}),e.jsxs("li",{children:["📄"," ",e.jsx("a",{className:t("link"),href:`${location.href}assets/pdfs/tim_james_cv.pdf`,rel:"noreferrer",target:"_blank",title:"CV / Resume",children:"CV / Resume"})]}),e.jsxs("li",{children:["🏆 View my certifications on"," ",e.jsx("a",{"aria-label":"Credly",className:t("link"),href:"https://www.credly.com/users/timjames/badges",rel:"noreferrer",target:"_blank",title:"Certifications",children:"Credly"})]})]})})]})})};try{R.displayName="AboutMe",R.__docgenInfo={description:"",displayName:"AboutMe",props:{}}}catch{}const T=()=>{const r=s.useCallback(()=>navigator.clipboard.writeText(`${location.href.split("#")[0]||""}#technologies`),[]);return e.jsx("div",{className:t("flex mt-8 mx-auto max-w-2xl items-center place-content-center","solid-background","flex-col"),children:e.jsxs(_,{transitionDuration:200,children:[e.jsxs("h2",{id:"technologies",children:[e.jsxs(u,{className:t("hash-link"),onClick:r,to:"#technologies",children:["Core Technologies"," "]}),e.jsx("hr",{className:t("radial-border")})]}),e.jsx("br",{}),e.jsx("section",{"aria-labelledby":"technologies",className:t("flex gap-4 text-xl items-center place-content-center","flex-row","flex-wrap"),children:Object.entries(Le).filter(([a,i])=>i.isCore).map(([a,i],o)=>e.jsxs(u,{"aria-label":a,className:t("inline-flex","items-center","hover:text-light-accent active:text-dark-accent","active:underline"),title:`View all my projects that use ${a}`,to:`/projects?${new URLSearchParams({technologies:a.toLowerCase()}).toString()}`,children:[i.icon?e.jsxs(e.Fragment,{children:[i.icon," "]}):null,a]},o))})]})})};try{T.displayName="CoreTechnologies",T.__docgenInfo={description:"",displayName:"CoreTechnologies",props:{}}}catch{}const E=()=>{const r=!G("(max-width: 767px)"),a=s.useCallback(()=>navigator.clipboard.writeText(`${location.href.split("#")[0]||""}#projects`),[]),i=s.useCallback(o=>Boolean(o.isFeatured),[]);return e.jsxs("div",{className:t("mb-8"),children:[e.jsx("div",{className:t("flex mx-auto items-center place-content-center px-8","flex-col"),children:e.jsxs("h2",{className:t("mt-8 mb-0"),id:"projects",children:[e.jsxs(u,{className:t("hash-link"),onClick:a,to:"#projects",children:["Major Projects"," "]}),r?null:e.jsx("hr",{className:t("radial-border")})]})}),e.jsxs("section",{"aria-labelledby":"projects",children:[e.jsx(Ae,{data:Ie,filterFunc:i}),e.jsx("div",{className:t("flex justify-center"),children:e.jsx(j,{icon:e.jsx(D,{}),iconRight:!0,isLight:!0,label:"More Projects",mode:"route",to:"/projects?reset",tooltip:"View more projects"})})]})]})};try{E.displayName="MajorProjects",E.__docgenInfo={description:"",displayName:"MajorProjects",props:{}}}catch{}const y=({heading:r,icon:a,children:i,startClosed:o})=>{const[p,l]=s.useState(!o),d=s.useCallback(()=>l(m=>!m),[]);return e.jsx("div",{className:t("mb-4"),children:e.jsxs(Se,{features:Pe,children:[e.jsxs(V.button,{"aria-expanded":p,className:t("mb-2 p-2 text-light-accent cursor-pointer min-w-0","hover:text-dark-accent active:text-main-brand","inline-flex w-full acrylic-dark items-center","rounded-md","gap-2"),onClick:d,children:[a,e.jsx("h3",{className:t("mb-1 grow text-left"),id:r,children:r}),p?e.jsx(je,{className:t("text-3xl")}):e.jsx(be,{className:t("text-3xl")})]}),e.jsx(Ge,{children:p?e.jsx(V.section,{animate:{opacity:1,y:0,transition:{duration:.25}},"aria-labelledby":r,className:t("hyphens-none text-left"),exit:{opacity:0,y:"-10%",transition:{duration:.25}},id:`${r}-content`,initial:{opacity:0,y:"-10%"},children:i}):""})]})})};try{y.displayName="Accordion",y.__docgenInfo={description:"",displayName:"Accordion",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"Element"}},startClosed:{defaultValue:null,description:"",name:"startClosed",required:!1,type:{name:"boolean"}}}}}catch{}const We=""+new URL("pdfs/tim_james_cv.pdf",import.meta.url).href;function Je(r){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M488 348.78h-70.24l-15.1 87.44-48.78-87.44H169v-50h190v-157h129zm-145-273v207H158.13l-48.79 87.47-15.11-87.47H24v-207zM136.724 215.324c0-10.139-12.257-15.214-19.425-8.046-7.168 7.168-2.093 19.426 8.046 19.426 6.285 0 11.38-5.095 11.38-11.38zm60.945 0c-.068-10.12-12.32-15.122-19.452-7.943-7.131 7.18-2.047 19.399 8.073 19.399 6.314 0 11.422-5.141 11.38-11.456zm60.945 0c0-10.139-12.257-15.214-19.425-8.046-7.169 7.168-2.093 19.426 8.046 19.426 6.284 0 11.38-5.095 11.38-11.38z"}}]})(r)}function Ke(r){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z",clipRule:"evenodd"}}]})(r)}const M=()=>{const r=s.useCallback(()=>navigator.clipboard.writeText(`${location.href.split("#")[0]||""}#skills`),[]);return e.jsxs("div",{className:t("flex mx-auto px-8 mt-8","flex-col"),children:[e.jsxs("h2",{className:t("self-center mb-4"),id:"skills",children:[e.jsxs(u,{className:t("hash-link"),onClick:r,to:"#skills",children:["Skills"," "]}),e.jsx("hr",{className:t("radial-border")})]}),e.jsx("br",{}),e.jsxs("section",{"aria-labelledby":"skills",className:t("text-left text-xl"),children:[e.jsx(y,{heading:"Agile Software Development",icon:e.jsx(me,{}),children:e.jsxs(e.Fragment,{children:["Familiar with"," ",e.jsx(b,{isInverted:!0,text:"Agile",tooltip:"Set of guiding principles for software development"})," ","principles and"," ",e.jsx(b,{isInverted:!0,text:"CI/CD",tooltip:"Continuous Integration and Delivery"}),". At"," ",e.jsx(u,{"aria-label":"Agile Digital",className:t("link"),title:"View my projects with Agile Digital",to:"projects?categories=Agile%2520Digital",children:"Agile Digital"}),", I have project experience working with teams using"," ",e.jsx(b,{isInverted:!0,text:"Kanban",tooltip:"Agile framework"}),". I collaborate effectively with other developers, frequently practicing pair programming and reviewing"," ",e.jsx(b,{isInverted:!0,text:"PR",tooltip:"Pull Request"}),"s. View my contributions on"," ",e.jsx("a",{"aria-label":"GitHub",className:t("link"),href:"https://github.com/Tim-W-James",rel:"noreferrer",target:"_blank",title:"View my contributions",children:"GitHub"}),"."]})}),e.jsx(y,{heading:"Attention to Detail",icon:e.jsx(Ke,{}),children:e.jsxs(e.Fragment,{children:["I strive for a exceptional level of quality in my work and proactively seek to improve my craft. I apply my creativity when"," building software, and enjoy collaborating with clients to deliver the best possible"," ",e.jsx(b,{isInverted:!0,text:"UX",tooltip:"User Experience"}),". To ensure my work is inclusive, I place an emphasis on accessibility."]})}),e.jsx(y,{heading:"Concise Communication",icon:e.jsx(Je,{}),children:e.jsxs(e.Fragment,{children:["I convey ideas clearly in both written and verbal forms, maintaining a"," ",e.jsx(ae,{"aria-label":"blog",className:t("link"),title:"View my blog",to:"/blog",children:"blog"})," ","and performing tech talks at"," ",e.jsx(u,{"aria-label":"Agile Digital",className:t("link"),title:"View my projects with Agile Digital",to:"projects?categories=Agile%2520Digital",children:"Agile Digital"}),". On a project with"," ",e.jsx(u,{"aria-label":"Toyota Finance Australia",className:t("link"),title:"View project details",to:"/projects?reset#Toyota Finance Australia",children:"Toyota Finance Australia"}),", I demonstrated my ability to work with a client of substantial scale. As a spokesperson for an"," ",e.jsx(u,{"aria-label":"ANU TechLauncher project",className:t("link"),title:"View project details",to:"/projects?reset#Siding Spring Observatory VR Experience",children:"ANU TechLauncher project"}),", I was granted the award for best pitch."]})}),e.jsx(y,{heading:"Quality Code",icon:e.jsx(pe,{}),children:e.jsxs(e.Fragment,{children:["I ensure my code is robust and maintainable by adopting a functional programming style. I employ strict typing across the tech stack, employ code quality tools like"," ",e.jsx("a",{"aria-label":"ESLint",className:t("link"),href:"https://www.npmjs.com/package/@tim-w-james/eslint-config",rel:"noreferrer",target:"_blank",title:"View my custom ESLint config",children:"ESLint"}),", and take a layered approach to testing. I take care to document my solutions, and continually address technical debt. By taking initiative with ",e.jsx(b,{isInverted:!0,text:"DX",tooltip:"Developer Experience"})," ","tooling and ",e.jsx(b,{isInverted:!0,text:"DevOps",tooltip:"Developer Operations"})," ","infrastructure I am able to boost my productivity. See my"," ",e.jsx(u,{"aria-label":"core tech stack",className:t("link"),title:"View my tech stack",to:"/#technologies",children:"core tech stack"}),"."]})}),e.jsx("hr",{className:t("radial-border my-8")}),e.jsx(y,{heading:"CV / Resume",icon:e.jsx(ue,{}),startClosed:!0,children:e.jsx("iframe",{height:"1000px",src:We,title:"CV",width:"100%"})}),e.jsx("hr",{className:t("radial-border mt-6")})]})]})};try{M.displayName="Skills",M.__docgenInfo={description:"",displayName:"Skills",props:{}}}catch{}const S=({shouldShrinkButtons:r})=>e.jsxs("section",{"aria-label":"Social Links",className:t("flex gap-4 justify-around items-center mt-4 max-w-2xl mx-auto","flex-row","flex-wrap"),children:[e.jsx(j,{icon:e.jsx(he,{className:t({"text-4xl":r})}),isLabelHidden:r,isLight:!0,label:"Linkedin",to:"https://www.linkedin.com/in/timothy-william-james/",tooltip:"Find me on Linkedin"}),e.jsx(j,{icon:e.jsx(xe,{className:t({"text-4xl":r})}),isLabelHidden:r,isLight:!0,label:"GitHub",to:"https://github.com/Tim-W-James",tooltip:"Find my projects on GitHub"}),e.jsx(j,{icon:e.jsx(fe,{className:t({"text-4xl":r})}),isLabelHidden:r,isLight:!0,label:"Twitter",to:"https://twitter.com/TimWJames",tooltip:"Follow me on Twitter @TimWJames"})]});try{S.displayName="SocialLinks",S.__docgenInfo={description:"",displayName:"SocialLinks",props:{shouldShrinkButtons:{defaultValue:null,description:"",name:"shouldShrinkButtons",required:!0,type:{name:"boolean"}}}}}catch{}const P=()=>{const r=G("(max-width: 670px)");return e.jsx(De,{children:e.jsxs("div",{className:t("text-center"),children:[e.jsx(He,{}),e.jsx(_,{transitionDuration:400,children:e.jsxs("header",{className:t("flex mt-56 items-center place-content-center","flex-col"),children:[e.jsx(le,{imageSrc:ne}),e.jsxs("h1",{id:"timjames",children:["👋 Hello,",e.jsx("br",{}),"I'm ",e.jsx("b",{className:t("text-light-accent"),children:"Tim James"}),e.jsx("hr",{className:t("radial-border")}),"Full-Stack Developer"]})]})}),e.jsxs("main",{children:[e.jsx(_,{transitionDuration:400,children:e.jsx(S,{shouldShrinkButtons:r})}),e.jsx(T,{}),e.jsxs("div",{className:t("solid-background"),children:[e.jsx("div",{className:t("pt-8 mx-auto container"),children:e.jsxs(_,{transitionDuration:400,children:[e.jsx(R,{}),e.jsx(F,{}),e.jsx(E,{}),e.jsx(M,{}),e.jsx("div",{className:t("flex justify-center mt-8"),children:e.jsx(j,{icon:e.jsx(D,{}),iconRight:!0,isLight:!0,label:"Contact Me",mode:"route",to:"/contact",tooltip:"Get in touch"})})]})}),e.jsx("div",{className:t("pb-16")})]})]})]})})},J=P;try{P.displayName="Home",P.__docgenInfo={description:"",displayName:"Home",props:{}}}catch{}const At={component:J,parameters:{backgrounds:{disable:!0},controls:{hideNoControlsWarning:!0}}},Xe=new Ne({defaultOptions:{queries:{staleTime:10*(60*1e3),cacheTime:60*(60*1e3)}}}),C=()=>e.jsx(_e,{client:Xe,children:e.jsxs(oe,{children:[e.jsx(ie,{}),e.jsx(se,{}),e.jsx(re,{content:e.jsx(J,{}),description:B.description,nonStandardLayout:!0,title:B.title}),e.jsx(te,{allowFixed:!0})]})});var O,$,U;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`() => <QueryClientProvider client={queryClient}>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Page content={<HomePage />} description={HOME.description} nonStandardLayout title={HOME.title} />
      <Footer allowFixed />
    </Router>
  </QueryClientProvider>`,...(U=($=C.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};const Ft=["Home"];export{C as Home,Ft as __namedExportsOrder,At as default};
//# sourceMappingURL=Home.stories-4fb20a1c.js.map