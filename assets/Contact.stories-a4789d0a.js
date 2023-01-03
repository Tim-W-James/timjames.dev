import{j as t,c as o}from"./cssUtils-31b06496.js";import{F as p}from"./Footer-7bbd7e9b.js";import{P as d}from"./Page-8cf8f9bd.js";import{N as h,C as s}from"./Navbar-0e3bc1a1.js";import{S as x}from"./ScrollToTop-37924711.js";import{C as j,a as u,h as g,k as T}from"./ContactForm-80f4d2b6.js";import{B as C}from"./index-b8809eaa.js";import{f,d as O,g as b,h as S}from"./index.esm-51a0c2e2.js";import{X as E,Y as A}from"./index.esm-568cca05.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./useMediaQuery-f3cc2322.js";import"./logo-7615857d.js";import"./motion-b4596a51.js";import"./mouseHover-f6e29944.js";import"./Button-c205ee83.js";import"./iconBase-4e3618d4.js";const e=({icon:n,body:c,url:l,tooltip:m})=>t.jsx("a",{href:l,rel:"noreferrer",target:"_blank",title:m,children:t.jsxs("div",{className:o("hover:text-light-accent active:text-dark-accent","inline-flex","items-center gap-1"),children:[n,t.jsx("p",{className:o("hyphens-none"),children:c})]})}),w=()=>t.jsxs("div",{children:[t.jsx(j,{onSubmit:u}),t.jsxs("h2",{className:o("text-light-accent text-center self-center mt-8 mx-auto w-fit"),id:"blog",children:["Social Links",t.jsx("hr",{className:o("radial-border mb-4")})]}),t.jsxs("section",{className:o("text-center self-center mt-8 mx-auto w-fit text-xl grid gap-4","grid-cols-2"),children:[t.jsx(e,{body:t.jsx(t.Fragment,{children:"LinkedIn"}),icon:t.jsx(f,{}),tooltip:"timothy-william-james",url:"https://www.linkedin.com/in/timothy-william-james/"}),t.jsx(e,{body:t.jsx(t.Fragment,{children:"GitHub"}),icon:t.jsx(O,{}),tooltip:"Tim-W-James",url:"https://github.com/Tim-W-James"}),t.jsx(e,{body:t.jsx(t.Fragment,{children:"Twitter"}),icon:t.jsx(b,{}),tooltip:"@TimWJames",url:"https://twitter.com/TimWJames"}),t.jsx(e,{body:t.jsx(t.Fragment,{children:"Facebook"}),icon:t.jsx(S,{}),tooltip:"TimJames9800",url:"https://www.facebook.com/TimJames9800/"}),t.jsx(e,{body:t.jsx(t.Fragment,{children:"Steam"}),icon:t.jsx(E,{}),tooltip:"ExplosiveFridge",url:"https://steamcommunity.com/id/ExplosiveFridge"}),t.jsx(e,{body:t.jsx(t.Fragment,{children:"Spotify"}),icon:t.jsx(A,{}),tooltip:"TimJ",url:"https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y"})]})]}),i=w,q={component:i,parameters:{backgrounds:{disable:!0},controls:{hideNoControlsWarning:!0}}},r=()=>t.jsx(C,{children:t.jsxs(g,{container:{element:"captcha-container",parameters:{badge:"bottomright",theme:"dark"}},reCaptchaKey:"6LeSqcEjAAAAAFql9Z3tRjnKODIneEJoGJzlj0iJ",children:[t.jsx(x,{}),t.jsx(h,{}),t.jsx(d,{content:t.jsx(i,{}),description:s.description,title:s.title}),t.jsx(p,{allowFixed:!0}),t.jsx("div",{className:o("captcha-show"),id:"captcha-container"}),t.jsx(T,{autoClose:5e3,closeOnClick:!0,draggable:!0,hideProgressBar:!1,newestOnTop:!1,pauseOnFocusLoss:!0,pauseOnHover:!0,position:"top-right",rtl:!1,theme:"dark"})]})});var a;r.parameters={...r.parameters,storySource:{source:`() => <Router>
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
      <ToastContainer autoClose={5000} closeOnClick draggable hideProgressBar={false} newestOnTop={false} pauseOnFocusLoss pauseOnHover position="top-right" rtl={false} theme="dark" />
    </GoogleReCaptchaProvider>
  </Router>`,...(a=r.parameters)==null?void 0:a.storySource}};const W=["Contact"];export{r as Contact,W as __namedExportsOrder,q as default};
//# sourceMappingURL=Contact.stories-a4789d0a.js.map