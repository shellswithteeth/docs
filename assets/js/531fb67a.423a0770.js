"use strict";(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,b=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3407:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>m});var r=n(7462),o=n(3366),i=(n(7294),n(3905));const a=["components"],l={slug:"/interpolation",hide_table_of_contents:!0},p="Interpolation",s={unversionedId:"website/settings/interpolation",id:"website/settings/interpolation",isDocsHomePage:!1,title:"Interpolation",description:"Interpolation makes projects appear smoother by interpolating movement of sprites between frames.",source:"@site/docs/website/settings/interpolation.md",sourceDirName:"website/settings",slug:"/interpolation",permalink:"/interpolation",editUrl:"https://github.com/TurboWarp/docs/edit/master/docs/website/settings/interpolation.md",version:"current",frontMatter:{slug:"/interpolation",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"60 FPS (Custom FPS)",permalink:"/custom-fps"},next:{title:"High Quality Pen",permalink:"/high-quality-pen"}},c=[],u={toc:c};function m(e){let{components:t}=e,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interpolation"},"Interpolation"),(0,i.kt)("p",null,"Interpolation makes projects appear smoother by interpolating movement of sprites between frames."),(0,i.kt)("p",null,"Interpolation should not be used on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"3D projects"),(0,i.kt)("li",{parentName:"ul"},"Raytracers"),(0,i.kt)("li",{parentName:"ul"},"Pen projects"),(0,i.kt)("li",{parentName:"ul"},"Laggy projects")),(0,i.kt)("p",null,"Interpolation is unlikely to make these projects look smoother because interpolation can't interpolate pen, but it will hurt performance."),(0,i.kt)("p",null,"Interpolation can introduce slight (up to 1/30th of a second) input latency."),(0,i.kt)("p",null,"Complex projects such as scrolling platformers can experience graphical glitches."))}m.isMDXComponent=!0}}]);