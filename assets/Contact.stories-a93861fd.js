import{j as t,c as e}from"./cssUtils-09c0b384.js";import{F as d}from"./Footer-7327885d.js";import{P as p}from"./Page-eb528f6a.js";import{N as h,C as a}from"./Navbar-8f919d78.js";import{S as x}from"./ScrollToTop-7763aaf7.js";import{C as j,d as u,M as g,P as T,a as f,h as b,T as C,b as S}from"./ContactForm-1d9afe03.js";import{B as E}from"./index-9045005e.js";import{f as k,d as w,g as O,h as A}from"./index.esm-51a0c2e2.js";import{X as F,Y as R}from"./index.esm-568cca05.js";import{H as v}from"./react-router-hash-link.esm-6e31f6e2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./useMediaQuery-f3cc2322.js";import"./logo-7615857d.js";import"./motion-b4596a51.js";import"./mouseHover-f6e29944.js";import"./hoist-non-react-statics.cjs-63c3687f.js";import"./Button-35024ae4.js";import"./index-96c5f47c.js";import"./iconBase-4e3618d4.js";const o=({icon:n,body:c,url:m,tooltip:l})=>t.jsx("a",{href:m,rel:"noreferrer",target:"_blank",title:l,children:t.jsxs("div",{className:e("hover:text-light-accent active:text-dark-accent active:underline","inline-flex","items-center gap-1"),children:[n,t.jsx("p",{className:e("hyphens-none"),children:c})]})}),y=()=>t.jsxs("div",{children:[t.jsx(j,{onSubmit:u,showPromptOnClose:!0}),t.jsxs("h2",{className:e("text-center self-center mt-8 mx-auto w-fit"),id:"social",children:[t.jsxs(v,{className:e("hash-link"),onClick:()=>navigator.clipboard.writeText(`${location.href}#social-links`),to:"#social-links",children:["Social Links"," "]}),t.jsx("hr",{className:e("radial-border mb-4")})]}),t.jsxs("section",{className:e("text-center self-center mt-8 mx-auto w-fit text-xl grid gap-4","grid-cols-2"),children:[t.jsx(o,{body:t.jsx(t.Fragment,{children:"LinkedIn"}),icon:t.jsx(k,{}),tooltip:"timothy-william-james",url:"https://www.linkedin.com/in/timothy-william-james/"}),t.jsx(o,{body:t.jsx(t.Fragment,{children:"GitHub"}),icon:t.jsx(w,{}),tooltip:"Tim-W-James",url:"https://github.com/Tim-W-James"}),t.jsx(o,{body:t.jsx(t.Fragment,{children:"Twitter"}),icon:t.jsx(O,{}),tooltip:"@TimWJames",url:"https://twitter.com/TimWJames"}),t.jsx(o,{body:t.jsx(t.Fragment,{children:"Facebook"}),icon:t.jsx(A,{}),tooltip:"TimJames9800",url:"https://www.facebook.com/TimJames9800/"}),t.jsx(o,{body:t.jsx(t.Fragment,{children:"Steam"}),icon:t.jsx(F,{}),tooltip:"ExplosiveFridge",url:"https://steamcommunity.com/id/ExplosiveFridge"}),t.jsx(o,{body:t.jsx(t.Fragment,{children:"Spotify"}),icon:t.jsx(R,{}),tooltip:"TimJ",url:"https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y"})]}),t.jsxs("div",{className:e("text-xl text-center mt-4","basis-min-content"),children:[t.jsx(g,{})," Send me an email:"," ",t.jsx("a",{className:e("link","hyphens-none"),href:"mailto:tim.james.work9800@gmail.com",rel:"noreferrer",target:"_blank",title:"tim.james.work9800@gmail.com",children:"tim.james.work9800@gmail.com"})]})]}),s=y,X={component:s,parameters:{backgrounds:{disable:!0},controls:{hideNoControlsWarning:!0}}},r=()=>t.jsx(T,{store:f({reducer:{contactForm:S}}),children:t.jsx(E,{children:t.jsxs(b,{container:{element:"captcha-container",parameters:{badge:"bottomright",theme:"dark"}},reCaptchaKey:"6LeSqcEjAAAAAFql9Z3tRjnKODIneEJoGJzlj0iJ",children:[t.jsx(x,{}),t.jsx(h,{}),t.jsx(p,{content:t.jsx(s,{}),description:a.description,title:a.title}),t.jsx(d,{allowFixed:!0}),t.jsx("div",{className:e("captcha-show"),id:"captcha-container"}),t.jsx(C,{})]})})});var i;r.parameters={...r.parameters,storySource:{source:`() => <Provider store={configureStore({
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
  </Provider>`,...(i=r.parameters)==null?void 0:i.storySource}};const Q=["Contact"];export{r as Contact,Q as __namedExportsOrder,X as default};
//# sourceMappingURL=Contact.stories-a93861fd.js.map
