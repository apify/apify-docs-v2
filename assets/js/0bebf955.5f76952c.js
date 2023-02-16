"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8354],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"Computer preparation",description:"Set up your computer to be able to code scrapers with Node.js and JavaScript. Download Node.js and NPM and run a Hello World script.",sidebar_position:4,slug:"/web-scraping-for-beginners/data-collection/computer-preparation"},s="Prepare your computer for programming",p={unversionedId:"webscraping/web_scraping_for_beginners/data_extraction/computer_preparation",id:"webscraping/web_scraping_for_beginners/data_extraction/computer_preparation",title:"Computer preparation",description:"Set up your computer to be able to code scrapers with Node.js and JavaScript. Download Node.js and NPM and run a Hello World script.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/data_extraction/computer_preparation.md",sourceDirName:"webscraping/web_scraping_for_beginners/data_extraction",slug:"/web-scraping-for-beginners/data-collection/computer-preparation",permalink:"/academy/web-scraping-for-beginners/data-collection/computer-preparation",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/data_extraction/computer_preparation.md",tags:[],version:"current",lastUpdatedBy:"Ondra Urban",lastUpdatedAt:1676563547,formattedLastUpdatedAt:"Feb 16, 2023",sidebarPosition:4,frontMatter:{title:"Computer preparation",description:"Set up your computer to be able to code scrapers with Node.js and JavaScript. Download Node.js and NPM and run a Hello World script.",sidebar_position:4,slug:"/web-scraping-for-beginners/data-collection/computer-preparation"},sidebar:"academy",previous:{title:"Browser DevTools - III",permalink:"/academy/web-scraping-for-beginners/data-collection/devtools-continued"},next:{title:"Project setup",permalink:"/academy/web-scraping-for-beginners/data-collection/project-setup"}},d={},c=[{value:"Install Node.js",id:"install-node",level:2},{value:"Install a text editor",id:"install-an-editor",level:2},{value:"Hello world! \ud83d\udc4b",id:"hello-world",level:2},{value:"Next up",id:"next",level:2}],u={toc:c};function m(e){var t=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prepare-computer"},"Prepare your computer for programming"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Set up your computer to be able to code scrapers with Node.js and JavaScript. Download Node.js and NPM and run a Hello World script.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Before you can start writing scraper code, you need to have your computer set up for it. In this lesson, we will show you all the tools you need to install to successfully write your first scraper."),(0,a.kt)("h2",{id:"install-node"},"Install Node.js"),(0,a.kt)("p",null,"Let's start with installation of Node.js. Node.js is an engine for running JavaScript, quite similar to the browser console we used in the previous lessons. You feed it JavaScript code, and it executes it for you. Why not just use the browser console? Simply put, because it's limited in its capabilities. Node.js is way more powerful and is much better suited for coding scrapers."),(0,a.kt)("p",null,"If you're on macOS, use ",(0,a.kt)("a",{parentName:"p",href:"https://blog.apify.com/how-to-install-nodejs/",target:"_blank",rel:"noopener"},"this tutorial to install Node.js"),". If you're using Windows ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener"},"visit the official Node.js website"),". And if you're on Linux, just use your package manager to install ",(0,a.kt)("inlineCode",{parentName:"p"},"nodejs"),"."),(0,a.kt)("h2",{id:"install-an-editor"},"Install a text editor"),(0,a.kt)("p",null,"There are many text editors you can choose from for programming. You might already have a preferred one so feel free to use that. Just make sure it has syntax highlighting and support for Node.js. If you don't have any text editor, we suggest starting with VSCode. It's free, very popular, and well maintained. ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener"},"Download it here"),"."),(0,a.kt)("p",null,"Once you downloaded and installed it, you can open a folder where we will build your scraper. We recommend starting with a new, empty folder."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How to open a folder in VSCode",src:r(3538).Z,width:"1950",height:"998"})),(0,a.kt)("h2",{id:"hello-world"},"Hello world! \ud83d\udc4b"),(0,a.kt)("p",null,"Before we start, let's confirm that Node.js was successfully installed on your computer. To do that, run those two commands in your terminal and see if they correctly print your Node.js and NPM versions. The next lessons ",(0,a.kt)("strong",{parentName:"p"},"require Node.js version 16 or higher"),". If you skipped Node.js installation and want to use your existing version of Node.js, ",(0,a.kt)("strong",{parentName:"p"},"make sure that it's 16 or higher"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"node -v\nnpm -v\n")),(0,a.kt)("p",null,"If you installed VSCode in the previous paragraph, you can use the integrated terminal."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How to open a terminal in VSCode",src:r(57103).Z,width:"1220",height:"1286"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'If you\'re still wondering what a "terminal" is, we suggest googling for a terminal tutorial for your operating system because individual terminals are different. Sometimes a little, sometimes a lot.')),(0,a.kt)("p",null,"After confirming that ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," is correctly installed on your computer, use your text editor to create a file called ",(0,a.kt)("strong",{parentName:"p"},"hello.js")," in your folder."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How to create a file in VSCode",src:r(57926).Z,width:"980",height:"584"})),(0,a.kt)("p",null,"Now add this piece of code to ",(0,a.kt)("strong",{parentName:"p"},"hello.js")," and save the file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log('Hello World');\n")),(0,a.kt)("p",null,"Finally, run the below command in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"node hello.js\n")),(0,a.kt)("p",null,"You should see ",(0,a.kt)("strong",{parentName:"p"},"Hello World")," printed in your terminal. If you do, congratulations, you are now officially a programmer! \ud83d\ude80"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hello world in VSCode",src:r(46082).Z,width:"1688",height:"900"})),(0,a.kt)("h2",{id:"next"},"Next up"),(0,a.kt)("p",null,"You have your computer set up correctly for development, and you've run your first script. Great! In the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/project-setup",target:null,rel:null},"next lesson")," we'll set up your project to download a website's HTML using Node.js instead of a browser."))}m.isMDXComponent=!0},57926:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/vscode-create-file-85dd6193a61846dcc6bc584b9c83ef6d.png"},46082:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/vscode-hello-world-993a4d46e1828928f34c468db5bf5810.png"},3538:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/vscode-open-folder-4fe8ed6d37a7d37b1c2d8c9356b7a8bb.png"},57103:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/vscode-open-terminal-44dc7539448cf0e3c67f123f664dbfeb.png"}}]);