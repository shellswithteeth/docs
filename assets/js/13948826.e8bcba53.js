"use strict";(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},282:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>d});var r=n(7462),o=n(3366),a=(n(7294),n(3905));const i=["components"],l={slug:"/development/getting-started",sidebar_position:2,hide_table_of_contents:!0},s="Getting Started",p={unversionedId:"development/getting-started",id:"development/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"These are the instructions for setting up the TurboWarp development environment or making custom builds on your own computer.",source:"@site/docs/development/getting-started.md",sourceDirName:"development",slug:"/development/getting-started",permalink:"/development/getting-started",editUrl:"https://github.com/TurboWarp/docs/edit/master/docs/development/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/development/getting-started",sidebar_position:2,hide_table_of_contents:!0},sidebar:"development",previous:{title:"Development",permalink:"/development"},next:{title:"Custom Extensions",permalink:"/development/custom-extensions"}},u=[{value:"Dependencies",id:"dependencies",children:[]},{value:"A note on how Scratch is organized",id:"organization",children:[]},{value:"Building the GUI",id:"gui",children:[]},{value:"Build",id:"build",children:[]},{value:"Linking other packages",id:"linking",children:[]}],c={toc:u};function d(e){let{components:t}=e,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"These are the instructions for setting up the TurboWarp development environment or making custom builds on your own computer."),(0,a.kt)("p",null,"If you just want to use TurboWarp, visit ",(0,a.kt)("a",{parentName:"p",href:"https://turbowarp.org/"},"https://turbowarp.org/"),". You don't need to follow these instructions."),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"Make sure you have these installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com"},"Git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"))),(0,a.kt)("p",null,"You might have to restart your terminal or computer for them to be fully installed. We assume you have some familiarity with the command line. Note that TurboWarp is a large app that may take a lot of resources to build."),(0,a.kt)("h3",{id:"organization"},"A note on how Scratch is organized"),(0,a.kt)("p",null,"Scratch 3 is organized into a bunch of different repositories. Each implements a part of the app. Here's the ones that TurboWarp cares enough about to fork:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"scratch-vm executes the project and is where the compiler lives"),(0,a.kt)("li",{parentName:"ul"},'scratch-render renders sprites and implements "touching" blocks and is where high quality pen lives'),(0,a.kt)("li",{parentName:"ul"},"scratch-blocks is the script editor"),(0,a.kt)("li",{parentName:"ul"},"scratch-gui implements the outer interface, connects everything together, and is where addons live"),(0,a.kt)("li",{parentName:"ul"},"scratch-paint is the costume editor"),(0,a.kt)("li",{parentName:"ul"},"scratch-l10n contains translations")),(0,a.kt)("h3",{id:"gui"},"Building the GUI"),(0,a.kt)("p",null,"The GUI is the minimum to build TurboWarp."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/TurboWarp/scratch-gui\ncd scratch-gui\nnpm install\nnpm start\n")),(0,a.kt)("p",null,"http://localhost:8601/"),(0,a.kt)("p",null,"If you just want to build the GUI, you can stop here."),(0,a.kt)("h3",{id:"build"},"Build"),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start")," is useful for development, at some point you'll need to get HTML, JS, etc. out. To do this, run this in the scratch-gui folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run build\n")),(0,a.kt)("p",null,"Output goes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,a.kt)("p",null,"When deploying TurboWarp to a website, you should enable production mode. This will result in faster execution and a greatly reduced file size."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# mac, linux\nNODE_ENV=production npm run build\n\n# windows command prompt (untested)\nset NODE_ENV=production\nnpm run build\n\n# windows powershell\n$env:NODE_ENV="production"\nnpm run build\n')),(0,a.kt)("p",null,"By default TurboWarp generates links like ",(0,a.kt)("a",{parentName:"p",href:"https://turbowarp.org/editor.html#123"},"https://turbowarp.org/editor.html#123")," However, by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"ROOT=/")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ROUTING_STYLE=wildcard")," (in the same way that you set ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV=production"),"), you can get routes like ",(0,a.kt)("a",{parentName:"p",href:"https://turbowarp.org/123/editor"},"https://turbowarp.org/123/editor")," instead. Note that this requires a server that will setup the proper aliases. The webpack development server in scratch-gui is setup for this. For production you'd want something more like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TurboWarp/turbowarp.org"},"https://github.com/TurboWarp/turbowarp.org")),(0,a.kt)("h3",{id:"linking"},"Linking other packages"),(0,a.kt)("p",null,"If you're interested in changing parts of TurboWarp other than the GUI, you have to do extra steps. You do not need to do this if you are only interesting in scratch-gui."),(0,a.kt)("p",null,"It's probably easiest to understand by example, so here's how you would link local instances of scratch-vm and scratch-render to your local scratch-gui:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/TurboWarp/scratch-vm\ngit clone https://github.com/TurboWarp/scratch-render\n\ncd scratch-vm\nnpm install\nnpm link\ncd ..\n\ncd scratch-render\nnpm install\nnpm link\ncd ..\n\ncd scratch-gui\nnpm link scratch-vm scratch-render\n")))}d.isMDXComponent=!0}}]);