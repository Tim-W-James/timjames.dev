import{s as p}from"./index-d475d2ea.js";import{M as U}from"./index-a6c8ef6f.js";import"./_commonjsHelpers-042e6b4d.js";const{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,{once:M,logger:P}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{FORCE_REMOUNT:m,IGNORED_EXCEPTION:B,SET_CURRENT_STORY:Y,STORY_RENDER_PHASE_CHANGED:x}=__STORYBOOK_MODULE_CORE_EVENTS__;var K=(e=>(e.DONE="done",e.ERROR="error",e.ACTIVE="active",e.WAITING="waiting",e))(K||{}),g={CALL:"storybook/instrumenter/call",SYNC:"storybook/instrumenter/sync",START:"storybook/instrumenter/start",BACK:"storybook/instrumenter/back",GOTO:"storybook/instrumenter/goto",NEXT:"storybook/instrumenter/next",END:"storybook/instrumenter/end"},w={start:!1,back:!1,goto:!1,next:!1,end:!1},b=new Error("This function ran after the play function completed. Did you forget to `await` it?"),I=e=>Object.prototype.toString.call(e)==="[object Object]",G=e=>Object.prototype.toString.call(e)==="[object Module]",V=e=>{if(!I(e)&&!G(e))return!1;if(e.constructor===void 0)return!0;let t=e.constructor.prototype;return!(!I(t)||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)},$=e=>{try{return new e.constructor}catch{return{}}},E=()=>({renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,ancestors:[],playUntil:void 0,resolvers:{},syncTimeout:void 0}),N=(e,t=!1)=>{let o=(t?e.shadowCalls:e.calls).filter(i=>i.retain);if(!o.length)return;let l=new Map(Array.from(e.callRefsByResult.entries()).filter(([,i])=>i.retain));return{cursor:o.length,calls:o,callRefsByResult:l}},k=class{constructor(){this.initialized=!1,this.channel=L.getChannel(),this.state=p.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};let e=({storyId:s,isPlaying:r=!0,isDebugging:n=!1})=>{let a=this.getState(s);this.setState(s,{...E(),...N(a,n),shadowCalls:n?a.shadowCalls:[],chainedCallIds:n?a.chainedCallIds:new Set,playUntil:n?a.playUntil:void 0,isPlaying:r,isDebugging:n}),this.sync(s)};this.channel.on(m,e),this.channel.on(x,({storyId:s,newPhase:r})=>{let{isDebugging:n}=this.getState(s);this.setState(s,{renderPhase:r}),r==="preparing"&&n&&e({storyId:s}),r==="playing"&&e({storyId:s,isDebugging:n}),r==="played"&&this.setState(s,{isLocked:!1,isPlaying:!1,isDebugging:!1}),r==="errored"&&this.setState(s,{isLocked:!1,isPlaying:!1})}),this.channel.on(Y,()=>{this.initialized?this.cleanup():this.initialized=!0});let t=({storyId:s,playUntil:r})=>{this.getState(s).isDebugging||this.setState(s,({calls:a})=>({calls:[],shadowCalls:a.map(c=>({...c,status:"waiting"})),isDebugging:!0}));let n=this.getLog(s);this.setState(s,({shadowCalls:a})=>{var d;if(r||!n.length)return{playUntil:r};let c=a.findIndex(h=>h.id===n[0].callId);return{playUntil:(d=a.slice(0,c).filter(h=>h.interceptable&&!h.ancestors.length).slice(-1)[0])==null?void 0:d.id}}),this.channel.emit(m,{storyId:s,isDebugging:!0})},o=({storyId:s})=>{var a;let r=this.getLog(s).filter(c=>!c.ancestors.length),n=r.reduceRight((c,d,h)=>c>=0||d.status==="waiting"?c:h,-1);t({storyId:s,playUntil:(a=r[n-1])==null?void 0:a.callId})},l=({storyId:s,callId:r})=>{var O;let{calls:n,shadowCalls:a,resolvers:c}=this.getState(s),d=n.find(({id:u})=>u===r),h=a.find(({id:u})=>u===r);if(!d&&h&&Object.values(c).length>0){let u=(O=this.getLog(s).find(f=>f.status==="waiting"))==null?void 0:O.callId;h.id!==u&&this.setState(s,{playUntil:h.id}),Object.values(c).forEach(f=>f())}else t({storyId:s,playUntil:r})},i=({storyId:s})=>{var n;let{resolvers:r}=this.getState(s);if(Object.values(r).length>0)Object.values(r).forEach(a=>a());else{let a=(n=this.getLog(s).find(c=>c.status==="waiting"))==null?void 0:n.callId;a?t({storyId:s,playUntil:a}):_({storyId:s})}},_=({storyId:s})=>{this.setState(s,{playUntil:void 0,isDebugging:!1}),Object.values(this.getState(s).resolvers).forEach(r=>r())};this.channel.on(g.START,t),this.channel.on(g.BACK,o),this.channel.on(g.GOTO,l),this.channel.on(g.NEXT,i),this.channel.on(g.END,_)}getState(e){return this.state[e]||E()}setState(e,t){let o=this.getState(e),l=typeof t=="function"?t(o):t;this.state={...this.state,[e]:{...o,...l}},p.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}cleanup(){this.state=Object.entries(this.state).reduce((t,[o,l])=>{let i=N(l);return i&&(t[o]=Object.assign(E(),i)),t},{});let e={controlStates:w,logItems:[]};this.channel.emit(g.SYNC,e),p.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}getLog(e){let{calls:t,shadowCalls:o}=this.getState(e),l=[...o];t.forEach((_,s)=>{l[s]=_});let i=new Set;return l.reduceRight((_,s)=>(s.args.forEach(r=>{r!=null&&r.__callId__&&i.add(r.__callId__)}),s.path.forEach(r=>{r.__callId__&&i.add(r.__callId__)}),(s.interceptable||s.exception)&&!i.has(s.id)&&(_.unshift({callId:s.id,status:s.status,ancestors:s.ancestors}),i.add(s.id)),_),[])}instrument(e,t){if(!V(e))return e;let{mutate:o=!1,path:l=[]}=t;return Object.keys(e).reduce((i,_)=>{let s=e[_];return typeof s!="function"?(i[_]=this.instrument(s,{...t,path:l.concat(_)}),i):typeof s.__originalFn__=="function"?(i[_]=s,i):(i[_]=(...r)=>this.track(_,s,r,t),i[_].__originalFn__=s,Object.defineProperty(i[_],"name",{value:_,writable:!1}),Object.keys(s).length>0&&Object.assign(i[_],this.instrument({...s},{...t,path:l.concat(_)})),i)},o?e:$(e))}track(e,t,o,l){var u,f,S,T;let i=((u=o==null?void 0:o[0])==null?void 0:u.__storyId__)||((T=(S=(f=p.__STORYBOOK_PREVIEW__)==null?void 0:f.selectionStore)==null?void 0:S.selection)==null?void 0:T.storyId),{cursor:_,ancestors:s}=this.getState(i);this.setState(i,{cursor:_+1});let r=`${s.slice(-1)[0]||i} [${_}] ${e}`,{path:n=[],intercept:a=!1,retain:c=!1}=l,d=typeof a=="function"?a(e,n):a,h={id:r,cursor:_,storyId:i,ancestors:s,path:n,method:e,args:o,interceptable:d,retain:c},O=(d&&!s.length?this.intercept:this.invoke).call(this,t,h,l);return this.instrument(O,{...l,mutate:!0,path:[{__callId__:h.id}]})}intercept(e,t,o){let{chainedCallIds:l,isDebugging:i,playUntil:_}=this.getState(t.storyId),s=l.has(t.id);return!i||s||_?(_===t.id&&this.setState(t.storyId,{playUntil:void 0}),this.invoke(e,t,o)):new Promise(r=>{this.setState(t.storyId,({resolvers:n})=>({isLocked:!1,resolvers:{...n,[t.id]:r}}))}).then(()=>(this.setState(t.storyId,r=>{let{[t.id]:n,...a}=r.resolvers;return{isLocked:!0,resolvers:a}}),this.invoke(e,t,o)))}invoke(e,t,o){let{callRefsByResult:l,renderPhase:i}=this.getState(t.storyId),_=n=>{var a,c;if(l.has(n))return l.get(n);if(n instanceof Array)return n.map(_);if(n instanceof Date)return{__date__:{value:n.toISOString()}};if(n instanceof Error){let{name:d,message:h,stack:O}=n;return{__error__:{name:d,message:h,stack:O}}}if(n instanceof RegExp){let{flags:d,source:h}=n;return{__regexp__:{flags:d,source:h}}}if(n instanceof p.window.HTMLElement){let{prefix:d,localName:h,id:O,classList:u,innerText:f}=n,S=Array.from(u);return{__element__:{prefix:d,localName:h,id:O,classNames:S,innerText:f}}}return typeof n=="function"?{__function__:{name:n.name}}:typeof n=="symbol"?{__symbol__:{description:n.description}}:typeof n=="object"&&((a=n==null?void 0:n.constructor)!=null&&a.name)&&((c=n==null?void 0:n.constructor)==null?void 0:c.name)!=="Object"?{__class__:{name:n.constructor.name}}:Object.prototype.toString.call(n)==="[object Object]"?Object.fromEntries(Object.entries(n).map(([d,h])=>[d,_(h)])):n},s={...t,args:t.args.map(_)};t.path.forEach(n=>{n!=null&&n.__callId__&&this.setState(t.storyId,({chainedCallIds:a})=>({chainedCallIds:new Set(Array.from(a).concat(n.__callId__))}))});let r=n=>{if(n instanceof Error){let{name:a,message:c,stack:d,callId:h=t.id}=n,O={name:a,message:c,stack:d,callId:h};if(this.update({...s,status:"error",exception:O}),this.setState(t.storyId,u=>({callRefsByResult:new Map([...Array.from(u.callRefsByResult.entries()),[n,{__callId__:t.id,retain:t.retain}]])})),t.ancestors.length)throw Object.prototype.hasOwnProperty.call(n,"callId")||Object.defineProperty(n,"callId",{value:t.id}),n;if(n!==b)throw P.warn(n),B}throw n};try{if(i==="played"&&!t.retain)throw b;let n=(o.getArgs?o.getArgs(t,this.getState(t.storyId)):t.args).map(c=>typeof c!="function"||Object.keys(c).length?c:(...d)=>{let{cursor:h,ancestors:O}=this.getState(t.storyId);this.setState(t.storyId,{cursor:0,ancestors:[...O,t.id]});let u=()=>this.setState(t.storyId,{cursor:h,ancestors:O}),f=!1;try{let S=c(...d);return S instanceof Promise?(f=!0,S.finally(u)):S}finally{f||u()}}),a=e(...n);return a&&["object","function","symbol"].includes(typeof a)&&this.setState(t.storyId,c=>({callRefsByResult:new Map([...Array.from(c.callRefsByResult.entries()),[a,{__callId__:t.id,retain:t.retain}]])})),this.update({...s,status:a instanceof Promise?"active":"done"}),a instanceof Promise?a.then(c=>(this.update({...s,status:"done"}),c),r):a}catch(n){return r(n)}}update(e){this.channel.emit(g.CALL,e),this.setState(e.storyId,({calls:t})=>{let o=t.concat(e).reduce((l,i)=>Object.assign(l,{[i.id]:i}),{});return{calls:Object.values(o).sort((l,i)=>l.id.localeCompare(i.id,void 0,{numeric:!0}))}}),this.sync(e.storyId)}sync(e){let t=()=>{var a;let{isLocked:o,isPlaying:l}=this.getState(e),i=this.getLog(e),_=(a=i.filter(({ancestors:c})=>!c.length).find(c=>c.status==="waiting"))==null?void 0:a.callId,s=i.some(c=>c.status==="active");if(o||s||i.length===0){let c={controlStates:w,logItems:i};this.channel.emit(g.SYNC,c);return}let r=i.some(c=>["done","error"].includes(c.status)),n={controlStates:{start:r,back:r,goto:!0,next:l,end:l},logItems:i,pausedAt:_};this.channel.emit(g.SYNC,n)};this.setState(e,({syncTimeout:o})=>(clearTimeout(o),{syncTimeout:setTimeout(t,0)}))}};function D(e,t={}){var o,l,i,_;try{let s=!1,r=!1;return(l=(o=p.window.location)==null?void 0:o.search)!=null&&l.includes("instrument=true")?s=!0:(_=(i=p.window.location)==null?void 0:i.search)!=null&&_.includes("instrument=false")&&(r=!0),p.window.parent===p.window&&!s||r?e:(p.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(p.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new k),p.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(e,t))}catch(s){return M.warn(s),e}}const{addons:F}=__STORYBOOK_MODULE_PREVIEW_API__,{FORCE_REMOUNT:H,STORY_RENDER_PHASE_CHANGED:z}=__STORYBOOK_MODULE_CORE_EVENTS__;var A=new U(global),W=A.fn.bind(A),{action:X}=D({action:W},{retain:!0}),j=F.getChannel(),C=new Set,y=[];j.on(H,()=>y.forEach(e=>{var t;return(t=e==null?void 0:e.mockClear)==null?void 0:t.call(e)}));j.on(z,({newPhase:e})=>{e==="loading"&&y.forEach(t=>{var o;return(o=t==null?void 0:t.mockClear)==null?void 0:o.call(t)})});var R=(e,t,o)=>{if(C.has(t))return t;C.add(t);try{if(Object.prototype.toString.call(t)==="[object Object]"){for(let[l,i]of Object.entries(t))t[l]=R(e,i,l);return t}if(Array.isArray(t))return t.map((l,i)=>R(e,l,`${o}[${i}]`));if(typeof t=="function"&&t.isAction){Object.defineProperty(t,"name",{value:o,writable:!1}),Object.defineProperty(t,"__storyId__",{value:e,writable:!1});let l=X(t);return y.push(l),l}}catch{}return t},J=({id:e,initialArgs:t})=>R(e,t),v=[J],{step:tt}=D({step:(e,t,o)=>t(o)},{intercept:!0}),et={throwPlayFunctionExceptions:!1};export{v as argsEnhancers,et as parameters,tt as runStep};
//# sourceMappingURL=preview-d2ee8d5e.js.map