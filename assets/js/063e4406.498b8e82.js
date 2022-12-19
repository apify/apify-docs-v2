"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),y=r,d=f["".concat(p,".").concat(y)]||f[y]||u[y]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"The Apify CLI",description:"Learn about, install, and log into the Apify CLI - your best friend for interacting with the Apify platform via your terminal.",sidebar_position:9.1,slug:"/tools/apify-cli"},p="[](#the-apify-cli) The Apify CLI",s={unversionedId:"tools/apify_cli",id:"tools/apify_cli",title:"The Apify CLI",description:"Learn about, install, and log into the Apify CLI - your best friend for interacting with the Apify platform via your terminal.",source:"@site/sources/academy/tools/apify_cli.md",sourceDirName:"tools",slug:"/tools/apify-cli",permalink:"/academy/tools/apify-cli",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671450588,formattedLastUpdatedAt:"Dec 19, 2022",sidebarPosition:9.1,frontMatter:{title:"The Apify CLI",description:"Learn about, install, and log into the Apify CLI - your best friend for interacting with the Apify platform via your terminal.",sidebar_position:9.1,slug:"/tools/apify-cli"},sidebar:"defaultSidebar",previous:{title:"Tools",permalink:"/academy/tools"},next:{title:"Insomnia",permalink:"/academy/tools/insomnia"}},c={},u=[{value:" Installing",id:"-installing",level:2},{value:" Logging in",id:"-logging-in",level:2}],f={toc:u};function y(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-the-apify-cli"},(0,o.kt)("a",{parentName:"h1",href:"#the-apify-cli",target:null,rel:null})," The Apify CLI"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/cli",target:"_blank",rel:"noopener"},"Apify CLI")," helps you create, develop, build and run Apify actors, and manage the Apify cloud platform from any computer. It can be used to automatically generate the boilerplate for different types of projects, initialize projects, remotely call actors on the platform, and run your own projects."),(0,o.kt)("h2",{id:"-installing"},(0,o.kt)("a",{parentName:"h2",href:"#installing",target:null,rel:null})," Installing"),(0,o.kt)("p",null,"To install the Apfiy CLI, you'll first need NPM, which comes preinstalled with Node.js. If you haven't yet installed Node, learn how to do that ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/computer-preparation",target:null,rel:null},"here"),". Additionally, make sure you've got an Apify account, as you will need to log in to the CLI to gain access to its full potential."),(0,o.kt)("p",null,"Open up a terminal instance and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g apify-cli\n")),(0,o.kt)("p",null,"This will install the CLI via NPM."),(0,o.kt)("h2",{id:"-logging-in"},(0,o.kt)("a",{parentName:"h2",href:"#logging-in",target:null,rel:null})," Logging in"),(0,o.kt)("p",null,"After the CLI has finished installing, navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com?asrc=developers_portal",target:"_blank",rel:"noopener"},"Apify Console")," and click on ",(0,o.kt)("strong",{parentName:"p"},"Settings"),". Then, within your account settings, click ",(0,o.kt)("strong",{parentName:"p"},"Integrations"),". The page should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Integrations tab on the Apify Platform",src:n(36405).Z,width:"1851",height:"913"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We've censored out the ",(0,o.kt)("strong",{parentName:"p"},"User ID")," in the image because it is private information which should not be shared with anyone who is not trusted. The same goes for your ",(0,o.kt)("strong",{parentName:"p"},"Personal API Token"),".")),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("strong",{parentName:"p"},"Personal API Token")," and return to your terminal, entering this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"apify login -t YOUR_TOKEN_HERE\n")),(0,o.kt)("p",null,"If you see a log which looks like this,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Success: You are logged in to Apify as YOUR_USERNAME!\n")),(0,o.kt)("p",null,"If you see a log which looks like ",(0,o.kt)("strong",{parentName:"p"},"Success: You are logged in to Apify as YOUR_USERNAME!"),", you're in!"))}y.isMDXComponent=!0},36405:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/settings-integrations-e84e701c2e45a6aa2f4c7a0001888574.webp"}}]);