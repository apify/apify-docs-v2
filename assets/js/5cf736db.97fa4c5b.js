"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,w=h["".concat(p,".").concat(u)]||h[u]||d[u]||o;return n?r.createElement(w,s(s({ref:t},c),{},{components:n})):r.createElement(w,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"VI - Creating multiple browser contexts",description:"Learn what a browser context is, how to create one, how to emulate devices, and how to use browser contexts to automate multiple sessions at one time.",sidebar_position:2.6,slug:"/puppeteer-playwright/browser-contexts"},p="[](#creating-browser-contexts) Creating multiple browser contexts",l={unversionedId:"puppeteer_playwright/browser_contexts",id:"puppeteer_playwright/browser_contexts",title:"VI - Creating multiple browser contexts",description:"Learn what a browser context is, how to create one, how to emulate devices, and how to use browser contexts to automate multiple sessions at one time.",source:"@site/sources/academy/puppeteer_playwright/browser_contexts.md",sourceDirName:"puppeteer_playwright",slug:"/puppeteer-playwright/browser-contexts",permalink:"/academy/puppeteer-playwright/browser-contexts",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673002241,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:2.6,frontMatter:{title:"VI - Creating multiple browser contexts",description:"Learn what a browser context is, how to create one, how to emulate devices, and how to use browser contexts to automate multiple sessions at one time.",sidebar_position:2.6,slug:"/puppeteer-playwright/browser-contexts"},sidebar:"defaultSidebar",previous:{title:"V - Using proxies",permalink:"/academy/puppeteer-playwright/proxies"},next:{title:"Common use cases",permalink:"/academy/puppeteer-playwright/common-use-cases"}},c={},d=[{value:" Persistent vs non-persistent browser contexts",id:"-persistent-vs-non-persistent-browser-contexts",level:2},{value:" Using browser contexts",id:"-using-browser-contexts",level:2},{value:" Accessing browser contexts",id:"-accessing-browser-contexts",level:2},{value:"Wrap up",id:"wrap-up",level:2}],h={toc:d};function u(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-creating-multiple-browser-contexts"},(0,o.kt)("a",{parentName:"h1",href:"#creating-browser-contexts",target:null,rel:null})," Creating multiple browser contexts"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn what a browser context is, how to create one, how to emulate devices, and how to use browser contexts to automate multiple sessions at one time.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsercontext",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"BrowserContext"))," is an isolated incognito session within a ",(0,o.kt)("strong",{parentName:"p"},"Browser")," instance. This means that contexts can have different device/screen size configurations, different language and color scheme settings, etc. It is useful to use multiple browser instances when dealing with automating logging into multiple accounts simultaneously (therefore requiring multiple sessions), or in any cases where multiple sessions are required."),(0,o.kt)("p",null,"When we create a ",(0,o.kt)("strong",{parentName:"p"},"Browser")," object by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch()")," function, a single ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/browser-contexts",target:"_blank",rel:"noopener"},"browser context")," is automatically created. In order to create more, we use the ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browser#browser-new-context",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"browser.newContext()"))," function in Playwright, and ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v14.1.0&show=api-browsercreateincognitobrowsercontextoptions",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"browser.createIncognitoBrowserContext"))," in Puppeteer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Playwright" lang="javascript">\nconst myNewContext = await browser.newContext();\n</marked-tab>\n<marked-tab header="Puppeteer" lang="javascript">\nconst myNewContext = await browser.createIncognitoBrowserContext();\n</marked-tab>\n')),(0,o.kt)("h2",{id:"-persistent-vs-non-persistent-browser-contexts"},(0,o.kt)("a",{parentName:"h2",href:"#persistent-vs-non-persistent",target:null,rel:null})," Persistent vs non-persistent browser contexts"),(0,o.kt)("p",null,"In both examples above, we are creating a new ",(0,o.kt)("strong",{parentName:"p"},"non-persistent")," browser context, which means that once it closes, all of its cookies, cache, etc. will be lost. For some cases, that's okay, but in most situations the performance hit from this is too large. This is why we have ",(0,o.kt)("strong",{parentName:"p"},"persistent")," browser contexts. Persistent browser contexts open up a bit slower and they store all their cache, cookies, session storage, and local storage in a file on disk."),(0,o.kt)("p",null,"In Puppeteer, the ",(0,o.kt)("strong",{parentName:"p"},"default")," browser context is the persistent one, while in Playwright we have to use use ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype#browser-type-launch-persistent-context",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"BrowserType.launchPersistentContext()"))," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserType.launch()")," in order for the default context to be persistent."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Playwright" lang="javascript">\nimport { chromium } from \'playwright\';\n\n// Here, we launch a persistent browser context. The first\n// argument is the location to store the data.\nconst browser = await chromium.launchPersistentContext(\'./persistent-context\', { headless: false });\n\nconst page = await browser.newPage();\n\nawait browser.close();\n</marked-tab>\n<marked-tab header="Puppeteer" lang="javascript">\nimport puppeteer from \'puppeteer\';\n\nconst browser = await puppeteer.launch({ headless: false });\n\n// This page will be under the default context, which is persistent.\n// Cache, cookies, etc. will be stored on disk and persisted\nconst page = await browser.newPage();\n\nawait browser.close();\n</marked-tab>\n')),(0,o.kt)("h2",{id:"-using-browser-contexts"},(0,o.kt)("a",{parentName:"h2",href:"#using-browser-contexts",target:null,rel:null})," Using browser contexts"),(0,o.kt)("p",null,"In both Playwright and Puppeteer, various devices (iPhones, iPads, Androids, etc.) can be emulated by using ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-playwright#playwright-devices",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"playwright.devices"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v14.1.0&show=api-puppeteerdevices",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"puppeteer.devices")),". We'll be using this to create two different browser contexts, one emulating an iPhone, and one emulating an Android:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium, devices } from 'playwright';\n\n// Launch the browser\nconst browser = await chromium.launch({ headless: false });\n\nconst iPhone = devices['iPhone 11 Pro'];\n// Create a new context for our iPhone emulation\nconst iPhoneContext = await browser.newContext({ ...iPhone });\n// Open a page on the newly created iPhone context\nconst iPhonePage = await iPhoneContext.newPage();\n\nconst android = devices['Galaxy Note 3'];\n// Create a new context for our Android emulation\nconst androidContext = await browser.newContext({ ...android });\n// Open a page on the newly created Android context\nconst androidPage = await androidContext.newPage();\n\n// The code in the next step will go here\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\n// Launch the browser\nconst browser = await puppeteer.launch({ headless: false });\n\nconst iPhone = puppeteer.devices['iPhone 11 Pro'];\n// Create a new context for our iPhone emulation\nconst iPhoneContext = await browser.createIncognitoBrowserContext();\n// Open a page on the newly created iPhone context\nconst iPhonePage = await iPhoneContext.newPage();\n// Emulate the device\nawait iPhonePage.emulate(iPhone);\n\nconst android = puppeteer.devices['Galaxy Note 3'];\n// Create a new context for our Android emulation\nconst androidContext = await browser.createIncognitoBrowserContext();\n// Open a page on the newly created Android context\nconst androidPage = await androidContext.newPage();\n// Emulate the device\nawait androidPage.emulate(android);\n\n// The code in the next step will go here\n\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("p",null,"Then, we'll make both ",(0,o.kt)("inlineCode",{parentName:"p"},"iPhonePage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"androidPage")," visit ",(0,o.kt)("a",{parentName:"p",href:"https://www.deviceinfo.me/",target:"_blank",rel:"noopener"},"deviceinfo.me"),", which is a website that  displays the type of device you have, the operating system you're using, and more device and location-specific information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Go to deviceinfo.me on both at the same time\nawait Promise.all([iPhonePage.goto('https://www.deviceinfo.me/'), androidPage.goto('https://www.deviceinfo.me/')]);\n\n// Wait for 10 seconds on both before shutting down\nawait Promise.all([iPhonePage.waitForTimeout(10000), androidPage.waitForTimeout(10000)]);\n")),(0,o.kt)("p",null,"Let's go ahead and run our code and analyze the data on each ",(0,o.kt)("strong",{parentName:"p"},"deviceinfo.me")," page. Here's what we see:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"deviceinfo.me results for both browser contexts",src:n(70718).Z,width:"1401",height:"1002"})),(0,o.kt)("p",null,"We see that ",(0,o.kt)("strong",{parentName:"p"},"deviceinfo.me")," detects both contexts as using different devices, despite the fact they're visiting the same page at the same time.  This shows firsthand that different browser contexts can have totally different configurations, as they all have separate sessions."),(0,o.kt)("h2",{id:"-accessing-browser-contexts"},(0,o.kt)("a",{parentName:"h2",href:"#accessing-browser-contexts",target:null,rel:null})," Accessing browser contexts"),(0,o.kt)("p",null,"When working with multiple browser contexts, it can be difficult to keep track of all of them and repetitive when making changes to all of them. This is why the ",(0,o.kt)("strong",{parentName:"p"},"Browser")," instance returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch()")," function also has a ",(0,o.kt)("inlineCode",{parentName:"p"},"contexts()")," function (",(0,o.kt)("inlineCode",{parentName:"p"},"browserContexts()")," in Puppeteer). This function returns an array of all the contexts that are currently attached to the browser."),(0,o.kt)("p",null,"Let's go ahead and use this function to loop through all of our browser contexts and make them log ",(0,o.kt)("strong",{parentName:"p"},"Site visited")," to the console whenever the website is visited:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Playwright" lang="javascript">\nfor (const context of browser.contexts()) {\n    // In Playwright, lots of events are supported in the "on" function of\n    // a BrowserContext instance\n    context.on(\'request\', (req) => req.url() === \'https://www.deviceinfo.me/\' && console.log(\'Site visited\'));\n}\n</marked-tab>\n<marked-tab header="Puppeteer" lang="javascript">\nfor (const context of browser.browserContexts()) {\n    // In Puppeteer, only three events are supported in the "on" function\n    // of a BrowserContext instance\n    context.on(\'targetchanged\', () => console.log(\'Site visited\'));\n}\n</marked-tab>\n')),(0,o.kt)("p",null,"After adding this above our ",(0,o.kt)("inlineCode",{parentName:"p"},"page.goto"),"s and running the code once again, we see this logged to the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Site visited\nSite visited\n")),(0,o.kt)("p",null,"Cool! So we've modified both our ",(0,o.kt)("inlineCode",{parentName:"p"},"iPhoneContext")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"androidContext"),", as well as our default context, to log the message."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the Puppeteer code and Playwright code are slightly different in the examples above. The Playwright code will log ",(0,o.kt)("strong",{parentName:"p"},"Site visited")," any time the specific URL is visited, while the Puppeteer code will log any time the target URL is changed to anything.")),(0,o.kt)("p",null,"Finally, in Puppeteer, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"browser.defaultBrowserContext()")," function to grab hold of the default context at any point."),(0,o.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,o.kt)("p",null,"So far in this course, you've learned how to launch a browser, open a page, run scripts on a page, collect data from a page, intercept requests made on the page, use proxies, and use multiple browser contexts. Stay tuned for new lessons!"))}u.isMDXComponent=!0},70718:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dual-contexts-1cf77aac6062264d0ba205af600f5c5a.jpg"}}]);