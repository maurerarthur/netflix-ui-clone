var O=Object.defineProperty,Y=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var E=(e,s,a)=>s in e?O(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,f=(e,s)=>{for(var a in s||(s={}))q.call(s,a)&&E(e,a,s[a]);if(j)for(var a of j(s))z.call(s,a)&&E(e,a,s[a]);return e},p=(e,s)=>Y(e,H(s));import{R as M,r as c,j as S,u as b,L as A,a as L,F as x,f as X,b as G,c as $,d as K,e as _,g as J,h as Q,i as V,B as Z,k as ee,l as y,m as te}from"./vendor.fa4a9e23.js";const se=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}};se();const g=M.createContext([]);function I(){const{innerWidth:e,innerHeight:s}=window,a=e<728,o=e>=728&&e<1200,i=e>=1200;return{width:e,height:s,isSm:a,isMd:o,isLg:i}}function ne(){const[e,s]=c.exports.useState(I());return c.exports.useEffect(()=>{function a(){s(I())}return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),e}var C="/netflix-ui-clone/assets/logo.0c12d537.svg";const t=S.exports.jsx,r=S.exports.jsxs,F=S.exports.Fragment,P=()=>{const{isSm:e,isMd:s,isLg:a}=ne(),o=b(),i=o.pathname=="/",n=o.pathname=="/browse",l=o.pathname=="/watch",[d]=c.exports.useContext(g),{avatar:u}=d;return r("div",{className:"w-100 d-flex flex-row justify-content-between align-items-center bg-black",children:[t("div",{className:"w-25",children:r(A,{to:`${i?"/":"/browse"}`,children:[e&&t("img",{src:C,className:"w-100 p-3"}),s&&t("img",{src:C,className:"w-50 p-3"}),a&&t("img",{src:C,className:"w-25 p-3"})]})}),(n||l)&&t(A,{to:"/",children:t("div",{className:"d-flex flex-row justify-content-end",children:t("img",{src:u,className:"img-fluid rounded w-50 m-1"})})})]})},ae=()=>{const e=L(),[s,a]=c.exports.useContext(g),{users:o}=s,[i,n]=c.exports.useState(!1),l=d=>{a({type:"setProfile",payload:{id:d}}),e("/browse")};return r("div",{className:"h-100 d-flex flex-column justify-content-between align-items-center",children:[t(P,{}),r("div",{className:"h-100 d-flex flex-column justify-content-center align-items-center",children:[r("div",{className:"container",children:[i&&t("div",{className:"row justify-content-center mb-4",children:t("h1",{className:"text-center white",children:"Manage Profiles:"})}),r("div",{className:"row justify-content-center",children:[o.map(d=>r("div",{className:"col-4 col-md-4 d-flex flex-column align-items-center cursor-pointer",onClick:()=>i?e("/create-profile",{state:{userState:{id:d.id,name:d.name,avatar:d.avatar}}}):l(d.id),children:[r("div",{className:"d-flex justify-content-center align-items-center position-relative",children:[i&&t("div",{className:"d-flex justify-content-center align-items-center w-100 h-100 overlay position-absolute",children:t(x,{icon:X,className:"white"})}),t("img",{className:"img-fluid rounded user-avatar",src:d.avatar})]}),t("h3",{className:"mt-2 white",children:d.name})]},d.id)),r("div",{className:"col-4 col-md-4 d-flex flex-column align-items-center",children:[t("button",{className:"transparent-button",onClick:()=>e("/create-profile"),children:t(x,{icon:G,className:"img-fluid user-avatar"})}),t("h3",{className:"mt-1 text-center white",children:"Add Profile"})]})]})]}),!i&&r(F,{children:[t("h1",{className:"mt-4 white",children:"Who's watching?"}),t("button",{className:"black-button d-flex justify-content-center align-items-center",disabled:o.length===0,onClick:()=>n(!0),children:t("h3",{className:"m-0 p-1",children:"Manage Profiles"})})]}),i&&t(F,{children:t("button",{className:"white-button mt-3 d-flex justify-content-center align-items-center red-hover",onClick:()=>n(!1),children:t("h3",{className:"m-0 p-1",children:"Done"})})})]})]})},ie=async()=>(await $.get("https://picsum.photos/200")).request.responseURL,oe=()=>{const e=L(),s=b(),[,a]=c.exports.useContext(g),[o,i]=c.exports.useState(!1),[n,l]=c.exports.useState(!1),[d,u]=c.exports.useState(""),[m,N]=c.exports.useState(""),[v,w]=c.exports.useState("");c.exports.useEffect(()=>{const{userState:h}=(s==null?void 0:s.state)||{};if(h){i(!0),u(h.id),N(h.name),w(h.avatar);return}R()},[]);const R=async()=>{l(!0);const h=await ie();w(h),l(!1)};return r("div",{className:"h-100 d-flex flex-column justify-content-between align-items-center",children:[t(P,{}),r("div",{className:"h-100 d-flex flex-column justify-content-center",children:[t("h1",{className:"white",children:o?"Edit Profile":"Add Profile"}),r("h4",{className:"grey",children:[o?"Edit":"Add"," a profile for another person watching Netflix."]}),r("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[n?t("div",{className:"d-flex flex-row justify-content-center align-items-center user-avatar",children:t("p",{className:"h1 white",children:"..."})}):t("img",{src:v,className:"img-fuild rounded user-avatar"}),t("input",{type:"text",className:"w-100 m-2 input-grey",placeholder:"Name",value:m,onChange:h=>N(h.target.value)})]}),t("div",{children:t("button",{onClick:R,className:"mt-2 transparent-button",children:"Get new avatar"})}),r("div",{className:"mt-3 d-flex flex-row justify-content-between align-items-center",children:[r("div",{className:"d-flex flex-row",children:[t("button",{className:"m-1 white-button d-flex justify-content-center align-items-center",disabled:!m,onClick:o?()=>{a({type:"editProfile",payload:{id:d,avatar:v,name:m}}),e("/")}:()=>{a({type:"addProfile",payload:{avatar:v,name:m}}),e("/")},children:t("h4",{className:"m-0 p-1",children:"Continue"})}),t("button",{className:"m-1 black-button d-flex justify-content-center align-items-center",onClick:()=>e("/"),children:t("h4",{className:"m-0 p-1",children:"Cancel"})})]}),o&&t("button",{className:"m-1 black-button d-flex justify-content-center align-items-center",onClick:()=>{a({type:"deleteProfile",payload:{id:d}}),e("/")},children:t("h4",{className:"m-0 p-1",children:"Delete Profile"})})]})]})]})},k=$.create({baseURL:"https://www.omdbapi.com/?apiKey=5c08063e&"}),re=async e=>{const{data:s}=await k.get(`&s=${e}`);return s.Search[Math.floor(Math.random()*s.Search.length)]},B=({movie:e})=>{const s=b(),a=s.pathname=="/browse",o=s.pathname=="/watch",i=L(),[n,l]=c.exports.useState(e||null);return c.exports.useEffect(()=>{e||(async()=>{const u=K(),m=await re(u);l(m)})()},[]),t("div",{className:`container-fluid mt-4 ${a?"cursor-pointer":""}`,onClick:o?void 0:()=>{i("/watch",{state:n})},children:r("div",{className:"row billboard-container",children:[t("img",{className:"col-12 billboard-background-blur",src:n==null?void 0:n.Poster}),t("img",{className:"billboard",src:n==null?void 0:n.Poster}),r("div",{className:"align-self-center m-3 billboard-info",children:[t("h1",{className:"white",children:n==null?void 0:n.Title}),t("h4",{className:"white",children:n==null?void 0:n.Year})]})]})})},ce=async e=>{const{data:s}=await k.get(`&s=${e}`);return s.Search},le=({movie:e})=>{const s=L();return t("div",{className:"col-3 col-sm-3 col-md-2 col-lg-2 col-xl-1 p-1 carousel-movie position-relative cursor-pointer",onClick:()=>{s("/watch",{state:e})},children:t("img",{src:e.Poster,className:"d-block w-100 img-fluid"})})},U=({carouselClass:e,genre:s,favorites:a})=>{const[o,i]=c.exports.useState([]);return c.exports.useEffect(()=>{s&&(async()=>{const n=await ce(s);i(n)})(),a&&i(a)},[]),c.exports.useEffect(()=>{const n=document.getElementsByClassName(e)[0];let l=!1,d,u;return n.addEventListener("mouseover",m=>{l=!0,n.classList.add("active"),d=m.pageX-n.offsetLeft,u=n.scrollLeft}),n.addEventListener("mouseleave",()=>{l=!1,n.classList.remove("active")}),n.addEventListener("mouseup",()=>{l=!1,n.classList.remove("active")}),n.addEventListener("mousemove",m=>{if(!l)return;m.preventDefault();const v=(m.pageX-n.offsetLeft-d)*5;n.scrollLeft=u-v}),()=>{n.removeEventListener("mousedown",()=>{}),n.removeEventListener("mouseleave",()=>{}),n.removeEventListener("mouseup",()=>{}),n.removeEventListener("mousemove",()=>{})}},[]),t("div",{className:"container-fluid mt-4 carousel-parent",children:r("div",{className:"row",children:[t("div",{className:"col-12",children:t("h3",{className:"mt-4 white",children:s?s.toUpperCase():"My List"})}),t("div",{className:"col-12",children:t("div",{className:`carousel ${e}`,children:o.map(n=>t(le,{movie:n},n.imdbID))})})]})})},D=M.createContext({}),de=()=>{const e=["Action","Crime","Comedy","Horror","Documentary","Standup","Music","Romantic","Christmas","Drama","Animation"],[s]=c.exports.useContext(g),[a]=c.exports.useContext(D),o=a.list.filter(i=>i.profileId==s.id);return r("div",{className:"h-100 d-flex flex-column justify-content-between align-items-center",children:[t(P,{}),r("div",{className:"w-100 h-100 d-flex flex-column justify-content-start align-items-center",children:[t(B,{}),o.length>0&&t(U,{carouselClass:"favorites",favorites:o}),e.map(i=>t(U,{carouselClass:i,genre:i},i))]})]})},me=async e=>{const{data:s}=await k.get(`&i=${e}&plot=full`);return s},ue=e=>new Date(e).getFullYear(),fe=e=>{let s=e;if(!e)return"0m";typeof e=="string"&&(s=parseInt(e.toString().replaceAll("String","")));const a=Math.floor(s/60),o=s%60;return a?`${a}h ${o}m`:`${o}m`},he=()=>{const s=b().state,[a]=c.exports.useContext(g),[o,i]=c.exports.useContext(D),[n,l]=c.exports.useState(),[d,u]=c.exports.useState(!1),m=o.list.find(w=>w.imdbID==s.imdbID);return c.exports.useEffect(()=>{(async()=>{const w=await me(s.imdbID);l(w)})()},[]),r("div",{className:"d-flex flex-column justify-content-between align-items-center",children:[t(P,{}),t(B,{movie:s}),t("div",{className:"container-fluid",children:r("div",{className:"row",children:[r("div",{className:"col-12 d-flex flex-row align-items-center",children:[r("button",{className:"d-flex flex-row align-items-center rounded white-button cursor-pointer",children:[t(x,{icon:_,className:"h4 m-0 p-2"}),t("h2",{className:"m-0 p-2",children:"Play"})]}),t("button",{className:`rounded-dark-button m-4 ${m?"watch-like-button-clicked":""}`,onClick:m?()=>{i({type:"removeFromList",payload:s})}:()=>{i({type:"addToList",payload:p(f({},s),{profileId:a.id})})},children:m?t(x,{icon:J,className:"h4 m-0 p-2"}):t(x,{icon:Q,className:"h4 m-0 p-2"})}),t("button",{className:`rounded-dark-button ${d?"watch-like-button-clicked":""}`,onClick:()=>u(!d),children:t(x,{icon:V,className:"h4 m-0 p-2"})})]}),t("div",{className:"col-12 d-flex flex-row align-items-center",children:r("h3",{className:"white",children:[ue(n==null?void 0:n.Released)," ",fe(n==null?void 0:n.Runtime)]})}),t("div",{className:"col-12 d-flex flex-row align-items-center",children:t("h5",{className:"white",children:n==null?void 0:n.Plot})})]})})]})},pe=()=>t(Z,{basename:"/netflix-ui-clone/",children:r(ee,{children:[t(y,{path:"/",element:t(ae,{})}),t(y,{path:"/create-profile",element:t(oe,{})}),t(y,{path:"/browse",element:t(de,{})}),t(y,{path:"/watch",element:t(he,{})})]})});const T={id:"",avatar:null,name:null,users:[{id:crypto.randomUUID(),name:"Default",avatar:"https://picsum.photos/200"}]};function ve(e=T,s){switch(s.type){case"addProfile":return e=p(f({},e),{users:e.users.concat(p(f({},s.payload),{id:crypto.randomUUID()}))}),e;case"editProfile":{const a=s.payload.id,i=e.users.filter(l=>l.id!=a).concat(p(f({},s.payload),{id:a}));return e=p(f({},e),{users:i}),e}case"deleteProfile":{const a=s.payload.id,o=e.users.filter(n=>n.id!=a);return e=p(f({},e),{users:o}),e}case"setProfile":{const a=s.payload.id,o=e.users.filter(n=>n.id==a)[0];return e=f(f({},e),o),e}default:throw new Error("In order to change the state send an action type and a payload")}}const W={list:[]};function we(e=W,s){switch(s.type){case"addToList":return e.list.find(o=>o.imdbID==s.payload.imdbID)||(e={list:e.list.concat(f({},s.payload))}),e;case"removeFromList":return e={list:e.list.filter(o=>o.imdbID!=s.payload.imdbID)},e}}const xe=()=>{const[e,s]=c.exports.useReducer(ve,T),[a,o]=c.exports.useReducer(we,W);return t(g.Provider,{value:[e,s],children:t(D.Provider,{value:[a,o],children:t("div",{className:"App",children:t(pe,{})})})})};te.render(t(M.StrictMode,{children:t(xe,{})}),document.getElementById("root"));