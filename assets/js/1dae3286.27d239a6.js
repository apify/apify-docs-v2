"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||g[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"III - Executing scripts",description:"Understand the two different contexts which your code can be run in, and how to run custom scripts in the context of the browser.",sidebar_position:2.3,slug:"/puppeteer-playwright/executing-scripts"},p="[](#executing-scripts) Executing scripts",l={unversionedId:"puppeteer_playwright/executing_scripts/index",id:"puppeteer_playwright/executing_scripts/index",title:"III - Executing scripts",description:"Understand the two different contexts which your code can be run in, and how to run custom scripts in the context of the browser.",source:"@site/sources/academy/puppeteer_playwright/executing_scripts/index.md",sourceDirName:"puppeteer_playwright/executing_scripts",slug:"/puppeteer-playwright/executing-scripts",permalink:"/academy/puppeteer-playwright/executing-scripts",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671536597,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:2.3,frontMatter:{title:"III - Executing scripts",description:"Understand the two different contexts which your code can be run in, and how to run custom scripts in the context of the browser.",sidebar_position:2.3,slug:"/puppeteer-playwright/executing-scripts"},sidebar:"defaultSidebar",previous:{title:"Page methods",permalink:"/academy/puppeteer-playwright/page/page-methods"},next:{title:"Injecting scripts",permalink:"/academy/puppeteer-playwright/executing-scripts/injecting-code"}},c={},u=[{value:" Running code in the context of the browser",id:"-running-code-in-the-context-of-the-browser",level:2},{value:" Using variables in <code>page.evaluate()</code>",id:"-using-variables-in-pageevaluate",level:2},{value:" Next up",id:"-next-up",level:2}],g={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-executing-scripts"},(0,o.kt)("a",{parentName:"h1",href:"#executing-scripts",target:null,rel:null})," Executing scripts"),(0,o.kt)("p",null,"An important concept to understand when dealing with headless browsers is the ",(0,o.kt)("strong",{parentName:"p"},"context")," in which your code is being run. For example, if you try to use the native ",(0,o.kt)("inlineCode",{parentName:"p"},"fs")," Node.js module (used in the previous lesson) while running code in the context of the browser, errors will be thrown saying that it is undefined. Similarly, if you are trying to use ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," or other browser-specific functions in the server-side Node.js context, errors will also be thrown."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Diagram explaining the two different contexts your code can be run in",src:n(48223).Z,width:"3178",height:"1329"}),";"),(0,o.kt)("p",null,"Here is an example of a common mistake made by beginners to Puppeteer/Playwright:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// This code is incorrect!\nimport { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\n// visit google\nawait page.goto('https://google.com/');\n\n// change background to green\ndocument.body.style.background = 'green';\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n")),(0,o.kt)("p",null,"When we try and run this, we get this error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"ReferenceError: document is not defined\n")),(0,o.kt)("p",null,"The reason this is happening is because we're trying to run browser-side code on the server-side where it is not supported. ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"document"))," is a property of the browser ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"Window"))," instance that holds the rendered website; therefore, this API is not available in Node.js. So how are we supposed to run code within the context of the browser?"),(0,o.kt)("h2",{id:"-running-code-in-the-context-of-the-browser"},(0,o.kt)("a",{parentName:"h2",href:"#running-in-browser-context",target:null,rel:null})," Running code in the context of the browser"),(0,o.kt)("p",null,"We will use ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()")," to run our code in the browser. This method takes a callback as its first parameter, which will be executed within the browser."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\nawait page.evaluate(() => {\n    document.body.style.background = 'green';\n});\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\nawait page.evaluate(() => {\n    document.body.style.background = 'green';\n});\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("p",null,"Here's what we see in the automated browser when we run this code:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google with the background color changed to green",src:n(62552).Z,width:"1636",height:"1198"})),(0,o.kt)("h2",{id:"-using-variables-in-pageevaluate"},(0,o.kt)("a",{parentName:"h2",href:"#using-variables-in-page-evaluate",target:null,rel:null})," Using variables in ",(0,o.kt)("inlineCode",{parentName:"h2"},"page.evaluate()")),(0,o.kt)("p",null,"Within our code, we generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"randomString")," in the Node.js context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const randomString = Math.random().toString(36).slice(2);\n")),(0,o.kt)("p",null,"Now, let's say we want to change the title of the document to be this random string. In order to use this ",(0,o.kt)("inlineCode",{parentName:"p"},"randomString")," variable in the callback of our ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()"),", we'll have to pass in a second parameter containing the variable."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It's best practice to make this second parameter an object, as you are usually passing more than one value in.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\nconst randomString = Math.random().toString(36).slice(2);\n\nawait page.evaluate(({ randomString }) => {\n    document.querySelector('title').textContent = randomString;\n}, { randomString });\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\nconst randomString = Math.random().toString(36).slice(2);\n\nawait page.evaluate(({ randomString }) => {\n    document.querySelector('title').textContent = randomString;\n}, { randomString });\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("p",null,"Now, when we run this code, we can see the title change on the page's tab:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google with the background color changed to green",src:n(24269).Z,width:"490",height:"148"})),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/executing-scripts/injecting-code",target:null,rel:null},"next lesson")," will be a short one discussing two different ways of executing scripts on a page."))}d.isMDXComponent=!0},48223:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/context-diagram-f9dce330596f0089d8f1f7b3755b3b01.webp"},62552:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/green-google-4601a729290b8005b22f8b1a7816b5b1.webp"},24269:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/webp;base64,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"}}]);