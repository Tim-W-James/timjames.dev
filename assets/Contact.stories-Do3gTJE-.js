import{j as t,c as e}from"./cssUtils-Dj2pf34W.js";import{F as h}from"./Footer-BGCcfuxc.js";import{N as x,C as s}from"./Navbar-CqIHl1sY.js";import{P as j}from"./Page-dxZoy5ie.js";import{S as u}from"./ScrollToTop-JWgYK9c0.js";import{C as b,c as f,P as g,a as k,h as T,T as w,b as C}from"./ContactForm-2TTIA8Rc.js";import{B as v}from"./index-CvhC5u5c.js";import{F as N}from"./index-OpE8ryFg.js";import{b as F,c as S,d as y}from"./index-CaI2xBWF.js";import{F as P}from"./index-GeKT1EU_.js";import{M as A}from"./index-CKawVnuG.js";import{b as E,c as R}from"./index-l6cHiWOH.js";import{H as J}from"./react-router-hash-link.esm-DJtgKKM8.js";import{r as O}from"./index-B3pBfn-S.js";import"./iframe-DTAT43SC.js";import"../sb-preview/runtime.js";import"./useMediaQuery-BBploh3g.js";import"./lib-eRFPSEAn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./logo-BsuX5xcP.js";import"./mouseHover-UyCq-Csl.js";import"./iconBase-D4H7oXXN.js";import"./Button-IaC728nH.js";import"./index-8ORhBcDl.js";import"./index-dIKOytT1.js";import"./index-MXY2PIJp.js";const o=({icon:a,body:i,url:p,tooltip:d})=>t.jsx("a",{"aria-label":i,href:p,rel:"noreferrer",target:"_blank",title:d,children:t.jsxs("div",{className:e("hover:text-light-accent active:text-dark-accent active:underline","inline-flex","items-center gap-1"),children:[a,t.jsx("p",{className:e("hyphens-none"),children:i})]})}),_=()=>{const a=O.useCallback(()=>navigator.clipboard.writeText(`${location.href}#social-links`),[]);return t.jsx("div",{children:t.jsxs(N,{transitionDuration:200,children:[t.jsx(b,{onSubmit:f,showPromptOnClose:!0}),t.jsxs("h2",{className:e("mx-auto mt-8 w-fit self-center text-center"),id:"social-links",children:[t.jsxs(J,{className:e("hash-link"),onClick:a,to:"#social-links",children:["Social Links"," "]}),t.jsx("hr",{className:e("radial-border mb-4")})]}),t.jsxs("section",{"aria-labelledby":"social-links",className:e("mx-auto mt-8 grid w-fit gap-4 self-center text-center text-xl","grid-cols-2"),children:[t.jsx(o,{body:"LinkedIn",icon:t.jsx(F,{}),tooltip:"timothy-william-james",url:"https://www.linkedin.com/in/timothy-william-james/"}),t.jsx(o,{body:"GitHub",icon:t.jsx(S,{}),tooltip:"Tim-W-James",url:"https://github.com/Tim-W-James"}),t.jsx(o,{body:"Twitter",icon:t.jsx(P,{}),tooltip:"@TimWJames",url:"https://twitter.com/TimWJames"}),t.jsx(o,{body:"Facebook",icon:t.jsx(y,{}),tooltip:"TimJames9800",url:"https://www.facebook.com/TimJames9800/"}),t.jsx(o,{body:"Steam",icon:t.jsx(E,{}),tooltip:"ExplosiveFridge",url:"https://steamcommunity.com/id/ExplosiveFridge"}),t.jsx(o,{body:"Spotify",icon:t.jsx(R,{}),tooltip:"TimJ",url:"https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y"})]}),t.jsxs("div",{className:e("mt-4 text-center text-xl","basis-min-content"),children:[t.jsx(A,{})," Send me an email:"," ",t.jsx("a",{className:e("link","hyphens-none"),href:"mailto:tim.james.work9800@gmail.com",rel:"noreferrer",target:"_blank",title:"tim.james.work9800@gmail.com",children:"tim.james.work9800@gmail.com"})]}),t.jsxs("div",{className:e("mt-4 text-center text-xl","basis-min-content"),children:["ABN:"," ",t.jsx("a",{className:e("link","hyphens-none"),href:"https://abr.business.gov.au/ABN/View?id=31445198482",rel:"noreferrer",target:"_blank",title:"ABN Lookup",children:"31 445 198 482"})]})]})})},l=_,ct={component:l,parameters:{backgrounds:{disable:!0},controls:{hideNoControlsWarning:!0}}},r=()=>t.jsx(g,{store:k({reducer:{contactForm:C}}),children:t.jsx(v,{children:t.jsxs(T,{container:{element:"captcha-container",parameters:{badge:"bottomright",theme:"dark"}},reCaptchaKey:"6LeSqcEjAAAAAFql9Z3tRjnKODIneEJoGJzlj0iJ",children:[t.jsx(u,{}),t.jsx(x,{}),t.jsx(j,{description:s.description,title:s.title,children:t.jsx(l,{})}),t.jsx(h,{allowFixed:!0}),t.jsx("div",{className:e("captcha-show"),id:"captcha-container"}),t.jsx(w,{})]})})});var n,c,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => <Provider store={configureStore({
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
    }} reCaptchaKey={import.meta.env["STORYBOOK_SITE_RECAPTCHA_KEY"] || ""}>
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
  </Provider>`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const mt=["Contact"];export{r as Contact,mt as __namedExportsOrder,ct as default};
