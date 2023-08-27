import{j as e,c as a}from"./cssUtils-d3b3e467.js";import{g,h as p}from"./index.esm-8319b366.js";import{L as t}from"./index-cf646f8d.js";import{r as n}from"./index-61bf1805.js";const l=({article:s,isCarouselItem:r})=>{const[d,i]=n.useState(!1),o=n.useCallback(()=>i(!0),[]);return e.jsx("section",{"aria-label":s.title,className:a("border p-4","border-dark-accent","acrylic-light","rounded-lg",r?"min-w-sm snap-center":"w-full max-w-sm"),children:e.jsxs("div",{className:a("flex gap-4","flex-col"),children:[e.jsxs(t,{to:`/blog/${s.slug}`,children:[e.jsx("img",{alt:"Thumbnail",className:a("border","rounded-lg","border-dark-accent","aspect-wide","text-center",{"animate-pulse bg-slate-700":!d}),height:175,onLoad:o,src:s.social_image,width:350}),e.jsx("div",{className:a("mr-2 text-right"),children:new Date(s.published_timestamp).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})})]}),e.jsxs("div",{children:[e.jsx(t,{"aria-labelledby":s.title,title:"Read blog",to:`/blog/${s.slug}`,children:e.jsx("h3",{className:a("mb-0 text-center font-bold text-light-accent"),id:s.title,children:s.title})}),e.jsx("hr",{className:a("radial-border")})]}),e.jsx("div",{className:a("flex justify-center gap-2","flex-wrap"),children:typeof s.tag_list!="string"?s.tag_list.map((c,m)=>e.jsx("div",{className:a("bg-main-brand px-2 font-bold","rounded-md"),children:c},m)):null}),e.jsxs("div",{className:a("mx-2 flex justify-between gap-4","flex-wrap"),children:[e.jsxs("div",{className:a("flex gap-4 text-xl","flex-wrap"),children:[e.jsxs("a",{className:a("hover:text-light-accent active:text-dark-accent"),href:s.url,rel:"noreferrer",target:"_blank",title:"Like on dev.to",children:[e.jsx(g,{})," ",s.public_reactions_count>0?s.public_reactions_count:""]}),e.jsxs("a",{className:a("hover:text-light-accent active:text-dark-accent"),href:s.url,rel:"noreferrer",target:"_blank",title:"Comment on dev.to",children:[e.jsx(p,{})," ",s.comments_count>0?s.comments_count:""]})]}),e.jsx(t,{to:`/blog/${s.slug}`,children:e.jsxs("div",{children:[s.reading_time_minutes," min read"]})})]})]})})},_=l;try{l.displayName="BlogCard",l.__docgenInfo={description:"Card to preview a blog article",displayName:"BlogCard",props:{article:{defaultValue:null,description:"",name:"article",required:!0,type:{name:"{ title: string; description: string; path: string; id: number; type_of: string; readable_publish_date: string; slug: string; url: string; reading_time_minutes: number; comments_count: number; ... 6 more ...; collection_id?: number | ... 1 more ... | undefined; }"}},isCarouselItem:{defaultValue:null,description:"",name:"isCarouselItem",required:!1,type:{name:"boolean"}}}}}catch{}const f=({isCarouselItem:s})=>e.jsx("div",{className:a("border p-4","border-dark-accent","acrylic-light","rounded-lg",s?"min-w-sm snap-center":"w-full max-w-sm"),children:e.jsxs("div",{className:a("flex gap-4","flex-col","animate-pulse"),children:[e.jsx("div",{className:a("aspect-wide","col-span-1 rounded bg-slate-700")}),e.jsx("div",{className:a("h-16","mt-10","col-span-1 rounded bg-slate-700")}),e.jsx("hr",{className:a("radial-border")}),e.jsx("div",{className:a("grid gap-4","grid-cols-5"),children:[...Array(5).keys()].map(r=>e.jsx("div",{className:a("col-span-1 h-6 rounded bg-slate-700")},r))}),e.jsxs("div",{className:a("grid gap-4","grid-cols-5"),children:[e.jsx("div",{className:a("col-span-2 h-4 rounded bg-slate-700")}),e.jsx("div",{className:a("col-span-2 h-4")}),e.jsx("div",{className:a("col-span-1 h-4 rounded bg-slate-700")})]})]})});try{BlogCardLoading.displayName="BlogCardLoading",BlogCardLoading.__docgenInfo={description:"Card to preview a blog article in a loading state",displayName:"BlogCardLoading",props:{isCarouselItem:{defaultValue:null,description:"",name:"isCarouselItem",required:!1,type:{name:"boolean"}}}}}catch{}export{_ as B,f as L};
//# sourceMappingURL=BlogCardLoading-53842a0c.js.map