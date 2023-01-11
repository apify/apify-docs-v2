"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,h=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},83:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],p={title:"Injecting scripts",description:"Learn how to inject scripts prior to a page's load (pre-injecting), as well as how to expose functions to be run at a later time on the page.",sidebar_position:1,slug:"/puppeteer-playwright/executing-scripts/injecting-code"},s="[](#injecting-code) Injecting code",c={unversionedId:"puppeteer_playwright/executing_scripts/injecting_code",id:"puppeteer_playwright/executing_scripts/injecting_code",title:"Injecting scripts",description:"Learn how to inject scripts prior to a page's load (pre-injecting), as well as how to expose functions to be run at a later time on the page.",source:"@site/sources/academy/puppeteer_playwright/executing_scripts/injecting_code.md",sourceDirName:"puppeteer_playwright/executing_scripts",slug:"/puppeteer-playwright/executing-scripts/injecting-code",permalink:"/academy/puppeteer-playwright/executing-scripts/injecting-code",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673462481,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:1,frontMatter:{title:"Injecting scripts",description:"Learn how to inject scripts prior to a page's load (pre-injecting), as well as how to expose functions to be run at a later time on the page.",sidebar_position:1,slug:"/puppeteer-playwright/executing-scripts/injecting-code"},sidebar:"defaultSidebar",previous:{title:"III - Executing scripts",permalink:"/academy/puppeteer-playwright/executing-scripts"},next:{title:"Collecting data",permalink:"/academy/puppeteer-playwright/executing-scripts/collecting-data"}},l={},u=[{value:" Pre-injecting scripts",id:"-pre-injecting-scripts",level:2},{value:" Exposing functions",id:"-exposing-functions",level:2},{value:" Next up",id:"-next-up",level:2}],g={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-injecting-code"},(0,o.kt)("a",{parentName:"h1",href:"#injecting-code",target:null,rel:null})," Injecting code"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to inject scripts prior to a page's load (pre-injecting), as well as how to expose functions to be run at a later time on the page.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In the previous lesson, we learned how to execute code on the page using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()"),", and though this fits the majority of use cases, there are still some more unusual cases. For example, what if we want to execute our custom script prior to the page's load? Or, what if we want to define a function in the page's context to be run at a later time?"),(0,o.kt)("p",null,"We'll be covering both of these cases in this brief lesson."),(0,o.kt)("h2",{id:"-pre-injecting-scripts"},(0,o.kt)("a",{parentName:"h2",href:"#pre-injecting",target:null,rel:null})," Pre-injecting scripts"),(0,o.kt)("p",null,"Sometimes, you need your custom code to run before any other code is run on the page. Perhaps you need to modify an object's prototype, or even re-define certain global variables before they are used by the page's native scripts."),(0,o.kt)("p",null,"Luckily, Puppeteer and Playwright both have functions for this. In Puppeteer, we use  the ",(0,o.kt)("a",{parentName:"p",href:"https://puppeteer.github.io/puppeteer/docs/puppeteer.page.evaluateonnewdocument/",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.evaluateOnNewDocument()"))," function, while in Playwright we use ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page#page-add-init-script",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.addInitScript()")),". We'll use these functions to override the native ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener")," function, setting it to a function that does nothing. This will prevent event listeners from being added to elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.addInitScript(() => {\n    // Override the prototype\n    Node.prototype.addEventListener = () => { /* do nothing */ };\n});\n\nawait page.goto('https://google.com');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.evaluateOnNewDocument(() => {\n    // Override the prototype\n    Node.prototype.addEventListener = null;\n});\n\nawait page.goto('https://google.com');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Go ahead and run this code. Can you click the ",(0,o.kt)("strong",{parentName:"p"},"I accept")," button to accept Google's cookies policy?")),(0,o.kt)("h2",{id:"-exposing-functions"},(0,o.kt)("a",{parentName:"h2",href:"#exposing-functions",target:null,rel:null})," Exposing functions"),(0,o.kt)("p",null,"Here's a super awesome function we've created called ",(0,o.kt)("inlineCode",{parentName:"p"},"returnMessage()"),", which simply returns the string ",(0,o.kt)("strong",{parentName:"p"},"Apify academy!"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const returnMessage = () => 'Apify academy!';\n")),(0,o.kt)("p",null,"We want to ",(0,o.kt)("strong",{parentName:"p"},"expose")," this function to our loaded page so that it can be later executed there, which can be done with ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page#page-expose-function",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.exposeFunction()")),". This will make ",(0,o.kt)("inlineCode",{parentName:"p"},"returnMessage()")," available when running scripts not only inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()"),", but also directly from DevTools."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\nconst returnMessage = () => 'Apify academy!';\n\nawait page.exposeFunction(returnMessage.name, returnMessage);\n\nconst msg = await page.evaluate(() => returnMessage());\n\nconsole.log(msg);\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\nconst returnMessage = () => 'Apify academy!';\n\nawait page.exposeFunction(returnMessage.name, returnMessage);\n\nconst msg = await page.evaluate(() => returnMessage());\n\nconsole.log(msg);\n\nawait page.waitForTimeout(20000);\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"Next, we'll be learning a bit about how to collect data using Playwright/Puppeteer. There are two main ways to do this, so ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/executing-scripts/collecting-data",target:null,rel:null},"next exciting lesson")," will be about both of them!"))}d.isMDXComponent=!0}}]);