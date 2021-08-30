"use strict";(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[918],{6742:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(3366),r=n(7294),l=n(3727),i=n(2263),s=n(3919),o=n(412);const c=(0,r.createContext)({collectLink:()=>{}});var d=n(4996),u=n(8780);const m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const v=function(e){let{isNavLink:t,to:n,href:v,activeClassName:h,isActive:p,"data-noBrokenLinkCheck":f,autoAddBaseUrl:E=!0}=e,g=(0,a.Z)(e,m);var b;const{siteConfig:{trailingSlash:_,baseUrl:N}}=(0,i.Z)(),{withBaseUrl:k}=(0,d.C)(),U=(0,r.useContext)(c),w=n||v,y=(0,s.Z)(w),L=null==w?void 0:w.replace("pathname://","");let Z=void 0!==L?(C=L,E&&(e=>e.startsWith("/"))(C)?k(C):C):void 0;var C;Z&&y&&(Z=(0,u.applyTrailingSlash)(Z,{trailingSlash:_,baseUrl:N}));const T=(0,r.useRef)(!1),A=t?l.OL:l.rU,O=o.Z.canUseIntersectionObserver;let B;(0,r.useEffect)((()=>(!O&&y&&null!=Z&&window.docusaurus.prefetch(Z),()=>{O&&B&&B.disconnect()})),[Z,O,y]);const S=null!==(b=null==Z?void 0:Z.startsWith("#"))&&void 0!==b&&b,M=!Z||!y||S;return Z&&y&&!S&&!f&&U.collectLink(Z),M?r.createElement("a",Object.assign({href:Z},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},g)):r.createElement(A,Object.assign({},g,{onMouseEnter:()=>{T.current||null==Z||(window.docusaurus.preload(Z),T.current=!0)},innerRef:e=>{var t,n;O&&e&&y&&(t=e,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},B=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))})),B.observe(t))},to:Z||""},t&&{isActive:p,activeClassName:h}))}},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>r})},4996:(e,t,n)=>{n.d(t,{C:()=>l,Z:()=>i});var a=n(2263),r=n(3919);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=l();return n(e,t)}},1264:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var a=n(7294),r=n(6010),l=n(907),i=n(3783),s=n(6742),o=n(4973);const c=function(e){const{metadata:t}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(s.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(s.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var d=n(2263),u=n(1773);const m={unreleased:function({siteTitle:e,versionMetadata:t}){return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=m[e.versionMetadata.banner];return a.createElement(t,e)}function h({versionLabel:e,to:t,onClick:n}){return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:a.createElement("b",null,a.createElement(s.Z,{to:t,onClick:n},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p({versionMetadata:e}){const{siteConfig:{title:t}}=(0,d.Z)(),{pluginId:n}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,u.J)(n),{latestDocSuggestion:i,latestVersionSuggestion:s}=(0,l.Jo)(n),o=null!=i?i:(c=s).docs.find((e=>e.id===c.mainDocId));var c;return a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:t,versionMetadata:e})),a.createElement("div",{className:"margin-top--md"},a.createElement(h,{versionLabel:s.label,to:o.path,onClick:()=>r(s.name)})))}const f=function({versionMetadata:e}){return"none"===e.banner?a.createElement(a.Fragment,null):a.createElement(p,{versionMetadata:e})};var E=n(1217);function g({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return a.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function b({lastUpdatedBy:e}){return a.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,e)}}," by {user}")}function _({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:n}){return a.createElement(a.Fragment,null,a.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?a.createElement(g,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:n?a.createElement(b,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}var N=n(7462),k=n(3366);const U="iconEdit_2_ui",w=["className"],y=e=>{let{className:t}=e,n=(0,k.Z)(e,w);return a.createElement("svg",(0,N.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(U,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function L({editUrl:e}){return a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},a.createElement(y,null),a.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var Z=n(7211);const C="tags_2ga9",T="tag_11ep";function A({tags:e}){return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(C,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>a.createElement("li",{key:t,className:T},a.createElement(Z.Z,{name:e,permalink:t}))))))}const O="lastUpdated_13-_";function B(e){return a.createElement("div",{className:"row margin-bottom--sm"},a.createElement("div",{className:"col"},a.createElement(A,e)))}function S({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:n,formattedLastUpdatedAt:l}){return a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},e&&a.createElement(L,{editUrl:e})),a.createElement("div",{className:(0,r.Z)("col",O)},(t||n)&&a.createElement(_,{lastUpdatedAt:t,formattedLastUpdatedAt:l,lastUpdatedBy:n})))}function M(e){const{content:t}=e,{metadata:n}=t,{editUrl:r,lastUpdatedAt:l,formattedLastUpdatedAt:i,lastUpdatedBy:s,tags:o}=n,c=o.length>0,d=!!(r||l||s);return c||d?a.createElement("footer",{className:"docusaurus-mt-lg"},c&&a.createElement(B,{tags:o}),d&&a.createElement(S,{editUrl:r,lastUpdatedAt:l,lastUpdatedBy:s,formattedLastUpdatedAt:i})):a.createElement(a.Fragment,null)}function I(e){const t=e.getBoundingClientRect();return t.top===t.bottom?I(e.parentNode):t}function x({anchorTopOffset:e}){const t=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=t.find((t=>I(t).top>=e));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(I(n))?n:null!=(a=t[t.indexOf(n)-1])?a:null;var a}return t[t.length-1]}function D(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,u.LU)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const R=function(e){const t=(0,a.useRef)(void 0),n=D();(0,a.useEffect)((()=>{const{linkClassName:a,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=x({anchorTopOffset:n.current}),i=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},W="tableOfContents_35-E",P="table-of-contents__link",j={linkClassName:P,linkActiveClassName:"table-of-contents__link--active"};function z({toc:e,isChild:t}){return e.length?a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:P,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(z,{isChild:!0,toc:e.children}))))):null}const F=function({toc:e}){return R(j),a.createElement("div",{className:(0,r.Z)(W,"thin-scrollbar")},a.createElement(z,{toc:e}))},V="tocCollapsible_1PrD",q="tocCollapsibleButton_2O1e",H="tocCollapsibleContent_2Ydz",J="tocCollapsibleExpanded_3GYr";function Y({toc:e,className:t}){const{collapsed:n,toggleCollapsed:l}=(0,u.uR)({initialState:!0});return a.createElement("div",{className:(0,r.Z)(V,{[J]:!n},t)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",q),onClick:l},a.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.zF,{lazy:!0,className:H,collapsed:n},a.createElement(z,{toc:e})))}var G=n(6159);const K="docItemContainer_33ec",Q="docItemCol_3FnS",X="tocMobile_3Hoh";function $(e){const{content:t,versionMetadata:n}=e,{metadata:s,frontMatter:o}=t,{image:d,keywords:u,hide_title:m,hide_table_of_contents:v}=o,{description:h,title:p}=s,{pluginId:g}=(0,l.gA)({failfast:!0}),b=(0,l.gB)(g).length>1,_=!m&&void 0===t.contentTitle,N=(0,i.Z)(),k=!v&&t.toc&&t.toc.length>0,U=k&&("desktop"===N||"ssr"===N);return a.createElement(a.Fragment,null,a.createElement(E.Z,{title:p,description:h,keywords:u,image:d}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",{[Q]:!v})},a.createElement(f,{versionMetadata:n}),a.createElement("div",{className:K},a.createElement("article",null,b&&a.createElement("span",{className:"badge badge--secondary"},"Version: ",n.label),k&&a.createElement(Y,{toc:t.toc,className:X}),a.createElement("div",{className:"markdown"},_&&a.createElement(G.N,null,p),a.createElement(t,null)),a.createElement(M,e)),a.createElement(c,{metadata:s}))),U&&a.createElement("div",{className:"col col--3"},a.createElement(F,{toc:t.toc}))))}},6159:(e,t,n)=>{n.d(t,{N:()=>m,Z:()=>v});var a=n(3366),r=n(7462),l=n(7294),i=n(6010),s=n(4973),o=n(1773);const c="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",u=["id"],m=function(e){let t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},v=e=>{return"h1"===e?m:(t=e,function(e){let{id:n}=e,r=(0,a.Z)(e,u);const{navbar:{hideOnScroll:m}}=(0,o.LU)();return n?l.createElement(t,r,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor","anchor__"+t,{[d]:m,[c]:!m}),id:n}),r.children,l.createElement("a",{className:"hash-link",href:"#"+n,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,r)});var t}},1217:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(9105),l=n(1773),i=n(4996);function s({title:e,description:t,keywords:n,image:s,children:o}){const c=(0,l.pe)(e),{withBaseUrl:d}=(0,i.C)(),u=s?d(s,{absolute:!0}):void 0;return a.createElement(r.Z,null,e&&a.createElement("title",null,c),e&&a.createElement("meta",{property:"og:title",content:c}),t&&a.createElement("meta",{name:"description",content:t}),t&&a.createElement("meta",{property:"og:description",content:t}),n&&a.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),u&&a.createElement("meta",{property:"og:image",content:u}),u&&a.createElement("meta",{name:"twitter:image",content:u}),o)}},7211:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(6010),l=n(6742);const i="tag_1Okp",s="tagRegular_3MiF",o="tagWithCount_1HU1";const c=function(e){const{permalink:t,name:n,count:c}=e;return a.createElement(l.Z,{href:t,className:(0,r.Z)(i,{[s]:!c,[o]:c})},n,c&&a.createElement("span",null,c))}},3783:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(412);const l="desktop",i="mobile",s="ssr";function o(){return r.Z.canUseDOM?window.innerWidth>996?l:i:s}const c=function(){const[e,t]=(0,a.useState)((()=>o()));return(0,a.useEffect)((()=>{function e(){t(o())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:a}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[r]=e.split(/[#?]/),l="/"===r||r===a?r:(i=r,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(r,l)}},8780:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(l).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);