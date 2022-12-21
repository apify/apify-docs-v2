"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5633],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return r?o.createElement(m,l(l({ref:t},u),{},{components:r})):o.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},30020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),l=["components"],i={title:"Computer preparation",description:"Set up your computer to be able to code scrapers with Node.js and JavaScript. Download Node.js and NPM and run a Hello World script.",sidebar_position:4,slug:"/web-scraping-for-beginners/data-collection/computer-preparation"},s="[](#prepare-computer) Prepare your computer for programming",p={unversionedId:"web_scraping_for_beginners/data_collection/computer_preparation",id:"web_scraping_for_beginners/data_collection/computer_preparation",title:"Computer preparation",description:"Set up your computer to be able to code scrapers with Node.js and JavaScript. Download Node.js and NPM and run a Hello World script.",source:"@site/sources/academy/web_scraping_for_beginners/data_collection/computer_preparation.md",sourceDirName:"web_scraping_for_beginners/data_collection",slug:"/web-scraping-for-beginners/data-collection/computer-preparation",permalink:"/academy/web-scraping-for-beginners/data-collection/computer-preparation",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671632368,formattedLastUpdatedAt:"Dec 21, 2022",sidebarPosition:4,frontMatter:{title:"Computer preparation",description:"Set up your computer to be able to code scrapers with Node.js and JavaScript. Download Node.js and NPM and run a Hello World script.",sidebar_position:4,slug:"/web-scraping-for-beginners/data-collection/computer-preparation"},sidebar:"defaultSidebar",previous:{title:"Browser DevTools - III",permalink:"/academy/web-scraping-for-beginners/data-collection/devtools-continued"},next:{title:"Project setup",permalink:"/academy/web-scraping-for-beginners/data-collection/project-setup"}},u={},d=[{value:" Install Node.js",id:"-install-nodejs",level:2},{value:" Install a text editor",id:"-install-a-text-editor",level:2},{value:" Hello world! \ud83d\udc4b",id:"-hello-world-",level:2},{value:" Next up",id:"-next-up",level:2}],c={toc:d};function f(e){var t=e.components,i=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-prepare-your-computer-for-programming"},(0,a.kt)("a",{parentName:"h1",href:"#prepare-computer",target:null,rel:null})," Prepare your computer for programming"),(0,a.kt)("p",null,"Before you can start writing scraper code, you need to have your computer set up for it. In this lesson, we will show you all the tools you need to install to successfully write your first scraper."),(0,a.kt)("h2",{id:"-install-nodejs"},(0,a.kt)("a",{parentName:"h2",href:"#install-node",target:null,rel:null})," Install Node.js"),(0,a.kt)("p",null,"Let's start with installation of Node.js. Node.js is an engine for running JavaScript, quite similar to the browser console we used in the previous lessons. You feed it JavaScript code, and it executes it for you. Why not just use the browser console? Simply put, because it's limited in its capabilities. Node.js is way more powerful and is much better suited for coding scrapers."),(0,a.kt)("p",null,"To install Node.js ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener"},"visit the official Node.js website"),", download the installer, and follow the instructions."),(0,a.kt)("h2",{id:"-install-a-text-editor"},(0,a.kt)("a",{parentName:"h2",href:"#install-an-editor",target:null,rel:null})," Install a text editor"),(0,a.kt)("p",null,"There are many text editors you can choose from for programming. You might already have a preferred one so feel free to use that. Just make sure it has syntax highlighting and support for Node.js. If you don't have any text editor, we suggest starting with VSCode. It's free, very popular, and well maintained. ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener"},"Download it here"),"."),(0,a.kt)("p",null,"Once you downloaded and installed it, you can open a folder where we will build your scraper. We recommend starting with a new, empty folder."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How to open a folder in VSCode",src:r(89036).Z,width:"1792",height:"840"})),(0,a.kt)("h2",{id:"-hello-world-"},(0,a.kt)("a",{parentName:"h2",href:"#hello-world",target:null,rel:null})," Hello world! \ud83d\udc4b"),(0,a.kt)("p",null,"Before we start, let's confirm that Node.js was successfully installed on your computer. To do that, run those two commands in your terminal and see if they correctly print your Node.js and NPM versions. The next lessons ",(0,a.kt)("strong",{parentName:"p"},"require Node.js version 15.10 or higher"),". If you skipped Node.js installation and want to use your existing version of Node.js, make sure that it's 15.10 or higher."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"node -v\nnpm -v\n")),(0,a.kt)("p",null,"If you installed VSCode in the previous paragraph, you can use the integrated terminal."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How to open a terminal in VSCode",src:r(37962).Z,width:"1078",height:"1144"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'If you\'re still wondering what a "terminal" is, we suggest googling for a terminal tutorial for your operating system because individual terminals are different. Sometimes a little, sometimes a lot.')),(0,a.kt)("p",null,"After confirming that ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," is correctly installed on your computer, use your text editor to create a file called ",(0,a.kt)("strong",{parentName:"p"},"hello.js")," in your folder."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How to create a file in VSCode",src:r(64457).Z,width:"858",height:"462"})),(0,a.kt)("p",null,"Now add this piece of code, save the file, and run the below command in your terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log('Hello World');\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"node hello.js\n")),(0,a.kt)("p",null,"You should see ",(0,a.kt)("strong",{parentName:"p"},"Hello World")," printed in your terminal. If you do, congratulations, you are now officially a programmer! \ud83d\ude80"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hello world in VSCode",src:r(5349).Z,width:"1532",height:"744"})),(0,a.kt)("h2",{id:"-next-up"},(0,a.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,a.kt)("p",null,"You have your computer set up correctly for development and you've run your first script. Great! In the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/project-setup",target:null,rel:null},"next lesson")," we'll set up your project to download a website's HTML using Node.js instead of a browser."))}f.isMDXComponent=!0},64457:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/webp;base64,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"},5349:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/vscode-hello-world-0cf2319bfd1528bb6ccb501125926976.webp"},89036:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/vscode-open-folder-999390e30cd0a2d63625d11b1dfe7a10.webp"},37962:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/vscode-open-terminal-0e0841944e6d85d881810be8255b537d.webp"}}]);