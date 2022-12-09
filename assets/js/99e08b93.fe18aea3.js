"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3766],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],p={title:"V - Using proxies",description:"Understand how to use proxies in your Puppeteer and Playwright requests, as well as a couple of the most common use cases for proxies.",sidebar_position:2.5,slug:"/puppeteer-playwright/proxies"},i="[](#using-proxies) Using proxies",l={unversionedId:"puppeteer_playwright/proxies",id:"puppeteer_playwright/proxies",title:"V - Using proxies",description:"Understand how to use proxies in your Puppeteer and Playwright requests, as well as a couple of the most common use cases for proxies.",source:"@site/sources/academy/puppeteer_playwright/proxies.md",sourceDirName:"puppeteer_playwright",slug:"/puppeteer-playwright/proxies",permalink:"/academy/puppeteer-playwright/proxies",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1670582752,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:2.5,frontMatter:{title:"V - Using proxies",description:"Understand how to use proxies in your Puppeteer and Playwright requests, as well as a couple of the most common use cases for proxies.",sidebar_position:2.5,slug:"/puppeteer-playwright/proxies"},sidebar:"defaultSidebar",previous:{title:"IV - Reading & intercepting requests",permalink:"/academy/puppeteer-playwright/reading-intercepting-requests"},next:{title:"VI - Creating multiple browser contexts",permalink:"/academy/puppeteer-playwright/browser-contexts"}},u={},c=[{value:" Adding a proxy",id:"-adding-a-proxy",level:2},{value:" Authenticating a proxy",id:"-authenticating-a-proxy",level:2},{value:" Next up",id:"-next-up",level:2}],m={toc:c};function d(e){var t=e.components,p=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-using-proxies"},(0,o.kt)("a",{parentName:"h1",href:"#using-proxies",target:null,rel:null})," Using proxies"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/academy/anti-scraping/mitigation/proxies",target:null,rel:null},"Proxies")," restrictions. For example your favorite TV show might not be available on Netflix in your country, but it might be available for Vietnamese Netflix watchers."),(0,o.kt)("p",null,"In this lesson, we'll be learning how to use proxies with Playwright and Puppeteer. This will be demonstrated with a Vietnamese proxy that we got by running ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/mstephen190/proxy-scraper",target:"_blank",rel:"noopener"},"this")," proxy-scraping actor on the Apify platform."),(0,o.kt)("h2",{id:"-adding-a-proxy"},(0,o.kt)("a",{parentName:"h2",href:"#adding-a-proxy",target:null,rel:null})," Adding a proxy"),(0,o.kt)("p",null,"First, let's add our familiar boilerplate code for visiting Google and also create a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy")," which will point to our proxy server:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that this proxy may no longer be working at the time of reading. If you don't have a proxy to use during this lesson, we recommend using Proxy Scraper for a list of free ones, or checking out ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify proxy"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\n// our proxy server\nconst proxy = '103.214.9.13:3128';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\n// our proxy server\nconst proxy = '103.214.9.13:3128';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("p",null,"For both Puppeteer and Playwright, the proxy server's URL should be passed into the options of the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch()")," function; however, it's done a bit differently depending on which library you're using."),(0,o.kt)("p",null,"In Puppeteer, the server must be passed within the ",(0,o.kt)("strong",{parentName:"p"},"--proxy-server")," ",(0,o.kt)("a",{parentName:"p",href:"https://peter.sh/experiments/chromium-command-line-switches/",target:"_blank",rel:"noopener"},"Chromium command line argument"),", while in Playwright, it can be passed into the ",(0,o.kt)("strong",{parentName:"p"},"proxy")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Playwright" lang="javascript">\nimport { chromium } from \'playwright\';\n\nconst proxy = \'103.214.9.13:3128\';\n\nconst browser = await chromium.launch({\n    headless: false,\n    // Using the "proxy" option\n    proxy: {\n        // Pass in the server URL\n        server: proxy,\n        \n    },\n});\nconst page = await browser.newPage();\nawait page.goto(\'https://google.com\');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n</marked-tab>\n<marked-tab header="Puppeteer" lang="javascript">\nimport puppeteer from \'puppeteer\';\n\nconst proxy = \'103.214.9.13:3128\';\n\n// Using the "args" option, which is an array of Chromium command\n// line switches, we pass the server URL in with "--proxy-server"\nconst browser = await puppeteer.launch({\n    headless: false,\n    args: [`--proxy-server=${proxy}`]\n});\nconst page = await browser.newPage();\nawait page.goto(\'https://google.com\');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n</marked-tab>\n')),(0,o.kt)("p",null,"And that's it! Now, when we visit Google, it's in Vietnamese. Depending on the country of your proxy, the language will vary."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Vietnamese Google",src:r(11515).Z,width:"1610",height:"1374"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that in order to rotate through multiple proxies, you must retire a browser instance then create a new one to continue automating with a new proxy.")),(0,o.kt)("h2",{id:"-authenticating-a-proxy"},(0,o.kt)("a",{parentName:"h2",href:"#authenticating-a-proxy",target:null,rel:null})," Authenticating a proxy"),(0,o.kt)("p",null,"The proxy in the last activity didn't require a username and password, but let's say that this one does:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"my.proxy.com:3001\n")),(0,o.kt)("p",null,"One might automatically assume that this would be the solution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\n// This code is wrong!\nimport { chromium } from 'playwright';\n\nconst proxy = 'my.proxy.com:3001';\nconst username = 'someUsername';\nconst password = 'password123';\n\nconst browser = await chromium.launch({\n    headless: false,\n    proxy: {\n        server: `http://${username}:${password}@${proxy}`,\n        \n    },\n});\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\n// This code is wrong!\nimport puppeteer from 'puppeteer';\n\nconst proxy = 'my.proxy.com:3001';\nconst username = 'someUsername';\nconst password = 'password123';\n\nconst browser = await puppeteer.launch({\n    headless: false,\n    args: [`--proxy-server=http://${username}:${password}@${proxy}`],\n});\n</marked-tab>\n")),(0,o.kt)("p",null,"However, authentication parameters need to be passed in separately in order to work. In Puppeteer, the username and password need to passed into thee ",(0,o.kt)("inlineCode",{parentName:"p"},"page.authenticate()")," prior to any navigations being made, while in Playwright they just need to be passed into the ",(0,o.kt)("strong",{parentName:"p"},"proxy")," option object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\nconst proxy = 'my.proxy.com:3001';\nconst username = 'someUsername';\nconst password = 'password123';\n\nconst browser = await chromium.launch({\n    headless: false,\n    proxy: {\n        server: proxy,\n        username,\n        password,\n    },\n});\n// Proxy will now be authenticated\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\nconst proxy = 'my.proxy.com:3001';\nconst username = 'someUsername';\nconst password = 'password123';\n\nconst browser = await puppeteer.launch({\n    headless: false,\n    args: [`--proxy-server=${proxy}`],\n});\n\nconst page = await browser.newPage();\n\nawait page.authenticate({ username, password });\n// Proxy will now be authenticated\n</marked-tab>\n")),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"You already know how to launch a browser with various configurations, which means you're ready to ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/browser-contexts",target:null,rel:null},"learn about browser contexts"),". Browser contexts can be used to automate multiple sessions at once with completely different configurations. You'll also learn how to emulate different devices, such as iPhones, iPads, and Androids."))}d.isMDXComponent=!0},11515:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vietnamese-google-deeea33e23794c5aad6a28d8de4ce7c0.webp"}}]);