"use strict";(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[345],{3905:(I,g,e)=>{e.d(g,{Zo:()=>o,kt:()=>s});var t=e(7294);function C(I,g,e){return g in I?Object.defineProperty(I,g,{value:e,enumerable:!0,configurable:!0,writable:!0}):I[g]=e,I}function a(I,g){var e=Object.keys(I);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(I);g&&(t=t.filter((function(g){return Object.getOwnPropertyDescriptor(I,g).enumerable}))),e.push.apply(e,t)}return e}function i(I){for(var g=1;g<arguments.length;g++){var e=null!=arguments[g]?arguments[g]:{};g%2?a(Object(e),!0).forEach((function(g){C(I,g,e[g])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(g){Object.defineProperty(I,g,Object.getOwnPropertyDescriptor(e,g))}))}return I}function n(I,g){if(null==I)return{};var e,t,C=function(I,g){if(null==I)return{};var e,t,C={},a=Object.keys(I);for(t=0;t<a.length;t++)e=a[t],g.indexOf(e)>=0||(C[e]=I[e]);return C}(I,g);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(I);for(t=0;t<a.length;t++)e=a[t],g.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(I,e)&&(C[e]=I[e])}return C}var A=t.createContext({}),l=function(I){var g=t.useContext(A),e=g;return I&&(e="function"==typeof I?I(g):i(i({},g),I)),e},o=function(I){var g=l(I.components);return t.createElement(A.Provider,{value:g},I.children)},d={inlineCode:"code",wrapper:function(I){var g=I.children;return t.createElement(t.Fragment,{},g)}},r=t.forwardRef((function(I,g){var e=I.components,C=I.mdxType,a=I.originalType,A=I.parentName,o=n(I,["components","mdxType","originalType","parentName"]),r=l(e),s=C,M=r["".concat(A,".").concat(s)]||r[s]||d[s]||a;return e?t.createElement(M,i(i({ref:g},o),{},{components:e})):t.createElement(M,i({ref:g},o))}));function s(I,g){var e=arguments,C=g&&g.mdxType;if("string"==typeof I||C){var a=e.length,i=new Array(a);i[0]=r;var n={};for(var A in g)hasOwnProperty.call(g,A)&&(n[A]=g[A]);n.originalType=I,n.mdxType="string"==typeof I?I:C,i[1]=n;for(var l=2;l<a;l++)i[l]=e[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,e)}r.displayName="MDXCreateElement"},5822:(I,g,e)=>{e.r(g),e.d(g,{frontMatter:()=>n,contentTitle:()=>A,metadata:()=>l,toc:()=>o,default:()=>r});var t=e(7462),C=e(3366),a=(e(7294),e(3905));const i=["components"],n={slug:"/how",hide_table_of_contents:!0},A="How TurboWarp runs projects faster",l={unversionedId:"website/how-it-works",id:"website/how-it-works",isDocsHomePage:!1,title:"How TurboWarp runs projects faster",description:"TurboWarp uses a compiler to while Scratch uses an interpreter. This allows TurboWarp to run up to 20x faster, but it makes live script editing impracticable\\[1\\].",source:"@site/docs/website/how-it-works.md",sourceDirName:"website",slug:"/how",permalink:"/how",editUrl:"https://github.com/TurboWarp/docs/edit/master/docs/website/how-it-works.md",tags:[],version:"current",frontMatter:{slug:"/how",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Embedding",permalink:"/embedding"},next:{title:"How to see the JavaScript",permalink:"/javascript"}},o=[{value:"An analogy",id:"analogy",children:[]},{value:"Technical details",id:"technical-details",children:[]}],d={toc:o};function r(I){let{components:g}=I,n=(0,C.Z)(I,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:g,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-turbowarp-runs-projects-faster"},"How TurboWarp runs projects faster"),(0,a.kt)("p",null,"TurboWarp uses a ",(0,a.kt)("em",{parentName:"p"},"compiler")," to while Scratch uses an ",(0,a.kt)("em",{parentName:"p"},"interpreter"),". This allows TurboWarp to run up to 20x faster, but it makes live script editing impracticable",(0,a.kt)("sup",null,(0,a.kt)("a",{parentName:"p",href:"#footnote-1"},"[","1","]")),"."),(0,a.kt)("h2",{id:"analogy"},"An analogy"),(0,a.kt)("p",null,"Consider a complicated math problem, something like long division, a crazy integral, that type of thing."),(0,a.kt)("p",null,"Scratch's interpreter is like evaluating it entirely by hand, using pencil and paper, without a calculator, using only physical books as reference."),(0,a.kt)("p",null,"TurboWarp's compiler is like making a computer solve it for you."),(0,a.kt)("p",null,"In the end, you should end up with the same result, but one of the methods will be a lot faster."),(0,a.kt)("h2",{id:"technical-details"},"Technical details"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The section is simplified to make things easier to understand. The removed things are not that interesting."))),(0,a.kt)("p",null,"Consider the following script:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"When green flag clicked, forever, move my variable steps",src:e(3571).Z})),(0,a.kt)("p",null,"Scratch's interpreter interprets an ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"},"abstract syntax tree")," at runtime. Internally that looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "va[U{Cbi_NZpSOSx_kVA": {\n    "opcode": "event_whenflagclicked",\n    "inputs": {},\n    "fields": {},\n    "next": "tzXnZ{8G!xK|t^WAWF{m",\n    "topLevel": true\n  },\n  "tzXnZ{8G!xK|t^WAWF{m": {\n    "opcode": "control_forever",\n    "inputs": {\n      "SUBSTACK": {\n        "name": "SUBSTACK",\n        "block": "$xf$bq|xl(}RhT-K,taS"\n      }\n    },\n    "fields": {},\n    "next": null,\n    "topLevel": false\n  },\n  "$xf$bq|xl(}RhT-K,taS": {\n    "opcode": "motion_movesteps",\n    "inputs": {\n      "STEPS": {\n        "name": "STEPS",\n        "block": "cw__.I:g}Y~`:5KmO00q"\n      }\n    },\n    "fields": {},\n    "next": null,\n    "topLevel": false\n  },\n  "cw__.I:g}Y~`:5KmO00q": {\n    "opcode": "data_variable",\n    "inputs": {},\n    "fields": {\n      "VARIABLE": {\n        "name": "VARIABLE",\n        "id": "`jEk@4|i[#Fk?(8x)AV.-my variable"\n      }\n    },\n    "next": null,\n    "topLevel": false\n  }\n}\n')),(0,a.kt)("p",null,"Whenever Scratch executes any block, it has to do a lot of things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It has to look up the block's opcode, to see what code it has to run"),(0,a.kt)("li",{parentName:"ul"},"It has to figure out whether the block has any inputs or fields (similar but different), and evaluate those if it has any. Inputs themselves are blocks that also have to be executed the same as any other, and so are their inputs, and so on."),(0,a.kt)("li",{parentName:"ul"},"It has to see whether or not there is another block to execute after the current one"),(0,a.kt)("li",{parentName:"ul"},"It has to maintain an internal stack and other state to know what block it's executing at what time"),(0,a.kt)("li",{parentName:"ul"},"It has to constantly check to make sure that no scripts have changed"),(0,a.kt)("li",{parentName:"ul"},"etc. There is a ",(0,a.kt)("em",{parentName:"li"},"lot")," going on in Scratch whenever it executes even a single block")),(0,a.kt)("p",null,"The code that does all this is written in JavaScript. Your browser is already doing a similar variety of tasks whenever it executes any JavaScript code (it's much more complicated, don't worry too much about it), but now the overhead of the interpreter has to be added on top of that."),(0,a.kt)("p",null,"TurboWarp's compiler removes all of that overhead by converting scripts directly to JavaScript functions, for example, something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const b0 = stage.variables["`jEk@4|i[#Fk?(8x)AV.-my variable"];\nreturn function* () {\n  while (true) {\n    runtime.ext_scratch3_motion._moveSteps((+b0.value || 0), target);\n    if (thread.warp === 0 || isStuck()) yield;\n  }\n};\n')),(0,a.kt)("p",null,"Things to notice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No more looking up opcodes by hand: all the logic is just in the JavaScript"),(0,a.kt)("li",{parentName:"ul"},"No more looking up inputs or fields by hand: they're just JavaScript arguments"),(0,a.kt)("li",{parentName:"ul"},"No more manual state maintaining: your browser is very good at executing simple JavaScript functions and loops on its own"),(0,a.kt)("li",{parentName:"ul"},"As this is a JavaScript function, there is no way to modify its behavior after it's been created",(0,a.kt)("sup",null,(0,a.kt)("a",{parentName:"li",href:"#footnote-1"},"[","1","]")))),(0,a.kt)("p",null,"Of course, this is a very simple example where the interpreter overhead will be virtually meaningless. For the vast majority of projects, the interpreter is more than good enough. It's only when you start executing hundreds of thousands of blocks per frame that the interpreter overhead begins to become problematic."),(0,a.kt)("hr",null),(0,a.kt)("a",{name:"footnote-1"}),"[1] - It's not strictly impossible to edit JavaScript functions in some ways, but it's very difficult to do without hurting performance or adding significant complexity.")}r.isMDXComponent=!0},3571:(I,g,e)=>{e.d(g,{Z:()=>t});const t="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMzUzIgogICB3aWR0aD0iMjMyLjExMTExIgogICBoZWlnaHQ9IjE5My41IgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMzU3IiAvPgogIDxzdHlsZQogICAgIGlkPSJzdHlsZTMxMSI+CiAgLmJsb2NrbHlUZXh0IHsKICAgICAgZmlsbDogI2ZmZjsKICAgICAgZm9udC1mYW1pbHk6ICZxdW90O0hlbHZldGljYSBOZXVlJnF1b3Q7LCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7CiAgICAgIGZvbnQtc2l6ZTogMTJwdDsKICAgICAgZm9udC13ZWlnaHQ6IDUwMDsKICB9CiAgLmJsb2NrbHlOb25FZGl0YWJsZVRleHQmZ3Q7dGV4dCwgLmJsb2NrbHlFZGl0YWJsZVRleHQmZ3Q7dGV4dCB7CiAgICAgIGZpbGw6ICM1NzVFNzU7CiAgfQogIC5ibG9ja2x5RHJvcGRvd25UZXh0IHsKICAgICAgZmlsbDogI2ZmZiAhaW1wb3J0YW50OwogIH0KICA8L3N0eWxlPgogIDxnCiAgICAgZGF0YS1pZD0idy94JEx7Qns1QlZObj0yW2BEeDsiCiAgICAgY2xhc3M9ImJsb2NrbHlEcmFnZ2FibGUgYmxvY2tseVNlbGVjdGVkIgogICAgIGRhdGEtc2hhcGVzPSJoYXQiCiAgICAgZGF0YS1jYXRlZ29yeT0iZXZlbnRzIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSwxNykiCiAgICAgaWQ9ImczNTEiPgogICAgPHBhdGgKICAgICAgIGNsYXNzPSJibG9ja2x5UGF0aCBibG9ja2x5QmxvY2tCYWNrZ3JvdW5kIgogICAgICAgc3Ryb2tlPSIjY2M5OTAwIgogICAgICAgZmlsbD0iI2ZmYmYwMCIKICAgICAgIGZpbGwtb3BhY2l0eT0iMSIKICAgICAgIGQ9Im0gMCwwIGMgMjUsLTIyIDcxLC0yMiA5NiwwIGggNDMuMTUgYSA0LDQgMCAwIDEgNCw0IHYgNDAgYSA0LDQgMCAwIDEgLTQsNCBIIDQ4IGMgLTIsMCAtMywxIC00LDIgbCAtNCw0IGMgLTEsMSAtMiwyIC00LDIgSCAyNCBjIC0yLDAgLTMsLTEgLTQsLTIgTCAxNiw1MCBDIDE1LDQ5IDE0LDQ4IDEyLDQ4IEggNCBBIDQsNCAwIDAgMSAwLDQ0IFoiCiAgICAgICBpZD0icGF0aDMxMyIgLz4KICAgIDx0ZXh0CiAgICAgICBjbGFzcz0iYmxvY2tseVRleHQiCiAgICAgICB5PSIyIgogICAgICAgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiCiAgICAgICBkeT0iMCIKICAgICAgIHg9IjE5LjEyNSIKICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMjQpIgogICAgICAgaWQ9InRleHQzMTUiPndoZW48L3RleHQ+CiAgICA8ZwogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQuMjUsMTIpIgogICAgICAgaWQ9ImczMTkiPgogICAgICA8aW1hZ2UKICAgICAgICAgaGVpZ2h0PSIyNCIKICAgICAgICAgd2lkdGg9IjI0IgogICAgICAgICB4bGluazpocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXhMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJbWR5WldWdVpteGhaeUlnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaUNna2dkbWxsZDBKdmVEMGlNQ0F3SURJMElESTBJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOQ0F5TkRzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZ284YzNSNWJHVWdkSGx3WlQwaWRHVjRkQzlqYzNNaVBnb0pMbk4wTUh0bWFXeHNPaU0wTlRrNU0wUTdmUW9KTG5OME1YdG1hV3hzT2lNMFEwSkdOVFk3ZlFvOEwzTjBlV3hsUGdvOGRHbDBiR1UrWjNKbFpXNW1iR0ZuUEM5MGFYUnNaVDRLUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRUSXdMamdzTXk0M1l5MHdMalF0TUM0eUxUQXVPUzB3TGpFdE1TNHlMREF1TW1NdE1pd3hMall0TkM0NExERXVOaTAyTGpnc01HTXRNaTR6TFRFdU9TMDFMall0TWk0ekxUZ3VNeTB4VmpJdU5XTXdMVEF1Tmkwd0xqVXRNUzB4TFRFS0NYTXRNU3d3TGpRdE1Td3hkakU0TGpoak1Dd3dMalVzTUM0MUxERXNNU3d4YURBdU1XTXdMalVzTUN3eExUQXVOU3d4TFRGMkxUWXVOR014TFRBdU55d3lMakV0TVM0eUxETXVOQzB4TGpOak1TNHlMREFzTWk0MExEQXVOQ3d6TGpRc01TNHlZekl1T1N3eUxqTXNOeXd5TGpNc09TNDRMREFLQ1dNd0xqTXRNQzR5TERBdU5DMHdMalVzTUM0MExUQXVPVlkwTGpkRE1qRXVOaXcwTGpJc01qRXVNeXd6TGpnc01qQXVPQ3d6TGpkNklFMHlNQzQxTERFekxqbERNakF1TlN3eE15NDVMREl3TGpVc01UTXVPU3d5TUM0MUxERXpMamxETVRnc01UWXNNVFF1TkN3eE5pd3hNUzQ1TERFMENnbGpMVEV1TVMwd0xqa3RNaTQxTFRFdU5DMDBMVEV1TkdNdE1TNHlMREF1TVMweUxqTXNNQzQxTFRNdU5Dd3hMakZXTkVNM0xESXVOaXd4TUN3eUxqa3NNVEl1TWl3MExqWmpNaTQwTERFdU9TdzFMamNzTVM0NUxEZ3VNU3d3WXpBdU1Td3dMREF1TVN3d0xEQXVNaXd3Q2dsak1Dd3dMREF1TVN3d0xqRXNNQzR4TERBdU1Vd3lNQzQxTERFekxqbDZJaTgrQ2p4d1lYUm9JR05zWVhOelBTSnpkREVpSUdROUlrMHlNQzQyTERRdU9Hd3RNQzR4TERrdU1XTXdMREFzTUN3d0xqRXNNQ3d3TGpGakxUSXVOU3d5TFRZdU1Td3lMVGd1Tml3d1l5MHhMakV0TUM0NUxUSXVOUzB4TGpRdE5DMHhMalJqTFRFdU1pd3dMakV0TWk0ekxEQXVOUzB6TGpRc01TNHhWalFLQ1VNM0xESXVOaXd4TUN3eUxqa3NNVEl1TWl3MExqWmpNaTQwTERFdU9TdzFMamNzTVM0NUxEZ3VNU3d3WXpBdU1Td3dMREF1TVN3d0xEQXVNaXd3UXpJd0xqVXNOQzQzTERJd0xqWXNOQzQzTERJd0xqWXNOQzQ0ZWlJdlBnbzhMM04yWno0SyIKICAgICAgICAgaWQ9ImltYWdlMzE3IiAvPgogICAgPC9nPgogICAgPHRleHQKICAgICAgIGNsYXNzPSJibG9ja2x5VGV4dCIKICAgICAgIHk9IjIiCiAgICAgICB0ZXh0LWFuY2hvcj0ibWlkZGxlIgogICAgICAgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIKICAgICAgIGR5PSIwIgogICAgICAgeD0iMjQuNDUwMDAxIgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODYuMjUsMjQpIgogICAgICAgaWQ9InRleHQzMjEiPmNsaWNrZWQ8L3RleHQ+CiAgICA8ZwogICAgICAgZGF0YS1pZD0iYGhtcUw6dXN0fW9OUywzeTouYlAiCiAgICAgICBjbGFzcz0iYmxvY2tseURyYWdnYWJsZSIKICAgICAgIGRhdGEtc2hhcGVzPSJjLWJsb2NrIGMtMSBlbmQiCiAgICAgICBkYXRhLWNhdGVnb3J5PSJjb250cm9sIgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw0OCkiCiAgICAgICBpZD0iZzM0OSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGNsYXNzPSJibG9ja2x5UGF0aCBibG9ja2x5QmxvY2tCYWNrZ3JvdW5kIgogICAgICAgICBzdHJva2U9IiNjZjhiMTciCiAgICAgICAgIGZpbGw9IiNmZmFiMTkiCiAgICAgICAgIGZpbGwtb3BhY2l0eT0iMSIKICAgICAgICAgZD0iTSAwLDQgQSA0LDQgMCAwIDEgNCwwIGggOCBjIDIsMCAzLDEgNCwyIGwgNCw0IGMgMSwxIDIsMiA0LDIgaCAxMiBjIDIsMCAzLC0xIDQsLTIgbCA0LC00IGMgMSwtMSAyLC0yIDQsLTIgaCAxMDggYSA0LDQgMCAwIDEgNCw0IHYgNDAgYSA0LDQgMCAwIDEgLTQsNCBIIDY0IGMgLTIsMCAtMywxIC00LDIgbCAtNCw0IGMgLTEsMSAtMiwyIC00LDIgSCA0MCBjIC0yLDAgLTMsLTEgLTQsLTIgbCAtNCwtNCBjIC0xLC0xIC0yLC0yIC00LC0yIGggLTggYSA0LDQgMCAwIDAgLTQsNCB2IDQwIGEgNCw0IDAgMCAwIDQsNCBoIDggYyAyLDAgMywxIDQsMiBsIDQsNCBjIDEsMSAyLDIgNCwyIGggMTIgYyAyLDAgMywtMSA0LC0yIGwgNCwtNCBjIDEsLTEgMiwtMiA0LC0yIGggOTIgdiAwIGEgNCw0IDAgMCAxIDQsNCB2IDI0IGEgNCw0IDAgMCAxIC00LDQgSCA0IGEgNCw0IDAgMCAxIC00LC00IHoiCiAgICAgICAgIGlkPSJwYXRoMzIzIiAvPgogICAgICA8dGV4dAogICAgICAgICBjbGFzcz0iYmxvY2tseVRleHQiCiAgICAgICAgIHk9IjIiCiAgICAgICAgIHRleHQtYW5jaG9yPSJtaWRkbGUiCiAgICAgICAgIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiCiAgICAgICAgIGR5PSIwIgogICAgICAgICB4PSIyNC45MDgzMzUiCiAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMjQpIgogICAgICAgICBpZD0idGV4dDMyNSI+Zm9yZXZlcjwvdGV4dD4KICAgICAgPGcKICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI4LDEwMCkiCiAgICAgICAgIGlkPSJnMzI5Ij4KICAgICAgICA8aW1hZ2UKICAgICAgICAgICBoZWlnaHQ9IjI0IgogICAgICAgICAgIHdpZHRoPSIyNCIKICAgICAgICAgICB4bGluazpocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXhMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJbkpsY0dWaGRDSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpQ2drZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5DQXlORHNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnbzhjM1I1YkdVZ2RIbHdaVDBpZEdWNGRDOWpjM01pUGdvSkxuTjBNSHRtYVd4c09pTkRSamhDTVRjN2ZRb0pMbk4wTVh0bWFXeHNPaU5HUmtaR1JrWTdmUW84TDNOMGVXeGxQZ284ZEdsMGJHVStjbVZ3WldGMFBDOTBhWFJzWlQ0S1BIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUVEl6TGpNc01URmpMVEF1TXl3d0xqWXRNQzQ1TERFdE1TNDFMREZvTFRFdU5tTXRNQzR4TERFdU15MHdMalVzTWk0MUxURXVNU3d6TGpaakxUQXVPU3d4TGpjdE1pNHpMRE11TWkwMExqRXNOQzR4Q2dsakxURXVOeXd3TGprdE15NDJMREV1TWkwMUxqVXNNQzQ1WXkweExqZ3RNQzR6TFRNdU5TMHhMakV0TkM0NUxUSXVNMk10TUM0M0xUQXVOeTB3TGpjdE1TNDVMREF0TWk0Mll6QXVOaTB3TGpZc01TNDJMVEF1Tnl3eUxqTXRNQzR5U0Rkak1DNDVMREF1Tml3eExqa3NNQzQ1TERJdU9Td3dMamtLQ1hNeExqa3RNQzR6TERJdU55MHdMamxqTVM0eExUQXVPQ3d4TGpndE1pNHhMREV1T0MwekxqVm9MVEV1TldNdE1DNDVMREF0TVM0M0xUQXVOeTB4TGpjdE1TNDNZekF0TUM0MExEQXVNaTB3TGprc01DNDFMVEV1TW13MExqUXROQzQwWXpBdU55MHdMallzTVM0M0xUQXVOaXd5TGpRc01Fd3lNeXc1TGpJS0NVTXlNeTQxTERrdU55d3lNeTQyTERFd0xqUXNNak11TXl3eE1Yb2lMejRLUEhCaGRHZ2dZMnhoYzNNOUluTjBNU0lnWkQwaVRUSXhMamdzTVRGb0xUSXVObU13TERFdU5TMHdMak1zTWk0NUxURXNOQzR5WXkwd0xqZ3NNUzQyTFRJdU1Td3lMamd0TXk0M0xETXVObU10TVM0MUxEQXVPQzB6TGpNc01TNHhMVFF1T1N3d0xqaGpMVEV1Tmkwd0xqSXRNeTR5TFRFdE5DNDBMVEl1TVFvSll5MHdMalF0TUM0ekxUQXVOQzB3TGprdE1DNHhMVEV1TW1Nd0xqTXRNQzQwTERBdU9TMHdMalFzTVM0eUxUQXVNV3d3TERCak1Td3dMamNzTWk0eUxERXVNU3d6TGpRc01TNHhjekl1TXkwd0xqTXNNeTR6TFRGak1DNDVMVEF1Tml3eExqWXRNUzQxTERJdE1pNDJDZ2xqTUM0ekxUQXVPU3d3TGpRdE1TNDRMREF1TWkweUxqaG9MVEl1TkdNdE1DNDBMREF0TUM0M0xUQXVNeTB3TGpjdE1DNDNZekF0TUM0eUxEQXVNUzB3TGpNc01DNHlMVEF1Tkd3MExqUXROQzQwWXpBdU15MHdMak1zTUM0M0xUQXVNeXd3TGprc01Fd3lNaXc1TGpnS0NXTXdMak1zTUM0ekxEQXVOQ3d3TGpZc01DNHpMREF1T1ZNeU1pd3hNU3d5TVM0NExERXhlaUl2UGdvOEwzTjJaejRLIgogICAgICAgICAgIGlkPSJpbWFnZTMyNyIgLz4KICAgICAgPC9nPgogICAgICA8ZwogICAgICAgICBkYXRhLWlkPSJ2XiNKYkpFfTIyfUMtclJsb1huZCIKICAgICAgICAgY2xhc3M9ImJsb2NrbHlEcmFnZ2FibGUiCiAgICAgICAgIGRhdGEtc2hhcGVzPSJzdGFjayIKICAgICAgICAgZGF0YS1jYXRlZ29yeT0ibW90aW9uIgogICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiw0OCkiCiAgICAgICAgIGlkPSJnMzQ3Ij4KICAgICAgICA8cGF0aAogICAgICAgICAgIGNsYXNzPSJibG9ja2x5UGF0aCBibG9ja2x5QmxvY2tCYWNrZ3JvdW5kIgogICAgICAgICAgIHN0cm9rZT0iIzMzNzNjYyIKICAgICAgICAgICBmaWxsPSIjNGM5N2ZmIgogICAgICAgICAgIGZpbGwtb3BhY2l0eT0iMSIKICAgICAgICAgICBkPSJNIDAsNCBBIDQsNCAwIDAgMSA0LDAgaCA4IGMgMiwwIDMsMSA0LDIgbCA0LDQgYyAxLDEgMiwyIDQsMiBoIDEyIGMgMiwwIDMsLTEgNCwtMiBsIDQsLTQgYyAxLC0xIDIsLTIgNCwtMiBoIDE2My4xMTExMSBhIDQsNCAwIDAgMSA0LDQgdiA0MCBhIDQsNCAwIDAgMSAtNCw0IEggNDggYyAtMiwwIC0zLDEgLTQsMiBsIC00LDQgYyAtMSwxIC0yLDIgLTQsMiBIIDI0IGMgLTIsMCAtMywtMSAtNCwtMiBMIDE2LDUwIEMgMTUsNDkgMTQsNDggMTIsNDggSCA0IEEgNCw0IDAgMCAxIDAsNDQgWiIKICAgICAgICAgICBpZD0icGF0aDMzMSIgLz4KICAgICAgICA8dGV4dAogICAgICAgICAgIGNsYXNzPSJibG9ja2x5VGV4dCIKICAgICAgICAgICB5PSIyIgogICAgICAgICAgIHRleHQtYW5jaG9yPSJtaWRkbGUiCiAgICAgICAgICAgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIKICAgICAgICAgICBkeT0iMCIKICAgICAgICAgICB4PSIxOS41NTU1NTUiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCwyNCkiCiAgICAgICAgICAgaWQ9InRleHQzMzMiPm1vdmU8L3RleHQ+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBjbGFzcz0iYmxvY2tseVBhdGgiCiAgICAgICAgICAgc3R5bGU9InZpc2liaWxpdHk6aGlkZGVuIgogICAgICAgICAgIGQ9Im0gMTYsMCBoIDE2IGEgMTYsMTYgMCAwIDEgMCwzMiBIIDE2IEEgMTYsMTYgMCAwIDEgMTYsMCBaIgogICAgICAgICAgIGZpbGw9IiMzMzczY2MiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTUuMTExMTExLDgpIgogICAgICAgICAgIGRhdGEtYXJndW1lbnQtdHlwZT0icm91bmQiCiAgICAgICAgICAgaWQ9InBhdGgzMzUiIC8+CiAgICAgICAgPHRleHQKICAgICAgICAgICBjbGFzcz0iYmxvY2tseVRleHQiCiAgICAgICAgICAgeT0iMiIKICAgICAgICAgICB0ZXh0LWFuY2hvcj0ibWlkZGxlIgogICAgICAgICAgIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiCiAgICAgICAgICAgZHk9IjAiCiAgICAgICAgICAgeD0iMTkuMTExMTExIgogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OC44ODg4OSwyNCkiCiAgICAgICAgICAgaWQ9InRleHQzMzciPnN0ZXBzPC90ZXh0PgogICAgICAgIDxnCiAgICAgICAgICAgZGF0YS1pZD0iL3B2cSVGQVswRC19byVnfXZsd1YiCiAgICAgICAgICAgY2xhc3M9ImJsb2NrbHlEcmFnZ2FibGUiCiAgICAgICAgICAgZGF0YS1zaGFwZXM9InJlcG9ydGVyIHJvdW5kIgogICAgICAgICAgIGRhdGEtY2F0ZWdvcnk9ImRhdGEiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTUuMTExMTExLDQpIgogICAgICAgICAgIGlkPSJnMzQ1Ij4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICBjbGFzcz0iYmxvY2tseVBhdGggYmxvY2tseUJsb2NrQmFja2dyb3VuZCIKICAgICAgICAgICAgIHN0cm9rZT0iI2RiNmUwMCIKICAgICAgICAgICAgIGZpbGw9IiNmZjhjMWEiCiAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9IjEiCiAgICAgICAgICAgICBkPSJtIDAsMCBtIDIwLDAgaCA2NS43Nzc3NzkgYSAyMCwyMCAwIDAgMSAwLDQwIEggMjAgQSAyMCwyMCAwIDAgMSAyMCwwIFoiCiAgICAgICAgICAgICBpZD0icGF0aDMzOSIgLz4KICAgICAgICAgIDxnCiAgICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMiw0KSIKICAgICAgICAgICAgIGlkPSJnMzQzIj4KICAgICAgICAgICAgPHRleHQKICAgICAgICAgICAgICAgY2xhc3M9ImJsb2NrbHlUZXh0IgogICAgICAgICAgICAgICB4PSI0MC44ODg4ODkiCiAgICAgICAgICAgICAgIHk9IjE4IgogICAgICAgICAgICAgICBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIgogICAgICAgICAgICAgICBkeT0iMCIKICAgICAgICAgICAgICAgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgICAgaWQ9InRleHQzNDEiPm15IHZhcmlhYmxlPC90ZXh0PgogICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="}}]);