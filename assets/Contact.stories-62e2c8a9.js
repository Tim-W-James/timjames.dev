import{j as t,c as e}from"./cssUtils-d3b3e467.js";import{F as h}from"./Footer-52ec2097.js";import{N as x,C as s}from"./Navbar-e916251d.js";import{P as j}from"./Page-f7baa7d8.js";import{S as u}from"./ScrollToTop-11595ade.js";import{C as f,c as T,P as S,a as b,h as C,T as g,b as O}from"./submitFuncs-db23b075.js";import{B as k}from"./index-cf646f8d.js";import{F as E}from"./index-1ac04985.js";import{c as R,d as w,e as A,f as F}from"./index.esm-d0c3a75a.js";import{M as v}from"./index.esm-78c50c0b.js";import{S as P,a as _}from"./index.esm-ebe005ee.js";import{H as y}from"./react-router-hash-link.esm-47e5e217.js";import{r as N}from"./index-61bf1805.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./iframe-79274224.js";import"../sb-preview/runtime.js";import"./useMediaQuery-3280bb9b.js";import"./_commonjsHelpers-de833af9.js";import"./logo-7f2f81ce.js";import"./mouseHover-f6e29944.js";import"./iconBase-e697fdb3.js";import"./Button-932fda21.js";import"./index.esm-4446c677.js";import"./index-8d024dd2.js";import"./index-2801d3c9.js";const o=({icon:a,body:i,url:p,tooltip:d})=>t.jsx("a",{"aria-label":i,href:p,rel:"noreferrer",target:"_blank",title:d,children:t.jsxs("div",{className:e("hover:text-light-accent active:text-dark-accent active:underline","inline-flex","items-center gap-1"),children:[a,t.jsx("p",{className:e("hyphens-none"),children:i})]})}),B=()=>{const a=N.useCallback(()=>navigator.clipboard.writeText(`${location.href}#social-links`),[]);return t.jsx("div",{children:t.jsxs(E,{transitionDuration:200,children:[t.jsx(f,{onSubmit:T,showPromptOnClose:!0}),t.jsxs("h2",{className:e("mx-auto mt-8 w-fit self-center text-center"),id:"social-links",children:[t.jsxs(y,{className:e("hash-link"),onClick:a,to:"#social-links",children:["Social Links"," "]}),t.jsx("hr",{className:e("radial-border mb-4")})]}),t.jsxs("section",{"aria-labelledby":"social-links",className:e("mx-auto mt-8 grid w-fit gap-4 self-center text-center text-xl","grid-cols-2"),children:[t.jsx(o,{body:"LinkedIn",icon:t.jsx(R,{}),tooltip:"timothy-william-james",url:"https://www.linkedin.com/in/timothy-william-james/"}),t.jsx(o,{body:"GitHub",icon:t.jsx(w,{}),tooltip:"Tim-W-James",url:"https://github.com/Tim-W-James"}),t.jsx(o,{body:"Twitter",icon:t.jsx(A,{}),tooltip:"@TimWJames",url:"https://twitter.com/TimWJames"}),t.jsx(o,{body:"Facebook",icon:t.jsx(F,{}),tooltip:"TimJames9800",url:"https://www.facebook.com/TimJames9800/"}),t.jsx(o,{body:"Steam",icon:t.jsx(P,{}),tooltip:"ExplosiveFridge",url:"https://steamcommunity.com/id/ExplosiveFridge"}),t.jsx(o,{body:"Spotify",icon:t.jsx(_,{}),tooltip:"TimJ",url:"https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y"})]}),t.jsxs("div",{className:e("mt-4 text-center text-xl","basis-min-content"),children:[t.jsx(v,{})," Send me an email:"," ",t.jsx("a",{className:e("link","hyphens-none"),href:"mailto:tim.james.work9800@gmail.com",rel:"noreferrer",target:"_blank",title:"tim.james.work9800@gmail.com",children:"tim.james.work9800@gmail.com"})]})]})})},l=B,nt={component:l,parameters:{backgrounds:{disable:!0},controls:{hideNoControlsWarning:!0}}},r=()=>t.jsx(S,{store:b({reducer:{contactForm:O}}),children:t.jsx(k,{children:t.jsxs(C,{container:{element:"captcha-container",parameters:{badge:"bottomright",theme:"dark"}},reCaptchaKey:"6LeSqcEjAAAAAFql9Z3tRjnKODIneEJoGJzlj0iJ",children:[t.jsx(u,{}),t.jsx(x,{}),t.jsx(j,{description:s.description,title:s.title,children:t.jsx(l,{})}),t.jsx(h,{allowFixed:!0}),t.jsx("div",{className:e("captcha-show"),id:"captcha-container"}),t.jsx(g,{})]})})});var n,c,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => <Provider store={configureStore({
  reducer: {
    contactForm: contactFormReducer
  }
})}>
    <Router>
      <GoogleReCaptchaProvider container={{
      element: "captcha-container",
      parameters: {
        badge: "bottomright",
        theme: "dark"
      }
    }} reCaptchaKey={{"STORYBOOK_SITE_RECAPTCHA_KEY":"6LeSqcEjAAAAAFql9Z3tRjnKODIneEJoGJzlj0iJ","BASE_URL":"./","MODE":"production","DEV":false,"PROD":true,"SSR":false,"STORYBOOK":"true"}["STORYBOOK_SITE_RECAPTCHA_KEY"] || ""}>
        <ScrollToTop />
        <Navbar />
        <Page description={CONTACT.description} title={CONTACT.title}>
          <ContactPage />
        </Page>
        <Footer allowFixed />
        <div className={cn("captcha-show")} id="captcha-container" />
        <Toast />
      </GoogleReCaptchaProvider>
    </Router>
  </Provider>`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const ct=["Contact"];export{r as Contact,ct as __namedExportsOrder,nt as default};
//# sourceMappingURL=Contact.stories-62e2c8a9.js.map
