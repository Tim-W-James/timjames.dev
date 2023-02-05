import{a as x,j as a,c as N}from"./cssUtils-781a8f60.js";import{u as q}from"./useMediaQuery-f3cc2322.js";import{s as d}from"./mouseHover-f6e29944.js";import{i as V,a as j}from"./lib-32fe9ed5.js";import{L as v}from"./index-72f284f9.js";const B="__acrylicButton_t95xa_1",k="__dark_t95xa_20",L="__light_t95xa_24",M="__safari_t95xa_31",n={_acrylicButton:B,_dark:k,_light:L,"shadow-inset-center":"_shadow-inset-center_t95xa_1",_safari:M},m=p=>{const{to:_,label:e,tooltip:s,icon:f,mode:h,isLight:b,isLabelHidden:i,iconRight:y,disabled:o,className:t,...g}=p,r=q(),u=x()(n._acrylicButton,e&&!i?"px-8":"px-4 h-fit",b&&!o?"acrylic-light":"acrylic-dark",b&&!o?n._light:n._dark,{[n._safari]:V||j}),c=a.jsx("span",{className:N("flex gap-2 items-center justify-between"),children:y?a.jsxs(a.Fragment,{children:[i?null:e,f]}):a.jsxs(a.Fragment,{children:[f,i?null:e]})});switch(h){case"route":return a.jsx(v,{"aria-label":e,className:u+(t?" "+t:""),onMouseMove:l=>d(l,!1,r),title:e&&s,to:_||"/",type:"button",children:c});case"button":return a.jsx("button",{"aria-label":e,className:u+(t?" "+t:""),disabled:o,onMouseMove:l=>d(l,!1,r),title:e&&s,type:"button",...g,children:c});default:return a.jsx("a",{"aria-label":e,className:u+" "+t,href:_||"/",onMouseMove:l=>d(l,!1,r),rel:"noreferrer",target:"_blank",title:e&&s,type:"button",children:c})}},S=m;try{m.displayName="Button",m.__docgenInfo={description:"Custom button component",displayName:"Button",props:{to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"route"'},{value:'"anchor"'}]}},isLight:{defaultValue:null,description:"",name:"isLight",required:!1,type:{name:"boolean"}},isLabelHidden:{defaultValue:null,description:"",name:"isLabelHidden",required:!1,type:{name:"boolean"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{S as B};
//# sourceMappingURL=Button-c9014e52.js.map