import{j as t,c as e}from"./cssUtils-781a8f60.js";import{F as p}from"./Footer-8882f1c4.js";import{P as d}from"./Page-02849746.js";import{N as h,C as a}from"./Navbar-43ebe3b2.js";import{S as x}from"./ScrollToTop-64b74ea4.js";import{C as j,d as u,P as T,a as b,h as f,T as C,b as S}from"./ContactForm-d5305f73.js";import{B as g}from"./index-733821c1.js";import{f as k,d as E,g as w,h as O}from"./index.esm-fa6ef5c1.js";import{d as A}from"./index.esm-bd036b60.js";import{X as R,Y as v}from"./index.esm-568cca05.js";import{H as y}from"./react-router-hash-link.esm-14125319.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./useMediaQuery-f3cc2322.js";import"./logo-7615857d.js";import"./motion-bdaaa78f.js";import"./mouseHover-f6e29944.js";import"./lib-3be3408a.js";import"./hoist-non-react-statics.cjs-63c3687f.js";import"./Button-6851bd38.js";import"./index-7f2f9e92.js";import"./index-96c5f47c.js";import"./iconBase-4e3618d4.js";const o=({icon:c,body:i,url:m,tooltip:l})=>t.jsx("a",{"aria-label":i,href:m,rel:"noreferrer",target:"_blank",title:l,children:t.jsxs("div",{className:e("hover:text-light-accent active:text-dark-accent active:underline","inline-flex","items-center gap-1"),children:[c,t.jsx("p",{className:e("hyphens-none"),children:i})]})}),_=()=>t.jsxs("div",{children:[t.jsx(j,{onSubmit:u,showPromptOnClose:!0}),t.jsxs("h2",{className:e("text-center self-center mt-8 mx-auto w-fit"),id:"social-links",children:[t.jsxs(y,{className:e("hash-link"),onClick:()=>navigator.clipboard.writeText(`${location.href}#social-links`),to:"#social-links",children:["Social Links"," "]}),t.jsx("hr",{className:e("radial-border mb-4")})]}),t.jsxs("section",{"aria-labelledby":"social-links",className:e("text-center self-center mt-8 mx-auto w-fit text-xl grid gap-4","grid-cols-2"),children:[t.jsx(o,{body:"LinkedIn",icon:t.jsx(k,{}),tooltip:"timothy-william-james",url:"https://www.linkedin.com/in/timothy-william-james/"}),t.jsx(o,{body:"GitHub",icon:t.jsx(E,{}),tooltip:"Tim-W-James",url:"https://github.com/Tim-W-James"}),t.jsx(o,{body:"Twitter",icon:t.jsx(w,{}),tooltip:"@TimWJames",url:"https://twitter.com/TimWJames"}),t.jsx(o,{body:"Facebook",icon:t.jsx(O,{}),tooltip:"TimJames9800",url:"https://www.facebook.com/TimJames9800/"}),t.jsx(o,{body:"Steam",icon:t.jsx(R,{}),tooltip:"ExplosiveFridge",url:"https://steamcommunity.com/id/ExplosiveFridge"}),t.jsx(o,{body:"Spotify",icon:t.jsx(v,{}),tooltip:"TimJ",url:"https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y"})]}),t.jsxs("div",{className:e("text-xl text-center mt-4","basis-min-content"),children:[t.jsx(A,{})," Send me an email:"," ",t.jsx("a",{className:e("link","hyphens-none"),href:"mailto:tim.james.work9800@gmail.com",rel:"noreferrer",target:"_blank",title:"tim.james.work9800@gmail.com",children:"tim.james.work9800@gmail.com"})]})]}),n=_,et={component:n,parameters:{backgrounds:{disable:!0},controls:{hideNoControlsWarning:!0}}},r=()=>t.jsx(T,{store:b({reducer:{contactForm:S}}),children:t.jsx(g,{children:t.jsxs(f,{container:{element:"captcha-container",parameters:{badge:"bottomright",theme:"dark"}},reCaptchaKey:"6LeSqcEjAAAAAFql9Z3tRjnKODIneEJoGJzlj0iJ",children:[t.jsx(x,{}),t.jsx(h,{}),t.jsx(d,{content:t.jsx(n,{}),description:a.description,title:a.title}),t.jsx(p,{allowFixed:!0}),t.jsx("div",{className:e("captcha-show"),id:"captcha-container"}),t.jsx(C,{})]})})});var s;r.parameters={...r.parameters,storySource:{source:`() => <Provider store={configureStore({
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
  </Provider>`,...(s=r.parameters)==null?void 0:s.storySource}};const ot=["Contact"];export{r as Contact,ot as __namedExportsOrder,et as default};
//# sourceMappingURL=Contact.stories-4b634c38.js.map
