import{i}from"./lib-2dd17942.js";import{r}from"./index-76fb7be0.js";const a=o=>{const[n,t]=r.useState(!1);return r.useEffect(()=>{const e=window.matchMedia(o);t(e.matches);const s=c=>t(c.matches);return e.addEventListener("change",s),()=>e.removeEventListener("change",s)},[]),n},m=()=>a("(hover: none) and (pointer: coarse)")||i,d=()=>a("(pointer: coarse)");export{d as a,m as b,a as u};
//# sourceMappingURL=useMediaQuery-8e989222.js.map