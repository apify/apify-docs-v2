"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),y=a,d=f["".concat(s,".").concat(y)]||f[y]||u[y]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"The Apify CLI",description:"Learn about, install, and log into the Apify CLI - your best friend for interacting with the Apify platform via your terminal.",sidebar_position:9.1,slug:"/tools/apify-cli"},s="The Apify CLI",p={unversionedId:"glossary/tools/apify_cli",id:"glossary/tools/apify_cli",title:"The Apify CLI",description:"Learn about, install, and log into the Apify CLI - your best friend for interacting with the Apify platform via your terminal.",source:"@site/sources/academy/glossary/tools/apify_cli.md",sourceDirName:"glossary/tools",slug:"/tools/apify-cli",permalink:"/academy/tools/apify-cli",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675423550,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:9.1,frontMatter:{title:"The Apify CLI",description:"Learn about, install, and log into the Apify CLI - your best friend for interacting with the Apify platform via your terminal.",sidebar_position:9.1,slug:"/tools/apify-cli"},sidebar:"academy",previous:{title:"Tools",permalink:"/academy/tools"},next:{title:"Insomnia",permalink:"/academy/tools/insomnia"}},c={},u=[{value:"Installing",id:"installing",level:2},{value:"Logging in",id:"logging-in",level:2}],f={toc:u};function y(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-apify-cli"},"The Apify CLI"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn about, install, and log into the Apify CLI - your best friend for interacting with the Apify platform via your terminal.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/cli",target:"_blank",rel:"noopener"},"Apify CLI")," helps you create, develop, build and run Apify actors, and manage the Apify cloud platform from any computer. It can be used to automatically generate the boilerplate for different types of projects, initialize projects, remotely call actors on the platform, and run your own projects."),(0,o.kt)("h2",{id:"installing"},"Installing"),(0,o.kt)("p",null,"To install the Apfiy CLI, you'll first need NPM, which comes preinstalled with Node.js. If you haven't yet installed Node, learn how to do that ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/computer-preparation",target:null,rel:null},"here"),". Additionally, make sure you've got an Apify account, as you will need to log in to the CLI to gain access to its full potential."),(0,o.kt)("p",null,"Open up a terminal instance and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g apify-cli\n")),(0,o.kt)("p",null,"This will install the CLI via NPM."),(0,o.kt)("h2",{id:"logging-in"},"Logging in"),(0,o.kt)("p",null,"After the CLI has finished installing, navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com?asrc=developers_portal",target:"_blank",rel:"noopener"},"Apify Console")," and click on ",(0,o.kt)("strong",{parentName:"p"},"Settings"),". Then, within your account settings, click ",(0,o.kt)("strong",{parentName:"p"},"Integrations"),". The page should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Integrations tab on the Apify Platform",src:n(49515).Z,width:"1851",height:"913"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We've censored out the ",(0,o.kt)("strong",{parentName:"p"},"User ID")," in the image because it is private information which should not be shared with anyone who is not trusted. The same goes for your ",(0,o.kt)("strong",{parentName:"p"},"Personal API Token"),".")),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("strong",{parentName:"p"},"Personal API Token")," and return to your terminal, entering this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"apify login -t YOUR_TOKEN_HERE\n")),(0,o.kt)("p",null,"If you see a log which looks like this,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Success: You are logged in to Apify as YOUR_USERNAME!\n")),(0,o.kt)("p",null,"If you see a log which looks like ",(0,o.kt)("strong",{parentName:"p"},"Success: You are logged in to Apify as YOUR_USERNAME!"),", you're in!"))}y.isMDXComponent=!0},49515:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings-integrations-e84e701c2e45a6aa2f4c7a0001888574.webp"}}]);