var $=Object.defineProperty,W=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var j=(e,s,n)=>s in e?$(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,u=(e,s)=>{for(var n in s||(s={}))Y.call(s,n)&&j(e,n,s[n]);if(k)for(var n of k(s))H.call(s,n)&&j(e,n,s[n]);return e},v=(e,s)=>W(e,O(s));import{R as L,r as c,j as C,u as g,L as D,a as N,F as w,f as q,b as z,c as E,d as K,e as G,g as _,h as J,i as Q,B as V,k as X,l as x,m as Z}from"./vendor.fa4a9e23.js";const ee=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};ee();const y=L.createContext([]);function A(){const{innerWidth:e,innerHeight:s}=window,n=e<728,r=e>=728&&e<1200,a=e>=1200;return{width:e,height:s,isSm:n,isMd:r,isLg:a}}function te(){const[e,s]=c.exports.useState(A());return c.exports.useEffect(()=>{function n(){s(A())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}var M="https://maurerarthur.github.io/netflix-ui-clone/assets/logo.0c12d537.svg";const t=C.exports.jsx,o=C.exports.jsxs,F=C.exports.Fragment,b=()=>{const{isSm:e,isMd:s,isLg:n}=te(),r=g(),a=r.pathname=="/",i=r.pathname=="/browse",d=r.pathname=="/watch",[l]=c.exports.useContext(y),{avatar:m}=l;return o("div",{className:"w-100 d-flex flex-row justify-content-between align-items-center bg-black",children:[t("div",{className:"w-25",children:o(D,{to:`${a?"/":"/browse"}`,children:[e&&t("img",{src:M,className:"w-100 p-3"}),s&&t("img",{src:M,className:"w-50 p-3"}),n&&t("img",{src:M,className:"w-25 p-3"})]})}),(i||d)&&t(D,{to:"/",children:t("div",{className:"d-flex flex-row justify-content-end",children:t("img",{src:m,className:"img-fluid rounded w-50 m-1"})})})]})},se=()=>{const e=N(),[s,n]=c.exports.useContext(y),{users:r}=s,[a,i]=c.exports.useState(!1),d=l=>{n({type:"setProfile",payload:{id:l}}),e("/browse")};return o("div",{className:"h-100 d-flex flex-column justify-content-between align-items-center",children:[t(b,{}),o("div",{className:"h-100 d-flex flex-column justify-content-center align-items-center",children:[o("div",{className:"container",children:[a&&t("div",{className:"row justify-content-center mb-4",children:t("h1",{className:"text-center white",children:"Manage Profiles:"})}),o("div",{className:"row justify-content-center",children:[r.map(l=>o("div",{className:"col-4 col-md-4 d-flex flex-column align-items-center cursor-pointer",onClick:()=>a?e("/create-profile",{state:{userState:{id:l.id,name:l.name,avatar:l.avatar}}}):d(l.id),children:[o("div",{className:"d-flex justify-content-center align-items-center position-relative",children:[a&&t("div",{className:"d-flex justify-content-center align-items-center w-100 h-100 overlay position-absolute",children:t(w,{icon:q,className:"white"})}),t("img",{className:"img-fluid rounded user-avatar",src:l.avatar})]}),t("h3",{className:"mt-2 white",children:l.name})]},l.id)),o("div",{className:"col-4 col-md-4 d-flex flex-column align-items-center",children:[t("button",{className:"transparent-button",onClick:()=>e("/create-profile"),children:t(w,{icon:z,className:"img-fluid user-avatar"})}),t("h3",{className:"mt-1 text-center white",children:"Add Profile"})]})]})]}),!a&&o(F,{children:[t("h1",{className:"mt-4 white",children:"Who's watching?"}),t("button",{className:"black-button d-flex justify-content-center align-items-center",disabled:r.length===0,onClick:()=>i(!0),children:t("h3",{className:"m-0 p-1",children:"Manage Profiles"})})]}),a&&t(F,{children:t("button",{className:"white-button mt-3 d-flex justify-content-center align-items-center red-hover",onClick:()=>i(!1),children:t("h3",{className:"m-0 p-1",children:"Done"})})})]})]})},ne=async()=>(await E.get("https://picsum.photos/200")).request.responseURL,ae=()=>{const e=N(),s=g(),[,n]=c.exports.useContext(y),[r,a]=c.exports.useState(!1),[i,d]=c.exports.useState(""),[l,m]=c.exports.useState(""),[f,P]=c.exports.useState("");c.exports.useEffect(()=>{const{userState:h}=(s==null?void 0:s.state)||{};if(h){a(!0),d(h.id),m(h.name),P(h.avatar);return}p()},[]);const p=async()=>{const h=await ne();P(h)};return o("div",{className:"h-100 d-flex flex-column justify-content-between align-items-center",children:[t(b,{}),o("div",{className:"h-100 d-flex flex-column justify-content-center",children:[t("h1",{className:"white",children:r?"Edit Profile":"Add Profile"}),o("h4",{className:"grey",children:[r?"Edit":"Add"," a profile for another person watching Netflix."]}),o("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[t("img",{src:f,className:"img-fuild rounded user-avatar"}),t("input",{type:"text",className:"w-100 m-2 input-grey",placeholder:"Name",value:l,onChange:h=>m(h.target.value)})]}),t("div",{children:t("button",{onClick:p,className:"mt-2 transparent-button",children:"Get new avatar"})}),o("div",{className:"mt-3 d-flex flex-row justify-content-between align-items-center",children:[o("div",{className:"d-flex flex-row",children:[t("button",{className:"m-1 white-button d-flex justify-content-center align-items-center",disabled:!l,onClick:r?()=>{n({type:"editProfile",payload:{id:i,avatar:f,name:l}}),e("/")}:()=>{n({type:"addProfile",payload:{avatar:f,name:l}}),e("/")},children:t("h4",{className:"m-0 p-1",children:"Continue"})}),t("button",{className:"m-1 black-button d-flex justify-content-center align-items-center",onClick:()=>e("/"),children:t("h4",{className:"m-0 p-1",children:"Cancel"})})]}),r&&t("button",{className:"m-1 black-button d-flex justify-content-center align-items-center",onClick:()=>{n({type:"deleteProfile",payload:{id:i}}),e("/")},children:t("h4",{className:"m-0 p-1",children:"Delete Profile"})})]})]})]})},S=L.createContext({}),ie="http://www.omdbapi.com",re="5c08063e",R=E.create({baseURL:`${ie}/?apiKey=${re}&`}),oe=async e=>{const{data:s}=await R.get(`&s=${e}`);return s.Search[Math.floor(Math.random()*s.Search.length)]},T=({movie:e})=>{const s=g(),n=s.pathname=="/browse",r=s.pathname=="/watch",a=N(),[i,d]=c.exports.useState(e||null);return c.exports.useEffect(()=>{e||(async()=>{const m=K(),f=await oe(m);d(f)})()},[]),t("div",{className:`container-fluid mt-4 ${n?"cursor-pointer":""}`,onClick:r?void 0:()=>{a("/watch",{state:i})},children:o("div",{className:"row billboard-container",children:[t("img",{className:"col-12 billboard-background-blur",src:i==null?void 0:i.Poster}),t("img",{className:"billboard",src:i==null?void 0:i.Poster}),o("div",{className:"align-self-center m-3 billboard-info",children:[t("h1",{className:"white",children:i==null?void 0:i.Title}),t("h4",{className:"white",children:i==null?void 0:i.Year})]})]})})},ce=async e=>{const{data:s}=await R.get(`&s=${e}`);return s.Search},le=({movie:e})=>{const s=N();return t("div",{className:"col-3 col-sm-3 col-md-2 col-lg-2 col-xl-1 p-1 carousel-movie position-relative cursor-pointer",onClick:()=>{s("/watch",{state:e})},children:t("img",{src:e.Poster,className:"d-block w-100 img-fluid"})})},I=({genre:e,favorites:s})=>{const[n,r]=c.exports.useState([]);return c.exports.useEffect(()=>{e&&(async()=>{const a=await ce(e);r(a)})(),s&&r(s)},[]),t("div",{className:"container-fluid mt-4 carousel-parent",children:o("div",{className:"row",children:[t("div",{className:"col-12",children:t("h3",{className:"mt-4 white carousel-title",children:e?e.toUpperCase():"My List"})}),t("div",{className:"col-12",children:t("div",{className:"carousel",children:n.map(a=>t(le,{movie:a},a.imdbID))})})]})})},de=()=>{const e=["Action","Crime","Comedy","Horror","Documentary","Standup","Music","Romantic","Christmas","Drama","Animation"],[s]=c.exports.useContext(S);return o("div",{className:"h-100 d-flex flex-column justify-content-between align-items-center",children:[t(b,{}),o("div",{className:"w-100 h-100 d-flex flex-column justify-content-start align-items-center",children:[t(T,{}),s.list.length>0&&t(I,{favorites:s.list}),e.map(n=>t(I,{genre:n},n))]})]})},me=async e=>{const{data:s}=await R.get(`&i=${e}&plot=full`);return s},ue=e=>new Date(e).getFullYear(),he=e=>{let s=e;if(!e)return"0m";typeof e=="string"&&(s=parseInt(e.toString().replaceAll("String","")));const n=Math.floor(s/60),r=s%60;return n?`${n}h ${r}m`:`${r}m`},fe=()=>{const s=g().state,[n,r]=c.exports.useContext(S),[a,i]=c.exports.useState(),[d,l]=c.exports.useState(!1),m=n.list.find(p=>p.imdbID==s.imdbID);return c.exports.useEffect(()=>{(async()=>{const p=await me(s.imdbID);i(p)})()},[]),o("div",{className:"d-flex flex-column justify-content-between align-items-center",children:[t(b,{}),t(T,{movie:s}),t("div",{className:"container-fluid",children:o("div",{className:"row",children:[o("div",{className:"col-12 d-flex flex-row align-items-center",children:[o("button",{className:"d-flex flex-row align-items-center rounded white-button cursor-pointer",children:[t(w,{icon:G,className:"h4 m-0 p-2"}),t("h2",{className:"m-0 p-2",children:"Play"})]}),t("button",{className:`rounded-dark-button m-4 ${m?"watch-like-button-clicked":""}`,onClick:m?()=>{r({type:"removeFromList",payload:s})}:()=>{r({type:"addToList",payload:s})},children:m?t(w,{icon:_,className:"h4 m-0 p-2"}):t(w,{icon:J,className:"h4 m-0 p-2"})}),t("button",{className:`rounded-dark-button ${d?"watch-like-button-clicked":""}`,onClick:()=>l(!d),children:t(w,{icon:Q,className:"h4 m-0 p-2"})})]}),t("div",{className:"col-12 d-flex flex-row align-items-center",children:o("h3",{className:"white",children:[ue(a==null?void 0:a.Released)," ",he(a==null?void 0:a.Runtime)]})}),t("div",{className:"col-12 d-flex flex-row align-items-center",children:t("h5",{className:"white",children:a==null?void 0:a.Plot})})]})})]})},pe=()=>t(V,{children:o(X,{children:[t(x,{path:"/",element:t(se,{})}),t(x,{path:"/create-profile",element:t(ae,{})}),t(x,{path:"/browse",element:t(de,{})}),t(x,{path:"/watch",element:t(fe,{})})]})});const B={id:0,avatar:null,name:null,users:[]};function ve(e=B,s){switch(s.type){case"addProfile":return e=v(u({},e),{users:e.users.concat(v(u({},s.payload),{id:Date.now()}))}),e;case"editProfile":{const n=s.payload.id,a=e.users.filter(d=>d.id!=n).concat(v(u({},s.payload),{id:n}));return e=v(u({},e),{users:a}),e}case"deleteProfile":{const n=s.payload.id,r=e.users.filter(i=>i.id!=n);return e=v(u({},e),{users:r}),e}case"setProfile":{const n=s.payload.id,r=e.users.filter(i=>i.id==n)[0];return e=u(u({},e),r),e}default:throw new Error("In order to change the state send an action type and a payload")}}const U={list:[]};function we(e=U,s){switch(s.type){case"addToList":return e.list.find(r=>r.imdbID==s.payload.imdbID)||(e={list:e.list.concat(u({},s.payload))}),e;case"removeFromList":return e={list:e.list.filter(r=>r.imdbID!=s.payload.imdbID)},e}}const xe=()=>{const[e,s]=c.exports.useReducer(ve,B),[n,r]=c.exports.useReducer(we,U);return t(y.Provider,{value:[e,s],children:t(S.Provider,{value:[n,r],children:t("div",{className:"App",children:t(pe,{})})})})};Z.render(t(L.StrictMode,{children:t(xe,{})}),document.getElementById("root"));
