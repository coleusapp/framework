import{Z as Je,r as et,o as M,d as tt,e as me,h as Pe,c as W,b as V,j as rt,k as ve,F as nt,l as X,p as K,m as Te,n as G,q as Y,s as L,v as I,x as Ae,y as it,z as Ne,a as ue,u as Le,t as re,f as at,g as ot}from"./app-04b0c30d.js";const Be=(t,e)=>{const r=t.__vccOpts||t;for(const[n,o]of e)r[n]=o;return r},lt={components:{Head:Je},props:{title:String}};function ut(t,e,r,n,o,i){const a=et("Head");return M(),tt(a,{title:r.title},{default:me(()=>[Pe(t.$slots,"default")]),_:3},8,["title"])}const $r=Be(lt,[["render",ut]]),st={},ft={class:"animate-spin -ml-1 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},ct=V("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),dt=V("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),pt=[ct,dt];function ht(t,e){return M(),W("svg",ft,pt)}const mt=Be(st,[["render",ht]]);function U(t,e,...r){if(t in e){let o=e[t];return typeof o=="function"?o(...r):o}let n=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}var Re=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Re||{}),F=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(F||{});function ke({visible:t=!0,features:e=0,ourProps:r,theirProps:n,...o}){var i;let a=He(n,r),l=Object.assign(o,{props:a});if(t||e&2&&a.static)return ne(l);if(e&1){let s=(i=a.unmount)==null||i?0:1;return U(s,{[0](){return null},[1](){return ne({...o,props:{...a,hidden:!0,style:{display:"none"}}})}})}return ne(l)}function ne({props:t,attrs:e,slots:r,slot:n,name:o}){var i,a;let{as:l,...s}=Ve(t,["unmount","static"]),u=(i=r.default)==null?void 0:i.call(r,n),f={};if(n){let p=!1,h=[];for(let[m,d]of Object.entries(n))typeof d=="boolean"&&(p=!0),d===!0&&h.push(m);p&&(f["data-headlessui-state"]=h.join(" "))}if(l==="template"){if(u=De(u??[]),Object.keys(s).length>0||Object.keys(e).length>0){let[p,...h]=u??[];if(!vt(p)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(e)).map(c=>c.trim()).filter((c,g,C)=>C.indexOf(c)===g).sort((c,g)=>c.localeCompare(g)).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));let m=He((a=p.props)!=null?a:{},s),d=rt(p,m);for(let c in m)c.startsWith("on")&&(d.props||(d.props={}),d.props[c]=m[c]);return d}return Array.isArray(u)&&u.length===1?u[0]:u}return ve(l,Object.assign({},s,f),{default:()=>u})}function De(t){return t.flatMap(e=>e.type===nt?De(e.children):[e])}function He(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},r={};for(let n of t)for(let o in n)o.startsWith("on")&&typeof n[o]=="function"?(r[o]!=null||(r[o]=[]),r[o].push(n[o])):e[o]=n[o];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(e,{[n](o,...i){let a=r[n];for(let l of a){if(o instanceof Event&&o.defaultPrevented)return;l(o,...i)}}});return e}function Ve(t,e=[]){let r=Object.assign({},t);for(let n of e)n in r&&delete r[n];return r}function vt(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let yt=0;function gt(){return++yt}function bt(){return gt()}function je(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}let Ie=Symbol("Context");var x=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(x||{});function wt(){return Qe()!==null}function Qe(){return X(Ie,null)}function Ot(t){K(Ie,t)}var St=Object.defineProperty,jt=(t,e,r)=>e in t?St(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,xe=(t,e,r)=>(jt(t,typeof e!="symbol"?e+"":e,r),r);let xt=class{constructor(){xe(this,"current",this.detect()),xe(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},Et=new xt;function ye(){let t=[],e={addEventListener(r,n,o,i){return r.addEventListener(n,o,i),e.add(()=>r.removeEventListener(n,o,i))},requestAnimationFrame(...r){let n=requestAnimationFrame(...r);e.add(()=>cancelAnimationFrame(n))},nextFrame(...r){e.requestAnimationFrame(()=>{e.requestAnimationFrame(...r)})},setTimeout(...r){let n=setTimeout(...r);e.add(()=>clearTimeout(n))},style(r,n,o){let i=r.style.getPropertyValue(n);return Object.assign(r.style,{[n]:o}),this.add(()=>{Object.assign(r.style,{[n]:i})})},group(r){let n=ye();return r(n),this.add(()=>n.dispose())},add(r){return t.push(r),()=>{let n=t.indexOf(r);if(n>=0)for(let o of t.splice(n,1))o()}},dispose(){for(let r of t.splice(0))r()}};return e}function $t(t){let e={called:!1};return(...r)=>{if(!e.called)return e.called=!0,t(...r)}}function ie(t,...e){t&&e.length>0&&t.classList.add(...e)}function Z(t,...e){t&&e.length>0&&t.classList.remove(...e)}var se=(t=>(t.Finished="finished",t.Cancelled="cancelled",t))(se||{});function Ft(t,e){let r=ye();if(!t)return r.dispose;let{transitionDuration:n,transitionDelay:o}=getComputedStyle(t),[i,a]=[n,o].map(l=>{let[s=0]=l.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,f)=>f-u);return s});return i!==0?r.setTimeout(()=>e("finished"),i+a):e("finished"),r.add(()=>e("cancelled")),r.dispose}function Ee(t,e,r,n,o,i){let a=ye(),l=i!==void 0?$t(i):()=>{};return Z(t,...o),ie(t,...e,...r),a.nextFrame(()=>{Z(t,...r),ie(t,...n),a.add(Ft(t,s=>(Z(t,...n,...e),ie(t,...o),l(s))))}),a.add(()=>Z(t,...e,...r,...n,...o)),a.add(()=>l("cancelled")),a.dispose}function T(t=""){return t.split(" ").filter(e=>e.trim().length>1)}let ge=Symbol("TransitionContext");var Ct=(t=>(t.Visible="visible",t.Hidden="hidden",t))(Ct||{});function Pt(){return X(ge,null)!==null}function Tt(){let t=X(ge,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}function At(){let t=X(be,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}let be=Symbol("NestingContext");function J(t){return"children"in t?J(t.children):t.value.filter(({state:e})=>e==="visible").length>0}function Me(t){let e=L([]),r=L(!1);I(()=>r.value=!0),Ae(()=>r.value=!1);function n(i,a=F.Hidden){let l=e.value.findIndex(({id:s})=>s===i);l!==-1&&(U(a,{[F.Unmount](){e.value.splice(l,1)},[F.Hidden](){e.value[l].state="hidden"}}),!J(e)&&r.value&&(t==null||t()))}function o(i){let a=e.value.find(({id:l})=>l===i);return a?a.state!=="visible"&&(a.state="visible"):e.value.push({id:i,state:"visible"}),()=>n(i,F.Unmount)}return{children:e,register:o,unregister:n}}let Ue=Re.RenderStrategy,Nt=Te({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:r,slots:n,expose:o}){let i=L(0);function a(){i.value|=x.Opening,e("beforeEnter")}function l(){i.value&=~x.Opening,e("afterEnter")}function s(){i.value|=x.Closing,e("beforeLeave")}function u(){i.value&=~x.Closing,e("afterLeave")}if(!Pt()&&wt())return()=>ve(we,{...t,onBeforeEnter:a,onAfterEnter:l,onBeforeLeave:s,onAfterLeave:u},n);let f=L(null),p=G(()=>t.unmount?F.Unmount:F.Hidden);o({el:f,$el:f});let{show:h,appear:m}=Tt(),{register:d,unregister:c}=At(),g=L(h.value?"visible":"hidden"),C={value:!0},S=bt(),j={value:!1},B=Me(()=>{!j.value&&g.value!=="hidden"&&(g.value="hidden",c(S),u())});I(()=>{let $=d(S);Ae($)}),Y(()=>{if(p.value===F.Hidden&&S){if(h.value&&g.value!=="visible"){g.value="visible";return}U(g.value,{hidden:()=>c(S),visible:()=>d(S)})}});let E=T(t.enter),k=T(t.enterFrom),D=T(t.enterTo),w=T(t.entered),_=T(t.leave),ee=T(t.leaveFrom),H=T(t.leaveTo);I(()=>{Y(()=>{if(g.value==="visible"){let $=je(f);if($ instanceof Comment&&$.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function Ge($){let te=C.value&&!m.value,P=je(f);!P||!(P instanceof HTMLElement)||te||(j.value=!0,h.value&&a(),h.value||s(),$(h.value?Ee(P,E,k,D,w,q=>{j.value=!1,q===se.Finished&&l()}):Ee(P,_,ee,H,w,q=>{j.value=!1,q===se.Finished&&(J(B)||(g.value="hidden",c(S),u()))})))}return I(()=>{it([h],($,te,P)=>{Ge(P),C.value=!1},{immediate:!0})}),K(be,B),Ot(G(()=>U(g.value,{visible:x.Open,hidden:x.Closed})|i.value)),()=>{let{appear:$,show:te,enter:P,enterFrom:q,enterTo:wr,entered:Or,leave:Sr,leaveFrom:jr,leaveTo:xr,...Se}=t,Ye={ref:f},Xe={...Se,...m.value&&h.value&&Et.isServer?{class:Ne([r.class,Se.class,...E,...k])}:{}};return ke({theirProps:Xe,ourProps:Ye,slot:{},slots:n,attrs:r,features:Ue,visible:g.value==="visible",name:"TransitionChild"})}}}),Lt=Nt,we=Te({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:r,slots:n}){let o=Qe(),i=G(()=>t.show===null&&o!==null?(o.value&x.Open)===x.Open:t.show);Y(()=>{if(![!0,!1].includes(i.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let a=L(i.value?"visible":"hidden"),l=Me(()=>{a.value="hidden"}),s=L(!0),u={show:i,appear:G(()=>t.appear||!s.value)};return I(()=>{Y(()=>{s.value=!1,i.value?a.value="visible":J(l)||(a.value="hidden")})}),K(be,l),K(ge,u),()=>{let f=Ve(t,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),p={unmount:t.unmount};return ke({ourProps:{...p,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[ve(Lt,{onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave"),...r,...p,...f},n.default)]},attrs:{},features:Ue,visible:a.value==="visible",name:"Transition"})}}});const Bt=["disabled","type"],Cr={__name:"ButtonForm",props:{type:{type:String,default:"button"},form:{type:Object,default(){return{processing:!1}}}},setup(t){return(e,r)=>(M(),W("button",{disabled:t.form.processing,type:t.type,class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"},[ue(Le(we),{id:"button-spinner",show:t.form.processing,enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:me(()=>[ue(mt,{class:"w-4 h-4"})]),_:1},8,["show"]),Pe(e.$slots,"default")],8,Bt))}},Rt=["for"],kt={class:"mt-1"},Dt=["id","name","placeholder","type","value"],Ht=["id"],Pr={__name:"InputForm",props:{name:String,label:String,modelValue:String,id:{type:String,default:t=>t.name},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup(t){return(e,r)=>(M(),W("div",null,[V("label",{for:t.id,class:"block text-sm font-medium text-gray-700"},re(t.label),9,Rt),V("div",kt,[V("input",{id:t.id,class:Ne([[t.hasError||t.form.errors[t.name]?"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500":"border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"],"shadow-sm block w-full sm:text-sm rounded-md text-gray-700 p-2 border border-gray-300"]),name:t.name,placeholder:t.placeholder,type:t.type,value:t.modelValue,onInput:r[0]||(r[0]=n=>e.$emit("update:modelValue",n.target.value)),onKeydown:r[1]||(r[1]=n=>t.form.clearErrors(t.name))},null,42,Dt)]),t.help!==""?(M(),W("p",{key:0,id:`${t.name}-description`,class:"mt-2 text-sm text-gray-500"},re(t.help),9,Ht)):at("",!0),ue(Le(we),{id:`${t.name}-error`,show:t.hasError||!!t.form.errors[t.name],as:"p",class:"mt-2 text-sm text-red-600",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:me(()=>[ot(re(t.hasError?t.errorMessage:t.form.errors[t.name]),1)]),_:1},8,["id","show"])]))}};var Vt=String.prototype.replace,It=/%20/g,ae={RFC1738:"RFC1738",RFC3986:"RFC3986"},Oe={default:ae.RFC3986,formatters:{RFC1738:function(t){return Vt.call(t,It,"+")},RFC3986:function(t){return String(t)}},RFC1738:ae.RFC1738,RFC3986:ae.RFC3986},Qt=Oe,oe=Object.prototype.hasOwnProperty,A=Array.isArray,O=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),Mt=function(e){for(;e.length>1;){var r=e.pop(),n=r.obj[r.prop];if(A(n)){for(var o=[],i=0;i<n.length;++i)typeof n[i]<"u"&&o.push(n[i]);r.obj[r.prop]=o}}},ze=function(e,r){for(var n=r&&r.plainObjects?Object.create(null):{},o=0;o<e.length;++o)typeof e[o]<"u"&&(n[o]=e[o]);return n},Ut=function t(e,r,n){if(!r)return e;if(typeof r!="object"){if(A(e))e.push(r);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!oe.call(Object.prototype,r))&&(e[r]=!0);else return[e,r];return e}if(!e||typeof e!="object")return[e].concat(r);var o=e;return A(e)&&!A(r)&&(o=ze(e,n)),A(e)&&A(r)?(r.forEach(function(i,a){if(oe.call(e,a)){var l=e[a];l&&typeof l=="object"&&i&&typeof i=="object"?e[a]=t(l,i,n):e.push(i)}else e[a]=i}),e):Object.keys(r).reduce(function(i,a){var l=r[a];return oe.call(i,a)?i[a]=t(i[a],l,n):i[a]=l,i},o)},zt=function(e,r){return Object.keys(r).reduce(function(n,o){return n[o]=r[o],n},e)},_t=function(t,e,r){var n=t.replace(/\+/g," ");if(r==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},qt=function(e,r,n,o,i){if(e.length===0)return e;var a=e;if(typeof e=="symbol"?a=Symbol.prototype.toString.call(e):typeof e!="string"&&(a=String(e)),n==="iso-8859-1")return escape(a).replace(/%u[0-9a-f]{4}/gi,function(f){return"%26%23"+parseInt(f.slice(2),16)+"%3B"});for(var l="",s=0;s<a.length;++s){var u=a.charCodeAt(s);if(u===45||u===46||u===95||u===126||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||i===Qt.RFC1738&&(u===40||u===41)){l+=a.charAt(s);continue}if(u<128){l=l+O[u];continue}if(u<2048){l=l+(O[192|u>>6]+O[128|u&63]);continue}if(u<55296||u>=57344){l=l+(O[224|u>>12]+O[128|u>>6&63]+O[128|u&63]);continue}s+=1,u=65536+((u&1023)<<10|a.charCodeAt(s)&1023),l+=O[240|u>>18]+O[128|u>>12&63]+O[128|u>>6&63]+O[128|u&63]}return l},Zt=function(e){for(var r=[{obj:{o:e},prop:"o"}],n=[],o=0;o<r.length;++o)for(var i=r[o],a=i.obj[i.prop],l=Object.keys(a),s=0;s<l.length;++s){var u=l[s],f=a[u];typeof f=="object"&&f!==null&&n.indexOf(f)===-1&&(r.push({obj:a,prop:u}),n.push(f))}return Mt(r),e},Wt=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},Kt=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},Gt=function(e,r){return[].concat(e,r)},Yt=function(e,r){if(A(e)){for(var n=[],o=0;o<e.length;o+=1)n.push(r(e[o]));return n}return r(e)},_e={arrayToObject:ze,assign:zt,combine:Gt,compact:Zt,decode:_t,encode:qt,isBuffer:Kt,isRegExp:Wt,maybeMap:Yt,merge:Ut},fe=_e,Q=Oe,Xt=Object.prototype.hasOwnProperty,$e={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},N=Array.isArray,Jt=String.prototype.split,er=Array.prototype.push,qe=function(t,e){er.apply(t,N(e)?e:[e])},tr=Date.prototype.toISOString,Fe=Q.default,y={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:fe.encode,encodeValuesOnly:!1,format:Fe,formatter:Q.formatters[Fe],indices:!1,serializeDate:function(e){return tr.call(e)},skipNulls:!1,strictNullHandling:!1},rr=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},nr=function t(e,r,n,o,i,a,l,s,u,f,p,h,m,d){var c=e;if(typeof l=="function"?c=l(r,c):c instanceof Date?c=f(c):n==="comma"&&N(c)&&(c=fe.maybeMap(c,function(H){return H instanceof Date?f(H):H})),c===null){if(o)return a&&!m?a(r,y.encoder,d,"key",p):r;c=""}if(rr(c)||fe.isBuffer(c)){if(a){var g=m?r:a(r,y.encoder,d,"key",p);if(n==="comma"&&m){for(var C=Jt.call(String(c),","),S="",j=0;j<C.length;++j)S+=(j===0?"":",")+h(a(C[j],y.encoder,d,"value",p));return[h(g)+"="+S]}return[h(g)+"="+h(a(c,y.encoder,d,"value",p))]}return[h(r)+"="+h(String(c))]}var B=[];if(typeof c>"u")return B;var E;if(n==="comma"&&N(c))E=[{value:c.length>0?c.join(",")||null:void 0}];else if(N(l))E=l;else{var k=Object.keys(c);E=s?k.sort(s):k}for(var D=0;D<E.length;++D){var w=E[D],_=typeof w=="object"&&typeof w.value<"u"?w.value:c[w];if(!(i&&_===null)){var ee=N(c)?typeof n=="function"?n(r,w):r:r+(u?"."+w:"["+w+"]");qe(B,t(_,ee,n,o,i,a,l,s,u,f,p,h,m,d))}}return B},ir=function(e){if(!e)return y;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=e.charset||y.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=Q.default;if(typeof e.format<"u"){if(!Xt.call(Q.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var o=Q.formatters[n],i=y.filter;return(typeof e.filter=="function"||N(e.filter))&&(i=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:y.addQueryPrefix,allowDots:typeof e.allowDots>"u"?y.allowDots:!!e.allowDots,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:y.charsetSentinel,delimiter:typeof e.delimiter>"u"?y.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:y.encode,encoder:typeof e.encoder=="function"?e.encoder:y.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:y.encodeValuesOnly,filter:i,format:n,formatter:o,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:y.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:y.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:y.strictNullHandling}},ar=function(t,e){var r=t,n=ir(e),o,i;typeof n.filter=="function"?(i=n.filter,r=i("",r)):N(n.filter)&&(i=n.filter,o=i);var a=[];if(typeof r!="object"||r===null)return"";var l;e&&e.arrayFormat in $e?l=e.arrayFormat:e&&"indices"in e?l=e.indices?"indices":"repeat":l="indices";var s=$e[l];o||(o=Object.keys(r)),n.sort&&o.sort(n.sort);for(var u=0;u<o.length;++u){var f=o[u];n.skipNulls&&r[f]===null||qe(a,nr(r[f],f,s,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset))}var p=a.join(n.delimiter),h=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),p.length>0?h+p:""},R=_e,ce=Object.prototype.hasOwnProperty,or=Array.isArray,v={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:R.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},lr=function(t){return t.replace(/&#(\d+);/g,function(e,r){return String.fromCharCode(parseInt(r,10))})},Ze=function(t,e){return t&&typeof t=="string"&&e.comma&&t.indexOf(",")>-1?t.split(","):t},ur="utf8=%26%2310003%3B",sr="utf8=%E2%9C%93",fr=function(e,r){var n={},o=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=r.parameterLimit===1/0?void 0:r.parameterLimit,a=o.split(r.delimiter,i),l=-1,s,u=r.charset;if(r.charsetSentinel)for(s=0;s<a.length;++s)a[s].indexOf("utf8=")===0&&(a[s]===sr?u="utf-8":a[s]===ur&&(u="iso-8859-1"),l=s,s=a.length);for(s=0;s<a.length;++s)if(s!==l){var f=a[s],p=f.indexOf("]="),h=p===-1?f.indexOf("="):p+1,m,d;h===-1?(m=r.decoder(f,v.decoder,u,"key"),d=r.strictNullHandling?null:""):(m=r.decoder(f.slice(0,h),v.decoder,u,"key"),d=R.maybeMap(Ze(f.slice(h+1),r),function(c){return r.decoder(c,v.decoder,u,"value")})),d&&r.interpretNumericEntities&&u==="iso-8859-1"&&(d=lr(d)),f.indexOf("[]=")>-1&&(d=or(d)?[d]:d),ce.call(n,m)?n[m]=R.combine(n[m],d):n[m]=d}return n},cr=function(t,e,r,n){for(var o=n?e:Ze(e,r),i=t.length-1;i>=0;--i){var a,l=t[i];if(l==="[]"&&r.parseArrays)a=[].concat(o);else{a=r.plainObjects?Object.create(null):{};var s=l.charAt(0)==="["&&l.charAt(l.length-1)==="]"?l.slice(1,-1):l,u=parseInt(s,10);!r.parseArrays&&s===""?a={0:o}:!isNaN(u)&&l!==s&&String(u)===s&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(a=[],a[u]=o):s!=="__proto__"&&(a[s]=o)}o=a}return o},dr=function(e,r,n,o){if(e){var i=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,l=/(\[[^[\]]*])/g,s=n.depth>0&&a.exec(i),u=s?i.slice(0,s.index):i,f=[];if(u){if(!n.plainObjects&&ce.call(Object.prototype,u)&&!n.allowPrototypes)return;f.push(u)}for(var p=0;n.depth>0&&(s=l.exec(i))!==null&&p<n.depth;){if(p+=1,!n.plainObjects&&ce.call(Object.prototype,s[1].slice(1,-1))&&!n.allowPrototypes)return;f.push(s[1])}return s&&f.push("["+i.slice(s.index)+"]"),cr(f,r,n,o)}},pr=function(e){if(!e)return v;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof e.charset>"u"?v.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?v.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:v.allowPrototypes,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:v.arrayLimit,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:v.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:v.comma,decoder:typeof e.decoder=="function"?e.decoder:v.decoder,delimiter:typeof e.delimiter=="string"||R.isRegExp(e.delimiter)?e.delimiter:v.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:v.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:v.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:v.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:v.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:v.strictNullHandling}},hr=function(t,e){var r=pr(e);if(t===""||t===null||typeof t>"u")return r.plainObjects?Object.create(null):{};for(var n=typeof t=="string"?fr(t,r):t,o=r.plainObjects?Object.create(null):{},i=Object.keys(n),a=0;a<i.length;++a){var l=i[a],s=dr(l,n[l],r,typeof t=="string");o=R.merge(o,s,r)}return R.compact(o)},mr=ar,vr=hr,yr=Oe,We={formats:yr,parse:vr,stringify:mr};function Ce(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Ke(t,e,r){return e&&Ce(t.prototype,e),r&&Ce(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},b.apply(this,arguments)}function de(t){return de=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},de(t)}function z(t,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},z(t,e)}function gr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pe(t,e,r){return pe=gr()?Reflect.construct.bind():function(n,o,i){var a=[null];a.push.apply(a,o);var l=new(Function.bind.apply(n,a));return i&&z(l,i.prototype),l},pe.apply(null,arguments)}function he(t){var e=typeof Map=="function"?new Map:void 0;return he=function(r){if(r===null||Function.toString.call(r).indexOf("[native code]")===-1)return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(r))return e.get(r);e.set(r,n)}function n(){return pe(r,arguments,de(this).constructor)}return n.prototype=Object.create(r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),z(n,r)},he(t)}var le=function(){function t(r,n,o){var i,a;this.name=r,this.definition=n,this.bindings=(i=n.bindings)!=null?i:{},this.wheres=(a=n.wheres)!=null?a:{},this.config=o}var e=t.prototype;return e.matchesUrl=function(r){var n=this;if(!this.definition.methods.includes("GET"))return!1;var o=this.template.replace(/(\/?){([^}?]*)(\??)}/g,function(f,p,h,m){var d,c="(?<"+h+">"+(((d=n.wheres[h])==null?void 0:d.replace(/(^\^)|(\$$)/g,""))||"[^/?]+")+")";return m?"("+p+c+")?":""+p+c}).replace(/^\w+:\/\//,""),i=r.replace(/^\w+:\/\//,"").split("?"),a=i[0],l=i[1],s=new RegExp("^"+o+"/?$").exec(a);if(s){for(var u in s.groups)s.groups[u]=typeof s.groups[u]=="string"?decodeURIComponent(s.groups[u]):s.groups[u];return{params:s.groups,query:We.parse(l)}}return!1},e.compile=function(r){var n=this,o=this.parameterSegments;return o.length?this.template.replace(/{([^}?]+)(\??)}/g,function(i,a,l){var s,u,f;if(!l&&[null,void 0].includes(r[a]))throw new Error("Ziggy error: '"+a+"' parameter is required for route '"+n.name+"'.");if(o[o.length-1].name===a&&n.wheres[a]===".*")return encodeURIComponent((f=r[a])!=null?f:"").replace(/%2F/g,"/");if(n.wheres[a]&&!new RegExp("^"+(l?"("+n.wheres[a]+")?":n.wheres[a])+"$").test((s=r[a])!=null?s:""))throw new Error("Ziggy error: '"+a+"' parameter does not match required format '"+n.wheres[a]+"' for route '"+n.name+"'.");return encodeURIComponent((u=r[a])!=null?u:"")}).replace(this.origin+"//",this.origin+"/").replace(/\/+$/,""):this.template},Ke(t,[{key:"template",get:function(){return(this.origin+"/"+this.definition.uri).replace(/\/+$/,"")}},{key:"origin",get:function(){return this.config.absolute?this.definition.domain?""+this.config.url.match(/^\w+:\/\//)[0]+this.definition.domain+(this.config.port?":"+this.config.port:""):this.config.url:""}},{key:"parameterSegments",get:function(){var r,n;return(r=(n=this.template.match(/{[^}?]+\??}/g))==null?void 0:n.map(function(o){return{name:o.replace(/{|\??}/g,""),required:!/\?}$/.test(o)}}))!=null?r:[]}}]),t}(),br=function(t){var e,r;function n(i,a,l,s){var u;if(l===void 0&&(l=!0),(u=t.call(this)||this).t=s??(typeof Ziggy<"u"?Ziggy:globalThis==null?void 0:globalThis.Ziggy),u.t=b({},u.t,{absolute:l}),i){if(!u.t.routes[i])throw new Error("Ziggy error: route '"+i+"' is not in the route list.");u.i=new le(i,u.t.routes[i],u.t),u.u=u.o(a)}return u}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,z(e,r);var o=n.prototype;return o.toString=function(){var i=this,a=Object.keys(this.u).filter(function(l){return!i.i.parameterSegments.some(function(s){return s.name===l})}).filter(function(l){return l!=="_query"}).reduce(function(l,s){var u;return b({},l,((u={})[s]=i.u[s],u))},{});return this.i.compile(this.u)+We.stringify(b({},a,this.u._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:function(l,s){return typeof l=="boolean"?Number(l):s(l)}})},o.l=function(i){var a=this;i?this.t.absolute&&i.startsWith("/")&&(i=this.h().host+i):i=this.v();var l={},s=Object.entries(this.t.routes).find(function(u){return l=new le(u[0],u[1],a.t).matchesUrl(i)})||[void 0,void 0];return b({name:s[0]},l,{route:s[1]})},o.v=function(){var i=this.h(),a=i.pathname,l=i.search;return(this.t.absolute?i.host+a:a.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"))+l},o.current=function(i,a){var l=this.l(),s=l.name,u=l.params,f=l.query,p=l.route;if(!i)return s;var h=new RegExp("^"+i.replace(/\./g,"\\.").replace(/\*/g,".*")+"$").test(s);if([null,void 0].includes(a)||!h)return h;var m=new le(s,p,this.t);a=this.o(a,m);var d=b({},u,f);return!(!Object.values(a).every(function(c){return!c})||Object.values(d).some(function(c){return c!==void 0}))||Object.entries(a).every(function(c){return d[c[0]]==c[1]})},o.h=function(){var i,a,l,s,u,f,p=typeof window<"u"?window.location:{},h=p.host,m=p.pathname,d=p.search;return{host:(i=(a=this.t.location)==null?void 0:a.host)!=null?i:h===void 0?"":h,pathname:(l=(s=this.t.location)==null?void 0:s.pathname)!=null?l:m===void 0?"":m,search:(u=(f=this.t.location)==null?void 0:f.search)!=null?u:d===void 0?"":d}},o.has=function(i){return Object.keys(this.t.routes).includes(i)},o.o=function(i,a){var l=this;i===void 0&&(i={}),a===void 0&&(a=this.i),i!=null||(i={}),i=["string","number"].includes(typeof i)?[i]:i;var s=a.parameterSegments.filter(function(f){return!l.t.defaults[f.name]});if(Array.isArray(i))i=i.reduce(function(f,p,h){var m,d;return b({},f,s[h]?((m={})[s[h].name]=p,m):typeof p=="object"?p:((d={})[p]="",d))},{});else if(s.length===1&&!i[s[0].name]&&(i.hasOwnProperty(Object.values(a.bindings)[0])||i.hasOwnProperty("id"))){var u;(u={})[s[0].name]=i,i=u}return b({},this.g(a),this.p(i,a))},o.g=function(i){var a=this;return i.parameterSegments.filter(function(l){return a.t.defaults[l.name]}).reduce(function(l,s,u){var f,p=s.name;return b({},l,((f={})[p]=a.t.defaults[p],f))},{})},o.p=function(i,a){var l=a.bindings,s=a.parameterSegments;return Object.entries(i).reduce(function(u,f){var p,h,m=f[0],d=f[1];if(!d||typeof d!="object"||Array.isArray(d)||!s.some(function(c){return c.name===m}))return b({},u,((h={})[m]=d,h));if(!d.hasOwnProperty(l[m])){if(!d.hasOwnProperty("id"))throw new Error("Ziggy error: object passed as '"+m+"' parameter is missing route model binding key '"+l[m]+"'.");l[m]="id"}return b({},u,((p={})[m]=d[l[m]],p))},{})},o.valueOf=function(){return this.toString()},o.check=function(i){return this.has(i)},Ke(n,[{key:"params",get:function(){var i=this.l();return b({},i.params,i.query)}}]),n}(he(String));function Tr(t,e,r,n){var o=new br(t,e,r,n);return t?o.toString():o}export{$r as A,we as S,Pr as _,Cr as a,Tr as h};
