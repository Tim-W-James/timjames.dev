import{j as t,c as e}from"./cssUtils-781a8f60.js";import{F as h}from"./Footer-8882f1c4.js";import{P as x}from"./Page-835a0d51.js";import{N as j,C as i}from"./Navbar-3b902243.js";import{S as u}from"./ScrollToTop-491c0d1c.js";import{C as T,d as b,P as f,a as g,h as C,T as S,b as k}from"./ContactForm-25ad41c3.js";import{B as E}from"./index-72f284f9.js";import{f as w,d as O,g as A,h as R}from"./index.esm-fa6ef5c1.js";import{d as v}from"./index.esm-bd036b60.js";import{X as _,Y as P}from"./index.esm-568cca05.js";import{H as y}from"./react-router-hash-link.esm-2c818053.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./useMediaQuery-f3cc2322.js";import"./logo-7615857d.js";import"./motion-42e193da.js";import"./mouseHover-f6e29944.js";import"./lib-3be3408a.js";import"./Button-bd2a90e8.js";import"./index-7f2f9e92.js";import"./index-96c5f47c.js";import"./hoist-non-react-statics.cjs-691fe6cb.js";import"./iconBase-4e3618d4.js";const o=({icon:l,body:a,url:p,tooltip:d})=>t.jsx("a",{"aria-label":a,href:p,rel:"noreferrer",target:"_blank",title:d,children:t.jsxs("div",{className:e("hover:text-light-accent active:text-dark-accent active:underline","inline-flex","items-center gap-1"),children:[l,t.jsx("p",{className:e("hyphens-none"),children:a})]})}),F=()=>t.jsxs("div",{children:[t.jsx(T,{onSubmit:b,showPromptOnClose:!0}),t.jsxs("h2",{className:e("text-center self-center mt-8 mx-auto w-fit"),id:"social-links",children:[t.jsxs(y,{className:e("hash-link"),onClick:()=>navigator.clipboard.writeText(`${location.href}#social-links`),to:"#social-links",children:["Social Links"," "]}),t.jsx("hr",{className:e("radial-border mb-4")})]}),t.jsxs("section",{"aria-labelledby":"social-links",className:e("text-center self-center mt-8 mx-auto w-fit text-xl grid gap-4","grid-cols-2"),children:[t.jsx(o,{body:"LinkedIn",icon:t.jsx(w,{}),tooltip:"timothy-william-james",url:"https://www.linkedin.com/in/timothy-william-james/"}),t.jsx(o,{body:"GitHub",icon:t.jsx(O,{}),tooltip:"Tim-W-James",url:"https://github.com/Tim-W-James"}),t.jsx(o,{body:"Twitter",icon:t.jsx(A,{}),tooltip:"@TimWJames",url:"https://twitter.com/TimWJames"}),t.jsx(o,{body:"Facebook",icon:t.jsx(R,{}),tooltip:"TimJames9800",url:"https://www.facebook.com/TimJames9800/"}),t.jsx(o,{body:"Steam",icon:t.jsx(_,{}),tooltip:"ExplosiveFridge",url:"https://steamcommunity.com/id/ExplosiveFridge"}),t.jsx(o,{body:"Spotify",icon:t.jsx(P,{}),tooltip:"TimJ",url:"https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y"})]}),t.jsxs("div",{className:e("text-xl text-center mt-4","basis-min-content"),children:[t.jsx(v,{})," Send me an email:"," ",t.jsx("a",{className:e("link","hyphens-none"),href:"mailto:tim.james.work9800@gmail.com",rel:"noreferrer",target:"_blank",title:"tim.james.work9800@gmail.com",children:"tim.james.work9800@gmail.com"})]})]}),m=F,rt={component:m,parameters:{backgrounds:{disable:!0},controls:{hideNoControlsWarning:!0}}},r=()=>t.jsx(f,{store:g({reducer:{contactForm:k}}),children:t.jsx(E,{children:t.jsxs(C,{container:{element:"captcha-container",parameters:{badge:"bottomright",theme:"dark"}},reCaptchaKey:"6LeSqcEjAAAAAFql9Z3tRjnKODIneEJoGJzlj0iJ",children:[t.jsx(u,{}),t.jsx(j,{}),t.jsx(x,{content:t.jsx(m,{}),description:i.description,title:i.title}),t.jsx(h,{allowFixed:!0}),t.jsx("div",{className:e("captcha-show"),id:"captcha-container"}),t.jsx(S,{})]})})});var s,n,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => <Provider store={configureStore({
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
    }} reCaptchaKey={{"STORYBOOK_SITE_RECAPTCHA_KEY":"6LeSqcEjAAAAAFql9Z3tRjnKODIneEJoGJzlj0iJ","BASE_URL":"./","MODE":"production","DEV":false,"PROD":true}["STORYBOOK_SITE_RECAPTCHA_KEY"] || ""}>
        <ScrollToTop />
        <Navbar />
        <Page content={<ContactPage />} description={CONTACT.description} title={CONTACT.title} />
        <Footer allowFixed />
        <div className={cn("captcha-show")} id="captcha-container" />
        <Toast />
      </GoogleReCaptchaProvider>
    </Router>
  </Provider>`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const at=["Contact"];export{r as Contact,at as __namedExportsOrder,rt as default};
//# sourceMappingURL=Contact.stories-9b9397b8.js.map
