/*! For license information please see 751.f5fdcf49.js.LICENSE.txt */
"use strict";(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[751],{4973:(e,t,n)=>{n.d(t,{Z:()=>f,I:()=>l});var r=n(7294);const o=/{\w+}/g,a="{}";function s(e,t){const n=[],s=e.replace(o,(e=>{const o=e.substr(1,e.length-2),s=null==t?void 0:t[o];if(void 0!==s){const e=r.isValidElement(s)?s:String(s);return n.push(e),a}return e}));return 0===n.length?e:n.every((e=>"string"==typeof e))?s.split(a).reduce(((e,t,r)=>{var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):s.split(a).reduce(((e,t,o)=>[...e,r.createElement(r.Fragment,{key:o},t,n[o])]),[])}function i({children:e,values:t}){if("string"!=typeof e)throw console.warn("Illegal <Interpolate> children",e),new Error("The Docusaurus <Interpolate> component only accept simple string values");return s(e,t)}var u=n(7529);function c({id:e,message:t}){var n;return null!==(n=u[null!=e?e:t])&&void 0!==n?n:t}function l({message:e,id:t},n){var r;return s(null!==(r=c({message:e,id:t}))&&void 0!==r?r:e,n)}function f({children:e,id:t,values:n}){var o;if("string"!=typeof e)throw console.warn("Illegal <Translate> children",e),new Error("The Docusaurus <Translate> component only accept simple string values");const a=null!==(o=c({message:e,id:t}))&&void 0!==o?o:e;return r.createElement(i,{values:n},a)}},8143:(e,t,n)=>{n.r(t),n.d(t,{BrowserRouter:()=>r.VK,HashRouter:()=>r.UT,Link:()=>r.rU,MemoryRouter:()=>r.VA,NavLink:()=>r.OL,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=n(3727)},8084:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o,useAllPluginInstancesData:()=>a,usePluginData:()=>s});var r=n(2263);function o(){const{globalData:e}=(0,r.Z)();if(!e)throw new Error("Docusaurus global data not found.");return e}function a(e){const t=o()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function s(e,t="default"){const n=a(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},8408:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(8143);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for \""+t+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((e=>e.path)).join(", "));return a};t.getLatestVersion=e=>e.versions.find((e=>e.isLast));t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))};t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),a=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:a,alternateDocVersions:a?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(a.id):{}}};t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(655),o=n(8143),a=r.__importStar(n(8084)),s=n(8408),i={};t.useAllDocsData=()=>{var e;return null!==(e=a.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:i};t.useDocsData=e=>a.usePluginData("docusaurus-plugin-content-docs",e);t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:r}=o.useLocation();return s.getActivePlugin(n,r,e)};t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:r}=o.useLocation();if(n){return{activePlugin:n,activeVersion:s.getActiveVersion(n.pluginData,r)}}};t.useVersions=e=>t.useDocsData(e).versions;t.useLatestVersion=e=>{const n=t.useDocsData(e);return s.getLatestVersion(n)};t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return s.getActiveVersion(n,r)};t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return s.getActiveDocContext(n,r)};t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return s.getDocVersionSuggestions(n,r)}},907:(e,t,n)=>{n.d(t,{Iw:()=>r.useActiveDocContext,gA:()=>r.useActivePlugin,zu:()=>r.useActiveVersion,_r:()=>r.useAllDocsData,Jo:()=>r.useDocVersionSuggestions,zh:()=>r.useDocsData,yW:()=>r.useLatestVersion,gB:()=>r.useVersions});var r=n(6730)},3018:(e,t,n)=>{n.d(t,{pl:()=>fe,zF:()=>M,HX:()=>g,PO:()=>G,L5:()=>ne,Cv:()=>K,Cn:()=>q,kM:()=>ae,WA:()=>u,os:()=>v,Mg:()=>m,_f:()=>c,bc:()=>p,l5:()=>f,nT:()=>de,uR:()=>x,J:()=>oe,be:()=>pe,SL:()=>E,g8:()=>X,D9:()=>D,LU:()=>o,pe:()=>b});var r=n(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}function a(e="localStorage"){if("undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,s||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),s=!0),null}var t}let s=!1;const i={get:()=>null,set:()=>{},del:()=>{}};const u=(e,t)=>{if("undefined"==typeof window)return function(e){function t(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:t,set:t,del:t}}(e);const n=a(null==t?void 0:t.persistence);return null===n?i:{get:()=>n.getItem(e),set:t=>n.setItem(e,t),del:()=>n.removeItem(e)}};function c(e="localStorage"){const t=a(e);if(!t)return[];const n=[];for(let r=0;r<t.length;r+=1){const e=t.key(r);null!==e&&n.push(e)}return n}var l=n(5977);function f(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:o}}=(0,r.Z)(),{pathname:a}=(0,l.TH)(),s=o===n?e:e.replace("/"+o+"/","/"),i=a.replace(e,"");return{createUrl:function({locale:e,fullyQualified:r}){return""+(r?t:"")+function(e){return e===n?""+s:""+s+e+"/"}(e)+i}}}const d=/title=(["'])(.*?)\1/;function p(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(d))||void 0===t?void 0:t[2])&&void 0!==n?n:""}const g="default";function v(e,t){return"docs-"+e+"-"+t}var h=n(907);const y=!!h._r,m=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:e+"/";return n(e)===n(t)},b=e=>{const{siteConfig:t={}}=(0,r.Z)(),{title:n,titleDelimiter:o="|"}=t;return e&&e.trim().length?e.trim()+" "+o+" "+n:n};var w=n(7294);const P=["zero","one","two","few","many","other"];function _(e){return P.filter((t=>e.includes(t)))}_(["one","other"]);function D(e){const t=(0,w.useRef)();return(0,w.useEffect)((()=>{t.current=e})),t.current}function E(e){const t=(0,l.TH)(),n=D(t),r=(0,w.useRef)(!0);(0,w.useEffect)((()=>{r.current?r.current=!1:e({location:t,previousLocation:n})}),[t])}var S=n(3366),A=n(412);const O=["collapsed"],V=["lazy"];function x({initialState:e}){const[t,n]=(0,w.useState)(null!=e&&e),r=(0,w.useCallback)((()=>{n((e=>!e))}),[]);return{collapsed:t,setCollapsed:n,toggleCollapsed:r}}const C={display:"none",overflow:"hidden",height:"0px"},j={display:"block",overflow:"visible",height:"auto"};function L(e,t){const n=t?C:j;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function R({collapsibleRef:e,collapsed:t,animation:n}){const r=(0,w.useRef)(!1);(0,w.useEffect)((()=>{const o=e.current;function a(){var e,t;const r=o.scrollHeight;return{transition:"height "+(null!==(e=null==n?void 0:n.duration)&&void 0!==e?e:function(e){const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(r))+"ms "+(null!==(t=null==n?void 0:n.easing)&&void 0!==t?t:"ease-in-out"),height:r+"px"}}function s(){const e=a();o.style.transition=e.transition,o.style.height=e.height}if(!r.current)return L(o,t),void(r.current=!0);return o.style.willChange="height",function(){const e=requestAnimationFrame((()=>{t?(s(),requestAnimationFrame((()=>{o.style.height=C.height,o.style.overflow=C.overflow}))):(o.style.display="block",requestAnimationFrame((()=>{s()})))}));return()=>cancelAnimationFrame(e)}()}),[e,t,n])}function I(e){if(!A.Z.canUseDOM)return e?C:j}function T({as:e="div",collapsed:t,children:n,animation:r,onCollapseTransitionEnd:o,className:a,disableSSRStyle:s}){const i=(0,w.useRef)(null);return R({collapsibleRef:i,collapsed:t,animation:r}),w.createElement(e,{ref:i,style:s?void 0:I(t),onTransitionEnd:e=>{if("height"!==e.propertyName)return;const n=i.current,r=n.style.height;t||parseInt(r,10)!==n.scrollHeight||(L(n,!1),null==o||o(!1)),r===C.height&&(L(n,!0),null==o||o(!0))},className:a},n)}function k(e){let{collapsed:t}=e,n=(0,S.Z)(e,O);const[r,o]=(0,w.useState)(!t);(0,w.useLayoutEffect)((()=>{t||o(!0)}),[t]);const[a,s]=(0,w.useState)(t);return(0,w.useLayoutEffect)((()=>{r&&s(t)}),[r,t]),r?w.createElement(T,Object.assign({},n,{collapsed:a})):null}function M(e){let{lazy:t}=e,n=(0,S.Z)(e,V);const r=t?k:T;return w.createElement(r,Object.assign({},n))}var N=n(6010);const Z="details_2Ziz",F="isClient_1Fil",H="collapsibleContent_3OHp",z=["summary","children"];function B(e){return!!e&&("SUMMARY"===e.tagName||B(e.parentElement))}function U(e,t){return!!e&&(e===t||U(e.parentElement,t))}const G=e=>{let{summary:t,children:n}=e,o=(0,S.Z)(e,z);const{isClient:a}=(0,r.Z)(),s=(0,w.useRef)(null),{collapsed:i,setCollapsed:u}=x({initialState:!o.open}),[c,l]=(0,w.useState)(o.open);return w.createElement("details",Object.assign({},o,{ref:s,open:c,"data-collapsed":i,className:(0,N.Z)(Z,{[F]:a},o.className),onMouseDown:e=>{B(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;B(t)&&U(t,s.current)&&(e.preventDefault(),i?(u(!1),l(!0)):u(!0))}}),t,w.createElement(M,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),l(!e)}},w.createElement("div",{className:H},n)))};const W=(0,w.createContext)(null);function q({children:e}){return w.createElement(W.Provider,{value:(0,w.useState)(null)},e)}function J(){const e=(0,w.useContext)(W);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function X(){const[e]=J();if(e){const t=e.component;return function(n){return w.createElement(t,Object.assign({},e.props,n))}}return()=>{}}function K({component:e,props:t}){const[,n]=J(),r=(o=t,(0,w.useMemo)((()=>o),[...Object.keys(o),...Object.values(o)]));var o;return(0,w.useEffect)((()=>{n({component:e,props:r})}),[n,e,r]),(0,w.useEffect)((()=>()=>n(null)),[n]),null}const Q=e=>"docs-preferred-version-"+e,Y={save:(e,t,n)=>{u(Q(e),{persistence:t}).set(n)},read:(e,t)=>u(Q(e),{persistence:t}).get(),clear:(e,t)=>{u(Q(e),{persistence:t}).del()}};function $({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=Y.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(Y.clear(e,t),{preferredVersionName:null})}(e)})),r}function ee(){const e=(0,h._r)(),t=o().docs.versionPersistence,n=(0,w.useMemo)((()=>Object.keys(e)),[e]),[r,a]=(0,w.useState)((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));(0,w.useEffect)((()=>{a($({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,(0,w.useMemo)((()=>({savePreferredVersion:function(e,n){Y.save(e,t,n),a((t=>Object.assign({},t,{[e]:{preferredVersionName:n}})))}})),[a])]}const te=(0,w.createContext)(null);function ne({children:e}){return y?w.createElement(re,null,e):w.createElement(w.Fragment,null,e)}function re({children:e}){const t=ee();return w.createElement(te.Provider,{value:t},e)}function oe(e="default"){const t=(0,h.zh)(e),[n,r]=function(){const e=(0,w.useContext)(te);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),{preferredVersionName:o}=n[e];return{preferredVersion:o?t.versions.find((e=>e.name===o)):null,savePreferredVersionName:(0,w.useCallback)((t=>{r.savePreferredVersion(e,t)}),[r])}}const ae={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}},se=u("docusaurus.announcement.dismiss"),ie=u("docusaurus.announcement.id"),ue=()=>"true"===se.get(),ce=e=>se.set(String(e)),le=(0,w.createContext)(null),fe=({children:e})=>{const t=(()=>{const{announcementBar:e}=o(),{isClient:t}=(0,r.Z)(),[n,a]=(0,w.useState)((()=>!!t&&ue()));(0,w.useEffect)((()=>{a(ue())}),[]);const s=(0,w.useCallback)((()=>{ce(!0),a(!0)}),[]);return(0,w.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=ie.get();"annoucement-bar"===n&&(n="announcement-bar");const r=t!==n;ie.set(t),r&&ce(!1),!r&&ue()||a(!1)}),[]),(0,w.useMemo)((()=>({isClosed:n,close:s})),[n])})();return w.createElement(le.Provider,{value:t},e)},de=()=>{const e=(0,w.useContext)(le);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function pe(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),{pathname:t}=(0,l.TH)();return t.replace(e,"/")}},6010:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})},655:(e,t,n)=>{n.r(t),n.d(t,{__extends:()=>o,__assign:()=>a,__rest:()=>s,__decorate:()=>i,__param:()=>u,__metadata:()=>c,__awaiter:()=>l,__generator:()=>f,__createBinding:()=>d,__exportStar:()=>p,__values:()=>g,__read:()=>v,__spread:()=>h,__spreadArrays:()=>y,__spreadArray:()=>m,__await:()=>b,__asyncGenerator:()=>w,__asyncDelegator:()=>P,__asyncValues:()=>_,__makeTemplateObject:()=>D,__importStar:()=>S,__importDefault:()=>A,__classPrivateFieldGet:()=>O,__classPrivateFieldSet:()=>V});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function i(e,t,n,r){var o,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(a<3?o(s):a>3?o(t,n,s):o(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s}function u(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,a){function s(e){try{u(r.next(e))}catch(t){a(t)}}function i(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}u((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(i){a=[6,i],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function g(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(i){o={error:i}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return s}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function y(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],s=0,i=a.length;s<i;s++,o++)r[o]=a[s];return r}function m(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||t)}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||i(e,t)}))})}function i(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(u,c):l(a[0][2],n)}catch(r){l(a[0][3],r)}var n}function u(e){i("next",e)}function c(e){i("throw",e)}function l(e,t){e(t),a.shift(),a.length&&i(a[0][0],a[0][1])}}function P(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=g(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function D(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var E=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return E(t,e),t}function A(e){return e&&e.__esModule?e:{default:e}}function O(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function V(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);