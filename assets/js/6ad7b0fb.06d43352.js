"use strict";(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1776:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>m});var a=n(7462),o=n(3366),i=(n(7294),n(3905));const r=["components"],s={slug:"/development/custom-extensions",hide_table_of_contents:!0},l="Custom Extensions",p={unversionedId:"development/custom-extensions",id:"development/custom-extensions",isDocsHomePage:!1,title:"Custom Extensions",description:"TurboWarp supports sandboxed extensions specified via URL parameter, for example//turbowarp.org/editor?extension=https://extensions.turbowarp.org/fetch.js. Multiple extensions can be loaded by setting extension multiple times. Reload to apply changes.",source:"@site/docs/development/custom-extensions.md",sourceDirName:"development",slug:"/development/custom-extensions",permalink:"/development/custom-extensions",editUrl:"https://github.com/TurboWarp/docs/edit/master/docs/development/custom-extensions.md",version:"current",frontMatter:{slug:"/development/custom-extensions",hide_table_of_contents:!0},sidebar:"development",previous:{title:"Getting Started",permalink:"/development/getting-started"}},c=[{value:"Writing custom extensions",id:"writing-custom-extensions",children:[{value:"Debugging",id:"debugging",children:[]},{value:"Backwards Compatibility",id:"backwards-compatibility",children:[]}]}],u={toc:c};function m(e){let{components:t}=e,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-extensions"},"Custom Extensions"),(0,i.kt)("p",null,"TurboWarp supports sandboxed extensions specified via URL parameter, for example: ",(0,i.kt)("a",{parentName:"p",href:"https://turbowarp.org/editor?extension=https://extensions.turbowarp.org/fetch.js"},"https://turbowarp.org/editor?extension=https://extensions.turbowarp.org/fetch.js"),". Multiple extensions can be loaded by setting extension multiple times. Reload to apply changes."),(0,i.kt)("p",null,"Projects made using this feature are incompatible with Scratch and cannot be uploaded to the Scratch website. The extension must be loaded by TurboWarp using the same URL that it was saved with."),(0,i.kt)("h2",{id:"writing-custom-extensions"},"Writing custom extensions"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This guide assumes you are already familiar with JavaScript. At a bare minimum, you should be familiar with arrays, objects, JSON syntax, functions, data types, and your browser's JavaScript console."),(0,i.kt)("p",{parentName:"div"},"If this does not describe you, you will struggle to follow this guide and likely not learn much. You should learn JavaScript first."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This guide is a work in progress."))),(0,i.kt)("p",null,"Custom extensions run in a sandboxed Worker. They have virtually zero access to any Scratch internals. Extensions themselves cannot move sprites or even get their position. You still have access to most Web APIs such as ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch"),". Every call to a block defined by a custom extension will take at least one full frame due to technical limitations. In the future, we hope to improve the capabilities of custom extensions in a way that doesn't compromise security."),(0,i.kt)("p",null,"Custom extensions need to be loaded from a website, for example GitHub Pages. For development, you may find it best to set up a local HTTP server. If you happen to have Python installed, that can be as easy as ",(0,i.kt)("inlineCode",{parentName:"p"},"python -m http.server"),"."),(0,i.kt)("p",null,"The simplest custom extension looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class MyExtension {\n  getInfo() {\n    return {\n      id: 'myextensionexample', // change this if you make an actual extension!\n      name: 'Cool Extension',\n      blocks: [\n        {\n          opcode: 'hello',\n          blockType: Scratch.BlockType.REPORTER,\n          text: 'Hello, world!'\n        }\n      ]\n    };\n  }\n  hello() {\n    return 'Hello, world!';\n  }\n}\nScratch.extensions.register(new MyExtension());\n")),(0,i.kt)("p",null,"Save this in a file on your computer and use a local HTTP server to load it using the extension parameter. If you have a local HTTP server started with ",(0,i.kt)("inlineCode",{parentName:"p"},"python -m http.server"),", you might visit ",(0,i.kt)("a",{parentName:"p",href:"https://turbowarp.org/editor?extension=http://localhost:8000/extension.js"},"https://turbowarp.org/editor?extension=http://localhost:8000/extension.js"),'. The extension will add a new category that contains a single reporter block that outputs "Hello, world!"'),(0,i.kt)("p",null,"In this example, the block with opcode ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," will be executed by the class function named ",(0,i.kt)("inlineCode",{parentName:"p"},"hello"),". Blocks can return simple strings, numbers, or booleans. Additionally, they can return a Promise instead. Scratch will wait for the promise to resolve before reporting a value or continuing to the next block."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getInfo")," is a function that tells Scratch about your extension and what blocks it supports."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," is a string that represents a unique ID that this extension uses. It should only contain the characters a-z and 0-9. The same extension should always use the same ID as changing it will break existing projects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," is a string that tells Scratch what name to display in the sidebar"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blocks")," is a list of objects that defines which blocks your extension contains.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"opcode")," is the internal name of the block, and also corresponds to the method that will be called when the block is run. Opcodes should never be changed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blockType")," defines the type of block",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scratch.BlockType.REPORTER")," makes a round reporter"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scratch.BlockType.BOOLEAN")," makes a triangle shaped reporter that can fit into boolean inputs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scratch.BlockType.COMMAND")," makes a stacked block"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text")," is a string that defines what the block will be named in the editor. Text in ","[","brackets","]"," will be converted to slots for arguments (see below examples)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"arguments")," is an object that defines the arguments that the block accepts. Each argument has:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," which defines the input shape to make. Note that regardless of the type set here, the values actually passed to the block are not guaranteed to be casted to the right type. You should manually convert arguments to numbers, for example, as they will often be passed as strings.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scratch.ArgumentType.STRING")," for string inputs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scratch.ArgumentType.NUMBER")," for number inputs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scratch.ArgumentType.BOOLEAN")," for boolean inputs (defaultValue is ignored)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scratch.ArgumentType.ANGLE")," for angles"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scratch.ArgumentType.COLOR")," for colors (#123abc string format)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scratch.ArgumentType.MATRIX")," for a 5x5 matrix (passed in 11101010101... string format)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scratch.ArgumentType.NOTE")," for music notes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defaultValue")," is the initial value when the block is created from the library")))))),(0,i.kt)("p",null,"Okay, there's a lot of text there that you probably didn't understand. Here's a more thorough example that uses arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class StrictEqualityExtension {\n  getInfo() {\n    return {\n      id: 'strictequalityexample', // change this if you make an actual extension!\n      name: 'Strict Equality',\n      blocks: [\n        {\n          opcode: 'strictlyEquals',\n          blockType: Scratch.BlockType.BOOLEAN,\n          text: '[ONE] strictly equals [TWO]',\n          arguments: {\n            ONE: {\n              type: Scratch.ArgumentType.STRING,\n              defaultValue: 'First value'\n            },\n            TWO: {\n              type: Scratch.ArgumentType.STRING,\n              defaultValue: 'Second value'\n            }\n          }\n        }\n      ]\n    };\n  }\n  strictlyEquals(args) {\n    // Note strict equality: Inputs must match exactly: in type, case, etc.\n    return args.ONE === args.TWO;\n  }\n}\nScratch.extensions.register(new StrictEqualityExtension());\n")),(0,i.kt)("p",null,"Remember that you must reload to apply changes."),(0,i.kt)("p",null,"For more examples, you can visit our curated library of open source extensions: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TurboWarp/extensions"},"https://github.com/TurboWarp/extensions")),(0,i.kt)("h3",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"If for some reason the extension is not appearing, or if the page never finished loading, open up your developer console and search for errors. Chances are there's going to be something in there."),(0,i.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,i.kt)("p",null,"Extensions should strive to be as backwards compatible as possible. Notably, that means:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NEVER change the extension ID"),(0,i.kt)("li",{parentName:"ul"},"NEVER remove blocks"),(0,i.kt)("li",{parentName:"ul"},"NEVER change opcodes"),(0,i.kt)("li",{parentName:"ul"},"Extensively test your extension")))}m.isMDXComponent=!0}}]);